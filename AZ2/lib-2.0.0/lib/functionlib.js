
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

        var _azDatePicker = false;
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
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
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('MM/DD/YYYY'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if (_azDatePicker == true)
                {
                    $.datepicker.setDefaults($.datepicker.regional[ThisLanguage]);
                }
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
                    $(this).off("keydown", azNotEnter).on("keydown", azNotEnter);
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
                    if (typeof AZCancel == 'function')
                    {
                        $(this).off("click", AZCancel).on("click", AZCancel);
                    }
                }
                if ($(this).hasClass("submit"))
                {
                    if (typeof AZSubmit == 'function')
                    {
                        $(this).off("click", AZSubmit).on("click", AZSubmit);
                    }
                }
                if ($(this).hasClass("delete"))
                {
                    if (typeof AZDelete == 'function')
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
        $('.az-accordion-card.adjust, .az-card.adjust, .az-list-card.adjust, .az-timeline-card.adjust').matchHeight();

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
                    _$ParentElement.html('<div>Her er det en feil</div>');
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
                _$ParentElement.html('<div>Her er det en feil</div>');
            }
        });
    })(jQuery);
});

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
                        azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
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
                        azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
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
                    azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
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
                    azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
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

// AZ Page
function AZPage(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azPageSettingsFile: "/lib/settings.json",
        azPageInputTypeEvents: false,
        azPageLanguage: false,
        azPageValidation: false
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    _Main.ObjPageAttributes = {};
    _Main.ObjLanguage = {};
    _Main.JsonUrl = "";
    _Main.DefaultLanguageFile = "";

    _Main.ObjPageAttributes = new AZCheckPageAttributes();
    if (IsEmpty(_Main.ObjPageAttributes) === false)
    {
        _Main.InputTypeEvents = function ()
        {
            if (_Main.Options.azPageInputTypeEvents === true)
            {
                $.subscribeonce("functionlib/AZSetInputTypeEvents", function (e, data)
                {
                    $.publish("functionlib/AZPage",
                        {
                            Form: _Main.ObjPageAttributes.$ObjAZForm,
                            Location: _Main.ObjPageAttributes.Location,
                            PageName: _Main.ObjPageAttributes.PageName,
                            PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                            Language: _Main.ObjLanguage
                        });
                });
                AZSetInputTypeEvents();
            }
            else
            {
                $.publish("functionlib/AZPage",
                    {
                        Form: _Main.ObjPageAttributes.$ObjAZForm,
                        Location: _Main.ObjPageAttributes.Location,
                        PageName: _Main.ObjPageAttributes.PageName,
                        PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                        Language: _Main.ObjLanguage
                    });
            }
        }

        _Main.Validation = function ()
        {
            if (_Main.Options.azPageValidation === true)
            {
                $.subscribeonce("functionlib/AZSetValidation", function (e, data)
                {
                    _Main.InputTypeEvents();
                });
                _Main.$Validation = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-val.json" });
                _Main.$Validation.done(function (data, textStatus, jqXHR)
                {
                    if (IsEmpty(data) === false && textStatus === "success")
                    {
                        new AZSetValidation(_Main.ObjPageAttributes.$ObjAZForm, data);
                    }
                    else
                    {
                        consoleLog({ consoleType: "error", consoleText: "AZSetValidation" });
                    }
                });
            }
            else
            {
                _Main.InputTypeEvents();
            }
        }

        _Main.Language = function ()
        {
            if (_Main.Options.azPageLanguage === true)
            {
                $.subscribeonce("functionlib/AZSetLanguage", function (e, data)
                {
                    _Main.ObjLanguage = data;
                    _Main.Validation();
                });
                _Main.$Language = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-lang.json" });
                _Main.$Language.always(function (data, textStatus, jqXHR)
                {
                    if (IsEmpty(data) === false && textStatus === "success")
                    {
                        new AZSetLanguage(data, _Main.DefaultLanguageFile);
                    }
                    else
                    {
                        consoleLog({ consoleType: "error", consoleText: "AZSetLanguage" });
                    }
                });
            }
            else
            {
                _Main.Validation();
            }
        }

        _Main.$DefaultSettings = new AZGetJSON({ azJsonUrl: _Main.Options.azPageSettingsFile });
        _Main.$DefaultSettings.always(function (data, textStatus, jqXHR)
        {
            if (IsEmpty(data) === false && textStatus === "success")
            {
                _Main.DefaultLanguageFile = data.DefaultLanguageFile;
                ThisLanguage = AZGetLanguageClientStorage();
                if (ThisLanguage == null)
                {
                    ThisLanguage = data.DefaultLanguage;
                }
                moment.locale(ThisLanguage);
                AZSetLanguageClientStorage(ThisLanguage);

                if (_Main.ObjPageAttributes.Rooth === true)
                {
                    _Main.JsonUrl = "/lib/lang-val/" + _Main.ObjPageAttributes.PageFirstName;
                }
                else
                {
                    if ((data.LanguageValidationFolder.match(new RegExp("/", "g")) || []).length > 1)
                    {
                        _Main.JsonUrl = data.LanguageValidationFolder + "/" + _Main.ObjPageAttributes.PageFirstName;
                    }
                    else
                    {
                        _Main.JsonUrl = data.LanguageValidationFolder + "/" + _Main.ObjPageAttributes.PageFirstName + "/lib/lang-val/" + _Main.ObjPageAttributes.PageFirstName;
                    }
                }
                _Main.Language();
            }
            else
            {
                consoleLog({ consoleType: "error", consoleText: "AZDefaultSettings" });
            }
        });
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZPage" });
    }
}

