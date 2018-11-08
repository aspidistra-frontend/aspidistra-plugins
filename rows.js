/*

	 A collection of tools used to aid when floating elements next to one-another who's heights may very
	 
 */
 
 // Height match - this sets all elememtns in a group to the same height
 $(window).on("load resize" , function() {
    // get all groups
    $("*[data-height-match-group]").each(function () {
        var keys = [];
        var group = $(this);

        group.find("*[data-height-match-key]").each(function () {
            var thisKey = $(this).data('height-match-key');

            if (thisKey != undefined && keys.indexOf(thisKey) == -1) {
                keys.push(thisKey);
            }
        });

        for (var i = 0; i < keys.length; i++) {
            var foo = keys[i];
            var elements = group.find("*[data-height-match-key=\"" + foo + "\"]");
            var preHeight = 0;

            // reset the height
            elements.css('height', 'auto');

            elements.each(function () {
                var elemHeight = $(this).height();

                if (elemHeight > preHeight) {
                    preHeight = elemHeight;
                }
            });

            if (preHeight > 0) {
                elements.height(preHeight);
            }
        }
    });
});
