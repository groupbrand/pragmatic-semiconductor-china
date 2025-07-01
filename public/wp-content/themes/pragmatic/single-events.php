<?php
get_header();

while (have_posts()) {
    the_post();

    $featured_image_id = get_post_thumbnail_id(get_the_ID());

    $primary_term =  \Theme\Utils::get_post_primary_term_name('event_categories', get_the_ID());
    $external_url_link = get_post_meta(get_the_ID(), 'external_url_link', true);

    $actual_date = get_field('actual_date');
    $now_date = date('Ymd');
    $item_date = get_field('display_date');
    $item_time = get_field('display_time');
    $location = get_field('location');
    $duration = get_field('duration');
    $registration_form_heading = get_field('registration_form_heading');

    $include_event_registration_form = get_field('include_event_registration_form');
    $events_registration_form_script = get_field('events_registration_form_script', 'options');
    $events_registration_form_heading = get_field('events_registration_form_heading', 'options');

    $event_meeting_scheduling_script = get_field('event_meeting_scheduling_script');



    $active_event = true;
    if ($actual_date < $now_date) {
        $active_event = false;
    }

    // Add event name to script
    $events_registration_form_script = str_replace('{{event_name}}', get_the_title(), $events_registration_form_script);


    // Override default heading
    if ($registration_form_heading) {
        $events_registration_form_heading = $registration_form_heading;
    }


    $category_tag = '';
    if ($primary_term) {
        $category_tag = '<div class="card-tag card-tag--mb">' . $primary_term . '</div>';
    }
?>

    <section class="panel content content__post-article bgc-floral-white">


        <div class="summary-box summary-box--event">

            <?php echo $category_tag; ?>


            <?php if ($item_date) { ?>
                <h3 class="label">Date</h3>
                <p class="summary-details"><?php echo $item_date; ?></p>
            <?php } ?>

            <?php if ($item_time) { ?>
                <h3 class="label">Time</h3>
                <p class="summary-details"><?php echo $item_time; ?></p>
            <?php } ?>

            <?php if ($location) { ?>
                <h3 class="label">Location</h3>
                <p class="summary-details"><?php echo $location; ?></p>
            <?php } ?>

            <?php if ($duration) { ?>
                <h3 class="label">Duration</h3>
                <p class="summary-details"><?php echo $duration; ?></p>
            <?php } ?>

            <h3 class="label">Share</h3>
            <?php echo \Theme\Utils::share_article(get_the_ID()); ?>


            <a href="/news-events/events/" class="back-container">
                <div class="back-container__col1">
                    <div class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-left"></div>
                </div>
                <div class="back-container__col2">Back to events</div>
            </a>

        </div>
        <div class="container">

            <div class="article-container">
                <div class="article-container__col1">
                </div>


                <div class="article-container__col2">

                    <div class="article">
                        <h1 class="article-heading"><?php echo get_the_title(); ?></h1>

                        <?php if ($featured_image_id) { ?>
                            <div class="article__featured-image article__featured-image--event">
                                <?php echo \Theme\Utils::get_image_html($featured_image_id); ?>
                            </div>
                        <?php } ?>

                        <div class="wysiwyg-container">
                            <?php echo the_content(); ?>
                        </div>

                        <?php if ($include_event_registration_form && $active_event) {
                            echo '<div class="registration-form-container">';
                            echo '<h3 class="subheading">' . $events_registration_form_heading . '</h3>';
                            echo $events_registration_form_script;
                            echo '</div>';
                        }


                        if ($event_meeting_scheduling_script && $active_event) {
                            echo '<div class="scheduling-container">';
                            echo $event_meeting_scheduling_script;
                            echo '</div>';
                        }

                        ?>



                    </div>
                </div>

            </div>

        </div>

    </section>

    <?php
    // Render Upcoming events promo Panel Block
    $content = '';
    $block = acf_get_block_type('acf/events-upcoming-promo-panel');
    $block['data']['heading'] = 'Forthcoming events';
    $block['data']['generic_block_settings']['hide_panel'] = false;
    $block['data']['generic_block_settings']['background_colour'] = 'pale-yellow';
    $block['data']['generic_block_settings']['inset_panel'] = 'yes';
    $block['data']['generic_block_settings']['inset_radius'] = 'default';

    echo acf_rendered_block($block, $content, false);
    ?>

<?php



}


get_footer();
