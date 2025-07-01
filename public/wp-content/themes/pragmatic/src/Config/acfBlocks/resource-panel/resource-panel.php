<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $resources_items = get_field('resource_items');

    $resources_html = '';

    if ($resources_items) {
        $resources_html .= '<div class="resources-container">';

        foreach ($resources_items as $resources_item) {
            $description = $resources_item['description'];
            $pdf_file = $resources_item['pdf_file'];
            $pdf_size = $resources_item['pdf_size'];
            $external_link = $resources_item['external_link'];
            $link = $resources_item['link'];

            $resources_html .= '<div class="resource-item">';

            $resources_html .= '<div class="title-container">';
            $resources_html .= '<p class="description">' . $description . '</p>';
            $resources_html .= '</div>';

            $resources_html .= '<div class="button-container">';

            if (!empty($external_link)) {
                $resources_html .= '<a target="_blank" rel="noopener noreferrer" class="circle-buttonV2 circle-buttonV2--external-link" href="' . $external_link . '" target="_blank">';
                $resources_html .= '</a>';
            }

            if (!empty($link)) {
                $resources_html .= '<a class="circle-buttonV2 circle-buttonV2--arrow-right" href="' . $link . '">';
                $resources_html .= '</a>';
            }

            if (!empty($pdf_file)) {
                $resources_html .= '<a target="_blank" rel="noopener noreferrer" class="circle-buttonV2 circle-buttonV2--arrow-download" href="' . $pdf_file . '" download>';
                $resources_html .= '</a>';

                if (!empty($pdf_size)) {
                    $resources_html .= ' <span>' . $pdf_size . ' mb</span>';
                }
            }

            $resources_html .= '</div>';

            $resources_html .= '</div>';
        }

        $resources_html .= '</div>';
    }
?>

    <section class="panel content content__resource-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <h2 class="meta-heading animate fade-up"><?php echo $meta_heading; ?></h2>
            <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>

            <div class="content-container animate fade-in">
                <div class="content-container__col">
                    <?php echo $resources_html; ?>
                </div>
            </div>
        </div>
    </section>

<?php } ?>