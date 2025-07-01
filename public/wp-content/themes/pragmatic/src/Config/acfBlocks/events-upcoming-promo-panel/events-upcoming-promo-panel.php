<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $events = \Theme\Utils::get_upcoming_events(3);

    //echo $block['data']['generic_block_settings'];


    if (!empty($events)) {
?>

        <section class="panel content content__events-upcoming-promo-panel <?php echo $generic_block_settings_classes; ?>">
            <div class="container">

                <?php if ($meta_heading) { ?>
                    <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>
                <?php } ?>

                <?php if ($heading) { ?>
                    <h3 class="section-title-small animate fade-up"><?php echo $heading; ?></h3>
                <?php } ?>


                <div class="content-container animate fade-in">
                    <?php

                    foreach ($events as $event) {

                        //echo print_r($event);

                        $external_url_link = get_post_meta($event->ID, 'external_url_link', true);
                        $item_date = get_post_meta($event->ID, 'display_date', true);
                        $item_time = get_post_meta($event->ID, 'display_time', true);
                        $location = get_post_meta($event->ID, 'location', true);
                        $duration = get_post_meta($event->ID, 'duration', true);

                        $external_url_link = get_post_meta($event->ID, 'external_url_link', true);

                        $button_icon_class = ' buttonV2--icon--arrow-right ';
                        $target = '';
                        if ($external_url_link) {
                            $url = $external_url_link;
                            $button_icon_class = ' buttonV2--icon--external-link ';
                            $target = ' target="_blank" rel="noopener noreferrer" ';
                        } else {
                            $url = get_the_permalink($event->ID);
                        }


                        echo '<div class="content-container__col">';



                        if ($item_date) {
                            echo '<p class="card-details">' . $item_date . '</p>';
                        }

                        if ($item_time) {
                            echo '<p class="card-details">' . $item_time . '</p>';
                        }

                        if ($location) {
                            echo '<p class="card-details">' . $location . '</p>';
                        }

                        if ($duration) {
                            echo '<p class="card-details">' . $duration . '</p>';
                        }


                        echo '<h3 class="subheading">' . $event->post_title . '</h4>';

                        echo '<div class="button-container">';
                        echo '<a ' . $target . ' href="' . $url  . '" class="buttonV2 buttonV2--icon ' . $button_icon_class . '">';
                        echo 'Learn more' . '</a>';
                        echo '</div>';


                        echo '</div>';
                    }

                    ?>
                </div>
            </div>
        </section>

<?php }
}
?>