// AZ Check Page Attributes
function AZCheckPageAttributes()
{
    var _Main = this;
    _Main.Attributes = 0;
    _Main.ObjPageAttributes = {};

    try
    {
        _Main.Location = window.document.location.hostname;
        _Main.PageName = window.document.location.href.split("/").slice(-1)[0];
        _Main.$ObjAZForm = (window.document.forms.length > 0) ? $(window.document.forms[0]) : "";

        if (_Main.Location != "")
        {
            _Main.ObjPageAttributes.Location = _Main.Location;
            _Main.Attributes += 1;
        }
        if (_Main.PageName != "" || _Main.PageName.length === 0)
        {
            _Main.ObjPageAttributes.Rooth = false;
            if (_Main.PageName.length === 0)
            {
                _Main.ObjPageAttributes.Rooth = true;
                _Main.ObjPageAttributes.PageName = "index.html";
            }
            else
            {
                _Main.ObjPageAttributes.PageName = _Main.PageName;
            }
            _Main.PageFirstName = _Main.ObjPageAttributes.PageName.split(".")[0];
            _Main.Attributes += 1;

            if (_Main.PageFirstName != "")
            {
                _Main.ObjPageAttributes.PageFirstName = _Main.PageFirstName;
                _Main.Attributes += 1;
            }
        }
        if (IsEmpty(_Main.$ObjAZForm) === false)
        {
            _Main.ObjPageAttributes.$ObjAZForm = _Main.$ObjAZForm;
            _Main.Attributes += 1;
        }
        if (_Main.Attributes !== 4)
        {
            _Main.ObjPageAttributes = {};
        }
        return _Main.ObjPageAttributes;
    } catch (e)
    {
        return null;
    }
}

// AZ Get JSON
function AZGetJSON(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azJsonUrl: ""
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if (_Main.Options.azJsonUrl != "")
    {
        $.ajaxSetup({ cache: false });
        return $.getJSON(_Main.Options.azJsonUrl).promise();
    }
    else
    {
        return $.Deferred().resolve("");
    }
}

// AZ Get / Set Language Client Storage
function AZGetLanguageClientStorage()
{
    return clientStorage("get", "language", "");
}

function AZSetLanguageClientStorage(Language)
{
    clientStorage("set", "language", Language);
}

