<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {


    $meta_heading = get_field('meta_heading');
    $heading = get_field('heading');
    $description = get_field('description_text');
    $buttons = get_field('buttons');

    // $button = get_field('button');
    // $link_text = $button['link_text'];
    // $link_url = $button['link_url'];
    // $link_page = $button['link_page'];
    // $external_link = isset($button['external_link']) ? $button['external_link'] : false;
    // $link = \Theme\Utils::get_link_url($link_url, $link_page);

    // $link_icon_class = 'buttonV2--icon--arrow-right';
    // $external_target = '';
    // if ($external_link) {
    //     $link_icon_class = 'buttonV2--icon--external-link';
    //     $external_target = ' target="_blank" rel="noreferrer noopener" ';
    // }


?>

    <section class="panel content content__text-visual-panel <?php echo $generic_block_settings_classes ?>">

        <div class="crisp"></div>

        <div class="container">

            <div class="content-container animate fade-in">
                <div class="content-container__col1">
                    <h2 class="meta-heading"><?php echo $meta_heading; ?></h2>
                    <h3 class="section-title-small"><?php echo $heading; ?></h3>
                    <p class="description"><?php echo $description; ?></p>

                    <?php
                    if (!empty($buttons)) {
                        foreach ($buttons as $button) {
                            $button = $button['button'];
                            $link_text = $button['link_text'] ?? '';
                            $link_url = $button['link_url'] ?? '';
                            $link_page = $button['link_page'] ?? '';
                            $external_link = $button['external_link'] ?? false;

                            $link = \Theme\Utils::get_link_url($link_url, $link_page);

                            $link_icon_class = 'buttonV2--icon--arrow-right';
                            $external_target = '';
                            if ($external_link) {
                                $link_icon_class = 'buttonV2--icon--external-link';
                                $external_target = ' target="_blank" rel="noreferrer noopener" ';
                            }

                            if ($link && $link_text) {
                                echo '<a class="buttonV2 buttonV2--icon ' . $link_icon_class . ' animate fade-in" ' . $external_target . ' href="' . $link . '">' . $link_text . '</a>';
                            }
                        }
                    }
                    ?>

                </div>



            </div>





        </div>
    </section>

<?php } ?>