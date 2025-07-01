<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $breadcrumb_link =  get_field('breadcrumb_link_link_text');
    $link_url =  get_field('breadcrumb_link_link_url');
    $link_page =  get_field('breadcrumb_link_link_page');
    $link = get_link_url($link_url, $link_page);

    $heading = get_field('heading');
    $introduction = get_field('introduction');
    $buttons = get_field('buttons');
?>

    <section class="panel content content__intro-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow animate fade-up">

            <div class="content">

                <?php if ($breadcrumb_link) {
                    echo '<a class="link link--chevron-left" href="' . $link . '">' . $breadcrumb_link . '</a>';
                }
                ?>
                <h1><?php echo $heading; ?></h1>
                <h2><?php echo $introduction; ?></h2>

                <?php if ($buttons) {
                    foreach ($buttons as $button) {

                        $button_text =  $button['button']['link_text'];
                        $link_url =  $button['button']['link_url'];
                        $link_page =  $button['button']['link_page'];
                        $link = get_link_url($link_url, $link_page);

                        echo '<a class="link mr-30" href="' . $link . '">' . $button_text . '</a>';
                    }
                } ?>
            </div>

        </div>


    </section>

<?php
}
?>