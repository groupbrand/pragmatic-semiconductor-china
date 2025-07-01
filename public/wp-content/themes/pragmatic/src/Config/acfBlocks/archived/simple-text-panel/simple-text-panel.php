<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $content = get_field('content');

?>

    <section class="panel content content__simple-text-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow">
            <div class="wysiwyg-container">
                <?php echo $content; ?>
            </div>
        </div>
    </section>

<?php
}
?>