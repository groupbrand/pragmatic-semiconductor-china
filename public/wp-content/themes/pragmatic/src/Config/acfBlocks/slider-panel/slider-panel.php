<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $slides = get_field('slides');

    $three_slides_str = '';
    if (count($slides) <= 3) {
        $three_slides_str = 'three-slides';
    }





    $slides_html = '';

    if ($slides) {
        foreach ($slides as $slide) {
            $slide_title = $slide['slide_title'];
            $slide_description = $slide['slide_description'];

            $slides_html .= '<div class="use-case-slider__slide">';

            $slides_html .= '<div class="title-container">';
            $slides_html .= '<h4>' . $slide_title . '</h4>';
            $slides_html .= '</div>';

            $slides_html .= '<p>' . $slide_description . '</p>';


            $slides_html .= '</div>';
        }
    }
?>

    <section class="panel content content__slider-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container animate fade-in">
                <h2 class="meta-heading"><?php echo $meta_heading; ?></h2>

                <div class="content-container__heading">
                    <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>

                    <div class="use-case-slider__controls <?php echo $three_slides_str; ?>">
                        <div class="use-case-slider__controls__button use-case-slider__controls__button--prev circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-left"></div>
                        <div class="use-case-slider__controls__button use-case-slider__controls__button--next circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right"></div>
                    </div>

                </div>


                <div class="use-case-slider">
                    <div class="use-case-slider__slides-wrapper">
                        <div class="use-case-slider__slides">
                            <?php echo $slides_html ?>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
<?php } ?>