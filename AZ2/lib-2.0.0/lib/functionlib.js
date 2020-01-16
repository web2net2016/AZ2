﻿// AZ-Functionlib Additional v2.0.0 | (c) web2net AS

var AZSettings =
{
    LanguageValidationFolder: "/admin",
    DefaultLanguageFile: "/lib/lang-val/default-lang.json",
    DefaultLanguage: "nb-NO",
    DebugMode: true,
    AppName: "AZ Team",
    AppVersion: "1.0.0",
    ApiVersion: "_1"
}

var ObjPageData = {};
ObjPageData.Elements = {};
ObjPageData.Values = {};

(function ($)
{
    $.fn.decimal = function ()
    {
        var _Return = this.map(function ()
        {
            var _Value = $(this).val();
            if (_Value != "" && _Value.indexOf(",") > 0)
            {
                return parseFloat(_Value.replace(",", ".").replace(/ /g, ""));
            }
        });
        if (_Return.length > 0)
        {
            return _Return[0];
        }
    };
})(jQuery);

$(document).ready(function ()
{
    if (typeof SetContentInfo == "function")
    {
        SetContentInfo();
    }
});

// AZ Page
function AZPage(Options)
{
    if (this instanceof AZPage === true)
    {
        AZShowCoverSpin();
        var _Main = this;
        var _Defaults =
        {
            azPageArea: {},
            azPageInputTypeEvents: false,
            azPageLanguage: false,
            azPageLanguageUrl: "",
            azPageValidation: false,
            azPageValidationUrl: "",
            azPageGridView: false
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        _Main.ObjPageAttributes = {};
        _Main.ObjLanguage = {};
        _Main.ObjValidation = {};
        _Main.JsonUrl = "";
        _Main.DefaultLanguageFile = "";
        _Main.DefaultLanguage = "";

        _Main.ObjPageAttributes = new AZCheckPageAttributes();
        if (IsEmpty(_Main.ObjPageAttributes) === false)
        {
            if (IsEmpty(_Main.Options.azPageArea) === false)
            {
                _Main.ObjPageAttributes.$ObjAZForm = _Main.Options.azPageArea;
            }

            _Main.InputTypeEvents = function ()
            {
                if (_Main.Options.azPageInputTypeEvents === true)
                {
                    $.subscribeonce("functionlib/AZSetInputTypeEvents", function (e, data)
                    {
                        $.publish("functionlib/AZPage",
                            {
                                AppName: AZSettings.AppName,
                                AppVersion: AZSettings.AppVersion,
                                ApiVersion: AZSettings.ApiVersion,
                                $Form: _Main.ObjPageAttributes.$ObjAZForm,
                                Location: _Main.ObjPageAttributes.Location,
                                PageName: _Main.ObjPageAttributes.PageName,
                                PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                                Language: _Main.DefaultLanguage,
                                ObjLanguage: _Main.ObjLanguage,
                                ObjValidation: _Main.ObjValidation
                            });
                    });
                    AZSetInputTypeEvents();
                }
                else
                {
                    $.publish("functionlib/AZPage",
                        {
                            AppName: AZSettings.AppName,
                            AppVersion: AZSettings.AppVersion,
                            ApiVersion: AZSettings.ApiVersion,
                            $Form: _Main.ObjPageAttributes.$ObjAZForm,
                            Location: _Main.ObjPageAttributes.Location,
                            PageName: _Main.ObjPageAttributes.PageName,
                            PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                            Language: _Main.DefaultLanguage,
                            ObjLanguage: _Main.ObjLanguage,
                            ObjValidation: _Main.ObjValidation
                        });
                }
            }

            _Main.GridView = function ()
            {
                if (_Main.Options.azPageGridView === true)
                {
                    $.subscribeonce("functionlib/AZGridView", function (e, data)
                    {
                        _Main.InputTypeEvents();
                    });
                    var _AZGridViewOptions =
                    {
                        $Area: _Main.ObjPageAttributes.$ObjAZForm,
                        ObjLanguage: _Main.ObjLanguage,
                        ObjValidation: _Main.ObjValidation
                    }
                    new AZGridView(_AZGridViewOptions);
                }
                else
                {
                    _Main.InputTypeEvents();
                }
            }

            _Main.Validation = function ()
            {
                if (_Main.Options.azPageValidation === true)
                {
                    $.subscribeonce("functionlib/AZSetValidation", function (e, data)
                    {
                        _Main.GridView();
                    });
                    if (_Main.Options.azPageValidationUrl !== "")
                    {
                        _Main.JsonUrl = _Main.Options.azPageValidationUrl;
                    }
                    _Main.$Validation = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-val.json" });
                    _Main.$Validation.done(function (data, textStatus, jqXHR)
                    {
                        if (IsEmpty(data) === false && textStatus === "success")
                        {
                            _Main.ObjValidation = data;
                            var _AZSetValidationOptions =
                            {
                                $Area: _Main.ObjPageAttributes.$ObjAZForm,
                                ObjValidation: data
                            }
                            new AZSetValidation(_AZSetValidationOptions);
                        }
                        else
                        {
                            consoleLog({ consoleType: "error", consoleText: "AZPage - AZSetValidation is empty or missing some properties" });
                        }
                    });
                }
                else
                {
                    _Main.GridView();
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
                    if (_Main.Options.azPageLanguageUrl !== "")
                    {
                        _Main.JsonUrl = _Main.Options.azPageLanguageUrl;
                    }
                    _Main.$Language = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-lang.json" });
                    _Main.$Language.always(function (data, textStatus, jqXHR)
                    {
                        if (IsEmpty(data) === false && textStatus === "success")
                        {
                            var _AZSetLanguageOptions =
                            {
                                ObjPageLanguage: data,
                                DefaultLanguageFile: _Main.DefaultLanguageFile,
                                DefaultLanguage: _Main.DefaultLanguage
                            }
                            new AZSetLanguage(_AZSetLanguageOptions);
                        }
                        else
                        {
                            consoleLog({ consoleType: "error", consoleText: "AZPage - AZSetLanguage is empty or missing some properties" });
                        }
                    });
                }
                else
                {
                    _Main.Validation();
                }
            }

            if (IsEmpty(AZSettings) === false)
            {
                _Main.DefaultLanguageFile = AZSettings.DefaultLanguageFile;
                _Main.DefaultLanguage = clientStorage("get", "language", "");
                if (_Main.DefaultLanguage === null)
                {
                    _Main.DefaultLanguage = AZSettings.DefaultLanguage;
                }
                moment.locale(_Main.DefaultLanguage);
                var _LanguageCode = _Main.DefaultLanguage.split("-");
                numeral.locale(_LanguageCode[1].toLowerCase());
                clientStorage("set", "language", _Main.DefaultLanguage)

                if ((AZSettings.LanguageValidationFolder.match(new RegExp("/", "g")) || []).length > 1)
                {
                    _Main.JsonUrl = AZSettings.LanguageValidationFolder + "/" + _Main.ObjPageAttributes.PageFirstName;
                }
                else
                {
                    _Main.JsonUrl = AZSettings.LanguageValidationFolder + "/" + _Main.ObjPageAttributes.PageFirstName + "/lib/lang-val/" + _Main.ObjPageAttributes.PageFirstName;
                }
                _Main.Language();
            }
            else
            {
                consoleLog({ consoleType: "error", consoleText: "AZPage - AZSettings is empty or missing some properties" });
            }
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZPage - AZPageAttributes is empty or missing some properties" });
        }
        return ({});
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZPage - Missing instance of this" });
    }
}

// AZ Check Page Attributes
function AZCheckPageAttributes()
{
    if (this instanceof AZCheckPageAttributes === true)
    {
        var _Main = this;
        _Main.Attributes = 0;
        _Main.ObjPageAttributes = {};

        try
        {
            _Main.Location = window.document.location.hostname;
            _Main.PageName = window.document.location.href.split("/").slice(-1)[0];
            _Main.$ObjAZForm = (window.document.forms.length > 0) ? $(window.document.forms[0]) : "";

            if (_Main.PageName != "")
            {
                _Main.ObjPageAttributes.PageName = _Main.PageName;
                _Main.PageFirstName = _Main.ObjPageAttributes.PageName.split(".")[0];
                if (_Main.PageFirstName != "")
                {
                    _Main.ObjPageAttributes.PageFirstName = _Main.PageFirstName;
                    _Main.Attributes += 1;
                }
            }
            else
            {
                _Main.ObjPageAttributes.PageName = "index.html";
                _Main.ObjPageAttributes.PageFirstName = "index";
                _Main.Attributes += 1;
            }
            if (_Main.Location != "")
            {
                _Main.ObjPageAttributes.Location = _Main.Location;
                _Main.Attributes += 1;
            }
            if (IsEmpty(_Main.$ObjAZForm) === false)
            {
                _Main.ObjPageAttributes.$ObjAZForm = _Main.$ObjAZForm;
                _Main.Attributes += 1;
            }
            if (_Main.Attributes !== 3)
            {
                _Main.ObjPageAttributes = {};
            }
            return _Main.ObjPageAttributes;
        } catch (e)
        {
            return null;
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZCheckPageAttributes - Missing instance of this" });
    }
}

// AZ Get JSON
function AZGetJSON(Options)
{
    if (this instanceof AZGetJSON === true)
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
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZGetJSON - Missing instance of this" });
    }
}

// AZ Set Language
function AZSetLanguage(Options)
{
    if (this instanceof AZSetLanguage === true)
    {
        var _Main = this;

        if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjPageLanguage") && Options.hasOwnProperty("DefaultLanguageFile") && Options.hasOwnProperty("DefaultLanguage"))
        {
            _Main.ObjPageLanguage = Options.ObjPageLanguage;
            _Main.DefaultLanguageFile = Options.DefaultLanguageFile;
            _Main.DefaultLanguage = Options.DefaultLanguage;

            _Main.SetFullLanguage = function (ObjDefaultLanguage)
            {
                _Main.ObjLanguage =
                    {
                        ObjActiveLanguages: ObjDefaultLanguage.ActiveLanguages,
                        ObjNonLanguageElements: ObjDefaultLanguage.ObjNonLanguageElements,
                        SingleNonLanguageElements: ObjDefaultLanguage.SingleNonLanguageElements,
                        ObjDefaultElements: ObjDefaultLanguage.ObjDefaultElements[_Main.DefaultLanguage],
                        SingleDefaultElements: ObjDefaultLanguage.SingleDefaultElements[_Main.DefaultLanguage],
                        ObjElements: _Main.ObjPageLanguage.ObjElements[_Main.DefaultLanguage],
                        SingleElements: _Main.ObjPageLanguage.SingleElements[_Main.DefaultLanguage]
                    }
                $.publish("AZSetLanguage");
            }

            _Main.SetSingleLanguage = function ()
            {
                _Main.ObjLanguage =
                    {
                        ObjElements: _Main.ObjPageLanguage.ObjElements[_Main.DefaultLanguage],
                        SingleElements: _Main.ObjPageLanguage.SingleElements[_Main.DefaultLanguage]
                    }
                $.publish("AZSetLanguage");
                consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Missing default language file" });
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

            if (_Main.DefaultLanguageFile != "")
            {
                _Main.$DefaultLanguage = new AZGetJSON({ azJsonUrl: _Main.DefaultLanguageFile });
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
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Options is empty or missing some properties" });
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Missing instance of this" });
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
function AZSetValidation(Options)
{
    if (this instanceof AZSetValidation === true)
    {
        var _Main = this;

        if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjValidation"))
        {
            if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
            {
                _Main.$Area = Options.$Area;
            }
            else
            {
                _Main.$Area = "";
            }

            _Main.ObjValidation = Options.ObjValidation;

            $.each(_Main.ObjValidation, function (HtmlElement, ObjSubValidation)
            {
                $.each(ObjSubValidation, function (AttrType, AttrValue)
                {
                    if (AttrType.toLowerCase() == "label")
                    {
                        $("label[for='" + HtmlElement + "']", _Main.$Area).addClass(AttrValue);
                    }
                    else if (AttrType.toLowerCase() == "data-attr" || AttrType.toLowerCase() == "minlength" || AttrType.toLowerCase() == "maxlength" || AttrType.toLowerCase() == "tabindex")
                    {
                        if ($('#' + HtmlElement, _Main.$Area).length > 0)
                        {
                            $('#' + HtmlElement, _Main.$Area).attr(AttrType, AttrValue);
                        }
                        if ($('.' + HtmlElement, _Main.$Area).length > 0)
                        {
                            $('.' + HtmlElement, _Main.$Area).attr(AttrType, AttrValue);
                        }
                    }
                    else if (AttrType.toLowerCase() == "class")
                    {
                        if ($('#' + HtmlElement, _Main.$Area).length > 0)
                        {
                            $('#' + HtmlElement, _Main.$Area).addClass(AttrValue);
                        }
                        if ($('.' + HtmlElement, _Main.$Area).length > 0)
                        {
                            $('.' + HtmlElement, _Main.$Area).addClass(AttrValue);
                        }
                    }
                });
            });
            $.publish("functionlib/AZSetValidation");
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZSetValidation - Options is empty or missing some properties" });
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZSetValidation - Missing instance of this" });
    }
}

function AZSetInputTypeEvents()
{
    var _DefaultLanguage = clientStorage("get", "language", "");
    if (_DefaultLanguage === null)
    {
        _DefaultLanguage = AZSettings.DefaultLanguage;
    }
    var _DatePicker = false;
    var _ValidType = "";
    $(":input").each(function ()
    {
        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
        {
            _DatePicker = false;
            _ValidType = "";
            $(this).off("keyup", AZValidateDirtyKeyup).on("keyup", AZValidateDirtyKeyup);
            _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
                $(this).off("focusout", AZValidateInputValueFocusout).on("focusout", { ValidType: _ValidType }, AZValidateInputValueFocusout);
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
            if ($(this).hasClass("readonly") || $(this).hasClass("date") || $(this).hasClass("pastdate") || $(this).hasClass("nopastdate") || $(this).hasClass("fromdate") || $(this).hasClass("todate") || $(this).hasClass("frompastdate") || $(this).hasClass("topastdate") || $(this).hasClass("fromnopastdate") || $(this).hasClass("tonopastdate"))
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
            $(this).off("change", AZValidateDirtyKeyup).on("change", AZValidateDirtyKeyup);
        }
        if ($(this).is("textarea"))
        {
            $(this).off("keyup", AZValidateDirtyKeyup).on("keyup", AZValidateDirtyKeyup);
            _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
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
        }
        if ($(this).is("[type='checkbox']"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
            if ($(this).hasClass("disabled"))
            {
                $(this).attr("disabled", true);
            }
        }
        if ($(this).is("[type='radio']"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
            if ($(this).hasClass("disabled"))
            {
                $(this).attr("disabled", true);
            }
        }
        if ($(this).is("select"))
        {
            $(this).off("change", AZValidateDirtyKeyup).on("change", AZValidateDirtyKeyup);
            if ($(this).hasClass("readonly"))
            {
                $(this).attr("readOnly", true);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).attr("disabled", true);
            }
        }
        //if ($(this).is("button"))
        //{
        //    $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
        //}
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
    if (typeof AZValidateDirty == "function")
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

function AZValidateInputValueFocusout(e)
{
    var _Element = e.target || e.srcElement;
    var _CurrentValidType = e.data.ValidType[0];
    var _CurrentInputValue = $(_Element).val();
    var _DefaultLanguage = clientStorage("get", "language", "");
    if (_DefaultLanguage === null)
    {
        _DefaultLanguage = AZSettings.DefaultLanguage;
    }

    if (_CurrentValidType === "validate-decimal")
    {
        $(_Element).val(numeral($(_Element).val()).format('0,0.00'));

        if (_CurrentInputValue != "" && IsValidDecimal(_DefaultLanguage, _CurrentInputValue) === false)
        {
        }
    }

    function IsValidDecimal(DefaultLanguage, Float)
    {
        var _RegExp = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
        if (DefaultLanguage === "nb-NO")
        {
            var _RegExp = /^\s*(\+|-)?((\d+(\,\d+)?)|(\,\d+))\s*$/;
        }
        return _RegExp.test(Float);
    }
}

function AZGetValidType(SelectedType)
{
    var _DefaultLanguage = clientStorage("get", "language", "");
    if (_DefaultLanguage === null)
    {
        _DefaultLanguage = AZSettings.DefaultLanguage;
    }
    var _ValidTypes = {};
    if (_DefaultLanguage === "nb-NO")
    {
        _ValidTypes =
            {
                "validate-alpha": "1234567890abcdefghijklmnopqrstuvwxyzæøå!@#%&()?*+-_,;.:/\u0020\u0027\u000a",
                "validate-numeric": "1234567890",
                "validate-decimal": "1234567890,",
                "validate-date": "1234567890./",
                "validate-time": "1234567890:",
                "validate-datetime": "1234567890./:\u0020",
                "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
                "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz-_.:/",
                "validate-userpass": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
                "validate-connectionid": "abcdefghijklmnopqrstuvwxyz"
            }
    }
    else
    {
        _ValidTypes =
            {
                "validate-alpha": "1234567890abcdefghijklmnopqrstuvwxyzæøå!@#%&()?*+-_,;.:/\u0020\u0027\u000a",
                "validate-numeric": "1234567890",
                "validate-decimal": "1234567890.",
                "validate-date": "1234567890./",
                "validate-time": "1234567890:",
                "validate-datetime": "1234567890./:\u0020",
                "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
                "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz-_.:/",
                "validate-userpass": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
                "validate-connectionid": "abcdefghijklmnopqrstuvwxyz"
            }
    }
    return _ValidTypes[SelectedType];
}

// Empty
// InvalidChar
// MaxLength
// MinLength
// Date
// Email
// Web
// Float

function AZSerializeForm(Options)
{
    if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjLanguage") && Options.hasOwnProperty("ObjValidation"))
    {
        var _InputError = false;
        var _$Input = {};
        var _ObjCurrentValidation = {};
        var _ObjReturnValidation = {};
        var _ObjOutputData = {};

        $.each(Options.ObjValidation, function (HTMLElement, Value)
        {
            if ($('#' + HTMLElement).length > 0 && Value.class.indexOf("validate") > -1)
            {
                _$Input = $('#' + HTMLElement);
                _ObjCurrentValidation = Value;

                if (_ObjCurrentValidation.datatype.toLowerCase() === "int")
                {
                    _ObjOutputData[_$Input.attr("id")] = Number(_$Input.val());
                }
                else if (_ObjCurrentValidation.datatype.toLowerCase() === "decimal")
                {
                    _ObjOutputData[_$Input.attr("id")] = parseFloat(_$Input.val());
                }
                else if (_ObjCurrentValidation.datatype.toLowerCase() === "date")
                {
                    if (_$Input.val().replace(/^\s+|\s+$/g, '') !== "")
                    {
                        _ObjOutputData[_$Input.attr("id")] = moment(_$Input.datepicker("getDate")).format('MM/DD/YYYY');
                    }
                    else
                    {
                        _ObjOutputData[_$Input.attr("id")] = null;
                    }
                }
                else
                {
                    _ObjOutputData[_$Input.attr("id")] = encodeURIComponent(_$Input.val());
                }

                _ObjReturnValidation = AZValidateInput(_$Input, _ObjCurrentValidation);
                if (IsEmpty(_ObjReturnValidation) === false)
                {
                    _ObjReturnValidation.Input = _$Input.attr("id");
                    consoleLog({ consoleType: "warn", consoleText: "AZSerializeForm - " + _ObjReturnValidation.Input + " - " + _ObjReturnValidation.Error });
                    if ($(".az-alert-active").length === 0)
                    {
                        var _$RoleAlert = $("[role='alert']");
                        var _$UIDialog = window.top.$(".ui-dialog");
                        var _$Window = $("#az-window");

                        if (_$RoleAlert.length > 0)
                        {
                            var _CurrentText = _$RoleAlert.text();
                            _$RoleAlert.text(Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error]).removeClass("az-alert-info").addClass("az-alert-danger").show();
                            _$Input.focus();
                            $("body").addClass("az-alert-active");
                            window.setTimeout(function ()
                            {
                                _$RoleAlert.text(_CurrentText).removeClass("az-alert-danger").addClass("az-alert-info").show();
                                $("body").removeClass("az-alert-active");
                            }, 3000);
                        }
                        else if (_$UIDialog.length > 0)
                        {
                            var _$NewUIDialogTitlebar = $('<div></div>').addClass("ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle").css({ "background-color": "#FF4136 ", "color": "#FFFFFF" });
                            _$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error] + '</span>');
                            _$UIDialog.children(".ui-dialog-titlebar").hide();
                            _$UIDialog.prepend(_$NewUIDialogTitlebar);
                            _$Input.focus();
                            $("body").addClass("az-alert-active");
                            window.setTimeout(function ()
                            {
                                _$NewUIDialogTitlebar.remove();
                                _$UIDialog.children(".ui-dialog-titlebar").show();
                                $("body").removeClass("az-alert-active");
                            }, 3000);
                        }
                        else if (_$Window.length > 0)
                        {
                            var _$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error] + "</h1>").css({ "background-color": "#FF4136", "color": "#FFFFFF" });
                            _$Window.children(".az-window-titlebar").hide();
                            _$Window.prepend(_$NewTitlebar);
                            _$Input.focus();
                            $("body").addClass("az-alert-active");
                            window.setTimeout(function ()
                            {
                                _$NewTitlebar.remove();
                                _$Window.children(".az-window-titlebar").show();
                                $("body").removeClass("az-alert-active");
                            }, 3000);
                        }
                        else
                        {
                            $("body").addClass("az-alert-active");
                            $.subscribeonce("functionlib/azWindowAfterClose", function (e)
                            {
                                _$Input.focus();
                                $("body").removeClass("az-alert-active");
                            });
                            new AZWindow(
                                {
                                    azWindowTitle: Options.ObjLanguage.SingleDefaultElements.informationTitle,
                                    azWindowText: Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error]
                                });
                        }
                    }
                    _InputError = true;
                    return false;
                }
            }
        });
        if (_InputError === false)
        {
            return _ObjOutputData;
        }
        else
        {
            return null;
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZSerializeForm - Options is empty or missing some properties" });
    }
}

function AZValidateInput($Input, ObjCurrentValidation)
{
    var _ObjReturnValidation = {};
    var _CurrentInputType = GetCurrentInputType($Input);
    var _CurrentValidType = ObjCurrentValidation.class.match(/[\w-]*validate-[\w-]*/g)[0].toLowerCase();
    var _CurrentInputValue = "";
    var _CurrentValidChar = "";
    var _ListChar = [];

    if (_CurrentInputType == "input")
    {
        _CurrentInputValue = $Input.val().replace(/^\s+|\s+$/g, '');
        if (ObjCurrentValidation.label.toLowerCase() === "mandatory" && _CurrentInputValue === "")
        {
            _ObjReturnValidation.Error = "Empty";
        }
        else if ((ObjCurrentValidation.label.toLowerCase() === "mandatory" || ObjCurrentValidation.label.toLowerCase() === "optional") && _CurrentInputValue !== "")
        {
            _CurrentValidChar = AZGetValidType(_CurrentValidType);
            for (var i = 0; i < _CurrentInputValue.length; i++)
            {
                if (_CurrentValidChar.indexOf(_CurrentInputValue.charAt(i).toLowerCase()) == -1)
                {
                    _ListChar.push(_CurrentInputValue.charAt(i));
                }
            }
            if (_ListChar.length > 0)
            {
                _ObjReturnValidation.Error = "InvalidChar";
                $.publish("functionlib/azValidateInputValidChar",
                    {
                        azInputId: $Input.attr("id"),
                        azInputValidType: _CurrentValidType,
                        azInputKey: _ListChar.join(),
                        azInputJQElement: $Input
                    });
            }
            else
            {
                if (ObjCurrentValidation.datatype.toLowerCase() == "date" && isNaN(new Date($Input.datepicker("getDate"))))
                {
                    _ObjReturnValidation.Error = "Date";
                }
                if (_CurrentValidType === "validate-time" && AZCheckDateTimeFormat('01/01/1900 ' + _CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Time";
                }
                if (_CurrentValidType === "validate-decimal" && AZIsValidDecimal(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Decimal";
                }
                if (_CurrentValidType === "validate-email" && AZIsValidEmail(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Email";
                }
                if (_CurrentValidType === "validate-web" && AZIsValidURL(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Web";
                }
                if (ObjCurrentValidation.hasOwnProperty("maxlength") === true && _CurrentInputValue.length > ObjCurrentValidation.maxlength)
                {
                    _ObjReturnValidation.Error = "MaxLength";
                }
                if (ObjCurrentValidation.hasOwnProperty("minlength") === true && _CurrentInputValue.length < ObjCurrentValidation.minlength)
                {
                    _ObjReturnValidation.Error = "MinLength";
                }
            }
        }
    }
    else if (_CurrentInputType === "select" && ObjCurrentValidation.label.toLowerCase() === "mandatory")
    {
        if ($Input.val() == "" || $Input.val() == null || $Input.val() == undefined || $Input.val() == "0")
        {
            _ObjReturnValidation.Error = "Empty";
        }
    }
    return _ObjReturnValidation;

    function GetCurrentInputType($Input)
    {
        if ($Input.is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color'], textarea"))
        {
            return "input";
        }
        else if ($Input.is("select"))
        {
            return "select";
        }
    }
}

function AZPopulateForm(Options)
{
    if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjInputData") && Options.hasOwnProperty("ObjValidation"))
    {
        if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
        }
        else
        {
            _$Area = "";
        }

        var _$Input = {};
        var _DataAttr = "";
        var _ObjCurrentValidation = {};

        $.each(Options.ObjInputData, function (HTMLElement, Value)
        {
            _$Input = {};
            _DataAttr = "";
            _ObjCurrentValidation = {};

            if ($('#' + HTMLElement, _$Area).length > 0 && $('#' + HTMLElement, _$Area).attr("data-attr") !== undefined)
            {
                _$Input = $('#' + HTMLElement, _$Area);
            }
            else if ($('.' + HTMLElement, _$Area).length > 0 && $('.' + HTMLElement, _$Area).attr("data-attr") !== undefined)
            {
                _$Input = $('.' + HTMLElement, _$Area);
            }

            if (IsEmpty(_$Input) === false)
            {
                _DataAttr = _$Input.attr("data-attr");
                _ObjCurrentValidation = Options.ObjValidation[_$Input.attr("id")]

                if (_ObjCurrentValidation.datatype === "date")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Input[_DataAttr](moment(Value).format('L'));
                    }
                }
                else if (_ObjCurrentValidation.datatype === "datetime")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Input[_DataAttr](moment(Value).format('L') + " " + moment(Value).format('LT'));
                    }
                    else
                    {
                        _$Input[_DataAttr](0);
                    }
                }
                else if (_ObjCurrentValidation.datatype === "time")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Input[_DataAttr](moment('01/01/1900 ' + Value).format('HH:mm'));
                    }
                    else
                    {
                        _$Input[_DataAttr](0);
                    }
                }
                else
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Input[_DataAttr](Value);
                    }
                    else if (Value == null)
                    {
                        _$Input[_DataAttr](0);
                    }
                }
            }
        });
        $.publish("functionlib/AZPopulateForm");
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZPopulateForm - Options is empty or missing some properties" });
    }
}

function AZIsValidDecimal(Float)
{
    var _RegExp = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
    return _RegExp.test(Float);
}

function AZIsValidEmail(Email)
{
    var _RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
    return _RegExp.test(Email);
}

function AZIsValidURL(URL)
{
    var _RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    return _RegExp.test(URL);
}

function AZCheckDateTimeFormat(DateTime)
{
    if (moment(DateTime).isValid() === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function AZStandardAlert(Options)
{
    if (this instanceof AZStandardAlert === true)
    {
        var _Main = this;

        if (IsEmpty(Options) === false)
        {
            if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
            {
                _Main.$Area = Options.$Area;
            }
            else
            {
                _Main.$Area = "";
            }

            _Main.Title = Options.Title;
            _Main.Text = Options.Text;

            if ($(".az-alert-active").length === 0)
            {
                var _$RoleAlert = $("[role='alert']", _Main.$Area);
                var _$UIDialog = window.top.$(".ui-dialog");
                var _$Window = $("#az-window");

                if (_$RoleAlert.length > 0)
                {
                    var _CurrentText = _$RoleAlert.text();
                    _$RoleAlert.text(_Main.Text).removeClass("az-alert-info").addClass("az-alert-danger").show();
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$RoleAlert.text(_CurrentText).removeClass("az-alert-danger").addClass("az-alert-info").show();
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else if (_$UIDialog.length > 0)
                {
                    var _$NewUIDialogTitlebar = $('<div></div>').addClass("ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle").css({ "background-color": "#FF4136 ", "color": "#FFFFFF" });
                    _$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + _Main.Text + '</span>');
                    _$UIDialog.children(".ui-dialog-titlebar").hide();
                    _$UIDialog.prepend(_$NewUIDialogTitlebar);
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$NewUIDialogTitlebar.remove();
                        _$UIDialog.children(".ui-dialog-titlebar").show();
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else if (_$Window.length > 0)
                {
                    var _$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Text + "</h1>").css({ "background-color": "#FF4136", "color": "#FFFFFF" });
                    _$Window.children(".az-window-titlebar").hide();
                    _$Window.prepend(_$NewTitlebar);
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$NewTitlebar.remove();
                        _$Window.children(".az-window-titlebar").show();
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else
                {
                    $("body").addClass("az-alert-active");
                    $.subscribeonce("functionlib/azWindowAfterClose", function (e)
                    {
                        $("body").removeClass("az-alert-active");
                    });
                    new AZWindow(
                        {
                            azWindowTitle: _Main.Title,
                            azWindowText: _Main.Text
                        });
                }
            }
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZStandardAlert - Options is empty or missing some properties" });
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZStandardAlert - Missing instance of this" });
    }
}

function AZGridView(Options)
{
    if (this instanceof AZGridView === true)
    {
        var _Main = this;

        if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjLanguage") && Options.hasOwnProperty("ObjValidation"))
        {
            if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
            {
                _Main.$Area = Options.$Area;
            }
            else
            {
                _Main.$Area = "";
            }

            _Main.ObjLanguage = Options.ObjLanguage;
            _Main.ObjValidation = Options.ObjValidation;

            var _$Header = "";
            $(".HeaderStyle > th", _Main.$Area).each(function (index) 
            {
                _$Header = $(this);
                if (_Main.ObjValidation.hasOwnProperty($("a", _$Header).text()) && _Main.ObjValidation[$("a", _$Header).text()].sort == true)
                {
                    $("a", _$Header).text(_Main.ObjLanguage.SingleElements["labelHeader" + $("a", _$Header).text()]);
                }
                else
                {
                    _$Header.text(_Main.ObjLanguage.SingleElements["labelHeader" + $("a", _$Header).text()]);
                }
            });

            var _ObjJsonReturn = {};
            var _ObjSpanCheckBox = {};
            var _ObjCheckBox = {};
            $(".RowStyle > td, .AlternatingRowStyle > td", _Main.$Area).each(function (index)
            {
                _ObjJsonReturn = getSelectedObj(_Main.ObjValidation, "tabindex", $(this).index());
                if (_ObjJsonReturn.datatype === "date")
                {
                    $(this).text(moment($(this).text()).format('L'));
                }
                else if (_ObjJsonReturn.datatype === "datetime")
                {
                    $(this).text(moment($(this).text()).format('L') + " - " + moment($(this).text()).format('LT'));
                }
                else if (_ObjJsonReturn.datatype === "time")
                {
                    $(this).text(moment('01/01/1900 ' + $(this).text()).format('LT'));
                }
                else if (_ObjJsonReturn.datatype === "militarytime")
                {
                    $(this).text(moment('01/01/1900 ' + $(this).text()).format('HH:mm'));
                }
                else if (_ObjJsonReturn.datatype === "decimal")
                {
                    $(this).text(numeral($(this).text()).format('0.00'));
                }
                else if (_ObjJsonReturn.datatype === "bytes")
                {
                    $(this).text(bytesToSize($(this).text()));
                }
                else if (_ObjJsonReturn.datatype === "int")
                {
                    $(this).text(_Main.ObjLanguage.SingleElements["labelRow" + $(this).text()]);
                }
                if ($(this).children().is("span") === true)
                {
                    _ObjSpanCheckBox = $(this).children();
                    _ObjCheckBox = _ObjSpanCheckBox.find(":input");
                    if (_ObjCheckBox.is(":input") === true)
                    {
                        _ObjCheckBox.attr("id", _ObjSpanCheckBox.attr("data-id"));
                        _ObjCheckBox.addClass("az-checkbox");
                    }
                }
            });
            $(window).one("beforeunload", function (e) { AZShowCoverSpin() });
            $.publish("functionlib/AZGridView");
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZGridView - Options is empty or missing some properties" });
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZGridView - Missing instance of this" });
    }
}

function setCheckbox()
{
    var $chkboxes = $('.az-checkbox');
    var lastChecked = null;
    $chkboxes.click(function (e) 
    {
        if (!lastChecked) 
        {
            lastChecked = this;
            return;
        }
        if (e.shiftKey)
        {
            var start = $chkboxes.index(this);
            var end = $chkboxes.index(lastChecked);
            $chkboxes.slice(Math.min(start, end), Math.max(start, end) + 1).prop('checked', lastChecked.checked);
        }
        lastChecked = this;
    });
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
    if (AZSettings.DebugMode === true)
    {
        console[_Options.consoleType](_Options.consoleText);
    }
}