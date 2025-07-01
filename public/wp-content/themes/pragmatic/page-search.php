<?php

/**
 * Template Name: Search Page
 */
get_header();
?>

<section class="content" style="margin-top: 200px" ;>
    <div class="container">
        <h2>SEARCH PAGE</h2>
        <p>This is a test page which searches for the word pragtest in the body copy of pages, posts & events to check all content is indexed.</p>

        <?php
        $args = [
            'post_type' => ['page', 'events', 'post'],
            'posts_per_page' => -1,
            'order' => 'ASC',
            's' => 'pragtest',
            'orderby' => 'relevance'
        ];
        $posts = new WP_Query($args);
        $results = [];

        foreach ($posts->posts as $post) {
            echo "<h6>" . $post->post_title . " (" . $post->post_type . ")</h6><hr/><br>";
        }
        ?>

    </div>
</section>

<?php
get_footer();
