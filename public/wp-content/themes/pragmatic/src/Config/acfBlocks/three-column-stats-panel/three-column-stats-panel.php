<?php

include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $title = get_field('title');
    $stats = get_field('stats_panel');

    $cols_class = '';
    if (count($stats) == 2) {
        $cols_class = ' content-container--two-cols ';
    }

    $stats_html = ''; // Ensure this is always defined

    if ($stats) {
        foreach ($stats as $stat) {
            $front_prefix = !empty($stat['front_prefix']) ? $stat['front_prefix'] : '';
            $stat_number = $stat['stat_number'];
            $stat_prefix = $stat['stat_prefix'];
            $stat_label = $stat['stat_label'];
            $stat_content = $stat['stat_content'];

            $stats_html .= '<div class="content-container__col">';

            $stats_html .= '<div class="stat-container">';

            $stats_html .= '<h3>' . (!empty($front_prefix) ? '<span>' . $front_prefix . '</span>' : '') .
                '<span class="stat-number" data-value="' . intval($stat_number) . '">0</span>' .
                $stat_prefix . '</h3>';

            $stats_html .= '<p class="stat-label">' . $stat_label . '</p>';

            $stats_html .= '</div>';

            $stats_html .= '<div class="summary-container">';
            $stats_html .= '<p class="stat-content">' . $stat_content . '</p>';
            $stats_html .= '</div>';
            $stats_html .= '</div>';
        }
    }

?>

    <section class="panel content content__three-column-stats-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <h2 class="section-title-small animate fade-up"><?php echo $title; ?></h2>

            <div class="content-container <?php echo $cols_class; ?>">
                <?php echo $stats_html; ?>
            </div>
        </div>
    </section>

<?php } ?>