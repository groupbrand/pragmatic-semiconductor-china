<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $page_heading = get_field('page_heading');
    $page_subheading = get_field('page_subheading');

    $text_colour = get_field('text_colour');
    $text_colour_class = '';
    if ($text_colour == 'white') {
        $text_colour_class = 'content-container--white';
    }
    $page_heading_margin_class = '';
    if ($page_subheading) {
        $page_heading_margin_class = ' page-hero-title--small-margin ';
    }

    $background_image = get_field('background_image');
    $background_image_mobile = get_field('background_image_mobile');

    // $back_link = get_field('back_link');

    // if ($back_link) {
    //     $button_text = $back_link['link_text'];
    //     $link_url = $back_link['link_url'];
    //     $link_page = $back_link['link_page'];
    //     $link = \Theme\Utils::get_link_url($link_url, $link_page);
    // }



    if (!$background_image_mobile) {
        $background_image_mobile = $background_image;
    }

    // $hero_size = get_field('hero_size');
    // $hero_size_class = '';
    // if ($hero_size && $hero_size == 'small') {
    //     $hero_size_class = ' content__internal-hero-panel--small ';
    // }

?>

    <section class="content content__internal-hero-panel <?php echo $generic_block_settings_classes; ?> <?php if ($background_image) echo ' animate fade-in'; ?>">


        <div class="bg-image-desktop"><?php if ($background_image) echo \Theme\Utils::get_image_html($background_image); ?></div>
        <div class="bg-image-mobile"><?php if ($background_image_mobile) echo \Theme\Utils::get_image_html($background_image_mobile); ?></div>

        <div class="container">



            <?php
            // if ($back_link && $link) {
            //     echo '<div class="back-link">';
            //     echo '<div class="back-link__col1"><div class="circle-button circle-button--arrow-left circle-button--small"></div></div>';
            //     echo '<div class="back-link__col2"><a href="' . $link . '">' . $button_text . '</a></div>';
            //     echo '</div>';
            // }
            ?>


            <div class="content-container <?php echo $text_colour_class; ?> animate fade-in">

                <?php if (!empty($meta_heading)) { ?>
                    <h1 class="meta-heading animate fade-up scrolled"><?php echo $meta_heading; ?></h1>
                <?php } ?>
                <h2 class="page-hero-title <?php echo $page_heading_margin_class; ?>"><?php echo $page_heading; ?></h2>
                <?php if (!empty($page_subheading)) { ?>
                    <p class="page-hero-introduction"><?php echo $page_subheading; ?></p>
                <?php } ?>

            </div>

        </div>

    </section>



<?php } ?>