// AZ Set Language
function AZSetLanguage(ObjPageLanguage, DefaultLanguageFile)
{
    var _Main = this;
    _Main.SetFullLanguage = function (ObjDefaultLanguage)
    {
        _Main.ObjLanguage =
            {
                ObjNonLanguageElements: ObjDefaultLanguage.ObjNonLanguageElements,
                SingleNonLanguageElements: ObjDefaultLanguage.SingleNonLanguageElements,
                ObjDefaultElements: ObjDefaultLanguage.ObjDefaultElements[ThisLanguage],
                SingleDefaultElements: ObjDefaultLanguage.SingleDefaultElements[ThisLanguage],
                ObjElements: ObjPageLanguage.ObjElements[ThisLanguage],
                SingleElements: ObjPageLanguage.SingleElements[ThisLanguage]
            }
        $.publish("AZSetLanguage");
    }

    _Main.SetSingleLanguage = function ()
    {
        _Main.ObjLanguage =
            {
                ObjElements: ObjPageLanguage.ObjElements[ThisLanguage],
                SingleElements: ObjPageLanguage.SingleElements[ThisLanguage]
            }
        $.publish("AZSetLanguage");
        consoleLog({ consoleType: "error", consoleText: "No Default Language File" });
    }

    $.subscribeonce("AZSetLanguage", function (e, data)
    {
        if (_Main.ObjLanguage.SingleElements.hasOwnProperty("labelPageTitle"))
        {
            document.title = _Main.ObjLanguage.SingleElements.labelPageTitle;
        }
        AZSetFormLanguage(_Main.ObjLanguage.ObjNonLanguageElements);
        AZSetFormLanguage(_Main.ObjLanguage.ObjDefaultElements);
        AZSetFormLanguage(_Main.ObjLanguage.ObjElements);
        $.publish("functionlib/AZSetLanguage", _Main.ObjLanguage);
    });

    if (DefaultLanguageFile != "")
    {
        _Main.$DefaultLanguage = new AZGetJSON({ azJsonUrl: DefaultLanguageFile });
        _Main.$DefaultLanguage.always(function (data, textStatus, jqXHR)
        {
            if (IsEmpty(data) === false && textStatus === "success")
            {
                _Main.SetFullLanguage(data);
            }
            else
            {
                _Main.SetSingleLanguage();
            }
        });
    }
    else
    {
        _Main.SetSingleLanguage();
    }
}

// AZ Set Form Language
function AZSetFormLanguage(ObjElements)
{
    $.each(ObjElements, function (Key, Value)
    {
        $.each(Value, function (Key, Value)
        {
            if (Value.length == 2)
            {
                if (Value[0] == "html")
                {
                    $('#' + Key).html('');
                    $('#' + Key).html(Value[1]);
                }
                else if (Value[0] == "text")
                {
                    $('#' + Key).text('');
                    $('#' + Key).text(Value[1]);
                }
                else if (Value[0] == "val")
                {
                    $('#' + Key).val('');
                    $('#' + Key).val(Value[1]);
                }
                else if (Value[0] == "cmdlbl")
                {
                    $('#' + Key).button({ label: "" });
                    $('#' + Key).button({ label: "" + Value[1] + "" });
                }
                else if (Value[0] == "title")
                {
                    $('#' + Key).prop("title", "");
                    $('#' + Key).prop("title", Value[1]);
                }
                else if (Value[0] == "placeholder")
                {
                    $('#' + Key).prop("placeholder", "");
                    $('#' + Key).prop("placeholder", Value[1]);
                }
                else if (Value[0] == "htmlembedded")
                {
                    var _FirstChildElement = $('#' + Key + '>:first');
                    $('#' + Key).html('');
                    $('#' + Key).html(Value[1]);
                    $('#' + Key).prepend(_FirstChildElement);
                }
            }
            else if (Value.length == 3)
            {
                if (Value[0] == "id")
                {
                    if (Value[1] == "html")
                    {
                        $('#' + Key).html('');
                        $('#' + Key).html(Value[2]);
                    }
                    else if (Value[1] == "text")
                    {
                        $('#' + Key).text('');
                        $('#' + Key).text(Value[2]);
                    }
                    else if (Value[1] == "val")
                    {
                        $('#' + Key).val('');
                        $('#' + Key).val(Value[2]);
                    }
                    else if (Value[1] == "cmdlbl")
                    {
                        $('#' + Key).button({ label: "" });
                        $('#' + Key).button({ label: "" + Value[2] + "" });
                    }
                    else if (Value[1] == "title")
                    {
                        $('#' + Key).prop("title", "");
                        $('#' + Key).prop("title", Value[2]);
                    }
                    else if (Value[1] == "placeholder")
                    {
                        $('#' + Key).prop("placeholder", "");
                        $('#' + Key).prop("placeholder", Value[2]);
                    }
                    else if (Value[1] == "htmlembedded")
                    {
                        var _FirstChildElement = $('#' + Key + '>:first');
                        $('#' + Key).html('');
                        $('#' + Key).html(Value[2]);
                        $('#' + Key).prepend(_FirstChildElement);
                    }
                }
                else if (Value[0] == "class")
                {
                    if (Value[1] == "html")
                    {
                        $('.' + Key).html('');
                        $('.' + Key).html(Value[2]);
                    }
                    else if (Value[1] == "text")
                    {
                        $('.' + Key).text('');
                        $('.' + Key).text(Value[2]);
                    }
                    else if (Value[1] == "val")
                    {
                        $('.' + Key).val('');
                        $('.' + Key).val(Value[2]);
                    }
                    else if (Value[1] == "cmdlbl")
                    {
                        $('.' + Key).button({ label: "" });
                        $('.' + Key).button({ label: "" + Value[2] + "" });
                    }
                    else if (Value[1] == "title")
                    {
                        $('.' + Key).prop("title", "");
                        $('.' + Key).prop("title", Value[2]);
                    }
                    else if (Value[1] == "placeholder")
                    {
                        $('.' + Key).prop("placeholder", "");
                        $('.' + Key).prop("placeholder", Value[2]);
                    }
                    else if (Value[1] == "htmlembedded")
                    {
                        var _FirstChildElement = $('.' + Key + '>:first');
                        $('.' + Key).html('');
                        $('.' + Key).html(Value[1]);
                        $('.' + Key).prepend(_FirstChildElement);
                    }
                }
            }
        });
    });
    $.publish("functionlib/AZSetFormLanguage");
}

