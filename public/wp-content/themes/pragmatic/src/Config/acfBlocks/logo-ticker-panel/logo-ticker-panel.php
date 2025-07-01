<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $brand_logos = get_field('brand_logos');
    $brand_logos_html = '';

    if ($brand_logos) {
        foreach ($brand_logos as $brand_logo) {
            $brand_logo_id = $brand_logo['logo'];

            if ($brand_logo_id) {
                $brand_logo_src = wp_get_attachment_image_src($brand_logo_id, 'full')[0];
                $brand_logo_srcset = wp_get_attachment_image_srcset($brand_logo_id, 'full');

                $brand_logos_html .= '<li class="logo-ticker__item animate fade-in">';
                $brand_logos_html .= '<img src="' . esc_url($brand_logo_src) . '" srcset="' . esc_attr($brand_logo_srcset) . '" alt="Brand Logo" />';
                $brand_logos_html .= '</li>';
            }
        }
    }
?>

    <section class="panel content content__logo-ticker-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <div class="logo-ticker">
                <ul class=" logo-ticker__container">
                    <?php echo $brand_logos_html; ?>

                </ul>
            </div>
        </div>
    </section>

<?php } ?>

<script>
    var ticker = document.querySelector('.logo-ticker'),
        list = document.querySelector('.logo-ticker__container'),
        items = Array.from(list.children);

    for (let i = 0; i < 3; i++) {
        items.forEach(function(item) {
            var clone = item.cloneNode(true);
            list.appendChild(clone);
        });
    }
</script>