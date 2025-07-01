<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $form_meta_heading = get_field('form_meta_heading');
    $form_script = get_field('form_script');


    $columns = get_field('columns');
    $columns_html = '';


    if ($columns) {

        foreach ($columns as $column) {
            $columns_html .= '<div class="contact-info__list">';

            if (!empty($column['title'])) {
                $columns_html .= '<p>' . $column['title'] . '</p>';
            }
            if (!empty($column['email'])) {
                $columns_html .= '<a href="mailto:' . $column['email'] . '">' . $column['email'] . '</a>';
            }
            if (!empty($column['phone'])) {
                $columns_html .= '<a href="tel:' . $column['phone'] . '">' . $column['phone'] . '</a>';
            }
            $columns_html .= '</div>';
        }
    }

?>

    <section class="panel content content__contact-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <h1 class="animate fade-up"><?php echo $heading; ?></h1>

            <div class="content-container animate fade-in">
                <div class="content-container__col1">
                    <div class="contact-info__container">
                        <h2 class="meta-heading"><?php echo $meta_heading; ?></h2>
                        <?php echo $columns_html; ?>
                    </div>
                </div>
                <div class="content-container__col2">
                    <div class="contact-form">
                        <h2 class="meta-heading"><?php echo $form_meta_heading; ?></h2>

                        <!-- Form -->
                        <?php echo $form_script; ?>

                    </div>
                </div>
            </div>
        </div>
    </section>

<?php } ?>