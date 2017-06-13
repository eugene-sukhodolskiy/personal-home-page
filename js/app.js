var pc = 0;
$(document).ready(function(){
    // init 
    
    $('#home').css('height', window.innerHeight);
    $('#home .brand-logo').css('margin-top', Math.floor(window.innerHeight / 2 - 100))
    
    var pi = $('.polio-img');
    for(var i=0;i<pi.length;i++){
        $(pi[i]).css('background-image', 'url("' + $(pi[i]).attr('data-image-src') + '")');
    }
    
    $('body').liLanding({
        topMargin:50,
        show: function(a,section){
            $(section).addClass('show');        
            if(pc != 0){
                $('#home .arrow').css('opacity', 0);
            }
            pc++;
        }
    });
    
    var VP = new VictorPopup({
        'el': $('.popup')
    });
    
    $('.parallax-container').parallax();
    
    $('.mob-nav').click(function(){
        
        $('nav.mobile').fadeIn(300);
        
        $('nav.mobile').addClass('active');
        
    });
    
    $('nav.mobile').click(function(){
        closeMobNav();
    });
    
    $('nav.mobile a').click(function(){
        closeMobNav();
    });
})

var closeMobNav = function(){
    $('nav.mobile').fadeOut(300);

    $('nav.mobile').removeClass('active');
}

function myMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        styles: mapStyle
    });
}

var mapStyle = [
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-75"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "color": "#faf5ed"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5a6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "gamma": "1.8"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffb200"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#b000ff"
            },
            {
                "saturation": "23"
            },
            {
                "lightness": "-4"
            },
            {
                "gamma": "0.80"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a0daf2"
            }
        ]
    }
];