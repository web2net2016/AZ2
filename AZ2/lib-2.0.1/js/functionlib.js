// AZ-Functionlib v2.0.1 | (c) web2net AS

var ModalDialogScrollTop = 0;

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
            },
            function (key, val)
            {
                jQuery[val] = function ()
                {
                    _$Obj[key].apply(_$Obj, arguments);
                };
            });

        var _azLastScrollTop = 0;
        $(window).scroll(function ()
        {
            $.publish("functionlib/azWindowScroll",
                {
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollDir: ($(window).scrollTop() > _azLastScrollTop) ? "down" : "up"
                });
            _azLastScrollTop = $(this).scrollTop();
        });

        window.setTimeout(function ()
        {
            $.publish("functionlib/azWindowResize",
                {
                    azWindowWidth: parseInt(window.innerWidth),
                    azWindowHeight: parseInt(window.innerHeight),
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollLeft: parseInt($(window).scrollLeft()),
                    azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
                });
        }, 100);
        $(window).resize(function ()
        {
            $.publish("functionlib/azWindowResize",
                {
                    azWindowWidth: parseInt(window.innerWidth),
                    azWindowHeight: parseInt(window.innerHeight),
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollLeft: parseInt($(window).scrollLeft()),
                    azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
                });
        });

        var _DefaultLanguage = AZClientStorage("get", "language", "");
        if (_DefaultLanguage === null || _DefaultLanguage === undefined)
        {
            _DefaultLanguage = "nb-NO";
        }

        $(":input").each(function ()
        {
            if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
            {
                $(this).attr("autocomplete", "off");
                if ($(this).hasClass("az-input-animated"))
                {
                    $(this).off("focusout", AZInputAnimatedFocusout).on("focusout", AZInputAnimatedFocusout);
                }
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
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
                AZDatepicker($(this), _DefaultLanguage);
                AZTimepicker($(this), _DefaultLanguage);
            }
            if ($(this).is("[type='range']") && $(this).hasClass("az-range"))
            {
                $(this).off("input change", AZRange).on("input change", AZRange);
            }
            if ($(this).is("textarea"))
            {
                $(this).attr("autocomplete", "false");
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
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
                    $(this).off("click", AZCheckboxClick).on("click", AZCheckboxClick);
                }
                if ($(this).parent("label").hasClass("az-switch"))
                {
                    $(this).off("click", AZSwitchClick).on("click", AZSwitchClick);
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
                    $(this).off("click", AZRadioClick).on("click", AZRadioClick);
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
                if ($(this).hasClass("cancel"))
                {
                    if (typeof AZCancel == "function")
                    {
                        $(this).off("click", AZCancel).on("click", AZCancel);
                    }
                }
                if ($(this).hasClass("submit"))
                {
                    if (typeof AZSubmit == "function")
                    {
                        $(this).off("click", AZSubmit).on("click", AZSubmit);
                    }
                }
                if ($(this).hasClass("delete"))
                {
                    if (typeof AZDelete == "function")
                    {
                        $(this).off("click", AZDelete).on("click", AZDelete);
                    }
                }
                if ($(this).hasClass("az-navbar-button"))
                {
                    $(this).off("click", AZToggleNavbarMobile).on("click", AZToggleNavbarMobile);
                }
                if ($(this).hasClass("disabled"))
                {
                    AZDisableButton(this);
                }
            }
        });

        // Password Eye
        $(".passwordeye").off("click", AZHideShowPassword).on("click", AZHideShowPassword);

        // Animated Label
        $(".az-label-animated").off("click", AZLabelAnimatedClick).on("click", AZLabelAnimatedClick);

        // Adjust Cards Height
        $('.az-accordion-card.adjust, .az-card.adjust, .az-card.adjust, .az-timeline-card.adjust').matchHeight();

        // Navbar Top Menu
        var _$NavbarTopMenu = $(".az-navbar-top-content").find(".az-navbar-menu");
        var _NavbarTopHeight = _$NavbarTopMenu.parents(".az-navbar-top").height();
        _$NavbarTopMenu.off().on("click", "li > a", function (e)
        {
            var _Anchor = $(this).attr('href');
            if (_Anchor.indexOf("#") === 0)
            {
                e.preventDefault();
                if (_$NavbarTopMenu.parents(".az-navbar-top").hasClass("az-navbar-sticky") === false)
                {
                    _NavbarTopHeight = 0;
                }
                if (_$NavbarTopMenu.hasClass("az-animated") === true)
                {
                    $('html, body').stop().animate(
                        {
                            scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
                        },
                        {
                            easing: 'easeInOutExpo',
                            duration: 1500
                        });
                }
                else
                {
                    $('html, body').stop().animate(
                        {
                            scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
                        },
                        {
                            duration: 0
                        });
                }
                $(".az-navbar-top-content").removeClass("mobile");
            }
        });

        // Dropdown Menu
        if ($(".az-dropdown-button").is(":button"))
        {
            $(".az-dropdown-button").off("click", AZDropdown).on("click", AZDropdown);
        }
        $(".az-dropdown-button[href]").off("click", AZDropdown).on("click", AZDropdown);

        // Input Spinner
        var _ObjAttributes = {};
        var _$CurrentSpinner = null;
        var _$ParentElement = null;
        $(".az-input-spinner").each(function ()
        {
            _$CurrentSpinner = $(this).attr("disabled", true);
            _$ParentElement = $(this).parent(".az-input-group");
            _ObjAttributes = AZCheckSpinnerAttributes(this);

            if (IsEmpty(_ObjAttributes) === false)
            {
                if ((_ObjAttributes.Value < _ObjAttributes.Min) || (_ObjAttributes.Value > _ObjAttributes.Max))
                {
                    _$CurrentSpinner.remove();
                    _$ParentElement.html('<div>#Error</div>');
                }
                else
                {
                    if (_ObjAttributes.hasOwnProperty("Decimals"))
                    {
                        _$CurrentSpinner.val(numeral(_ObjAttributes.Value).format('0.00'));
                    }
                    _$ParentElement.append('<span class="az-input-group-addon az-spinner-decrement"><i class="fas fa-minus"></i></span>').append(_$CurrentSpinner).append('<span class="az-input-group-addon az-spinner-increment"><i class="fas fa-plus"></i></span>');
                    AZSetSpinnerEvents(_$ParentElement, _ObjAttributes);
                }
            }
            else
            {
                _$CurrentSpinner.remove();
                _$ParentElement.html('<div>#Error</div>');
            }
        });
    })(jQuery);
});

