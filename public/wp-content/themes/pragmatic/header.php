<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="format-detection" content="telephone=no">

    <title>
        <?php
        wp_title(' - ', true, 'right');
        ?>
    </title>

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="shortcut icon" type="image/png" href="<?php echo THEMEROOT; ?>/images/favicon.png">

    <?php wp_head(); ?>

    <?php echo get_field('header_scripts', 'options'); ?>

</head>


<body <?php body_class(); ?>>

    <?php echo get_field('body_scripts', 'options'); ?>

    <?php

    ?>

    <header>

        <div id="page-header" class="page-header animate fade-in">

            <!-- <div class="container"> -->

            <div class="header-container">

                <div class="header-container__col1">
                    <a href="<?php echo site_url(); ?>/">
                        <div class="site-header-logo"></div>
                    </a>
                </div>

                <div class="header-container__col2">

                    <nav id="main-menu" class="main-menu">

                        <a href="/">
                            <div class="site-header-logo"></div>
                        </a>

                        <a class="buttonV2 buttonV2--yellow" href="/contact/"><?php echo \Theme\Utils::get_static_translation('Contact') ?: 'Contact'; ?></a>

                        <ul>
                            <?php

                            wp_nav_menu([
                                'theme_location' => 'primary-menu',
                                'container' => '',
                                'items_wrap' => '%3$s'
                            ]);


                            ?>


                        </ul>



                    </nav>




                </div>

                <div class="header-container__col3">
                    <a class="buttonV2 buttonV2--yellow-contact" href="/contact/"> <?php echo \Theme\Utils::get_static_translation('Contact') ?: 'Contact'; ?>

                    </a>
                    <a class="global-site-button" href="<?php echo get_field('global_site_url', 'options'); ?>"> <?php echo \Theme\Utils::get_static_translation('Global site') ?: 'Global site'; ?>
                    </a>
                </div>

                <div class=" mobile-menu-toggle">
                    <div id="mobile-menu-toggle" class="mobile-menu-toggle__button ">
                        <div class="mobile-menu-toggle__left"></div>
                        <div class="mobile-menu-toggle__right"></div>
                    </div>
                </div>


            </div>

            <!-- </div> -->
        </div>
    </header>


    <a id="scroll-to-top" name="scroll-to-top"></a>