// AZ Set Validation
function AZSetValidation(Area, ObjValidation)
{
    var _Main = this;
    if (IsEmpty(ObjValidation) === false)
    {
        if (Area != "" && Area != undefined && Area != null)
        {
            _Main.Area = $(Area);
        }
        else
        {
            _Main.Area = "";
        }
        $.each(ObjValidation, function (HtmlElement, ObjSubValidation)
        {
            $.each(ObjSubValidation, function (AttrType, AttrValue)
            {
                if (AttrType.toLowerCase() == "label")
                {
                    $("label[for='" + HtmlElement + "']", _Main.Area).addClass(AttrValue);
                }
                else if (AttrType.toLowerCase() == "data-attr" || AttrType.toLowerCase() == "minlength" || AttrType.toLowerCase() == "maxlength" || AttrType.toLowerCase() == "tabindex")
                {
                    if ($('#' + HtmlElement, _Main.Area).length > 0)
                    {
                        $('#' + HtmlElement, _Main.Area).attr(AttrType, AttrValue);
                    }
                    if ($('.' + HtmlElement, _Main.Area).length > 0)
                    {
                        $('.' + HtmlElement, _Main.Area).attr(AttrType, AttrValue);
                    }
                }
                else if (AttrType.toLowerCase() == "class")
                {
                    if ($('#' + HtmlElement, _Main.Area).length > 0)
                    {
                        $('#' + HtmlElement, _Main.Area).addClass(AttrValue);
                    }
                    if ($('.' + HtmlElement, _Main.Area).length > 0)
                    {
                        $('.' + HtmlElement, _Main.Area).addClass(AttrValue);
                    }
                }
            });
        });
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZSetValidation" });
    }
    $.publish("functionlib/AZSetValidation");
}

