<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

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
    <section class="panel content content__news-lister-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div id="vue-app" data-app="news-search" data-config="<?php echo htmlspecialchars(json_encode($config_data)); ?>"></div>
        </div>
    </section>

<?php
}
?>