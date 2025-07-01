<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

    $ticker_items = get_field(
        'logos'
    );
    $ticker_html = '';

    foreach ($ticker_items as $ticker_item) {

        // Open outer div
        $ticker_html .= '<div>';

        // Add ticker logo
        $ticker_html .= '<div class="ticker__item">' . get_image_html($ticker_item['logo'])
            . '<div class="dot"></div>'
            . '</div>';

        $ticker_html .= '</div>';
    }



    if ($is_preview) {
        include __DIR__ . '/../../_block-preview.php';
    } else {
?>

        <section class="panel content content__logo-ticker-panel <?php echo $generic_block_settings_classes; ?>">

            <div class="container animate fade-in">
                <h2 class="large left-bar"><span>our</span> clients</h2>

                <div class="ticker-container">
                    <div class="ticker">
                        <div class="ticker__list">
                            <?php echo $ticker_html ?>
                        </div>
                    </div>
                </div>
            </div>

        </section>
<?php
    }
}
?>


<script>
    var ticker = document.querySelector('.ticker'),
        list = document.querySelector('.ticker__list'),
        clone = list.cloneNode(true)

    ticker.append(clone)
</script>