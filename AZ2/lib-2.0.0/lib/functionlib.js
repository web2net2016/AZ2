//To support all modern browsers, the following styles should be used:

// Transitions:
//-webkit-transition
//-moz-transition
//transition

// Transforms:
//-webkit-transform
//-moz-transform
//-ms-transform
//transform

// Site info
//var AppName = "AZ Team";
//var AppVersion = "2.0.0";
//var ApiVersion = "_1";

var ThisLanguage = "nb-NO";

$(document).ready(function ()
{
    (function ($)
    {
        var _$Obj = $({});
        $.each(
            {
                trigger: "publish",
                on: "subscribe",
                one: "subscribeonce",
                off: "unsubscribe"
            }, function (key, val)
            {
                jQuery[val] = function ()
                {
                    _$Obj[key].apply(_$Obj, arguments);
                };
            });

        var _azLastScrollTop = 0;
        $(window).scroll(function ()
        {
            $.publish("functionlib/azWindowScroll", { azWindowScrollTop: $(window).scrollTop(), azWindowScrollDir: ($(window).scrollTop() > _azLastScrollTop) ? "down" : "up" });
            _azLastScrollTop = $(this).scrollTop();
        });

        window.setTimeout(function ()
        {
            $.publish("functionlib/azWindowResize", { azWindowWidth: window.innerWidth, azWindowHeight: window.innerHeight, azWindowScrollTop: $(window).scrollTop(), azWindowScrollLeft: $(window).scrollLeft(), azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape" });
        }, 100);
        $(window).resize(function ()
        {
            $.publish("functionlib/azWindowResize", { azWindowWidth: window.innerWidth, azWindowHeight: window.innerHeight, azWindowScrollTop: $(window).scrollTop(), azWindowScrollLeft: $(window).scrollLeft(), azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape" });
        });

        var _azDatePicker = false;
        $(":input").each(function ()
        {
            if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
            {
                $(this).attr("autocomplete", "off");
                if ($(this).hasClass("az-input-animated"))
                {
                    $(this).off("focusout", azInputAnimatedFocusout).on("focusout", azInputAnimatedFocusout);
                }
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress", forceUppercaseFocusout).on("keypress", forceUppercaseFocusout);
                    $(this).off("focusout", forceUppercaseFocusout).on("focusout", forceUppercaseFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress", forceLowercaseFocusout).on("keypress", forceLowercaseFocusout);
                    $(this).off("focusout", forceLowercaseFocusout).on("focusout", forceLowercaseFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", doNotPaste).on("keydown", doNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", notEnter).on("keydown", notEnter);
                }
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("selecttext"))
                {
                    $(this).click(function (e)
                    {
                        $(this).select();
                    });
                }

                _azDatePicker = false;
                if ($(this).hasClass("date"))
                {
                    _azDatePicker = true;
                    $(this).datepicker
                        ({
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            onSelect: function (curDate, instance)
                            {
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("pastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            yearRange: "-60:+0",
                            onSelect: function (curDate, instance)
                            {
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("nopastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            onSelect: function (curDate, instance)
                            {
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("fromdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".todate").datepicker("option", "minDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("todate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".fromdate").datepicker("option", "maxDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("frompastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".topastdate").datepicker("option", "minDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("topastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".frompastdate").datepicker("option", "maxDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("fromnopastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".tonopastdate").datepicker("option", "minDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if ($(this).hasClass("tonopastdate"))
                {
                    _azDatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".fromnopastdate").datepicker("option", "maxDate", curDate);
                                if (typeof setDate == 'function')
                                {
                                    setDate(curDate, instance);
                                }
                            }
                        });
                }
                if (_azDatePicker == true)
                {
                    $.datepicker.setDefaults($.datepicker.regional[ThisLanguage]);
                }
            }                       
            if ($(this).is("[type='range']"))
            {
                if ($(this).hasClass("az-range"))
                {
                    $(this).off("change", azRange).on("change", azRange);
                }
            }            
            if ($(this).is("textarea"))
            {
                $(this).attr("autocomplete", "false");
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("focusout", forceUppercaseFocusout).on("focusout", forceUppercaseFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("focusout", forceLowercaseFocusout).on("focusout", forceLowercaseFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", doNotPaste).on("keydown", doNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", notEnter).on("keydown", notEnter);
                }
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("selecttext"))
                {
                    $(this).click(function (e)
                    {
                        $(this).select();
                    });
                }
            }
            if ($(this).is("[type='checkbox']"))
            {
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("az-checkbox"))
                {
                    $(this).off("click", azCheckbox).on("click", azCheckbox);
                }
                if ($(this).parent("label").hasClass("az-switch"))
                {
                    $(this).off("click", azSwitch).on("click", azSwitch);
                }
            }
            if ($(this).is("[type='radio']"))
            {
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("az-radio"))
                {
                    $(this).off("click", azRadio).on("click", azRadio);
                }
            }
            if ($(this).is("select"))
            {
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
            }
            if ($(this).is("button"))
            {
                if ($(this).hasClass("help"))
                {
                    $(this).off("click", modalHelp).on("click", modalHelp);
                }
                if ($(this).hasClass("setmap"))
                {
                    $(this).off("click", setGoogleMap).on("click", setGoogleMap);
                }
                if ($(this).hasClass("deletemap"))
                {
                    $(this).off("click", deleteGoogleMap).on("click", deleteGoogleMap);
                }
                if ($(this).hasClass("cancel"))
                {
                    $(this).off("click", verifyCancel).on("click", verifyCancel);
                }
                if ($(this).hasClass("submit"))
                {
                    $(this).off("click", verifySubmit).on("click", verifySubmit);
                }
                if ($(this).hasClass("delete"))
                {
                    $(this).off("click", verifyDelete).on("click", verifyDelete);
                }
                if ($(this).hasClass("az-navbar-button"))
                {
                    $(this).off("click", openCloseNavbarMobile).on("click", openCloseNavbarMobile);
                }
                if ($(this).hasClass("disabled"))
                {
                    disableButton($(this));
                }
            }
        });

        // Mandatory Asterisk
        $(".mandatory").not(".az-no-asterisk").each(function ()
        {
            $(".az-mandatory-asterisk", this).remove();
            $(this).append(' <span class="az-mandatory-asterisk">*</span>');
        });

        // Password Eye
        $(".passwordeye").off("click", hideShowPassword).on("click", hideShowPassword);

        // Animated Label
        $(".az-label-animated").off("click", azLabelAnimatedClick).on("click", azLabelAnimatedClick);

        // Adjust Cards Height
        $('.az-accordion-card.adjust, .az-card.adjust, .az-list-card.adjust, .az-timeline-card.adjust').matchHeight();
    })(jQuery);
});

//$.fn.greenText = function ()
//{
//    return this.each(function ()
//    {
//        $(this).css("color", "green");
//    });
//};
//$.fn.redText = function ()
//{
//    return this.each(function ()
//    {
//        $(this).css("color", "red");
//    });
//};
//$.fn.showLinkLocation = function ()
//{
//    return this.filter("a").append(function ()
//    {
//        return " (" + this.href + ")";
//    });
//};