<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $columns = get_field('columns');
    $display_style = get_field('display_style');

    $columns_html = '';
    $slider_html = '';


    if ($columns) {
        foreach ($columns as $column) {

            if ($display_style == 'slider') {

                $name = $column['name'];
                $job_title = $column['job_title'];
                $description = $column['description'];
                $slider_html .= '<div class="quotes-slider__slide">';
                $slider_html .= '<div class="content-container">';
                $slider_html .= '<h3 class="name">' . $name . '</h3>';
                $slider_html .= '<p class="job-title">' . $job_title . '</p>';
                $slider_html .= '<p>' . $description . '</p>';
                $slider_html .= '</div>';
                $slider_html .= '</div>';
            } else {

                $name = $column['name'];
                $job_title = $column['job_title'];
                $image = $column['image'];
                $image_width = !empty($column['image_width']) ? $column['image_width'] . 'px' : 'auto';
                $description = $column['description'];

                $columns_html .= '<div class="row-container animate fade-in">';

                $columns_html .= '<div class="row-container__col1">';
                $columns_html .= '<h3 class="name">' . $name . '</h3>';
                $columns_html .= '<p class="job-title">' . $job_title . '</p>';

                if ($image) {
                    $image_html = \Theme\Utils::get_image_html($image);
                    $image_html = str_replace('<img', '<img style="width:' . $image_width . ';"', $image_html);
                    $columns_html .= $image_html;
                }

                $columns_html .= '</div>';

                $columns_html .= '<div class="row-container__col2">';
                $columns_html .= '<p>' . $description . '”</p>';
                $columns_html .= '</div>';

                $columns_html .= '</div>';
            }
        }
    }

?>

    <section class="panel content content__testimonial-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">



            <?php
            if ($display_style == 'slider') { ?>

                <div class="quotes-slider-heading">

                    <div class="quotes-slider-heading__col1">
                        <h1 class="meta-heading animate animate fade-in"><?php echo $meta_heading; ?></h1>
                        <h2 class="section-title-small animate fade-up "><?php echo $heading; ?></h2>
                    </div>
                    <div class="quotes-slider-heading__col2">
                        <div class="quotes-slider__controls">
                            <div class="quotes-slider__controls__button quotes-slider__controls__button--prev circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-left"></div>
                            <div class="quotes-slider__controls__button quotes-slider__controls__button--next circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right"></div>
                        </div>
                    </div>

                </div>

                <div class="quotes-slider">
                    <div class="quotes-slider__slides-wrapper">
                        <div class="quotes-slider__slides">
                            <?php echo $slider_html ?>
                        </div>
                    </div>
                </div>

            <?php } else { ?>

                <h1 class="meta-heading animate animate fade-in"><?php echo $meta_heading; ?></h1>
                <h2 class="section-title-small animate fade-up "><?php echo $heading; ?></h2>

                <div class="content-container">
                    <div class="content-container__row">
                        <?php echo $columns_html; ?>
                    </div>
                </div>

            <?php } ?>

        </div>
    </section>

<?php } ?>