function AZDatepicker($Obj, DefaultLanguage)
{
    var _DatePicker = false;
    if ($Obj.hasClass("date"))
    {
        _DatePicker = true;
        $Obj.datepicker
            ({
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                onSelect: function (curDate, instance)
                {
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("pastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                maxDate: 0,
                yearRange: "-60:+0",
                onSelect: function (curDate, instance)
                {
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("nopastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                minDate: 0,
                onSelect: function (curDate, instance)
                {
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("fromdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".todate").datepicker("option", "minDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("todate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".fromdate").datepicker("option", "maxDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("frompastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                maxDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".topastdate").datepicker("option", "minDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("topastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                maxDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".frompastdate").datepicker("option", "maxDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("fromnopastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                minDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".tonopastdate").datepicker("option", "minDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if ($Obj.hasClass("tonopastdate"))
    {
        _DatePicker = true;
        $Obj.datepicker(
            {
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-datepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-datepicker").css({ "font-size": "0.95em" });
                    }
                },
                minDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".fromnopastdate").datepicker("option", "maxDate", curDate);
                    $.publish("functionlib/azSetDate",
                        {
                            azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azDateLocalDate: curDate,
                            azDateISODate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateENUSDate: moment($Obj.datepicker("getDate")).format('MM/DD/YYYY'),
                            azDateJQElement: $Obj
                        });
                }
            });
    }
    if (_DatePicker == true)
    {
        $Obj.attr("readOnly", true);
        $.datepicker.setDefaults($.datepicker.regional[DefaultLanguage]);
    }
}

function AZTimepicker($Obj, DefaultLanguage)
{
    var _Timepicker = false;
    if ($Obj.hasClass("time"))
    {
        _Timepicker = true;
        $Obj.timepicker(
            {
                showLeadingZero: true,
                defaultTime: '',
                showCloseButton: true,
                showNowButton: true,
                showDeselectButton: true,
                beforeShow: function ()
                {
                    if ($Obj.hasClass("xs") == true)
                    {
                        $(".ui-timepicker").css({ "font-size": "0.85em" });
                    }
                    else if ($Obj.hasClass("sm") == true)
                    {
                        $(".ui-timepicker").css({ "font-size": "1.10em" });
                    }
                    else if ($Obj.hasClass("md") == true)
                    {
                        $(".ui-timepicker").css({ "font-size": "1.20em" });
                    }
                    else
                    {
                        $(".ui-timepicker").css({ "font-size": "0.90em" });
                    }
                },
                onSelect: function (curTime, instance)
                {
                    $.publish("functionlib/azSetTime",
                        {
                            azTimeId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azTimeName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azTimeClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azTimeLocalTime: curTime,
                            azTimeISOTime: moment(moment().format("YYYY-MM-DD") + ' ' + curTime).format('HH:mm'),
                            azTimeJQElement: $Obj
                        });
                }
            });
    }
    if (_Timepicker == true)
    {
        $Obj.attr("readOnly", true);
        $.timepicker.setDefaults($.timepicker.regional[DefaultLanguage]);
    }
}

function AZInputAnimatedFocusout(e)
{
    var _Element = e.target || e.srcElement;
    if ($(_Element).val() != "")
    {
        $('label[for="' + _Element.id + '"]').css({ "top": "-15px" });
    }
    else
    {
        $('label[for="' + _Element.id + '"]').removeAttr('style');
    }
}

function AZForceUppercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toUpperCase());
}

function AZForceLowercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toLowerCase());
}

function AZDoNotPaste(e)
{
    if (e.ctrlKey == true && (e.which == 118 || e.which == 86))
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function AZNotEnter(e)
{
    if ((e.keyCode || e.which) == 13)
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function AZCheckboxClick(e)
{
    var _Element = e.target || e.srcElement;
    $.publish("functionlib/azCheckboxClick",
        {
            azCheckboxId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
            azCheckboxName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
            azCheckboxClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
            azCheckboxValue: $(_Element).attr("value") === undefined ? "" : $(_Element).attr("value"),
            azCheckboxChecked: $(_Element).is(":checked"),
            azCheckboxJQElement: $(_Element)
        });
}

function AZRadioClick(e)
{
    var _Element = e.target || e.srcElement;
    $.publish("functionlib/azRadioClick",
        {
            azRadioId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
            azRadioName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
            azRadioClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
            azRadioValue: $(_Element).attr("value") === undefined ? "" : $(_Element).attr("value"),
            azRadioChecked: $(_Element).is(":checked"),
            azRadioJQElement: $(_Element)
        });
}

function AZSwitchClick(e)
{
    var _Element = e.target || e.srcElement;
    $.publish("functionlib/azSwitchClick",
        {
            azSwitchId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
            azSwitchName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
            azSwitchClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
            azSwitchValue: $(_Element).attr("value") === undefined ? "" : $(_Element).attr("value"),
            azSwitchChecked: $(_Element).is(":checked"),
            azSwitchJQElement: $(_Element)
        });
}

function AZRange(e)
{
    var _Element = e.target || e.srcElement;
    if (e.type === "input")
    {
        $.publish("functionlib/azRangeSlide",
            {
                azRangeId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
                azRangeName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
                azRangeClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
                azRangeValue: $(_Element).val(),
                azRangeJQElement: $(_Element)
            });
    }
    else if (e.type === "change")
    {
        $.publish("functionlib/azRangeStop",
            {
                azRangeId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
                azRangeName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
                azRangeClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
                azRangeValue: $(_Element).val(),
                azRangeJQElement: $(_Element)
            });
    }
}

function AZDisableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (!_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.addClass("az-button-disabled");
        _$SelectedButton.attr("disabled", true);
    }
}

function AZEnableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.removeClass("az-button-disabled");
        _$SelectedButton.attr("disabled", false);
    }
}

function AZShowCoverSpin(CoverSpinText)
{
    var _CoverSpinText = CoverSpinText === undefined ? "" : CoverSpinText;
    if ($("#az-cover-spin").length == 0)
    {
        $("body").append('<div id="az-cover-spin"><div>' + _CoverSpinText + '</div></div>');
    }
}

function AZHideCoverSpin()
{
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length > 0)
    {
        _$CoverSpin.remove();
    }
}

function AZToggleNavbarMobile(e)
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
    else
    {
        _$NavbarTopContent.addClass("mobile");
    }
}

function AZCloseNavbarMobile()
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
}

function AZDropdown(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = $(_Element).closest(".az-dropdown-click").find("ul.az-dropdown-content");
    $(".az-dropdown-display").not(_$ULDropdown).each(function ()
    {
        $(this).removeClass("az-dropdown-display");
    });
    if (_$ULDropdown.hasClass("az-dropdown-display"))
    {
        _$ULDropdown.removeClass("az-dropdown-display");
    }
    else
    {
        _$ULDropdown.addClass("az-dropdown-display");
        window.setTimeout(function ()
        {
            $(document).one("click", { ULDropdown: _$ULDropdown }, AZRemoveDropdown);
        }, 100);
    }
}

function AZRemoveDropdown(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = e.data.ULDropdown;
    if ($(_Element) != _$ULDropdown)
    {
        if (_$ULDropdown.hasClass("az-dropdown-display"))
        {
            _$ULDropdown.removeClass("az-dropdown-display");
        }
    }
}

function AZHideShowPassword(e)
{
    var _Element = e.target || e.srcElement;
    var _SelectedElementId = "";
    if ($(_Element).hasClass("passwordeye"))
    {
        _SelectedElementId = $(_Element).attr("data-connectedid");
    }
    else
    {
        if ($(_Element).parent().hasClass("passwordeye"))
        {
            _SelectedElementId = $(_Element).parent().attr("data-connectedid");
        }
    }
    if (_SelectedElementId != "")
    {
        var _$PasswordField = $("#" + _SelectedElementId)[0];
        if (_$PasswordField.type == "password")
        {
            if (_$PasswordField.value != "")
            {
                _$PasswordField.type = "text";
            }
        }
        else
        {
            _$PasswordField.type = "password";
        }
    }
}

function AZLabelAnimatedClick(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).siblings(":input").focus();
}

function AZSetSpinnerEvents(Element, ObjAttributes)
{
    var _SpinnerTimeOut;
    Element.children().eq(0).off("mousedown touchstart mouseup mouseleave touchend").on("mousedown touchstart", function (e)
    {
        _SpinnerTimeOut = setInterval(function ()
        {
            var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
            if (_CurrentSpinnerValue >= ObjAttributes.Min)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                $.publish("functionlib/azInputSpinner",
                    {
                        azInputSpinnerId: Element.attr("id") != undefined ? Element.attr("id") : Element.attr("data-id") != undefined ? Element.attr("data-id") : "",
                        azInputSpinnerName: Element.attr("name") === undefined ? "" : Element.attr("name"),
                        azInputSpinnerClass: Element.attr("class") === undefined ? "" : Element.attr("class"),
                        azInputSpinnerValue: _CurrentSpinnerValue,
                        azInputSpinnerJQElement: Element
                    });
            }
        }, 100);
    }).on("mouseup mouseleave touchend", function ()
    {
        clearInterval(_SpinnerTimeOut);
    });
    Element.children().eq(2).off("mousedown touchstart mouseup mouseleave touchend").on("mousedown touchstart", function (e)
    {
        _SpinnerTimeOut = setInterval(function ()
        {
            var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
            if (_CurrentSpinnerValue <= ObjAttributes.Max)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                $.publish("functionlib/azInputSpinner",
                    {
                        azInputSpinnerId: Element.attr("id") != undefined ? Element.attr("id") : Element.attr("data-id") != undefined ? Element.attr("data-id") : "",
                        azInputSpinnerName: Element.attr("name") === undefined ? "" : Element.attr("name"),
                        azInputSpinnerClass: Element.attr("class") === undefined ? "" : Element.attr("class"),
                        azInputSpinnerValue: _CurrentSpinnerValue,
                        azInputSpinnerJQElement: Element
                    });
            }
        }, 100);
    }).on("mouseup mouseleave touchend", function ()
    {
        clearInterval(_SpinnerTimeOut);
    });
    Element.children().eq(0).off("click").on("click", function (e)
    {
        var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
        if (_CurrentSpinnerValue >= ObjAttributes.Min)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            $.publish("functionlib/azInputSpinner",
                {
                    azInputSpinnerId: Element.attr("id") != undefined ? Element.attr("id") : Element.attr("data-id") != undefined ? Element.attr("data-id") : "",
                    azInputSpinnerName: Element.attr("name") === undefined ? "" : Element.attr("name"),
                    azInputSpinnerClass: Element.attr("class") === undefined ? "" : Element.attr("class"),
                    azInputSpinnerValue: _CurrentSpinnerValue,
                    azInputSpinnerJQElement: Element
                });
        }
    });
    Element.children().eq(2).off("click").on("click", function (e)
    {
        var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
        if (_CurrentSpinnerValue <= ObjAttributes.Max)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            $.publish("functionlib/azInputSpinner",
                {
                    azInputSpinnerId: Element.attr("id") != undefined ? Element.attr("id") : Element.attr("data-id") != undefined ? Element.attr("data-id") : "",
                    azInputSpinnerName: Element.attr("name") === undefined ? "" : Element.attr("name"),
                    azInputSpinnerClass: Element.attr("class") === undefined ? "" : Element.attr("class"),
                    azInputSpinnerValue: _CurrentSpinnerValue,
                    azInputSpinnerJQElement: Element
                });
        }
    });
}

function AZCheckSpinnerAttributes(Element)
{
    var _Attributes = 0;
    var _ObjAttributes = {};
    $.each(Element.attributes, function ()
    {
        if (this.name == "min" && this.value != "")
        {
            _ObjAttributes.Min = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "max" && this.value != "")
        {
            _ObjAttributes.Max = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "step" && this.value != "")
        {
            _ObjAttributes.Step = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "value" && this.value != "")
        {
            _ObjAttributes.Value = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "data-decimals" && this.value != "")
        {
            _ObjAttributes.Decimals = parseFloat(this.value);
        }
    });
    if (_Attributes !== 4)
    {
        _ObjAttributes = {};
    }
    return _ObjAttributes;
}

