<?php

namespace Theme\Config;

use VarRepresentation\Node\Object_;

class RestAPI
{
    public static function init()
    {
        add_filter('rest_api_init', [self::class, 'registerCustomRestFields']);
        add_filter('rest_api_init', [self::class, 'registerCustomRestRoutes']);
        add_filter('rest_prepare_post', [self::class, 'trimHeading'], 10, 3);
        add_filter('rest_prepare_post', [self::class, 'removeTitleHTMLEntities'], 10, 3);
        add_filter('rest_events_collection_params', [self::class, 'filter_add_rest_orderby_params'], 10, 1);
        add_filter('rest_post_query', [self::class, 'filter_post_year_params'], 10, 2);
    }


    public static function registerCustomRestRoutes()
    {
        register_rest_route('wp/v2', '/past_events', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_past_events'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('wp/v2', '/news_years', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_news_years'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('wp/v2', '/site_search', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_site_search'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('wp/v2', '/site_search_popular_search_terms', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_site_search_popular_search_terms'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('wp/v2', '/site_search_quick_links', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_site_search_quick_links'],
            'permission_callback' => '__return_true',
        ));

        register_rest_route('wp/v2', '/site_search_latest_article', array(
            'methods' => 'GET',
            'callback' => [self::class, 'get_site_search_latest_article'],
            'permission_callback' => '__return_true',
        ));
    }



    public static function filter_add_rest_orderby_params($params)
    {

        $params['orderby']['enum'][] = 'event_date';
        $params['orderby']['enum'][] = 'relevance';
        return $params;
    }

    public static function get_site_search_latest_article($request)
    {
        $args = [
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => 1,
        ];

        // Get Total Count
        $result = get_posts($args);

        $article = [];
        foreach ($result as $article_obj) {
            $article['post_title'] = $article_obj->post_title;
            $obj['id'] = $article_obj->ID;
            return array_merge(
                $article,
                self::getPostMinsRead($obj),
                self::getPostDate($obj),
                self::getPostCategory($obj),
                self::getPostLink($obj),
            );
        }
        return json_decode(json_encode($article));
    }

    public static function get_site_search_popular_search_terms($request)
    {

        $popular_search_terms = get_field('popular_searches', 'options');

        $results = [];
        foreach ($popular_search_terms as $term) {
            $results[] = $term['search_term'];
        }
        return json_decode(json_encode($results));
    }

    public static function get_site_search_quick_links($request)
    {

        $quick_links = get_field('quick_links', 'options');

        $results = [];
        foreach ($quick_links as $quick_link) {

            $link = $quick_link['quick_link'];

            if ($link) {
                $button_text = $link['link_text'];
                $external_link = isset($link['external_link']) ? $link['external_link'] : false;
                $link_url = \Theme\Utils::get_link_url($link['link_url'], $link['link_page']);

                // $link_icon_class = 'buttonV2--icon--arrow-right';
                // $external_target = '';
                // if ($external_link) {
                //     $link_icon_class = 'buttonV2--icon--external-link';
                //     $external_target = ' target="_blank" rel="noreferrer noopener" ';
                // }

                $link = [];
                $link['button_text'] = $button_text;
                $link['external_link'] = $external_link;
                $link['link'] = $link_url;
            }
            $results[] = $link;
        }
        return json_decode(json_encode($results));
    }


    public static function get_site_search($request)
    {

        $args = [

            'post_type' => array('post', 'page', 'events'),
            'post_status' => 'publish',
            'posts_per_page' => -1,

        ];

        $keywords = '';
        if ($request->get_param('search')) {
            $keywords = $request->get_param('search');
            $args['s'] = sanitize_text_field(urldecode($keywords));
            //            $args['exact'] = true;
        }

        // Get Total Count
        $results = get_posts($args);
        $total_results = count($results);

        $args['orderby'] = 'relevance';
        $args['order'] = 'ASC';

        $events = get_posts($args);

        // $perPage = 12;
        // if ($request->get_param('per_page')) {
        //     $checkPerPage = $request->get_param('per_page');

        //     if (is_numeric($checkPerPage)) {
        //         $perPage = $request->get_param('per_page');
        //         $args['posts_per_page'] = $perPage;
        //     }
        // }

        // $page = 1;
        // if ($request->get_param('page')) {
        //     $page = $request->get_param('page');

        //     if (is_numeric($page) && $page > 1) {
        //         $args['offset'] = $perPage * ($page - 1);
        //     }
        // }


        $results = get_posts($args);

        foreach ($results as $result) {

            // $obj = new Object();
            $obj['id'] = $result->ID;
            // $event->item_date = get_post_meta($event->ID, 'display_date', true);
            // $event->item_time = get_post_meta($event->ID, 'display_time', true);
            // $event->location = get_post_meta($event->ID, 'location', true);
            // $event->duration = get_post_meta($event->ID, 'duration', true);
            // $event->external_url_link = get_post_meta($event->ID, 'external_url_link', true);
            $result->title = \Theme\Utils::getTrimmedHeading($result->post_title);
            $result->post_link = self::getPostLink($obj);



            $category = '';
            switch ($result->post_type) {
                case 'post':
                    $category = \Theme\Utils::get_post_primary_term_name('category', $result->ID);

                    break;

                case 'events':
                    $category = 'Event';
                    break;
            }

            $result->category = $category;
        }



        $total_pages = 1; //$total_results / $perPage;
        // $remainder = fmod($total_results, $perPage);
        // if ($remainder > 0)
        //     $total_pages += 1;

        // echo $total_pages;
        // die();

        $results[] = array('statsTotal' => $total_results);
        $results[] = array('statsTotalPages' => $total_pages);

        return json_decode(json_encode($results));
    }


    public static function get_past_events($request)
    {

        $args = [
            'post_type' => 'events',
            'post_status' => 'publish',
            'posts_per_page' => -1,
        ];

        $args['meta_key'] = 'actual_date';
        $args['meta_type'] = 'DATE';

        $args['meta_query'] = array(
            array(
                'key' => 'actual_date',
                'value' => date("Ymd"),
                'compare' => '<'
            )
        );

        $catId = 0;
        if ($request->get_param('event_categories')) {
            $catId = $request->get_param('event_categories');

            if (is_numeric($catId)) {
                $args['tax_query'] = array(
                    array(
                        'taxonomy' => 'event_categories',
                        'field' => 'term_id',
                        'terms' => $catId
                    )
                );
            }
        }

        $events = get_posts($args);
        $total_results = count($events);

        $args['orderby'] = 'meta_value_num';
        $args['order'] = 'DESC';

        $events = get_posts($args);



        $perPage = 12;
        if ($request->get_param('per_page')) {
            $checkPerPage = $request->get_param('per_page');

            if (is_numeric($checkPerPage)) {
                $perPage = $request->get_param('per_page');
                $args['posts_per_page'] = $perPage;
            }
        }

        $page = 1;
        if ($request->get_param('page')) {
            $page = $request->get_param('page');

            if (is_numeric($page) && $page > 1) {
                $args['offset'] = $perPage * ($page - 1);
            }
        }


        $events = get_posts($args);

        foreach ($events as $event) {

            // $obj = new Object();
            $obj['id'] = $event->ID;
            $event->item_date = get_post_meta($event->ID, 'display_date', true);
            $event->item_time = get_post_meta($event->ID, 'display_time', true);
            $event->location = get_post_meta($event->ID, 'location', true);
            $event->duration = get_post_meta($event->ID, 'duration', true);
            $event->external_url_link = get_post_meta($event->ID, 'external_url_link', true);
            $event->title = \Theme\Utils::getTrimmedHeading($event->post_title);
            $event->post_link = self::getPostLink($obj);
            $event->category = \Theme\Utils::get_post_primary_term_name('event_categories', $event->ID);
        }



        $total_pages = $total_results / $perPage;
        $remainder = fmod($total_results, $perPage);
        if ($remainder > 0)
            $total_pages += 1;

        // echo $total_pages;
        // die();

        $events[] = array('statsTotal' => $total_results);
        $events[] = array('statsTotalPages' => $total_pages);

        return json_decode(json_encode($events));
    }


    public static function get_news_years($request)
    {

        global $wpdb;
        $result = array();
        $years = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT YEAR(post_date) FROM {$wpdb->posts} WHERE post_status = 'publish' GROUP BY YEAR(post_date) ORDER BY YEAR(post_date) DESC"
            ),
            ARRAY_N
        );
        if (is_array($years) && count($years) > 0) {
            foreach ($years as $year) {
                $result[] = $year[0];
            }
        }
        return json_decode(json_encode($result));
    }


    public static function filter_post_year_params($args, $request)
    {
        $year = $request->get_param('year');

        $args['date_query'] = array(
            array(
                'year'  => $year
            ),
        );
        return $args;
    }



    public static function registerCustomRestFields()
    {
        $post_type_fields = [
            'post' => [
                'custom_fields' => [self::class, 'getPostFields'],
            ]
        ];

        foreach ($post_type_fields as $post_type => $fields) {
            foreach ($fields as $field_name => $function) {
                register_rest_field(
                    $post_type,
                    $field_name,
                    [
                        'get_callback' => $function,
                        'update_callback' => null,
                        'schema' => null
                    ]
                );
            }
        }
    }

    public static function getFeaturedImageSrc(array $object): string|false
    {
        return get_the_post_thumbnail_url($object['id'], 'medium');
    }

    public static function getFeaturedImageSrcset(array $object): string|false
    {
        $image_id = get_post_thumbnail_id($object['id']);
        return ($image_id ? wp_get_attachment_image_srcset($image_id, 'medium') : false);
    }

    public static function getFeaturedImageAlt(array $object): string|false
    {
        $image_id = get_post_thumbnail_id($object['id']);
        return get_post_meta($image_id, '_wp_attachment_image_alt', true);
    }

    public static function getImageFields(array $object): array
    {
        return [
            'featured_image_src' => self::getFeaturedImageSrc($object),
            'featured_image_srcset' => self::getFeaturedImageSrcset($object),
            'featured_image_alt' => self::getFeaturedImageAlt($object),
        ];
    }

    public static function getCustomExcerpt(array $object): array
    {
        return [
            'excerpt' => \Theme\Utils::getExcerpt($object['id'])
        ];
    }

    public static function getPostMinsRead(array $object): array
    {
        return [
            'mins_read' => get_post_meta($object['id'], 'mins_read', true)
        ];
    }

    public static function getPostDate(array $object): array
    {
        return [
            'formatted_date' => get_the_date('j. M. Y', $object['id'])
        ];
    }

    public static function getPostCategory(array $object): array
    {
        return [
            'post_category' => \Theme\Utils::get_post_primary_term_name('category', $object['id'])
        ];
    }

    public static function getPostLink(array $object): array
    {
        $external_link =  get_post_meta($object['id'], 'external_url_link', true);

        $post_link_type = 'internal';
        if ($external_link) {
            $url = $external_link;
            $post_link_type = 'external';
        } else {
            $url = get_the_permalink($object['id']);
        }

        return [
            'post_link' => $url,
            'post_link_type' => $post_link_type,
        ];
    }

    // Events Fields

    public static function getPostFields(array $object): array
    {
        $fields = [];
        return array_merge(
            $fields,
            self::getImageFields($object),
            self::getCustomExcerpt($object),
            self::getPostMinsRead($object),
            self::getPostDate($object),
            self::getPostCategory($object),
            self::getPostLink($object),
        );
    }

    public static function removeTitleHTMLEntities($response, $post)
    {
        if (isset($post)) {
            $response->data['title']['rendered'] = html_entity_decode(
                $response->data['title']['rendered']
            );
        }
        return $response;
    }

    public static function trimHeading($response, $post)
    {
        if (isset($post)) {
            $response->data['title']['rendered'] = \Theme\Utils::getTrimmedHeading($response->data['title']['rendered']);
        }
        return $response;
    }
}
