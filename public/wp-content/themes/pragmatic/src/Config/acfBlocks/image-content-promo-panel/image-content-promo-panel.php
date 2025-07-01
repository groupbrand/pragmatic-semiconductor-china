<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $introduction = get_field('introduction');
    $background_image = get_field('background_image');
    $background_image_mobile = get_field('background_image_mobile');

    if (!$background_image_mobile) {
        $background_image_mobile = $background_image;
    }

    $button = get_field('button');

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
        $external_target = ' target="_blank" rel="noreferrer noopener" ';
        $link_icon_class = 'buttonV2--icon--external-link';
    }

?>

    <section class="panel content content__image-content-promo-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="bg-image-desktop"><?php if ($background_image) echo \Theme\Utils::get_image_html($background_image); ?></div>
        <div class="bg-image-mobile"><?php if ($background_image_mobile) echo \Theme\Utils::get_image_html($background_image_mobile); ?></div>

        <div class="content-container">
            <h1 class="meta-heading"><?php echo $meta_heading; ?></h1>
            <h2 class="section-title-medium"><?php echo $heading; ?></h2>
            <div class="introduction"><?php echo $introduction; ?></div>

            <a <?php echo $external_target; ?> class="buttonV2 buttonV2--icon <?php echo $link_icon_class ?>  buttonV2--black-yellow" href="<?php echo $link; ?>"><?php echo $button_text; ?></a>

        </div>


    </section>
<?php } ?>