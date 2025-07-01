<?php

if ($is_preview) {
    $preview_image = $block['example']['attributes']['data']['preview_image_help'];
    if ($preview_image) {

        echo '<img src="' . THEMEROOT . $preview_image  . '" style="width:100%; height:auto;">';
    }
}
