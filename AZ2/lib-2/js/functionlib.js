// AZ-Functionlib AZ-2.0 v.2 | (c) web2net AS

var AZSettings =
{
    LanguageValidationFolder: "/admin",
    DefaultLanguageFile: "/lib-2/admin/default-lang.json",
    DefaultLanguage: "nb-NO",
    DefaultTooltipFile: "/lib-2/admin/help.html",
    DebugMode: true,
    AppName: "AZ Team",
    AppVersion: "2.0.2",
    ApiVersion: "_1"
};

var ObjPageData = {};
ObjPageData.Elements = {};
ObjPageData.Values = {};
var ModalDialogScrollTop = 0;

$(document).ready(function ()
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
        PublishWindowResize();
    }, 100);

    $(window).resize(function ()
    {
        PublishWindowResize();
    });

    function PublishWindowResize()
    {
        $.publish("functionlib/azWindowResize",
            {
                azWindowWidth: parseInt(window.innerWidth),
                azWindowHeight: parseInt(window.innerHeight),
                azWindowScrollTop: parseInt($(window).scrollTop()),
                azWindowScrollLeft: parseInt($(window).scrollLeft()),
                azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
            });
    }

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

    // AZ Validate Input
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

    AZSetInputTypeEvents();
});


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
            azPageValidationUrl: "",
            azPageTootltip: false,
            azPageTootltipFile: ""
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
                if (AZIsNullOrEmpty(_Main.Options.azPageElement) === false && _Main.Options.azPageElement.length > 0)
                {
                    AZSetPageElement(_Main.Options.azPageElement);
                }
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

                _Main.Language = function ()
                {
                    if (_Main.Options.azPageLanguage === true)
                    {
                        $.subscribeonce("functionlib/AZSetLanguage", function (e, data)
                        {
                            _Main.ObjLanguage = data;
                            _Main.InputTypeEvents();
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
                        _Main.InputTypeEvents();
                    }
                };

                _Main.Validation = function ()
                {
                    if (_Main.Options.azPageValidation === true)
                    {
                        $.subscribeonce("functionlib/AZSetValidation", function (e, data)
                        {
                            _Main.Language();
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
                        _Main.Language();
                    }
                };

                _Main.Tootltip = function ()
                {
                    if (_Main.Options.azPageTootltip === true)
                    {
                        var _TooltipFile = _Main.Options.azPageTootltipFile;
                        if (_Main.Options.azPageTootltipFile === "")
                        {
                            _TooltipFile = AZSettings.DefaultTooltipFile;
                        }
                        AZTooltip({ File: _TooltipFile });
                        _Main.Validation();
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
                    _Main.Tootltip();
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
}

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
                    var _ObjDefaultElements = false;
                    var _ObjElements = false;
                    _Main.ObjLanguage =
                    {
                        ObjActiveLanguages: ObjDefaultLanguage.ActiveLanguages,
                        ObjNonLanguageElements: ObjDefaultLanguage.ObjNonLanguageElements,
                        SingleNonLanguageElements: ObjDefaultLanguage.SingleNonLanguageElements,
                        SingleDefaultElements: ObjDefaultLanguage.SingleDefaultElements[_Main.DefaultLanguage],
                        SingleElements: _Main.ObjPageLanguage.SingleElements[_Main.DefaultLanguage]
                    };
                    if (ObjDefaultLanguage.hasOwnProperty("ObjDefaultElements"))
                    {
                        _ObjDefaultElements = true;
                        _Main.ObjLanguage.ObjDefaultElements = ObjDefaultLanguage.ObjDefaultElements[_Main.DefaultLanguage];
                    }
                    if (_Main.ObjPageLanguage.hasOwnProperty("ObjElements"))
                    {
                        _ObjElements = true;
                        _Main.ObjLanguage.ObjElements = _Main.ObjPageLanguage.ObjElements[_Main.DefaultLanguage];
                    }
                    if (_ObjDefaultElements === false)
                    {
                        AZSetSingleLanguage(_Main.ObjLanguage.SingleDefaultElements);
                    }
                    if (_ObjElements === false)
                    {
                        AZSetSingleLanguage(_Main.ObjLanguage.SingleElements);
                    }
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
                if (Options.ObjLanguage.length > 0)
                {
                    AZSetFormLanguage(Options.ObjLanguage);
                }
                else
                {
                    AZSetSingleLanguage(Options.ObjLanguage);
                }
            }
            else
            {
                consoleLog({ consoleType: "error", consoleText: "AZSetLanguage 2 - Options is empty or missing some properties" });
            }
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZSetLanguage 1 - Options is empty or missing some properties" });
        }
    }
    else
    {
        return new AZSetLanguage(Options);
    }
}

function AZSetSingleLanguage(SingleElements)
{
    $.each(SingleElements, function (Key, Value)
    {
        var _$Obj = $('#' + Key).length > 0 ? $('#' + Key) : $('.' + Key);

        if (_$Obj.hasClass("htmlembedded") || _$Obj.hasClass("htmlembedded-left") || _$Obj.hasClass("htmlembedded-right"))
        {
            var _FirstChildElement = $('>:first', _$Obj);
            _$Obj.html('');
            _$Obj.html(Value);
            if (_FirstChildElement.length > 0)
            {
                if (_$Obj.hasClass("htmlembedded") || _$Obj.hasClass("htmlembedded-left"))
                {
                    _$Obj.prepend(_FirstChildElement);
                }
                else
                {
                    _$Obj.append(_FirstChildElement);
                }
            }
        }
        else
        {
            _$Obj.html('');
            _$Obj.html(Value);
        }
        if (_$Obj.hasClass("placeholder"))
        {
            _$Obj.prop("placeholder", "");
            _$Obj.prop("placeholder", Value);
        }
        if (_$Obj.hasClass("title"))
        {
            _$Obj.prop("title", "");
            _$Obj.prop("title", Value);
        }
    });
}

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
            _ObjElements = Options.ObjElements[0];
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
                    else if (AttrType.toLowerCase() === "data-attr" || AttrType.toLowerCase() === "minlength" || AttrType.toLowerCase() === "maxlength" || AttrType.toLowerCase() === "data-help" || AttrType.toLowerCase() === "tabindex")
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
    if (_DefaultLanguage == "")
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
            $(this).off("input", AZValidateDirtyChange).on("input", AZValidateDirtyChange);
            if ($(this).attr("class") != undefined)
            {
                _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            }
            if (_ValidType !== null)
            {
                $(this).off("keypress", AZValidateInputValueKeypress).on("keypress", { ValidType: _ValidType }, AZValidateInputValueKeypress);
                $(this).off("focusout", AZValidateInputValueFocusout).on("focusout", { ValidType: _ValidType }, AZValidateInputValueFocusout);
            }
            if ($(this).hasClass("az-input-animated"))
            {
                $(this).off("focusout", AZInputAnimatedFocusout).on("focusout", AZInputAnimatedFocusout);
            }
            if ($(this).hasClass("az-input-slideup"))
            {
                $(this).off("focusout", AZInputAnimatedSlideupFocusout).on("focusout", AZInputAnimatedSlideupFocusout);
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
            $(this).off("input", AZValidateDirtyChange).on("input", AZValidateDirtyChange);
            $(this).off("input change", AZRange).on("input change", AZRange);
        }
        if ($(this).is("textarea"))
        {
            _ValidType = "";
            $(this).attr("autocomplete", "false");
            $(this).off("input", AZValidateDirtyChange).on("input", AZValidateDirtyChange);
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
            $(this).off("click", AZValidateDirtyChange).on("click", AZValidateDirtyChange);
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
            $(this).off("click", AZValidateDirtyChange).on("click", AZValidateDirtyChange);
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
            $(this).off("input", AZValidateDirtyChange).on("input", AZValidateDirtyChange);
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
    $(".az-label-animated, .az-label-slideup").off("click", AZLabelAnimatedClick).on("click", AZLabelAnimatedClick);

    // Adjust Cards Height
    $('.az-accordion-card.adjust, .az-card.adjust, .az-card.adjust, .az-timeline-card.adjust').matchHeight();

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
                if (_$CurrentSpinner.hasClass('az-round') === true)
                {
                    _$ParentElement.append('<span class="az-input-group-addon az-spinner-decrement az-round"><i class="fas fa-minus"></i></span>').append(_$CurrentSpinner).append('<span class="az-input-group-addon az-spinner-increment az-round"><i class="fas fa-plus"></i></span>');
                }
                else
                {
                    _$ParentElement.append('<span class="az-input-group-addon az-spinner-decrement"><i class="fas fa-minus"></i></span>').append(_$CurrentSpinner).append('<span class="az-input-group-addon az-spinner-increment"><i class="fas fa-plus"></i></span>');
                }
                AZSetSpinnerEvents(_$ParentElement, _ObjAttributes);
            }
        }
        else
        {
            _$CurrentSpinner.remove();
            _$ParentElement.html('<div>#Error</div>');
        }
    });

    // Navbar Top Menu
    var _$NavbarTopMenu = $(".az-navbar-top-content").find(".az-navbar-menu");
    var _NavbarTopHeight = _$NavbarTopMenu.parents(".az-navbar-top").height();
    _$NavbarTopMenu.off().on("click", "li > a", function (e)
    {
        if (e !== undefined)
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
        }
    });
    $.publish("functionlib/AZSetInputTypeEvents");
}

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
            _Main.$Header = _Main.$AccordionCard.children("header");
            _Main.$Article = _Main.$AccordionCard.children("article");
            _Main.$Footer = _Main.$AccordionCard.children("footer");
            _Main.MaxArticleHeight = 0;
            _Main.azExec = true;

            $.each(_Main.$Header, function (Index, Header)
            {
                if ($(".az-accordion-icon", $(Header)).length == 0)
                {
                    $(Header).append('<span class="az-accordion-icon"><i class="' + _Main.Options.azAccordionIconClosed + '"></i><span>');
                }
            });
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
            _Main.azSelectAccordion = function (SelectedIndex)
            {
                _Main.azExecAccordion(new Event("click"), _Main.$AccordionCard.eq(SelectedIndex).children("header"));
            };
            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.azSelectAccordion(SelectedIndex);
                window.setTimeout(function ()
                {
                    _Main.$AccordionCard.eq(SelectedIndex).children("article").fadeOut(function ()
                    {
                        _Main.$AccordionCard.eq(SelectedIndex).children("article").html(SelectedText);
                    }).fadeIn(function ()
                    {
                        if (_Main.Options.azAccordionHeightStyle == "auto")
                        {
                            _Main.azArticleHeight();
                        }
                    });
                }, 500);
            };
            _Main.$Accordion.off().on(_Main.Options.azAccordionOpenEvent, ".az-accordion-card > header", function (e)
            {
                _Main.azExecAccordion(e, $(this));
            });
            _Main.AccordionActivated = "";
            _Main.AccordionDeactivated = "";
            _Main.azExecAccordion = function (e, $SelectedAccordionHeader)
            {
                if (_Main.azExec === true)
                {
                    if ($SelectedAccordionHeader.hasClass("az-accordion-header-active") === true)
                    {
                        if (_Main.Options.azAccordionCollapsible === true)
                        {
                            $SelectedAccordionHeader.parent().removeClass("az-accordion-card-active");
                            $SelectedAccordionHeader.removeClass("az-accordion-header-active");
                            $SelectedAccordionHeader.siblings("article").slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                            $SelectedAccordionHeader.siblings("footer").removeClass("az-accordion-footer-active");
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
                                    azAccordionClickedJQElement: $(e.target).length > 0 ? $(e.target) : "",
                                    azAccordionCardJQElement: $($SelectedAccordionHeader.parent()),
                                    azAccordionHeaderJQElement: $SelectedAccordionHeader,
                                    azAccordionArticleJQElement: $($SelectedAccordionHeader.siblings("article")),
                                    azAccordionFooterJQElement: $($SelectedAccordionHeader.siblings("footer")).length > 0 ? $($SelectedAccordionHeader.siblings("footer")) : "",
                                    azExec: _Main.azExec
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
                                    azAccordionClickedJQElement: $(e.target).length > 0 ? $(e.target) : "",
                                    azAccordionCardJQElement: $($SelectedAccordionHeader.parent()),
                                    azAccordionHeaderJQElement: $SelectedAccordionHeader,
                                    azAccordionArticleJQElement: $($SelectedAccordionHeader.siblings("article")),
                                    azAccordionFooterJQElement: $($SelectedAccordionHeader.siblings("footer")).length > 0 ? $($SelectedAccordionHeader.siblings("footer")) : "",
                                    azExec: _Main.azExec
                                });
                            _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                        }
                    }
                    else
                    {
                        _Main.$AccordionCard.removeClass("az-accordion-card-active");
                        _Main.$Header.removeClass("az-accordion-header-active");
                        _Main.$Article.slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                        _Main.$Footer.removeClass("az-accordion-footer-active");
                        $("span.az-accordion-icon > i", _Main.$Header).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                        $SelectedAccordionHeader.parent().addClass("az-accordion-card-active");
                        $SelectedAccordionHeader.addClass("az-accordion-header-active");
                        $SelectedAccordionHeader.siblings("article").slideDown(_Main.Options.azAccordionSlideDown).addClass("az-accordion-article-active");
                        $SelectedAccordionHeader.siblings("footer").addClass("az-accordion-footer-active");
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
                                azAccordionClickedJQElement: $(e.target).length > 0 ? $(e.target) : "",
                                azAccordionCardJQElement: $($SelectedAccordionHeader.parent()),
                                azAccordionHeaderJQElement: $SelectedAccordionHeader,
                                azAccordionArticleJQElement: $($SelectedAccordionHeader.siblings("article")),
                                azAccordionFooterJQElement: $($SelectedAccordionHeader.siblings("footer")).length > 0 ? $($SelectedAccordionHeader.siblings("footer")) : "",
                                azExec: _Main.azExec
                            });
                        _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                    }
                }
            };
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
            $.publish("functionlib/azAccordionReady",
                {
                    $Accordion: _Main.$Accordion,
                    $AccordionCard: _Main.$AccordionCard,
                    $Header: _Main.$Header,
                    $Article: _Main.$Article,
                    $Footer: _Main.$Footer,
                    azAccordionId: _Main.azAccordionId,
                    azSelectAccordion: _Main.azSelectAccordion,
                    azChangeText: _Main.azChangeText,
                    azExec: _Main.azExec
                });
        }
    }
    else
    {
        return new AZAccordion(Options);
    }
}

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

        if (_Main.Options.azBackgroundSliderId !== "")
        {
            _Main.$BackgroundSlider = $("#" + _Main.Options.azBackgroundSliderId);
            if (_Main.$BackgroundSlider.length > 0)
            {
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

                    $.publish("functionlib/azBackgroundSliderReady",
                        {
                            $BackgroundSlider: _Main.$BackgroundSlider,
                            $BackgroundSliderWrapper: _Main.$BackgroundSliderWrapper,
                            $BackgroundSliderContent: _Main.$BackgroundSliderContent,
                            azBackgroundSliderId: _Main.Options.azBackgroundSliderId
                        });
                }
            }
        }
    }
    else
    {
        return new AZBackgroundSlider(Options);
    }
}

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
            _Main.$Iframe = {};
            _Main.$Window;
            _Main.$Dialog = $("<div></div>").attr("id", _Main.azModalDialogId).addClass("az-modal-dialog-content");
            _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
            _Main.$Dialog.append(_Main.$Article);

            // AZModalDialog Size
            if (_Main.Options.azModalDialogWidth > (window.innerWidth - 28))
            {
                _Main.Options.azModalDialogWidth = (window.innerWidth - 28);
            }
            if (_Main.Options.azModalDialogHeight > (window.innerHeight - 28))
            {
                _Main.Options.azModalDialogHeight = (window.innerHeight - 28);
            }
            if (_Main.Options.azModalDialogContentHeight === true)
            {
                _Main.Options.azModalDialogHeight = "auto";
            }

            // AZModalDialog UI Dialog
            _Main.$Dialog.dialog(
                {
                    autoOpen: false,
                    modal: false,
                    width: _Main.Options.azModalDialogWidth,
                    height: _Main.Options.azModalDialogHeight,
                    resizable: _Main.Options.azModalDialogResizable,
                    draggable: _Main.Options.azModalDialogDraggable,
                    closeOnEscape: _Main.Options.azModalDialogCloseOnEscape
                });

            if (_Main.Options.azModalDialogPosition && IsEmpty(_Main.Options.azModalDialogPositionOf) === false && window.innerWidth > 576)
            {
                _Main.$Dialog.dialog(
                    {
                        position:
                        {
                            my: _Main.Options.azModalDialogPositionMy,
                            at: _Main.Options.azModalDialogPositionAt,
                            of: _Main.Options.azModalDialogPositionOf
                        }
                    });
            }
            _Main.$Window = _Main.$Dialog.parent(".ui-dialog").addClass("az-modal-dialog");
            _Main.$Titlebar = _Main.$Window.children(".ui-dialog-titlebar").addClass("az-modal-dialog-titlebar");
            _Main.$Titlebar.children(".ui-dialog-title").html(_Main.Options.azModalDialogTitle);
            _Main.$Titlebar.children(".ui-dialog-titlebar-close").removeAttr("title");

            // AZModalDialog Colors
            if (_Main.Options.azModalDialogBackgroundColor !== "")
            {
                _Main.$Window.css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important" });
            }
            if (_Main.Options.azModalDialogColor !== "")
            {
                _Main.$Window.css({ "color": _Main.Options.azModalDialogColor + " !important" });
            }
            if (_Main.Options.azModalDialogTitlebarBackgroundColor !== "")
            {
                _Main.$Titlebar.css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important" });
            }
            if (_Main.Options.azModalDialogTitlebarColor !== "")
            {
                _Main.$Titlebar.css({ "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
            }

            // AZModalDialog Titlebar
            if (_Main.Options.azModalDialogTitlebar === false)
            {
                _Main.$Titlebar.hide();
            }
            if (_Main.Options.azModalDialogTitlebarClose === false)
            {
                _Main.$Titlebar.children(".ui-dialog-titlebar-close").hide();
            }

            _Main.$Dialog.dialog("open");
            _Main.$Dialog.dialog(
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

            // AZModalDialog iFrame
            if (_Main.Options.azModalDialogiFrameURL != "")
            {
                var _IFrameHeight = ((_Main.Options.azModalDialogHeight - AZElementSize(_Main.$Titlebar).Height) - 20);
                if (_Main.Options.azModalDialogTitlebar === false)
                {
                    _IFrameHeight = (_Main.Options.azModalDialogHeight - 10);
                }
                _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.azModalDialogId);
                _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
                _Main.$Dialog.append(_Main.$Iframe);
            }

            // AZModalDialog No Parent Scroll
            if ($("body").hasClass("az-no-parent-scroll") === false && _Main.Options.azModalDialogNoParentScroll === true)
            {
                ModalDialogScrollTop = $(window).scrollTop();
                $("body").addClass("az-no-parent-scroll");
            }

            // AZModalDialog Background
            if ($("#az-background").length === 0)
            {
                $("body").append('<div id="az-background"></div>');
                if (_Main.Options.azModalDialogBackground === false)
                {
                    $("#az-background").css({ 'background-color': 'transparent' });
                }
            }

            // AZModalDialog Modal
            if (_Main.Options.azModalDialogModal === false && ("#az-background").length > 0)
            {
                $("#az-background").on("click", function (e)
                {
                    if (e !== undefined)
                    {
                        var _Element = e.target || e.srcElement;
                        if ($(_Element).attr("id") == "az-background")
                        {
                            _Main.azModalDialogClose(e);
                        }
                    }
                });
            }

            // AZModalDialog Close
            _Main.azModalDialogClose = function (e)
            {
                // AZModalDialog iFrame
                if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
                {
                    _Main.$Iframe.attr("src", "");
                }

                // AZModalDialog UI Dialog
                _Main.$Window.remove();

                if ($(".az-modal-dialog").length === 0 && $('#az-window').length === 0)
                {
                    $("#az-background").remove();
                }
                if ($(".az-modal-dialog").length === 0 && $('#az-window').length === 0 && $("#az-full-window").length === 0)
                {
                    if (ModalDialogScrollTop > 0)
                    {
                        window.setTimeout(function () { $(window).scrollTop(ModalDialogScrollTop); }, 0);
                    }
                    $("body").removeClass("az-no-parent-scroll").removeClass("az-dialog-titlebar-active");
                    if ($("body").hasClass("") === true)
                    {
                        $("body").removeAttr("class");
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
                _Main.ModalTitlebarOptions = $.extend({}, _Defaults, Options || {});

                if ($(".az-dialog-titlebar-active").length === 0)
                {
                    var _Title = "";
                    if (_Main.ModalTitlebarOptions.azModalDialogTitle != "")
                    {
                        _Title = _Main.$Titlebar.find('span').html();
                        _Main.$Titlebar.find('span').html(_Main.ModalTitlebarOptions.azModalDialogTitle);
                    }
                    if (_Main.ModalTitlebarOptions.azModalDialogTitlebarBackgroundColor !== "")
                    {
                        _Main.$Titlebar.css({ "background-color": _Main.ModalTitlebarOptions.azModalDialogTitlebarBackgroundColor + " !important" });
                    }
                    if (_Main.ModalTitlebarOptions.azModalDialogTitlebarColor !== "")
                    {
                        _Main.$Titlebar.css({ "color": _Main.ModalTitlebarOptions.azModalDialogTitlebarColor + " !important" });
                    }
                    $("body").addClass("az-dialog-titlebar-active");
                    window.setTimeout(function ()
                    {
                        if (_Main.ModalTitlebarOptions.azModalDialogTitle != "")
                        {
                            _Main.$Titlebar.find('span').html(_Title);
                        }
                        if (_Main.Options.azModalDialogTitlebarBackgroundColor !== "")
                        {
                            _Main.$Titlebar.css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important" });
                        }
                        else
                        {
                            _Main.$Titlebar.removeAttr("style");
                        }
                        if (_Main.Options.azModalDialogTitlebarColor !== "")
                        {
                            _Main.$Titlebar.css({ "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                        }
                        else
                        {
                            _Main.$Titlebar.removeAttr("style");
                        }
                        $("body").removeClass("az-dialog-titlebar-active");
                        if ($("body").hasClass("") === true)
                        {
                            $("body").removeAttr("class");
                        }
                    }, _Main.ModalTitlebarOptions.azModalDialogAlertTimeout);
                }
            };

            //AZModalDialog Resize
            _Main.azModalDialogResize = function (Options)
            {
                var _Defaults =
                {
                    azModalDialogWidth: _Main.Options.azModalDialogWidth,
                    azModalDialogHeight: _Main.Options.azModalDialogHeight
                };
                _Main.ModalDialogResize = $.extend({}, _Defaults, Options || {});

                if (_Main.ModalDialogResize.azModalDialogWidth > (window.innerWidth - 28))
                {
                    _Main.ModalDialogResize.azModalDialogWidth = (window.innerWidth - 28);
                }
                if (_Main.ModalDialogResize.azModalDialogHeight > (window.innerHeight - 28))
                {
                    _Main.ModalDialogResize.azModalDialogHeight = (window.innerHeight - 28);
                }
                _Main.$Dialog.dialog({ width: _Main.ModalDialogResize.azModalDialogWidth, height: _Main.ModalDialogResize.azModalDialogHeight });

                // AZModalDialog iFrame
                if (_Main.Options.azModalDialogiFrameURL != "")
                {
                    var _IFrameHeight = ((_Main.ModalDialogResize.azModalDialogHeight - AZElementSize(_Main.$Titlebar).Height) - 20);
                    if (_Main.Options.azModalDialogTitlebar === false)
                    {
                        _IFrameHeight = (_Main.ModalDialogResize.azModalDialogHeight - 3);
                    }
                    _Main.$Iframe.css({ "width": "100%", "height": _IFrameHeight });
                }
            };

            $.publish("functionlib/azModalDialogAfterOpen",
                {
                    $Window: _Main.$Window,
                    $Titlebar: _Main.$Titlebar,
                    $Dialog: _Main.$Dialog,
                    $Article: _Main.$Article,
                    $Iframe: _Main.$Iframe,
                    azModalDialogId: _Main.azModalDialogId,
                    azModalDialogClose: _Main.azModalDialogClose,
                    azChangeModalTitlebar: _Main.azChangeModalTitlebar,
                    azModalDialogResize: _Main.azModalDialogResize
                });
        }
    }
    else
    {
        return new AZModalDialog(Options);
    }
}

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
            azSnackbarCloseColor: ""
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
                if (e !== undefined)
                {
                    azExecTabs($(this));
                    var _Element = e.target || e.srcElement;
                    $.publish("functionlib/azTabs",
                        {
                            azTabsId: _Main.Options.azTabsId,
                            azTabsJQElement: $(_Element)
                        });
                }
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
            $.publish("functionlib/azWindowBeforeOpen", { azWindowId: "az-window" });

            ModalDialogScrollTop = 0;
            _Main.$Window = $("<div></div>").attr("id", "az-window").addClass("az-window");
            _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>");
            _Main.$Dialog = $("<div></div>").addClass("az-window-dialog");
            _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
            _Main.$Dialog.append(_Main.$Article);
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

            // AZWindow Colors
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
            if (_Main.Options.azWindowWidth > (window.innerWidth - 28))
            {
                _Main.Options.azWindowWidth = (window.innerWidth - 28);
            }
            if (_Main.Options.azWindowPositionTop > 0)
            {
                if ((_Main.Options.azWindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                {
                    _Main.Options.azWindowHeight = ((window.innerHeight - 28) - _Main.Options.azWindowPositionTop);
                }
            }
            if (_Main.Options.azWindowHeight > (window.innerHeight - 28))
            {
                _Main.Options.azWindowHeight = (window.innerHeight - 28);
            }

            // AZWindow No Parent Scroll
            if ($("body").hasClass("az-no-parent-scroll") === false && _Main.Options.azWindowNoParentScroll === true)
            {
                ModalDialogScrollTop = $(window).scrollTop();
                $("body").addClass("az-no-parent-scroll");
            }

            // AZWindow Background
            if ($("#az-background").length === 0)
            {
                $("body").append('<div id="az-background"></div>');
                if (_Main.Options.azWindowBackground === false)
                {
                    $("#az-background").css({ 'background-color': 'transparent' });
                }
            }

            // AZWindow Modal
            if (_Main.Options.azWindowModal === false)
            {
                $("#az-background").on("click", function (e)
                {
                    if (e !== undefined)
                    {
                        var _Element = e.target || e.srcElement;
                        if ($(_Element).attr("id") == "az-background")
                        {
                            _Main.azWindowClose(e);
                        }
                    }
                });
            }

            // AZWindow Titlebar
            if (_Main.Options.azWindowTitlebar === false)
            {
                _Main.$Titlebar.hide();
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

            $("body").append(_Main.$Window);
            _Main.$Window.hide();
            if (_Main.Options.azWindowAnimation === true)
            {
                _Main.$Window.fadeIn();
            }
            else
            {
                _Main.$Window.show();
            }

            _Main.$Window.width(_Main.Options.azWindowWidth);
            if (_Main.Options.azWindowContentHeight === false)
            {
                _Main.$Window.height(_Main.Options.azWindowHeight);
                _Main.$Dialog.height((_Main.Options.azWindowHeight - AZElementSize(_Main.$Titlebar).Height));
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Dialog.height(_Main.Options.azWindowHeight);
                }
            }
            else
            {
                if (_Main.$Window.height() < 100)
                {
                    _Main.$Window.height(100);
                    _Main.$Dialog.height((100 - AZElementSize(_Main.$Titlebar).Height));
                    if (_Main.Options.azWindowTitlebar === false)
                    {
                        _Main.$Dialog.height(100);
                    }
                }
            }
            _Main.$Window.css({ "left": (window.innerWidth / 2) - (_Main.$Window.width() / 2) });
            if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > (window.innerHeight)))
            {
                _Main.$Window.css({ "top": (window.innerHeight / 2) - (_Main.$Window.height() / 2) });
            }
            else
            {
                _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
            }

            // AZWindow Close
            _Main.azWindowClose = function ()
            {
                if ($(".az-modal-dialog").length === 0)
                {
                    $("#az-background").remove();
                }
                if ($(".az-modal-dialog").length === 0 && $("#az-full-window").length === 0)
                {
                    if (ModalDialogScrollTop > 0)
                    {
                        window.setTimeout(function () { $(window).scrollTop(ModalDialogScrollTop); }, 0);
                    }
                    $("body").removeClass("az-no-parent-scroll").removeClass("az-window-titlebar-active");
                    if ($("body").hasClass("") === true)
                    {
                        $("body").removeAttr("class");
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
                $.publish("functionlib/azWindowAfterClose", { azWindowId: "az-window" });
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
                _Main.WindowTitlebarOptions = $.extend({}, _Defaults, Options || {});

                if ($(".az-window-titlebar-active").length === 0)
                {
                    var _Title = "";
                    if (_Main.WindowTitlebarOptions.azWindowTitle != "")
                    {
                        _Title = _Main.$Titlebar.find('h1').html();
                        _Main.$Titlebar.find('h1').html(_Main.WindowTitlebarOptions.azWindowTitle);
                    }
                    if (_Main.WindowTitlebarOptions.azWindowTitlebarBackgroundColor !== "")
                    {
                        _Main.$Titlebar.css({ "background-color": _Main.WindowTitlebarOptions.azWindowTitlebarBackgroundColor + " !important" });
                    }
                    if (_Main.WindowTitlebarOptions.azWindowTitlebarColor !== "")
                    {
                        _Main.$Titlebar.css({ "color": _Main.WindowTitlebarOptions.azWindowTitlebarColor + " !important" });
                    }
                    $("body").addClass("az-window-titlebar-active");
                    window.setTimeout(function ()
                    {
                        if (_Main.WindowTitlebarOptions.azWindowTitle != "")
                        {
                            _Main.$Titlebar.find('h1').html(_Title);
                        }
                        if (_Main.Options.azWindowTitlebarBackgroundColor !== "")
                        {
                            _Main.$Titlebar.css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important" });
                        }
                        else
                        {
                            _Main.$Titlebar.removeAttr("style");
                        }
                        if (_Main.Options.azWindowTitlebarColor !== "")
                        {
                            _Main.$Titlebar.css({ "color": _Main.Options.azWindowTitlebarColor + " !important" });
                        }
                        else
                        {
                            _Main.$Titlebar.removeAttr("style");
                        }
                        $("body").removeClass("az-window-titlebar-active");
                        if ($("body").hasClass("") === true)
                        {
                            $("body").removeAttr("class");
                        }
                    }, _Main.WindowTitlebarOptions.azWindowAlertTimeout);
                }
            };

            //AZWindow Resize
            _Main.azWindowResize = function (Options)
            {
                var _Defaults =
                {
                    azWindowWidth: _Main.Options.azWindowWidth,
                    azWindowHeight: _Main.Options.azWindowHeight
                };
                _Main.WindowResizeOptions = $.extend({}, _Defaults, Options || {});

                if (_Main.WindowResizeOptions.azWindowWidth > (window.innerWidth - 28))
                {
                    _Main.WindowResizeOptions.azWindowWidth = (window.innerWidth - 28);
                }
                if (_Main.Options.azWindowPositionTop > 0)
                {
                    if ((_Main.WindowResizeOptions.azWindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                    {
                        _Main.WindowResizeOptions.azWindowHeight = ((window.innerHeight - 28) - _Main.Options.azWindowPositionTop);
                    }
                }
                if (_Main.WindowResizeOptions.azWindowHeight > (window.innerHeight - 28))
                {
                    _Main.WindowResizeOptions.azWindowHeight = (window.innerHeight - 28);
                }
                _Main.$Window.width(_Main.WindowResizeOptions.azWindowWidth);
                _Main.$Window.height(_Main.WindowResizeOptions.azWindowHeight);
                _Main.$Dialog.height((_Main.WindowResizeOptions.azWindowHeight - AZElementSize(_Main.$Titlebar).Height));
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Dialog.height(_Main.WindowResizeOptions.azWindowHeight);
                }
                _Main.$Window.css({ "left": (window.innerWidth / 2) - (_Main.$Window.width() / 2) });
                if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > (window.innerHeight)))
                {
                    _Main.$Window.css({ "top": (window.innerHeight / 2) - (_Main.$Window.height() / 2) });
                }
                else
                {
                    _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                }
            };

            $.publish("functionlib/azWindowAfterOpen",
                {
                    $Window: _Main.$Window,
                    $Titlebar: _Main.$Titlebar,
                    $Dialog: _Main.$Dialog,
                    $Article: _Main.$Article,
                    azWindowId: "az-window",
                    azWindowClose: _Main.azWindowClose,
                    azChangeWindowTitlebar: _Main.azChangeWindowTitlebar,
                    azWindowResize: _Main.azWindowResize
                });
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
            azFullWindowHeight: 100,
            azFullWindowBackgroundColor: "",
            azFullWindowColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($("#az-full-window").length === 0)
        {
            $.publish("functionlib/azFullWindowBeforeOpen", { azFullWindowId: "az-full-window" });

            ModalDialogScrollTop = 0;
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
            if (Number.isInteger(_Main.Options.azFullWindowHeight) === false || _Main.Options.azFullWindowHeight < 1 || _Main.Options.azFullWindowHeight > 100)
            {
                _Main.Options.azFullWindowHeight = 100;
            }
            if (Number.isInteger(_Main.Options.azFullWindowFadeIn) === false || _Main.Options.azFullWindowFadeIn < 1)
            {
                _Main.Options.azFullWindowFadeIn = 400;
            }
            if (Number.isInteger(_Main.Options.azFullWindowFadeOut) === false || _Main.Options.azFullWindowFadeOut < 1)
            {
                _Main.Options.azFullWindowFadeOut = 400;
            }

            _Main.AnimateOpenOptions = {};
            _Main.AnimateCloseOptions = {};
            if (_Main.Options.azFullWindowPosition == "top")
            {
                _Main.AnimateOpenOptions = { "height": _Main.Options.azFullWindowHeight + "%", "opacity": 1 };
                _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                _Main.$Window.css({ "top": 0 });
            }
            else if (_Main.Options.azFullWindowPosition == "bottom")
            {
                _Main.AnimateOpenOptions = { "height": _Main.Options.azFullWindowHeight + "%", "opacity": 1 };
                _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                _Main.$Window.css({ "bottom": 0 });
            }

            _Main.$Window.html(_Main.Options.azFullWindowText);
            _Main.$Window.append(_Main.$Close);
            $("body").append(_Main.$Window).addClass("az-no-parent-scroll");
            ModalDialogScrollTop = $(window).scrollTop();
            _Main.$Window.animate(_Main.AnimateOpenOptions, _Main.Options.azFullWindowFadeIn);

            _Main.$Close.on('click', function (e)
            {
                _Main.azFullWindowClose(e);
            });

            // AZFullWindow Close
            _Main.azFullWindowClose = function (e)
            {
                $("body").removeClass("az-no-parent-scroll");
                if ($("body").hasClass("") === true)
                {
                    $("body").removeAttr("class");
                }
                if (ModalDialogScrollTop > 0)
                {
                    window.setTimeout(function () { $(window).scrollTop(ModalDialogScrollTop); }, 0);
                }
                _Main.$Window.animate(_Main.AnimateCloseOptions, _Main.Options.azFullWindowFadeOut, function ()
                {
                    $(this).remove();
                });
                $.publish("functionlib/azFullWindowAfterClose", { azFullWindowId: "az-full-window" });
            };

            $.publish("functionlib/azFullWindowAfterOpen",
                {
                    $Window: _Main.$Window,
                    $Close: _Main.$Close,
                    azFullWindowId: "az-full-window",
                    azFullWindowClose: _Main.azFullWindowClose
                });
        }
    }
    else
    {
        return new AZFullWindow(Options);
    }
}

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
            $("body").append(_Main.$SlideIn);

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

function AZSlideshow(Options)
{
    if (this instanceof AZSlideshow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSlideshowId: "",
            azSlideshowType: "slideshow",
            azSlideshowDirection: "horisontal",
            azSlideshowEffect: "fade",
            azSlideshowArrows: true,
            azSlideshowPagination: false,
            azSlideshowAutoplay: false,
            azSlideshowLoop: true,
            azSlideshowSpeed: 400,
            azSlideshowWidth: 0,
            azSlideshowHeight: 0
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideshowId != "")
        {
            _Main.SwiperOptions = {};
            _Main.$SwiperOutherWrapper = $('<div class="swiper-outher-wrapper"></div>');
            if (_Main.Options.azSlideshowType == "page")
            {
                _Main.$SwiperOutherWrapper = $('<div class="swiper-outher-wrapper-page"></div>');
            }

            if (_Main.Options.azSlideshowWidth > 0)
            {
                _Main.$SwiperOutherWrapper.width(_Main.Options.azSlideshowWidth);
            }
            if (_Main.Options.azSlideshowHeight > 0)
            {
                _Main.$SwiperOutherWrapper.height(_Main.Options.azSlideshowHeight);
            }
            _Main.$Swiper = $("#" + _Main.Options.azSlideshowId).wrap(_Main.$SwiperOutherWrapper);
            _Main.SwiperOptions.speed = _Main.Options.azSlideshowSpeed;

            // Page
            if (_Main.Options.azSlideshowType == "page")
            {
                if (_Main.Options.azSlideshowDirection == "vertical")
                {
                    _Main.SwiperOptions.direction = "vertical";
                }
                _Main.SwiperOptions.slidesPerView = 1;
                _Main.SwiperOptions.spaceBetween = 30;
                _Main.SwiperOptions.mousewheel = true;
                _Main.SwiperOptions.grabCursor = true;
                _Main.Options.azSlideshowEffect = "";
                _Main.Options.azSlideshowAutoplay = false;
                _Main.Options.azSlideshowLoop = false;
                _Main.Options.azSlideshowArrows = false;
                _Main.Options.azSlideshowPagination = false;
            }

            // Effects
            if (_Main.Options.azSlideshowEffect === "fade")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "fade";
            }
            if (_Main.Options.azSlideshowEffect === "cube")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "cube";
                _Main.SwiperOptions.cubeEffect =
                {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                };
                _Main.Options.azSlideshowArrows = false;
                _Main.Options.azSlideshowPagination = false;
            }
            if (_Main.Options.azSlideshowEffect === "flip")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "flip";
                _Main.Options.azSlideshowPagination = false;
            }
            if (_Main.Options.azSlideshowEffect === "coverflow")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "coverflow";
                _Main.SwiperOptions.centeredSlides = true;
                _Main.SwiperOptions.slidesPerView = "auto";
                _Main.SwiperOptions.coverflowEffect =
                {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                };
                _Main.Options.azSlideshowArrows = false;
                _Main.Options.azSlideshowPagination = false;
            }
            if (_Main.Options.azSlideshowEffect === "creative1")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        translate: [0, 0, -400]
                    },
                    next:
                    {
                        shadow: true,
                        translate: ["100%", 0, 0]
                    }
                };
            }
            if (_Main.Options.azSlideshowEffect === "creative2")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        translate: ["-120%", 0, -500]
                    },
                    next:
                    {
                        shadow: true,
                        translate: ["120%", 0, -500]
                    }
                };
            }
            if (_Main.Options.azSlideshowEffect === "creative3")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        translate: ["-20%", 0, -1]
                    },
                    next:
                    {
                        translate: ["100%", 0, 0]
                    }
                };
            }
            if (_Main.Options.azSlideshowEffect === "creative4")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [180, 0, 0]
                    },
                    next:
                    {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [-180, 0, 0]
                    }
                };
            }
            if (_Main.Options.azSlideshowEffect === "creative5")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        translate: ["-125%", 0, -800],
                        rotate: [0, 0, -90]
                    },
                    next:
                    {
                        shadow: true,
                        translate: ["125%", 0, -800],
                        rotate: [0, 0, 190]
                    }
                };
            }
            if (_Main.Options.azSlideshowEffect === "creative6")
            {
                _Main.SwiperOptions.grabCursor = true;
                _Main.SwiperOptions.effect = "creative";
                _Main.SwiperOptions.creativeEffect =
                {
                    prev:
                    {
                        shadow: true,
                        origin: "left center",
                        translate: ["-5%", 0, -200],
                        rotate: [0, 100, 0]
                    },
                    next:
                    {
                        origin: "right center",
                        translate: ["5%", 0, -200],
                        rotate: [0, -100, 0]
                    }
                };
            }

            if (_Main.Options.azSlideshowAutoplay === true)
            {
                _Main.SwiperOptions.autoplay =
                {
                    delay: 3000
                };
            }
            if (_Main.Options.azSlideshowLoop === true)
            {
                _Main.SwiperOptions.loop = true;
            }
            if (_Main.Options.azSlideshowArrows === true && window.innerWidth > 576)
            {
                _Main.$Swiper.children(".swiper-wrapper").append('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
                _Main.SwiperOptions.navigation =
                {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                };
            }
            if (_Main.Options.azSlideshowPagination === true && window.innerWidth > 576)
            {
                _Main.$Swiper.children(".swiper-wrapper").append('<div class="swiper-pagination"></div>');
                _Main.SwiperOptions.pagination =
                {
                    el: ".swiper-pagination",
                    clickable: true
                };
            }

            new Swiper("#" + _Main.Options.azSlideshowId, _Main.SwiperOptions);
            var _SwiperCssOptions =
            {
                width: '100%'
            };
            var _SwiperSlideCssOptions =
            {
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            };
            if (_Main.Options.azSlideshowEffect !== "coverflow")
            {
                _SwiperCssOptions.height = '100%';
            }
            else
            {
                _SwiperCssOptions.paddingTop = '50px';
                _SwiperCssOptions.paddingBottom = '50px';
                _SwiperSlideCssOptions.width = '300px';
                _SwiperSlideCssOptions.height = '300px';
            }
            _Main.$Swiper.css(_SwiperCssOptions);
            $(".swiper-slide", _Main.$Swiper).css(_SwiperSlideCssOptions);
            $(".swiper-slide > img", _Main.$Swiper).css({ 'display': 'block', 'width': '100%' });

            $.publish("functionlib/azSlideshowAfterOpen", _Main);
        }
    }
    else
    {
        return new AZSlideshow(Options);
    }
}

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
                var _$RoleAlert = $("[role='alert']", _Main.$Area);
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