// AZ Accordion
function AZAccordion(Options)
{
    if (this instanceof AZAccordion === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azAccordionId: "",
            azAccordionHeightStyle: "content",
            azAccordionCollapsible: true,
            azAccordionOpenEvent: "click",
            azAccordionSlideDown: 100,
            azAccordionSlideUp: 100,
            azAccordionIconClosed: "fas fa-plus",
            azAccordionIconOpen: "fas fa-minus",
            azAccordionHeaderBackgroundColor: "",
            azAccordionHeaderColor: "",
            azAccordionHeaderHoverBackgroundColor: "",
            azAccordionHeaderHoverColor: "",
            azAccordionArticleBackgroundColor: "",
            azAccordionArticleColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azAccordionId != "")
        {
            _Main.azAccordionId = _Main.Options.azAccordionId;
            _Main.$Accordion = $("#" + _Main.azAccordionId);
            _Main.$AccordionCard = _Main.$Accordion.children(".az-accordion-card");
            _Main.$Header = _Main.$AccordionCard.children("header").append('<span class="az-accordion-icon"><i class="' + _Main.Options.azAccordionIconClosed + '"></i><span>');
            _Main.$Article = _Main.$AccordionCard.children("article");

            if (_Main.Options.azAccordionHeaderBackgroundColor !== "")
            {
                _Main.$Header.css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor });
            }
            if (_Main.Options.azAccordionHeaderColor !== "")
            {
                _Main.$Header.css({ "color": _Main.Options.azAccordionHeaderColor });
            }
            _Main.$Header.off().on("mouseenter", function ()
            {
                if (_Main.Options.azAccordionHeaderHoverBackgroundColor !== "")
                {
                    $(this).css({ "background-color": _Main.Options.azAccordionHeaderHoverBackgroundColor });
                }
                if (_Main.Options.azAccordionHeaderHoverColor !== "")
                {
                    $(this).css({ "color": _Main.Options.azAccordionHeaderHoverColor });
                }
            }).on("mouseleave", function ()
            {
                if (_Main.Options.azAccordionHeaderHoverBackgroundColor !== "")
                {
                    if (_Main.Options.azAccordionHeaderBackgroundColor !== "")
                    {
                        $(this).css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor });
                    }
                    else
                    {
                        $(this).css({ "background-color": "#0078D7" });
                    }
                }
                if (_Main.Options.azAccordionHeaderHoverColor !== "")
                {
                    if (_Main.Options.azAccordionHeaderColor !== "")
                    {
                        $(this).css({ "color": _Main.Options.azAccordionHeaderColor });
                    }
                    else
                    {
                        $(this).css({ "color": "#FFFFFF" });
                    }
                }
            });
            if (_Main.Options.azAccordionArticleBackgroundColor !== "")
            {
                _Main.$Article.css({ "background-color": _Main.Options.azAccordionArticleBackgroundColor });
            }
            if (_Main.Options.azAccordionArticleColor !== "")
            {
                _Main.$Article.css({ "color": _Main.Options.azAccordionArticleColor });
            }

            _Main.MaxArticleHeight = 0;
            _Main.ArticleHeight = function ()
            {
                _Main.MaxArticleHeight = 0;
                _Main.$Article.css({ height: "inherit" });
                _Main.$Article.each(function ()
                {
                    _Main.MaxArticleHeight = Math.max(_Main.MaxArticleHeight, $(this).height());
                });
                if (_Main.MaxArticleHeight > 0)
                {
                    _Main.$Article.height(_Main.MaxArticleHeight);
                }
            };

            _Main.azSelectAccordion = function (SelectedIndex)
            {
                azExecAccordion(_Main.$AccordionCard.eq(SelectedIndex).children("header"));
            };

            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.azSelectAccordion(SelectedIndex);
                window.setTimeout(function ()
                {
                    _Main.$AccordionCard.eq(SelectedIndex).children("article").fadeOut(function ()
                    {
                        _Main.$AccordionCard.eq(SelectedIndex).children("article").html(SelectedText);
                    }).fadeIn();
                }, 500);
            };

            _Main.$Accordion.off().on(_Main.Options.azAccordionOpenEvent, ".az-accordion-card > header", function (e)
            {
                azExecAccordion($(this));
            });

            _Main.AccordionActivated = "";
            _Main.AccordionDeactivated = "";
            function azExecAccordion($SelectedAccordionHeader)
            {
                if ($SelectedAccordionHeader.hasClass("az-accordion-header-active") === true)
                {
                    if (_Main.Options.azAccordionCollapsible === true)
                    {
                        $SelectedAccordionHeader.removeClass("az-accordion-header-active");
                        $SelectedAccordionHeader.siblings("article").slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                        $("span.az-accordion-icon > i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                        if (_Main.AccordionActivated == $SelectedAccordionHeader.parent().index())
                        {
                            _Main.AccordionActivated = "";
                        }
                        $.publish("functionlib/azAccordionHeader",
                            {
                                azAccordionId: _Main.azAccordionId,
                                azAccordionStatus: "closed",
                                azAccordionActivated: _Main.AccordionActivated,
                                azAccordionDeactivated: _Main.AccordionDeactivated,
                                azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                            });
                        _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                    }
                    else
                    {
                        if (_Main.AccordionDeactivated == $SelectedAccordionHeader.parent().index())
                        {
                            _Main.AccordionDeactivated = "";
                        }
                        $.publish("functionlib/azAccordionHeader",
                            {
                                azAccordionId: _Main.azAccordionId,
                                azAccordionStatus: "open",
                                azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                                azAccordionDeactivated: _Main.AccordionDeactivated,
                                azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                            });
                        _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                    }
                }
                else
                {
                    _Main.$Header.removeClass("az-accordion-header-active");
                    _Main.$Article.slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                    $("span.az-accordion-icon > i", _Main.$Header).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                    $SelectedAccordionHeader.addClass("az-accordion-header-active");
                    $SelectedAccordionHeader.siblings("article").slideDown(_Main.Options.azAccordionSlideDown).addClass("az-accordion-article-active");
                    $("span.az-accordion-icon > i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconClosed).addClass(_Main.Options.azAccordionIconOpen);

                    if (_Main.AccordionDeactivated == $SelectedAccordionHeader.parent().index())
                    {
                        _Main.AccordionDeactivated = "";
                    }
                    $.publish("functionlib/azAccordionHeader",
                        {
                            azAccordionId: _Main.azAccordionId,
                            azAccordionStatus: "open",
                            azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                            azAccordionDeactivated: _Main.AccordionDeactivated,
                            azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                        });
                    _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                }
            }

            if (_Main.Options.azAccordionHeightStyle == "auto")
            {
                _Main.ArticleHeight();
                $(window).resize(function ()
                {
                    _Main.ArticleHeight();
                });
            }
            if (_Main.Options.azAccordionCollapsible == false)
            {
                _Main.azSelectAccordion(0);
            }
            $.publish("functionlib/azAccordionReady", _Main);
        }
    }
    else
    {
        return new AZAccordion(Options);
    }
}

// AZ Ajax
function AZAjax(Options)
{
    if (this instanceof AZAjax === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azAjaxUrl: "",
            azAjaxDataType: "json",
            azAjaxType: "POST",
            azAjaxContentType: "application/json; charset=utf-8",
            azAjaxObjHeaders: {},
            azAjaxTimeout: 15000,
            azAjaxObjToSend: {}
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azAjaxUrl != "")
        {
            _Main.AjaxOptions =
            {
                url: _Main.Options.azAjaxUrl,
                dataType: _Main.Options.azAjaxDataType,
                type: _Main.Options.azAjaxType,
                contentType: _Main.Options.azAjaxContentType,
                headers: _Main.Options.azAjaxObjHeaders,
                timeout: _Main.Options.azAjaxTimeout
            };
            if (IsEmpty(_Main.Options.azAjaxObjToSend) === false)
            {
                _Main.AjaxOptions.data = JSON.stringify(_Main.Options.azAjaxObjToSend);
            }
            $.ajaxSetup({ cache: false });
            return $.ajax(_Main.AjaxOptions).promise();
        }
        else
        {
            return $.Deferred().resolve("");
        }
    }
    else
    {
        return new AZAjax(Options);
    }
}

// AZ Background Slider
function AZBackgroundSlider(Options)
{
    if (this instanceof AZBackgroundSlider === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azBackgroundSliderId: "",
            azBackgroundSliderDir: "horizontal",
            azBackgroundSliderWidth: 500,
            azBackgroundSliderHeight: 300
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azBackgroundSliderId != "")
        {
            _Main.$BackgroundSlider = $("#" + _Main.Options.azBackgroundSliderId);
            _Main.$BackgroundSliderWrapper = _Main.$BackgroundSlider.children(".az-background-slider-wrapper");
            _Main.$BackgroundSliderContent = _Main.$BackgroundSliderWrapper.children(".az-background-slider-content");

            if (_Main.$BackgroundSliderContent.length > 0)
            {
                _Main.SliderWidth = _Main.Options.azBackgroundSliderWidth;
                _Main.SliderHeight = _Main.Options.azBackgroundSliderHeight;
                _Main.ContentWidth = _Main.Options.azBackgroundSliderWidth;
                _Main.ContentHeight = _Main.Options.azBackgroundSliderHeight;
                _Main.ContentMaxWidth = 0;
                _Main.ContentMaxHeight = 0;
                _Main.LeftRightMargin = 7;
                _Main.TopBottomMargin = 7;

                if (_Main.Options.azBackgroundSliderWidth > window.innerWidth)
                {
                    _Main.Options.azBackgroundSliderWidth = (window.innerWidth - 40);
                    _Main.SliderWidth = _Main.Options.azBackgroundSliderWidth;
                    _Main.ContentWidth = _Main.Options.azBackgroundSliderWidth;
                }
                if (_Main.Options.azBackgroundSliderHeight > window.innerHeight)
                {
                    _Main.Options.azBackgroundSliderHeight = (window.innerHeight - 40);
                    _Main.SliderHeight = _Main.Options.azBackgroundSliderHeight;
                    _Main.ContentHeight = _Main.Options.azBackgroundSliderHeight;
                }

                _Main.$BackgroundSliderContent.css({ "width": _Main.ContentWidth, "height": _Main.ContentHeight });
                _Main.$BackgroundSliderContent.find("img").css({ "width": _Main.ContentWidth, "height": _Main.ContentHeight });

                _Main.$BackgroundSliderContent.each(function (Index, Content)
                {
                    if ($(Content).outerWidth(true) > _Main.ContentMaxWidth)
                    {
                        _Main.ContentMaxWidth = $(Content).outerWidth(true);
                    }
                    if ($(Content).outerHeight(true) > _Main.ContentMaxHeight)
                    {
                        _Main.ContentMaxHeight = $(Content).outerHeight(true);
                    }
                });
                if (_Main.ContentMaxWidth > _Main.$BackgroundSliderContent.innerWidth())
                {
                    _Main.LeftRightMargin = ((_Main.ContentMaxWidth - _Main.$BackgroundSliderContent.innerWidth()) / 2);
                }
                if (_Main.ContentMaxHeight > _Main.$BackgroundSliderContent.innerHeight())
                {
                    _Main.TopBottomMargin = ((_Main.ContentMaxHeight - _Main.$BackgroundSliderContent.innerHeight()) / 2);
                }

                if (_Main.Options.azBackgroundSliderDir === "horizontal")
                {
                    _Main.$BackgroundSliderWrapper.css({ "width": (_Main.$BackgroundSliderContent.length * _Main.ContentMaxWidth) });
                    _Main.$BackgroundSlider.css({ "overflow-x": "scroll", "width": "100%", "height": (_Main.ContentMaxHeight + 20) });
                    _Main.$BackgroundSliderContent.css({ "float": "left", "margin-left": _Main.LeftRightMargin, "margin-right": _Main.LeftRightMargin, "margin-top": 0, "margin-bottom": 0 });
                }
                else
                {
                    _Main.$BackgroundSlider.css({ "overflow-y": "scroll", "width": "100%", "height": _Main.ContentMaxHeight });
                    if (_Main.Options.azBackgroundSliderWidth < window.innerWidth)
                    {
                        _Main.$BackgroundSlider.css({ "width": (_Main.ContentWidth + 20) });
                    }
                    _Main.$BackgroundSliderContent.css({ "margin-left": _Main.LeftRightMargin, "margin-right": 0, "margin-top": _Main.TopBottomMargin, "margin-bottom": _Main.TopBottomMargin });
                }

                $.publish("functionlib/azBackgroundSliderReady", _Main);
            }
        }
    }
    else
    {
        return new AZBackgroundSlider(Options);
    }
}

