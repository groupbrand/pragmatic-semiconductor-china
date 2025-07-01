<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $related_posts_panel_block = '';
    $page_blocks = parse_blocks(get_the_content());
    foreach ($page_blocks  as $key => $block) {

        if ($block['blockName'] == 'acf/related-articles-panel') {
            $related_posts_panel_block = $block;
        }
    }

    // echo 'BLOCK<br/>';
    // echo print_r($related_posts_panel_block);
    // echo '<br/><br/>';

    $heading = get_field('heading');
    $selected_articles = get_field('related_articles');

    $news_items = \Theme\Utils::get_latest_posts($selected_articles, 'post', 3);

    $display_center_class = "";
    if (count($news_items) < 3) {
        $display_center_class = 'news-container--center';
    }

    if (count($news_items) > 0) {
?>

        <section class="panel content content__related-articles-panel <?php echo $generic_block_settings_classes; ?>">

            <div class="container">

                <h2 class="section-title-small"><?php echo $heading; ?></h2>

                <?php
                $slides_html = '';
                $flex_slides_html = '';
                $array = [];

                foreach ($news_items as $key => $item) {
                    $slides_html .= '<div class="news-promo-slider__slide">';
                    $slides_html .= \Theme\Utils::get_article_card($item, 'yellow');
                    $slides_html .= '</div>';

                    $flex_slides_html .= '<div class="content-container-flex__col">';
                    $flex_slides_html .= \Theme\Utils::get_article_card($item, 'yellow');
                    $flex_slides_html .= '</div>';
                }
                ?>
                <div class="content-container-outer mobile-only">
                    <div class="news-promo-slider">
                        <div class="news-promo-slider__slides-wrapper">
                            <div class="news-promo-slider__slides">
                                <?php echo $slides_html; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-container-flex desktop-only">
                    <?php echo $slides_html; ?>
                </div>

            </div>

        </section>

<?php
    }
}
?>