<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $events = \Theme\Utils::get_upcoming_events();
?>
    <section class="panel content content__events-upcoming-lister-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <?php

            if (count($events) == 0) {
                echo '<h3 class="section-title-smaller">There are no upcoming events. Check out our past events below.</h3>';
            } else {


                foreach ($events as $event) {

                    $item_date = get_post_meta($event->ID, 'display_date', true);
                    $item_time = get_post_meta($event->ID, 'display_time', true);
                    $location = get_post_meta($event->ID, 'location', true);
                    $duration = get_post_meta($event->ID, 'duration', true);
                    $heading = \Theme\Utils::getTrimmedHeading($event->post_title);
                    $external_url_link = get_post_meta($event->ID, 'external_url_link', true);


                    $image = get_post_thumbnail_id($event->ID);

                    $button_icon_class = ' buttonV2--icon--small--arrow-right ';
                    $target = '';
                    if ($external_url_link) {
                        $url = $external_url_link;
                        $button_icon_class = ' buttonV2--icon--small--external-link ';
                        $target = ' target="_blank" rel="noopener noreferrer" ';
                    } else {
                        $url = get_the_permalink($event->ID);
                    }


                    $primary_term =  \Theme\Utils::get_post_primary_term_name('event_categories', $event->ID);

                    $category_tag = '';
                    if ($primary_term) {
                        $category_tag = '<div class="card-tag">' . $primary_term . '</div>';
                    }

                    echo '<div class="events-lister-container">';
                    echo '<div class="events-lister-container__col1">';
                    echo $category_tag;
                    if ($item_date) {
                        echo '<p class="card-details">' . $item_date . '</p>';
                    }
                    if ($location) {
                        echo '<p class="card-details">' . $location . '</p>';
                    }

                    if ($duration) {
                        echo '<p class="card-details">' . $duration . '</p>';
                    }
                    if ($item_time) {
                        echo '<p class="card-details">' . $item_time . '</p>';
                    }

                    echo '</div>';

                    echo '<div class="events-lister-container__col2">';
                    echo '<a ' . $target . '" href="' . $url . '">';
                    echo '<h2 class="subheading">' . $event->post_title . '</h2>';
                    echo '</a>';
                    echo '</div>';

                    echo '<div class="events-lister-container__col3">';
                    echo '<a ' . $target . ' class="buttonV2 buttonV2--icon buttonV2--icon--small ' . $button_icon_class . '" href="' . $url . '">View</a>';
                    echo '</div>';
                    echo '</div>';
                }
            }
            ?>
        </div>
    </section>

<?php
}
?>