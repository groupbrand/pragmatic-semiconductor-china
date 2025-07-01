<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $heading = get_field('heading');
    $background_image_id = get_field('background_image');

?>

    <section class="content content__internal-hero-panel">

        <div class="image-container animate fade-in">
            <?php echo get_image_html($background_image_id); ?>
        </div>

        <div class="container container--narrow animate fade-up">
            <h1><?php echo $heading; ?></h1>
        </div>

    </section>

<?php
}
?>