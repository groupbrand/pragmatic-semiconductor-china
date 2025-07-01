<?php

include __DIR__ . '/../_block-generics.php';

$stat_one_number = get_field('stat_one_number');
$stat_one_label = get_field('stat_one_label');

$stat_two_number = get_field('stat_two_number');
$stat_two_label = get_field('stat_two_label');

$stat_three_number = get_field('stat_three_number');
$stat_three_label = get_field('stat_three_label');


if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {
?>

    <section class="panel content content__stats-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container container--narrow">

            <div class="stats-container">
                <div class="stats-container__col">
                    <div class="stat-container">
                        <div class="stat-number">
                            <span data-value="<?php echo $stat_one_number; ?>">0</span>
                        </div>
                        <h3><?php echo $stat_one_label; ?></h3>
                    </div>
                </div>
                <div class="stats-container__col">
                    <div class="stat-container">
                        <div class="stat-number">
                            <span data-value="<?php echo $stat_two_number; ?>">0</span>
                        </div>
                        <h3><?php echo $stat_two_label; ?></h3>
                    </div>
                </div>
                <div class="stats-container__col">
                    <div class="stat-container">
                        <div class="stat-number">
                            <span data-value="<?php echo $stat_three_number; ?>">0</span>
                        </div>
                        <h3><?php echo $stat_three_label; ?></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php
}
?>