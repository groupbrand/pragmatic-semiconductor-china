<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $job_vacancies = get_job_vacancies();

?>

    <section class="panel content content__job-vacancies-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow">

            <?php

            echo '<h2 class="large left-bar animate fade-in"><span>our</span> roles</h2>';

            ?>

            <div class="job-roles-container">

                <?php
                foreach ($job_vacancies as $job_vacancy) {
                    echo '<div class="job-roles-container__row animate fade-up">';

                    echo '<h3 class="title">' . $job_vacancy->post_title . '</h3>';
                    echo '<p class="introduction">' . get_post_meta($job_vacancy->ID, 'introduction', true) . '</p>';

                    echo '<div class="detail-container">';
                    echo '<div class="detail-container__col">';
                    echo '<div class="location"><span>Location:</span> ' . get_post_meta($job_vacancy->ID, 'location', true) . '</div>';
                    echo '</div>';

                    echo '<div class="detail-container__col">';
                    echo '<div class="job-area"><span>Job Area:</span> ' . get_post_meta($job_vacancy->ID, 'job_area', true) . '</div>';
                    echo '</div>';

                    echo '</div>';

                    echo '<a class="link" href="' . get_permalink($job_vacancy->ID) . '">view role details</a>';

                    echo '</div>';
                } ?>
            </div>


            <div class="nothing-suitable-container animate fade-in">

                <h2 class="large"><?php echo get_field('nothing_suitable_heading', 'options'); ?></h2>
                <div><?php echo get_field('nothing_suitable_content', 'options'); ?></div>

                <?php
                echo '<div class="detail-container">';
                echo '<div class="detail-container__col">';
                echo '<div class="email"><a href="mailto:' . get_field('careers_email_address', 'options') . '">' . get_field('careers_email_address', 'options') . '</a></div>';
                echo '</div>';

                echo '<div class="detail-container__col">';
                echo '<div class="phone"><a href="tel:' . get_field('leap_london_phone_number_link', 'options') . '">' . get_field('leap_london_phone_number_display', 'options') . '</a></div>';
                echo '</div>';

                echo '</div>';
                ?>

            </div>


        </div>
    </section>

<?php
}
?>