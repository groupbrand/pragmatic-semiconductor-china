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
    $content = get_field('content');
?>

    <section class="panel content content__video-embed-hero-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container animate fade-in">

            <div class="content-container">
                <h1 class="meta-heading"><?php echo $meta_heading; ?></h1>
                <h2 class="page-hero-title"><?php echo $page_heading; ?></h2>
                <p class="page-hero-introduction"><?php echo $introduction; ?></p>
            </div>

            <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, true); ?>

            <div class="content-container">
                <div class="main-content animate fade-up"><?php echo $content; ?></div>
            </div>

        </div>


        </div>

    </section>

<?php } ?>