
// Site info
//var AppName = "AZ Team";
//var AppVersion = "2.0.0";
//var ApiVersion = "_1";


(function ($)
{

    //$.fn.greenify = function ()
    //{
    //    this.css("color", "green");
    //    return this;
    //};

    $.fn.greenify = function ()
    {
        return this.each(function ()
        {
            $(this).css("color", "green");
        });
    };

    $.fn.showLinkLocation = function ()
    {
        this.filter("a").append(function ()
        {
            return " (" + this.href + ")";
        });
        return this;
    };


})(jQuery);