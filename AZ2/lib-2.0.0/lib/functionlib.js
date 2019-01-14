//To support all modern browsers, the following styles should be used for transitions:
//-webkit - transition
//- moz - transition
//transition
//and for transforms:
//-webkit - transform
//- moz - transform
//- ms - transform
//transform

// Site info
//var AppName = "AZ Team";
//var AppVersion = "2.0.0";
//var ApiVersion = "_1";


(function ($)
{
    $.fn.greenText = function ()
    {
        return this.each(function ()
        {
            $(this).css("color", "green");
        });
    };

    $.fn.redText = function ()
    {
        return this.each(function ()
        {
            $(this).css("color", "red");
        });
    };

    $.fn.showLinkLocation = function ()
    {
        return this.filter("a").append(function ()
        {
            return " (" + this.href + ")";
        });
    };

})(jQuery);