function AZValidateDirtyChange(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        if (!$(_Element).attr("readonly"))
        {
            var _Data =
            {
                azInputId: $(_Element).attr("id") != undefined ? $(_Element).attr("id") : $(_Element).attr("data-id") != undefined ? $(_Element).attr("data-id") : "",
                azInputName: $(_Element).attr("name") === undefined ? "" : $(_Element).attr("name"),
                azInputClass: $(_Element).attr("class") === undefined ? "" : $(_Element).attr("class"),
                azInputJQElement: $(_Element)
            };
            $.publish("functionlib/azValidateDirty",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
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
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        var _KeyChar = e.keyCode || e.which;
        var _ValidType = AZGetValidType(e.data.ValidType);
        if (AZIsNullOrEmpty(_ValidType) === false)
        {
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
        "validate-userpass": "NOT|§\"",
        "validate-ip": "1234567890.",
        "validate-connectionid": "abcdefghijklmnopqrstuvwxyz"
    };
    return _ValidTypes[SelectedType];
}

// Empty
// InvalidChar
// Decimal
// Date
// DateTime
// Time
// Email
// Web
// IP
// MaxLength
// MinLength
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
                            var _$RoleAlert = $("[role='alert']", _$Area);
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

function AZValidateInput($Input, CurrentValidationObj)
{
    var _ReturnValidationObj = {};
    var _CurrentInputType = GetCurrentInputType($Input);
    var _CurrentValidType = CurrentValidationObj.class.match(/[\w-]*validate-[\w-]*/g)[0].toLowerCase();
    var _CurrentInputValue = "";
    var _ValidType = "";
    var _ListChar = [];

    if (_CurrentInputType == "input")
    {
        _CurrentInputValue = $Input.val().replace(/^\s+|\s+$/g, '');
        if (CurrentValidationObj.label.toLowerCase() === "mandatory" && _CurrentInputValue === "")
        {
            _ReturnValidationObj.Error = "Empty";
        }
        else if ((CurrentValidationObj.label.toLowerCase() === "mandatory" || CurrentValidationObj.label.toLowerCase() === "optional") && _CurrentInputValue !== "")
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
                _ReturnValidationObj.Error = "InvalidChar";
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
                    _ReturnValidationObj.Error = "Decimal";
                }
                if (_CurrentValidType === "validate-date" && isNaN(new Date($Input.datepicker("getDate"))))
                {
                    _ReturnValidationObj.Error = "Date";
                }
                if (_CurrentValidType === "validate-datetime")
                {
                    var _LongDateFormat = moment()._locale._longDateFormat;
                    if (AZIsValidDateTime(moment(_CurrentInputValue, _LongDateFormat.L + " " + _LongDateFormat.LT)) === false)
                    {
                        _ReturnValidationObj.Error = "DateTime";
                    }
                }
                if (_CurrentValidType === "validate-time" && AZIsValidDateTime('0001-01-01 ' + _CurrentInputValue) === false)
                {
                    _ReturnValidationObj.Error = "Time";
                }
                if (_CurrentValidType === "validate-email" && AZIsValidEmail(_CurrentInputValue) === false)
                {
                    _ReturnValidationObj.Error = "Email";
                }
                if (_CurrentValidType === "validate-web" && AZIsValidURL(_CurrentInputValue) === false)
                {
                    _ReturnValidationObj.Error = "Web";
                }
                if (_CurrentValidType === "validate-ip" && AZIsValidIP(_CurrentInputValue) === false)
                {
                    _ReturnValidationObj.Error = "IP";
                }
                if (CurrentValidationObj.hasOwnProperty("maxlength") === true && _CurrentInputValue.length > CurrentValidationObj.maxlength)
                {
                    _ReturnValidationObj.Error = "MaxLength";
                }
                if (CurrentValidationObj.hasOwnProperty("minlength") === true && _CurrentInputValue.length < CurrentValidationObj.minlength)
                {
                    _ReturnValidationObj.Error = "MinLength";
                }
            }
        }
    }
    else if (_CurrentInputType === "select" && CurrentValidationObj.label.toLowerCase() === "mandatory")
    {
        if ($Input.val() == "" || $Input.val() == null || $Input.val() == undefined || $Input.val() == "0")
        {
            _ReturnValidationObj.Error = "Empty";
        }
    }
    return _ReturnValidationObj;

    function GetCurrentInputType($Input)
    {
        var _Return = "";
        if ($Input.is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color'], textarea"))
        {
            _Return = "input";
        }
        else if ($Input.is("select"))
        {
            _Return = "select";
        }
        return _Return;
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
    if (_DefaultLanguage == "")
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

function AZIsValidIP(IP)
{
    var _RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return _RegExp.test(IP);
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

function AZValidateInputValueFocusout(e)
{
    var _Element = e.target || e.srcElement;
    var _CurrentValidType = e.data.ValidType[0];
    if (_CurrentValidType === "validate-decimal")
    {
        $(_Element).val(numeral($(_Element).val()).format('0.00'));
    }
}

// date
// pastdate
// nopastdate
// fromdate
// todate
// frompastdate
// topastdate
// fromnopastdate
// tonopastdate
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
                    SetDatePickerSize();
                },
                onSelect: function (curDate, instance)
                {
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                maxDate: 0,
                yearRange: "-60:+0",
                onSelect: function (curDate, instance)
                {
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                minDate: 0,
                onSelect: function (curDate, instance)
                {
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".todate").datepicker("option", "minDate", curDate);
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".fromdate").datepicker("option", "maxDate", curDate);
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                maxDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".topastdate").datepicker("option", "minDate", curDate);
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                maxDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".frompastdate").datepicker("option", "maxDate", curDate);
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                minDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".tonopastdate").datepicker("option", "minDate", curDate);
                    PublishSetDate(curDate);
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
                    SetDatePickerSize();
                },
                minDate: 0,
                numberOfMonths: 2,
                onSelect: function (curDate, instance)
                {
                    $(".fromnopastdate").datepicker("option", "maxDate", curDate);
                    PublishSetDate(curDate);
                }
            });
    }
    if (_DatePicker == true)
    {
        $Obj.attr("readOnly", true);
        $.datepicker.setDefaults($.datepicker.regional[DefaultLanguage]);
    }

    function SetDatePickerSize()
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
    }

    function PublishSetDate(curDate)
    {
        var _Date = AZSetDateFormat($Obj.datepicker("getDate"));
        $.publish("functionlib/azSetDate",
            {
                azDateId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                azDateName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                azDateClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                azDateLocalDate: curDate,
                azDateISODate: _Date.ISODate,
                azDateENUSDate: _Date.ENUSDate,
                azDateJQElement: $Obj
            });
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
                    var _Time = AZSetTimeFormat('0001-01-01 ' + curTime);
                    $.publish("functionlib/azSetTime",
                        {
                            azTimeId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                            azTimeName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                            azTimeClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                            azTimeLocalTime: curTime,
                            azTimeISOTime: curTime != "" ? _Time.ISOTime : "",
                            azTimeENUSTime: curTime != "" ? _Time.ENUSTime : "",
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
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        if (AZIsNullOrEmpty($(_Element).val()) === false)
        {
            $(_Element).siblings('.az-label-animated').addClass('top');
        }
        else
        {
            $(_Element).siblings('.az-label-animated').removeClass('top');
        }
    }
}

function AZInputAnimatedSlideupFocusout(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        var _$Sibling = $(_Element).siblings('.az-label-slideup');
        if (AZIsNullOrEmpty($(_Element).val()) === false)
        {
            if (_$Sibling.hasClass('xs') === true)
            {
                _$Sibling.addClass('xs-top');
            }
            else if (_$Sibling.hasClass('sm') === true)
            {
                _$Sibling.addClass('sm-top');
            }
            else if (_$Sibling.hasClass('md') === true)
            {
                _$Sibling.addClass('md-top');
            }
            else
            {
                _$Sibling.addClass('normal-top');
            }
        }
        else
        {
            _$Sibling.removeClass('xs-top').removeClass('sm-top').removeClass('md-top').removeClass('normal-top');
        }
    }
}

