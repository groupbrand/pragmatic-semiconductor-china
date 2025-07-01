<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $resources_lists = get_field('resource_lists');

    $resources_html = '';

    if ($resources_lists) {
        $resources_html .= '<div class="content-container move-container-up">';
        foreach ($resources_lists as $resources_list) {

            $name = $resources_list['name'];
            $file = $resources_list['file'];
            $size = $resources_list['size'];

            $resources_html .= '<div class="content-container__row">';

            if (!empty($file)) {
                $resources_html .= '<a target="_blank" rel="noopener noreferrer" href="' . $file . '" download>';
                $resources_html .= '<div class="link-container">';

                $resources_html .= '<div class="link-container__col1">';
                $resources_html .= '<h3>' . $name . '</h3>';


                $resources_html .= '</div>';

                $resources_html .= '<div class="link-container__col2">';
                $resources_html .= '<div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-download"></div>';
                if (!empty($size)) {
                    $resources_html .= ' <span>' . $size . ' mb</span>';
                }
                $resources_html .= '</div>';

                $resources_html .= '</div>';  // Link container
                $resources_html .= '</a>';
            }

            $resources_html .= '</div>';
        }
        $resources_html .= '</div>';
    }
?>

    <section class="panel content content__resource-downloads-panel <?php echo esc_attr($generic_block_settings_classes); ?> override-generic-settings">
        <div class="container animate fade-up">
            <?php echo $resources_html; ?>
        </div>


    </section>

<?php } ?>