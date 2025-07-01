<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $heading = get_field('heading');

    $category_id = 0;
    if (isset($_GET["cat"])) {
        $category = get_term_by('slug', $_GET["cat"], 'category');

        if ($category) {
            $category_id  = $category->term_id;
        }
    }

    $config_data = [
        'paginationType' => 'loadMore',
        'keywordSearch' => 'false',
        'defaultCategoryID' => $category_id
    ];

?>
    <section class="panel content content__events-lister-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <?php

            if ($heading) {
                echo '<h2 class="section-title-medium">' . $heading . '</h2>';
            }
            ?>

            <div id="vue-app" data-app="events-search" data-config="<?php echo htmlspecialchars(json_encode($config_data)); ?>"></div>
        </div>
    </section>

<?php
}
?>