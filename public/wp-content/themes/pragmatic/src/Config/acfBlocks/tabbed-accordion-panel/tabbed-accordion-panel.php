<?php
include __DIR__ . '/../_block-generics.php';
include __DIR__ . '/../_block-preview.php';

if (!$is_preview && !$generic_block_settings['hide_panel']) {

    $sections = get_field(
        'sections'
    );

?>

    <section class="panel content content__tabbed-accordion-panel  <?php echo $generic_block_settings_classes; ?>">

        <div class="container">

            <div class="tabset">

                <?php




                foreach ($sections as $key => $section) {

                    echo '<input type="radio" name="tabset" id="tab' . $key + 1 . '" aria-controls="' . $section['section_label'] . '" ' . ($key == 0 ? 'checked' : '') . '>';
                    echo '<label for="tab' . $key + 1 . '">' . $section['section_label'] . '</label>';
                }

                echo '<div class="tab-panels">';

                $google_api_included = false;
                foreach ($sections as $key => $section) {

                    $accordion_items = $section['accordion_items'];

                    echo '<section id="' . $section['section_label'] . '" class="tab-panel">';

                    echo '<div class="accordion">';

                    $accordion_items_html = '';
                    foreach ($accordion_items as $key => $accordion_item) {

                        $content_html = '';

                        if ($accordion_item['photo']) {
                            $content_html =  \Theme\Utils::get_image_html($accordion_item['photo']);
                        }


                        if ($accordion_item['google_map_id'] && $accordion_item['google_map_lat'] && $accordion_item['google_map_lng']) {

                            // $location_lat = $google_map['lat'];
                            // $location_lng = $google_map['lng'];

                            // echo print_r($location_lat);

                            $content_html = '';

                            $content_html .= '<div class="map">';

                            $content_html .= '<div id="' . $accordion_item['google_map_id'] . '-map" class="google-map"></div>';

                            if (!$google_api_included) {
                                $content_html .= ' <script src="//maps.googleapis.com/maps/api/js?key=' . GOOGLE_MAPS_API_KEY . '" type="text/javascript"></script>';
                                $google_api_included = true;
                            }
                            $content_html .= '<script>
                            ';
                            $content_html .= 'function initialise_' . $accordion_item['google_map_id'] . '_map() { 
                            ';

                            $content_html .= ' var markers = [{lat: ' . $accordion_item['google_map_lat'] . ',lng: ' . $accordion_item['google_map_lng'] . ', name: "' . $accordion_item['heading'] . '"}]
                            ';


                            $content_html .= 'var maplatlng = new google.maps.LatLng(markers[0].lat, markers[0].lng); ';


                            $content_html .= 'var mapOptions = {
                                            zoom: 16, // The initial zoom level when your map loads (0-20)
                                            center: maplatlng, // Centre the Map to our coordinates variable
                                            mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
                                            scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
                                            // All of the below are set to true by default, so simply remove if set to true:
                                            mapTypeControl: false, // Disable Map/Satellite switch
                                            scaleControl: false, // Set to false to hide scale
                                            zoomControl: true,
                                            zoomControlOptions: {
                                                style: google.maps.ZoomControlStyle.SMALL
                                            },
                                        }; ';

                            $content_html .= 'var map = new google.maps.Map(document.getElementById("' . $accordion_item['google_map_id'] . '-map"), mapOptions);';


                            //this is the loop that will creat the marker
                            $content_html .= 'for (var index in markers) addMarker(markers[index], map);';

                            $content_html .= 'var gb_map_styles = [{
                                                "stylers": [{
                                                    "saturation": 0
                                                }]
                                            },
                                            {
                                                "featureType": "road",
                                                "elementType": "geometry",
                                                "stylers": [{
                                                    "visibility": "simplified"
                                                }]
                                            }
                                        ];';

                            $content_html .= 'map.setOptions({
                                            styles: gb_map_styles
                                        });';

                            $content_html .= 'google.maps.event.addDomListener(window, "resize", function() {
                                            map.setCenter(maplatlng);
                                        }); ';

                            $content_html .= '}
                                             ';

                            $content_html .= 'function addMarker(data, map) {
                                        
                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(data.lat, data.lng),
                                            map: map,
                                            //icon: image, //use our image as the marker
                                            title: data.name,
                                        });
                                       
                                    }';

                            $content_html .= 'google.maps.event.addDomListener(window, "load", initialise_' . $accordion_item['google_map_id'] . '_map);';
                            $content_html .= '</script>';

                            $content_html .= '</div>';
                        }


                        $button = $accordion_item['button'];
                        $button_html = '';
                        if ($button) {
                            $button_text = $button['link_text'];
                            $link_url = $button['link_url'];
                            $link_page = $button['link_page'];
                            $external_link = isset($button['external_link']) ? $button['external_link'] : false;
                            $link = \Theme\Utils::get_link_url($link_url, $link_page);
                            if ($button_text && $link) {

                                if ($external_link)
                                    $button_html = '<a class="buttonV2 buttonV2--icon buttonV2--icon--external-link" target="_blank" rel="noopener noreferrer" href="' . $link . '">' . $button_text . '</a>';
                                else
                                    $button_html = '<a class="buttonV2 buttonV2--icon buttonV2--icon--arrow-right" href="' . $link . '">' . $button_text . '</a>';
                            }
                        }

                        $accordion_items_html .= "
                        <details>
                            <summary class=\"accordion-title\">
                                <div class=\"accordion-title__col1\">
                                    <h3 class=\"large\">{$accordion_item['heading']}</h3>
                                    <p class=\"sub-heading\" >{$accordion_item['sub_heading']}</p>
                                </div>
                                <div class=\"accordion-title__col2\">
                                    <div class=\"accordion-icon\">
                                        <div class=\"accordion-icon__left\"></div>
                                        <div class=\"accordion-icon__right\"></div>
                                    </div>
                                </div>
                            </summary>
                            <div class=\"accordion__content post-content content\">
                                <div class=\"column-container\">
                                    <div class=\"column-container__col1\">
                                        {$content_html}
                                        
                                    </div>

                                    <div class=\"column-container__col2\">

                                        <div class=\"content-container\">
                                            {$accordion_item['content']}
                                        </div>
                                        {$button_html}
                                    </div>
                                </div>
                            </div>
                        </details>";
                    }

                    echo $accordion_items_html;

                    echo '</div>';  // Accordion
                    echo '</section>';
                }
                echo '</div>';



                ?>



            </div>
    </section>

<?php } ?>