// AZ Circular Bar
function AZCircularBar(Options)
{
    if (this instanceof AZCircularBar === true)
    {
        var _Defaults =
        {
            azCircularBarId: "",
            azCircularBarSize: 120,
            azCircularBarColor: "#BBBBBB",
            azCircularBarValue: 0,
            azCircularBarValueColor: "#0078D7",
            azCircularBarLabel: "",
            azCircularBarCaption: "",
            azCircularBarCaptionColor: ""
        };

        var _Main;
        if (Options && Options.length > 0)
        {
            $.each(Options, function (Index, ObjCurrentOption)
            {
                _Main = new AktivateAZCircularBar(ObjCurrentOption);
                $.publish("functionlib/azCircularBarReady", _Main);
            });
        }
        else if (IsEmpty(Options) === false)
        {
            _Main = new AktivateAZCircularBar(Options);
            $.publish("functionlib/azCircularBarReady", _Main);
        }

        function AktivateAZCircularBar(ObjCurrentOption)
        {
            this.Options = $.extend({}, _Defaults, ObjCurrentOption || {});
            if (this.Options.azCircularBarId != "")
            {
                this.$CircularBar = $("#" + this.Options.azCircularBarId);
                this.$CircularBar.$Slice = $('<div></div>').addClass("slice");
                this.$CircularBar.$Bar = $('<div></div>').addClass("bar").css({ "border-color": this.Options.azCircularBarValueColor });
                this.$CircularBar.$Fill = $('<div></div>').addClass("fill").css({ "border-color": this.Options.azCircularBarValueColor });
                this.$CircularBar.$Label = $('<span></span>').addClass("label").html(this.Options.azCircularBarLabel);
                if (this.Options.azCircularBarCaption != "")
                {
                    this.$CircularBar.$Caption = $('<span></span>').addClass("caption").css({ "top": this.Options.azCircularBarSize, "color": this.Options.azCircularBarCaptionColor }).html(this.Options.azCircularBarCaption);
                }
                this.$CircularBar.$Slice.append(this.$CircularBar.$Bar).append(this.$CircularBar.$Fill);
                this.$CircularBar.append(this.$CircularBar.$Label).append(this.$CircularBar.$Slice).append(this.$CircularBar.$Caption).addClass("c100 p" + this.Options.azCircularBarValue).css({ "background-color": this.Options.azCircularBarColor, "font-size": this.Options.azCircularBarSize });

                this.ChangeCircularBar = function (Options)
                {
                    this.$CircularBar.$Bar.css({ "border-color": Options.azCircularBarValueColor });
                    this.$CircularBar.$Fill.css({ "border-color": Options.azCircularBarValueColor });
                    this.$CircularBar.$Label.html(Options.azCircularBarLabel);
                    this.$CircularBar.$Caption.css({ "top": Options.azCircularBarSize, "color": Options.azCircularBarCaptionColor }).html(Options.azCircularBarCaption);
                    this.$CircularBar.removeClass().addClass("c100 p" + Options.azCircularBarValue).css({ "background-color": Options.azCircularBarColor, "font-size": Options.azCircularBarSize });
                };
                return this;
            }
        }
    }
    else
    {
        return new AZCircularBar(Options);
    }
}

