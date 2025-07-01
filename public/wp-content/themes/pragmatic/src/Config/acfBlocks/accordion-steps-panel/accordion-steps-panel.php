<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {
    $meta_heading = get_field('meta_heading');

    $heading = get_field('heading');

?>

    <section class="panel content content__accordion-steps-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container animate fade-up">

            <?php
            if (!empty($meta_heading)) {
                echo '<h1 class="meta-heading animate fade-in">' . $meta_heading . '</h1>';
            }


            echo '<h2 class="section-title-small animate fade-up">' . $heading . '</h2>';
            ?>

            <div class="accordion-steps-container">

                <?php
                $accordion_column_one_items = get_field('accordion_column_one_items');
                $accordion_column_two_items = get_field('accordion_column_two_items');

                $count = 1;
                if (!empty($accordion_column_one_items)) {

                    echo '<div class="accordion-steps-container__col">';

                    echo '<div class="accordion-steps">';
                    foreach ($accordion_column_one_items as $key => $accordion_item) {
                        $accordion_heading = $accordion_item['heading'];
                        $accordion_content = $accordion_item['content'];

                        echo '<details>';
                        echo '<summary class="accordion-title">';
                        echo '<div class="accordion-title__cola">';
                        echo '<div class="count"><p>' . $count . '</p></div>';
                        echo '</div>';
                        echo '<div class="accordion-title__col1">';
                        echo '<h3 class="subheading">' . $accordion_heading . '</h3>';
                        echo '</div>';
                        echo '<div class="accordion-title__col2">';
                        echo '<div class="accordion-icon">';
                        echo '<div class="accordion-icon__left"></div>';
                        echo '<div class="accordion-icon__right"></div>';
                        echo '</div>';
                        echo '</div>';
                        echo '</summary>';
                        echo '<div class="accordion__content post-content content">';
                        echo $accordion_content;
                        echo '</div>';
                        echo '</details>';




                        // echo '<div class="accordion-steps__item">';
                        // echo '<details>';
                        // echo '<summary class="accordion-steps__title">';
                        // echo '<div class="accordion-steps__title__col1"><div class="count">' . $count . '</div></div>';
                        // echo '<div class="accordion-steps__title__col2">' . $accordion_heading . '</div>';
                        // echo '<div class="accordion-steps__title__col3">';

                        // echo '<div class="accordion-icon">';
                        // echo '<div class="accordion-icon__left"></div>';
                        // echo '<div class="accordion-icon__right"></div>';
                        // echo '</div>';

                        // echo '</div>';
                        // echo '</summary>';
                        // echo '<div class="accordion-steps__content">';

                        // echo '<div>' . $accordion_content . '</div>';
                        // echo '</div>';
                        // echo '</details>';
                        // echo '</div>';

                        $count++;
                    }

                    echo '</div>';
                    echo '</div>';
                }


                $accordion_column_two_items = get_field('accordion_column_two_items');

                if (!empty($accordion_column_two_items)) {

                    echo '<div class="accordion-steps-container__col">';
                    echo '<div class="accordion-steps">';
                    foreach ($accordion_column_two_items as $key => $accordion_item) {
                        $accordion_heading = $accordion_item['heading'];
                        $accordion_content = $accordion_item['content'];

                        echo '<details>';
                        echo '<summary class="accordion-title">';
                        echo '<div class="accordion-title__cola">';
                        echo '<div class="count"><p>' . $count . '</p></div>';
                        echo '</div>';
                        echo '<div class="accordion-title__col1">';
                        echo '<h3 class="subheading">' . $accordion_heading . '</h3>';
                        echo '</div>';
                        echo '<div class="accordion-title__col2">';
                        echo '<div class="accordion-icon">';
                        echo '<div class="accordion-icon__left"></div>';
                        echo '<div class="accordion-icon__right"></div>';
                        echo '</div>';
                        echo '</div>';
                        echo '</summary>';
                        echo '<div class="accordion__content post-content content">';
                        echo $accordion_content;
                        echo '</div>';
                        echo '</details>';

                        // echo '<div class="accordion-steps__item">';
                        // echo '<details>';
                        // echo '<summary class="accordion-steps__title">';
                        // echo '<div class="accordion-steps__title__col1"><div class="count">' . $count . '</div></div>';
                        // echo '<div class="accordion-steps__title__col2">' . $accordion_heading . '</div>';
                        // echo '<div class="accordion-steps__title__col3"><div class="accordion-icon"></div></div>';
                        // echo '</summary>';
                        // echo '<div class="accordion-steps__content">';

                        // echo '<div>' . $accordion_content . '</div>';
                        // echo '</div>';
                        // echo '</details>';
                        // echo '</div>';

                        $count++;
                    }

                    echo '</div>';
                    echo '</div>';
                }
                ?>







            </div>
    </section>
<?php
}
?>