function AZSetInputTypeEvents()
{
    var _ValidType = "";
    $(":input").each(function ()
    {
        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']") && $(this).hasClass("validate"))
        {
            $(this).off("keyup", AZValidateDirtyKeyup).on("keyup", AZValidateDirtyKeyup);
            _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
            }
        }
        if ($(this).is("[type='range']") && $(this).hasClass("az-range") && $(this).hasClass("validate"))
        {
            $(this).off("change", AZValidateDirtyKeyup).on("change", AZValidateDirtyKeyup);
        }
        if ($(this).is("textarea") && $(this).hasClass("validate"))
        {
            $(this).off("keyup", AZValidateDirtyKeyup).on("keyup", AZValidateDirtyKeyup);
            _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
            }
        }
        if ($(this).is("[type='checkbox']") && $(this).hasClass("validate"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
        }
        if ($(this).is("[type='radio']") && $(this).hasClass("validate"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
        }
        if ($(this).is("select") && $(this).hasClass("validate"))
        {
            $(this).off("change", AZValidateDirtyKeyup).on("change", AZValidateDirtyKeyup);
        }
        if ($(this).is("button") && $(this).hasClass("validate"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
        }
    });

    // Mandatory Asterisk
    $(".mandatory").not(".az-no-asterisk").each(function ()
    {
        $(".az-mandatory-asterisk", this).remove();
        $(this).append(' <span class="az-mandatory-asterisk">*</span>');
    });
    $.publish("functionlib/AZSetInputTypeEvents");
}

function AZValidateDirtyKeyup(e)
{
    if (typeof AZValidateDirty == 'function')
    {
        AZValidateDirty();
    }
}

function AZValidateInputValueKeypress(e)
{
    var _Element = e.target || e.srcElement;
    var _ValidType = AZGetValidType(e.data.ValidType);
    var _KeyChar = e.keyCode || e.which;

    if (_KeyChar == 8 || _KeyChar == 13)
    {
        return true;
    }
    else
    {
        var _Char = String.fromCharCode(_KeyChar);
        if (_ValidType.indexOf(_Char.toLowerCase()) >= 0)
        {
            return true;
        }
        else
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            $.publish("functionlib/azValidateInputValueKeypress",
                {
                    azInputId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                    azInputValidType: e.data.ValidType.toString(),
                    azInputKey: _Char,
                    azInputJQElement: $(_Element)
                });
        }
    }
}

function AZGetValidType(SelectedType)
{
    var _ValidTypes =
    {
        "validate-alpha": "1234567890abcdefghijklmnopqrstuvwxyzæøå!@#%&()?*+-_,;.:/\u0020\u0027\u000a",
        "validate-numeric": "1234567890",
        "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz-_.:/",
        "validate-userpass": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-connectionid": "abcdefghijklmnopqrstuvwxyz",
        "validate-date": "1234567890./",
        "validate-time": "1234567890:",
        "validate-float": "1234567890."
    }
    return _ValidTypes[SelectedType];
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
    var _$SelectedCheckbox = $(this);
    $.publish("functionlib/azCheckboxClick",
        {
            azCheckboxId: _$SelectedCheckbox.attr("id") === undefined ? "" : _$SelectedCheckbox.attr("id"),
            azCheckboxValue: _$SelectedCheckbox.attr("value") === undefined ? "" : _$SelectedCheckbox.attr("value"),
            azCheckboxChecked: _$SelectedCheckbox.is(":checked"),
            azCheckboxJQElement: $(_Element)
        });
}

function AZRadioClick(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedRadio = $(this);
    $.publish("functionlib/azRadioClick",
        {
            azRadioId: _$SelectedRadio.attr("id") === undefined ? "" : _$SelectedRadio.attr("id"),
            azRadioName: _$SelectedRadio.attr("name") === undefined ? "" : _$SelectedRadio.attr("name"),
            azRadioValue: _$SelectedRadio.attr("value") === undefined ? "" : _$SelectedRadio.attr("value"),
            azRadioChecked: _$SelectedRadio.is(":checked"),
            azRadioJQElement: $(_Element)
        });
}

function AZSwitchClick(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedSwitch = $(this);
    $.publish("functionlib/azSwitchClick",
        {
            azSwitchId: _$SelectedSwitch.attr("id") === undefined ? "" : _$SelectedSwitch.attr("id"),
            azSwitchValue: _$SelectedSwitch.attr("value") === undefined ? "" : _$SelectedSwitch.attr("value"),
            azSwitchChecked: _$SelectedSwitch.is(":checked"),
            azSwitchJQElement: $(_Element)
        });
}

