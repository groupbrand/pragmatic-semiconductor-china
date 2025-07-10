<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

$meta_heading = get_field('meta_heading');
$panel_heading = get_field('heading');
$panel_button = get_field('button');


if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $news_items = \Theme\Utils::get_latest_posts(false, 'post');

    $display_center_class = "";
    if (count($news_items) < 3) {
        $display_center_class = 'news-container--center';
    }

    if (count($news_items) > 0) {
?>

        <section class="panel content content__news-promo-panel <?php echo $generic_block_settings_classes; ?>">

            <div class="container">

                <?php
                $slides_html = '';
                $array = [];

                foreach ($news_items as $key => $item) {
                    $slides_html .= '<div class="news-promo-slider__slide">';
                    $slides_html .= \Theme\Utils::get_article_card($item);
                    $slides_html .= '</div>';
                }
                ?>
                <div class="content-container">

                    <div class="content-container__col1">


                        <?php
                        if ($panel_button) {
                            $button_text = $panel_button['link_text'];
                            $link_url = $panel_button['link_url'];
                            $link_page = $panel_button['link_page'];
                            $link = \Theme\Utils::get_link_url($link_url, $link_page);
                        }
                        ?>

                        <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>
                        <h3 class="section-title-small animate fade-up"><?php echo $panel_heading; ?></h3>

                        <?php
                        if ($button_text && $link) {
                            echo '<a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-yellow" href="' . $link . '">' . $button_text . '</a>';
                        }
                        ?>



                        <div class="news-promo-slider__controls">
                            <div class="news-promo-slider__controls__button news-promo-slider__controls__button--prev circle-buttonV2 circle-buttonV2--inline circle-buttonV2--arrow-left"></div>
                            <div class="news-promo-slider__controls__button news-promo-slider__controls__button--next circle-buttonV2 circle-buttonV2--inline circle-buttonV2--arrow-right"></div>
                        </div>


                    </div>

                    <div class="content-container__col2">

                        <div class="news-promo-slider animate slide-right">
                            <div class="news-promo-slider__slides-wrapper">
                                <div class="news-promo-slider__slides">
                                    <?php echo $slides_html; ?>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

<?php
    }
}
?>