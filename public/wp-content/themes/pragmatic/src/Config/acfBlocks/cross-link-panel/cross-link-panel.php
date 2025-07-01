<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $buttons = get_field('buttons');


    $button_html = '';

    if ($buttons) {
        $button_html .= '<div class="content-container">';
        foreach ($buttons as $button) {

            $link_text = $button['cta_link']['link_text'];
            $link_page = $button['cta_link']['link_page'];
            $link_url = $button['cta_link']['link_url'];
            $external_link = isset($button['cta_link']['external_link']) ? $button['cta_link']['external_link'] : false;

            // echo print_r($button['cta_link']);
            // echo '<br/>';

            $link = \Theme\Utils::get_link_url($link_url, $link_page);


            $link_icon_class = 'circle-buttonV2--arrow-right';
            $external_target = '';
            if ($external_link) {
                $external_target = ' target="_blank" rel="noreferrer noopener" ';
                $link_icon_class = 'circle-buttonV2--external-link';
            }


            $button_html .= '<div class="content-container__col">';
            $button_html .= '<a  ' . $external_target . ' class="cross-link" href="' . $link  . '">';
            $button_html .= '<div class="link-container">';
            $button_html .= '<div class="link-container__col1">';
            $button_html .= $link_text;
            $button_html .= '</div>';
            $button_html .= '<div class="link-container__col2">';
            $button_html .=  '<div class="circle-buttonV2 circle-buttonV2--responsive ' . $link_icon_class . '"></div>';
            $button_html .= '</div>';
            $button_html .= '</div>';
            $button_html .= '</a>';
            $button_html .= '</div>';
        }
        $button_html .= '</div>';
    }
?>

    <section class="panel content content__cross-link-panel <?php echo esc_attr($generic_block_settings_classes); ?>">
        <div class="container animate fade-in">
            <h2 class="meta-heading"><?php echo esc_html($meta_heading); ?></h2>
            <?php echo $button_html; ?>
        </div>
    </section>

<?php } ?>