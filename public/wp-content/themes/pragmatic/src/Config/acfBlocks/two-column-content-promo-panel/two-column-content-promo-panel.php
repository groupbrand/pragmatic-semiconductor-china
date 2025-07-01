<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $columns = get_field('columns');

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $introduction = get_field('introduction');
    $background_image = get_field('background_image');



?>

    <section class="panel content content__two-column-content-promo-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">
            <div class="content-container animate fade-in">

                <?php foreach ($columns as $column) {
                    echo '<div class="content-container__col">';

                    echo '<div class="image-container">';
                    echo \Theme\Utils::get_image_html($column['image']);
                    echo '</div>';

                    echo '<div class="content-section">';
                    echo '<h2 class="section-title-small">' . $column['heading'] . '</h2>';
                    echo '<div class="introduction">' . $column['introduction'] . '</div>';
                    echo '</div>';

                    $button = $column['button'];

                    $button_text = '';
                    $link = '';
                    if ($button) {
                        $button_text = $button['link_text'];
                        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
                        $link = \Theme\Utils::get_link_url($button['link_url'], $button['link_page']);

                        $link_icon_class = 'buttonV2--icon--arrow-right';
                        $external_target = '';
                        if ($external_link) {
                            $link_icon_class = 'buttonV2--icon--external-link';
                            $external_target = ' target="_blank" rel="noreferrer noopener" ';
                        }
                    }

                    echo '<div class="button-section">';
                    echo '<a class="buttonV2 buttonV2--icon ' . $link_icon_class . ' animate fade-in" ' . $external_target . ' href="' . $link . '">' . $button_text . '</a>';
                    echo '</div>';

                    echo '</div>';
                }
                ?>

            </div>
        </div>
    </section>
<?php } ?>