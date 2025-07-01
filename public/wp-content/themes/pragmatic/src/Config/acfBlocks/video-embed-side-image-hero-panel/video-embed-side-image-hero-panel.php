<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $page_heading = get_field('page_heading');
    $introduction = get_field('introduction');

    $video_embed_script = get_field('video_embed_script');
    $video_filename = get_field('video_filename');
    $video_caption = get_field('video_caption');

    $video_file = false;
    if ($video_filename)
        $video_file = THEMEROOT . '/images/' . get_field('video_filename');

    $video_poster_frame = get_field('video_poster_frame');

    // Set in block-generics above - This changes the pattern in column 2 to the dots.
    $background_colour = (isset($generic_block_settings['background_colour']) ? $generic_block_settings['background_colour'] : '');

    $dots_obj = '';
    $pattern_obj = '';
    if ($background_colour == 'charcoal-grey') {
        $dots_obj = '<div class="bg-dots"></div>';
    } else {
        $pattern_obj = '<div class="bg-pattern"></div>';
    }


?>

    <section class="panel content content__video-embed-side-image-hero-panel  <?php echo $generic_block_settings_classes; ?>">

        <?php echo $dots_obj; ?>

        <div class="container">

            <div class="content-container animate fade-in">
                <div class="content-container__col1">
                    <h1 class="meta-heading"><?php echo $meta_heading; ?></h1>
                    <h2 class="page-hero-title"><?php echo $page_heading; ?></h2>
                    <p class="hero-introduction"><?php echo $introduction; ?></p>
                </div>

                <div class="content-container__col2"><?php echo $pattern_obj; ?></div>
            </div>



            <div class="video-container-outer">
                <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, true);
                ?>
            </div>


        </div>

        <div class="overlay-panel"></div>

    </section>

<?php } ?>