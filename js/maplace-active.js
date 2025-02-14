$(function() {
               
            var LocsA = [
                // Canada
                {
                    lat: 56.130366,
                    lon: -106.346771,
                    title: 'Canada',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Ottawa, Canada</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>111 Wellington St, Ottawa, ON K1A 0A9</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+1 613-555-0100</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // USA
                {
                    lat: 37.09024,
                    lon: -95.712891,
                    title: 'USA',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Washington D.C., USA</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>1600 Pennsylvania Avenue NW, Washington, DC 20500</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+1 202-555-0100</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // UK
                {
                    lat: 55.378051,
                    lon: -3.435973,
                    title: 'United Kingdom',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">London, United Kingdom</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>10 Downing Street, London SW1A 2AA</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+44 20 7925 0918</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // France
                {
                    lat: 46.603354,
                    lon: 1.888334,
                    title: 'France',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Paris, France</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>55 Rue du Faubourg Saint-Honoré, 75008 Paris</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+33 1 42 92 81 00</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // Ghana
                {
                    lat: 7.946527,
                    lon: -1.023194,
                    title: 'Ghana',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Accra, Ghana</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Flagstaff House, Accra</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+233 30 277 3900</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // Saudi Arabia
                {
                    lat: 23.885942,
                    lon: 45.079162,
                    title: 'Saudi Arabia',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Riyadh, Saudi Arabia</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Al Yamamah Palace, Riyadh</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+966 11 488 2222</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        ].join(''),
                        icon: 'img/icons/map-marker-2.png',
                        animation: google.maps.Animation.BOUNCE
                },
                // South Africa
                {
                    lat: -30.559482,
                    lon: 22.937506,
                    title: 'South Africa',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Pretoria, South Africa</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Union Buildings, Pretoria, 0001</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+27 12 300 5200</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // Qatar
                {
                    lat: 25.354826,
                    lon: 51.183884,
                    title: 'Qatar',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Doha, Qatar</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Al Corniche, Doha, Qatar</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+974 4452 5555</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // UAE
                {
                    lat: 23.424076,
                    lon: 53.847818,
                    title: 'United Arab Emirates',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Abu Dhabi, UAE</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Al Khaleej Al Arabi Street, Abu Dhabi</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+971 2 444 0444</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // India
                {
                    lat: 20.593684,
                    lon: 78.96288,
                    title: 'India',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">New Delhi, India</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Raisina Hill, New Delhi, 110011</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+91 11 2301 6411</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // Singapore
                {
                    lat: 1.352083,
                    lon: 103.819836,
                    title: 'Singapore',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Singapore</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>1 Fullerton Square, Singapore 049178</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+65 6221 1111</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
                // Australia
                {
                    lat: -25.274398,
                    lon: 133.775136,
                    title: 'Australia',
                    html: [
                        '<div class="ltn__map-item">',
                            '<h3 class="ltn__location-name">Canberra, Australia</h3>',
                            '<h5 class="ltn__location-single-info"><i class="fas fa-map-marked-alt"></i>Parliament House, Canberra, ACT 2600</h5>',
                            '<h4 class="ltn__location-single-info"><i class="fas fa-phone-volume"></i>+61 2 6277 7111</h4>',
                            '<div class="btn-wrapper">',
                                '<a href="contact.html" class="btn btn-transparent btn-border btn-effect-4"><i class="fas fa-location-arrow"></i> Get An Appointment</a>',
                                '<a href="#" class="btn btn-transparent btn-border btn-effect-3"><i class="fas fa-globe"></i> View Website</a>',
                            '</div>',
                        '</div>'
                    ].join(''),
                    icon: 'img/icons/map-marker-2.png',
                    animation: google.maps.Animation.BOUNCE
                },
            ];
            new Maplace({
                locations: LocsA,
                controls_on_map: true,
                map_options: {
                    zoom: 2.5,
                    scrollwheel: false,
                    stopover: true
                },
                stroke_options: {
                    strokeColor: '#f10', 
                    strokeOpacity: 0.8, 
                    strokeWeight: 2, 
                    fillColor: '#f10', 
                    fillOpacity: 0.4
                },
                setBounds: true
            }).Load();            

        });