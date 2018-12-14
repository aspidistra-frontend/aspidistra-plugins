/*
*	markup example for $(".SliderWrapper").miniBasketVerticalScroll();
*	
* 	<div class="SliderWrapper">
<span class="prev">Up</span>
* 	    <div class="Slider">
* 	        <div class="SlideInner">
*			    <div class="SlideItem"><img src="images/01.jpg" alt="" /></div>
*			    <div class="SlideItem"><img src="images/02.jpg" alt="" /></div>
*			    <div class="SlideItem"><img src="images/03.jpg" alt="" /></div>
*			    <div class="SlideItem"><img src="images/04.jpg" alt="" /></div>
*			    <div class="SlideItem"><img src="images/05.jpg" alt="" /></div>
*	        </div>
*	    </div>
*   <span class="next">Down</span>
*	</div>
*
*/

$.fn.verticalScroller = function (options) {

    // default configuration properties
    var defaults = {
        prevClass: '.prev',
        nextClass: '.next',
        container: '.Slider',
        innerContainer: '.SlideInner',
        item: '.SlideItem',
        maxItems: 4,
        speed: 500
    };

    var options = $.extend(defaults, options);


    var wrapper = $(this);
    var container = $(this).find(options.container);
    var innerContainer = $(this).find(options.innerContainer);
    var item = $(this).find(options.item);
    var maxItems = options.maxItems;
    var NumberOfChildren = item.length;
    NumberOfChildren = parseInt(NumberOfChildren);

    if (NumberOfChildren > maxItems && NumberOfChildren != "") {
        var itemHeight = item.height();
        var innerHeight = itemHeight * maxItems;
        var totalHeight = NumberOfChildren * itemHeight;

        $(innerContainer).height(totalHeight);
        $(container).height(innerHeight);
        $(container).addClass("Scrolling ");
        $(this).find(options.nextClass).show();

        var NumberOfMoves = NumberOfChildren - maxItems;
        var toTop = 0;

        $(this).find(options.prevClass).click(function () {

            if ($(innerContainer).hasClass("processing")) {
                return false;
            }
            else {
                $(innerContainer).addClass("processing");
                toTop = toTop - 1;
                if (toTop == 0) {
                    $(this).css('visibility', 'hidden');
                }

                $(wrapper).find(options.nextClass).css('visibility', 'visible');

                CurrentTopPos = $(innerContainer).css('top');
                CurrentTopPos = CurrentTopPos.replace('px', '');
                CurrentTopPos = parseInt(CurrentTopPos);
                NewTopPos = CurrentTopPos + itemHeight;
                NewTopPos = NewTopPos + 'px';

                $(innerContainer).animate({
                    top: NewTopPos
                }, options.speed, function () {
                    $(innerContainer).removeClass("processing");
                });
            }
        });

        $(this).find(options.nextClass).click(function () {
            if ($(innerContainer).hasClass("processing")) {
                return false;
            }
            else {
                $(innerContainer).addClass("processing");
                toTop = toTop + 1;
                if (toTop == NumberOfMoves) {
                    $(this).css('visibility', 'hidden');
                }
                $(wrapper).find(options.prevClass).css('visibility', 'visible');

                CurrentTopPos = $(innerContainer).css('top');
                CurrentTopPos = CurrentTopPos.replace('px', '');
                CurrentTopPos = parseInt(CurrentTopPos);
                NewTopPos = CurrentTopPos - itemHeight;
                NewTopPos = NewTopPos + 'px';

                $(innerContainer).animate({
                    top: NewTopPos
                }, options.speed, function () {
                    $(innerContainer).removeClass("processing");
                });
            }
        });
    }


}

