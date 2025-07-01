<?php
include __DIR__ . '/../_block-generics.php';


if (!$is_preview && !$generic_block_settings['hide_panel']) {

?>

    <section class="panel content content__news-lister-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div id="vue-app" data-app="news-search"></div>
        </div>
    </section>

<?php
}
?>