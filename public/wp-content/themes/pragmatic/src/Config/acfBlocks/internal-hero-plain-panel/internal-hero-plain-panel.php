<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $meta_heading = get_field('meta_heading');
    $page_heading = get_field('page_heading');
    $page_subheading = get_field('page_subheading');

    $page_heading_margin_class = '';
    if ($page_subheading) {
        $page_heading_margin_class = ' page-hero-title--small-margin ';
    }


?>

    <section class="content content__internal-hero-plain-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container">
            <div class="content-container animate fade-in">

                <?php if (!empty($meta_heading)) { ?>
                    <h1 class="meta-heading animate fade-up scrolled"><?php echo $meta_heading; ?></h1>
                <?php } ?>
                <h2 class="page-hero-title <?php echo $page_heading_margin_class; ?>"><?php echo $page_heading; ?></h2>
                <?php if (!empty($page_subheading)) { ?>
                    <p class="page-hero-introduction"><?php echo $page_subheading; ?></p>
                <?php } ?>

            </div>

        </div>

    </section>



<?php } ?>