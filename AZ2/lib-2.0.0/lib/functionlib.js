// Functionlib v2.0.0 | (c) web2net AS

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
            azPageValidationUrl: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        _Main.ObjPageAttributes = {};
        _Main.ObjLanguage = {};
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
                                $Form: _Main.ObjPageAttributes.$ObjAZForm,
                                Location: _Main.ObjPageAttributes.Location,
                                PageName: _Main.ObjPageAttributes.PageName,
                                PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                                Language: _Main.DefaultLanguage,
                                ObjLanguage: _Main.ObjLanguage,
                                ObjValidation: _Main.ObjPageAttributes.Validation
                            });
                    });
                    AZSetInputTypeEvents();
                }
                else
                {
                    $.publish("functionlib/AZPage",
                        {
                            $Form: _Main.ObjPageAttributes.$ObjAZForm,
                            Location: _Main.ObjPageAttributes.Location,
                            PageName: _Main.ObjPageAttributes.PageName,
                            PageFirstName: _Main.ObjPageAttributes.PageFirstName,
                            Language: _Main.DefaultLanguage,
                            ObjLanguage: _Main.ObjLanguage,
                            ObjValidation: _Main.ObjPageAttributes.Validation
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
                    if (_Main.Options.azPageValidationUrl !== "")
                    {
                        _Main.JsonUrl = _Main.Options.azPageValidationUrl;
                    }
                    _Main.$Validation = new AZGetJSON({ azJsonUrl: _Main.JsonUrl + "-val.json" });
                    _Main.$Validation.done(function (data, textStatus, jqXHR)
                    {
                        if (IsEmpty(data) === false && textStatus === "success")
                        {
                            _Main.ObjPageAttributes.Validation = data;
                            var _AZSetValidationOptions =
                            {
                                $Area: _Main.ObjPageAttributes.$ObjAZForm,
                                ObjValidation: data
                            }
                            new AZSetValidation(_AZSetValidationOptions);
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
                            consoleLog({ consoleType: "error", consoleText: "AZSetLanguage" });
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
                consoleLog({ consoleType: "error", consoleText: "AZPage - AZSettings" });
            }
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZPage - AZCheckPageAttributes" });
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
                consoleLog({ consoleType: "error", consoleText: "AZSetLanguage - No Default Language File" });
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
        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']") && $(this).hasClass("validate"))
        {
            _DatePicker = false;
            _ValidType = "";
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
        if ($(this).is("[type='checkbox']") && $(this).hasClass("validate"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
            if ($(this).hasClass("disabled"))
            {
                $(this).attr("disabled", true);
            }
        }
        if ($(this).is("[type='radio']") && $(this).hasClass("validate"))
        {
            $(this).off("click", AZValidateDirtyKeyup).on("click", AZValidateDirtyKeyup);
            if ($(this).hasClass("disabled"))
            {
                $(this).attr("disabled", true);
            }
        }
        if ($(this).is("select") && $(this).hasClass("validate"))
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
        "validate-date": "1234567890./",
        "validate-time": "1234567890:",
        "validate-datetime": "1234567890./:\u0020",
        "validate-decimal": "1234567890.",
        "validate-email": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-web": "1234567890abcdefghijklmnopqrstuvwxyz-_.:/",
        "validate-userpass": "1234567890abcdefghijklmnopqrstuvwxyz-_.@",
        "validate-connectionid": "abcdefghijklmnopqrstuvwxyz"
    }
    return _ValidTypes[SelectedType];
}

// Empty
// InvalidChar
// Date
// Email
// Web
// Float
// MaxLength
// MinLength

function AZSerializeForm(Options)
{
    if (IsEmpty(Options) === false && Options.hasOwnProperty("ObjLanguage") && Options.hasOwnProperty("ObjValidation"))
    {
        if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
        }
        else
        {
            _$Area = "";
        }

        var _InputError = false;
        var _$Input = {};
        var _ObjCurrentValidation = {};
        var _ObjReturnValidation = {};
        var _ObjOutputData = {};

        $(":input", _$Area).each(function ()
        {
            if ($(this).hasClass("validate"))
            {
                _$Input = $(this);
                _ObjCurrentValidation = Options.ObjValidation[_$Input.attr("id")]

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
                    if ($(".az-alert-active").length === 0)
                    {
                        var _$RoleAlert = $("[role='alert']", _$Area);
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
                if (_CurrentValidType == "validate-time" && AZCheckDateTimeFormat('01/01/1900 ' + _CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Time";
                }
                if (_CurrentValidType == "validate-decimal" && AZIsValidDecimal(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Decimal";
                }
                if (_CurrentValidType == "validate-email" && AZIsValidEmail(_CurrentInputValue) === false)
                {
                    _ObjReturnValidation.Error = "Email";
                }
                if (_CurrentValidType == "validate-web" && AZIsValidURL(_CurrentInputValue) === false)
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

                if (_ObjCurrentValidation.datatype == "date")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Input[_DataAttr](moment(Value).format('L'));
                    }
                }
                else if (_ObjCurrentValidation.datatype == "datetime")
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
                else if (_ObjCurrentValidation.datatype == "time")
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
    if (moment(DateTime).isValid() == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function AZInvalidCharacterAlert(Options)
{
    if (IsEmpty(Options) === false && Options.hasOwnProperty("$Input") && Options.hasOwnProperty("InputKey") && Options.hasOwnProperty("ObjLanguage"))
    {
        if (Options.hasOwnProperty("$Area") && IsEmpty(Options.$Area) === false)
        {
            _$Area = Options.$Area;
        }
        else
        {
            _$Area = "";
        }

        if ($(".az-alert-active").length === 0)
        {
            var _$RoleAlert = $("[role='alert']", _$Area);
            var _$UIDialog = window.top.$(".ui-dialog");
            var _$Window = $("#az-window");

            if (_$RoleAlert.length > 0)
            {
                var _CurrentText = _$RoleAlert.text();
                _$RoleAlert.text(Options.ObjLanguage.SingleDefaultElements.invalidCharacterText + '   ' + Options.InputKey).removeClass("az-alert-info").addClass("az-alert-danger").show();
                Options.$Input.focus();
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
                _$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + Options.ObjLanguage.SingleDefaultElements.invalidCharacterText + '   ' + Options.InputKey + '</span>');
                _$UIDialog.children(".ui-dialog-titlebar").hide();
                _$UIDialog.prepend(_$NewUIDialogTitlebar);
                Options.$Input.focus();
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
                var _$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + Options.ObjLanguage.SingleDefaultElements.invalidCharacterText + '   ' + Options.InputKey + "</h1>").css({ "background-color": "#FF4136", "color": "#FFFFFF" });
                _$Window.children(".az-window-titlebar").hide();
                _$Window.prepend(_$NewTitlebar);
                Options.$Input.focus();
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
                    Options.$Input.focus();
                    $("body").removeClass("az-alert-active");
                });
                new AZWindow(
                    {
                        azWindowTitle: Options.ObjLanguage.SingleDefaultElements.invalidCharacterTitle,
                        azWindowText: Options.ObjLanguage.SingleDefaultElements.invalidCharacterText + '   ' + Options.InputKey
                    });
            }
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZInvalidCharacterAlert - Options is empty or missing some properties" });
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









//////////////////////////////////////////////

        //var ListPlaces =
        //    [{
        //        "id": 1,
        //        "name": "Basecamp",
        //        "city": "Chicago",
        //        "state": "IL",
        //        "url": "https://basecamp.com/"
        //    },{
        //        "id": 2,
        //        "name": "Google",
        //        "city": "Mountain View",
        //        "state": "CA",
        //        "url": "http://google.com/"
        //        }]

        //var _TemplatePlaces = $("#template-places").text().split(/\$\{(.+?)\}/g);

        //var _LI = $.map(ListPlaces, function (Places)
        //{
        //    return $.map(_TemplatePlaces, Render(Places)).join('');
        //});

        //function Render(Places)
        //{
        //    return function (Key, i)
        //    {
        //        return (i % 2) ? Places[Key] : Key;
        //    };
        //}

        //var _$Ul = $("<ul></ul>").attr("id", "ul-list");
        //_$Ul.append(_LI);

        //$("#div-list").html(_$Ul);

        //<div id="div-list"></div>

        //<script id="template-places" type="text/template">
        //<li data-id="${id}">
        //<a href="${url}">${name}</a>, ${city}, ${state}
        //</li>
        //</script>


//_Main.azCircularBarArray = [];
    //if (Options && Options.length > 0)
    //{
    //    $.each(Options, function (Index, ObjCurrentOption)
    //    {
    //        _Main.azCircularBarArray.push(new AktivateAZCircularBar(ObjCurrentOption));
    //    });
    //}
    //else if (IsEmpty(Options) === false)
    //{
    //    _Main.azCircularBarArray.push(new AktivateAZCircularBar(Options));
    //}

    //function AktivateAZCircularBar(ObjCurrentOption)
    //{
    //    this.Options = $.extend({}, _Defaults, ObjCurrentOption || {});
    //    if (this.Options.azCircularBarId != "")
    //    {
    //        this.$CircularBar = $("#" + this.Options.azCircularBarId);
    //        this.$CircularBar.$Slice = $('<div></div>').addClass("slice");
    //        this.$CircularBar.$Bar = $('<div></div>').addClass("bar").css({ "border-color": this.Options.azCircularBarValueColor });
    //        this.$CircularBar.$Fill = $('<div></div>').addClass("fill").css({ "border-color": this.Options.azCircularBarValueColor });
    //        this.$CircularBar.$Label = $('<span></span>').addClass("label").html(this.Options.azCircularBarLabel);
    //        if (this.Options.azCircularBarCaption != "")
    //        {
    //            this.$CircularBar.$Caption = $('<span></span>').addClass("caption").css({ "top": this.Options.azCircularBarSize, "color": this.Options.azCircularBarCaptionColor }).html(this.Options.azCircularBarCaption);
    //        }
    //        this.$CircularBar.$Slice.append(this.$CircularBar.$Bar).append(this.$CircularBar.$Fill);
    //        this.$CircularBar.append(this.$CircularBar.$Label).append(this.$CircularBar.$Slice).append(this.$CircularBar.$Caption).addClass("c100 p" + this.Options.azCircularBarValue).css({ "background-color": this.Options.azCircularBarColor, "font-size": this.Options.azCircularBarSize });

    //        this.azSetCircularBar = function (Options)
    //        {
    //            this.$CircularBar.$Bar.css({ "border-color": Options.azCircularBarValueColor });
    //            this.$CircularBar.$Fill.css({ "border-color": Options.azCircularBarValueColor });
    //            this.$CircularBar.$Label.html(Options.azCircularBarLabel);
    //            this.$CircularBar.$Caption.css({ "top": Options.azCircularBarSize, "color": Options.azCircularBarCaptionColor }).html(Options.azCircularBarCaption);
    //            this.$CircularBar.removeClass().addClass("c100 p" + Options.azCircularBarValue).css({ "background-color": Options.azCircularBarColor, "font-size": Options.azCircularBarSize });
    //        }
    //        return this;
    //    }
    //}
    //return (
    //    {
    //        "azSetCircularBar": _Main.azCircularBarArray
    //    });



//function closeAZWindow(Options)
//{
//    var _Defaults =
//    {
//        azWindowLocationReload: false,
//        azWindowClose: function () { }
//    };
//    _Main.Options = $.extend({}, _Defaults, Options || {});

//    $.subscribeonce("functionlib/closeAZWindow", function ()
//    {
//        if (_Main.Options.azWindowLocationReload)
//        {
//            $.subscribeonce("functionlib/backgroundRemovedAZWindow", function ()
//            {
//                location.reload();
//            });
//        }
//        $("body").removeClass("az-alert-active az-no-parent-scroll");
//        if ($("body").hasClass("") === true)
//        {
//            $("body").removeAttr("class");
//        }
//        var _$Background = $("#az-background");
//        if (_$Background.length > 0)
//        {
//            $("#az-modal").slideUp(function ()
//            {
//                _$Background.remove();
//                $.publish("functionlib/backgroundRemovedAZWindow");
//            });
//        }
//        if (_Main.Options.azWindowLocationReload == false)
//        {
//            if (azModalazWindowScrollTop > 0)
//            {
//                $(window).scrollTop(azModalazWindowScrollTop);
//            }
//        }
//    });
//    AZCheckAsyncAndPublish(_Main.Options.azWindowClose, "functionlib/closeAZWindow");
//}

//function createAZWindowButton(Options)
//{
//    var _Defaults =
//    {
//        azWindowButton1: "",
//        azWindowButton2: ""
//    };
//    var _Main.Options = $.extend({}, _Defaults, Options || {});

//    var _HTML = "";
//    if (_Main.Options.azWindowButton1 != "" && _Main.Options.azWindowButton2 != "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-6 az-text-right">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Main.Options.azWindowButton2 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '<div class="az-col xs-6 az-text-left">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Main.Options.azWindowButton1 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    else if (_Main.Options.azWindowButton1 != "" && _Main.Options.azWindowButton2 == "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-12 az-text-center">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Main.Options.azWindowButton1 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    else if (_Main.Options.azWindowButton1 == "" && _Main.Options.azWindowButton2 != "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-12 az-text-center">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Main.Options.azWindowButton2 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    return _HTML;
//}


//var _WindowWidth = 0;
//function adjustStyle()
//{
//    if ($("#div-window-size").length == 0)
//    {
//        $("body").append('<div id="div-window-size" style="position: fixed; z-index: 499999; left: 0; bottom: 0; width: 100%; height: 20px; text-align: center;"></div>');
//    }

//    _WindowWidth = parseInt(window.innerWidth);
//    if (_WindowWidth > 1199)
//    {
//        $("#div-window-size").css({ "background-color": "#337ab7", "color": "#ffffff" }).html("xl - (1200 - &#8734) - " + _WindowWidth + " px");
//    }
//    else if (_WindowWidth > 991 && _WindowWidth < 1200)
//    {
//        $("#div-window-size").css({ "background-color": "#5cb85c", "color": "#ffffff" }).html("lg - (992 - 1199) - " + _WindowWidth + " px");
//    }
//    else if (_WindowWidth > 767 && _WindowWidth < 993)
//    {
//        $("#div-window-size").css({ "background-color": "#5bc0de", "color": "#ffffff" }).html("md - (768 - 991) - " + _WindowWidth + " px");
//    }

//    else if (_WindowWidth > 576 && _WindowWidth < 768)
//    {
//        $("#div-window-size").css({ "background-color": "#f0ad4e", "color": "#ffffff" }).html("sm - (577 - 767) - " + _WindowWidth + " px");
//    }
//    else
//    {
//        $("#div-window-size").css({ "background-color": "#d9534f", "color": "#ffffff" }).html("xs - (0 - 576) - " + _WindowWidth + " px");
//    }
//}

//var initializeAjax = function (Options, ObjData)
//{
//    var _Defaults =
//    {
//        dataType: "json",
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        timeout: 15000,
//        exceptionAction: "silent",
//        exceptionErrorText: "",
//        transferType: ""
//    };
//    var _Main.Options = $.extend({}, _Defaults, Options || {});

//    if (typeof ObjData === "object")
//    {
//        _Main.Options.transferType = ObjData.hasOwnProperty("TransferType") === true ? ObjData.TransferType : "";
//        _Main.Options.data = JSON.stringify(ObjData);
//        consoleLog(JSON.stringify(ObjData));
//    }

//    $.ajaxSetup({ cache: false });
//    var _CurrentAjax = $.ajax(_Main.Options).promise();

//    _CurrentAjax.fail(function (jqXHR, textStatus, errorThrown)
//    {
//        var _statusText = jqXHR.statusText == "timeout" ? "Timeout" : _Main.Options.exceptionErrorText;
//        throwException(_Main.Options.exceptionAction, "", ThisPage, _Main.Options.transferType + ":Status:" + jqXHR.statusText, _statusText);
//    });

//    return _CurrentAjax;
//}

//function initializeModalTitlebar(Options)
//{
//    var _Defaults =
//    {
//        titlebarText: "",
//        titlebarTimeout: 3000
//    };
//    var _Main.Options = $.extend({}, _Defaults, Options || {});

//    var _$NewTitleBar = $('<div class="ui-azWindow-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert az-alert-danger" style="padding: 7px;" role="alert">' + _Main.Options.titlebarText + '</p></div></div>');
//    var _$azWindowRoleAlert = window.parent.$(".ui-azWindow-titlebar");
//    _$azWindowRoleAlert.hide();
//    _$azWindowRoleAlert.parents(".ui-azWindow").prepend(_$NewTitleBar);
//    $("body").addClass("az-alert-active");
//    window.setTimeout(function ()
//    {
//        _$NewTitleBar.remove();
//        _$azWindowRoleAlert.show();
//        $("body").removeClass("az-alert-active");
//    }, _Main.Options.titlebarTimeout);
//}

//function openStandardAlert(SelectedTitle, SelectedText, SelectedAdditional, Modal)
//{
//    Modal = Modal === true ? true : false;
//    if ($('#az-modal').length == 0)
//    {
//        var _Defaults =
//        {
//            azWindowWidth: 450,
//            azWindowHeight: 150
//        };
//        var _Main.Options = _Defaults;

//        var _HTML = "";
//        _HTML = '<div id="az-background">';
//        _HTML += '<div id="az-modal">';
//        _HTML += '<div class="az-modal-card">';
//        _HTML += '<header>';
//        _HTML += '<h1>' + SelectedTitle + '</h1>';
//        _HTML += '</header>';
//        _HTML += '<article style="overflow-y: auto;">';
//        _HTML += '<div>' + SelectedText + '</div>';
//        _HTML += '<div>' + SelectedAdditional + '</div>';
//        _HTML += '</article>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        $("body").append(_HTML);
//        $("#az-background").css({ "display": "block" });
//        var _$AzModal = $("#az-modal");

//        if (_Main.Options.azWindowWidth > window.innerWidth)
//        {
//            _Main.Options.azWindowWidth = (window.innerWidth - 60);
//        }
//        if (_Main.Options.azWindowHeight > window.innerHeight)
//        {
//            _Main.Options.azWindowHeight = (window.innerHeight - 144);
//        }
//        _$AzModal.css({ "width": _Main.Options.azWindowWidth });
//        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Main.Options.azWindowHeight });

//        if (Modal == false)
//        {
//            $("#az-background").off("click", closeStandardAlert).on("click", closeStandardAlert);
//        }
//        $(".az-modal-card > header", _$AzModal).off("click").on("click", function ()
//        {
//            closeStandardAlert();
//        });
//        $.publish("functionlib/openStandardAlert");
//    }
//}

//function closeStandardAlert()
//{
//    var _$Background = $("#az-background");
//    if (_$Background.length > 0)
//    {
//        $("#az-modal").slideUp(function ()
//        {
//            _$Background.remove();
//            $("body").removeClass("az-alert-active");
//        });
//    }
//}

//function openStandardConfirm(SelectedTitle, SelectedText, SelectedButton1, SelectedButton2, FunctionToRun)
//{
//    if ($('#az-modal').length == 0)
//    {
//        var _Defaults =
//        {
//            azWindowWidth: 450,
//            azWindowHeight: 150
//        };
//        var _Main.Options = _Defaults;

//        var _HTML = "";
//        var _Button1ColClass = ' xs-6 az-text-left';
//        if (SelectedButton2 == "")
//        {
//            var _Button1ColClass = ' xs-12 az-text-center';
//        }
//        _HTML = '<div id="az-background">';
//        _HTML += '<div id="az-modal">';
//        _HTML += '<div class="az-modal-card">';
//        _HTML += '<header>';
//        _HTML += '<h1>' + SelectedTitle + '</h1>';
//        _HTML += '</header>';
//        _HTML += '<article style="overflow-y: auto;">';
//        _HTML += '<div>' + SelectedText + '</div>';
//        _HTML += '<div>';
//        _HTML += '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        if (SelectedButton2 != "")
//        {
//            _HTML += '<div class="az-col xs-6 az-text-right">';
//            _HTML += '<div class="az-form-group">';
//            _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdStandardConfirmButton2" style="width: 60%; margin-right: 4px;">' + SelectedButton2 + '</button>';
//            _HTML += '</div>';
//            _HTML += '</div>';
//        }
//        _HTML += '<div class="az-col' + _Button1ColClass + '">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdStandardConfirmButton1" style="width: 60%; margin-left: 4px;">' + SelectedButton1 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</article>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        $("body").append(_HTML);
//        $("#az-background").css({ "display": "block" });
//        var _$AzModal = $("#az-modal");

//        if (_Main.Options.azWindowWidth > window.innerWidth)
//        {
//            _Main.Options.azWindowWidth = (window.innerWidth - 60);
//        }
//        if (_Main.Options.azWindowHeight > window.innerHeight)
//        {
//            _Main.Options.azWindowHeight = (window.innerHeight - 144);
//        }
//        _$AzModal.css({ "width": _Main.Options.azWindowWidth });
//        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Main.Options.azWindowHeight });

//        $("#cmdStandardConfirmButton2").off().on('click', function ()
//        {
//            closeStandardConfirm();
//        });
//        $("#cmdStandardConfirmButton1").off().on('click', function ()
//        {
//            closeStandardConfirm();
//            if (FunctionToRun)
//            {
//                FunctionToRun();
//            }
//        });
//        $(".az-modal-card > header", _$AzModal).off("click").on("click", function ()
//        {
//            closeStandardConfirm();
//        });
//        $.publish("functionlib/openStandardConfirm");
//    }
//}

//function closeStandardConfirm()
//{
//    var _$Background = $("#az-background");
//    if (_$Background.length > 0)
//    {
//        $("#az-modal").slideUp(function ()
//        {
//            _$Background.remove();
//            $("body").removeClass("az-alert-active");
//        });
//    }
//}

//$("#myInput").on("keyup", function ()
//{
//    var value = $(this).val().toLowerCase();
//    $("#az-css li").filter(function ()
//    {
//        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//    });
//});

//function setAccordion(SelectedIndex)
//{
//    var _$Accordion = $(".az-accordion");
//    var _$AllAccordionCard = _$Accordion.children(".az-accordion-card");
//    _$Accordion.off().on("click", ".az-accordion-card > header", function (e)
//    {
//        var _$SelectedHeader = $(this);
//        if (_$SelectedHeader.siblings("article").is(":hidden"))
//        {
//            _$AllAccordionCard.children("article").slideUp(100);
//            _$AllAccordionCard.children("header").removeClass("accordion-active");
//            _$SelectedHeader.siblings("article").slideDown(100);
//            _$SelectedHeader.addClass("accordion-active");
//        }
//        else
//        {
//            _$AllAccordionCard.children("article").slideUp(100);
//            _$AllAccordionCard.children("header").removeClass("accordion-active");
//        }
//    });
//    if (SelectedIndex != undefined && typeof SelectedIndex === "number")
//    {
//        var _$SelectedAccordionCard = $(".az-accordion > .az-accordion-card").eq(SelectedIndex);
//        var _$SelectedHeader = _$SelectedAccordionCard.children("header");
//        if (_$SelectedHeader.siblings("article").is(":hidden"))
//        {
//            _$AllAccordionCard.children("article").slideUp(100);
//            _$AllAccordionCard.children("header").removeClass("accordion-active");
//            _$SelectedHeader.siblings("article").slideDown(100);
//            _$SelectedHeader.addClass("accordion-active");
//        }
//        else
//        {
//            _$AllAccordionCard.children("article").slideUp(100);
//            _$AllAccordionCard.children("header").removeClass("accordion-active");
//        }
//    }
//}

//function confirmCancel(FunctionToRun)
//{
//    if (formdirty == true)
//    {
//        openStandardConfirm(SingleDefaultElements.cancelazWindowConfirmTitle, SingleDefaultElements.cancelazWindowConfirmText, SingleDefaultElements.cancelazWindowConfirmButton1, SingleDefaultElements.cancelazWindowConfirmButton2, FunctionToRun);
//    }
//    else
//    {
//        showCoverSpin();
//        if (FunctionToRun)
//        {
//            FunctionToRun();
//        }
//    }
//}

//function submitCancel(FunctionToRun)
//{
//    showCoverSpin();
//    FunctionToRun();
//}

// Modal Help
//function modalHelp(SelectedPage)
//{
//    $("#modalStandardTitle, #modalStandardText, #modalStandardAdditional").empty();
//    var _ModalHelpAdditional = $("#modalHelpAdditional").html();
//    if (_ModalHelpAdditional != "" && _ModalHelpAdditional != null && _ModalHelpAdditional != undefined)
//    {
//        $("#modalStandardText").html(SingleElements[SelectedPage + "-text"] + _ModalHelpAdditional);
//        if (typeof modalHelpAdditional == "function")
//        {
//            modalHelpAdditional();
//            setModalHelp();
//        }
//    }
//    else
//    {
//        $("#modalStandardText").html(SingleElements[SelectedPage + "-text"]);
//        setModalHelp();
//    }

//    function setModalHelp()
//    {
//        $("#modalStandardTitle").text(SingleElements[SelectedPage + "-title"]);
//        $("#modalStandardAdditional").html(AppName + " " + AppVersion);
//        $('#modalStandard').modal("show");
//    }
//}

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

//function azGetEvents(element)
//{
//    var elemEvents = $._data(element[0], "events");
//    var allDocEvnts = $._data(document, "events");
//    for (var evntType in allDocEvnts)
//    {
//        if (allDocEvnts.hasOwnProperty(evntType))
//        {
//            var evts = allDocEvnts[evntType];
//            for (var i = 0; i < evts.length; i++)
//            {
//                if ($(element).is(evts[i].selector))
//                {
//                    if (elemEvents == null)
//                    {
//                        elemEvents = {};
//                    }
//                    if (!elemEvents.hasOwnProperty(evntType))
//                    {
//                        elemEvents[evntType] = [];
//                    }
//                    elemEvents[evntType].push(evts[i]);
//                }
//            }
//        }
//    }
//    return elemEvents;
//}