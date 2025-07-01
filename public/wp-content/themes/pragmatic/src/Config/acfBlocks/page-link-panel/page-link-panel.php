<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $buttons = get_field('buttons');

    // If there is no meta-heading and heading then move the container up to align with top padding.
    $margin_top_class = '';
    $padding_bottom_class = '';
    if (!$meta_heading && !$heading) {
        $margin_top_class = ' move-container-up ';
        $padding_bottom_class = ' override-generic-settings ';
    }

    $button_html = '';

    if ($buttons) {
        $button_html .= '<div class="content-container ' . $margin_top_class . ' animate fade-up">';
        foreach ($buttons as $button) {

            $link_text = $button['page_link']['link_text'];
            $link_url = $button['page_link']['link_url'];
            $link_page = $button['page_link']['link_page'];
            $external_link = isset($button['page_link']['external_link']) ? $button['page_link']['external_link'] : false;
            $link = \Theme\Utils::get_link_url($link_url, $link_page);

            $link_icon_class = 'circle-buttonV2--arrow-right';
            $external_target = '';
            if ($external_link) {
                $link_icon_class = 'circle-buttonV2--external-link';
                $external_target = ' target="_blank" rel="noreferrer noopener" ';
            }


            $button_html .= '<div class="content-container__row">';

            $button_html .= '<a ' . $external_target . ' href="' . $link . '">';
            $button_html .= '<div class="link-container">';

            $button_html .= '<div class="link-container__col1">';
            $button_html .= '<h3>' . $link_text . '</h3>';
            $button_html .= '</div>';

            $button_html .= '<div class="link-container__col2">';
            $button_html .= '<div class="circle-buttonV2 circle-buttonV2--responsive ' . $link_icon_class . '"></div>';
            $button_html .= '</div>';

            $button_html .= '</div>';  // Link container
            $button_html .= '</a>';

            $button_html .= '</div>';
        }
        $button_html .= '</div>';
    }
?>

    <section class="panel content content__page-link-panel <?php echo esc_attr($generic_block_settings_classes); ?> <?php echo $padding_bottom_class; ?>">
        <div class="container">

            <?php if ($meta_heading && $heading) { ?>
                <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>
                <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>
            <?php } ?>

            <?php echo $button_html; ?>
        </div>


    </section>

<?php } ?>