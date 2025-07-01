<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $heading = get_field('heading');
    $introduction = get_field('introduction');
    $description = get_field('description');
    $main_video = get_field('main_video');
    $content = get_field('content');

    // Setup main video
    $video_embed_script = $main_video['video_embed_script'];
    $video_filename = $main_video['video_filename'];
    $video_caption = $main_video['video_caption'];
    $video_file = false;
    if ($video_filename)
        $video_file = THEMEROOT . '/images/' . $main_video['video_filename'];
    $video_poster_frame = $main_video['video_poster_frame'];

?>

    <section class="panel content content__media-content-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <div class="top-content-container">

                <h2 class="section-title-medium animate fade-up"><?php echo $heading; ?></h2>
                <p class="introduction animate fade-up"><?php echo $introduction; ?></p>

                <?php if ($content) { ?>
                    <p class="description"><?php echo $content; ?></p>
                <?php } ?>
            </div>


            <div class="video-content-container animate fade-up">
                <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, false, false); ?>
            </div>

        </div>
        </div>
    </section>

<?php } ?>