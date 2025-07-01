<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $description = get_field('description');
    $image = get_field('image');

    $image_html = '';

    if ($image) {
        $image_id = $image;
        if ($image_id) {
            $image_html .= \Theme\Utils::get_image_html($image_id);
        }
    }






?>

    <section class="panel content content__two-column-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>
            <h3 class="section-title-small animate fade-in"><?php echo $heading; ?></h3>

            <div class="content-container animate fade-in">
                <div class="content-container__col1">
                    <?php echo $image_html; ?>
                </div>

                <div class="content-container__col2">
                    <?php echo $description; ?>
                </div>
            </div>

        </div>

        <div class="overlay-panel"></div>

    </section>
<?php } ?>