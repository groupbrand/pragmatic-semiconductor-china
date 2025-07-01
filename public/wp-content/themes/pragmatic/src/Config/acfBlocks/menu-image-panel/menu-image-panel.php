<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $menu_items = get_field('menu_items');


?>

    <section class="panel content content__menu-image-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <h2 class="meta-heading animate fade-in"><?php echo $meta_heading; ?></h2>

            <div class="menu-image-container">

                <div class="menu-image-container__col1">

                    <?php

                    foreach ($menu_items as $key => $menu_item) {

                        $link_obj = $menu_item['link'];
                        $link = '';
                        if ($link_obj) {
                            $link_url = $link_obj['link_url'];
                            $link_page = $link_obj['link_page'];
                            $link = \Theme\Utils::get_link_url($link_url, $link_page);
                        }


                        $no_bottom_border_class = '';
                        if (($key + 1) == count($menu_items)) {
                            $no_bottom_border_class = ' option-container--no-border';
                        }

                        echo '<a class="no-ul" href="' . $link . '"><div data-id="' . $key . '" class="option-container ' . $no_bottom_border_class . '">';
                        echo '<div class="option-container__col1">';
                        echo '<h3 data-id="' . $key . '" class="section-title menu-rollover">' . $menu_item['heading'] . '</h3>';
                        echo '</div>';
                        echo '<div class="option-container__col2">';
                        echo '<div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right"></div>';
                        echo '</div>';
                        echo '</div></a>';
                    }

                    ?>
                </div>

                <div class="menu-image-container__col2">


                    <div class="image-container">

                        <?php
                        foreach ($menu_items as $key => $menu_item) {
                            echo '<img class="menu-image ' . ($key == 0 ? ' show ' : '') . '" id="image-' . $key . '" src="' . $menu_item['image'] . '"/>';
                        }

                        //echo '<img id="image-active" src="' . $menu_items[0]['image'] . '"/>';
                        ?>
                    </div>

                </div>

            </div>

        </div>


    </section>

<?php } ?>