// AZ Modal Dialog
function AZModalDialog(Options)
{
    if (this instanceof AZModalDialog === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azModalDialogId: "",
            azModalDialogTitle: "",
            azModalDialogText: "",
            azModalDialogiFrameURL: "",
            azModalDialogWidth: 300,
            azModalDialogHeight: 150,
            azModalDialogContentHeight: false,
            azModalDialogNoParentScroll: false,
            azModalDialogBackground: true,
            azModalDialogModal: true,
            azModalDialogTitlebar: true,
            azModalDialogTitlebarClose: true,
            azModalDialogResizable: false,
            azModalDialogDraggable: true,
            azModalDialogCloseOnEscape: true,
            azModalDialogPosition: false,
            azModalDialogPositionOf: {},
            azModalDialogPositionMy: "left bottom-30",
            azModalDialogPositionAt: "left top",
            azModalDialogBackgroundColor: "",
            azModalDialogColor: "",
            azModalDialogTitlebarBackgroundColor: "",
            azModalDialogTitlebarColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azModalDialogId !== "" && $("#" + _Main.Options.azModalDialogId).length === 0)
        {
            _Main.azModalDialogId = _Main.Options.azModalDialogId;
            $.publish("functionlib/azModalDialogBeforeOpen", { azModalDialogId: _Main.azModalDialogId });

            ModalDialogScrollTop = 0;
            _Main.$Body = $("body");
            _Main.$Background = {};
            _Main.$Iframe;

            _Main.$Dialog = $("<div></div>").attr("id", _Main.azModalDialogId).addClass("az-modal-dialog-content");
            _Main.$Card = $("<div></div>").addClass("az-modal-card");
            _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
            _Main.$Card.append(_Main.$Article);

            // AZModalDialog Size
            if (_Main.Options.azModalDialogWidth > (window.innerWidth - 20))
            {
                _Main.Options.azModalDialogWidth = (window.innerWidth - 20);
            }
            if (_Main.Options.azModalDialogHeight > (window.innerHeight - 20))
            {
                _Main.Options.azModalDialogHeight = (window.innerHeight - 20);
            }

            // AZModalDialog iFrame
            if (_Main.Options.azModalDialogiFrameURL != "")
            {
                var _IFrameHeight = (_Main.Options.azModalDialogHeight - 53);
                if (_Main.Options.azModalDialogTitlebar === false)
                {
                    _IFrameHeight = _IFrameHeight + 29;
                }
                _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.azModalDialogId);
                _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
                _Main.$Card.append(_Main.$Iframe);
            }

            // AZModalDialog UI Dialog
            _Main.$Dialog.append(_Main.$Card);
            _Main.$CurrentDialog = _Main.$Dialog.dialog(
                {
                    autoOpen: false,
                    modal: false,
                    width: _Main.Options.azModalDialogWidth,
                    resizable: _Main.Options.azModalDialogResizable,
                    draggable: _Main.Options.azModalDialogDraggable,
                    closeOnEscape: _Main.Options.azModalDialogCloseOnEscape
                });
            if (_Main.Options.azModalDialogContentHeight === false)
            {
                _Main.$CurrentDialog.dialog({ height: _Main.Options.azModalDialogHeight });
            }

            if (_Main.Options.azModalDialogPosition && IsEmpty(_Main.Options.azModalDialogPositionOf) === false && window.innerWidth > 576)
            {
                _Main.$CurrentDialog.dialog(
                    {
                        position:
                        {
                            my: _Main.Options.azModalDialogPositionMy,
                            at: _Main.Options.azModalDialogPositionAt,
                            of: _Main.Options.azModalDialogPositionOf
                        }
                    });
            }
            _Main.$UIDialog = _Main.$Dialog.parent(".ui-dialog").addClass("az-modal-dialog");
            _Main.$UIDialogTitlebar = _Main.$UIDialog.children(".ui-dialog-titlebar").addClass("az-modal-dialog-titlebar");
            _Main.$UIDialogTitlebar.children(".ui-dialog-title").html(_Main.Options.azModalDialogTitle);
            _Main.$UIDialogTitlebar.children(".ui-dialog-titlebar-close").removeAttr("title");
            if (_Main.Options.azModalDialogBackgroundColor !== "")
            {
                _Main.$UIDialog.css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important" });
            }
            if (_Main.Options.azModalDialogColor !== "")
            {
                _Main.$UIDialog.css({ "color": _Main.Options.azModalDialogColor + " !important" });
            }
            if (_Main.Options.azModalDialogTitlebarBackgroundColor !== "")
            {
                _Main.$UIDialogTitlebar.css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important" });
            }
            if (_Main.Options.azModalDialogTitlebarColor !== "")
            {
                _Main.$UIDialogTitlebar.css({ "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
            }
            if (_Main.Options.azModalDialogTitlebar === false)
            {
                _Main.$UIDialogTitlebar.hide();
            }
            if (_Main.Options.azModalDialogTitlebarClose === false)
            {
                _Main.$UIDialogTitlebar.children(".ui-dialog-titlebar-close").hide();
            }
            _Main.$CurrentDialog.dialog("open");
            _Main.$CurrentDialog.dialog(
                {
                    focus: function (e, ui)
                    {
                        var _Element = e.target || e.srcElement;
                        $(".ui-dialog").not($(_Element).parent(".ui-dialog")).css({ "z-index": "5000" });
                        $(_Element).parent(".ui-dialog").css({ "z-index": "5001" });
                    },
                    close: function (e, ui)
                    {
                        if (e.originalEvent)
                        {
                            _Main.azModalDialogClose(e);
                        }
                    }
                });

            var _$ListUIDialog = $(".ui-dialog").not(_Main.$UIDialog);

            // AZModalDialog No Parent Scroll
            if (_$ListUIDialog.length === 0 || _Main.$Body.hasClass("az-no-parent-scroll") === false)
            {
                if (_Main.Options.azModalDialogNoParentScroll === true)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    _Main.$Body.addClass("az-no-parent-scroll");
                }
            }
            if (_$ListUIDialog.length === 0)
            {
                // AZModalDialog Background
                _Main.$Background = $("<div></div>").attr("id", "az-background");
                if (_Main.Options.azModalDialogBackground === true)
                {
                    _Main.$Body.append(_Main.$Background);
                }

                // AZModalDialog Modal
                if (_Main.Options.azModalDialogModal === false)
                {
                    _Main.$Background.off("click").on("click", function (e)
                    {
                        var _Element = e.target || e.srcElement;
                        if ($(_Element).attr("id") == "az-background")
                        {
                            _Main.azModalDialogClose(e);
                        }
                    });
                }
            }
            $.publish("functionlib/azModalDialogAfterOpen", _Main);
            if (_Main.$CurrentDialog.height() > (window.innerHeight - 20))
            {
                _Main.$CurrentDialog.dialog({ height: (window.innerHeight - 20) });
            }

            // AZModalDialog Close
            _Main.azModalDialogClose = function ()
            {
                // AZModalDialog iFrame
                if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
                {
                    _Main.$Iframe.attr("src", "");
                }

                // AZModalDialog UI Dialog
                _Main.$Dialog.dialog("close");
                if (_Main.$Dialog.length > 0)
                {
                    _Main.$Dialog.remove();
                }

                var _$ListUIDialog = $(".ui-dialog");
                if (_$ListUIDialog.length === 0)
                {
                    $("#az-background").remove();
                    if ($("#az-full-window").length === 0)
                    {
                        if (ModalDialogScrollTop > 0)
                        {
                            $(window).scrollTop(ModalDialogScrollTop);
                        }

                        $("body").removeClass("az-no-parent-scroll");
                        if ($("body").hasClass("") === true)
                        {
                            $("body").removeAttr("class");
                        }
                    }
                }
                $.publish("functionlib/azModalDialogAfterClose", { azModalDialogId: _Main.azModalDialogId });
            };

            // AZModalDialog Change Titlebar
            _Main.azChangeModalTitlebar = function (Options)
            {
                var _Defaults =
                {
                    azModalDialogTitle: "",
                    azModalDialogTitlebarBackgroundColor: "",
                    azModalDialogTitlebarColor: "",
                    azModalDialogAlertTimeout: 3000
                };
                _Main.Options = $.extend({}, _Defaults, Options || {});

                if ($(".az-dialog-titlebar").length === 0)
                {
                    _Main.$NewUIDialogTitlebar = $('<div></div>').addClass("ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle az-modal-dialog-titlebar");
                    _Main.$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + _Main.Options.azModalDialogTitle + '</span>');
                    _Main.$UIDialogTitlebar.hide();
                    _Main.$UIDialog.prepend(_Main.$NewUIDialogTitlebar);
                    if (_Main.Options.azModalDialogTitlebarBackgroundColor !== "")
                    {
                        _Main.$NewUIDialogTitlebar.css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important" });
                    }
                    if (_Main.Options.azModalDialogTitlebarColor !== "")
                    {
                        _Main.$NewUIDialogTitlebar.css({ "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                    }
                    _Main.$Body.addClass("az-dialog-titlebar");
                    window.setTimeout(function ()
                    {
                        _Main.$NewUIDialogTitlebar.remove();
                        _Main.$UIDialogTitlebar.show();
                        _Main.$Body.removeClass("az-dialog-titlebar");
                        if (_Main.$Body.hasClass("") === true)
                        {
                            _Main.$Body.removeAttr("class");
                        }
                    }, _Main.Options.azModalDialogAlertTimeout);
                }
            };
        }
    }
    else
    {
        return new AZModalDialog(Options);
    }
}

function AZCheckAsyncAndPublish(FunctionToRun, Publish, ObjData)
{
    if (FunctionToRun)
    {
        var _Obj = FunctionToRun();
        if (!IsEmpty(_Obj) && _Obj.hasOwnProperty("promise"))
        {
            _Obj.always(function ()
            {
                $.publish(Publish, ObjData);
            });
        }
        else
        {
            $.publish(Publish, ObjData);
        }
    }
    else
    {
        $.publish(Publish, ObjData);
    }
}

// AZ Snackbar
window.ListSnackbar = [];
function AZSnackbar(Options)
{
    if (this instanceof AZSnackbar === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSnackbarId: Guid(),
            azSnackbarText: "",
            azSnackbarPosition: "left-top",
            azSnackbarTopMargin: 20,
            azSnackbarBottomMargin: 20,
            azSnackbarMobileMinHeight: 0,
            azSnackbarClose: false,
            azSnackbarTimeout: 3000,
            azSnackbarBackgroundColor: "",
            azSnackbarColor: "",
            azSnackbarCloseColor: "",
            azSnackbarAfterOpen: function () { }
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        _Main.SnackbarTimer;
        _Main.$Snackbar = $('<div></div>').attr({ "id": _Main.Options.azSnackbarId }).addClass("az-snackbar");
        _Main.$Table = $('<table></table>').addClass("az-snackbar-table");
        if (_Main.Options.azSnackbarBackgroundColor !== "")
        {
            _Main.$Snackbar.css({ "background-color": _Main.Options.azSnackbarBackgroundColor + " !important" });
        }

        _Main.AnimateOpenOptions = {};
        _Main.AnimateCloseOptions = {};
        if (_Main.Options.azSnackbarPosition == "left-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "left-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "center-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "center-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "right-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "right-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "full-width-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "full-width-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        _Main.$Snackbar.addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);

        if (window.innerWidth < 576)
        {
            if (_Main.AnimateOpenOptions.hasOwnProperty("top") === true)
            {
                _Main.AnimateOpenOptions.top = 20;
            }
            if (_Main.AnimateOpenOptions.hasOwnProperty("bottom") === true)
            {
                _Main.AnimateOpenOptions.bottom = 20;
            }
            if (_Main.Options.azSnackbarMobileMinHeight > 0)
            {
                if (_Main.Options.azSnackbarMobileMinHeight > (window.innerHeight - 70))
                {
                    _Main.Options.azSnackbarMobileMinHeight = (window.innerHeight - 70);
                }
                _Main.$Snackbar.css({ "min-height": _Main.Options.azSnackbarMobileMinHeight });
            }
        }

        _Main.azCloseSnackbar = function ()
        {
            _Main.$Snackbar.animate(_Main.AnimateCloseOptions, 500, function ()
            {
                window.clearTimeout(_Main.SnackbarTimer);
                $("#" + _Main.Options.azSnackbarId).remove();
                if ($(".az-snackbar.az-snackbar-" + _Main.Options.azSnackbarPosition).length === 0)
                {
                    for (var i = 0; i < window.ListSnackbar.length; i++)
                    {
                        if (window.ListSnackbar[i].attr("class").toString() == "az-snackbar-container az-snackbar-" + _Main.Options.azSnackbarPosition)
                        {
                            $(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).remove();
                            window.ListSnackbar.splice(i, 1);
                            break;
                        }
                    }
                }
            });
        };

        _Main.azChangeText = function (SnackbarText)
        {
            _Main.$TextCell.html(SnackbarText);
        };

        if (_Main.Options.azSnackbarClose === true)
        {
            _Main.$Close = $('<td></td>').html("X").addClass("az-snackbar-close");
            if (_Main.Options.azSnackbarCloseColor !== "")
            {
                _Main.$Close.css({ "color": _Main.Options.azSnackbarCloseColor + " !important" });
            }
            _Main.$Close.off("click").on("click", function ()
            {
                _Main.azCloseSnackbar();
            });
        }

        _Main.$TextCell = $('<td></td>').html(_Main.Options.azSnackbarText).addClass("az-snackbar-text");
        if (_Main.Options.azSnackbarColor !== "")
        {
            _Main.$TextCell.css({ "color": _Main.Options.azSnackbarColor + " !important" });
        }
        _Main.$TableRow = $('<tr></tr>').append(_Main.$TextCell).append(_Main.$Close);
        _Main.$Table.append(_Main.$TableRow);
        _Main.$Snackbar.append(_Main.$Table);

        if ($(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).length === 0)
        {
            $Container = $('<div></div>').addClass("az-snackbar-container").addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);
            window.ListSnackbar.push($Container);
            $Container.append(_Main.$Snackbar);
            $("body").append($Container);
        }
        else
        {
            $(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).append(_Main.$Snackbar);
        }

        if (_Main.Options.azSnackbarClose === false)
        {
            _Main.SnackbarTimer = window.setTimeout(_Main.azCloseSnackbar, _Main.Options.azSnackbarTimeout);
        }

        _Main.$Snackbar.animate(_Main.AnimateOpenOptions, 500, function ()
        {
            $.publish("functionlib/azSnackbarAfterOpen", _Main);
        });
    }
    else
    {
        return new AZSnackbar(Options);
    }
}

// AZ Tabs
function AZTabs(Options)
{
    if (this instanceof AZTabs === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azTabsId: "",
            azTabsHeightStyle: "content",
            azTabsOpenEvent: "click",
            azTabsIndex: 0
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azTabsId != "")
        {
            _Main.$Tabs = $("#" + _Main.Options.azTabsId);
            _Main.$TabsCard = _Main.$Tabs.children(".az-tabs-card");
            _Main.$Article = _Main.$TabsCard.children("article");

            _Main.MaxArticleHeight = 0;
            _Main.azArticleHeight = function ()
            {
                _Main.MaxArticleHeight = 0;
                _Main.$Article.css({ height: "inherit" });
                _Main.$Article.each(function ()
                {
                    _Main.MaxArticleHeight = Math.max(_Main.MaxArticleHeight, $(this).height());
                });
                if (_Main.MaxArticleHeight > 0)
                {
                    _Main.$Article.height(_Main.MaxArticleHeight);
                }
            };

            _Main.azSelectTabs = function (SelectedIndex)
            {
                azExecTabs(_Main.$Tabs.children("ul").children("li").eq(SelectedIndex));
            };

            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.$TabsCard.children("article").eq(SelectedIndex).html(SelectedText);
            };

            _Main.azToggleVertical = function ()
            {
                _Main.$Tabs.toggleClass("az-tabs-vertical");
            };

            _Main.$Tabs.off().on(_Main.Options.azTabsOpenEvent, " > ul > li", function (e)
            {
                azExecTabs($(this));
                var _Element = e.target || e.srcElement;
                $.publish("functionlib/azTabs",
                    {
                        azTabsId: _Main.Options.azTabsId,
                        azTabsJQElement: $(_Element)
                    });
            });

            if (window.innerWidth < 576)
            {
                _Main.$Tabs.removeClass("az-tabs-vertical");
            }

            _Main.azTabsDeactivated = "";
            function azExecTabs($SelectedTab)
            {
                var _MenuIndex = $($SelectedTab).index();
                _Main.$Tabs.children("ul").children("li").removeAttr("class");
                _Main.$Tabs.children("ul").children("li").eq(_MenuIndex).addClass("az-tabs-tab-active");
                _Main.$TabsCard.removeClass("az-tabs-card-active");
                _Main.$TabsCard.eq(_MenuIndex).addClass("az-tabs-card-active");
                _Main.$Article.removeAttr("class");
                _Main.$TabsCard.eq(_MenuIndex).children("article").addClass("az-tabs-article-active");
                $.publish("functionlib/azTabsActivate",
                    {
                        azTabsId: _Main.Options.azTabsId,
                        azTabsActivated: _MenuIndex,
                        azTabsDeactivated: _Main.azTabsDeactivated
                    });
                _Main.azTabsDeactivated = _MenuIndex;
            }

            if (_Main.Options.azTabsHeightStyle == "auto")
            {
                _Main.azArticleHeight();
                $(window).resize(function ()
                {
                    _Main.azArticleHeight();
                });
            }
            _Main.azSelectTabs(_Main.Options.azTabsIndex);
        }
        $.publish("functionlib/azTabsReady", _Main);
    }
    else
    {
        return new AZTabs(Options);
    }
}

