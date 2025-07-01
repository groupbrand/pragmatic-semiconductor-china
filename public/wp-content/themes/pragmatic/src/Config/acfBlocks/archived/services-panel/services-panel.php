<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $heading = get_field('heading');
    $services = get_field('services');
    $more_info_button = get_field('more_information');
    $config_content_width = get_field('config_content_width');

    $more_info_button_text = '';
    if ($more_info_button) {
        $more_info_button_text = $more_info_button['link_text'];
        $more_info_link_url = $more_info_button['link_url'];
        $more_info_link_page = $more_info_button['link_page'];
        $more_info_link = get_link_url($more_info_link_url, $more_info_link_page);
    }

    $container_class = '';
    if ($config_content_width == 'narrow') {
        $container_class = 'container--narrow';
    }


?>

    <section class="panel content content__services-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container <?php echo $container_class; ?>">

            <?php
            if ($heading) {
                echo '<h2 class="large left-bar">' . $heading . '</h2>';
            }
            ?>

            <div class="services-container">

                <?php
                foreach ($services as $service) {
                    echo '<div class="services-container__col animate fade-in">';

                    echo '<div class="image-container">';
                    echo get_image_html($service['image']);
                    echo '</div>';

                    echo '<div class="content-container">';
                    echo '<h2>' . $service['heading'] . '</h2>';
                    echo '<div class="introduction">' . $service['introduction'] . '</div>';

                    $button_text = $service['link']['link_text'];
                    $link_url = $service['link']['link_url'];
                    $link_page = $service['link']['link_page'];
                    $link = get_link_url($link_url, $link_page);

                    if ($button_text && $link) {
                        echo '<a class="link" href="' . $link . '">' . $button_text . '</a>';
                    }

                    echo '</div>';
                    echo '</div>';
                } ?>
            </div>

            <?php
            if ($more_info_button_text && $more_info_link) {
                echo '<a class="link" href="' . $more_info_link . '">' . $more_info_button_text . '</a>';
            } ?>

        </div>
    </section>

<?php
}
?>