function AZForceUppercaseKeypressFocusout(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        $(_Element).val($(_Element).val().toUpperCase());
    }
}

function AZForceLowercaseKeypressFocusout(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        $(_Element).val($(_Element).val().toLowerCase());
    }
}

function AZDoNotPaste(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        if (e.ctrlKey == true && (e.which == 118 || e.which == 86))
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    }
}

function AZNotEnter(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        if ((e.keyCode || e.which) == 13)
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    }
}

function AZCheckboxClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        var _$SelectedCheckbox = $(this);
        $.publish("functionlib/azCheckboxClick",
            {
                azCheckboxId: _$SelectedCheckbox.attr("id") != undefined ? _$SelectedCheckbox.attr("id") : _$SelectedCheckbox.attr("data-id") != undefined ? _$SelectedCheckbox.attr("data-id") : "",
                azCheckboxName: _$SelectedCheckbox.attr("name") === undefined ? "" : _$SelectedCheckbox.attr("name"),
                azCheckboxClass: _$SelectedCheckbox.attr("class") === undefined ? "" : _$SelectedCheckbox.attr("class"),
                azCheckboxValue: _$SelectedCheckbox.attr("value") === undefined ? "" : _$SelectedCheckbox.attr("value"),
                azCheckboxChecked: _$SelectedCheckbox.is(":checked"),
                azCheckboxJQElement: $(_Element)
            });
    }
}

function AZRadioClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
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
}

function AZSwitchClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
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
}

function AZRange(e)
{
    if (AZIsNullOrEmpty(e) === false)
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

function AZToggleNavbarMobile()
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
    if (AZIsNullOrEmpty(e) === false)
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
}

function AZRemoveDropdown(e)
{
    if (AZIsNullOrEmpty(e) === false)
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
}

function AZHideShowPassword(e)
{
    if (AZIsNullOrEmpty(e) === false)
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
        if (AZIsNullOrEmpty(_SelectedElementId) === false)
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
}

function AZLabelAnimatedClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        $(_Element).siblings(":input").focus();
    }
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

function AZIsNullOrEmpty(Value)
{
    if (Value != "" && Value != null && Value != undefined)
    {
        return false;
    }
    else
    {
        return true;
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
    if (Bytes !== null && Bytes !== undefined && Bytes != "")
    {
        if (RegExp('^\\d+$').test(Bytes) === true)
        {
            var _Kilo = 1000;
            var _Decimal = Decimal === 0 ? 0 : Decimal || 2;
            var _Sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var _Index = Math.floor(Math.log(Bytes) / Math.log(_Kilo));
            _Return = parseFloat((Bytes / Math.pow(_Kilo, _Index)).toFixed(_Decimal)) + ' ' + _Sizes[_Index];
        }
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

function AZExistObj(List, x, y, z)
{
    return AZIsEmpty(AZGetObj(List, x, y, z)) === false;
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
        if (e !== undefined)
        {
            var _R = Math.random() * 16 | 0;
            var _V = e == 'x' ? _R : (_R & 0x3 | 0x8);
            return _V.toString(16);
        }
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
    if (AZIsEmpty($SelectedCheckbox) === false)
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
}

function AZResolutionConverter(Width, Height, Decimal)
{
    var _Return = "0 MP";
    if (AZIsNullOrEmpty(Width) === false && AZIsNullOrEmpty(Height) === false)
    {
        var _Decimal = Decimal === 0 ? 0 : Decimal || 2;
        _Return = ((Width * Height) / 1000000).toFixed(_Decimal) + ' MP';
    }
    return _Return;
}

function AZResetForm(Options)
{
    if (AZIsEmpty(Options) === false && Options.hasOwnProperty("$Form"))
    {
        Options.$Form.trigger('reset');
        $.publish("functionlib/AZResetForm");
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZResetForm - Options is empty or missing some properties" });
    }
}

function AZElementSize(Element)
{
    if (Element instanceof Object)
    {
        if (Element.length > 0)
        {
            return GetElementSize(Element);
        }
        else
        {
            return {};
        }
    }
    else if (typeof Element == 'string')
    {
        if ($('#' + Element).length > 0)
        {
            return GetElementSize($('#' + Element));
        }
        else
        {
            return {};
        }
    }
    else
    {
        return {};
    }

    function GetElementSize($Object)
    {
        var _Return = {};
        var _Element = $Object[0];
        var _Style = window.getComputedStyle ? getComputedStyle(_Element, null) : _Element.currentStyle;
        var _Width = _Element.offsetWidth;
        var _Height = _Element.offsetHeight;
        var _MarginTop = parseInt(_Style.marginTop) || 0;
        var _MarginBottom = parseInt(_Style.marginBottom) || 0;
        var _MarginLeft = parseInt(_Style.marginLeft) || 0;
        var _MarginRight = parseInt(_Style.marginRight) || 0;
        _Return.Width = (_Width + _MarginLeft + _MarginRight);
        _Return.Height = (_Height + _MarginTop + _MarginBottom);
        return _Return;
    }
}

function AZTooltip(Options)
{
    var _Lang = false;
    if (AZIsNullOrEmpty(Options) === false && AZIsEmpty(Options) === false)
    {
        if (Options.hasOwnProperty('LanguageCode') === true && AZIsNullOrEmpty(Options.LanguageCode) === false)
        {
            _Lang = true;
        }
    }
    var _Defaults =
    {
        LanguageCode: "nb-NO",
        File: "/lib/help/help.html"
    };
    var _Options = $.extend({}, _Defaults, Options || {});
    if (_Lang === false)
    {
        var _DefaultLanguage = AZClientStorage("get", "language", "");
        if (_DefaultLanguage != "")
        {
            _Options.LanguageCode = _DefaultLanguage;
        }
    }
    $('body').tooltip(
        {
            items: "[data-help]",
            content: function ()
            {
                var _$Div = $('<div>');
                _$Div.load(_Options.File + " #" + $(this).attr("data-help") + "-" + _Options.LanguageCode);
                return _$Div;
            },
            close: function (event, ui)
            {
                $(".ui-helper-hidden-accessible").remove();
            }
        });
}

function AZLoadTemplates(Options)
{
    var _Defaults =
    {
        TemplateId: "",
        Url: "/lib/template/template.html"
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if (AZIsNullOrEmpty(_Options.TemplateId) === false && AZIsNullOrEmpty(_Options.TemplateId) === false)
    {
        $('<div>').load(_Options.Url + " #" + _Options.TemplateId, function ()
        {
            $.publish("functionlib/azLoadTemplates", $($(this).html()).html());
        });
    }
}

function AZDownloadURL(Url, Filename) 
{
    var _Link = document.createElement("a");
    _Link.setAttribute('download', Filename);
    _Link.href = Url;
    document.body.appendChild(_Link);
    _Link.click();
    _Link.remove();
}

function AZDownloadFileContent(Content, MimeType, Filename)
{
    var _Link = document.createElement('a');
    var _Blob = new Blob([Content], { type: MimeType });
    var _Url = URL.createObjectURL(_Blob);
    _Link.setAttribute('href', _Url);
    _Link.setAttribute('download', Filename);
    _Link.click();
    _Link.remove();
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