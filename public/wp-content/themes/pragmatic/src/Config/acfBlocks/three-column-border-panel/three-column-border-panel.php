<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $heading = get_field('heading');
    $description = get_field('description');

    $columns = get_field('columns');
?>

    <section class="panel content content__three-column-border-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <?php if ($meta_heading) { ?>
                <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>
            <?php } ?>
            <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>

            <?php if ($description) { ?>
                <p><span class=" introduction"><?php echo $description; ?></span></p>
            <?php } ?>

            <div class="content-container animate fade-in">
                <?php
                if (!empty($columns)) {
                    foreach ($columns as $column) {
                        $title = $column['title'];
                        $introduction = $column['introduction'];

                        $button = $column['button'];
                        $button_text = $button['link_text'];
                        $button_url = $button['link_url'];
                        $button_page = $button['link_page'];
                        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
                        $link = \Theme\Utils::get_link_url($button_url, $button_page);

                        $link_icon_class = 'buttonV2--icon--arrow-right';
                        $external_target = '';
                        if ($external_link) {
                            $external_target = ' target="_blank" rel="noreferrer noopener" ';
                            $link_icon_class = 'buttonV2--icon--external-link';
                        }

                        echo '<div class="content-container__col">';
                        echo '<h4 class="subheading">' . $title . '</h4>';
                        echo '<p>' . $introduction . '</p>';

                        if (!empty($button_text) && !empty($link)) {
                            echo '<div class="button-container">';
                            echo '<a ' . $external_target . ' href="' . $link . '" class="buttonV2 buttonV2--icon ' . $link_icon_class . '">';
                            echo $button_text . '</a>';
                            echo '</div>';
                        }

                        echo '</div>';
                    }
                }
                ?>
            </div>
        </div>
    </section>

<?php } ?>