<?php

/**
 * Template Name: Content Panels Map Page
 */
get_header();
the_content();

$args = [
    'post_type' => 'page',
    'posts_per_page' => -1,
    'post_status' => 'publish',
];

$pages = get_posts($args);

?>

<section class="panel content">
    <div class="container">

        <?php foreach ($pages as $page) {
            echo '<b>' . $page->post_title . '</b>';

            if (has_blocks($page->post_content)) {
                $blocks = parse_blocks($page->post_content);

                echo '<ul>';
                foreach ($blocks as $block) {
                    if ($block['blockName'])
                        echo '<li>' . $block['blockName'] . '</li>';
                }
                echo '</ul>';
            }

            echo '<hr/>';
        }
        ?>


    </div>
</section>



</div>
</section>
<?php
get_footer();
