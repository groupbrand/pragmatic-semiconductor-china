<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $page_heading = get_field('page_heading');
    $detail_image = get_field('detail_image');
    $detail_images = get_field('detail_images');

    // Set in block-generics above - This changes the pattern in column 2 to the dots.
    $background_colour = (isset($generic_block_settings['background_colour']) ? $generic_block_settings['background_colour'] : '');

    $dots_obj = '';
    if ($background_colour == 'charcoal-grey') {
        $dots_obj = '<div class="bg-dots"></div>';
    }

    $no_image = '';
    if (!$detail_image && !$detail_images) {
        $no_image = ' no-image';
    }


?>

    <section class="content content__internal-hero-image-panel <?php echo $generic_block_settings_classes; ?> animate fade-in">

        <?php echo $dots_obj; ?>
        <div class="container">

            <div class="content-container <?php echo $no_image; ?>">

                <div class="content-container__col1">

                    <?php if (!empty($meta_heading)) { ?>
                        <h1 class="meta-heading animate fade-up scrolled"><?php echo $meta_heading; ?></h1>
                    <?php } ?>
                    <h2 class="page-hero-title"><?php echo $page_heading; ?></h2>

                </div>

                <div class="content-container__col2">
                </div>

            </div>

            <?php
            if ($detail_image) {

                echo '<div class="image-container">';
                echo '<div class="container">';
                echo '<div class="margin-spacer-container">';
                echo '<div class="image-inner-container">';
                echo \Theme\Utils::get_image_html($detail_image);
                echo '</div>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
            } else if ($detail_images) {
                $slides_html = '';
                foreach ($detail_images as $slide) {

                    $desktop_image = $slide['detail_image'];

                    $slides_html .= '<div class="internal-hero-slider__slide">';
                    $slides_html .= \Theme\Utils::get_image_html($desktop_image);
                    $slides_html .= '</div>';
                } ?>

                <div class="image-container">
                    <div class="container">
                        <div class="margin-spacer-container">
                            <div class="image-inner-container">

                                <div class="internal-hero-slider">
                                    <div class="internal-hero-slider__slides-wrapper">
                                        <div class="internal-hero-slider__slides">
                                            <?php echo $slides_html ?>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            <?php
            }

            ?>

            <div class="overlay-panel"></div>

    </section>



<?php } ?>