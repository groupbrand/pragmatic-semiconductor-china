<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $content = get_field('content');
?>

    <section class="panel content content__narrow-content-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow">
            <div class="wysiwyg-container animate fade-in">
                <?php echo $content; ?>

            </div>

        </div>
        </div>
    </section>

<?php
}
?>