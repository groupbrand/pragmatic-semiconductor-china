<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

$custom_class = isset($block['className']) ? $block['className'] : '';


if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $content = get_field('content');
    $background_image = get_field('background_image');
    $mobile_background_image = get_field('mobile_background_image');
    $panel_size = get_field('panel_size');
    $text_align = get_field('text_align');
    $hide_background_on_mobile = get_field('hide_background_on_mobile');

    // Note: Button is a conditional field and is only completed, if
    // Text align left white is selected.
    $button = get_field('button');

    $link_icon_class = 'buttonV2--icon--arrow-right';
    $button_text = '';
    $external_link = '';
    $external_target = '';
    $link = '';

    if ($button) {
        $button_text = $button['link_text'];
        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
        $link = \Theme\Utils::get_link_url($button['link_url'], $button['link_page']);

        if ($external_link) {
            $link_icon_class = 'buttonV2--icon--external-link';
            $external_target = ' target="_blank" rel="noreferrer noopener" ';
        }
    }


    $panel_size_class = "";
    if ($panel_size == 'large') {
        $panel_size_class = "content__brand-moment-panel--large";
    }

    $bg_image_class = "";
    if ($hide_background_on_mobile) {
        $bg_image_class = " hide-image-on-mobile ";
    }

?>

    <section class="content content__brand-moment-panel <?php echo $panel_size_class . ' ' . $custom_class . ' ' . $generic_block_settings_classes; ?>">
        <?php


        echo '<div class="image-container parallax image-desktop ' . $bg_image_class . '" style="background-image: url(\'' . $background_image . '\'">';
        echo '</div>';


        if ($mobile_background_image || $hide_background_on_mobile) {
            echo '<div class="image-container parallax image-mobile ' . $bg_image_class . '" style="background-image: url(\'' . $mobile_background_image . '\'">';
            echo '</div>';
        }

        echo '<div class="content-outer-container">';

        echo '<div class="content-container">';
        echo '<div class="content-container__col1">';

        $text_colour_class = '';
        if ($text_align == 'left_white') {
            $text_colour_class = 'white-left';
        }

        if ($text_align == 'left' || $text_align == 'left_white') {
            echo '<h2 class="' . $text_colour_class . '">' . $content . '</h2>';

            if ($button && $button_text != '') {
                echo '<a class="buttonV2 buttonV2--icon ' . $link_icon_class . ' animate fade-in" ' . $external_target . ' href="' . $link . '">' . $button_text . '</a>';
            }
        }

        echo '</div>';

        echo '<div class="content-container__col2">';
        if ($text_align == 'right') {
            echo '<h2>' . $content . '</h2>';
        }
        echo '</div>';

        echo '</div>';
        echo '</div>';

        ?>
    </section>

<?php
}
?>