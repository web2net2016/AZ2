// AZ-Functionlib v2.0.0 | (c) web2net AS

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

        var _DefaultLanguage = clientStorage("get", "language", "");
        if (_DefaultLanguage === null)
        {
            _DefaultLanguage = "nb-NO";
        }
        var _DatePicker = false;
        $(":input").each(function ()
        {
            if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
            {
                _DatePicker = false;
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
                if ($(this).hasClass("date"))
                {
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                    _DatePicker = true;
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
                if (_DatePicker == true)
                {
                    $.datepicker.setDefaults($.datepicker.regional[_DefaultLanguage]);
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
                _$ParentElement.html('<div>#Error</div>');
            }
        });
    })(jQuery);
});

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
            azAccordionHeaderBackgroundColor: "#009688",
            azAccordionHeaderColor: "#FFFFFF",
            azAccordionHeaderHoverBackgroundColor: "#607D8B",
            azAccordionHeaderHoverColor: "#FFFFFF",
            azAccordionArticleBackgroundColor: "#FFFFFF",
            azAccordionArticleColor: "#000000",
            azAccordionIconClosed: "fas fa-plus",
            azAccordionIconOpen: "fas fa-minus",
            azAccordionSlideDown: 100,
            azAccordionSlideUp: 100
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azAccordionId != "")
        {
            _Main.$Accordion = $("#" + _Main.Options.azAccordionId);
            _Main.$AccordionCard = _Main.$Accordion.children(".az-accordion-card");
            _Main.$Header = _Main.$AccordionCard.children("header").append('<i class="' + _Main.Options.azAccordionIconClosed + '"></i>').css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor, "color": _Main.Options.azAccordionHeaderColor });
            _Main.$Article = _Main.$AccordionCard.children("article").css({ "background-color": _Main.Options.azAccordionArticleBackgroundColor, "color": _Main.Options.azAccordionArticleColor });

            _Main.$Header.mouseenter(function ()
            {
                $(this).css({ "background-color": _Main.Options.azAccordionHeaderHoverBackgroundColor, "color": _Main.Options.azAccordionHeaderHoverColor });
            }).mouseleave(function ()
            {
                $(this).css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor, "color": _Main.Options.azAccordionHeaderColor });
            });

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
            }

            _Main.azSelectAccordion = function (SelectedIndex)
            {
                azExecAccordion(_Main.$AccordionCard.eq(SelectedIndex).children("header"));
            }

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
            }

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
                        $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                        if (_Main.AccordionActivated == $SelectedAccordionHeader.parent().index())
                        {
                            _Main.AccordionActivated = "";
                        }
                        $.publish("functionlib/azAccordionHeader",
                            {
                                azAccordionId: _Main.Options.azAccordionId,
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
                                azAccordionId: _Main.Options.azAccordionId,
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
                    $("i", _Main.$Header).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                    $SelectedAccordionHeader.addClass("az-accordion-header-active");
                    $SelectedAccordionHeader.siblings("article").slideDown(_Main.Options.azAccordionSlideDown).addClass("az-accordion-article-active");
                    $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconClosed).addClass(_Main.Options.azAccordionIconOpen);

                    if (_Main.AccordionDeactivated == $SelectedAccordionHeader.parent().index())
                    {
                        _Main.AccordionDeactivated = "";
                    }
                    $.publish("functionlib/azAccordionHeader",
                        {
                            azAccordionId: _Main.Options.azAccordionId,
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
                _Main.azArticleHeight();
                $(window).resize(function ()
                {
                    _Main.azArticleHeight();
                });
            }
            if (_Main.Options.azAccordionCollapsible == false)
            {
                _Main.azSelectAccordion(0);
            }
        }
        return (
            {
                "SelectAccordion": _Main.azSelectAccordion,
                "ChangeText": _Main.azChangeText
            });
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

// AZ Circular Bar
function AZCircularBar(Options)
{
    var _Defaults =
    {
        azCircularBarId: "",
        azCircularBarSize: 120,
        azCircularBarColor: "#CCCCCC",
        azCircularBarValue: 0,
        azCircularBarValueColor: "#307BBB",
        azCircularBarLabel: "",
        azCircularBarCaption: "",
        azCircularBarCaptionColor: ""
    };

    if (Options && Options.length > 0)
    {
        azCircularBarArray = [];
        $.each(Options, function (Index, ObjCurrentOption)
        {
            azCircularBarArray.push(new AktivateAZCircularBar(ObjCurrentOption));
        });
        return azCircularBarArray
    }
    else if (IsEmpty(Options) === false)
    {
        return new AktivateAZCircularBar(Options);
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
            }
            return this;
        }
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
            azModalDialogReturnVariable: "",
            azModalDialogId: "",
            azModalDialogTitle: "",
            azModalDialogText: "",
            azModalDialogiFrameURL: "",
            azModalDialogWidth: 450,
            azModalDialogHeight: 300,
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
            azModalDialogBackgroundColor: "#FFFFFF",
            azModalDialogColor: "#000000",
            azModalDialogTitlebarBackgroundColor: "#009688",
            azModalDialogTitlebarColor: "#FFFFFF",
            azModalDialogBeforeOpen: function () { },
            azModalDialogAfterOpen: function () { },
            azModalDialogAfterClose: function () { },
            azModalDialogAfterCloseReload: false
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azModalDialogReturnVariable !== "" && _Main.Options.azModalDialogId !== "" && $("#" + _Main.Options.azModalDialogId).length === 0)
        {
            $.subscribeonce("functionlib/azModalDialogBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Background = {};
                _Main.$Iframe;

                _Main.$Dialog = $("<div></div>").attr("id", _Main.Options.azModalDialogId).addClass("az-modal-dialog").css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important", "color": _Main.Options.azModalDialogColor + " !important" });
                _Main.$Card = $("<div></div>").addClass("az-modal-card");
                _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
                _Main.$Card.append(_Main.$Article);

                // AZ Size
                if (_Main.Options.azModalDialogWidth > (window.innerWidth - 20))
                {
                    _Main.Options.azModalDialogWidth = (window.innerWidth - 20);
                }
                if (_Main.Options.azModalDialogHeight > (window.innerHeight - 20))
                {
                    _Main.Options.azModalDialogHeight = (window.innerHeight - 20);
                }

                // AZ iFrame
                if (_Main.Options.azModalDialogiFrameURL != "")
                {
                    _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azModalDialogId);
                    _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": (_Main.Options.azModalDialogHeight - 80) });
                    _Main.$Card.append(_Main.$Iframe);
                }

                // UI Dialog
                _Main.$Dialog.append(_Main.$Card);
                _Main.$CurrentDialog = _Main.$Dialog.dialog(
                    {
                        autoOpen: false,
                        modal: false,
                        width: (_Main.Options.azModalDialogWidth - 16),
                        height: _Main.Options.azModalDialogHeight,
                        resizable: _Main.Options.azModalDialogResizable,
                        draggable: _Main.Options.azModalDialogDraggable,
                        closeOnEscape: _Main.Options.azModalDialogCloseOnEscape
                    });
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
                _Main.$UIDialog = _Main.$Dialog.parent(".ui-dialog");
                _Main.$UIDialogTitlebar = _Main.$UIDialog.children(".ui-dialog-titlebar").css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important", "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                _Main.$UIDialogTitlebar.children(".ui-dialog-title").html(_Main.Options.azModalDialogTitle);
                _Main.$UIDialogTitlebar.children(".ui-dialog-titlebar-close").removeAttr("title");
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
                if (_$ListUIDialog.length === 0)
                {
                    // AZ No Parent Scroll
                    if (_Main.$Body.hasClass("az-no-parent-scroll") === false)
                    {
                        if (_Main.Options.azModalDialogNoParentScroll === true)
                        {
                            ModalDialogScrollTop = $(window).scrollTop();
                            _Main.$Body.addClass("az-no-parent-scroll");
                        }
                    }

                    // AZ Background
                    _Main.$Background = $("<div></div>").attr("id", "az-background");
                    if (_Main.Options.azModalDialogBackground === true)
                    {
                        _Main.$Body.append(_Main.$Background);
                    }

                    // AZ Modal
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
                AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterOpen, "functionlib/azModalDialogAfterOpen");

                // AZ Modal Dialog Close 
                _Main.azModalDialogClose = function (Options)
                {
                    window[_Main.Options.azModalDialogReturnVariable] = undefined;
                    var _Defaults =
                    {
                        azModalDialogAfterClose: function () { },
                        azModalDialogAfterCloseReload: false
                    };
                    if (Options === undefined || !Options.type)
                    {
                        _Main.Options = $.extend({}, _Defaults, Options || {});
                    }

                    $.subscribeonce("functionlib/azModalDialogAfterClose", function ()
                    {
                        if (_Main.Options.azModalDialogAfterCloseReload === true)
                        {
                            location.reload();
                        }
                        else
                        {
                            // AZ iFrame
                            if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
                            {
                                _Main.$Iframe.attr("src", "");
                            }

                            // UI Dialog
                            _Main.$Dialog.dialog("close");
                            if (_Main.$Dialog.length > 0)
                            {
                                _Main.$Dialog.remove();
                            }

                            var _$ListUIDialog = $(".ui-dialog");
                            if (_$ListUIDialog.length === 0)
                            {
                                $("#az-background").remove();
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
                    });
                    AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterClose, "functionlib/azModalDialogAfterClose");
                }

                // AZ Change Modal Dialog Titlebar
                _Main.azChangeModalTitlebar = function (Options)
                {
                    var _Defaults =
                    {
                        azModalDialogTitle: "",
                        azModalDialogTitlebarBackgroundColor: "#009688",
                        azModalDialogTitlebarColor: "#FFFFFF",
                        azModalDialogAlertTimeout: 3000
                    };
                    _Main.Options = $.extend({}, _Defaults, Options || {});

                    if ($(".az-dialog-titlebar").length === 0)
                    {
                        _Main.$NewUIDialogTitlebar = $('<div></div>').addClass("ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle").css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important", "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                        _Main.$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + _Main.Options.azModalDialogTitle + '</span>');
                        _Main.$UIDialogTitlebar.hide();
                        _Main.$UIDialog.prepend(_Main.$NewUIDialogTitlebar);
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
                }
            });
            AZCheckAsyncAndPublish(_Main.Options.azModalDialogBeforeOpen, "functionlib/azModalDialogBeforeOpen");

            if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
            {
                return (
                    {
                        "ModalDialogClose": _Main.azModalDialogClose,
                        "ChangeModalTitlebar": _Main.azChangeModalTitlebar,
                        "IFrame": _Main.$Iframe[0].contentWindow
                    });
            }
            else
            {
                return (
                    {
                        "ModalDialogClose": _Main.azModalDialogClose,
                        "ChangeModalTitlebar": _Main.azChangeModalTitlebar
                    });
            }
        }
    }
    else
    {
        return new AZModalDialog(Options);
    }
}