function AZWindow(Options)
{
    if (this instanceof AZWindow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azWindowTitle: "",
            azWindowText: "",
            azWindowWidth: 300,
            azWindowHeight: 150,
            azWindowContentHeight: false,
            azWindowPositionTop: 0,
            azWindowModal: false,
            azWindowTitlebar: true,
            azWindowTitlebarClose: true,
            azWindowAnimation: true,
            azWindowNoParentScroll: false,
            azWindowBackground: true,
            azWindowBackgroundColor: "",
            azWindowColor: "",
            azWindowTitlebarBackgroundColor: "",
            azWindowTitlebarColor: "",
            azWindowButton: {}
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($('#az-window').length === 0)
        {
            $.publish("functionlib/azWindowBeforeOpen");

            ModalDialogScrollTop = 0;
            _Main.$Body = $("body");
            _Main.$Background = {};

            _Main.$Window = $("<div></div>").attr("id", "az-window");
            _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>");
            _Main.$Dialog = $("<div></div>").addClass("az-window-dialog");
            _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
            _Main.$Dialog.append(_Main.$Article);
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

            if (_Main.Options.azWindowBackgroundColor !== "")
            {
                _Main.$Window.css({ "background-color": _Main.Options.azWindowBackgroundColor + " !important" });
            }
            if (_Main.Options.azWindowColor !== "")
            {
                _Main.$Window.css({ "color": _Main.Options.azWindowColor + " !important" });
            }
            if (_Main.Options.azWindowTitlebarBackgroundColor !== "")
            {
                _Main.$Titlebar.css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important" });
            }
            if (_Main.Options.azWindowTitlebarColor !== "")
            {
                _Main.$Titlebar.css({ "color": _Main.Options.azWindowTitlebarColor + " !important" });
            }

            // AZWindow Size
            if (_Main.Options.azWindowWidth > (window.innerWidth - 20))
            {
                _Main.Options.azWindowWidth = (window.innerWidth - 20);
            }
            if (_Main.Options.azWindowHeight > (window.innerHeight - 20))
            {
                _Main.Options.azWindowHeight = (window.innerHeight - 20);
            }

            // AZWindow No Parent Scroll
            if (_Main.$Body.hasClass("az-no-parent-scroll") === false)
            {
                if (_Main.Options.azWindowNoParentScroll === true)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    _Main.$Body.addClass("az-no-parent-scroll");
                }
            }

            // AZWindow Background
            _Main.$Background = $("<div></div>").attr("id", "az-background");
            if (_Main.Options.azWindowBackground === true)
            {
                _Main.$Body.append(_Main.$Background);
            }

            // AZWindow Modal
            if (_Main.Options.azWindowModal === false)
            {
                _Main.$Background.off().on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-background")
                    {
                        _Main.azWindowClose(e);
                    }
                });
            }
            if (_Main.Options.azWindowTitlebar === false)
            {
                _Main.$Titlebar.hide();
                _Main.$Dialog.css({ "margin-top": "7px" });
            }
            if (_Main.Options.azWindowTitlebarClose === false)
            {
                _Main.$Titlebar.children("span").hide();
            }
            else
            {
                _Main.$Titlebar.children("span").off().on("click", function (e)
                {
                    _Main.azWindowClose(e);
                });
            }

            _Main.$Body.append(_Main.$Window);
            _Main.$Window.hide();
            if (_Main.Options.azWindowAnimation === true)
            {
                _Main.$Window.fadeIn();
            }
            else
            {
                _Main.$Window.show();
            }
            $.publish("functionlib/azWindowAfterOpen", _Main);

            _Main.$Window.width(_Main.Options.azWindowWidth);
            if (_Main.Options.azWindowContentHeight === false)
            {
                _Main.$Window.height(_Main.Options.azWindowHeight);
                _Main.$Dialog.height((_Main.Options.azWindowHeight - 51));
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Dialog.height((_Main.Options.azWindowHeight - 16));
                }
            }
            if (_Main.$Window.height() > (window.innerHeight - 20))
            {
                _Main.$Window.height((window.innerHeight - 20));
                _Main.$Dialog.height(((window.innerHeight - 20) - 51));
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Dialog.height(((window.innerHeight - 20) - 16));
                }
            }
            if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > ($(window).height())))
            {
                _Main.$Window.css({ "top": ($(window).height() / 2) - (_Main.$Window.height() / 2) });
            }
            else
            {
                _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
            }

            // AZWindow Close
            _Main.azWindowClose = function ()
            {
                _Main.$Background.remove();
                if ($("#az-full-window").length === 0)
                {
                    if (ModalDialogScrollTop > 0)
                    {
                        $(window).scrollTop(ModalDialogScrollTop);
                    }

                    _Main.$Body.removeClass("az-no-parent-scroll");
                    if (_Main.$Body.hasClass("") === true)
                    {
                        _Main.$Body.removeAttr("class");
                    }
                }
                if (_Main.Options.azWindowAnimation === true)
                {
                    _Main.$Window.fadeOut(function ()
                    {
                        _Main.$Window.remove();
                    });
                }
                else
                {
                    _Main.$Window.remove();
                }
                $.publish("functionlib/azWindowAfterClose");
            };

            // AZWindow Change Titlebar
            _Main.azChangeWindowTitlebar = function (Options)
            {
                var _Defaults =
                {
                    azWindowTitle: "",
                    azWindowTitlebarBackgroundColor: "",
                    azWindowTitlebarColor: "",
                    azWindowAlertTimeout: 3000
                };
                _Main.Options = $.extend({}, _Defaults, Options || {});

                if ($(".az-window-titlebar-active").length === 0)
                {
                    _Main.$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1>");
                    _Main.$Titlebar.hide();
                    _Main.$Window.prepend(_Main.$NewTitlebar);
                    if (_Main.Options.azWindowTitlebarBackgroundColor !== "")
                    {
                        _Main.$NewTitlebar.css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important" });
                    }
                    if (_Main.Options.azWindowTitlebarColor !== "")
                    {
                        _Main.$NewTitlebar.css({ "color": _Main.Options.azWindowTitlebarColor + " !important" });
                    }
                    _Main.$Body.addClass("az-window-titlebar-active");
                    window.setTimeout(function ()
                    {
                        _Main.$NewTitlebar.remove();
                        _Main.$Titlebar.show();
                        _Main.$Body.removeClass("az-window-titlebar-active");
                        if (_Main.$Body.hasClass("") === true)
                        {
                            _Main.$Body.removeAttr("class");
                        }
                    }, _Main.Options.azWindowAlertTimeout);
                }
            };
        }
    }
    else
    {
        return new AZWindow(Options);
    }
}

function AZWindowButton(Options)
{
    if (IsEmpty(Options) === false)
    {
        var _Defaults =
        {
            Button1: false,
            TypeButton1: "primary",
            SizeButton1: "",
            RoundedButton1: false,
            TextButton1: "",
            Button2: false,
            TypeButton2: "info",
            SizeButton2: "",
            RoundedButton2: false,
            TextButton2: ""
        };
        var Option = $.extend({}, _Defaults, Options || {});

        var _RoundedButton1 = Option.RoundedButton1 === true ? "az-round" : "";
        var _RoundedButton2 = Option.RoundedButton2 === true ? "az-round" : "";

        var _HTML = "";
        if (Option.Button1 === true && Option.Button2 === true)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-6 az-text-right">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton2 + '">';
            _HTML += '<button type="button" class="az-button ' + _RoundedButton2 + ' ' + Option.TypeButton2 + ' ' + Option.SizeButton2 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="min-width: 70px; margin-right: 4px;">' + Option.TextButton2 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '<div class="az-col xs-6 az-text-left">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + _RoundedButton1 + ' ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="min-width: 70px; margin-left: 4px;">' + Option.TextButton1 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        else if (Option.Button1 === true && Option.Button2 === false)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-12 az-text-center">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + _RoundedButton1 + ' ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="min-width: 70px;">' + Option.TextButton1 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        else if (Option.Button1 === false && Option.Button2 === true)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-12 az-text-center">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton2 + '">';
            _HTML += '<button type="button" class="az-button ' + _RoundedButton2 + ' ' + Option.TypeButton2 + ' ' + Option.SizeButton2 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="min-width: 70px;">' + Option.TextButton2 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        return _HTML;
    }
}

