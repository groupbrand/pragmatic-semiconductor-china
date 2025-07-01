<?php

/**
 * Template Name: Buttons Page
 */
get_header();
the_content();
?>

<section class="panel content">
    <div class="container">
        <p>Circle Button - Button Left & Right (inline)</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--inline"></a>

        <p>Circle Button - Button Up & Down (inline)</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-up circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-down circle-buttonV2--inline"></a>

        <p>Circle Button - Button Download</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-download circle-buttonV2--inline"></a>

        <p>Circle Button - Button Close</p>
        <a class="circle-buttonV2 circle-buttonV2--close circle-buttonV2--inline"></a>


        <p>Circle Button - Button External Link</p>
        <a class="circle-buttonV2 circle-buttonV2--external-link circle-buttonV2--inline"></a>


        <p>Responsive Circle Button - Button Left, Right & Download - changes size from large to small</p>
        <a class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-left circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-download"></a>
        <a class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--external-link"></a>

        <p>Small Circle Button - Button Up & Down (inline)</p>
        <a class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-up circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-down circle-buttonV2--inline"></a>


        <p>Small Circle Button - Button Left & Right (inline)</p>
        <a class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-left circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--small circle-buttonV2--small--arrow-right circle-buttonV2--inline"></a>

        <p>Small Circle Button - Button Download</p>
        <a class="circle-buttonV2 circle-buttonV2--small  circle-buttonV2--small--arrow-download circle-buttonV2--inline"></a>

        <p>Small Circle Button - Button Download</p>
        <a class="circle-buttonV2 circle-buttonV2--small  circle-buttonV2--small--external-link circle-buttonV2--inline"></a>


        <p>Colour Variations</p>

        <p>Solid yellow with solid black hover</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--solid-yellow-solid-black circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--solid-yellow-solid-black circle-buttonV2--inline"></a>

        <p>Yellow background black, border with solid black hover</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--yellow-black-border-solid-black circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--yellow-black-border-solid-black circle-buttonV2--inline"></a>

        <p>Floral white background, black border with solid black hover</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--fwhite-black-border-solid-black circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--fwhite-black-border-solid-black circle-buttonV2--inline"></a>

        <p>Pale Yellow1 background with black border with solid black hover</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--pale-yellow-back-black-border-solid-black-hover circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--pale-yellow-back-black-border-solid-black-hover circle-buttonV2--inline"></a>



        <p>Black background with floral white icon with solid yellow hover (footer)</p>
        <a class="circle-buttonV2 circle-buttonV2--arrow-up circle-buttonV2--black-back-fwhite-icon-yellow-hover circle-buttonV2--inline"></a>
        <a class="circle-buttonV2 circle-buttonV2--arrow-down circle-buttonV2--black-back-fwhite-icon-yellow-hover circle-buttonV2--inline"></a>



        <br /><br />
        <p>Standard Circle Button changed by panel bgc setting
        <section class="panel content content__two-column-cards-panel tp-small ir-default bgc-charcoal-grey outer-bgc-white ">
            <div class="container">
                <p style="color:white">Black background with white border with solid white hover</p>
                <a class="circle-buttonV2 circle-buttonV2--arrow-left circle-buttonV2--inline"></a>
                <a class="circle-buttonV2 circle-buttonV2--arrow-right circle-buttonV2--inline"></a>

            </div>
        </section>

        <br /><br />
        <p>Here are some examples of how text hovers within panels can change the colour of the button. These are probably best handled in the panel scss file rather than the circle buttons scss file.</p>

        <section class="panel content content__cross-link-panel ir-default bgc-charcoal-grey  outer-bgc-white ">
            <div class="container animate fade-in">
                <h2 class="meta-heading">Discover more</h2>
                <div class="content-container">
                    <div class="content-container__col"><a class="cross-link" href="https://www.pragmaticsemi.com/applications/">
                            <div class="link-container">
                                <div class="link-container__col1">Applications</div>
                                <div class="link-container__col2">
                                    <div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right"></div>
                                </div>
                            </div>
                        </a></div>
                    <div class="content-container__col"><a class="cross-link" href="https://www.pragmaticsemi.com/news-events/">
                            <div class="link-container">
                                <div class="link-container__col1">News and events</div>
                                <div class="link-container__col2">
                                    <div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right"></div>
                                </div>
                            </div>
                        </a></div>
                </div>
            </div>
        </section>

        <br /><br />
        <p>Note this is more complex, as it changes the button behaviour between desktop and mobile.</p>

        <section class="panel content content__page-link-panel  inset ir-default bgc-charcoal-grey  outer-bgc-white  ">
            <div class="container">

                <h2 class="meta-heading animate fade-in scrolled">Applications</h2>
                <h3 class="section-title-small animate fade-up scrolled">Discover more</h3>

                <div class="content-container animate fade-up scrolled">
                    <div class="content-container__row"><a href="https://www.pragmaticsemi.com/applications/smart-packaging/">
                            <div class="link-container">
                                <div class="link-container__col1">
                                    <h3>Smart packaging</h3>
                                </div>
                                <div class="link-container__col2">
                                    <div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right circle-buttonV2--black-back-white-border-solid-black-hover"></div>
                                </div>
                            </div>
                        </a></div>
                    <div class="content-container__row"><a href="https://www.pragmaticsemi.com/applications/apparel/">
                            <div class="link-container">
                                <div class="link-container__col1">
                                    <h3>Apparel</h3>
                                </div>
                                <div class="link-container__col2">
                                    <div class="circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--arrow-right circle-buttonV2--black-back-white-border-solid-black-hover"></div>
                                </div>
                            </div>
                        </a></div>

                </div>
            </div>


        </section>


    </div>
