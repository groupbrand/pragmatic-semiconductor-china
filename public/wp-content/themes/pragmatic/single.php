<?php
get_header();

while (have_posts()) {
    the_post();

    $featured_image_id = get_post_thumbnail_id(get_the_ID());

    $primary_term =  \Theme\Utils::get_post_primary_term_name('category', get_the_ID());
    $external_url_link = get_post_meta(get_the_ID(), 'external_url_link', true);

    $item_date = get_the_date('j. M. Y');
    $mins_read = get_post_meta(get_the_ID(), 'mins_read', true);
    $author = get_post_meta(get_the_ID(), 'author', true);
    $job_title_company = get_post_meta(get_the_ID(), 'job_title_company', true);
    $show_featured_image = get_post_meta(get_the_ID(), 'show_featured_image', true);
    $selected_articles = get_post_meta(get_the_ID(), 'related_articles', true);


    $post_min_read = \Theme\Utils::get_static_translation('min read');
    $post_min_label = \Theme\Utils::get_static_translation('min');
    $post_share_label = \Theme\Utils::get_static_translation('Share');
    $post_published_label = \Theme\Utils::get_static_translation('Published');
    $post_back_to_news_link_label = \Theme\Utils::get_static_translation('Back to news');
    $post_more_from_pragmatic_heading = \Theme\Utils::get_static_translation('More from Pragmatic');


    $author_details = '';
    if ($author) {
        $author_details .= $author;
        if ($job_title_company)
            $author_details .= ',<br/>';
    }

    if ($job_title_company)
        $author_details .= $job_title_company;

    // $related_articles = \Theme\Utils::get_latest_posts($selected_articles, 'post', 3);

    $category_tag = '';
    if ($primary_term) {
        $category_tag = '<div class="card-tag">' . $primary_term . '</div>';
    }
?>

    <section class="panel content content__post-article bgc-floral-white">


        <div class="summary-box">

            <div class="scroll-percent">
                <div class="svg-scroll">
                    <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                        <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="transparent"></circle>
                        <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="1.5"></circle>
                        <circle id="donut-segment" class="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="1.5" stroke-dasharray="0 100" stroke-dashoffset="25"></circle>
                        <g class="donut-text">
                            <text y="50%" transform="translate(0, 2)">
                                <tspan x="50%" text-anchor="middle" class="donut-info"><?php echo $mins_read . ' ' . $post_min_label ?></tspan>
                            </text>

                        </g>
                    </svg>
                </div>
            </div>

            <div class="mobile-container">
                <div class="mobile-container__col1">

                    <?php if ($mins_read) {
                        echo $mins_read . ' ' . $post_min_read;
                    } ?>
                </div>

                <div class="mobile-container__col2">
                    <?php echo $category_tag; ?>
                </div>
            </div>

            <div class="desktop-container">
                <?php echo $category_tag; ?>
            </div>

            <h3 class="label"><?php echo $post_published_label; ?></h3>
            <p class="summary-details"><?php echo $item_date; ?></p>

            <?php if ($author_details) { ?>
                <h3 class="label">><?php echo $post_author_label; ?></h3>
                <p class="summary-details"><?php echo $author_details; ?></p>
            <?php } ?>



            <a href="/news-events/" class="back-container">
                <div class="back-container__col1">
                    <div class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-left"></div>
                </div>
                <div class="back-container__col2"><?php echo $post_back_to_news_link_label; ?></div>
            </a>

        </div>
        <div class="container">

            <div class="article-container">
                <div class="article-container__col1">





                </div>


                <div class="article-container__col2">



                    <div class="article">
                        <h1 class="article-heading"><?php echo get_the_title(); ?></h1>

                        <?php if ($show_featured_image) { ?>
                            <div class="article__featured-image">
                                <?php echo \Theme\Utils::get_image_html($featured_image_id); ?>
                            </div>
                        <?php } ?>

                        <?php
                        if ($external_url_link) {
                            echo '<a class="buttonV2 buttonV2--icon buttonV2--icon--external-link" target="_blank" rel="noopener noreferrer" href="' . $external_url_link . '">Read full article</a>';
                        }
                        ?>

                        <div class="wysiwyg-container">
                            <?php echo the_content(); ?>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>

    <?php
    // Render Related Articles Panel Block
    $content = '';
    $block = acf_get_block_type('acf/related-articles-panel');
    $block['data']['heading'] = $post_more_from_pragmatic_heading;
    $block['data']['related_articles'] = $selected_articles;
    $block['data']['generic_block_settings']['hide_panel'] = false;
    echo acf_rendered_block($block, $content, false);
    ?>

<?php



}


get_footer();