function AZFullWindow(Options)
{
    if (this instanceof AZFullWindow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azFullWindowText: "",
            azFullWindowPosition: "bottom",
            azFullWindowFadeIn: 400,
            azFullWindowFadeOut: 400,
            azFullWindowBackgroundColor: "",
            azFullWindowColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($("#az-full-window").length === 0)
        {
            $.publish("functionlib/azFullWindowBeforeOpen");

            ModalDialogScrollTop = 0;
            _Main.$Body = $("body");
            _Main.$Window = $("<div></div>").attr("id", "az-full-window");
            _Main.$Close = $("<div>&times;</div>").attr("id", "az-full-window-close");

            if (_Main.Options.azFullWindowBackgroundColor !== "")
            {
                _Main.$Window.css({ "background-color": _Main.Options.azFullWindowBackgroundColor + " !important" });
            }
            if (_Main.Options.azFullWindowColor !== "")
            {
                _Main.$Window.css({ "color": _Main.Options.azFullWindowColor + " !important" });
            }

            _Main.AnimateOpenOptions = {};
            _Main.AnimateCloseOptions = {};
            if (_Main.Options.azFullWindowPosition == "top")
            {
                _Main.AnimateOpenOptions = { "height": "100%", "opacity": 1 };
                _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                _Main.$Window.css({ "top": 0 });
            }
            else if (_Main.Options.azFullWindowPosition == "bottom")
            {
                _Main.AnimateOpenOptions = { "height": "100%", "opacity": 1 };
                _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                _Main.$Window.css({ "bottom": 0 });
            }

            _Main.$Window.html(_Main.Options.azFullWindowText);
            _Main.$Window.append(_Main.$Close);
            _Main.$Body.append(_Main.$Window);

            _Main.$Window.animate(_Main.AnimateOpenOptions, _Main.Options.azFullWindowFadeIn, function ()
            {
                ModalDialogScrollTop = $(window).scrollTop();
                _Main.$Body.addClass("az-no-parent-scroll");
            });
            $.publish("functionlib/azFullWindowAfterOpen", _Main);

            _Main.$Close.on('click', function (e)
            {
                _Main.azFullWindowClose(e);
            });

            // AZFullWindow Close
            _Main.azFullWindowClose = function (e)
            {
                _Main.$Body.removeClass("az-no-parent-scroll");
                if (_Main.$Body.hasClass("") === true)
                {
                    _Main.$Body.removeAttr("class");
                }
                if (ModalDialogScrollTop > 0)
                {
                    $(window).scrollTop(ModalDialogScrollTop);
                }
                _Main.$Window.animate(_Main.AnimateCloseOptions, _Main.Options.azFullWindowFadeOut, function ()
                {
                    $(this).remove();
                });
                $.publish("functionlib/azFullWindowAfterClose");
            };
        }
    }
    else
    {
        return new AZFullWindow(Options);
    }
}

// AZ SlideIn
function AZSlideIn(Options)
{
    if (this instanceof AZSlideIn === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSlideInId: "",
            azSlideInText: "",
            azSlideInTop: 30,
            azSlideInWidth: 300,
            azSlideInHeight: 0,
            azSlideInPosition: "right",
            azSlideInTabText: "",
            azSlideInTabIcon: "fas fa-bars",
            azSlideInTabBackgroundColor: "",
            azSlideInTabColor: "",
            azSlideInArticleBackgroundColor: "",
            azSlideInArticleColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideInId != "" && $("#" + _Main.Options.azSlideInId).length == 0)
        {
            _Main.azSlideInId = _Main.Options.azSlideInId;
            _Main.$Body = $("body");
            _Main.$SlideIn = $("<div></div>").attr("id", _Main.Options.azSlideInId).addClass("az-slidein");
            _Main.$SlideInTab = $("<div><div></div></div>").addClass("az-slidein-tab");
            _Main.$SlideInCard = $("<div></div>").addClass("az-slidein-card");
            _Main.$Article = $("<article></article>").html(_Main.Options.azSlideInText);
            _Main.TextLength = _Main.Options.azSlideInTabText.length;

            _Main.SlideInArticleOptions = {};
            _Main.SlideInOptions = {};
            _Main.SlideInTabOptions = {};
            if (_Main.TextLength > 0)
            {
                _Main.TextLength = (_Main.TextLength * 8);
                _Main.SlideInTabOptions = { "height": _Main.TextLength };
                _Main.$SlideInTab.children("div").text(_Main.Options.azSlideInTabText);
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "right": - 11 });
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "left": - (_Main.TextLength - 30) });
                }
            }
            else
            {
                _Main.TextLength = 0;
                _Main.SlideInTabOptions = { "height": 100 };
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "right": - 11 }).append('<i class="' + _Main.Options.azSlideInTabIcon + ' fa-rotate-90"></i>');
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "left": - 70 }).append('<i class="' + _Main.Options.azSlideInTabIcon + ' fa-rotate-90"></i>');
                }
            }
            if (_Main.Options.azSlideInWidth > (window.innerWidth - 60))
            {
                _Main.Options.azSlideInWidth = (window.innerWidth - 60);
            }
            if (_Main.Options.azSlideInPosition == "right")
            {
                _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": 0, "left": - 40, "border-top-left-radius": 15, "border-bottom-left-radius": 15 });
                _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "right": - _Main.Options.azSlideInWidth };
            }
            else if (_Main.Options.azSlideInPosition == "left")
            {
                _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": 0, "left": _Main.Options.azSlideInWidth, "border-top-right-radius": 15, "border-bottom-right-radius": 15 });
                _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "left": - _Main.Options.azSlideInWidth };
            }
            if (_Main.Options.azSlideInHeight > _Main.TextLength)
            {
                _Main.SlideInArticleOptions = { "height": (_Main.Options.azSlideInHeight - 14) };
            }
            else
            {
                _Main.SlideInArticleOptions = { "min-height": _Main.TextLength };
            }

            if (_Main.Options.azSlideInTabBackgroundColor !== "")
            {
                _Main.$SlideInTab.css({ "background-color": _Main.Options.azSlideInTabBackgroundColor });
            }
            if (_Main.Options.azSlideInTabColor !== "")
            {
                _Main.$SlideInTab.css({ "color": _Main.Options.azSlideInTabColor });
            }
            if (_Main.Options.azSlideInArticleBackgroundColor !== "")
            {
                _Main.$Article.css({ "background-color": _Main.Options.azSlideInArticleBackgroundColor });
            }
            if (_Main.Options.azSlideInArticleColor !== "")
            {
                _Main.$Article.css({ "color": _Main.Options.azSlideInArticleColor });
            }

            _Main.azChangeText = function (SelectedText)
            {
                _Main.$Article.html(SelectedText);
            };

            _Main.$SlideInTab.css(_Main.SlideInTabOptions);
            _Main.$Article.css(_Main.SlideInArticleOptions);
            _Main.$SlideInCard.append(_Main.$Article);
            _Main.$SlideIn.append(_Main.$SlideInTab).append(_Main.$SlideInCard);
            _Main.$Body.append(_Main.$SlideIn);

            window.setTimeout(function ()
            {
                _Main.$SlideIn.css(_Main.SlideInOptions).addClass("transition-" + _Main.Options.azSlideInPosition).show();
            }, 100);

            _Main.$SlideInTab.on('click', function ()
            {
                azExecSlideInTab();
            });

            _Main.azSelectSlideInTab = function ()
            {
                azExecSlideInTab();
            };

            function azExecSlideInTab()
            {
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-right');
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-left');
                }
            }
            $.publish("functionlib/azSlideInReady", _Main);
        }
    }
    else
    {
        return new AZSlideIn(Options);
    }
}

// AZ Slideshow
function AZSlideshow(Options)
{
    if (this instanceof AZSlideshow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSlideshowId: "",
            azSlideshowArrows: false,
            azSlideshowTimer: 3000,
            azSlideshowFadeIn: 1000,
            azSlideshowFadeOut: 1000
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideshowId != "")
        {
            _Main.$Slideshow = $("#" + _Main.Options.azSlideshowId);
            _Main.$Slides = $(".az-slides", _Main.$Slideshow);
            _Main.SlideShow;
            _Main.SlideIndex = 0;

            if (_Main.Options.azSlideshowArrows)
            {
                _Main.$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
                _Main.$Slideshow.off().on("mouseenter", "slide, .az-arrows", function ()
                {
                    $.unsubscribe("runSlides");
                    window.clearTimeout(_Main.SlideShow);

                }).on("mouseleave", function ()
                {
                    $.subscribe("runSlides", function (e, data)
                    {
                        _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                    });
                    _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                });
            }

            $.subscribe("functionlib/azWindowResize", function (e, data)
            {
                _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            });

            $.subscribe("runSlides", function (e, data)
            {
                _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
            });

            _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            $("slide:gt(0)", _Main.$Slides).hide();
            _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);

            function runSlides()
            {
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeOut(_Main.Options.azSlideshowFadeOut);
                _Main.SlideIndex = (_Main.SlideIndex != $("slide", _Main.$Slides).length - 1) ? _Main.SlideIndex + 1 : 0;
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(_Main.Options.azSlideshowFadeIn, function ()
                {
                    $.publish("runSlides");
                });
            }

            plusDivs = function (n)
            {
                $.unsubscribe("runSlides");
                window.clearTimeout(_Main.SlideShow);
                _Main.SlideIndex += n;
                showDivs();
            };

            showDivs = function ()
            {
                if (_Main.SlideIndex > $("slide", _Main.$Slides).length - 1)
                {
                    _Main.SlideIndex = 0;
                }
                if (_Main.SlideIndex < 0)
                {
                    _Main.SlideIndex = $("slide", _Main.$Slides).length - 1;
                };
                $("slide", _Main.$Slides).fadeOut(100);
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(100);
            };
        }
    }
    else
    {
        return new AZSlideshow(Options);
    }
}

// AZ Range Multi
function AZRangeMulti(Options)
{
    if (this instanceof AZRangeMulti === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azRangeMultiId: "",
            azRangeMultiBackgroundColor: "#CCCCCC",
            azRangeMultiHandlerLeftBackgroundColor: "#0078D7",
            azRangeMultiHandlerRightBackgroundColor: "#259EFF",
            azRangeMultiMin: 0,
            azRangeMultiMax: 100,
            azRangeMultiStep: 1,
            azRangeMultiValues: [0, 50]
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azRangeMultiId != "")
        {
            _Main.$MultiRange = $("#" + _Main.Options.azRangeMultiId);
            _Main.$MultiRange.slider(
                {
                    range: true,
                    min: _Main.Options.azRangeMultiMin,
                    max: _Main.Options.azRangeMultiMax,
                    step: _Main.Options.azRangeMultiStep,
                    values: _Main.Options.azRangeMultiValues,
                    create: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiCreate",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: _Main.Options.azRangeMultiValues[0],
                                azRangeMultiValueRight: _Main.Options.azRangeMultiValues[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    },
                    slide: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiSlide",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: ui.values[0],
                                azRangeMultiValueRight: ui.values[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    },
                    stop: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiStop",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: ui.values[0],
                                azRangeMultiValueRight: ui.values[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    }
                });
            _Main.$MultiRange.children(".ui-slider-handle:nth-child(2)").css({ "background-color": _Main.Options.azRangeMultiHandlerLeftBackgroundColor + " !important" });
            _Main.$MultiRange.children(".ui-slider-handle:nth-child(3)").css({ "background-color": _Main.Options.azRangeMultiHandlerRightBackgroundColor + " !important" });
            _Main.$MultiRange.css({ "background-color": _Main.Options.azRangeMultiBackgroundColor + " !important" });
            _Main.$MultiRange.children(".ui-widget-header").css({ "background-color": _Main.Options.azRangeMultiBackgroundColor + " !important" });
        }
    }
    else
    {
        return new AZRangeMulti(Options);
    }
}

