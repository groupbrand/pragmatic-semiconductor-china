<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $columns = get_field('columns');

?>

    <section class="panel content content__content-promo-two-column-panel <?php echo $generic_block_settings_classes; ?>">
        <div>
            <div class="content-container animate fade-in">
                <?php if ($columns) {
                    foreach ($columns as $index => $column) {
                        $col_class = ($index === 0) ? 'content-container__col1' : 'content-container__col2';

                        $meta_heading = $column['meta_heading'];
                        $heading = $column['heading'];
                        $introduction = $column['introduction'];
                        $background_colour = 'bgc-' . $column['background_colour'];

                        $heading_size_class = '';
                        if ($meta_heading || $introduction) {
                            $heading_size_class = 'smaller-heading';
                        }

                        $button = isset($column['button']) ? $column['button'] : null;

                        if ($button) {
                            $button_text = isset($button['link_text']) ? $button['link_text'] : '';
                            $button_url = isset($button['link_url']) ? $button['link_url'] : '';
                            $button_page = isset($button['link_page']) ? $button['link_page'] : '';
                            $external_link = isset($button['external_link']) ? $button['external_link'] : false;
                            $link = \Theme\Utils::get_link_url($button_url, $button_page);
                        }

                        $link_icon_class = 'buttonV2--icon--arrow-right';
                        $external_target = '';
                        if ($external_link) {
                            $external_target = ' target="_blank" rel="noreferrer noopener" ';
                            $link_icon_class = 'buttonV2--icon--external-link';
                        }

                ?>


                        <div class="content-container__col <?php echo $col_class; ?> <?php echo $background_colour; ?>">

                            <?php
                            if (!empty($meta_heading)) {
                                echo '<h1 class="meta-heading animate fade-in">' . $meta_heading . '</h1>';
                            }

                            echo '<h2 class="' . $heading_size_class . ' animate fade-in">' . $heading . '</h2>';

                            if ($introduction) {
                                echo '<div class="introduction animate fade-in">' . $introduction . '</div>';
                            }
                            ?>

                            <?php if (!empty($button_text) && !empty($link)) { ?>
                                <div class="button-container">
                                    <a <?php echo $external_target; ?> href="<?php echo $link; ?>" class="buttonV2 buttonV2--icon <?php echo $link_icon_class; ?> animate fade-in">
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