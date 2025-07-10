<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $page_hero_panel = get_field('page_hero_panel');
    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $slides = get_field('slides');

    $panel_padding_overide = '';
    if ($page_hero_panel) {
        $panel_padding_overide = 'content__slider-video-text-panel--hero';
    }

    $slides_html = '';

    if ($slides) {
        foreach ($slides as $slide) {

            $slide_image_id = $slide['slide_image'];
            $slide_video = $slide['slide_video'];
            $slide_button = $slide['slide_button'];

            $link_icon_class = 'buttonV2--icon--arrow-right';
            $button_text = '';
            $external_link = '';
            $external_target = '';
            $link = '';


            if ($slide_button) {
                $button_text = $slide_button['link_text'];
                $external_link = isset($slide_button['external_link']) ? $slide_button['external_link'] : false;
                $link = \Theme\Utils::get_link_url($slide_button['link_url'], $slide_button['link_page']);

                if ($external_link) {
                    $link_icon_class = 'buttonV2--icon--external-link';
                    $external_target = ' target="_blank" rel="noreferrer noopener" ';
                }
            }




            $slide_media_html = '';

            if ($slide_image_id) {
                $slide_media_html = \Theme\Utils::get_image_html($slide_image_id);
            } else {
                if ($slide_video) {
                    $video_poster_frame = '';
                    $video_file = THEMEROOT . '/images/' . $slide_video;

                    $slide_media_html = '<div class="video-container">';
                    $slide_media_html .= '<video playsinline autoplay muted loop poster="' . $video_poster_frame . '">';
                    $slide_media_html .=  '<source src="' . $video_file . '" type="video/mp4">';
                    $slide_media_html .=  '</video>';
                    $slide_media_html .= '</div>';
                }
            }


            $slide_title = $slide['slide_title'];
            $slide_description = $slide['slide_description'];

            $slides_html .= '<div class="video-text-slider__slide">';

            $slides_html .= '<div class="content-container">';
            $slides_html .= '<div class="content-container__col1">';
            $slides_html .= $slide_media_html;
            $slides_html .= '</div>';

            $slides_html .= '<div class="content-container__col2">';

            if ($page_hero_panel) {
                $slides_html .= '<h1>' . $slide_title . '</h1>';
            } else {
                $slides_html .= '<h2 class="section-title-small">' . $slide_title . '</h2>';
            }

            $slides_html .= '<p>' . $slide_description . '</p>';

            if ($button_text != '') {
                $slides_html .= '<a class="buttonV2 buttonV2--icon ' . $link_icon_class . ' animate fade-in" ' . $external_target . ' href="' . $link . '">' . $button_text . '</a>';
            }

            $slides_html .= '</div>';

            $slides_html .= '</div>';

            $slides_html .= '</div>';
        }
    }
?>

    <section class="panel content content__slider-video-text-panel <?php echo $panel_padding_overide; ?> <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <div class="content-container animate fade-in">

                <?php if ($meta_heading) { ?>
                    <h2 class="meta-heading"><?php echo $meta_heading; ?></h2>
                <?php } ?>

                <?php if ($heading) { ?>
                    <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>
                <?php } ?>

                <div class="video-text-slider">
                    <div class="video-text-slider__slides-wrapper">
                        <div class="video-text-slider__slides">
                            <?php echo $slides_html ?>
                        </div>
                    </div>
                    <div class="video-text-slider__pagination"></div>
                </div>

            </div>
        </div>
    </section>
<?php } ?>