function AZRange(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedRange = $(this);
    if (e.type === "input")
    {
        $.publish("functionlib/azRangeSlide",
            {
                azRangeId: _$SelectedRange.attr("id") === undefined ? "" : _$SelectedRange.attr("id"),
                azRangeValue: _$SelectedRange.val(),
                azRangeJQElement: $(_Element)
            });
    }
    else if (e.type === "change")
    {
        $.publish("functionlib/azRangeStop",
            {
                azRangeId: _$SelectedRange.attr("id") === undefined ? "" : _$SelectedRange.attr("id"),
                azRangeValue: _$SelectedRange.val(),
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
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length == 0)
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

function consoleLog(Options)
{
    var _Defaults =
    {
        consoleType: "log",
    };

    var _Options;
    if (typeof Options === "string" || typeof Options === "number")
    {
        _Options = $.extend({}, _Defaults, { consoleText: Options });
    }
    else if (typeof Options === "object")
    {
        Options.hasOwnProperty("consoleType") === true ? _Defaults.consoleType = Options.consoleType : "";
        Options.hasOwnProperty("consoleText") === true ? _Defaults.consoleText = JSON.parse(JSON.stringify(Options.consoleText)) : _Defaults.consoleText = JSON.parse(JSON.stringify(Options));
        _Options = _Defaults;
    }
    else
    {
        _Options = $.extend({}, _Defaults, Options || {});
    }
    if (DebugMode)
    {
        console[_Options.consoleType](_Options.consoleText);
    }
}







//// AZ Get Customer Info
//function AZGetCustomerInfo()
//{
//    var _ObjCustomerInfo = JSON.parse(clientStorage("get", "customerinfo", ""));
//    if (IsEmpty(_ObjCustomerInfo) === false && _ObjCustomerInfo.hasOwnProperty("UserSignIn"))
//    {
//        if (_ObjCustomerInfo.UserSignIn.hasOwnProperty("LanguageCode") && _ObjCustomerInfo.UserSignIn.LanguageCode != "")
//        {
//            moment.locale(_ObjCustomerInfo.UserSignIn.LanguageCode);
//        }
//        consoleLog("AZGetCustomerInfo");
//        $.publish("functionlib/AZGetCustomerInfo", { ObjCustomerInfo: _ObjCustomerInfo });
//    }
//    else
//    {
//        throwException("silent", "", "", "AZGetCustomerInfo-1", "LoadData");
//    }
//}

//// AZ Set System Menu
//function AZSetSystemMenu(data)
//{
//    var _ObjCustomerInfo = data.ObjCustomerInfo;
//    if (IsEmpty(_ObjCustomerInfo) === false && _ObjCustomerInfo.hasOwnProperty("MainMenu"))
//    {
//        $.each(_ObjCustomerInfo.MainMenu, function (i, MainMenuContent)
//        {
//            if (MainMenuContent.RoleFeatureStatus == "block")
//            {
//                $("." + MainMenuContent.Name + "_" + MainMenuContent.Type + ", #" + MainMenuContent.Name + "_" + MainMenuContent.Type).css({ "display": "block" });
//            }
//        });
//        consoleLog("AZSetSystemMenu");
//        $.publish("functionlib/AZSetSystemMenu");
//    }
//    else
//    {
//        throwException("silent", "", "", "AZSetSystemMenu-1", "LoadData");
//    }
//}

//// Error exception
//function throwException(_Action, _ActionPath, _ErrorPage, _ErrorCode, _ErrorText)
//{
//    if (_Action === "navigate")
//    {
//        navigateTo(_ActionPath + "?ErrorPage=" + _ErrorPage + "&ErrorCode=" + _ErrorCode + "&ErrorText=" + _ErrorText, 0);
//    }
//    else if (_Action === "dialog")
//    {
//        hideCoverSpin();
//        initializeAZWindow(
//            {
//                dialogTitle: "Error",
//                dialogText: SingleDefaultElements[_ErrorText + "Error"] + "<br><br>" + _ErrorCode + " - " + _ErrorText
//            });
//    }
//    else if (_Action === "silent")
//    {
//        consoleLog({ consoleType: "error", consoleText: _ErrorCode });
//    }
//}

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