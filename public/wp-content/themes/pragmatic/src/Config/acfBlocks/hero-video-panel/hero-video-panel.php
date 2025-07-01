<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview) {

    $heading = get_field('heading');

    $video_filename = get_field('video_filename');
    $video_poster_frame = get_field('video_poster_frame');

    $mobile_video_filename = get_field('mobile_video_filename');
    $mobile_poster_frame = get_field('mobile_poster_frame');

    $video_file = false;
    if ($video_filename)
        $video_file = THEMEROOT . '/images/' . $video_filename;

    $mobile_video_file = false;
    if ($mobile_video_filename) {
        $mobile_video_file = THEMEROOT . '/images/' . $mobile_video_filename;
    }

?>

    <section class="content content__hero-video-panel <?php echo $generic_block_settings_classes; ?>">

        <?php

        // Display poster image
        if (!$video_file && !$mobile_video_file) {
            echo '<div class="hero-bg-video animate fade-in">';
            echo '<img class="image-desktop" src="' . $video_poster_frame . '">';
            echo '<img class="image-mobile" src="' . $mobile_video_file . '">';
            echo '</div>';
        } else {
            echo '<div class="hero-bg-video">';

            echo '<div class="video-container">';

            // if there is no mobile video - then we just render desktop one and make sure it auto plays
            // The desktop ID is only added if both videos exist, so the JS to preload and switch them only applies if both videos exist.
            $desktop_only_render = ' preload="none" ';
            $desktop_id = 'id="hero-desktop-video"';
            if (!$mobile_video_filename) {
                $desktop_only_render = ' autoplay ';
                $desktop_id = '';
            }

            if ($video_filename) {
                echo '<video ' . $desktop_id . ' playsinline ' . $desktop_only_render . ' muted loop poster="' . $video_poster_frame . '">';
                echo '<source src="' . $video_file . '" type="video/mp4">';
                echo '</video>';
            }
            if ($mobile_video_filename) {

                echo '<video id="hero-mobile-video" playsinline preload="none" muted loop poster="' . $mobile_poster_frame . '">';
                echo '<source src="' . $mobile_video_file . '" type="video/mp4">';
                echo '</video>';
            }

            echo '</div>';



            echo '</div>';
        }

        if ($heading) {
            echo '<div class="home-hero-content">';
            echo '<h1 class="animate fade-in">' . $heading . '</h1>';
            echo '</div>';
        }

        echo '<div class="scroll-button">';
        echo '<a class="circle-buttonV2 circle-buttonV2--arrow-down circle-buttonV2--solid-yellow-solid-black" href="#scroll-to-content"></a>';
        echo '</div>';

        ?>

    </section>

<?php
}
?>