function AZCheckAsyncAndPublish(FunctionToRun, Publish)
{
    if (FunctionToRun)
    {
        var _Obj = FunctionToRun();
        if (!IsEmpty(_Obj) && _Obj.hasOwnProperty("promise"))
        {
            _Obj.always(function ()
            {
                $.publish(Publish);
            });
        }
        else
        {
            $.publish(Publish);
        }
    }
    else
    {
        $.publish(Publish);
    }
}

// AZ Snackbar
function AZSnackbar(Options)
{
    if (this instanceof AZSnackbar === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSnackbarId: "",
            azSnackbarText: "",
            azSnackbarPosition: "left-top",
            azSnackbarTopMargin: 20,
            azSnackbarBottomMargin: 20,
            azSnackbarMobileMinHeight: 0,
            azSnackbarClose: false,
            azSnackbarTimeout: 3000,
            azSnackbarBackgroundColor: "#333333",
            azSnackbarColor: "#FFFFFF",
            azSnackbarCloseColor: "#FFFFFF",
            azSnackbarAfterOpen: function () { }
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSnackbarId != "" && $("#" + _Main.Options.azSnackbarId).length === 0)
        {
            _Main.$Body = $("body");
            _Main.$Wrapper = $('<div></div>').attr({ "id": _Main.Options.azSnackbarId }).addClass("az-snackbar").css({ "background-color": _Main.Options.azSnackbarBackgroundColor });
            _Main.$Table = $('<table></table>').addClass("az-snackbar-table");

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
            _Main.$Wrapper.addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);

            if (window.innerWidth < 576)
            {
                _Main.$Wrapper.addClass("az-snackbar-mobile");
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
                    _Main.$Wrapper.css({ "min-height": _Main.Options.azSnackbarMobileMinHeight })
                }
            }

            //_Main.azRecalcSnackbarPosition = function ()
            //{
            //    var _TotalHeight = 0;
            //    var _Position = "";
            //    $(".az-snackbar").not(_Main.$Wrapper).each(function ()
            //    {
            //        if (_Main.Options.azSnackbarPosition == "left-top" || _Main.Options.azSnackbarPosition == "full-width-top")
            //        {
            //            if ($(this).hasClass("az-snackbar-left-top") || $(this).hasClass("az-snackbar-full-width-top"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + 16;
            //            }
            //            _Position = "top";
            //        }
            //        else if (_Main.Options.azSnackbarPosition == "right-top" || _Main.Options.azSnackbarPosition == "full-width-top")
            //        {
            //            if ($(this).hasClass("az-snackbar-right-top") || $(this).hasClass("az-snackbar-full-width-top"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + 16;
            //            }
            //            _Position = "top";
            //        }
            //        else if (_Main.Options.azSnackbarPosition == "center-top" || _Main.Options.azSnackbarPosition == "full-width-top")
            //        {
            //            if ($(this).hasClass("az-snackbar-center-top") || $(this).hasClass("az-snackbar-full-width-top"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + 16;
            //            }
            //            _Position = "top";
            //        }
            //        else if (_Main.Options.azSnackbarPosition == "left-bottom" || _Main.Options.azSnackbarPosition == "full-width-bottom")
            //        {
            //            if ($(this).hasClass("az-snackbar-left-bottom") || $(this).hasClass("az-snackbar-full-width-bottom"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + _Main.Options.azSnackbarBottomMargin + 16;
            //            }
            //            _Position = "bottom";
            //        }
            //        else if (_Main.Options.azSnackbarPosition == "center-bottom" || _Main.Options.azSnackbarPosition == "full-width-bottom")
            //        {
            //            if ($(this).hasClass("az-snackbar-center-bottom") || $(this).hasClass("az-snackbar-full-width-bottom"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + _Main.Options.azSnackbarBottomMargin + 16;
            //            }
            //            _Position = "bottom";
            //        }
            //        else if (_Main.Options.azSnackbarPosition == "right-bottom" || _Main.Options.azSnackbarPosition == "full-width-bottom")
            //        {
            //            if ($(this).hasClass("az-snackbar-right-bottom") || $(this).hasClass("az-snackbar-full-width-bottom"))
            //            {
            //                _TotalHeight = _TotalHeight + $(this).height() + _Main.Options.azSnackbarBottomMargin + 16;
            //            }
            //            _Position = "bottom";
            //        }
            //    });
            //    if (_TotalHeight > 0 && _Position !== "")
            //    {
            //        _Main.AnimateOpenOptions[_Position] = _TotalHeight;
            //    }
            //}

            _Main.azCloseSnackbar = function ()
            {
                _Main.$Wrapper.animate(_Main.AnimateCloseOptions, 500, function ()
                {
                    $("#" + _Main.Options.azSnackbarId).remove();
                    //_Main.azRecalcSnackbarPosition();
                });
            }

            _Main.azChangeSnackbarText = function (SnackbarText)
            {
                _Main.$TextCell.html(SnackbarText)
            }

            if (_Main.Options.azSnackbarClose === true)
            {
                _Main.$Close = $('<td></td>').html("X").addClass("az-snackbar-close").css({ "color": _Main.Options.azSnackbarCloseColor });
                _Main.$Close.off("click").on("click", function ()
                {
                    _Main.azCloseSnackbar();
                });
            }
            else
            {
                _Main.$Close = "";
                window.setTimeout(function ()
                {
                    _Main.azCloseSnackbar();
                }, _Main.Options.azSnackbarTimeout);
            }

            _Main.$TextCell = $('<td></td>').html(_Main.Options.azSnackbarText).addClass("az-snackbar-text").css({ "color": _Main.Options.azSnackbarColor });
            _Main.$TableRow = $('<tr></tr>').append(_Main.$TextCell).append(_Main.$Close);
            _Main.$Table.append(_Main.$TableRow);
            _Main.$Wrapper.append(_Main.$Table);
            _Main.$Body.append(_Main.$Wrapper);
            //_Main.azRecalcSnackbarPosition();

            _Main.$Wrapper.animate(_Main.AnimateOpenOptions, 500, function ()
            {
                AZCheckAsyncAndPublish(_Main.Options.azSnackbarAfterOpen, "functionlib/azSnackbarAfterOpen");
            });
        }
        return (
            {
                "ChangeSnackbarText": _Main.azChangeSnackbarText
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
            }

            _Main.azSelectTabs = function (SelectedIndex)
            {
                azExecTabs(_Main.$Tabs.children("ul").children("li").eq(SelectedIndex));
            }

            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.$TabsCard.children("article").eq(SelectedIndex).html(SelectedText);
            }

            _Main.azToggleVertical = function ()
            {
                _Main.$Tabs.toggleClass("az-tabs-vertical");
            }

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
        return (
            {
                "SelectTab": _Main.azSelectTabs,
                "ChangeText": _Main.azChangeText,
                "ToggleVertical": _Main.azToggleVertical
            });
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
            azWindowWidth: 450,
            azWindowHeight: 150,
            azWindowPositionTop: 0,
            azWindowModal: false,
            azWindowTitlebar: true,
            azWindowTitlebarClose: true,
            azWindowAnimation: true,
            azWindowNoParentScroll: false,
            azWindowBackground: true,
            azWindowBorderColor: "#FFFFFF",
            azWindowTitlebarBackgroundColor: "#009688",
            azWindowTitlebarColor: "#FFFFFF",
            azWindowBackgroundColor: "#FFFFFF",
            azWindowColor: "#000000",
            azWindowButton: {},
            azWindowBeforeOpen: function () { },
            azWindowAfterOpen: function () { },
            azWindowAfterClose: function () { },
            azWindowAfterCloseReload: false
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($('#az-window').length === 0)
        {
            $.subscribeonce("functionlib/azWindowBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Background = {};

                _Main.$Window = $("<div></div>").attr("id", "az-window").css({ "background-color": _Main.Options.azWindowBorderColor + " !important" });
                _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>").css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important", "color": _Main.Options.azWindowTitlebarColor + " !important" });
                _Main.$Dialog = $("<div></div>").addClass("az-window-dialog").css({ "background-color": _Main.Options.azWindowBackgroundColor + " !important", "color": _Main.Options.azWindowColor + " !important" });
                _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
                _Main.$Dialog.append(_Main.$Article);
                _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

                // AZ Size
                _Main.Options.azWindowWidth = (_Main.Options.azWindowWidth - 14);
                if (_Main.Options.azWindowWidth > (window.innerWidth - 20))
                {
                    _Main.Options.azWindowWidth = (window.innerWidth - 20);
                }
                if (_Main.Options.azWindowHeight > 150)
                {
                    if (_Main.Options.azWindowHeight > (window.innerHeight - 20))
                    {
                        _Main.Options.azWindowHeight = (window.innerHeight - 20);
                    }
                }

                // AZ No Parent Scroll
                if (_Main.Options.azWindowNoParentScroll === true)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    _Main.$Body.addClass("az-no-parent-scroll");
                }

                // AZ Background
                _Main.$Background = $("<div></div>").attr("id", "az-background");
                if (_Main.Options.azWindowBackground === true)
                {
                    _Main.$Body.append(_Main.$Background);
                }

                // AZ Modal
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
                    _Main.$Dialog.height(_Main.Options.azWindowHeight - 28);
                }
                else
                {
                    _Main.$Dialog.height(_Main.Options.azWindowHeight - 69);
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

                _Main.$Window.width(_Main.Options.azWindowWidth);
                _Main.$Window.height(_Main.Options.azWindowHeight - 14);
                if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > ($(window).scrollTop() + $(window).height())))
                {
                    _Main.$Window.css({ "top": ($(window).scrollTop() + $(window).height() / 2) - (_Main.$Window.height() / 2) });
                }
                else
                {
                    _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
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
                AZCheckAsyncAndPublish(_Main.Options.azWindowAfterOpen, "functionlib/azWindowAfterOpen");

                // AZ Window Close 
                _Main.azWindowClose = function (Options)
                {
                    var _Defaults =
                    {
                        azWindowAfterClose: function () { },
                        azWindowAfterCloseReload: false
                    };
                    if (Options === undefined || !Options.type)
                    {
                        _Main.Options = $.extend({}, _Defaults, Options || {});
                    }

                    $.subscribeonce("functionlib/azWindowAfterClose", function ()
                    {
                        if (_Main.Options.azWindowAfterCloseReload === true)
                        {
                            location.reload();
                        }
                        else
                        {
                            _Main.$Background.remove();
                            if (ModalDialogScrollTop > 0)
                            {
                                $(window).scrollTop(ModalDialogScrollTop);
                            }

                            _Main.$Body.removeClass("az-no-parent-scroll");
                            if (_Main.$Body.hasClass("") === true)
                            {
                                _Main.$Body.removeAttr("class");
                            }

                            if (_Main.Options.azWindowAnimation === true)
                            {
                                _Main.$Window.fadeOut(function ()
                                {
                                    _Main.$Window.remove();
                                    $.publish("functionlib/azWindowRemoved");
                                });
                            }
                            else
                            {
                                _Main.$Window.remove();
                                $.publish("functionlib/azWindowRemoved");
                            }
                        }
                    });
                    AZCheckAsyncAndPublish(_Main.Options.azWindowAfterClose, "functionlib/azWindowAfterClose");
                }

                // AZ Change Window Titlebar
                _Main.azChangeWindowTitlebar = function (Options)
                {
                    var _Defaults =
                    {
                        azWindowTitle: "",
                        azWindowTitlebarBackgroundColor: "#009688",
                        azWindowTitlebarColor: "#FFFFFF",
                        azWindowAlertTimeout: 3000
                    };
                    _Main.Options = $.extend({}, _Defaults, Options || {});

                    if ($(".az-window-titlebar-active").length === 0)
                    {
                        _Main.$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1>").css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important", "color": _Main.Options.azWindowTitlebarColor + " !important" });
                        _Main.$Titlebar.hide();
                        _Main.$Window.prepend(_Main.$NewTitlebar);
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
                }
            });
            AZCheckAsyncAndPublish(_Main.Options.azWindowBeforeOpen, "functionlib/azWindowBeforeOpen");
        }

        return (
            {
                "WindowClose": _Main.azWindowClose,
                "ChangeWindowTitlebar": _Main.azChangeWindowTitlebar
            });
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
            TextButton1: "",
            Button2: false,
            TypeButton2: "info",
            SizeButton2: "",
            TextButton2: ""
        };
        var Option = $.extend({}, _Defaults, Options || {});

        var _HTML = "";
        if (Option.Button1 === true && Option.Button2 === true)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-6 az-text-right">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton2 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton2 + ' ' + Option.SizeButton2 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + Option.TextButton2 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '<div class="az-col xs-6 az-text-left">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + Option.TextButton1 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        else if (Option.Button1 === true && Option.Button2 === false)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-12 az-text-center">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + Option.TextButton1 + '</button>';
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
            azFullWindowBackgroundColor: "#FFFFFF",
            azFullWindowColor: "#000000",
            azFullWindowBeforeOpen: function () { },
            azFullWindowAfterOpen: function () { },
            azFullWindowAfterClose: function () { }
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($("#az-full-window").length === 0)
        {
            $.subscribeonce("functionlib/azFullWindowBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Window = $("<div></div>").attr("id", "az-full-window").css({ "background-color": _Main.Options.azFullWindowBackgroundColor + " !important", "color": _Main.Options.azFullWindowColor + " !important" });
                _Main.$Close = $("<div>&times;</div>").attr("id", "az-full-window-close");

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
                AZCheckAsyncAndPublish(_Main.Options.azFullWindowAfterOpen, "functionlib/azFullWindowAfterOpen");
            });
            AZCheckAsyncAndPublish(_Main.Options.azFullWindowBeforeOpen, "functionlib/azFullWindowBeforeOpen");

            _Main.$Close.on('click', function ()
            {
                $.subscribeonce("functionlib/azFullWindowAfterClose", function ()
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
                        $.publish("functionlib/azFullWindowClosed");
                    });
                });
                AZCheckAsyncAndPublish(_Main.Options.azFullWindowAfterClose, "functionlib/azFullWindowAfterClose");
            });
        }
    }
    else
    {
        return new AZFullWindow(Options);
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
            azSlideInTabBackgroundColor: "#009688",
            azSlideInTabColor: "#FFFFFF",
            azSlideInArticleBackgroundColor: "#FFFFFF",
            azSlideInArticleColor: "#000000"
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideInId != "" && $("#" + _Main.Options.azSlideInId).length == 0)
        {
            _Main.$Body = $("body");
            _Main.$SlideIn = $("<div></div>").attr("id", _Main.Options.azSlideInId).addClass("az-slidein");
            _Main.$SlideInTab = $("<div><div></div></div>").addClass("az-slidein-tab").css({ "background-color": _Main.Options.azSlideInTabBackgroundColor, "color": _Main.Options.azSlideInTabColor });
            _Main.$SlideInCard = $("<div></div>").addClass("az-slidein-card");
            _Main.$Article = $("<article></article>").html(_Main.Options.azSlideInText).css({ "background-color": _Main.Options.azSlideInArticleBackgroundColor, "color": _Main.Options.azSlideInArticleColor });
            _Main.TextLength = _Main.Options.azSlideInTabText.length;

            _Main.SlideInArticleOptions = {};
            _Main.SlideInOptions = {};
            _Main.SlideInTabOptions = {};
            if (_Main.TextLength > 0)
            {
                _Main.TextLength = (_Main.TextLength * 8);
                _Main.SlideInTabOptions = { "height": _Main.TextLength };
                _Main.$SlideInTab.children("div").text(_Main.Options.azSlideInTabText)
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
            if (_Main.Options.azSlideInWidth > (window.innerWidth - 40))
            {
                _Main.Options.azSlideInWidth = (window.innerWidth - 40);
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

            _Main.azChangeText = function (SelectedText)
            {
                _Main.$Article.html(SelectedText);
            }

            _Main.$SlideInTab.css(_Main.SlideInTabOptions);
            _Main.$Article.css(_Main.SlideInArticleOptions);
            _Main.$SlideInCard.append(_Main.$Article);
            _Main.$SlideIn.append(_Main.$SlideInTab).append(_Main.$SlideInCard);
            _Main.$Body.append(_Main.$SlideIn);
            $.publish("functionlib/azSlideInAfterInit");

            window.setTimeout(function ()
            {
                _Main.$SlideIn.css(_Main.SlideInOptions).addClass("transition-" + _Main.Options.azSlideInPosition).show();
            }, 100);

            _Main.$SlideInTab.on('click', function ()
            {
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-right');
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-left');
                }
            });
        }
        return (
            {
                "ChangeText": _Main.azChangeText,
                "SlideInTab": _Main.$SlideInTab,
                "SlideIn": _Main.$SlideIn,
                "SlideOptions": _Main.Options
            });
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
                })
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
            }

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
            }
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

