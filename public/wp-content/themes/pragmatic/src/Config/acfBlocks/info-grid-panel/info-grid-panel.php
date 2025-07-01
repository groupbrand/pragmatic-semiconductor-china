<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $heading = get_field('heading');
    $content = get_field('content');
    $images = get_field('images');
    $images_html_desktop = '';
    $images_html_mobile = '';

    if ($images) {
        foreach ($images as $image) {
            $image_id = $image['image_item'];
            if ($image_id) {
                // Desktop version
                $images_html_desktop .= '<div class="img-container animate fade-up">';
                $images_html_desktop .= \Theme\Utils::get_image_html($image_id);
                $images_html_desktop .= '</div>';

                // Mobile version 
                $images_html_mobile .= '<div class="mobile-image__slide">';
                $images_html_mobile .= '<div class="img-container animate fade-up">';
                $images_html_mobile .= \Theme\Utils::get_image_html($image_id);
                $images_html_mobile .= '</div>';
                $images_html_mobile .= '</div>';
            }
        }
    }
?>

    <section class="panel content content__info-grid-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">
            <div class="content-container">
                <?php if (!empty($heading)) { ?>
                    <h2 class="section-title-medium animate fade-up"><?php echo $heading; ?></h2>
                <?php } ?>

                <!-- Desktop Version -->
                <div class="content-container__img-container content-container__img-container--desktop">
                    <?php echo $images_html_desktop; ?>
                </div>

                <!-- Mobile Version -->
                <div class="content-container__img-container content-container__img-container--mobile mobile-image__slides-wrapper">
                    <div class="mobile-image__slides">
                        <?php echo $images_html_mobile; ?>
                    </div>
                </div>

                <div class="content-container__details">
                    <div class="content-container__details-col1"></div>
                    <div class="content-container__details-col2 animate fade-in">
                        <div class="wysiwyg-container">
                            <?php if (!empty($content)) { ?>
                                <?php echo $content; ?>
                            <?php } ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

<?php } ?>