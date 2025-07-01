<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $meta_heading = get_field('meta_heading');

    $heading = get_field('heading');
    $introduction = get_field('introduction');
    $button = get_field('button');

    $heading_size_class = '';
    if ($meta_heading || $introduction) {
        $heading_size_class = 'smaller-heading';
    }

    $button_text = '';
    $link = '';
    if ($button) {
        $button_text = $button['link_text'];
        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
        $link = \Theme\Utils::get_link_url($button['link_url'], $button['link_page']);
    }

    $link_icon_class = 'buttonV2--icon--arrow-right';
    $external_target = '';
    if ($external_link) {
        $link_icon_class = 'buttonV2--icon--external-link';
        $external_target = ' target="_blank" rel="noreferrer noopener" ';
    }


?>

    <section class="panel content content__content-promo-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">
            <?php
            if (!empty($meta_heading)) {
                echo '<h1 class="meta-heading animate fade-in">' . $meta_heading . '</h1>';
            }

            echo '<h2 class="' . $heading_size_class . ' animate fade-in">' . $heading . '</h2>';

            if ($introduction) {
                echo '<div class="introduction animate fade-in">' . $introduction . '</div>';
            }
            echo '<a class="buttonV2 buttonV2--icon ' . $link_icon_class . ' animate fade-in" ' . $external_target . ' href="' . $link . '">' . $button_text . '</a>';
            ?>
        </div>

    </section>

<?php } ?>