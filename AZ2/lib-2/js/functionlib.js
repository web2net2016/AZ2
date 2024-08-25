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

var ObjPageData =
{
    Elements: {},
    Values: {}
};
var ModalDialogScrollTop = 0;
var AZStandardAlertReturnObj = {};

$(function ()
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

    if (typeof SetAZPage == "function")
    {
        SetAZPage();
    }

    var _azLastScrollTop = 0;
    $(window).on("scroll", function ()
    {
        var _Data =
        {
            azWindowScrollTop: parseInt($(window).scrollTop()),
            azWindowScrollDir: ($(window).scrollTop() > _azLastScrollTop) ? "down" : "up"
        };
        $.publish("functionlib/azWindowScroll",
            {
                azWindowScrollTop: _Data.azWindowScrollTop,
                azWindowScrollDir: _Data.azWindowScrollDir
            });
        _azLastScrollTop = $(this).scrollTop();
    });

    window.setTimeout(function ()
    {
        PublishWindowResize();
    }, 100);
    $(window).on("resize", function ()
    {
        PublishWindowResize();
    });
    function PublishWindowResize()
    {
        var _Data =
        {
            azWindowWidth: parseInt(window.innerWidth),
            azWindowHeight: parseInt(window.innerHeight),
            azWindowScrollTop: parseInt($(window).scrollTop()),
            azWindowScrollLeft: parseInt($(window).scrollLeft()),
            azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
        };
        $.publish("functionlib/azWindowResize",
            {
                azWindowWidth: _Data.azWindowWidth,
                azWindowHeight: _Data.azWindowHeight,
                azWindowScrollTop: _Data.azWindowScrollTop,
                azWindowScrollLeft: _Data.azWindowScrollLeft,
                azWindowOrientation: _Data.azWindowOrientation
            });
    }

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

// html
// text
// val
// cmdlbl
// title
// placeholder
// htmlembedded
// htmlembedded-left
// htmlembedded-right
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
            if ($(this).attr("class") != undefined)
            {
                _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            }
            $(this).off("keydown", AZValidateInputValueKeydown).on("keydown", { ValidType: _ValidType }, AZValidateInputValueKeydown);
            if ($(this).hasClass("forceuppercase"))
            {
                $(this).off("keydown focusout", AZForceUppercaseKeypressFocusout).on("keydown focusout", AZForceUppercaseKeypressFocusout);
            }
            if ($(this).hasClass("forcelowercase"))
            {
                $(this).off("keydown focusout", AZForceLowercaseKeypressFocusout).on("keydown focusout", AZForceLowercaseKeypressFocusout);
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
                $(this).on("click", function ()
                {
                    $(this)[0].select();
                });
            }
            if ($(this).hasClass("az-input-animated"))
            {
                $(this).off("focusout", AZInputAnimatedFocusout).on("focusout", AZInputAnimatedFocusout);
            }
            if ($(this).hasClass("az-input-slideup"))
            {
                $(this).off("focusout", AZInputAnimatedSlideupFocusout).on("focusout", AZInputAnimatedSlideupFocusout);
            }
            AZDatepicker($(this), _DefaultLanguage);
            AZTimepicker($(this), _DefaultLanguage);
        }
        if ($(this).is("textarea"))
        {
            _ValidType = "";
            $(this).attr("autocomplete", "false");
            if ($(this).attr("class") != undefined)
            {
                _ValidType = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
            }
            $(this).off("keydown", AZValidateInputValueKeydown).on("keydown", { ValidType: _ValidType }, AZValidateInputValueKeydown);
            if ($(this).hasClass("forceuppercase"))
            {
                $(this).off("keydown focusout", AZForceUppercaseKeypressFocusout).on("keydown focusout", AZForceUppercaseKeypressFocusout);
            }
            if ($(this).hasClass("forcelowercase"))
            {
                $(this).off("keydown focusout", AZForceLowercaseKeypressFocusout).on("keydown focusout", AZForceLowercaseKeypressFocusout);
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
                $(this).on("click", function ()
                {
                    $(this)[0].select();
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
            if ($(this).hasClass("az-select"))
            {
                $(this).off("change", AZSelectChange).on("change", AZSelectChange);
            }
        }
        if ($(this).is("button"))
        {
            if ($(this).hasClass("cancel") && typeof AZCancel == "function")
            {
                $(this).off("click", AZCancel).on("click", AZCancel);
            }
            if ($(this).hasClass("submit") && typeof AZSubmit == "function")
            {
                $(this).off("click", AZSubmit).on("click", AZSubmit);
            }
            if ($(this).hasClass("delete") && typeof AZDelete == "function")
            {
                $(this).off("click", AZDelete).on("click", AZDelete);
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
        if ($(this).is("[type='range']") && $(this).hasClass("az-range"))
        {
            $(this).off("input change", AZRange).on("input change", AZRange);
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
    $(".az-input-spinner").not(".done").each(function ()
    {
        _$CurrentSpinner = $(this).attr("disabled", true).addClass("done");
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

function AZValidateInputValueKeydown(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _Element = e.target || e.srcElement;
        var _KeyChar = e.keyCode || e.which;
        var _ValidType = AZGetValidType(e.data.ValidType);
        var _CharDesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 129, 141, 143, 144, 157];
        var _SpesCharList = ['ScrollLock', 'Pause', 'Insert', 'Home', 'PageUp', 'PageDown', 'End', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Insert', 'Meta', 'ContextMenu',]

        if (_CharDesList.includes(_KeyChar) === true || _SpesCharList.includes(e.key) === true || e.ctrlKey === true)
        {
            ResetAZStandardAlert();
            TriggerSpecialChar();
        }
        else
        {
            if (_CharDesList.includes(_KeyChar) === false && _SpesCharList.includes(e.key) === false && e.ctrlKey === false)
            {
                ResetAZStandardAlert();
                if (AZIsNullOrEmpty(_ValidType) === false)
                {
                    if (_ValidType.substring(0, 3) === "NOT")
                    {
                        _ValidType = _ValidType.substring(3);
                        if (_ValidType.includes(e.key.toLowerCase()) === false)
                        {
                            TriggerNormal();
                        }
                        else
                        {
                            TriggerAlert();
                        }
                    }
                    else if (_ValidType.includes(e.key.toLowerCase()) === true)
                    {
                        TriggerNormal();
                    }
                    else
                    {
                        TriggerAlert();
                    }
                }
                else
                {
                    TriggerNormal();
                }
            }
        }

        function TriggerSpecialChar()
        {
            var _$Element = $(_Element);
            setTimeout(function ()
            {
                var _Data =
                {
                    azInputId: _$Element.attr("id") != undefined ? _$Element.attr("id") : _$Element.attr("data-id") != undefined ? _$Element.attr("data-id") : "",
                    azInputName: _$Element.attr("name") === undefined ? "" : _$Element.attr("name"),
                    azInputClass: _$Element.attr("class") === undefined ? "" : _$Element.attr("class"),
                    azInputKey: e.code,
                    azInputJQElement: _$Element
                };
                $.publish("functionlib/asValidateInputSpecialChar",
                    {
                        azInputId: _Data.azInputId,
                        azInputName: _Data.azInputName,
                        azInputClass: _Data.azInputClass,
                        azInputKey: _Data.azInputKey,
                        azInputJQElement: _Data.azInputJQElement
                    });
                if (typeof AZValidateDirty == "function")
                {
                    AZValidateDirty("functionlib/asValidateInputSpecialChar", _Data);
                }
            }, 0);
        }

        function TriggerNormal()
        {
            var _$Element = $(_Element);
            setTimeout(function ()
            {
                var _InputKey = e.key;
                var _InputValue = _Element.value;

                $.each($._data(_$Element[0], "events"), function (Index, Obj)
                {
                    if (Obj[0].type == "focusout")
                    {
                        if (Obj[0].handler.name == "AZForceUppercaseKeypressFocusout")
                        {
                            _InputKey = _InputKey.toUpperCase();
                            _InputValue = _InputValue.toUpperCase();
                        }
                        if (Obj[0].handler.name == "AZForceLowercaseKeypressFocusout")
                        {
                            _InputKey = _InputKey.toLowerCase();
                            _InputValue = _InputValue.toLowerCase();
                        }                        
                    }
                });

                var _Data =
                {
                    azInputId: _$Element.attr("id") != undefined ? _$Element.attr("id") : _$Element.attr("data-id") != undefined ? _$Element.attr("data-id") : "",
                    azInputName: _$Element.attr("name") === undefined ? "" : _$Element.attr("name"),
                    azInputClass: _$Element.attr("class") === undefined ? "" : _$Element.attr("class"),
                    azInputKey: _InputKey,
                    azInputValue: _InputValue,
                    azInputJQElement: _$Element
                };

                $.publish("functionlib/asValidateInputValueKeydown",
                    {
                        azInputId: _Data.azInputId,
                        azInputName: _Data.azInputName,
                        azInputClass: _Data.azInputClass,
                        azInputKey: _Data.azInputKey,
                        azInputValue: _Data.azInputValue,
                        azInputJQElement: _Data.azInputJQElement
                    });
                if (typeof AZValidateDirty == "function")
                {
                    AZValidateDirty("functionlib/asValidateInputValueKeydown", _Data);
                }
            }, 0);
        }

        function TriggerAlert()
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var _$Element = $(_Element);
            var _Data =
            {
                azInputId: _$Element.attr("id") != undefined ? _$Element.attr("id") : _$Element.attr("data-id") != undefined ? _$Element.attr("data-id") : "",
                azInputName: _$Element.attr("name") === undefined ? "" : _$Element.attr("name"),
                azInputClass: _$Element.attr("class") === undefined ? "" : _$Element.attr("class"),
                azInputValue: _Element.value,
                azInputInvalidChar: e.key,
                azInputValidChar: _ValidType.toString(),
                azInputValidType: e.data.ValidType.toString(),
                azInputJQElement: _$Element
            };
            $.publish("functionlib/azValidateInputValidChar",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
                    azInputValue: _Data.azInputValue,
                    azInputInvalidChar: _Data.azInputInvalidChar,
                    azInputValidChar: _Data.azInputValidChar,
                    azInputValidType: _Data.azInputValidType,
                    azInputJQElement: _Data.azInputJQElement
                });
            if (typeof AZValidateDirty == "function")
            {
                AZValidateDirty("functionlib/azValidateInputValidChar", _Data);
            }
        }
    }
}

function AZGetValidType(SelectedType)
{
    var _ValidTypes = {};
    _ValidTypes =
    {
        "validate-alpha": "NOT|§\\",
        "validate-numeric": "1234567890",
        "validate-decimal": "1234567890,.",
        "validate-date": "1234567890./",
        "validate-datetime": "1234567890apm./:\u0020",
        "validate-time": "1234567890apm:\u0020",
        "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz@.!#%&/=?`-_*'~^+",
        "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz@.:_/?=%+~#",
        "validate-userpass": "NOT|§\\",
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
    ResetAZStandardAlert();
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
            _$Input = $('#' + HTMLElement, _$Area);

            if (_$Input.length > 0)
            {
                if (Value.hasOwnProperty("label") === true && Value.hasOwnProperty("class") === true && Value.hasOwnProperty("datatype") === true)
                {
                    if (Value.class.indexOf("validate") > -1)
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

                        _ObjReturnValidation = AZSerializeFormValidateInput(_$Input, _ObjCurrentValidation);
                        if (AZIsEmpty(_ObjReturnValidation) === false)
                        {
                            _ObjReturnValidation.Input = _$Input.attr("id");
                            consoleLog({ consoleType: "warn", consoleText: "AZSerializeForm - " + _ObjReturnValidation.Input + " - " + _ObjReturnValidation.Error });
                            new AZStandardAlert(
                                {
                                    AZWindowStyle: AZIsNullOrEmpty(Options.AZWindowStyle) === false ? Options.AZWindowStyle : "rounded",
                                    $Area: _$Area,
                                    InputElement: _$Input,
                                    Title: Options.ObjLanguage.SingleDefaultElements.informationTitle,
                                    Text: Options.ObjLanguage.SingleElements[_ObjReturnValidation.Input + _ObjReturnValidation.Error]
                                });
                            _InputError = true;
                            return false;
                        }
                    }
                    else
                    {
                        _ObjOutputData[_$Input.attr("id")] = _$Input.val();
                    }
                }
                else
                {
                    _ObjReturnValidation.Error = "";
                    _InputError = true;
                    ConsoleLogError("Missing one of following properties in your validating object: label - class - datatype");
                    return false;
                }
            }
            else
            {
                _ObjReturnValidation.Error = "";
                _InputError = true;
                ConsoleLogError("Missing object in your form.");
                return false;
            }
        });

        if (_InputError === false)
        {
            var _ReturnConnected = ValidateConnected();
            if (_ReturnConnected.Status === false)
            {
                var _ElementList = [];
                var _ElementObj = {};
                $.each(_ReturnConnected.ElementList, function (Index, ElementObj)
                {
                    if (JSON.stringify(_ElementObj) != JSON.stringify(ElementObj))
                    {
                        _ElementObj = ElementObj;
                        var _ConnectedList = [];
                        $.each(ElementObj.Connected, function (Index, ConnectedObj)
                        {
                            _$Input = $('#' + ConnectedObj, _$Area);
                            _ConnectedList.push(
                                {
                                    azInputId: _$Input.attr("id") != undefined ? _$Input.attr("id") : _$Input.attr("data-id") != undefined ? _$Input.attr("data-id") : "",
                                    azInputName: _$Input.attr("name") === undefined ? "" : _$Input.attr("name"),
                                    azInputClass: _$Input.attr("class") === undefined ? "" : _$Input.attr("class"),
                                    azInputError: "Connected",
                                    azInputValue: _$Input.val(),
                                    azInputJQElement: _$Input
                                });
                        });
                        consoleLog({ consoleType: "warn", consoleText: "AZSerializeForm - " + ElementObj.Connected + " - Connected" });
                        _ElementList.push(_ConnectedList);
                    }
                });
                $.publish("functionlib/azConnected",
                    {
                        azElementList: _ElementList
                    });
                if (typeof AZValidateDirty == "function")
                {
                    AZValidateDirty("functionlib/azConnected", _ElementList);
                }
                return {};
            }
            else
            {
                return _ObjOutputData;
            }
        }
        else
        {
            var _Data =
            {
                azInputId: _$Input.attr("id") != undefined ? _$Input.attr("id") : _$Input.attr("data-id") != undefined ? _$Input.attr("data-id") : "",
                azInputName: _$Input.attr("name") === undefined ? "" : _$Input.attr("name"),
                azInputClass: _$Input.attr("class") === undefined ? "" : _$Input.attr("class"),
                azInputError: _ObjReturnValidation.Error,
                azInputValue: _$Input.val(),
                azInputJQElement: _$Input
            };
            $.publish("functionlib/azSerializeForm",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
                    azInputError: _Data.azInputError,
                    azInputValue: _Data.azInputValue,
                    azInputJQElement: _Data.azInputJQElement
                });
            if (typeof AZValidateDirty == "function")
            {
                AZValidateDirty("functionlib/azSerializeForm", _Data);
            }
            return {};
        }
    }
    else
    {
        ConsoleLogError("Options is empty or missing some properties");
    }

    function ValidateConnected()
    {
        var _ReturnObj =
        {
            Status: true
        };
        var _ElementList = [];
        $.each(Options.ObjValidation, function (HTMLElement, Value)
        {
            if (Value.hasOwnProperty("connected") === true && AZIsEmpty(Value.connected) === false)
            {
                if ($('#' + HTMLElement, _$Area).val() == "")
                {
                    _ElementList.push(
                        {
                            Connected: Value.connected
                        });
                }
            }
        });
        if (_ElementList.length > 0)
        {
            _ReturnObj.Status = false;
            _ReturnObj.ElementList = _ElementList;
        }
        return _ReturnObj;
    }

    function ConsoleLogError(ErrorText)
    {
        consoleLog({ consoleType: "error", consoleText: "AZSerializeForm - " + ErrorText });
    }
}

function AZSerializeFormValidateInput($Input, CurrentValidationObj)
{
    var _ReturnValidationObj = {};
    var _CurrentInputType = GetCurrentInputType($Input);
    var _CurrentValidType = CurrentValidationObj.class.match(/[\w-]*validate-[\w-]*/g)[0].toLowerCase();
    var _CurrentInputValue = "";
    var _ValidObj = {};
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
            _ValidType = AZGetValidType(_CurrentValidType);
            if (_ValidType.substring(0, 3) === "NOT")
            {
                _ValidObj.Bool = true;
                _ValidObj.Type = _ValidType.substring(3);
            }
            else
            {
                _ValidObj.Bool = false;
                _ValidObj.Type = _ValidType;
            }

            for (var i = 0; i < _CurrentInputValue.length; i++)
            {
                if (_ValidObj.Type.includes(_CurrentInputValue.charAt(i).toLowerCase()) === _ValidObj.Bool)
                {
                    _ListChar.push(_CurrentInputValue.charAt(i));
                }
            }
            if (_ListChar.length > 0)
            {
                _ReturnValidationObj.Error = "InvalidChar";
                var _Data =
                {
                    azInputId: $Input.attr("id"),
                    azInputName: $Input.attr("name") === undefined ? "" : $Input.attr("name"),
                    azInputClass: $Input.attr("class") === undefined ? "" : $Input.attr("class"),
                    azInputValue: $Input.val(),
                    azInputInvalidChar: _ListChar.join(" "),
                    azInputValidChar: _ValidType.toString(),
                    azInputValidType: _CurrentValidType,
                    azInputJQElement: $Input
                };
                $.publish("functionlib/azValidateInputValidChar",
                    {
                        azInputId: _Data.azInputId,
                        azInputName: _Data.azInputName,
                        azInputClass: _Data.azInputClass,
                        azInputValue: _Data.azInputValue,
                        azInputInvalidChar: _Data.azInputInvalidChar,
                        azInputValidChar: _Data.azInputValidChar,
                        azInputValidType: _Data.azInputValidType,
                        azInputJQElement: _Data.azInputJQElement
                    });
                if (typeof AZValidateDirty == "function")
                {
                    AZValidateDirty("functionlib/azValidateInputValidChar", _Data);
                }
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
    var _RegExp = /^((([a-zA-Z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-zA-Z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-zA-Z]|[0-9])([a-zA-Z]|[0-9]|\-){0,61}([a-zA-Z]|[0-9])\.))*([a-zA-Z]|[0-9])([a-zA-Z]|[0-9]|\-){0,61}([a-zA-Z]|[0-9])\.)[\w]{2,6}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
    return _RegExp.test(Email);
}

function AZIsValidURL(URL)
{
    var _RegExp = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    return _RegExp.test(URL);
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
        ResetAZStandardAlert();
        var _Date = AZSetDateFormat($Obj.datepicker("getDate"));
        var _Data =
        {
            azInputId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
            azInputName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
            azInputClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
            azInputLocalDate: curDate,
            azInputISODate: _Date.ISODate,
            azInputENUSDate: _Date.ENUSDate,
            azInputJQElement: $Obj
        };
        $.publish("functionlib/azSetDate",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputLocalDate: _Data.azInputLocalDate,
                azInputISODate: _Data.azInputISODate,
                azInputENUSDate: _Data.azInputENUSDate,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azSetDate", _Data);
        }
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
                onClose: function (curTime, instance)
                {
                    ResetAZStandardAlert();
                    var _Time = AZSetTimeFormat('0001-01-01 ' + curTime);
                    var _Data =
                    {
                        azInputId: $Obj.attr("id") != undefined ? $Obj.attr("id") : $Obj.attr("data-id") != undefined ? $Obj.attr("data-id") : "",
                        azInputName: $Obj.attr("name") === undefined ? "" : $Obj.attr("name"),
                        azInputClass: $Obj.attr("class") === undefined ? "" : $Obj.attr("class"),
                        azInputLocalTime: curTime,
                        azInputISOTime: curTime != "" ? _Time.ISOTime : "",
                        azInputENUSTime: curTime != "" ? _Time.ENUSTime : "",
                        azInputJQElement: $Obj
                    };
                    $.publish("functionlib/azSetTime",
                        {
                            azInputId: _Data.azInputId,
                            azInputName: _Data.azInputName,
                            azInputClass: _Data.azInputClass,
                            azInputLocalTime: _Data.azInputLocalTime,
                            azInputISOTime: _Data.azInputISOTime,
                            azInputENUSTime: _Data.azInputENUSTime,
                            azInputJQElement: _Data.azInputJQElement
                        });
                    if (typeof AZValidateDirty == "function")
                    {
                        AZValidateDirty("functionlib/azSetTime", _Data);
                    }
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
        var _KeyChar = e.keyCode || e.which;
        if (e.ctrlKey == true && (_KeyChar == 118 || _KeyChar == 86))
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    }
}

function AZNotEnter(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        var _KeyChar = e.keyCode || e.which;
        if (_KeyChar == 13)
        {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    }
}

function AZCheckboxClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        ResetAZStandardAlert();
        var _Element = e.target || e.srcElement;
        var _$Checkbox = $(_Element);
        var _Data =
        {
            azInputId: _$Checkbox.attr("id") != undefined ? _$Checkbox.attr("id") : _$Checkbox.attr("data-id") != undefined ? _$Checkbox.attr("data-id") : "",
            azInputName: _$Checkbox.attr("name") === undefined ? "" : _$Checkbox.attr("name"),
            azInputClass: _$Checkbox.attr("class") === undefined ? "" : _$Checkbox.attr("class"),
            azInputValue: _$Checkbox.attr("value") === undefined ? "" : _$Checkbox.attr("value"),
            azInputChecked: _$Checkbox.is(":checked"),
            azInputJQElement: _$Checkbox
        };
        $.publish("functionlib/azCheckboxClick",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputValue: _Data.azInputValue,
                azInputChecked: _Data.azInputChecked,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azCheckboxClick", _Data);
        }
    }
}

function AZRadioClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        ResetAZStandardAlert();
        var _Element = e.target || e.srcElement;
        var _$Radio = $(_Element);
        var _Data =
        {
            azInputId: _$Radio.attr("id") != undefined ? _$Radio.attr("id") : _$Radio.attr("data-id") != undefined ? _$Radio.attr("data-id") : "",
            azInputName: _$Radio.attr("name") === undefined ? "" : _$Radio.attr("name"),
            azInputClass: _$Radio.attr("class") === undefined ? "" : _$Radio.attr("class"),
            azInputValue: _$Radio.attr("value") === undefined ? "" : _$Radio.attr("value"),
            azInputChecked: _$Radio.is(":checked"),
            azInputJQElement: _$Radio
        };
        $.publish("functionlib/azRadioClick",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputValue: _Data.azInputValue,
                azInputChecked: _Data.azInputChecked,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azRadioClick", _Data);
        }
    }
}

function AZSwitchClick(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        ResetAZStandardAlert();
        var _Element = e.target || e.srcElement;
        var _$Switch = $(_Element);
        var _Data =
        {
            azInputId: _$Switch.attr("id") != undefined ? _$Switch.attr("id") : _$Switch.attr("data-id") != undefined ? _$Switch.attr("data-id") : "",
            azInputName: _$Switch.attr("name") === undefined ? "" : _$Switch.attr("name"),
            azInputClass: _$Switch.attr("class") === undefined ? "" : _$Switch.attr("class"),
            azInputValue: _$Switch.attr("value") === undefined ? "" : _$Switch.attr("value"),
            azInputChecked: _$Switch.is(":checked"),
            azInputJQElement: _$Switch
        };
        $.publish("functionlib/azSwitchClick",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputValue: _Data.azInputValue,
                azInputChecked: _Data.azInputChecked,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azSwitchClick", _Data);
        }
    }
}

