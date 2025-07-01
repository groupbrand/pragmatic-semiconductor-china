<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $description = get_field('description');
    $columns = get_field('columns');
    $column_image_max_height = get_field('column_image_max_height');

    $title_bottom_class = '';
    if (empty($description)) {
        $title_bottom_class = ' larger-margin ';
    }

    $column_image_max_height_str = '';
    if ($column_image_max_height) {
        $column_image_max_height_str = ' height="' . $column_image_max_height . 'px" ';
    }

    $title_margin_class = '';
    if ($column_image_max_height) {
        $title_margin_class = ' height="' . $column_image_max_height . 'px" ';
    }

?>

    <section class="panel content content__column-grid-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <?php
            if (!empty($meta_heading)) {
                echo '<h1 class="meta-heading animate fade-in">' . $meta_heading . '</h1>';
            }


            echo '<h2 class="section-title-small ' . $title_bottom_class . ' animate fade-up">' . $heading . '</h2>';


            if (!empty($description)) {
                echo '<p><span class="introduction">' . $description . '</span></p>';
            }
            ?>

            <div class="content-container animate fade-in">
                <?php if ($columns) {
                    foreach ($columns as $column) {

                        $title = $column['title'];
                        $introduction = $column['introduction'];
                        $image = $column['image'];
                        $image_width = !empty($column['image_width']) ? $column['image_width'] . 'px' : 'auto';

                        $title_bottom_class = '';
                        if ($introduction) {
                            $title_bottom_class = ' with-margin ';
                        }





                        $button = isset($column['button']) ? $column['button'] : null;
                        $button_text = isset($button['link_text']) ? $button['link_text'] : '';
                        $button_url = isset($button['link_url']) ? $button['link_url'] : '';
                        $button_page = isset($button['link_page']) ? $button['link_page'] : '';
                        $external_link = isset($button['external_link']) ? $button['external_link'] : false;
                        $link = \Theme\Utils::get_link_url($button_url, $button_page);

                        $link_icon_class = 'buttonV2--icon--arrow-right';
                        $external_target = '';
                        if ($external_link) {
                            $external_target = ' target="_blank" rel="noreferrer noopener" ';
                            $link_icon_class = 'buttonV2--icon--external-link';
                        }

                        $introduction_bottom_class = '';
                        if (!empty($button_text) && !empty($link)) {
                            $introduction_bottom_class = ' with-margin ';
                        }

                ?>

                        <div class="content-container__col">
                            <div class="image-container" <?php echo $column_image_max_height_str; ?>>
                                <?php if ($image) {
                                    $image_html = \Theme\Utils::get_image_html($image);
                                    $image_html = str_replace('<img', '<img style="width:' . $image_width . ';"', $image_html);
                                    echo $image_html;
                                } ?>
                            </div>

                            <h3 class="subheading <?php echo $title_bottom_class; ?>"><?php echo $title; ?></h3>

                            <?php if ($introduction) {
                                echo '<p class="' . $introduction_bottom_class . '">' . $introduction . '</p>';
                            }
                            ?>

                            <?php if (!empty($button_text) && !empty($link)) { ?>
                                <div class="button-container">
                                    <a <?php echo $external_target; ?> href="<?php echo $link; ?>" class="buttonV2 buttonV2--icon <?php echo $link_icon_class; ?>">
                                        <?php echo $button_text; ?>
                                    </a>
                                </div>
                            <?php } ?>
                        </div>
                <?php }
                }  ?>
            </div>
        </div>
    </section>

<?php } ?>