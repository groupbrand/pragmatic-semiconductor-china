<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $images = get_field('images');


    $slides_html = '';

    if ($images) {
        foreach ($images as $slide) {

            $desktop_image = $slide['desktop_image'];
            $mobile_image = $slide['mobile_image'];

            if (!$mobile_image) {
                $mobile_image = $desktop_image;
            }

            $slides_html .= '<div class="image-slider__slide">';

            $slides_html .= '<div class="image-desktop">';
            if ($desktop_image) {
                $slides_html .= \Theme\Utils::get_image_html($desktop_image);
            }
            $slides_html .= '</div>';

            $slides_html .= '<div class="image-mobile">';

            if ($mobile_image) {
                $slides_html .= \Theme\Utils::get_image_html($mobile_image);
            }
            $slides_html .= '</div>';


            $slides_html .= '</div>';
        }
    }
?>

    <section class="panel content content__image-slider-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container animate fade-in">

                <div class="image-slider">
                    <div class="image-slider__slides-wrapper">
                        <div class="image-slider__slides">
                            <?php echo $slides_html ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
<?php } ?>