function AZRange(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        ResetAZStandardAlert();
        var _Element = e.target || e.srcElement;
        var _$Range = $(_Element);
        var _Data =
        {
            azInputId: _$Range.attr("id") != undefined ? _$Range.attr("id") : _$Range.attr("data-id") != undefined ? _$Range.attr("data-id") : "",
            azInputName: _$Range.attr("name") === undefined ? "" : _$Range.attr("name"),
            azInputClass: _$Range.attr("class") === undefined ? "" : _$Range.attr("class"),
            azInputJQElement: _$Range
        };
        if (e.type === "input")
        {
            _Data.azInputValue = _$Range.val();
            $.publish("functionlib/azRangeSlide",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
                    azInputValue: _Data.azInputValue,
                    azInputJQElement: _Data.azInputJQElement
                });
            if (typeof AZValidateDirty == "function")
            {
                AZValidateDirty("functionlib/azRangeSlide", _Data);
            }
        }
        else if (e.type === "change")
        {
            _Data.azInputValue = _$Range.val();
            $.publish("functionlib/azRangeStop",
                {
                    azInputId: _Data.azInputId,
                    azInputName: _Data.azInputName,
                    azInputClass: _Data.azInputClass,
                    azInputValue: _Data.azInputValue,
                    azInputJQElement: _Data.azInputJQElement
                });
            if (typeof AZValidateDirty == "function")
            {
                AZValidateDirty("functionlib/azRangeStop", _Data);
            }
        }
    }
}