// AZ Portfolio
var _$PortfolioMenu = {};
var _$PortfolioContent = {};
function setPortfolio()
{
    _$PortfolioMenu = $(".az-portfolio-menu");
    _$PortfolioContent = $(".az-portfolio-content");
    _$PortfolioMenu.off().on("click", "li", function (e)
    {
        var _$MenuFilter = $(this).attr('data-filter');
        if (_$MenuFilter == "*")
        {
            _$PortfolioContent.children("li").removeClass("az-portfolio-content-hidden");
        }
        else
        {
            _$PortfolioContent.children("li").not(_$MenuFilter).addClass("az-portfolio-content-hidden");
            _$PortfolioContent.children(_$MenuFilter).removeClass("az-portfolio-content-hidden");
        }
    });
    if ($(".az-portfolio-content-hidden", _$PortfolioContent).length == 0)
    {
        _$PortfolioContent.height(0);
        _$PortfolioContent.height(_$PortfolioContent.parent().height() + 28);
    }
}

function setParallaxImages(ParallaxImages)
{
    $.each(ParallaxImages, function (i, ImagesContent)
    {
        var _CurrentImage = $('#img' + (i + 1));
        _CurrentImage.css({ 'background-image': 'url(' + ImagesContent.url + ')', 'height': ImagesContent.height, 'opacity': ImagesContent.opacity });
    });
}

// AZ Sort Array
function AZSortJSONArray(Arr, Prop, Order)
{
    return AZSortArray(Arr, Prop, Order);
}

function AZSortArray(Arr, Prop, Order)
{
    if (Arr == null || Array.isArray(Arr) === false || Prop == null || Prop == "")
    {
        return [];
    }
    else
    {
        _Order = "asc";
        if (Order != null && Order != "" && Order.length > 2)
        {
            _Order = Order.toLowerCase();
        }

        if (_Order === "asc")
        {
            return Arr.sort(Compare(Prop, 1));
        }
        else if (_Order == "desc")
        {
            return Arr.sort(Compare(Prop, 0));
        }

        function Compare(Attr, Value)
        {
            if (Value === 1)
            {
                return function (a, b)
                {
                    var x = (a[Attr] === null) ? "" : "" + a[Attr],
                        y = (b[Attr] === null) ? "" : "" + b[Attr];
                    return x < y ? -1 : (x > y ? 1 : 0);
                };
            }
            else
            {
                return function (a, b)
                {
                    var x = (a[Attr] === null) ? "" : "" + a[Attr],
                        y = (b[Attr] === null) ? "" : "" + b[Attr];
                    return x < y ? 1 : (x > y ? -1 : 0);
                };
            }
        }
    }
}

function isEmpty(Obj)
{
    return AZIsEmpty(Obj);
}

function IsEmpty(Obj)
{
    return AZIsEmpty(Obj);
}

function AZIsEmpty(Obj)
{
    if (Obj !== null && Obj !== undefined)
    {
        if (Obj.constructor === Object)
        {
            if (Obj == null)
            {
                return true;
            }
            for (var key in Obj)
            {
                if (Obj.hasOwnProperty(key))
                {
                    return false;
                }
            }
            return true;
        }
        else if (Obj.constructor === Array)
        {
            if (Obj.length > 0)
            {
                for (var key in Obj)
                {
                    if (Obj.hasOwnProperty(key))
                    {
                        return false;
                    }
                }
            }
            return true;
        }
        else
        {
            if (Obj instanceof Object)
            {
                if (Obj == null)
                {
                    return true;
                }
                for (var key in Obj)
                {
                    if (Obj.hasOwnProperty(key))
                    {
                        return false;
                    }
                }
                return true;
            }
            return true;
        }
    }
    else
    {
        return true;
    }
}

function getURLParameters(URL)
{
    return AZGetURLParameters(URL);
}

function AZGetURLParameters(URL)
{
    var _Return = {};
    if (URL === null || URL === undefined || URL == "")
    {
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
        {
            _Return[key.toLowerCase()] = value;
        });
    }
    else if (URL !== null && URL !== undefined && URL != "")
    {
        URL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
        {
            _Return[key.toLowerCase()] = value;
        });
    }
    return _Return;
}

function bytesToSize(Bytes, Decimal)
{
    return AZBytesConverter(Bytes, Decimal);
}

function AZBytesConverter(Bytes, Decimal)
{
    var _Return = "0 Bytes";
    if (RegExp('^\\d+$').test(Bytes) === true)
    {
        var _Kilo = 1000;
        var _Decimal = Decimal === 0 ? 0 : Decimal || 2;
        var _Sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var _Index = Math.floor(Math.log(Bytes) / Math.log(_Kilo));
        _Return = parseFloat((Bytes / Math.pow(_Kilo, _Index)).toFixed(_Decimal)) + ' ' + _Sizes[_Index];
    }
    return _Return;
}

function getSelectedObj(List, x, y)
{
    return AZGetObj(List, x, y, z);
}

function AZGetObj(List, x, y, MaxLevel, DepthLevel)
{
    var _ReturnObj = {};
    var _MaxLevel = MaxLevel !== undefined ? MaxLevel : 9999;
    var _DepthLevel = DepthLevel !== undefined ? DepthLevel : 1;

    if (AZIsEmpty(List) === false && x !== null && x !== undefined && x != "" && y !== null && y !== undefined && y != "")
    {
        if (_DepthLevel <= _MaxLevel)
        {
            if (List.constructor === Array)
            {
                for (var key in List)
                {
                    _ReturnObj = AZGetObj(List[key], x, y, _MaxLevel, _DepthLevel);
                    if (AZIsEmpty(_ReturnObj) === false)
                    {
                        break;
                    }
                }
            }
            else
            {
                var Obj = List;
                for (var key in Obj)
                {
                    if (Obj[key] !== null && Obj[key] !== undefined)
                    {
                        if (x.toString().toLowerCase() === key.toString().toLowerCase() && y.toString().toLowerCase() === Obj[key].toString().toLowerCase())
                        {
                            _ReturnObj = Obj;
                            break;
                        }
                        if (Obj[key].constructor === Array || Obj[key].constructor === Object)
                        {
                            _ReturnObj = AZGetObj(Obj[key], x, y, _MaxLevel, _DepthLevel + 1);
                            if (AZIsEmpty(_ReturnObj) === false)
                            {
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return _ReturnObj;
}

function existsSelectedObj(List, x, y)
{
    return AZExistObj(List, x, y);
}

function AZExistObj(List, x, y)
{
    return AZIsEmpty(AZGetObj(List, x, y)) === false;
}

function removeSelectedObj(List, x, y)
{
    return AZRemoveObj(List, x, y);
}

function AZRemoveObj(List, x, y)
{
    if (List !== null && List !== undefined && List.length > 0 && x !== null && x !== undefined && x != "" && y !== null && y !== undefined && y != "")
    {
        $.each(List, function (Index, Obj)
        {
            if (Obj[x].toString().toLowerCase() == y.toString().toLowerCase())
            {
                List.splice(Index, 1);
                return false;
            }
        });
    }
}

function AZFilterArray(SelectedList, SelectedKey, SelectedVal)
{
    var _Return = [];
    if (SelectedList.length > 0 && SelectedKey != "" && SelectedKey != undefined && SelectedVal != "" && SelectedVal != undefined)
    {
        _Return = $.grep(SelectedList, function (Obj)
        {
            if (Obj.hasOwnProperty(SelectedKey) === true)
            {
                return (Obj[SelectedKey] == SelectedVal.toString().toLowerCase());
            }
        });
    }
    return _Return;
}

function AZFilterArrayUnique(SelectedList, SelectedKey, SelectedVal)
{
    var _ReturnList = [];
    if (SelectedList.length > 0 && SelectedKey != "" && SelectedKey != undefined && SelectedVal != "" && SelectedVal != undefined)
    {
        $.each(SelectedList, function (Key, Value)
        {
            if (Value.hasOwnProperty(SelectedKey) === true)
            {
                if (AZExistObj(_ReturnList, SelectedKey, SelectedVal) === false)
                {
                    _ReturnList.push(Value);
                }
            }
        });
    }
    return _ReturnList;
}

function Guid()
{
    return AZGuid();
}

function AZGuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e)
    {
        var _R = Math.random() * 16 | 0;
        var _V = e == 'x' ? _R : (_R & 0x3 | 0x8);
        return _V.toString(16);
    });
}

function formatDateTime(DateTime, Format)
{
    return AZFormatDateTime(DateTime, Format);
}

function AZFormatDateTime(DateTime, Format)
{
    var _ReturnObj = {};
    if (moment(DateTime).isValid() == true && Format !== null && Format !== undefined && Format != "")
    {
        _ReturnObj = moment(DateTime).format(Format);
    }
    return _ReturnObj;
}

function AZSetCheckbox($SelectedCheckbox)
{
    var _LastChecked = null;
    $SelectedCheckbox.click(function (e)
    {
        if (!_LastChecked)
        {
            _LastChecked = this;
            return;
        }
        if (e.shiftKey)
        {
            var _Start = $SelectedCheckbox.index(this);
            var _End = $SelectedCheckbox.index(_LastChecked);
            $SelectedCheckbox.slice(Math.min(_Start, _End), Math.max(_Start, _End) + 1).prop('checked', _LastChecked.checked);
        }
        _LastChecked = this;
    });
}