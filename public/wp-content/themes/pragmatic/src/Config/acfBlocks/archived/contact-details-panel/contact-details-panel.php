<?php
include __DIR__ . '/../_block-generics.php';

if ($is_preview) {
    include __DIR__ . '/../_block-preview.php';
} else {

?>

    <section class="panel content content__contact-details-panel <?php echo $generic_block_settings_classes; ?>">
        <div class="container">

            <h1 class="animate fade-up">contact <span>leap</span></h1>

            <div class="content-container animate fade-up">
                <div class="content-container__col">
                    <h2>General Enquiries</h2>
                    <p class="email"><a href="mailto:<?php echo get_field('general_email_address', 'options'); ?>"><?php echo get_field('general_email_address', 'options'); ?></a></p>
                </div>
                <div class="content-container__col">
                    <h2>New Business Enquiries</h2>
                    <p class="email"><a href="mailto:<?php echo get_field('new_busines_email_address', 'options'); ?>"><?php echo get_field('new_busines_email_address', 'options'); ?></a></p>
                </div>

                <div class="content-container__col">

                    <?php
                    // $socials_class_names = 'socials--light socials--left';
                    // echo include __DIR__ . '/../../../../partials/_content-socials.php';
                    ?>
                </div>
            </div>

            <div class="offices">

                <div class="offices__col animate fade-up">
                    <div class="map-container">
                        <div class="map-container__col1">
                            <h2>LEAP Clerkenwell</h2>
                            <p class="company-address"><?php echo get_field('leap_london_company_address', 'options') ?></p>
                        </div>
                        <div class="map-container__col2">
                            <div id="clerkenwell-map" class="google-map"></div>
                        </div>

                    </div>
                </div>

                <div class="offices__col animate fade-up">
                    <div class="map-container">
                        <div class="map-container__col1">
                            <h2>LEAP Woolwich</h2>
                            <p class="company-address"><?php echo get_field('leap_create_company_address', 'options') ?></p>
                        </div>
                        <div class="map-container__col2">
                            <div id="docklands-map" class="google-map"></div>
                        </div>

                    </div>
                </div>

                <div class="offices__col animate fade-up">
                    <div class="map-container">
                        <div class="map-container__col1">
                            <h2>LEAP Create</h2>
                            <p class="company-address"><?php echo get_field('leap_create_company_address', 'options') ?></p>
                        </div>
                        <div class="map-container__col2">
                            <div id="chichester-map" class="google-map"></div>
                        </div>

                    </div>
                </div>

            </div>
    </section>


    <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyB1Zx-OmYGsidA6AonEij5V35LlA-9Hk60" type="text/javascript"></script>
    <script>
        function initialise_leap_map() {

            var maplatlng = new google.maps.LatLng(51.5244178, -0.1040532); // Add the coordinates for London
            var mapOptions = {
                zoom: 15, // The initial zoom level when your map loads (0-20)
                center: maplatlng, // Centre the Map to our coordinates variable
                mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
                scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
                // All of the below are set to true by default, so simply remove if set to true:
                mapTypeControl: false, // Disable Map/Satellite switch
                scaleControl: false, // Set to false to hide scale
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                }
            }

            var map = new google.maps.Map(document.getElementById('clerkenwell-map'), mapOptions); // Render our map within the empty div

            var image = new google.maps.MarkerImage("<?php echo THEMEROOT; ?>/images/leap-pin.png", null, null, null, new google.maps.Size(50, 75)); // Create a variable for our marker image.

            var marker = new google.maps.Marker({ // Set the marker
                position: maplatlng, // Position marker to coordinates
                icon: image, //use our image as the marker
                map: map, // assign the market to our map variable
                title: 'Groupbrand Ltd' // Marker ALT Text
            });

            var gb_map_styles = [{
                    "stylers": [{
                        "saturation": -100
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }
            ];

            map.setOptions({
                styles: gb_map_styles
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(maplatlng);
            }); // Keeps the Pin Central when resizing the browser on responsive sites
        }


        google.maps.event.addDomListener(window, 'load', initialise_leap_map); // Execute our 'initialise' function once the page has loaded.
    </script>


    <script>
        function initialise_docklands_map() {

            var maplatlng = new google.maps.LatLng(51.493412, 0.077023); // Add the coordinates for London
            var mapOptions = {
                zoom: 15, // The initial zoom level when your map loads (0-20)
                center: maplatlng, // Centre the Map to our coordinates variable
                mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
                scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
                // All of the below are set to true by default, so simply remove if set to true:
                mapTypeControl: false, // Disable Map/Satellite switch
                scaleControl: false, // Set to false to hide scale
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                }
            }

            var map = new google.maps.Map(document.getElementById('docklands-map'), mapOptions); // Render our map within the empty div

            var image = new google.maps.MarkerImage("<?php echo THEMEROOT; ?>/images/leap-pin.png", null, null, null, new google.maps.Size(50, 75)); // Create a variable for our marker image.

            var marker = new google.maps.Marker({ // Set the marker
                position: maplatlng, // Position marker to coordinates
                icon: image, //use our image as the marker
                map: map, // assign the market to our map variable
                title: 'Groupbrand Ltd' // Marker ALT Text
            });

            var gb_map_styles = [{
                    "stylers": [{
                        "saturation": -100
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }
            ];

            map.setOptions({
                styles: gb_map_styles
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(maplatlng);
            }); // Keeps the Pin Central when resizing the browser on responsive sites
        }
        google.maps.event.addDomListener(window, 'load', initialise_docklands_map); // Execute our 'initialise' function once the page has loaded.
    </script>

    <script>
        function initialise_leap_create_map() {

            var maplatlng = new google.maps.LatLng(50.835730, -0.775777); // Add the coordinates for London
            var mapOptions = {
                zoom: 15, // The initial zoom level when your map loads (0-20)
                center: maplatlng, // Centre the Map to our coordinates variable
                mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
                scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
                // All of the below are set to true by default, so simply remove if set to true:
                mapTypeControl: false, // Disable Map/Satellite switch
                scaleControl: false, // Set to false to hide scale
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                }
            }

            var map = new google.maps.Map(document.getElementById('chichester-map'), mapOptions); // Render our map within the empty div

            var image = new google.maps.MarkerImage("<?php echo THEMEROOT; ?>/images/leap-pin.png", null, null, null, new google.maps.Size(50, 75)); // Create a variable for our marker image.

            var marker = new google.maps.Marker({ // Set the marker
                position: maplatlng, // Position marker to coordinates
                icon: image, //use our image as the marker
                map: map, // assign the market to our map variable
                title: 'Groupbrand Ltd' // Marker ALT Text
            });

            var gb_map_styles = [{
                    "stylers": [{
                        "saturation": -100
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }
            ];

            map.setOptions({
                styles: gb_map_styles
            });

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(maplatlng);
            }); // Keeps the Pin Central when resizing the browser on responsive sites
        }
        google.maps.event.addDomListener(window, 'load', initialise_leap_create_map); // Execute our 'initialise' function once the page has loaded.
    </script>

<?php
}
?>