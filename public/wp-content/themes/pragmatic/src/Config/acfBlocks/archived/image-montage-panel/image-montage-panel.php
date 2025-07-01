<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $large_image = get_field('large_image');
    $large_image_vimeo_video_id = get_field('large_image_vimeo_video_id');

    $small_image_one = get_field('small_image_one');
    $small_image_one_vimeo_video_id = get_field('small_image_one_vimeo_video_id');

    $small_image_two = get_field('small_image_two');
    $small_image_two_vimeo_video_id = get_field('small_image_two_vimeo_video_id');

?>

    <section class="panel content content__image-montage-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <div class="content-container">
                <div class="content-container__col1 animate fade-in">
                    <?php echo get_image_html($large_image);

                    if ($large_image_vimeo_video_id) {
                        echo '<a class="play_video_button" data-fancybox="video-gallery" href="https://vimeo.com/' . $large_image_vimeo_video_id . '"></a>';
                    }

                    ?>


                </div>
                <div class="content-container__col2 animate fade-in">

                    <div class="image-container">
                        <?php echo get_image_html($small_image_one);

                        if ($small_image_one_vimeo_video_id) {
                            echo '<a class="play_video_button" data-fancybox href="https://vimeo.com/' . $small_image_one_vimeo_video_id . '"></a>';
                        } ?>

                    </div>

                    <div class="image-container">
                        <?php echo get_image_html($small_image_two);

                        if ($small_image_two_vimeo_video_id) {
                            echo '<a class="play_video_button" data-fancybox href="https://vimeo.com/' . $small_image_two_vimeo_video_id . '"></a>';
                        }

                        ?>
                    </div>
                </div>
            </div>
    </section>


<?php
}

?>