</section>


<section class="panel content">
    <div class="container">
        <!-- <p>Standard Button - No Icon</p>
        <a class="buttonV2">Test button</a> -->

        <p>Standard Button - With Icon - Arrow Right</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right">Test button</a>

        <p>Standard Button - With Icon - Plus</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--plus">Test button</a>

        <p>Standard Button - With Icon - External Link</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--external-link">Test button</a>

        <p>Standard Button - With Icon - Download</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--download">Test button</a>


        <p>Small Button - With Icon - Plus Arrow Right</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right">Test button</a>

        <p>Small Button - With Icon - Plus Icon</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--plus">Test button</a>

        <p>Small Button - With Icon - External Link</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link">Test button</a>


        <p>Just for comparision - Small Button - With Icon - External Link (Original version with resized 38 icon)</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--external-link buttonV2--icon--small ">Test button</a>



        <br /><br />
        <p>Colour Variations</p>

        <p>Small Button - With Icon - Arrow Right - Yellow Black</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right buttonV2--yellow-black">Test button</a>

        <p>Small Button - With Icon - External link arrow - Yellow Black</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link buttonV2--yellow-black">Test button</a>


        <p>Standard Button - With Icon - Black Yellow</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-yellow">Test button</a>

        <p>Standard Button - With Icon - Black Turquoise</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-turquoise">Test button</a>

        <p>Standard Button - With Icon - Black Floral White</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-floral-white">Test button</a>

        <p>Standard Button - With Icon - Black Grey</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-grey">Test button</a>

        <p>Standard Button - With Icon - Black Purple</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-purple">Test button</a>

        <p>Standard Button - With Icon - Black Salmon</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-salmon">Test button</a>

        <p>Standard Button - With Icon - Black Pale Yellow</p>
        <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right buttonV2--black-pale-yellow">Test button</a>

        <p>Panel BG Colour - Standard Button - With Icon</p>

        <section class="panel content content__two-column-cards-panel ir-default bgc-purple outer-bgc-white ">
            <div class="container">
                <p>Standard Button - With Icon - Arrow Right with colour changed by panel colour</p>
                <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right">Test button</a>
            </div>
        </section>
        <br />
        <section class="panel content content__two-column-cards-panel ir-default bgc-salmon outer-bgc-white ">
            <div class="container">
                <p>Standard Button - With Icon - Arrow Right with colour changed by panel colour</p>
                <a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right">Test button</a>
            </div>
        </section>




    </div>
</section>
<?php
get_footer();
