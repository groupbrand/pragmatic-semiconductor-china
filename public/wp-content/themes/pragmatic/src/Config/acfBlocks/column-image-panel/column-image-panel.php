<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $title = get_field('title');
    $introduction = get_field('introduction');
    $image = get_field('image');
    $image_html = '';

    if ($image) {
        $image_html .= \Theme\Utils::get_image_html($image);
    }

?>

    <section class="panel content content__column-image-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container animate fade-in">
                <div class="content-container__col1">
                    <h2 class="section-title-small"><?php echo $title; ?></h2>
                    <p><?php echo $introduction; ?></p>
                </div>

                <div class="content-container__col2">
                    <?php echo $image_html; ?>

                </div>



            </div>
        </div>
    </section>

<?php } ?>