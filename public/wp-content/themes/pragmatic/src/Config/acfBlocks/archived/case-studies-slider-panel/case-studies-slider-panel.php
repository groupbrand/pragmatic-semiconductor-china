<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    // Generic Section Heading
    $case_studies = get_field('case_studies');

?>
    <section class="panel content content__case-studies-slider-panel <?php echo $generic_block_settings_classes; ?>">


        <?php
        $slider_html = '';

        foreach ($case_studies as $post) {

            $post = get_post($post);
            $client = get_post_meta($post->ID, 'client', true);
            $featured_heading = get_post_meta($post->ID, 'project_headline', true);

            $image_id = get_post_thumbnail_id($post->ID);
            $image_html = ($image_id ? get_image_html($image_id) : '');

            $slider_html .= '<div class="case-studies-slider__slide">'
                . '<div class="case-study-panel case-study-panel--landscape">'
                . '<div class="image-container">'
                . $image_html
                . '</div>'
                . '<div class="content-title-container content--title-container--large">'
                . '<div class="project-client">leap<span>and</span>' . $client . '</div>'
                . '<h2>' . $featured_heading . '</h2>'
                . '<a class="link" href="' . get_permalink($post->ID) . '">view case study</a>'
                . '</div>'
                . '</div>'
                . '</div>';
        }
        ?>

        <div class="case-studies-slider animate fade-in">

            <div class="case-studies-slider__slides">
                <?php echo $slider_html; ?>
            </div>



        </div>

        <div class="container">
            <div class="case-studies-slider__pagination">
                <div class="case-studies-slider__pagination__col1">
                    <hr />
                </div>
                <div class="case-studies-slider__pagination__col2">
                    <div class="case-studies-slider__pagination-bullets"></div>
                </div>
                <div class="case-studies-slider__pagination__col3"><a class="link link--chevron" href="/our-work/">view all</a>
                </div>
            </div>
        </div>



    </section>

<?php
}
?>