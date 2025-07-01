<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $column_one_title = get_field('column_one_title');
    $column_one_introduction = get_field('column_one_introduction');
    $column_two_introduction = get_field('column_two_introduction');

    $button = get_field('button');
    $link_text = $button['link_text'];
    $link_url = $button['link_url'];
    $external_link = isset($button['external_link']) ? $button['external_link'] : false;
    $link = \Theme\Utils::get_link_url($button['link_url'], $button['link_page']);

    $link_icon_class = 'buttonV2--icon--arrow-right';
    $external_target = '';
    if ($external_link) {
        $link_icon_class = 'buttonV2--icon--external-link';
        $external_target = ' target="_blank" rel="noreferrer noopener" ';
    }

    $video_embed_script = get_field('video_embed_script');
    $video_filename = get_field('video_filename');
    $video_caption = get_field('video_caption');

    $video_file = false;
    if ($video_filename)
        $video_file = THEMEROOT . '/images/' . get_field('video_filename');

    $video_poster_frame = get_field('video_poster_frame');

?>

    <section class="panel content content__summary-content-video-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <h2 class="meta-heading animate fade-up"><?php echo $meta_heading; ?></h2>
            <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>

            <div class="top-content-container animate fade-in">
                <h4 class="subheading"><?php echo $column_one_title; ?></h4>
                <p><?php echo $column_one_introduction; ?></p>
            </div>

            <!-- <div class="video-container animate fade-in"> -->
            <?php \Theme\Utils::render_video_embed($video_file, $video_poster_frame, $video_embed_script, get_the_title(), $video_caption, true);
            ?>
            <!-- </div> -->

            <div class="final-content-container animate fade-in">
                <p><?php echo $column_two_introduction; ?></p>

                <?php if ($link) { ?>
                    <a <?php echo $external_target; ?> class="buttonV2 buttonV2--icon <?php echo $link_icon_class; ?>" href="<?php echo $link; ?>">
                        <?php echo $link_text; ?>
                    </a>
                <?php } ?>

            </div>
    </section>
<?php
}
?>