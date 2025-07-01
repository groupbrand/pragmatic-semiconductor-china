<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $award_heading = get_field('award_heading');
    $brand_logos = get_field('brand_logos');
    $brand_logos_html = '';

    if ($brand_logos) {
        foreach ($brand_logos as $brand_logo_data) {
            $brand_logo_id = $brand_logo_data['logo'];

            if ($brand_logo_id) {
                $brand_logo_src = wp_get_attachment_image_src($brand_logo_id, 'full')[0];
                $brand_logo_srcset = wp_get_attachment_image_srcset($brand_logo_id, 'full');

                $brand_logos_html .= '<div class="brand-logos__item animate fade-in">';
                $brand_logos_html .= '<img src="' . esc_url($brand_logo_src) . '" srcset="' . esc_attr($brand_logo_srcset) . '" alt="Brand Logo" />';
                $brand_logos_html .= '</div>';
            }
        }
    }
?>

    <section class="panel content content__brand-logos-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="brand-logos">
                <h2 class="meta-heading animate fade-in"><?php echo $award_heading; ?></h2>
                <div class=" brand-logos__container">
                    <?php echo $brand_logos_html; ?>

                </div>
            </div>
        </div>
    </section>

<?php } ?>