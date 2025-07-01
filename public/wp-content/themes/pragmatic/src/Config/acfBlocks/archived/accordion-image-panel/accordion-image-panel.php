<?php

include __DIR__ . '/../_block-generics.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $section_header = get_field('section_header');
    $accordion_image_items = get_field('accordion_image_items');
    $accordion_image_html = '';

    if ($accordion_image_items) {
        foreach ($accordion_image_items as $index => $accordion_image_item) {
            $accordion_image_item_title = $accordion_image_item['accordion_title'];
            $accordion_image_item_link = $accordion_image_item['accordion_title_link'];
            $accordion_image_item_description = $accordion_image_item['accordion_description'];
            $accordion_image_item_image = $accordion_image_item['image'];

            $accordion_image_html .= '<div class="accordion-image__item" data-image="' . $accordion_image_item_image . '">';
            $accordion_image_html .= '<div class="button-container">';
            $accordion_image_html .= '<h3>' . $accordion_image_item_title . '</h3>';
            $accordion_image_html .= '<a href="' . $accordion_image_item_link . '" class="circle-button circle-button--responsive circle-button--arrow-right"></a>';
            $accordion_image_html .= '</div>';
            $accordion_image_html .= '<div class="accordion-image__content">';
            $accordion_image_html .= '<p class="description">' . $accordion_image_item_description . '</p>';
            $accordion_image_html .= '</div>';
            $accordion_image_html .= '</div>';
        }
    }

?>


    ?>

    <section class="panel content content__accordion-image-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">
            <h2 class="meta-heading animate fade-in"><?php echo $section_header; ?></h2>
            <div class="accordion-image animate fade-in">
                <div class="accordion-image__items animate fade-up">
                    <?php echo $accordion_image_html; ?>
                </div>
                <div class="accordion-image__image-container">
                    <img src="" alt="Accordion Image" id="accordion-image__image">
                </div>
            </div>
        </div>
    </section>

<?php } ?>