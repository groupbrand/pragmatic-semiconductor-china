<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

$desktop_image = get_field('desktop_image');
$desktop_image_width = get_field('desktop_image_width');

$desktop_max_width_str = '';
if ($desktop_image_width) {
    $desktop_max_width_str = 'style="max-width:' . $desktop_image_width . 'px;"';
}




$mobile_image = get_field('mobile_image');
$mobile_image_width = get_field('mobile_image_width');

$mobile_max_width_str = '';
if ($mobile_image_width) {
    $mobile_max_width_str = 'style="max-width:' . $mobile_image_width . 'px;"';
}

if (!$is_preview && !$generic_block_settings['hide_panel']) {
    $content = get_field('content');
?>

    <section class="panel content content__static-image-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <div class="image-desktop">
                <?php
                if ($desktop_image) {
                    $image_html = \Theme\Utils::get_image_html($desktop_image);
                    //                    $replace_str = '<img '.$desktop_max_width_str.;
                    $image_html = str_replace('<img', '<img ' . $desktop_max_width_str . '', $image_html);
                    echo $image_html;
                }
                ?>
            </div>
            <div class="image-mobile">
                <?php
                if ($mobile_image) {
                    $image_html =  \Theme\Utils::get_image_html($mobile_image);
                    $image_html = str_replace('<img', '<img style="max-width:' . $mobile_image_width . 'px;"', $image_html);
                    echo $image_html;
                }
                ?>
            </div>


        </div>
    </section>

<?php
}
?>