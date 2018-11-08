/*

	Created: 08/11/2018 @ Aspidistra HQ

*/

(function ( $ ) { 
    $.fn.aspectRatio = function(options) {
        var settings = $.extend({
            heightRoundPercent: 1
        }, options );

        var roundTo = settings.heightRoundPercent;
        var w = $(this).width();
        var h = $(this).height();       

        var a = h / w;

        // e.g. a = .66 , a = 2, a = 1.5
        var b = (Math.round((a * 100) / Number(roundTo)) * roundTo) / 100;

        var ratio = [1, b];
    
        return ratio;
    }; 
}( jQuery ));

(function ( $ ) { 
    $.fn.makeImageBackground = function(options) {
        var settings = $.extend({
            heightPercent: 100
        }, options );

        var img = $(this);
        var imgUrl = img.prop('src');
        
        var wrapper = img.wrap("<div class=\"background-image-wrap\"></div>").closest(".background-image-wrap");
    
        wrapper.css({
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(" + imgUrl + ")",
            width: "100%",
            position: "relative",
            paddingBottom: String(settings.heightPercent) + "%"
        });

        wrapper.addClass("background-image-vertical-ratio-percentage-" + settings.heightPercent + "-applied");

        img.css({
            display: "none"
        });

        return img;
    }; 
}( jQuery ));