function AZSelectChange(e)
{
    if (AZIsNullOrEmpty(e) === false)
    {
        ResetAZStandardAlert();
        var _Element = e.target || e.srcElement;
        var _$Select = $(_Element);
        var _SelectList = [];
        $("option", _$Select).map(function ()
        {
            _SelectList.push(
                {
                    Value: $(this).val(),
                    Text: $(this).text()
                });
        }).get();
        var _Data =
        {
            azInputId: _$Select.attr("id") != undefined ? _$Select.attr("id") : _$Select.attr("data-id") != undefined ? _$Select.attr("data-id") : "",
            azInputName: _$Select.attr("name") === undefined ? "" : _$Select.attr("name"),
            azInputClass: _$Select.attr("class") === undefined ? "" : _$Select.attr("class"),
            azInputValue: _$Select.val(),
            azInputText: $("option:selected", _$Select).text(),
            azInputList: _SelectList,
            azInputJQElement: _$Select
        };
        $.publish("functionlib/azSelectChange",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputValue: _Data.azInputValue,
                azInputText: _Data.azInputText,
                azInputList: _Data.azInputList,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azSelectChange", _Data);
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
        $(_Element).siblings(":input")[0].focus();
    }
}

function AZSetSpinnerEvents(Element, ObjAttributes)
{
    var _SpinnerTimeOut;
    var _CurrentSpinnerValue = 0;
    var _Data =
    {
        azInputId: Element.attr("id") != undefined ? Element.attr("id") : Element.attr("data-id") != undefined ? Element.attr("data-id") : "",
        azInputName: Element.attr("name") === undefined ? "" : Element.attr("name"),
        azInputClass: Element.attr("class") === undefined ? "" : Element.attr("class"),
        azInputJQElement: Element
    };

    Element.children().eq(0).off("mousedown touchstart mouseup mouseleave touchend").on("mousedown touchstart", function (e)
    {
        _SpinnerTimeOut = setInterval(function ()
        {
            _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
            if (_CurrentSpinnerValue >= ObjAttributes.Min)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                PublishAZSetSpinner();
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
            _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
            if (_CurrentSpinnerValue <= ObjAttributes.Max)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                PublishAZSetSpinner();
            }
        }, 100);
    }).on("mouseup mouseleave touchend", function ()
    {
        clearInterval(_SpinnerTimeOut);
    });
    Element.children().eq(0).off("click").on("click", function (e)
    {
        _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
        if (_CurrentSpinnerValue >= ObjAttributes.Min)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            PublishAZSetSpinner();
        }
    });
    Element.children().eq(2).off("click").on("click", function (e)
    {
        _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
        if (_CurrentSpinnerValue <= ObjAttributes.Max)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            PublishAZSetSpinner();
        }
    });

    function PublishAZSetSpinner()
    {
        ResetAZStandardAlert();
        _Data.azInputValue = _CurrentSpinnerValue;
        $.publish("functionlib/azInputSpinner",
            {
                azInputId: _Data.azInputId,
                azInputName: _Data.azInputName,
                azInputClass: _Data.azInputClass,
                azInputValue: _Data.azInputValue,
                azInputJQElement: _Data.azInputJQElement
            });
        if (typeof AZValidateDirty == "function")
        {
            AZValidateDirty("functionlib/azInputSpinner", _Data);
        }
    }
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
    if (AZIsNullOrEmpty(URL) === true)
    {
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
        {
            _Return[key.toLowerCase()] = value;
        });
    }
    else if (AZIsNullOrEmpty(URL) === false)
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
    if (AZIsNullOrEmpty(List) === false && List.length > 0 && AZIsNullOrEmpty(x) === false && AZIsNullOrEmpty(y) === false)
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

