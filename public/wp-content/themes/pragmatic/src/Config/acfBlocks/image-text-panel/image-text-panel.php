<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $section_heading = get_field('heading');
    $section_introduction = get_field('introduction');
    $section_content = get_field('content');
    $image_left_id = get_field('image_left');
    $image_bottom_id = get_field('image_bottom');

    // if ($image_left_id) {
    //     $image_left_src = wp_get_attachment_image_src($image_left_id, 'full')[0];
    //     $image_left_srcset = wp_get_attachment_image_srcset($image_left_id, 'full');
    // }

    // if ($image_bottom_id) {
    //     $image_bottom_src = wp_get_attachment_image_src($image_bottom_id, 'full')[0];
    //     $image_bottom_srcset = wp_get_attachment_image_srcset($image_bottom_id, 'full');
    // }



?>

    <section class="panel content content__image-text-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <section class="home-intro">
                <h2 class="section-title animate fade-up"><?php echo $section_heading ?></h2>
                <div class="home-intro__container">
                    <div class="home-intro__image animate fade-up">
                        <?php
                        if ($image_left_id) {
                            echo \Theme\Utils::get_image_html($image_left_id);
                        }
                        ?>

                    </div>
                    <div class="home-intro__content animate fade-in">


                        <div class="section-introduction"><?php echo $section_introduction ?></div>
                        <div class="section-content"><?php echo $section_content ?></div>

                        <div class="overlay-image parallax-div">
                            <?php
                            if ($image_bottom_id) {
                                echo \Theme\Utils::get_image_html($image_bottom_id);
                            }
                            ?>
                        </div>


                    </div>
                </div>
            </section>

        </div>
        <div class="overlay-panel">
            <div class="overlay-panel__floating-image">
                <?php
                if ($image_bottom_id) {
                    echo \Theme\Utils::get_image_html($image_bottom_id);
                }
                ?>
            </div>
        </div>

    </section>

<?php } ?>