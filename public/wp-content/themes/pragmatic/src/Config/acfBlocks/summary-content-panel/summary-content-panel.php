<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $heading = get_field('heading');
    $subheading = get_field('sub_heading');
    $column_one_title = get_field('column_one_title');
    $column_one_introduction = get_field('column_one_introduction');
    $column_one_image = get_field('column_one_image');
    $column_two_title = get_field('column_two_title');
    $column_two_introduction = get_field('column_two_introduction');
    $column_two_image = get_field('column_two_image');

    $column_heading_style = get_field('column_heading_style');

    $column_heading_class = 'section-title-small';
    if ($column_heading_style == 'small') {
        $column_heading_class = 'section-title-smaller';
    }


?>



    <section class="panel content content__summary-content-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <?php if (!empty($heading)) { ?>
                <h2 class="section-title-small animate fade-up"><?php echo $heading; ?></h2>
            <?php } ?>

            <div class="internal-container">

                <?php if (!empty($subheading)) { ?>
                    <div class="subheading-container animate fade-in">
                        <div class="col1">
                        </div>
                        <div class="col2">
                            <div class="subheading animate fade-up"><?php echo $subheading; ?></div>
                        </div>
                    </div>
                <?php } ?>


                <div class="content-container animate fade-in">
                    <div class="content-container__col1">
                        <h3 class="<?php echo $column_heading_class; ?>"><?php echo $column_one_title; ?></h3>
                        <p><?php echo $column_one_introduction; ?></p>

                    </div>

                    <div class="content-container__col2">
                        <?php if ($column_one_image) echo  \Theme\Utils::get_image_html($column_one_image); ?>
                    </div>
                </div>

            </div>

            <div class="final-content-container animate fade-in">
                <div class="final-content-container__col1">
                    <?php if ($column_two_image) echo \Theme\Utils::get_image_html($column_two_image); ?>
                </div>

                <div class="final-content-container__col2">
                    <h3 class="<?php echo $column_heading_class; ?>"><?php echo $column_two_title; ?></h3>
                    <p><?php echo $column_two_introduction; ?></p>
                </div>
            </div>


        </div>

    </section>
<?php
}
?>