function AZFilterArray(List, x, y)
{
    var _Return = [];
    if (AZIsNullOrEmpty(List) === false && List.length > 0 && AZIsNullOrEmpty(x) === false && AZIsNullOrEmpty(y) === false)
    {
        _Return = $.grep(List, function (Obj)
        {
            if (Obj.hasOwnProperty(x) === true)
            {
                return (Obj[x] == y.toString().toLowerCase());
            }
        });
    }
    return _Return;
}

function AZFilterArrayUnique(List, x, y)
{
    var _ReturnList = [];
    if (AZIsNullOrEmpty(List) === false && List.length > 0 && AZIsNullOrEmpty(x) === false && AZIsNullOrEmpty(y) === false)
    {
        $.each(List, function (Key, Value)
        {
            if (Value.hasOwnProperty(x) === true)
            {
                if (AZExistObj(_ReturnList, x, y) === false)
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
    if (moment(DateTime).isValid() == true && AZIsNullOrEmpty(Format) === false)
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
        var _Width = _Element.offsetWidth || $Object.width();
        var _Height = _Element.offsetHeight || $Object.height();
        var _MarginTop = parseInt(_Style.marginTop) || 0;
        var _MarginBottom = parseInt(_Style.marginBottom) || 0;
        var _MarginLeft = parseInt(_Style.marginLeft) || 0;
        var _MarginRight = parseInt(_Style.marginRight) || 0;
        var _PaddingTop = parseInt(_Style.paddingTop) || 0;
        var _PaddingBottom = parseInt(_Style.paddingBottom) || 0;
        var _PaddingLeft = parseInt(_Style.paddingLeft) || 0;
        var _PaddingRight = parseInt(_Style.paddingRight) || 0;
        var _BorderTop = parseInt(_Style.borderTop) || 0;
        var _BorderBottom = parseInt(_Style.borderBottom) || 0;
        var _BorderLeft = parseInt(_Style.borderLeft) || 0;
        var _BorderRight = parseInt(_Style.borderRight) || 0;
        _Return.Width = (_Width + _MarginLeft + _MarginRight + _PaddingLeft + _PaddingRight + _BorderLeft + _BorderRight);
        _Return.Height = (_Height + _MarginTop + _MarginBottom + _PaddingTop + _PaddingBottom + _BorderTop + _BorderBottom);
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

function AZStandardAlert(Options)
{
    if (this instanceof AZStandardAlert === true)
    {
        var _Main = this;
        if (AZIsEmpty(Options) === false)
        {
            _Main.AZWindowStyle = "rounded";
            _Main.$Area = "";
            _Main.ErrorElement = "";
            _Main.AlertType = "";
            _Main.AlertElement = "";
            _Main.ErrorTitle = AZIsNullOrEmpty(Options.Title) === false ? Options.Title : "";
            _Main.ErrorText = Options.Text;

            if ((Options.hasOwnProperty("AZWindowStyle") && AZIsNullOrEmpty(Options.AZWindowStyle) === false))
            {
                _Main.AZWindowStyle = Options.AZWindowStyle;
            }
            if ((Options.hasOwnProperty("$Area") && AZIsNullOrEmpty(Options.$Area) === false) ||
                (Options.hasOwnProperty("Area") && AZIsNullOrEmpty(Options.Area) === false))
            {
                _Main.$Area = AZIsNullOrEmpty(Options.$Area) === false ? Options.$Area : Options.Area;
            }
            if ((Options.hasOwnProperty("InputJQElement") && AZIsNullOrEmpty(Options.InputJQElement) === false) ||
                (Options.hasOwnProperty("InputElement") && AZIsNullOrEmpty(Options.InputElement) === false))
            {
                _Main.ErrorElement = AZIsNullOrEmpty(Options.InputJQElement) === false ? Options.InputJQElement : Options.InputElement;
            }

            if ($(".az-alert-active").length === 0)
            {
                var _$RoleAlert = $("[role='alert']", _Main.$Area);
                var _$ModalDialogWindow = window.parent.$(".az-modal-dialog");
                var _$ModalDialogTitlebar = $(".az-modal-dialog-titlebar", _$ModalDialogWindow);
                var _$Window = $("#az-window");
                var _$WindowTitlebar = $(".az-window-titlebar", _$Window);
                $("body").addClass("az-alert-active");

                if (_$RoleAlert.length > 0 && _$RoleAlert.is(":visible") === true)
                {
                    _Main.AlertType = "RoleAlert";
                    _Main.AlertElement = _$RoleAlert;
                    _Main.CurrentText = _$RoleAlert.text();
                    _$RoleAlert.text(_Main.ErrorText).addClass("az-alert-danger").show();
                    if (_Main.ErrorElement != "")
                    {
                        _Main.ErrorElement.focus();
                    }
                }
                else if (_$ModalDialogWindow.length > 0 && _$ModalDialogTitlebar.is(":visible") === true)
                {
                    _Main.AlertType = "AZModalDialog";
                    _Main.AlertElement = _$ModalDialogWindow;
                    var _$ModalDialogTitlebarSpan = _$ModalDialogTitlebar.children("span.ui-dialog-title");
                    _Main.CurrentText = _$ModalDialogTitlebarSpan.text();
                    _$ModalDialogTitlebar.addClass("az-alert-danger");
                    _$ModalDialogTitlebarSpan.text(_Main.ErrorText);
                    if (_Main.ErrorElement != "")
                    {
                        _Main.ErrorElement.focus();
                    }
                }
                else if (_$Window.length > 0 && _$WindowTitlebar.is(":visible") === true)
                {
                    _Main.AlertType = "AZWindow";
                    _Main.AlertElement = _$Window;
                    var _$WindowTitlebarSpan = _$WindowTitlebar.children("h1");
                    _Main.CurrentText = _$WindowTitlebarSpan.text();
                    _$WindowTitlebar.addClass("az-alert-danger");
                    _$WindowTitlebarSpan.text(_Main.ErrorText);
                    if (_Main.ErrorElement != "")
                    {
                        _Main.ErrorElement.focus();
                    }
                }
                else
                {
                    $.subscribeonce("functionlib/azWindowAfterClose", function (e)
                    {
                        if (_Main.ErrorElement != "")
                        {
                            _Main.ErrorElement.focus();
                        }
                        $("body").removeClass("az-alert-active");
                    });
                    var _AZWindowOptions =
                    {
                        azWindowStyle: _Main.AZWindowStyle,
                        azWindowText: '<div style="margin: 35px 14px 0 14px;">' + _Main.ErrorText + '</div>',
                        azWindowWidth: 400,
                        azWindowContentHeight: true,
                        azWindowTitlebar: false
                    };
                    if (_Main.ErrorTitle != "")
                    {
                        _AZWindowOptions.azWindowText = '<div style="margin: 14px;">' + _Main.ErrorText + '</div>',
                        _AZWindowOptions.azWindowTitle = _Main.ErrorTitle;
                        _AZWindowOptions.azWindowTitlebar = true;
                    }
                    new AZWindow(_AZWindowOptions);
                }
                AZStandardAlertReturnObj = _Main;
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

function ResetAZStandardAlert()
{
    if ($(".az-alert-active").length > 0 && AZIsEmpty(AZStandardAlertReturnObj) === false)
    {
        if (AZStandardAlertReturnObj.hasOwnProperty("AlertType") && AZIsNullOrEmpty(AZStandardAlertReturnObj.AlertType) === false)
        {
            if (AZStandardAlertReturnObj.AlertType == "RoleAlert")
            {
                AZStandardAlertReturnObj.AlertElement.text(AZStandardAlertReturnObj.CurrentText).removeClass("az-alert-danger").show();
                $("body").removeClass("az-alert-active");
            }
            if (AZStandardAlertReturnObj.AlertType == "AZModalDialog")
            {
                var _$ModalDialogTitlebar = $(".az-modal-dialog-titlebar", AZStandardAlertReturnObj.AlertElement);
                var _$ModalDialogTitlebarSpan = _$ModalDialogTitlebar.children("span.ui-dialog-title");
                _$ModalDialogTitlebar.removeClass("az-alert-danger");
                _$ModalDialogTitlebarSpan.text(AZStandardAlertReturnObj.CurrentText);
                $("body").removeClass("az-alert-active");
            }
            if (AZStandardAlertReturnObj.AlertType == "AZWindow")
            {
                var _$WindowTitlebar = $(".az-window-titlebar", AZStandardAlertReturnObj.AlertElement);
                var _$WindowTitlebarSpan = _$WindowTitlebar.children("h1");
                _$WindowTitlebar.removeClass("az-alert-danger");
                _$WindowTitlebarSpan.text(AZStandardAlertReturnObj.CurrentText);
                $("body").removeClass("az-alert-active");
            }
        }
        AZStandardAlertReturnObj = {};
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