// AZ Sort JSON
function AZSortJSONArray(arr, prop, order)
{
    if (arr == null || Array.isArray(arr) === false || prop == null || prop == "")
    {
        return [];
    }
    else
    {
        _Order = "asc";
        if (order != null && order != "" && order.length > 2)
        {
            _Order = order.toLowerCase();
        }

        if (_Order === "asc")
        {
            return arr.sort(Compare(prop, 1));
        }
        else if (_Order == "desc")
        {
            return arr.sort(Compare(prop, 0));
        }

        function Compare(Attr, Value)
        {
            if (Value === 1)
            {
                return function (a, b)
                {
                    var x = parseInt((a[Attr] === null) ? "" : "" + a[Attr]);
                    var y = parseInt((b[Attr] === null) ? "" : "" + b[Attr]);
                    return x < y ? -1 : (x > y ? 1 : 0);
                }
            }
            else
            {
                return function (a, b)
                {
                    var x = parseInt((a[Attr] === null) ? "" : "" + a[Attr]);
                    var y = parseInt((b[Attr] === null) ? "" : "" + b[Attr]);
                    return x < y ? 1 : (x > y ? -1 : 0);
                }
            }
        }
    }
}

////////////////////////////////////////////////////////////

function bytesToSize(bytes, decimalPoint)
{
    if (bytes == 0) return '0 Bytes';
    var k = 1000;
    var dm = decimalPoint || 2;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getURLParameters(PageURL)
{
    var vars = {};
    var parts = PageURL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
    {
        vars[key.toLowerCase()] = value;
    });
    return vars;
}

