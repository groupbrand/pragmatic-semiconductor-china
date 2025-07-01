<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $columns = get_field('columns');
    $column_count = is_array($columns) ? count($columns) : 0;

    $single_column = ($column_count === 1) ? 'single-column' : '';
?>

    <section class="panel content content__two-column-cards-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container <?php echo $single_column; ?>">

                <?php if (!empty($columns)) { ?>
                    <?php foreach ($columns as $index => $column) {
                        $col_class = ($column_count === 1 || $index === 0) ? 'content-container__col1' : 'content-container__col2';
                    ?>
                        <div class="<?php echo $col_class; ?>">
                            <div class="content-flex">
                                <div class="content">
                                    <h2 class="meta-heading"><?php echo $column['meta_heading']; ?></h2>
                                    <h3 class="section-title-medium"><?php echo $column['heading']; ?></h3>
                                    <p><?php echo $column['description']; ?></p>
                                </div>
                                <?php
                                $download_file_url = $column['download_file_url'];
                                $hubspot_button_script = $column['hubspot_button_script'];

                                if ($download_file_url) { ?>
                                    <div class="button-container">
                                        <a target="_blank" rel="noopener noreferrer" href="<?php echo $download_file_url; ?>" class="buttonV2 buttonV2--icon buttonV2--icon--download">
                                            <?php echo $column['button_label']; ?>
                                        </a>
                                    </div>
                                <?php } else if ($hubspot_button_script) { ?>
                                    <div class="button-container">
                                        <?php echo $hubspot_button_script; ?>
                                    </div>
                                <?php } else { ?>
                                    <div class="button-container">
                                        <a href="#" class="buttonV2 request-button buttonV2--icon buttonV2--icon--plus"
                                            data-form="form-<?php echo $index; ?>">
                                            <?php echo $column['button_label']; ?>
                                        </a>
                                    </div>
                                <?php } ?>

                            </div>

                            <?php if (!$download_file_url && !$hubspot_button_script) { ?>
                                <div class="modal">
                                    <div class="modal__overlay" id="form-<?php echo $index; ?>" style="display: none;">
                                        <div class="modal__content">

                                            <div class="modal-content-container">
                                                <div class="modal-content-container__col1">
                                                    <button class="close-button circle-buttonV2 circle-buttonV2--close circle-buttonV2--fwhite-black-border-solid-black circle-buttonV2--fwhite-black-border-solid-black--no-override"></button>
                                                    <h2 class="meta-heading"><?php echo $column['form_meta_heading']; ?></h2>
                                                    <h3 class="section-title-medium"><?php echo $column['form_heading']; ?></h3>
                                                    <p><?php echo $column['form_description']; ?></p>
                                                </div>

                                                <div class="modal-content-container__col2">
                                                    <?php echo $column['form_script']; ?>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            <?php } ?>

                        </div>
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
    </section>

<?php } ?>