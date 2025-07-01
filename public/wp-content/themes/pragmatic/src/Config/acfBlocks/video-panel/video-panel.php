<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $video_embed_script = get_field('video_embed_script');
    $video_filename = get_field('video_filename');
    $video_caption = get_field('video_caption');
    $video_settings = get_field('settings');


    $video_file = false;
    if ($video_filename)
        $video_file = THEMEROOT . '/images/' . get_field('video_filename');

    $video_poster_frame = get_field('video_poster_frame');
    $image_html = '';

    $container_class = ($video_settings === 'indented') ? 'container' : '';

?>

    <section class="panel content content__video-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="<?php echo $container_class; ?>">
            <div class="video-container-outer animate fade-in">
                <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, false);
                ?>
            </div>
        </div>



    </section>

<?php } ?>