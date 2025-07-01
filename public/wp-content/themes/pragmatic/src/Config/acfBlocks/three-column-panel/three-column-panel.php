<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $columns = get_field('columns');

    $columns_html = '';

    if ($columns) {
        foreach ($columns as $column) {
            $title = $column['title'];
            $introduction = $column['introduction'];

            $button = isset($column['button']) ? $column['button'] : null;
            $button_text = isset($button['link_text']) ? $button['link_text'] : '';
            $button_url = isset($button['link_url']) ? $button['link_url'] : '';
            $button_page = isset($button['link_page']) ? $button['link_page'] : '';
            $external_link = isset($button['external_link']) ? $button['external_link'] : false;
            $link = \Theme\Utils::get_link_url($button_url, $button_page);

            $link_icon_class = 'buttonV2--icon--arrow-right';
            $external_target = '';
            if ($external_link) {
                $link_icon_class = 'buttonV2--icon--external-link';
                $external_target = ' target="_blank" rel="noreferrer noopener" ';
            }

            $columns_html .= '<div class="content-container__col">';

            $columns_html .= '<h2 class="section-title-small">' . $title . '</h2>';
            $columns_html .= '<p>' . $introduction . '</p>';

            $columns_html .= '<div class="button-container">';
            $columns_html .= '<a ' . $external_target  . ' href="' . $link . '" class="buttonV2 buttonV2--icon ' . $link_icon_class . '">' . $button_text . '</a>';
            $columns_html .= '</div>';

            $columns_html .= '</div>';
        }
    }
?>

    <section class="panel content content__three-column-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container animate fade-in">
                <?php echo $columns_html; ?>
            </div>
        </div>
    </section>
<?php } ?>