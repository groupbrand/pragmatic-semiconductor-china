<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';


$meta_heading = get_field('meta_heading');
$page_heading = get_field('page_heading');
$introduction = get_field('introduction');
$right_col_heading = get_field('right_col_heading');
$right_col_link = get_field('right_col_link');
$news_article = get_field('news_article');

$static_translations = get_field('static_translations', 'options');

$post_min_read = get_field('post_min_read', 'options');
$post_read_button = get_field('post_read_button', 'options');

if ($news_article) {

    // New Post Info
    $item_date = get_the_date('j. M. Y', $news_article);
    $external_url_link = get_post_meta($news_article->ID, 'external_url_link', true);
    $heading = \Theme\Utils::getTrimmedHeading($news_article->post_title);
    $mins_read = get_post_meta($news_article->ID, 'mins_read', true);
    $summary = $news_article->post_excerpt;
    $image = get_post_thumbnail_id($news_article->ID);
    $url = get_the_permalink($news_article->ID);
    $primary_term =  \Theme\Utils::get_post_primary_term_name('category', $news_article->ID);

    $button_icon_class = ' buttonV2--icon--small--arrow-right ';
    $target = '';
    if ($external_url_link) {
        $url = $external_url_link;
        $button_icon_class = 'buttonV2--icon--small--external-link ';
        $target = ' target="_blank" rel="noopener noreferrer" ';
    } else {
        $url = get_the_permalink($news_article->ID);
    }

    $category_tag = '';
    if ($primary_term) {
        $category_tag = '<div class="card-tag">' . $primary_term . '</div>';
    }
}

if (!$is_preview && $news_article) {

?>

    <section class="panel content content__news-promo-hero-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container animate fade-in">

            <h2 class="meta-heading"><?php echo $meta_heading; ?></h2>
            <h1 class="page-hero-title"><?php echo $page_heading; ?></h1>
            <p class="hero-introduction"><?php echo $introduction; ?></p>

            <div class="content-container animate slide-right scrolled">
                <div class="content-container__col1">
                    <?php

                    echo '<div class="news-item-container--landscape">'

                        . '<div class="content-container">'
                        . '<div class="data-container">'
                        . '<div class="data-container__col1"><p class="card-details">' . $item_date . '</p><p class="card-details">' . $mins_read . ' ' . \Theme\Utils::get_static_translation('min read') . '</p></div>'
                        . '<div class="data-container__col2">' . $category_tag . '</div>'
                        . '</div>'
                        . '<a ' . $target . ' href="' . $url . '">'
                        . '<h3 class="card-title">' . \Theme\Utils::getTrimmedHeading($heading) . '</h3>'
                        . '</a>'
                        . '</div>'

                        . '<div class="image-container">';

                    if ($image) {
                        echo \Theme\Utils::get_image_html($image);
                    } else {
                        echo '<div class="default-image"></div>';
                    }

                    echo '<a ' . $target . 'class="buttonV2 buttonV2--icon buttonV2--icon--small ' . $button_icon_class . ' buttonV2--yellow-black" href="' . $url . '">' . \Theme\Utils::get_static_translation('Read') . '</a>'
                        . '</div>'

                        . '</div>'

                    ?>
                </div>
                <div class="content-container__col2">


                    <?php if ($right_col_link) {
                        $link_url = $right_col_link['link_url'];
                        $link_page = $right_col_link['link_page'];
                        $link = \Theme\Utils::get_link_url($link_url, $link_page);

                        echo '<a href=' . $link . '><h5>' . $right_col_heading . '</h5></a>';
                        echo '<a href=' . $link . ' class="circle-buttonV2 circle-button--responsiveV2 circle-buttonV2--arrow-right circle-buttonV2--pale-yellow-back-black-border-solid-black-hover"></a>';
                    }
                    ?>
                </div>
            </div>

        </div>

    </section>

<?php
}
?>