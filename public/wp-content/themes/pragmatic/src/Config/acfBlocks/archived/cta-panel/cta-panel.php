<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $cta_heading = get_field('cta_heading', 'options');
    $button_text = get_field('cta_button_link_text', 'options');
    $link_url = get_field('cta_button_link_url', 'options');
    $link_page = get_field('cta_button_link_page', 'options');

    if (get_field('cta_heading'))
        $cta_heading = get_field('cta_heading');

    if (get_field('link_text'))
        $button_text = get_field('link_text');

    if (get_field('link_url'))
        $link_url = get_field('link_url');

    if (get_field('link_page'))
        $link_page = get_field('link_page');

    $link = get_link_url($link_url, $link_page);


?>

    <section class="panel content content__cta-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <h2><?php echo $cta_heading; ?></h2>
            <div class="button-center-container">
                <a class="button button--arrow" href="<?php echo $link; ?>"><?php echo $button_text; ?></a>
            </div>
        </div>
    </section>

<?php
}
?>