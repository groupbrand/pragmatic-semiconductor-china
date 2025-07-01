<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $heading = get_field('heading');
    $introduction = get_field('content');
    $max_width_of_content = get_field('max_width_of_content');

    $button = get_field('button');
    if ($button) {
        $link_text = $button['link_text'];
        $link_url = $button['link_url'];
        $link_page = $button['link_page'];
        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
        $link = \Theme\Utils::get_link_url($link_url, $link_page);
    }
    $link_icon_class = 'buttonV2--icon--arrow-right';
    $external_target = '';
    if ($external_link) {
        $external_target = ' target="_blank" rel="noreferrer noopener" ';
        $link_icon_class = 'buttonV2--icon--external-link';
    }


    $title_margin_class = "";
    $intro_margin_class = "";
    if ($introduction) {
        $title_margin_class = " with-intro-margin";

        if ($link_url && $link_text) {

            $intro_margin_class = " with-margin";
        }
    } else {
        if ($link_url && $link_text) {
            $title_margin_class = " with-margin";
        }
    }

    $max_width_str = '';
    $custom_width_class = '';
    if ($max_width_of_content) {
        $max_width_str = 'style="max-width:' . $max_width_of_content . 'px";';
        $custom_width_class = ' custom-width ';
    }

?>

    <section class="panel content content__intro-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <div class="content-container">
                <div class="content">
                    <h2 class="section-title-small <?php echo $title_margin_class . ' ' . $custom_width_class; ?> animate fade-up" <?php echo $max_width_str; ?>><?php echo $heading; ?></h2>

                    <?php if ($introduction) { ?>
                        <p class="introduction <?php echo $intro_margin_class; ?> animate fade-up" <?php echo $max_width_str; ?>><?php echo $introduction; ?></p>
                    <?php } ?>


                    <?php if ($link && $link_text) { ?>
                        <a <?php echo $external_target; ?> class="buttonV2 buttonV2--icon <?php echo $link_icon_class; ?> animate fade-in" href="<?php echo $link; ?>">
                            <?php echo $link_text; ?>
                        </a>
                    <?php } ?>

                </div>

            </div>

        </div>

    </section>
<?php
}
?>