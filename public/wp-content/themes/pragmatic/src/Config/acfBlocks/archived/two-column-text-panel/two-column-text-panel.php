<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $column_one = get_field('column_one');
    $column_two = get_field('column_two');

?>

    <section class="panel content content__two-column-text-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow">

            <div class="content-container">
                <div class="content-container__col1 animate fade-in-slow">
                    <div class="wysiwyg-container">
                        <?php echo $column_one; ?>
                    </div>
                </div>
                <div class="content-container__col2 animate fade-in">
                    <div class="wysiwyg-container">
                        <?php echo $column_two; ?>
                    </div>
                </div>
            </div>
    </section>

<?php
}
?>