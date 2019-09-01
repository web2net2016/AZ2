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
                    $(this).off("keypress focusout", azForceUppercaseKeypressFocusout).on("keypress focusout", azForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", azForceLowercaseKeypressFocusout).on("keypress focusout", azForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", azDoNotPaste).on("keydown", azDoNotPaste);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                                if (typeof azSetDate == 'function')
                                {
                                    azSetDate(curDate, instance);
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
                    $(this).off("input change", azRange).on("input change", azRange);
                }
            }            
            if ($(this).is("textarea"))
            {
                $(this).attr("autocomplete", "false");
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress focusout", azForceUppercaseKeypressFocusout).on("keypress focusout", azForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", azForceLowercaseKeypressFocusout).on("keypress focusout", azForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", azDoNotPaste).on("keydown", azDoNotPaste);
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
                    $(this).off("click", azCheckboxClick).on("click", azCheckboxClick);
                }
                if ($(this).parent("label").hasClass("az-switch"))
                {
                    $(this).off("click", azSwitchClick).on("click", azSwitchClick);
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
                    $(this).off("click", azRadioClick).on("click", azRadioClick);
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
                    $(this).off("click", azCancel).on("click", azCancel);
                }
                if ($(this).hasClass("submit"))
                {
                    $(this).off("click", azSubmit).on("click", azSubmit);
                }
                if ($(this).hasClass("delete"))
                {
                    $(this).off("click", azDelete).on("click", azDelete);
                }
                if ($(this).hasClass("az-navbar-button"))
                {
                    $(this).off("click", azToggleNavbarMobile).on("click", azToggleNavbarMobile);
                }
                if ($(this).hasClass("disabled"))
                {
                    azDisableButton(this);
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
        $(".passwordeye").off("click", azHideShowPassword).on("click", azHideShowPassword);

        // Animated Label
        $(".az-label-animated").off("click", azLabelAnimatedClick).on("click", azLabelAnimatedClick);

        // Adjust Cards Height
        $('.az-accordion-card.adjust, .az-card.adjust, .az-list-card.adjust, .az-timeline-card.adjust').matchHeight();
    })(jQuery);
});

function azHideShowPassword(e)
{
    var _SelectedElementId = "";
    var _Element = e.target || e.srcElement;
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

function azInputAnimatedFocusout(e)
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

function azLabelAnimatedClick(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).siblings(":input").focus();
}

function azForceUppercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toUpperCase());
}

function azForceLowercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toLowerCase());
}

function azDoNotPaste(e)
{
    if (e.ctrlKey == true && (e.which == 118 || e.which == 86))
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function azNotEnter(e)
{
    if ((e.keyCode || e.which) == 13)
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function azCheckboxClick(e)
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

function azRadioClick(e)
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

function azSwitchClick(e)
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

function azRange(e)
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

function azDisableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (!_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.addClass("az-button-disabled");
        _$SelectedButton.attr("disabled", true);
    }
}

function azEnableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.removeClass("az-button-disabled");
        _$SelectedButton.attr("disabled", false);
    }
}

function azShowCoverSpin(CoverSpinText)
{
    var _CoverSpinText = CoverSpinText === undefined ? "" : CoverSpinText;
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length == 0)
    {
        $("body").append('<div id="az-cover-spin"><div>' + _CoverSpinText + '</div></div>');
    }
}

function azHideCoverSpin()
{
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length > 0)
    {
        _$CoverSpin.remove();
    }
}

function azToggleNavbarMobile()
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

function azCloseNavbarMobile()
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
}

function setDropdownClickEvent(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = $(_Element).closest(".az-dropdown-click").find(".az-ul-dropdown");
    $(".az-dropdown-show").not(_$ULDropdown).each(function ()
    {
        $(this).removeClass("az-dropdown-show");
    });
    if (_$ULDropdown.hasClass("az-dropdown-show"))
    {
        _$ULDropdown.removeClass("az-dropdown-show");
    }
    else
    {
        _$ULDropdown.addClass("az-dropdown-show");
        window.setTimeout(function ()
        {
            $(document).one("click", { ULDropdown: _$ULDropdown }, removeDropdownEvent);
        }, 100);
    }
}

function removeDropdownEvent(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = e.data.ULDropdown;
    if ($(_Element) != _$ULDropdown)
    {
        if (_$ULDropdown.hasClass("az-dropdown-show"))
        {
            _$ULDropdown.removeClass("az-dropdown-show");
        }
    }
}


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