<?php
include __DIR__ . '/../_block-generics.php';


if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {
?>

    <section class="panel content content__case-studies-lister-panel <?php echo $generic_block_settings_classes; ?>">

        <div class="container container--narrow">
            <h1 class="animate fade-up"><span>case</span> studies</h1>
        </div>

        <div id="vue-app" data-app="case-studies-search"></div>


    </section>

<?php
}
?>