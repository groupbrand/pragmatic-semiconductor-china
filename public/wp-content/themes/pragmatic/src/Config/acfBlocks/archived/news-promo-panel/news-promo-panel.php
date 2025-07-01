<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $service_filter = get_field('service_filter');
    $news_items = get_latest_posts(false, 'post', ($service_filter == false ? 0 : $service_filter));

    $display_center_class = "";
    if (count($news_items) < 3) {
        $display_center_class = 'news-container--center';
    }


    if (count($news_items) > 0) {
?>

        <section class="content content__news-promo-panel <?php echo $generic_block_settings_classes; ?>">

            <div class="container container--narrow animate fade-in">
                <h2 class="large left-bar"><span>related</span> news</h2>
            </div>

            <div class="news-container <?php echo $display_center_class; ?> animate fade-in">
                <?php

                foreach ($news_items as $news_item) {

                    $featured_image_id = get_post_thumbnail_id($news_item->ID);
                    $featured_image_html = ($featured_image_id ? get_image_html($featured_image_id) : '');

                    echo '<div class="news-container__col">';
                    echo '<a href="' . get_permalink($news_item->ID) . '">';
                    echo '<div class="post-panel">';
                    echo '<div class="image-container">';
                    echo $featured_image_html;
                    echo '</div>';
                    echo '<div class="content-title-container">';
                    echo '<h2>' . $news_item->post_title . '</h2>';
                    echo '<a class="link link--no-hover" href="' . get_permalink($news_item->ID) . '">view article</a>';
                    echo '</div>';
                    echo '</div>';
                    echo '</a>';
                    echo '</div>';
                }
                ?>

        </section>

<?php
    }
}
?>