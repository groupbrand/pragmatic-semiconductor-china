<?php
$footer_copyright_message = get_field('copyright_message', 'options');
?>


<footer class="footer">
    <section class="ticker">
        <?php
        include_once __DIR__ . '/partials/footer-ticker.php';
        ?>
    </section>

    <div id="page-footer" class="page-footer">


        <div class="page-footer__container">

            <?php
            include_once __DIR__ . '/partials/footer-socials.php';
            ?>
            <div class="newsletter-signup">
                <h3 class="footer-heading {">
                    <?php echo \Theme\Utils::get_static_translation('Sign up to our newsletter') ?: 'Sign up to our newsletter'; ?>
                </h3>

                <script src=https://js.hsforms.net/forms/embed/4398349.js defer></script>

                <div class="hs-form-frame" data-region="na1" data-form-id="3bf8b5cf-41ba-4e16-b7e6-c26bd297088b" data-portal-id="4398349"></div>


            </div>

            <div class="page-footer__btn-container" aria-label="返回顶部">
                <a class="circle-buttonV2 circle-buttonV2--arrow-up circle-buttonV2--black-back-fwhite-icon-yellow-hover" href="#scroll-to-top"></a>
            </div>


        </div>

        <ul class="footer-menu">

            <?php
            wp_nav_menu([
                'theme_location' => 'footer-menu',
                'container' => '',
                'items_wrap' => '%3$s'
            ]);
            ?>
        </ul>

        <div class="footer-copyright">
            <div class="copyright-container">
                <div class="copyright-container__col1">

                    <p class="trademark"><?php echo str_replace('{{date}}', date("Y"), $footer_copyright_message); ?></p>
                </div>

                <div class="copyright-container__col2">

                    <div class="btn-container-mobile" aria-label="返回顶部">
                        <a class="circle-buttonV2 circle-buttonv2--arrow-up circle-buttonV2--black-back-fwhite-icon-yellow-hover" href="#scroll-to-top"></a>
                    </div>
                </div>
            </div>
        </div>

    </div>



</footer>

<?php

echo get_field('footer_scripts', 'options');

echo (new Theme\Partials())->render('cookie-accept');

wp_footer();
?>

</body>

</html>