$.urlParam = function (name)
{
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null)
    {
        return null;
    }
    else
    {
        return results[1] || 0;
    }
}

function IsEmpty(SelectedObj)
{
    if (SelectedObj instanceof Object)
    {
        if (SelectedObj == null)
        {
            return true;
        }
        for (var key in SelectedObj)
        {
            if (SelectedObj.hasOwnProperty(key))
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return true;
    }
}

function navigateTo(SelectedPage, SelectedTarget)
{
    SelectedTarget = SelectedTarget === true ? true : false;
    if (SelectedTarget == 0)
    {
        window.location.href = SelectedPage;
    }
    else
    {
        window.open(SelectedPage, SelectedTarget);
    }
}

function getSelectedObj(SelectedList1, SelectedKey1, SelectedVal1, SelectedList2, SelectedKey2, SelectedVal2)
{
    var _ObjReturn = "";
    $.each(SelectedList1, function (index1, Selected1Content)
    {
        if (SelectedList2 !== undefined && SelectedList2 !== "")
        {
            if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
            {
                $.each(Selected1Content[SelectedList2], function (index2, Selected2Content)
                {
                    $.each(Selected2Content, function (Key, Value)
                    {
                        if (SelectedKey2.toString().toLowerCase() == Key.toString().toLowerCase() && SelectedVal2.toString().toLowerCase() == Value.toString().toLowerCase())
                        {
                            _ObjReturn = Selected2Content;
                            return false;
                        }
                    });
                });
            }
        }
        else
        {
            $.each(Selected1Content, function (Key, Value)
            {
                if (SelectedKey1.toString().toLowerCase() == Key.toString().toLowerCase() && SelectedVal1.toString().toLowerCase() == Value.toString().toLowerCase())
                {
                    _ObjReturn = Selected1Content;
                    return false;
                }
            });
        }
    });
    return _ObjReturn;
}

function removeSelectedObj(SelectedList1, SelectedKey1, SelectedVal1, SelectedList2, SelectedKey2, SelectedVal2)
{
    $.each(SelectedList1, function (index1, Selected1Content)
    {
        if (SelectedList2 !== undefined && SelectedList2 !== "")
        {
            if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
            {
                $.each(Selected1Content[SelectedList2], function (index2, Selected2Content)
                {
                    if (Selected2Content[SelectedKey2].toString().toLowerCase() == SelectedVal2.toString().toLowerCase())
                    {
                        Selected1Content[SelectedList2].splice(index2, 1);
                        return false;
                    }
                });
            }
        }
        else
        {
            if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
            {
                SelectedList1.splice(index1, 1);
                return false;
            }
        }
    });
}

function existsSelectedObj(SelectedList, SelectedKey, SelectedVal)
{
    var _Found = false;
    for (var i = 0; i < SelectedList.length; i++)
    {
        if (SelectedList[i][SelectedKey].toString().toLowerCase() == SelectedVal.toString().toLowerCase())
        {
            _Found = true;
            break;
        }
    }
    return _Found;
}

function changeInOut(_ElementIn, _ElementOut)
{
    if ($("#" + _ElementIn + "").is(":hidden"))
    {
        $("#" + _ElementIn + "").slideDown("slow");
        $("#" + _ElementOut + "").slideUp("slow");
    }
    else
    {
        $("#" + _ElementIn + "").slideUp("slow");
        $("#" + _ElementOut + "").slideDown("slow");
    }
}

function formatDateTime(SelectedDateTime, FormatType)
{
    if (moment(SelectedDateTime).isValid() == true)
    {
        return moment(SelectedDateTime).format(FormatType);
    }
    else
    {
        return "";
    }
}

function formatTime(SelectedTime)
{
    if (SelectedTime != "" && SelectedTime != null && SelectedTime != undefined)
    {
        return SelectedTime;
    }
    else
    {
        return "";
    }
}

function CalcChildrenHeight($Element)
{
    var topOffset = 0;
    var bottomOffset = 0;
    var outer = true;
    $Element.children().each(function (i, e)
    {
        var $e = $(e);
        var eTopOffset = $e.offset().top;
        var eBottomOffset = eTopOffset + (outer ? $e.outerHeight() : $e.height());

        if (eTopOffset < topOffset)
        {
            topOffset = eTopOffset;
        }
        if (eBottomOffset > bottomOffset)
        {
            bottomOffset = eBottomOffset;
        }
    });
    return (bottomOffset - topOffset - $Element.offset().top);
}