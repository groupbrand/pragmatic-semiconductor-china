<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $case_studies = get_field('featured_case_studies');
    $show_heading = get_field('show_heading');

?>

    <section class="content content__case-studies-promo-panel <?php echo $generic_block_settings_classes; ?>">

        <?php if ($show_heading) { ?>
            <div class="container container--narrow animate fade-in">
                <h2 class="large left-bar"><span>case</span> studies</h2>
            </div>
        <?php } ?>

        <div class="case-studies-container">
            <?php

            foreach ($case_studies as $case_study) {

                $featured_heading = get_post_meta($case_study->ID, 'project_headline', true);
                $featured_image_id = get_post_thumbnail_id($case_study->ID);
                $client = get_post_meta($case_study->ID, 'client', true);
                $featured_image_html = ($featured_image_id ? get_image_html($featured_image_id) : '');

                echo '<div class="case-studies-container__col animate fade-in">';
                echo '<a href="' . get_permalink($case_study->ID) . '">';
                echo '<div class="case-study-panel">';
                echo '<div class="image-container">';
                echo $featured_image_html;
                echo '</div>';
                echo '<div class="content-title-container">';
                echo '<div class="project-client">leap<span>and</span>' . $client . '</div>';
                echo '<h2>' . $featured_heading . '</h2>';
                echo '<div class="link link--no-hover">view case study</div>';
                echo '</div>';
                echo '</div>';
                echo '</a>';
                echo '</div>';
            }
            ?>

    </section>

<?php
}
?>