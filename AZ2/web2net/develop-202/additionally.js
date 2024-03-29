﻿// AZ-2.0 Additionally | (c) web2net AS

var AZSettings =
{
    LanguageValidationFolder: "/admin",
    DefaultLanguageFile: "/lib-2/admin/index/lib/lang-val/default-lang.json",
    DefaultLanguage: "nb-NO",
    DebugMode: true,
    AppName: "AZ Team",
    AppVersion: "1.0.0",
    ApiVersion: "_1"
};

var ObjPageData = {};
ObjPageData.Elements = {};
ObjPageData.Values = {};

$(document).ready(function ()
{
    if (typeof SetAZPage == "function")
    {
        SetAZPage();
    }

    // AZ Input Keypress Validation
    $.subscribe("functionlib/azValidateInputValueKeypress", function (e, data)
    {
        var _AZStandardAlertOptions =
        {
            $Area: ObjPageData.Values.AZPage.$Form,
            Title: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.invalidCharacterTitle,
            Text: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.invalidCharacterText + " " + data.azInputInvalidChar,
            InputJQElement: data.azInputJQElement
        };
        new AZStandardAlert(_AZStandardAlertOptions);
    });

    $.subscribe("functionlib/azValidateInputValidChar", function (e, data)
    {
        var _AZStandardAlertOptions =
        {
            $Area: ObjPageData.Values.AZPage.$Form,
            Title: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.invalidCharacterTitle,
            Text: ObjPageData.Values.AZPage.ObjLanguage.SingleDefaultElements.invalidCharacterText + " " + data.azInputInvalidChar,
            InputJQElement: data.azInputJQElement
        };
        new AZStandardAlert(_AZStandardAlertOptions);
    });
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
            azPageElement: [],
            azPageInputTypeEvents: false,
            azPageLanguage: false,
            azPageLanguageUrl: "",
            azPageValidation: false,
            azPageValidationUrl: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        _Main.ObjPageAttributes = {};
        _Main.ObjLanguage = {};
        _Main.ObjValidation = {};
        _Main.JsonUrl = "";
        _Main.DefaultLanguageFile = "";
        _Main.DefaultLanguage = "";

        _Main.ObjPageAttributes = new AZCheckPageAttributes();
        if (AZIsEmpty(_Main.ObjPageAttributes) === false)
        {
            _Main.ObjPageAttributes.$AZFormObj = (window.document.forms.length > 0) ? $(window.document.forms[0]) : {};
            if (AZIsEmpty(_Main.Options.azPageArea) === false)
            {
                _Main.ObjPageAttributes.$AZFormObj = _Main.Options.azPageArea;
            }
            if (AZIsEmpty(_Main.ObjPageAttributes.$AZFormObj) === false)
            {
                AZSetPageElement(_Main.Options.azPageElement);
                _Main.InputTypeEvents = function ()
                {
                    if (_Main.Options.azPageInputTypeEvents === true)
                    {
                        $.subscribeonce("functionlib/AZSetInputTypeEvents", function (e, data)
                        {
                            $.publish("functionlib/AZPage",
                                {
                                    $Form: _Main.ObjPageAttributes.$AZFormObj,
                                    Location: _Main.ObjPageAttributes.Location,
                                    PageName: _Main.ObjPageAttributes.PageName,
                                    PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                                    Language: _Main.DefaultLanguage,
                                    ObjLanguage: _Main.ObjLanguage,
                                    ObjValidation: _Main.ObjValidation,
                                    AppName: AZSettings.AppName,
                                    AppVersion: AZSettings.AppVersion,
                                    ApiVersion: AZSettings.ApiVersion,
                                    AZSettings: AZSettings
                                });
                        });
                        AZSetInputTypeEvents();
                    }
                    else
                    {
                        $.publish("functionlib/AZPage",
                            {
                                $Form: _Main.ObjPageAttributes.$AZFormObj,
                                Location: _Main.ObjPageAttributes.Location,
                                PageName: _Main.ObjPageAttributes.PageName,
                                PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                                Language: _Main.DefaultLanguage,
                                ObjLanguage: _Main.ObjLanguage,
                                ObjValidation: _Main.ObjValidation,
                                AppName: AZSettings.AppName,
                                AppVersion: AZSettings.AppVersion,
                                ApiVersion: AZSettings.ApiVersion,
                                AZSettings: AZSettings
                            });
                    }
                };

                _Main.Validation = function ()
                {
                    if (_Main.Options.azPageValidation === true)
                    {
                        $.subscribeonce("functionlib/AZSetValidation", function (e, data)
                        {
                            _Main.InputTypeEvents();
                        });
                        if (_Main.Options.azPageValidationUrl !== "")
                        {
                            _Main.JsonUrl = _Main.Options.azPageValidationUrl;
                        }
                        _Main.$Validation = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-val.json" });
                        _Main.$Validation.done(function (data, textStatus, jqXHR)
                        {
                            if (textStatus === "success")
                            {
                                _Main.ObjValidation = data;
                                var _AZSetValidationOptions =
                                {
                                    $Area: _Main.ObjPageAttributes.$AZFormObj,
                                    ObjValidation: data
                                };
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
                        _Main.InputTypeEvents();
                    }
                };

                _Main.Language = function ()
                {
                    if (_Main.Options.azPageLanguage === true)
                    {
                        $.subscribeonce("functionlib/AZSetLanguage", function (e, data)
                        {
                            _Main.ObjLanguage = data;
                            _Main.Validation();
                        });
                        if (_Main.Options.azPageLanguageUrl != "")
                        {
                            _Main.JsonUrl = _Main.Options.azPageLanguageUrl;
                        }
                        _Main.$Language = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-lang.json" });
                        _Main.$Language.always(function (data, textStatus, jqXHR)
                        {
                            if (AZIsEmpty(data) === false && textStatus === "success")
                            {
                                var _AZSetLanguageOptions =
                                {
                                    ObjPageLanguage: data,
                                    DefaultLanguageFile: _Main.DefaultLanguageFile,
                                    DefaultLanguage: _Main.DefaultLanguage
                                };
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
                };

                if (AZIsEmpty(AZSettings) === false)
                {
                    _Main.DefaultLanguageFile = AZSettings.DefaultLanguageFile;
                    _Main.DefaultLanguage = AZClientStorage("get", "language");
                    if (_Main.DefaultLanguage == "")
                    {
                        _Main.DefaultLanguage = AZSettings.DefaultLanguage;
                    }
                    moment.locale(_Main.DefaultLanguage);
                    var _LanguageCode = _Main.DefaultLanguage.split("-");
                    numeral.locale(_LanguageCode[0].toLowerCase());
                    AZClientStorage("set", "language", _Main.DefaultLanguage);
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
                consoleLog({ consoleType: "error", consoleText: "AZPage - AZForm is missing" });
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
        return new AZPage(Options);
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
            _Main.PageName = _Main.PageName.split("?")[0];

            if (AZIsNullOrEmpty(_Main.PageName) === false)
            {
                _Main.ObjPageAttributes.PageName = _Main.PageName;
                _Main.PageFirstName = _Main.ObjPageAttributes.PageName.split(".")[0];
                if (AZIsNullOrEmpty(_Main.PageFirstName) === false)
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
            if (AZIsNullOrEmpty(_Main.Location) === false)
            {
                _Main.ObjPageAttributes.Location = _Main.Location;
                _Main.Attributes += 1;
            }
            if (_Main.Attributes !== 2)
            {
                _Main.ObjPageAttributes = {};
            }
            return _Main.ObjPageAttributes;
        }
        catch (e)
        {
            return null;
        }
    }
    else
    {
        return new AZCheckPageAttributes();
    }
}

function AZSetPageElement(List)
{
    if (AZIsNullOrEmpty(List) === false && List.length > 0)
    {
        $.each(List, function (Index, Obj)
        {
            if ($("#" + Obj).length > 0)
            {
                ObjPageData.Elements["$" + Obj] = $("#" + Obj);
            }
            if ($("." + Obj).length > 0)
            {
                ObjPageData.Elements["$" + Obj] = $("." + Obj);
            }
        });
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZSetPageElement - Missing array" });
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
        if (AZIsNullOrEmpty(_Main.Options.azJsonUrl) === false)
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
        return new AZGetJSON(Options);
    }
}

// AZ Set Language
function AZSetLanguage(Options)
{
    if (this instanceof AZSetLanguage === true)
    {
        var _Main = this;

        if (AZIsEmpty(Options) === false)
        {
            if (Options.hasOwnProperty("ObjPageLanguage") && Options.hasOwnProperty("DefaultLanguageFile") && Options.hasOwnProperty("DefaultLanguage"))
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
                    };
                    $.publish("AZSetLanguage");
                };

                _Main.SetSingleLanguage = function ()
                {
                    _Main.ObjLanguage =
                    {
                        ObjElements: _Main.ObjPageLanguage.ObjElements[_Main.DefaultLanguage],
                        SingleElements: _Main.ObjPageLanguage.SingleElements[_Main.DefaultLanguage]
                    };
                    $.publish("AZSetLanguage");
                    consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Missing default language file" });
                };

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
                        if (AZIsEmpty(data) === false && textStatus == "success")
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
            else if (Options.hasOwnProperty("ObjLanguage") && AZIsEmpty(Options.ObjLanguage) === false)
            {
                _Main.$Area = "";
                if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
                {
                    _Main.$Area = Options.$Area;
                }
                _Main.ObjFormLanguageOptions =
                {
                    $Area: _Main.$Area
                };
                if (Options.ObjLanguage.hasOwnProperty("ObjElements") && AZIsEmpty(Options.ObjLanguage.ObjElements) === false)
                {
                    _Main.ObjFormLanguageOptions.ObjElements = Options.ObjLanguage.ObjElements;
                }
                else
                {
                    _Main.ObjFormLanguageOptions.ObjElements = [Options.ObjLanguage];
                }
                AZSetFormLanguage(_Main.ObjFormLanguageOptions);
            }
            else
            {
                consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Options is empty or missing some properties" });
            }
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - Options is empty or missing some properties" });
        }
    }
    else
    {
        return new AZSetLanguage(Options);
    }
}

// AZ Set Form Language
function AZSetFormLanguage(Options)
{
    if (AZIsEmpty(Options) === false)
    {
        var _$Area = "";
        if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
        }

        var _ObjElements = Options;
        if (Options.hasOwnProperty("ObjElements") && AZIsEmpty(Options.ObjElements) === false)
        {
            _ObjElements = Options.ObjElements;
        }

        $.each(_ObjElements, function (Key, Value)
        {
            $.each(Value, function (Key, Value)
            {
                if (Value.length == 2)
                {
                    if (Value[0] == "html")
                    {
                        $('#' + Key, _$Area).html('');
                        $('#' + Key, _$Area).html(Value[1]);
                    }
                    else if (Value[0] == "text")
                    {
                        $('#' + Key, _$Area).text('');
                        $('#' + Key, _$Area).text(Value[1]);
                    }
                    else if (Value[0] == "val")
                    {
                        $('#' + Key, _$Area).val('');
                        $('#' + Key, _$Area).val(Value[1]);
                    }
                    else if (Value[0] == "cmdlbl")
                    {
                        $('#' + Key, _$Area).button({ label: "" });
                        $('#' + Key, _$Area).button({ label: "" + Value[1] + "" });
                    }
                    else if (Value[0] == "title")
                    {
                        $('#' + Key, _$Area).prop("title", "");
                        $('#' + Key, _$Area).prop("title", Value[1]);
                    }
                    else if (Value[0] == "placeholder")
                    {
                        $('#' + Key, _$Area).prop("placeholder", "");
                        $('#' + Key, _$Area).prop("placeholder", Value[1]);
                    }
                    else if (Value[0] == "htmlembedded")
                    {
                        var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                        $('#' + Key, _$Area).html('');
                        $('#' + Key, _$Area).html(Value[1]);
                        if (_FirstChildElement.length > 0)
                        {
                            $('#' + Key, _$Area).prepend(_FirstChildElement);
                        }
                    }
                    else if (Value[0] == "htmlembedded-left")
                    {
                        var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                        $('#' + Key, _$Area).html('');
                        $('#' + Key, _$Area).html(Value[1]);
                        if (_FirstChildElement.length > 0)
                        {
                            $('#' + Key, _$Area).prepend(_FirstChildElement);
                        }
                    }
                    else if (Value[0] == "htmlembedded-right")
                    {
                        var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                        $('#' + Key, _$Area).html('');
                        $('#' + Key, _$Area).html(Value[1]);
                        if (_FirstChildElement.length > 0)
                        {
                            $('#' + Key, _$Area).append(_FirstChildElement);
                        }
                    }
                }
                else if (Value.length == 3)
                {
                    if (Value[0] == "id")
                    {
                        if (Value[1] == "html")
                        {
                            $('#' + Key, _$Area).html('');
                            $('#' + Key, _$Area).html(Value[2]);
                        }
                        else if (Value[1] == "text")
                        {
                            $('#' + Key, _$Area).text('');
                            $('#' + Key, _$Area).text(Value[2]);
                        }
                        else if (Value[1] == "val")
                        {
                            $('#' + Key, _$Area).val('');
                            $('#' + Key, _$Area).val(Value[2]);
                        }
                        else if (Value[1] == "cmdlbl")
                        {
                            $('#' + Key, _$Area).button({ label: "" });
                            $('#' + Key, _$Area).button({ label: "" + Value[2] + "" });
                        }
                        else if (Value[1] == "title")
                        {
                            $('#' + Key, _$Area).prop("title", "");
                            $('#' + Key, _$Area).prop("title", Value[2]);
                        }
                        else if (Value[1] == "placeholder")
                        {
                            $('#' + Key, _$Area).prop("placeholder", "");
                            $('#' + Key, _$Area).prop("placeholder", Value[2]);
                        }
                        else if (Value[1] == "htmlembedded")
                        {
                            var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                            $('#' + Key, _$Area).html('');
                            $('#' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('#' + Key, _$Area).prepend(_FirstChildElement);
                            }
                        }
                        else if (Value[1] == "htmlembedded-left")
                        {
                            var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                            $('#' + Key, _$Area).html('');
                            $('#' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('#' + Key, _$Area).prepend(_FirstChildElement);
                            }
                        }
                        else if (Value[1] == "htmlembedded-right")
                        {
                            var _FirstChildElement = $('#' + Key + '>:first', _$Area);
                            $('#' + Key, _$Area).html('');
                            $('#' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('#' + Key, _$Area).append(_FirstChildElement);
                            }
                        }
                    }
                    else if (Value[0] == "class")
                    {
                        if (Value[1] == "html")
                        {
                            $('.' + Key, _$Area).html('');
                            $('.' + Key, _$Area).html(Value[2]);
                        }
                        else if (Value[1] == "text")
                        {
                            $('.' + Key, _$Area).text('');
                            $('.' + Key, _$Area).text(Value[2]);
                        }
                        else if (Value[1] == "val")
                        {
                            $('.' + Key, _$Area).val('');
                            $('.' + Key, _$Area).val(Value[2]);
                        }
                        else if (Value[1] == "cmdlbl")
                        {
                            $('.' + Key, _$Area).button({ label: "" });
                            $('.' + Key, _$Area).button({ label: "" + Value[2] + "" });
                        }
                        else if (Value[1] == "title")
                        {
                            $('.' + Key, _$Area).prop("title", "");
                            $('.' + Key, _$Area).prop("title", Value[2]);
                        }
                        else if (Value[1] == "placeholder")
                        {
                            $('.' + Key, _$Area).prop("placeholder", "");
                            $('.' + Key, _$Area).prop("placeholder", Value[2]);
                        }
                        else if (Value[1] == "htmlembedded")
                        {
                            var _FirstChildElement = $('.' + Key + '>:first', _$Area);
                            $('.' + Key, _$Area).html('');
                            $('.' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('.' + Key, _$Area).prepend(_FirstChildElement);
                            }
                        }
                        else if (Value[1] == "htmlembedded-left")
                        {
                            var _FirstChildElement = $('.' + Key + '>:first', _$Area);
                            $('.' + Key, _$Area).html('');
                            $('.' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('.' + Key, _$Area).prepend(_FirstChildElement);
                            }
                        }
                        else if (Value[1] == "htmlembedded-right")
                        {
                            var _FirstChildElement = $('.' + Key + '>:first', _$Area);
                            $('.' + Key, _$Area).html('');
                            $('.' + Key, _$Area).html(Value[2]);
                            if (_FirstChildElement.length > 0)
                            {
                                $('.' + Key, _$Area).append(_FirstChildElement);
                            }
                        }
                    }
                }
            });
        });
    }
    $.publish("functionlib/AZSetFormLanguage");
}

// AZ Set Validation
function AZSetValidation(Options)
{
    if (this instanceof AZSetValidation === true)
    {
        var _Main = this;
        if (AZIsEmpty(Options) === false && Options.hasOwnProperty("ObjValidation"))
        {
            _Main.$Area = "";
            if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
            {
                _Main.$Area = Options.$Area;
            }

            _Main.ObjValidation = Options.ObjValidation;

            $.each(_Main.ObjValidation, function (HtmlElement, ObjSubValidation)
            {
                $.each(ObjSubValidation, function (AttrType, AttrValue)
                {
                    if (AttrType.toLowerCase() === "label")
                    {
                        $("label[for='" + HtmlElement + "']", _Main.$Area).addClass(AttrValue);
                    }
                    else if (AttrType.toLowerCase() === "data-attr" || AttrType.toLowerCase() === "minlength" || AttrType.toLowerCase() === "maxlength" || AttrType.toLowerCase() === "tabindex")
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
                    else if (AttrType.toLowerCase() === "class")
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
        return new AZSetValidation(Options);
    }
}

function AZSetInputTypeEvents()
{
    var _DefaultLanguage = AZClientStorage("get", "language", "");
    if (typeof _DefaultLanguage == "")
    {
        _DefaultLanguage = AZSettings.DefaultLanguage;
    }

    var _ValidType = "";
    $(":input").each(function ()
    {
        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
        {
            _ValidType = "";
            $(this).attr("autocomplete", "off");
            $(this).off("keypress keydown", AZValidateDirtyKeyup).on("keypress keydown", AZValidateDirtyKeyup);
            _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
                $(this).off("focusout", AZValidateInputValueFocusout).on("focusout", { ValidType: _ValidType }, AZValidateInputValueFocusout);
            }
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
            $(this).off("change", AZValidateDirtyKeyup).on("change", AZValidateDirtyKeyup);
            $(this).off("input change", AZRange).on("input change", AZRange);
        }
        if ($(this).is("textarea"))
        {
            _ValidType = "";
            $(this).attr("autocomplete", "false");
            $(this).off("keypress keydown", AZValidateDirtyKeyup).on("keypress keydown", AZValidateDirtyKeyup);
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
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
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

    // Mandatory Asterisk
    $(".mandatory").not(".az-no-asterisk, .az-input-icons").each(function ()
    {
        $(".az-mandatory-asterisk", this).remove();
        $(this).append(' <span class="az-mandatory-asterisk">*</span>');
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
    $.publish("functionlib/AZSetInputTypeEvents");
}

function AZValidateDirtyKeyup(e)
{
    var _Element = e.target || e.srcElement;
    if (!$(_Element).attr("readonly"))
    {
        var _InputValue = "";
        var _InputKey = "";
        var _KeyChar = e.keyCode || e.which;
        if (e.type == "keydown")
        {
            if (_KeyChar === 8)
            {
                _InputValue = $(_Element).val();
                SetData();
            }
        }
        else if (e.type == "keypress")
        {
            _InputValue = $(_Element).val() + String.fromCharCode(_KeyChar);
            _InputKey = String.fromCharCode(_KeyChar);
            SetData();
        }
        else
        {
            _InputValue = $(_Element).val();
            SetData();
        }

        function SetData()
        {
            var _Data =
            {
                azInputId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
                azInputName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
                azInputClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
                azInputValue: _InputValue,
                azInputKey: _InputKey,
                azInputJQElement: $(_Element)
            };
            $.publish("functionlib/azValidateDirty",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
                    azInputValue: _Data.azInputValue,
                    azInputKey: _Data.azInputKey,
                    azInputJQElement: _Data.azInputJQElement,
                });
            if (typeof AZValidateDirty == "function")
            {
                AZValidateDirty(e, _Data);
            }
        }
    }
}

function AZValidateInputValueKeypress(e)
{
    var _Element = e.target || e.srcElement;
    var _KeyChar = e.keyCode || e.which;
    var _ValidType = AZGetValidType(e.data.ValidType);
    if (_KeyChar === 8 || _KeyChar === 13)
    {
        return true;
    }
    else
    {
        var _Char = String.fromCharCode(_KeyChar);
        if (_ValidType.substring(0, 3) === "NOT")
        {
            _ValidType = _ValidType.substring(3);
            if (_ValidType.indexOf(_Char.toLowerCase()) < 0)
            {
                return true;
            }
            else
            {
                TriggerAlert();
            }
        }
        else if (_ValidType.indexOf(_Char.toLowerCase()) >= 0)
        {
            return true;
        }
        else
        {
            TriggerAlert();
        }

        function TriggerAlert()
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            $.publish("functionlib/azValidateInputValueKeypress",
                {
                    azInputId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
                    azInputName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
                    azInputClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
                    azInputValue: $(_Element).val(),
                    azInputInvalidChar: _Char,
                    azInputValidType: e.data.ValidType.toString(),
                    azInputJQElement: $(_Element)
                });
        }
    }
}

function AZValidateInputValueFocusout(e)
{
    var _Element = e.target || e.srcElement;
    var _CurrentValidType = e.data.ValidType[0];
    if (_CurrentValidType === "validate-decimal")
    {
        $(_Element).val(numeral($(_Element).val()).format('0.00'));
    }
}

function AZGetValidType(SelectedType)
{
    var _ValidTypes = {};
    _ValidTypes =
    {
        "validate-alpha": "NOT|§\"",
        "validate-numeric": "1234567890",
        "validate-decimal": "1234567890,.",
        "validate-date": "1234567890./",
        "validate-datetime": "1234567890apm./:\u0020",
        "validate-time": "1234567890apm:\u0020",
        "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz-_.:/",
        "validate-userpass": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-connectionid": "abcdefghijklmnopqrstuvwxyz"
    };
    return _ValidTypes[SelectedType];
}

// Empty
// MaxLength
// MinLength
// InvalidChar
// Decimal
// Date
// DateTime
// Time
// Email
// Web
function AZSerializeForm(Options)
{
    if (AZIsEmpty(Options) === false && Options.hasOwnProperty("ObjLanguage") && Options.hasOwnProperty("ObjValidation"))
    {
        var _$Area = "";
        if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
        }

        var _InputError = false;
        var _$Input = {};
        var _ObjCurrentValidation = {};
        var _ObjReturnValidation = {};
        var _ObjOutputData = {};

        $.each(Options.ObjValidation, function (HTMLElement, Value)
        {
            if ($('#' + HTMLElement, _$Area).length > 0 && Value.class.indexOf("validate") > -1)
            {
                _$Input = $('#' + HTMLElement, _$Area);

                if (AZIsEmpty(_$Input) === false)
                {
                    _ObjCurrentValidation = Value;

                    if (_ObjCurrentValidation.datatype.toLowerCase() === "int")
                    {
                        _ObjOutputData[_$Input.attr("id")] = Number(_$Input.val());
                    }
                    else if (_ObjCurrentValidation.datatype.toLowerCase() === "decimal")
                    {
                        _ObjOutputData[_$Input.attr("id")] = parseFloat(_$Input.val().replace(",", ".").replace(/ /g, ""));
                    }
                    else if (_ObjCurrentValidation.datatype.toLowerCase() === "date")
                    {
                        if (_$Input.val().replace(/^\s+|\s+$/g, '') !== "")
                        {
                            _ObjOutputData[_$Input.attr("id")] = AZSetDateFormat(_$Input.datepicker("getDate")).ISODate;
                        }
                        else
                        {
                            _ObjOutputData[_$Input.attr("id")] = null;
                        }
                    }
                    else if (_ObjCurrentValidation.datatype.toLowerCase() === "datetime")
                    {
                        var _LongDateFormat = moment()._locale._longDateFormat;
                        _ObjOutputData[_$Input.attr("id")] = moment(_$Input.val(), _LongDateFormat.L + " " + _LongDateFormat.LT).toJSON();
                    }
                    else if (_ObjCurrentValidation.datatype.toLowerCase() === "time")
                    {
                        _ObjOutputData[_$Input.attr("id")] = AZSetTimeFormat('0001-01-01 ' + _$Input.val()).ISOTime;
                    }
                    else
                    {
                        _ObjOutputData[_$Input.attr("id")] = _$Input.val();
                    }

                    _ObjReturnValidation = AZValidateInput(_$Input, _ObjCurrentValidation);
                    if (AZIsEmpty(_ObjReturnValidation) === false)
                    {
                        _ObjReturnValidation.Input = _$Input.attr("id");
                        consoleLog({ consoleType: "warn", consoleText: "AZSerializeForm - " + _ObjReturnValidation.Input + " - " + _ObjReturnValidation.Error });
                        if ($(".az-alert-active").length === 0)
                        {
                            var _$RoleAlert = $("[role='alert']");
                            var _$ModalDialogWindow = window.top.$(".az-modal-dialog");
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
                            else if (_$ModalDialogWindow.length > 0)
                            {
                                var _$Titlebar = $(".az-modal-dialog-titlebar", _$ModalDialogWindow);
                                var _$TitlebarSpan = _$Titlebar.children("span.ui-dialog-title");
                                var _CurrentText = _$TitlebarSpan.text();
                                _$Titlebar.addClass("az-alert-danger");
                                _$TitlebarSpan.text(Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error]);
                                _$Input.focus();
                                $("body").addClass("az-alert-active");
                                window.setTimeout(function ()
                                {
                                    _$Titlebar.removeClass("az-alert-danger");
                                    _$TitlebarSpan.text(_CurrentText);
                                    $("body").removeClass("az-alert-active");
                                }, 3000);
                            }
                            else if (_$Window.length > 0)
                            {
                                var _$Titlebar = $(".az-window-titlebar", _$Window);
                                var _$TitlebarSpan = _$Titlebar.children("h1");
                                var _CurrentText = _$TitlebarSpan.text();
                                _$Titlebar.addClass("az-alert-danger");
                                _$TitlebarSpan.text(Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error]);
                                _$Input.focus();
                                $("body").addClass("az-alert-active");
                                window.setTimeout(function ()
                                {
                                    _$Titlebar.removeClass("az-alert-danger");
                                    _$TitlebarSpan.text(_CurrentText);
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
                                        azWindowText: Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error],
                                        azWindowWidth: 400,
                                        azWindowContentHeight: true
                                    });
                            }
                        }
                        _InputError = true;
                        return false;
                    }
                }
            }
        });
        if (_InputError === false)
        {
            return _ObjOutputData;
        }
        else
        {
            return {};
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
    var _ValidType = "";
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
            for (var i = 0; i < _CurrentInputValue.length; i++)
            {
                _ValidType = AZGetValidType(_CurrentValidType);
                if (_ValidType.substring(0, 3) === "NOT")
                {
                    _ValidType = _ValidType.substring(3);
                    if (_ValidType.indexOf(_CurrentInputValue.charAt(i).toLowerCase()) > 0)
                    {
                        _ListChar.push(_CurrentInputValue.charAt(i));
                    }
                }
                else if (_ValidType.indexOf(_CurrentInputValue.charAt(i).toLowerCase()) < 0)
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
                        azInputName: $Input.attr("name") === undefined ? "" : $Input.attr("name"),
                        azInputClass: $Input.attr("class") === undefined ? "" : $Input.attr("class"),
                        azInputValue: $Input.val(),
                        azInputInvalidChar: _ListChar.join(" - "),
                        azInputValidType: _CurrentValidType,
                        azInputJQElement: $Input
                    });
            }
            else
            {
                if (_CurrentValidType === "validate-decimal" && AZIsValidDecimal(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Decimal";
                }
                if (_CurrentValidType === "validate-date" && isNaN(new Date($Input.datepicker("getDate"))))
                {
                    _ObjReturnValidation.Error = "Date";
                }
                if (_CurrentValidType === "validate-datetime")
                {
                    var _LongDateFormat = moment()._locale._longDateFormat;
                    if (AZIsValidDateTime(moment(_CurrentInputValue, _LongDateFormat.L + " " + _LongDateFormat.LT)) === false)
                    {
                        _ObjReturnValidation.Error = "DateTime";
                    }
                }
                if (_CurrentValidType === "validate-time" && AZIsValidDateTime('0001-01-01 ' + _CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Time";
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
    if (AZIsEmpty(Options) === false && Options.hasOwnProperty("ObjInputData") && Options.hasOwnProperty("ObjValidation"))
    {
        var _$Area = "";
        if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
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

            if (AZIsEmpty(_$Input) === false)
            {
                _DataAttr = _$Input.attr("data-attr");
                _ObjCurrentValidation = Options.ObjValidation[_$Input.attr("id")];

                if (_ObjCurrentValidation.datatype === "decimal")
                {
                    if (AZIsNullOrEmpty(Value) === false)
                    {
                        _$Input[_DataAttr](numeral(Value).format('0.00'));
                    }
                    else
                    {
                        _$Input[_DataAttr](0);
                    }
                }
                else if (_ObjCurrentValidation.datatype === "date")
                {
                    if (AZIsNullOrEmpty(Value) === false)
                    {
                        _$Input[_DataAttr](AZSetDateFormat(Value).LocalDate);
                    }
                }
                else if (_ObjCurrentValidation.datatype === "datetime")
                {
                    if (AZIsNullOrEmpty(Value) === false)
                    {
                        _$Input[_DataAttr](AZSetDateTimeFormat(Value).LocalDateTime);
                    }
                    else
                    {
                        _$Input[_DataAttr](0);
                    }
                }
                else if (_ObjCurrentValidation.datatype === "time")
                {
                    if (AZIsNullOrEmpty(Value) === false)
                    {
                        _$Input[_DataAttr](AZSetTimeFormat('0001-01-01 ' + Value).LocalTime);
                    }
                    else
                    {
                        _$Input[_DataAttr](0);
                    }
                }
                else
                {
                    if (AZIsNullOrEmpty(Value) === false)
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

function AZIsValidDateTime(DateTime)
{
    var _Return = false;
    if (DateTime != null && DateTime != undefined && DateTime != "" && moment(DateTime).isValid() === true)
    {
        _Return = true;
    }
    return _Return;
}

function AZSetDateFormat(Date)
{
    var _DateReturn =
    {
        LocalDate: "",
        ISODate: "",
        ENUSDate: ""
    };
    if (AZIsValidDateTime(Date) === true)
    {
        _DateReturn.LocalDate = moment(Date).format('L');
        _DateReturn.ISODate = moment(Date).format('YYYY-MM-DD');
        _DateReturn.ENUSDate = moment(Date).format('MM/DD/YYYY');
    }
    return _DateReturn;
}

function AZSetDateTimeFormat(DateTime)
{
    var _DateTimeReturn =
    {
        LocalDateTime: "",
        ISODateTime: "",
        ENUSDateTime: ""
    };
    if (AZIsValidDateTime(DateTime) === true)
    {
        _DateTimeReturn.LocalDateTime = moment(DateTime).format('L') + " " + moment(DateTime).format('LT');
        _DateTimeReturn.ISODateTime = moment(DateTime).format('YYYY-MM-DD') + " " + moment(DateTime).format('HH:mm');
        _DateTimeReturn.ENUSDateTime = moment(DateTime).format('MM/DD/YYYY') + " " + moment(DateTime).format('hh:mm A');
    }
    return _DateTimeReturn;
}

function AZSetTimeFormat(Time)
{
    var _TimeReturn =
    {
        LocalTime: "",
        ISOTime: "",
        ENUSTime: ""
    };
    if (AZIsValidDateTime(Time) === true)
    {
        _TimeReturn.LocalTime = moment(Time).format('LT');
        _TimeReturn.ISOTime = moment(Time).format('HH:mm');
        _TimeReturn.ENUSTime = moment(Time).format('hh:mm A');
    }
    return _TimeReturn;
}

function AZIsValidDecimal(Float)
{
    var _DefaultLanguage = AZClientStorage("get", "language", "");
    if (typeof _DefaultLanguage == "")
    {
        _DefaultLanguage = AZSettings.DefaultLanguage;
    }
    var _RegExp = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
    if (_DefaultLanguage === "nb-NO")
    {
        var _RegExp = /^\s*(\+|-)?((\d+(\,\d+)?)|(\,\d+))\s*$/;
    }
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

function AZStandardAlert(Options)
{
    if (this instanceof AZStandardAlert === true)
    {
        var _Main = this;
        if (AZIsEmpty(Options) === false)
        {
            _Main.$Area = "";
            _Main.InputJQElement = "";
            if (Options.hasOwnProperty("$Area") && AZIsEmpty(Options.$Area) === false)
            {
                _Main.$Area = Options.$Area;
            }
            if (Options.hasOwnProperty("InputJQElement") && AZIsEmpty(Options.InputJQElement) === false)
            {
                _Main.InputJQElement = Options.InputJQElement;
            }
            _Main.Title = Options.Title;
            _Main.Text = Options.Text;

            if ($(".az-alert-active").length === 0)
            {
                var _$RoleAlert = $("[role='alert']");
                var _$ModalDialogWindow = window.top.$(".az-modal-dialog");
                var _$Window = $("#az-window");

                if (_$RoleAlert.length > 0)
                {
                    var _CurrentText = _$RoleAlert.text();
                    _$RoleAlert.text(_Main.Text).removeClass("az-alert-info").addClass("az-alert-danger").show();
                    if (_Main.InputJQElement != "")
                    {
                        _Main.InputJQElement.focus();
                    }
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$RoleAlert.text(_CurrentText).removeClass("az-alert-danger").addClass("az-alert-info").show();
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else if (_$ModalDialogWindow.length > 0)
                {
                    var _$Titlebar = $(".az-modal-dialog-titlebar", _$ModalDialogWindow);
                    var _$TitlebarSpan = _$Titlebar.children("span.ui-dialog-title");
                    var _CurrentText = _$TitlebarSpan.text();
                    _$Titlebar.addClass("az-alert-danger");
                    _$TitlebarSpan.text(_Main.Text);
                    if (_Main.InputJQElement != "")
                    {
                        _Main.InputJQElement.focus();
                    }
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$Titlebar.removeClass("az-alert-danger");
                        _$TitlebarSpan.text(_CurrentText);
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else if (_$Window.length > 0)
                {
                    var _$Titlebar = $(".az-window-titlebar", _$Window);
                    var _$TitlebarSpan = _$Titlebar.children("h1");
                    var _CurrentText = _$TitlebarSpan.text();
                    _$Titlebar.addClass("az-alert-danger");
                    _$TitlebarSpan.text(_Main.Text);
                    if (_Main.InputJQElement != "")
                    {
                        _Main.InputJQElement.focus();
                    }
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$Titlebar.removeClass("az-alert-danger");
                        _$TitlebarSpan.text(_CurrentText);
                        $("body").removeClass("az-alert-active");
                    }, 3000);
                }
                else
                {
                    $("body").addClass("az-alert-active");
                    $.subscribeonce("functionlib/azWindowAfterClose", function (e)
                    {
                        if (_Main.InputJQElement != "")
                        {
                            _Main.InputJQElement.focus();
                        }
                        $("body").removeClass("az-alert-active");
                    });
                    new AZWindow(
                        {
                            azWindowTitle: _Main.Title,
                            azWindowText: _Main.Text,
                            azWindowWidth: 400,
                            azWindowContentHeight: true
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
        return new AZStandardAlert(Options);
    }
}

function AZRunFunction(FunctionBody, FunctionArgs)
{
    var RunFunctionName = FunctionBody;
    var RunFunctionArgs = FunctionArgs;
    if (AZIsEmpty(FunctionBody) === false && FunctionBody.hasOwnProperty("FunctionName"))
    {
        RunFunctionName = FunctionBody.FunctionName;
        RunFunctionArgs = FunctionBody.FunctionArgs;
    }
    else if (typeof FunctionBody == "object")
    {
        consoleLog({ consoleType: "warn", consoleText: "RunFunction argument failed, received wrong object" });
        return false;
    }

    if (RunFunctionArgs == null || RunFunctionArgs == undefined || !Array.isArray(RunFunctionArgs))
    {
        RunFunctionArgs = [];
    }
    if (RunFunctionName && typeof RunFunctionName == "string" && RunFunctionName == "")
    {
        consoleLog({ consoleType: "warn", consoleText: "RunFunction argument failed, received empty string" });
    }
    else if (RunFunctionName && typeof RunFunctionName == "string")
    {
        var _ObjectList = RunFunctionName.split('.');
        if (_ObjectList[0] == "window")
        {
            if (_ObjectList.length > 1)
            {
                RecursiveFindAndRunFunction(window, _ObjectList.slice(1));
            }
            else
            {
                consoleLog({ consoleType: "warn", consoleText: "RunFunction failed, received " + RunFunctionName });
            }
        }
        else
        {
            RecursiveFindAndRunFunction(window, _ObjectList);
        }
    }
    else
    {
        consoleLog({ consoleType: "warn", consoleText: "RunFunction argument failed, received " + typeof RunFunctionName + ", expected string" });
    }

    function RecursiveFindAndRunFunction(currentObject, currentQueue)
    {
        var _CurrentProperty = currentQueue.shift();
        var _NewObject = null;
        if (currentObject.hasOwnProperty(_CurrentProperty))
        {
            _NewObject = currentObject[_CurrentProperty];
        }
        if (_NewObject != null)
        {
            if (currentQueue.length > 0)
            {
                RecursiveFindAndRunFunction(_NewObject, currentQueue);
            }
            else
            {
                if (typeof _NewObject == "function")
                {
                    _NewObject.apply(currentObject, RunFunctionArgs);
                }
                else
                {
                    consoleLog({ consoleType: "warn", consoleText: "RunFunction failed, not a function - " + RunFunctionName });
                }
            }
        }
        else
        {
            consoleLog({ consoleType: "warn", consoleText: "RunFunction failed, missing property property " + _CurrentProperty + " - " + RunFunctionName });
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
    if (AZSettings.DebugMode === true)
    {
        console[_Options.consoleType](_Options.consoleText);
    }
}

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