$(document).ready(function(){
    // init 
    
    $('#home').css('height', window.innerHeight);
    $('#home .brand-logo').css('margin-top', Math.floor(window.innerHeight / 2 - 150));
    initMainNav();
    
    $('.carousel').slick({
        dots: true,
        arrows: false
    });
    
    var pi = $('.polio-img');
    for(var i=0;i<pi.length;i++){
        $(pi[i]).css('background-image', 'url("' + $(pi[i]).attr('data-image-src') + '")');
    }
    

    var filter = new DisplayFilter();
    // filter items on button click
    $('[data-filter]').on( 'click', function() {
        $('[data-filter]').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        filter.filter(filterValue);
        
        return false;
    });
    
    $('body').liLanding({
        topMargin:50,
        show: function(a,section){
            
            if($(a).attr('href') != '#home'){
                $('#home .arrow').css('opacity', 0);
            }else{
                $('#home .arrow').css('opacity', 1);
            }
            
            $(section).addClass('show');        
        }
    });
    
    $(document).scroll(function(e){
        if($(document).scrollTop() > 140){
            $('header.header').removeClass('transparent');
        }else{
            $('header.header').addClass('transparent');
        }
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

var initMainNav = function(){
    var nav = $('nav.mobile ul li');
    var html = '';
    for(var i=0;i<nav.length;i++){
        html += $(nav[i]).html();
    }
    $('nav.main').html(html);
}

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













