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

    <section class="panel content content__media-content-small-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <div class="content-container animate fade-up">
                <div class="content-container__col1">
                    <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, false, true); ?>
                </div>

                <?php
                $postion_class = '';
                if (!$heading && !$introduction) {
                    $postion_class = ' content-container__col2--center ';
                } ?>

                <div class="content-container__col2 <?php echo $postion_class; ?>">

                    <?php if ($heading) {
                        echo '<h2 class="section-title-small">' . $heading . '</h2>';
                    }

                    if ($introduction) {
                        echo '<p class="introduction">' . $introduction . '</p>';
                    }

                    if ($content) {

                        if (!$heading && !$introduction) {
                            echo '<h4 class="subheading">' . $content . '</h4>';
                        } else {
                            echo '<p class="description">' . $content . '</p>';
                        }
                    }
                    ?>

                </div>
            </div>

        </div>
        </div>
    </section>

<?php } ?>