/*! AZ-Functionlib v2.0.0 | (c) web2net AS */

$(document).ready(function ()
{
    (function ()
    {


    })();
});

// AZ Accordion
function initAZAccordion(Options)
{
    var main = this;
    var _Defaults =
    {
        azAccordionId: "",
        azAccordionHeightStyle: "content",
        azAccordionCollapsible: true,
        azAccordionIconClosed: "fas fa-plus",
        azAccordionIconOpen: "fas fa-minus"
    };
    main.Options = $.extend({}, _Defaults, Options || {});

    if (main.Options.azAccordionId != "")
    {
        main.$Accordion = $("#" + main.Options.azAccordionId);
        main.$AccordionCard = main.$Accordion.children(".az-accordion-card");
        main.$AccordionCard.children("header").append('<i class="' + main.Options.azAccordionIconClosed + '"></i>');

        var _MaxArticleHeight = 0;
        main.azArticleHeight = function ()
        {
            _MaxArticleHeight = 0;
            main.$AccordionCard.children("article").css({ height: "inherit" });
            main.$AccordionCard.children("article").each(function ()
            {
                _MaxArticleHeight = Math.max(_MaxArticleHeight, $(this).height());
            });
            if (_MaxArticleHeight > 0)
            {
                main.$AccordionCard.children("article").height(_MaxArticleHeight);
            }
        }

        main.setAZAccordion = function (SelectedIndex)
        {
            execAZAccordion(main.$Accordion.children(".az-accordion-card").eq(SelectedIndex).children("header"));
        }

        main.$Accordion.off().on("click", ".az-accordion-card > header", function (e)
        {
            var _Element = e.target || e.srcElement;            
            $.publish("functionlib/azAccordionHeader", { azAccordionId: main.Options.azAccordionId, azAccordionHeaderJQElement: $(_Element) });
            execAZAccordion($(this));
        });

        function execAZAccordion($SelectedAccordionHeader)
        {
            if ($SelectedAccordionHeader.hasClass("accordion-active"))
            {
                if (main.Options.azAccordionCollapsible)
                {
                    $SelectedAccordionHeader.siblings("article").slideUp(100);
                    $SelectedAccordionHeader.removeClass("accordion-active");
                    $("i", $SelectedAccordionHeader).removeClass(main.Options.azAccordionIconOpen).addClass(main.Options.azAccordionIconClosed);
                }
                $.publish("functionlib/azAccordionIndex", { azAccordionId: main.Options.azAccordionId, azAccordionIndex: $SelectedAccordionHeader.parent().index() });
            }
            else
            {
                main.$AccordionCard.children("article").slideUp(100);
                main.$AccordionCard.children("header").removeClass("accordion-active");
                $("i", main.$AccordionCard.children("header")).removeClass(main.Options.azAccordionIconOpen).addClass(main.Options.azAccordionIconClosed);
                $SelectedAccordionHeader.siblings("article").slideDown(100);
                $SelectedAccordionHeader.addClass("accordion-active");
                $("i", $SelectedAccordionHeader).removeClass(main.Options.azAccordionIconClosed).addClass(main.Options.azAccordionIconOpen);
                $.publish("functionlib/azAccordionIndex", { azAccordionId: main.Options.azAccordionId, azAccordionIndex: $SelectedAccordionHeader.parent().index() });
            }
        }

        if (main.Options.azAccordionHeightStyle == "auto")
        {
            main.azArticleHeight();
            $(window).resize(function ()
            {
                main.azArticleHeight();
            });
        }
        if (main.Options.azAccordionCollapsible == false)
        {
            main.setAZAccordion(0);
        }
    }   
}

// AZ Ajax
var initAZAjax = function (Options)
{
    var _Defaults =
    {
        azAjaxUrl: "",
        azAjaxDataType: "json",
        azAjaxType: "POST",
        azAjaxContentType: "application/json; charset=utf-8",
        azAjaxTimeout: 15000,
        azAjaxObjToSend: {},
        azAjaxExceptionAction: "silent",
        azAjaxExceptionErrorText: ""
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if (_Options.azAjaxUrl != "")
    {
        var _azAjaxOptions =
        {
            url: _Options.azAjaxUrl,
            dataType: _Options.azAjaxDataType,
            type: _Options.azAjaxType,
            contentType: _Options.azAjaxContentType,
            timeout: _Options.azAjaxTimeout
        };

        _Options.azAjaxTransferType = _Options.azAjaxObjToSend.hasOwnProperty("TransferType") === true ? _Options.azAjaxObjToSend.TransferType : "";
        if (isEmpty(_Options.azAjaxObjToSend) === false)
        {
            _azAjaxOptions.data = JSON.stringify(_Options.azAjaxObjToSend);
            consoleLog(JSON.stringify(_Options.azAjaxObjToSend));
        }

        $.ajaxSetup({ cache: false });
        var _CurrentAjax = $.ajax(_azAjaxOptions).promise();
        _CurrentAjax.fail(function (jqXHR, textStatus, errorThrown)
        {
            var _statusText = jqXHR.statusText == "timeout" ? "Timeout" : _Options.azAjaxExceptionErrorText;
            throwException(_Options.azAjaxExceptionAction, "", ThisPage, _Options.azAjaxTransferType + ":Status:" + jqXHR.statusText, _statusText);
        });
        return _CurrentAjax;
    }
    else
    {
        return $.Deferred().resolve("");
    }
}







// Site info
if (typeof AppName === 'undefined' || AppName === null)
{
    var AppName = "AZ Team";
}
if (typeof AppVersion === 'undefined' || AppVersion === null)
{
    var AppVersion = "2.0.0";
}
if (typeof ApiVersion === 'undefined' || ApiVersion === null)
{
    var ApiVersion = "_1";
}

// Language
var SingleNonLanguageElements = {};
var SingleDefaultElements = {};
var SingleElements = {};
var ObjPageLanguage = {};

// Customer - User Info
var ObjCustomerInfo = {};
var ThisCustomerName = "";
var ThisUserNo = "";
var ThisFirstName = "";
var ThisLastName = "";
var ThisEmail = "";
var ThisProfileImage = "";
var ThisLanguage = "nb-NO";
var ThisUserType = "";

// Div
var ObjJsonValidation = {};
var ThisLocation = "";
var ThisFormId = "";
var ThisPage = "";
var LanguagePage = "";
var ValidationPage = "";
var ModalDialogScrollTop = 0;
var ObjInitializePageOptions = {};
var DebugMode = true;

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
})(jQuery);

function initializePage(Options, Callback)
{
    showCoverSpin();
    var _Defaults =
    {
        setAdjustStyle: false,
        setLanguageClientStorage: false,
        getCustomerInfo: false,
        setSystemMenu: false,
        getLanguage: false,
        getValidation: false,
        formStyle: true,
        setGridView: false,
        accordionIndex: "",
        navbarMenuAnimate: true,
        setWindowScrollTop: false,
        dialogAlertClass: 'az-alert-danger',
        dialogNormalClass: 'az-alert-info',
        dialogAlertTimeout: 3000
    };
    var _Options = $.extend({}, _Defaults, Options || {});
    ObjInitializePageOptions = _Options;

    var _ArrayWindowProperties = [window.innerWidth, window.innerHeight, $(window).scrollTop(), $(window).scrollLeft()];
    $.publish("functionlib/windowResize", { windowProperties: _ArrayWindowProperties });
    $(window).resize(function ()
    {
        if (_Options.setAdjustStyle)
        {
            adjustStyle();
        }
        _ArrayWindowProperties = [window.innerWidth, window.innerHeight, $(window).scrollTop(), $(window).scrollLeft()];
        $.publish("functionlib/windowResize", { windowProperties: _ArrayWindowProperties });
    });
    ThisLocation = window.document.location.hostname;
    ThisPage = window.document.location.pathname;
    ThisFormId = window.document.forms[0].id;

    if (_Options.setWindowScrollTop)
    {
        $(window).scroll(function ()
        {
            $.publish("functionlib/windowScroll", $(this).scrollTop());
        });
    }
    if (_Options.setAdjustStyle)
    {
        adjustStyle();
    }
    if (_Options.setLanguageClientStorage)
    {
        setLanguageClientStorage();
    }
    if (_Options.getCustomerInfo)
    {
        $.subscribeonce("functionlib/getCustomerInfo", function (e)
        {
            if (_Options.setSystemMenu)
            {
                setSystemMenu();
            }
            getSetLanguage();
        });
        getCustomerInfo();
    }
    else
    {
        getSetLanguage();
    }

    function getSetLanguage()
    {
        if (_Options.getLanguage)
        {
            $.subscribeonce("functionlib/getLanguage", function (e)
            {
                setLanguage();
                getSetValidation();
            });
            getLanguage(LanguagePage);
        }
        else
        {
            getSetValidation();
        }
    }

    function getSetValidation()
    {
        if (_Options.getValidation)
        {
            $.subscribeonce("validation/getValidation", function (e)
            {
                $.subscribeonce("validation/setValidation", function (e)
                {
                    getSetFormStyle();
                });
                setValidation();
            });
            getValidation(ValidationPage);
        }
        else
        {
            getSetFormStyle();
        }
    }

    function getSetFormStyle()
    {
        if (_Options.formStyle)
        {
            $.subscribeonce("validation/formStyle", function (e)
            {
                getSetGridView();
            });
            formStyle("#" + ThisFormId);
        }
        else
        {
            getSetGridView();
        }
    }

    function getSetGridView()
    {
        if (_Options.setGridView)
        {
            $.subscribeonce("functionlib/setGridView", function (e)
            {
                Callback();
            });
            setGridView("#" + ThisFormId);
        }
        else
        {
            Callback();
        }
    }
}


// Language
function getLanguage(SelectedPage)
{
    $.ajaxSetup({ cache: false });
    $.getJSON(SelectedPage).done(function (data)
    {
        if (isEmpty(data) === false)
        {
            ObjPageLanguage = data;
            consoleLog("getLanguage");
            $.publish("functionlib/getLanguage");
        }
        else
        {
            throwException("silent", "", ThisPage, "getLanguage-1", "Language");
        }
    }).fail(function (jqXHR, textStatus, err)
    {
        throwException("silent", "", ThisPage, "getLanguage-2", "Language");
    });
}

function setLanguage()
{
    setFormLanguage(MyDefaultLanguage.ObjNonLanguageElements);
    SingleNonLanguageElements = MyDefaultLanguage.SingleNonLanguageElements;
    if (ThisLanguage != undefined)
    {
        setFormLanguage(MyDefaultLanguage.ObjDefaultElements[ThisLanguage]);
        SingleDefaultElements = MyDefaultLanguage.SingleDefaultElements[ThisLanguage];
        if (isEmpty(ObjPageLanguage) === false)
        {
            setFormLanguage(ObjPageLanguage.ObjElements[ThisLanguage]);
            SingleElements = ObjPageLanguage.SingleElements[ThisLanguage];
            if (SingleElements.labelPageTitle != undefined)
            {
                document.title = SingleElements.labelPageTitle;
            }
        }
    }
    consoleLog("setLanguage");
    $.publish("functionlib/setLanguage");
}

function setFormLanguage(ObjElements)
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
    $.publish("functionlib/setFormLanguage");
}

function setLanguageClientStorage()
{
    var _CurrentLanguage = "";
    _CurrentLanguage = clientStorage("get", "language", "")
    if (_CurrentLanguage != null)
    {
        ThisLanguage = _CurrentLanguage;
    }
    else
    {
        clientStorage("set", "language", ThisLanguage);
    }
    consoleLog("setLanguageClientStorage");
    $.publish("functionlib/setLanguageClientStorage");
}

// Customer Info
function getCustomerInfo()
{
    ObjCustomerInfo = JSON.parse(clientStorage("get", "customerinfo", ""));
    if (isEmpty(ObjCustomerInfo) === false)
    {
        if (ObjCustomerInfo.hasOwnProperty("UserSignIn"))
        {
            ThisCustomerName = ObjCustomerInfo.UserSignIn.CustomerName
            ThisUserNo = ObjCustomerInfo.UserSignIn.UserNo
            ThisFirstName = ObjCustomerInfo.UserSignIn.FirstName
            ThisLastName = ObjCustomerInfo.UserSignIn.LastName
            ThisEmail = ObjCustomerInfo.UserSignIn.Email
            ThisProfileImage = ObjCustomerInfo.UserSignIn.ProfileImage
            ThisLanguage = ObjCustomerInfo.UserSignIn.LanguageCode;
            ThisUserType = ObjCustomerInfo.UserSignIn.UserType
            $('#cmdMenuActiveUser').text(ThisFirstName + " " + ThisLastName);
            moment.locale(ThisLanguage);
            consoleLog("getCustomerInfo");
            $.publish("functionlib/getCustomerInfo");
        }
        else
        {
            throwException("silent", "", ThisPage, "getCustomerInfo-1", "LoadData");
            window.location.href = "/index.html";
        }
    }
    else
    {
        throwException("silent", "", ThisPage, "getCustomerInfo-2", "LoadData");
        window.location.href = "/index.html";
    }
}

// Menu Content
function setSystemMenu()
{
    if (ObjCustomerInfo.hasOwnProperty("MainMenu"))
    {
        $.each(ObjCustomerInfo.MainMenu, function (i, MainMenuContent)
        {
            if (MainMenuContent.RoleFeatureStatus == "block")
            {
                $("." + MainMenuContent.Name + "_" + MainMenuContent.Type + ", #" + MainMenuContent.Name + "_" + MainMenuContent.Type).css({ "display": "block" });
            }
        });
        consoleLog("setSystemMenu");
        $.publish("functionlib/setSystemMenu");
    }
    else
    {
        throwException("dialog", "", ThisPage, "setSystemMenu-1", "LoadData");
    }
}

// Snackbar
var _$AZSnackbarText = {};
var _$AZSnackbarClose = {};
var _$AZSnackbarWrapper = {};
var _$Table = {};
function showSnackbar(Options)
{
    var _Defaults =
    {
        snackbarText: "",
        snackbarPosition: "left",
        snackbarBottom: 20,
        snackbarMobileMinHeight: 0,
        snackbarClose: false,
        snackbarTimeout: 3000
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if ($("#az-snackbar").length == 0)
    {
        _$AZSnackbarText = {};
        _$AZSnackbarClose = {};
        _$AZSnackbarWrapper = {};
        _$AZSnackbarWrapper = $('<div></div>').attr({ "id": "az-snackbar" });
        _$Table = $('<table></table>').addClass("az-table az-width-100");

        if (_Options.snackbarClose == true)
        {
            _$AZSnackbarClose = $('<td valign="middle"></td>').html("X").addClass("az-width-10 az-snackbar-close");
            _$AZSnackbarClose.off("click").on("click", function ()
            {
                closeSnackbar();
            });
        }
        else
        {
            _$AZSnackbarClose = $('<td></td>');
            window.setTimeout(function ()
            {
                closeSnackbar();
            }, _Options.snackbarTimeout);
        }
        _$AZSnackbarText = $('<td></td>').html(_Options.snackbarText).addClass("az-snackbar-text");
        _$TableRow = $('<tr></tr>').append(_$AZSnackbarText).append(_$AZSnackbarClose);
        _$Table.append(_$TableRow);
        _$AZSnackbarWrapper.append(_$Table);

        if (window.innerWidth < 576)
        {
            _$AZSnackbarWrapper.addClass("az-snackbar-mobile");
            if (_Options.snackbarMobileMinHeight > 0)
            {
                _$AZSnackbarWrapper.css({ "min-height": _Options.snackbarMobileMinHeight })
            }
            $("body").append(_$AZSnackbarWrapper);
            _$AZSnackbarWrapper.animate(
            {
                "opacity": 1,
            }, 500);
        }
        else
        {
            _Options.snackbarPosition = _Options.snackbarPosition == "left" ? "az-snackbar-left" : "az-snackbar-right";
            _$AZSnackbarWrapper.addClass("az-snackbar " + _Options.snackbarPosition);
            $("body").append(_$AZSnackbarWrapper);
            _$AZSnackbarWrapper.animate(
            {
                "bottom": _Options.snackbarBottom,
                "opacity": 1,
            }, 500);
        }

        function closeSnackbar()
        {
            _$AZSnackbarWrapper.animate(
            {
                "bottom": 0,
                "opacity": 0,
            }, 500, function ()
            {
                $("#az-snackbar").remove();
            });
        }
    }
}

function changeSnackbarText(snackbarText)
{
    if ($("#az-snackbar").length > 0)
    {
        _$AZSnackbarText[0].innerHTML = snackbarText;
    }
}

function initializeAZWindow(Options)
{
    var _Defaults =
    {
        dialogModal: false,
        dialogTitle: "",
        dialogText: "",
        dialogTitlebar: true,
        dialogTitlebarClose: true,
        dialogButton1: "",
        dialogButton2: "",
        dialogWidth: 450,
        dialogHeight: 0,
        dialogLocationReload: false,
        dialogNoParentScroll: false,
        dialogBeforeOpen: function () { },
        dialogAfterOpen: function () { },
        dialogClose: function () { }
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if ($('#az-modal').length == 0)
    {
        $.subscribeonce("functionlib/initializeAZWindow/dialogBeforeOpen", function ()
        {
            ModalDialogScrollTop = 0;
            var _HTML = "";
            _HTML = '<div id="az-modal-background">';
            _HTML += '<div id="az-modal">';
            _HTML += '<div class="az-modal-card">';
            _HTML += '<header>';
            _HTML += '<h1>' + _Options.dialogTitle + '</h1>';
            _HTML += '<span>X</span>';
            _HTML += '</header>';
            _HTML += '<article style="overflow-y: auto;">';
            _HTML += '<div>' + _Options.dialogText + '</div>';
            _HTML += createAZWindowButton(_Options)
            _HTML += '</article>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
            $("body").append(_HTML);
            var _$Background = $("#az-modal-background");
            _$Background.css({ "display": "block" });
            var _$AzModal = $("#az-modal");
            var _$AzModalArticle = $(".az-modal-card > article", _$AzModal);
            var _$AzModalArticleHeight = _$AzModalArticle.height();

            $("#cmdAZWindowButton1").off().on('click', function ()
            {
                closeAZWindow(_Options);
            });
            $("#cmdAZWindowButton2").off().on('click', function ()
            {
                closeAZWindow();
            });
            if (_Options.dialogWidth > window.innerWidth)
            {
                _Options.dialogWidth = (window.innerWidth - 20);
            }
            _$AzModal.css({ "width": _Options.dialogWidth });
            if (_Options.dialogHeight > window.innerHeight)
            {
                _Options.dialogHeight = (window.innerHeight - 100);
            }
            if (_Options.dialogHeight > 0)
            {
                _$AzModalArticle.css({ "height": _Options.dialogHeight });
            }
            else
            {
                if (_$AzModalArticleHeight == "" || _$AzModalArticleHeight == 0 || _$AzModalArticleHeight < 120)
                {
                    _$AzModalArticle.css({ "min-height": 120 });
                }
            }
            if (window.innerWidth < 576)
            {
                if (_Options.dialogNoParentScroll)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    $("body").addClass("az-no-parent-scroll").css('top', - ModalDialogScrollTop);
                }
            }
            if (_Options.dialogModal == false)
            {
                _$Background.off("click").on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-modal-background")
                    {
                        closeAZWindow();
                    }
                });
            }
            if (_Options.dialogTitlebar == false)
            {
                $(".az-modal-card > header", _$AzModal).hide();
            }
            if (_Options.dialogTitlebarClose == false)
            {
                $(".az-modal-card > header > span", _$AzModal).hide();
            }
            else
            {
                $(".az-modal-card > header > span", _$AzModal).off("click").on("click", function ()
                {
                    closeAZWindow();
                });
            }
            $.publish("functionlib/initializeAZWindow");
            checkAsyncAndPublish(_Options.dialogAfterOpen, "");
        });
        checkAsyncAndPublish(_Options.dialogBeforeOpen, "functionlib/initializeAZWindow/dialogBeforeOpen");
    }
}

function closeAZWindow(Options)
{
    var _Defaults =
    {
        dialogLocationReload: false,
        dialogClose: function () { }
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    $.subscribeonce("functionlib/closeAZWindow", function ()
    {
        if (_Options.dialogLocationReload)
        {
            $.subscribeonce("functionlib/backgroundRemovedAZWindow", function ()
            {
                location.reload();
            });
        }
        $("body").removeClass("az-alert-active");
        $("body").removeClass("az-no-parent-scroll").css('top', '');
        var _$Background = $("#az-modal-background");
        if (_$Background.length > 0)
        {
            $("#az-modal").slideUp(function ()
            {
                _$Background.remove();
                $.publish("functionlib/backgroundRemovedAZWindow");
            });
        }
        if (_Options.dialogLocationReload == false)
        {
            if (ModalDialogScrollTop > 0)
            {
                $(window).scrollTop(ModalDialogScrollTop);
            }
        }
    });
    checkAsyncAndPublish(_Options.dialogClose, "functionlib/closeAZWindow");
}

function createAZWindowButton(Options)
{
    var _Defaults =
    {
        dialogButton1: "",
        dialogButton2: ""
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    var _HTML = "";
    if (_Options.dialogButton1 != "" && _Options.dialogButton2 != "")
    {
        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
        _HTML += '<div class="az-col xs-6 az-text-right">';
        _HTML += '<div class="az-form-group">';
        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Options.dialogButton2 + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '<div class="az-col xs-6 az-text-left">';
        _HTML += '<div class="az-form-group">';
        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Options.dialogButton1 + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
    }
    else if (_Options.dialogButton1 != "" && _Options.dialogButton2 == "")
    {
        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
        _HTML += '<div class="az-col xs-12 az-text-center">';
        _HTML += '<div class="az-form-group">';
        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Options.dialogButton1 + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
    }
    else if (_Options.dialogButton1 == "" && _Options.dialogButton2 != "")
    {
        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
        _HTML += '<div class="az-col xs-12 az-text-center">';
        _HTML += '<div class="az-form-group">';
        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Options.dialogButton2 + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
    }
    return _HTML;
}

function confirmCancel(FunctionToRun)
{
    if (formdirty == true)
    {
        initializeAZWindow(
        {
            dialogTitle: SingleDefaultElements.cancelDialogConfirmTitle,
            dialogText: SingleDefaultElements.cancelDialogConfirmText,
            dialogButton1: SingleDefaultElements.cancelDialogConfirmButton1,
            dialogButton2: SingleDefaultElements.cancelDialogConfirmButton2,
            dialogClose: FunctionToRun
        });
    }
    else
    {
        if (FunctionToRun)
        {
            FunctionToRun();
        }
    }
}

// Modal Dialog
function initializeModalDialog(Options)
{
    var _Defaults =
    {
        dialogModal: true,
        dialogTitle: "",
        dialogText: "",
        dialogTitlebar: true,
        dialogTitlebarClose: true,
        dialogiFrameURL: "",
        dialogWidth: 450,
        dialogHeight: 300,
        dialogResizable: false,
        dialogDraggable: true,
        dialogNoParentScroll: false,
        dialogPosition: false,
        dialogPositionOf: {},
        dialogPositionMy: "left bottom-30",
        dialogPositionAt: "left top",
        dialogBeforeOpen: function () { },
        dialogAfterOpen: function () { }
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if ($('#az-modal-dialog').length == 0)
    {
        $.subscribeonce("functionlib/initializeModalDialog/dialogBeforeOpen", function ()
        {
            ModalDialogScrollTop = 0;
            var _HTML = "";
            _HTML = '<div id="az-modal-background">';
            _HTML += '<div id="az-modal-dialog">';
            _HTML += '<div class="az-modal-card">';
            _HTML += '<article style="overflow-y: auto;">';
            _HTML += '<div>' + _Options.dialogText + '</div>';
            _HTML += '</article>';
            _HTML += '</div>';
            if (_Options.dialogiFrameURL != "")
            {
                _HTML += '<iframe id="az-iframe"></iframe>';
            }
            _HTML += '</div>';
            _HTML += '</div>';
            $("body").append(_HTML);
            var _$Background = $("#az-modal-background");
            _$Background.css({ "display": "block" });
            var _$AzModalDialog = $("#az-modal-dialog");

            if (_Options.dialogModal == false)
            {
                _$Background.off("click").on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-modal-background")
                    {
                        closeModalDialog();
                    }
                });
            }
            if (_Options.dialogWidth > window.innerWidth)
            {
                _Options.dialogWidth = (window.innerWidth - 20);
            }
            if (_Options.dialogHeight > window.innerHeight)
            {
                _Options.dialogHeight = (window.innerHeight - 20);
            }
            if (window.innerWidth < 576)
            {
                if (_Options.dialogNoParentScroll)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    $("body").addClass("az-no-parent-scroll").css('top', - ModalDialogScrollTop);
                }
            }
            var _$CurrentDialog = $("#az-modal-dialog").dialog(
            {
                autoOpen: false,
                modal: false,
                width: (_Options.dialogWidth - 16),
                height: _Options.dialogHeight,
                resizable: _Options.dialogHeight,
                draggable: _Options.dialogDraggable,
                closeOnEscape: true
            });
            $(".ui-dialog-title").html(_Options.dialogTitle);
            $(".ui-dialog-titlebar-close").removeAttr("title");
            if (_Options.dialogTitlebar == false)
            {
                $(".ui-dialog-titlebar").hide();
            }
            if (_Options.dialogTitlebarClose == false)
            {
                $(".ui-dialog-titlebar-close").hide();
            }
            if (_Options.dialogPosition && isEmpty(_Options.dialogPositionOf) === false)
            {
                _$CurrentDialog.dialog(
                {
                    position:
                    {
                        my: _Options.dialogPositionMy,
                        at: _Options.dialogPositionAt,
                        of: _Options.dialogPositionOf
                    }
                });
            }
            if (_Options.dialogiFrameURL != "")
            {
                var _$CurrentiFrame = $("#az-iframe", _$AzModalDialog);
                _$CurrentiFrame.css({ "width": "100%", "height": (_Options.dialogHeight - 80) });
                _$CurrentiFrame.attr('src', _Options.dialogiFrameURL);
                $(".az-modal-card > article", _$AzModalDialog).css({ "width": "100%" });
            }
            else
            {
                $(".az-modal-card > article", _$AzModalDialog).css({ "width": "100%" });
            }
            _$CurrentDialog.dialog("open");
            _$CurrentDialog.dialog(
            {
                close: function (e, ui)
                {
                    if (e.originalEvent)
                    {
                        closeModalDialog();
                    }
                }
            });
            $.publish("functionlib/initializeModalDialog");
            checkAsyncAndPublish(_Options.dialogAfterOpen, "");
        });
        checkAsyncAndPublish(_Options.dialogBeforeOpen, "functionlib/initializeModalDialog/dialogBeforeOpen");
    }
}

function closeModalDialog(Options)
{
    var _Defaults =
    {
        dialogLocationReload: false,
        dialogClose: function () { }
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    $.subscribeonce("functionlib/closeModalDialog", function ()
    {
        if (_Options.dialogLocationReload)
        {
            $.subscribeonce("functionlib/backgroundRemovedModalDialog", function ()
            {
                location.reload();
            });
        }
        $("body").removeClass("az-alert-active");
        $("body").removeClass("az-no-parent-scroll").css('top', '');
        $("#az-modal-dialog").dialog("close");
        $("#az-iframe").attr('src', '');
        var _$ModalDialog = $('#az-modal-dialog');
        if (_$ModalDialog.length > 0)
        {
            _$ModalDialog.remove();
        }
        var _$Background = $("#az-modal-background");
        if (_$Background.length > 0)
        {
            _$Background.remove();
            $.publish("functionlib/backgroundRemovedModalDialog");
        }
        if (_Options.dialogLocationReload == false)
        {
            if (ModalDialogScrollTop > 0)
            {
                $(window).scrollTop(ModalDialogScrollTop);
            }
        }
    });
    checkAsyncAndPublish(_Options.dialogClose, "functionlib/closeModalDialog");
}

function checkAsyncAndPublish(FunctionToRun, Publish)
{
    if (FunctionToRun)
    {
        var _Obj = FunctionToRun();
        if (!isEmpty(_Obj) && _Obj.hasOwnProperty("promise"))
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

// Titlebar for Modal Dialog
function changeModalTitlebar(Options)
{
    var _Defaults =
    {
        dialogTitle: "",
        dialogAlertClass: 'az-alert-danger',
        dialogAlertTimeout: 3000
    };
    var _Options = $.extend({}, _Defaults, Options || {});
    if (Options.hasOwnProperty("dialogAlertClass") === false)
    {
        _Options.dialogAlertClass = ObjInitializePageOptions.dialogAlertClass;
    }
    if (Options.hasOwnProperty("dialogAlertTimeout") === false)
    {
        _Options.dialogAlertTimeout = ObjInitializePageOptions.dialogAlertTimeout;
    }

    if ($(".az-alert-active").length == 0)
    {
        var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert ' + _Options.dialogAlertClass + '" style="padding: 7px;" role="alert">' + _Options.dialogTitle + '</p></div></div>');
        var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
        _$DialogRoleAlert.hide();
        _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
        $("body").addClass("az-alert-active");
        window.setTimeout(function ()
        {
            _$NewTitleBar.remove();
            _$DialogRoleAlert.show();
            $("body").removeClass("az-alert-active");
        }, _Options.dialogAlertTimeout);
    }
}

function showCoverSpin()
{
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length == 0)
    {
        $("body").append('<div id="az-cover-spin"></div>');
    }
}

function hideCoverSpin()
{
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length > 0)
    {
        _$CoverSpin.remove();
    }
}

function openCloseNavbarMobile()
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

function closeNavbarMobile()
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
}

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
        window.setTimeout(function () { $(document).one("click", { ULDropdown: _$ULDropdown }, removeDropdownEvent); }, 100);
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

function hideShowPassword(e)
{
    var SelectedElementId = "";
    var _Element = e.target || e.srcElement;
    if ($(_Element).hasClass("passwordeye"))
    {
        SelectedElementId = $(_Element).attr("data-connectedid");
    }
    else
    {
        if ($(_Element).parent().hasClass("passwordeye"))
        {
            SelectedElementId = $(_Element).parent().attr("data-connectedid");
        }
    }
    if (SelectedElementId != "")
    {
        var _$PasswordField = $("#" + SelectedElementId)[0];
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

function setGridView(SelectedArea)
{
    if (isEmpty(ObjJsonValidation) === false)
    {
        var _SelectedArea = "";
        if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
        {
            _SelectedArea = $(SelectedArea);
        }
        else
        {
            _SelectedArea = "";
        }

        var _$Header = "";
        $(".HeaderStyle > th", _SelectedArea).each(function (index) 
        {
            _$Header = $(this);
            if (ObjJsonValidation.hasOwnProperty($("a", _$Header).text()) && ObjJsonValidation[$("a", _$Header).text()].sort == true)
            {
                $("a", _$Header).text(SingleElements["label" + $("a", _$Header).text()]);
            }
            else
            {
                _$Header.text(SingleElements["label" + $("a", _$Header).text()]);
            }
        });

        var _ObjJsonReturn = {};
        var _ObjSpanCheckBox = {};
        var _ObjCheckBox = {};
        $(".RowStyle > td, .AlternatingRowStyle > td", _SelectedArea).each(function (index)
        {
            _ObjJsonReturn = getSelectedObj(ObjJsonValidation, "tabindex", $(this).index());
            if (_ObjJsonReturn.datatype == "date")
            {
                $(this).text(moment($(this).text()).format('L'));
            }
            else if (_ObjJsonReturn.datatype == "datetime")
            {
                $(this).text(moment($(this).text()).format('L') + " - " + moment($(this).text()).format('LT'));
            }
            else if (_ObjJsonReturn.datatype == "time")
            {
                $(this).text(moment('01/01/1900 ' + $(this).text()).format('LT'));
            }
            else if (_ObjJsonReturn.datatype == "militarytime")
            {
                $(this).text(moment('01/01/1900 ' + $(this).text()).format('HH:mm'));
            }
            else if (_ObjJsonReturn.datatype == "decimal")
            {
                $(this).text(numeral($(this).text()).format('0.00'));
            }
            else if (_ObjJsonReturn.datatype == "bytes")
            {
                $(this).text(bytesToSize($(this).text()));
            }
            else if (_ObjJsonReturn.datatype == "int")
            {
                $(this).text(SingleElements["label" + $(this).text()]);
            }

            if ($(this).children().is("span") == true)
            {
                _ObjSpanCheckBox = $(this).children();
                _ObjCheckBox = _ObjSpanCheckBox.find(":input");
                if (_ObjCheckBox.is(":input") == true)
                {
                    _ObjCheckBox.attr("id", _ObjSpanCheckBox.attr("data-id"));
                    _ObjCheckBox.addClass("az-checkbox");
                }
            }
        });
        $(window).one("beforeunload", function (e) { showCoverSpin() });
        $.publish("functionlib/setGridView");
    }
    else
    {
        throwException("silent", "", ThisPage, "setGridView-1", "LoadData");
    }
}

function checkValidateDirty(e)
{
    if (typeof validateDirty == 'function')
    {
        validateDirty();
    }
}

function disableButton($Selector)
{
    if (!$Selector.hasClass("az-button-disabled"))
    {
        $Selector.addClass("az-button-disabled");
        $Selector.prop("disabled", true);
    }
}

function enableButton($Selector)
{
    if ($Selector.hasClass("az-button-disabled"))
    {
        $Selector.removeClass("az-button-disabled");
        $Selector.prop("disabled", false);
    }
}

function forceUppercaseFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toUpperCase());
}

function forceLowercaseFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toLowerCase());
}

function doNotPaste(e)
{
    if (e.ctrlKey == true && (e.which == 118 || e.which == 86))
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function notEnter(e)
{
    if ((e.keyCode || e.which) == 13)
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

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

function isEmpty(SelectedObj)
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

function getSelectedObj(_SelectedList1, _SelectedKey, _SelectedVal)
{
    var _ThisReturn = "";
    $.each(_SelectedList1, function (i, _SelectedObj1)
    {
        $.each(_SelectedObj1, function (_Key1, _Value1)
        {
            if (toString.call(_Value1) === "[object Array]" && _Value1.length > 0)
            {
                $.each(_Value1, function (i, _SelectedObj2)
                {
                    $.each(_SelectedObj2, function (_Key2, _Value2)
                    {
                        if (_SelectedKey.toString().toLowerCase() == _Key2.toString().toLowerCase() && _SelectedVal.toString().toLowerCase() == _Value2.toString().toLowerCase())
                        {
                            _ThisReturn = _SelectedObj2;
                            return false;
                        }
                    });
                });
            }
            else
            {
                if (_SelectedKey.toString().toLowerCase() == _Key1.toString().toLowerCase() && _SelectedVal.toString().toLowerCase() == _Value1.toString().toLowerCase())
                {
                    _ThisReturn = _SelectedObj1;
                    return false;
                }
            }
        });
    });
    return _ThisReturn;
}

function removeSelectedObj(_SelectedObj, _SelectedKey)
{
    $.each(_SelectedObj, function (i, Selected)
    {
        if (_SelectedObj[i].UserId.toString().toLowerCase() == _SelectedKey.toString().toLowerCase())
        {
            _SelectedObj.splice(i, 1);
            return false;
        }
    });
}

// Error exception
function throwException(_Action, _ActionPath, _ErrorPage, _ErrorCode, _ErrorText)
{
    if (_Action === "navigate")
    {
        navigateTo(_ActionPath + "?ErrorPage=" + _ErrorPage + "&ErrorCode=" + _ErrorCode + "&ErrorText=" + _ErrorText, 0);
    }
    else if (_Action === "dialog")
    {
        hideCoverSpin();
        initializeAZWindow(
        {
            dialogTitle: "Error",
            dialogText: SingleDefaultElements[_ErrorText + "Error"] + "<br><br>" + _ErrorCode + " - " + _ErrorText + "<br><br>" + AppName + " / " + AppVersion
        });
    }
    else if (_Action === "silent")
    {
        consoleLog({ consoleType: "error", consoleText: _ErrorCode });
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
        console[_Options.consoleType](AppName + '\n' + _Options.consoleText);
    }
}

// Client Storage
function clientStorage(ActionType, Name, Value)
{
    var _ThisLocation = window.document.location.hostname;
    var _LocalStorageEnabled = checkLocalStorage();
    if (typeof Value === "object")
    {
        Value = JSON.stringify(Value);
    }
    if (_LocalStorageEnabled == true)
    {
        if (ActionType == "set")
        {
            setLocalStorage(_ThisLocation + "-" + Name, Value);
        }
        else if (ActionType == "get")
        {
            return getLocalStorage(_ThisLocation + "-" + Name);
        }
        else if (ActionType == "remove")
        {
            removeLocalStorage(_ThisLocation + "-" + Name);
        }
        else
        {
            clientStorageError("Local Storage: Wrong action type.");
        }
    }
    else
    {
        var _CookieEnabled = checkCookie();
        if (_CookieEnabled == true)
        {
            if (ActionType == "set")
            {
                setCookie(_ThisLocation + "-" + Name, _Value);
            }
            else if (ActionType == "get")
            {
                return getCookie(_ThisLocation + "-" + Name);
            }
            else if (ActionType == "remove")
            {
                removeCookie(_ThisLocation + "-" + Name);
            }
            else
            {
                clientStorageError("Cookies: Wrong action type.");
            }
        }
        else
        {
            clientStorageError("Local Storage / Cookies not supported.");
        }
    }
}

// Local Storeage
function checkLocalStorage()
{
    try
    {
        var _SupportsLocalStorage = !!window.localStorage && typeof localStorage.getItem === 'function' && typeof localStorage.setItem === 'function' && typeof localStorage.removeItem === 'function';
        if (_SupportsLocalStorage)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }
}

function setLocalStorage(LSName, LSValue)
{
    localStorage.setItem(LSName, LSValue);
}

function getLocalStorage(LSName)
{
    return localStorage.getItem(LSName);
}

function removeLocalStorage(LSName)
{
    localStorage.removeItem(LSName);
}

// Cookies
function checkCookie()
{
    try
    {
        if (navigator.cookieEnabled)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }
}

function setCookie(CName, CValue)
{
    var _Date = new Date();
    _Date.setTime(_Date.getTime() + (365 * 24 * 60 * 60 * 1000));
    var _Expires = "expires=" + _Date.toUTCString();
    document.cookie = CName + "=" + CValue + "; " + _Expires;
}

function getCookie(CName)
{
    var _Name = CName + "=";
    var _DecodedCookie = decodeURIComponent(document.cookie);
    var _CA = _DecodedCookie.split(';');
    for (var i = 0; i < _CA.length; i++)
    {
        var _C = _CA[i];
        while (_C.charAt(0) == ' ')
        {
            _C = _C.substring(1);
        }
        if (_C.indexOf(_Name) == 0)
        {
            return _C.substring(_Name.length, _C.length);
        }
    }
    return "";
}

function removeCookie(CName)
{
    document.cookie = CName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function clientStorageError(consoleText)
{
    console.error("Client Storage Error\n" + consoleText);
}

function getValidation(SelectedPage)
{
    $.ajaxSetup({ cache: false });
    $.getJSON(SelectedPage).done(function (data)
    {
        if (data instanceof Object && data != null && data != undefined)
        {
            ObjJsonValidation = data;
            consoleLog("getValidation");
            $.publish("validation/getValidation");
        }
        else
        {
            throwException("silent", "", ThisPage, "getValidation-1", "Validation");
        }
    }).fail(function (jqXHR, textStatus, err)
    {
        throwException("silent", "", ThisPage, "getValidation-2", "Validation");
    });
}

function setValidation(SelectedArea)
{
    var _SelectedArea = "";
    if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
    {
        _SelectedArea = $(SelectedArea);
    }
    else
    {
        _SelectedArea = "";
    }

    $.each(ObjJsonValidation, function (HTMLElement, ObjJsonSubValidation)
    {
        $("." + HTMLElement).each(function (AttrType, AttrValue)
        {
            if (AttrValue.id)
            {
                if (ObjJsonValidation.hasOwnProperty(AttrValue.id) == false)
                {
                    ObjJsonValidation[AttrValue.id] = ObjJsonSubValidation;
                }
            }
        });
    });

    $.each(ObjJsonValidation, function (HTMLElement, ObjJsonSubValidation)
    {
        $.each(ObjJsonSubValidation, function (AttrType, AttrValue)
        {
            if (AttrType.toLowerCase() == "label")
            {
                $("label[for='" + HTMLElement + "']", _SelectedArea).addClass(AttrValue);
            }
            else if (AttrType.toLowerCase() == "data-attr" || AttrType.toLowerCase() == "minlength" || AttrType.toLowerCase() == "maxlength" || AttrType.toLowerCase() == "tabindex")
            {
                if ($('#' + HTMLElement, _SelectedArea).length > 0)
                {
                    $('#' + HTMLElement, _SelectedArea).attr(AttrType, AttrValue);
                }
                if ($('.' + HTMLElement, _SelectedArea).length > 0)
                {
                    $('.' + HTMLElement, _SelectedArea).attr(AttrType, AttrValue);
                }
            }
            else if (AttrType.toLowerCase() == "class")
            {
                if ($('#' + HTMLElement, _SelectedArea).length > 0)
                {
                    $('#' + HTMLElement, _SelectedArea).addClass(AttrValue);
                }
                if ($('.' + HTMLElement, _SelectedArea).length > 0)
                {
                    $('.' + HTMLElement, _SelectedArea).addClass(AttrValue);
                }
            }
        });
    });
    consoleLog("setValidation");
    $.publish("validation/setValidation");
}

function getValidateType(SelectedType)
{
    var validTypes =
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
    return validTypes[SelectedType];
}

function formStyle(SelectedArea)
{
    var _DatePicker = false;
    var _SelectedArea = "";
    var _ElementClass = "";
    var _Options = ObjInitializePageOptions;

    if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
    {
        _SelectedArea = $(SelectedArea);
    }
    else
    {
        _SelectedArea = "";
    }

    $(":input", _SelectedArea).each(function ()
    {
        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
        {
            $(this).attr("autocomplete", "off");
            if ($(this).hasClass("validate"))
            {
                $(this).off("keyup", checkValidateDirty).on("keyup", checkValidateDirty);

                _ElementClass = "";
                _ElementClass = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
                if (_ElementClass != null)
                {
                    $(this).off("keypress", validateValue).on("keypress", { ElementClass: _ElementClass, SelectedArea: _SelectedArea }, validateValue);
                }
            }
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
                $(this).prop("readOnly", true);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).prop("disabled", true);
            }
            if ($(this).hasClass("selecttext"))
            {
                $(this).click(function (e)
                {
                    $(this).select();
                });
            }

            _DatePicker = false;
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
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
                            if (typeof validateDirty == 'function')
                            {
                                validateDirty();
                            }
                            if (typeof setDate == 'function')
                            {
                                setDate(curDate, instance);
                            }
                        }
                    });
            }
            if (_DatePicker == true)
            {
                $.datepicker.setDefaults($.datepicker.regional[ThisLanguage]);
            }
        }
        if ($(this).is("textarea"))
        {
            $(this).attr("autocomplete", "false");
            if ($(this).hasClass("validate"))
            {
                $(this).off("keyup", checkValidateDirty).on("keyup", checkValidateDirty);

                _ElementClass = "";
                _ElementClass = $(this).attr("class").match(/[\w-]*validate-[\w-]*/g);
                if (_ElementClass != null)
                {
                    $(this).off("keypress", validateValue).on("keypress", { ElementClass: _ElementClass, SelectedArea: _SelectedArea }, validateValue);
                }
            }
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
                $(this).prop("readOnly", true);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).prop("disabled", true);
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
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).prop("disabled", true);
            }
        }
        if ($(this).is("[type='radio']"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).prop("disabled", true);
            }
        }
        if ($(this).is("select"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("change", validateDirty).on("change", validateDirty);
            }
            if ($(this).hasClass("readonly"))
            {
                $(this).prop("readOnly", true);
            }
            if ($(this).hasClass("disabled"))
            {
                $(this).prop("disabled", true);
            }
        }
        if ($(this).is("button"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
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

    setAccordion(_Options.accordionIndex);
    setPortfolio();
    $(window).resize(function ()
    {
        setPortfolio();
        closeNavbarMobile();
    });

    // Disabled Form Enter
    if ($("#" + ThisFormId).hasClass("disabled-enter") == true)
    {
        $("#" + ThisFormId).off('keypress').on('keypress', function (e)
        {
            if ((e.keyCode || e.which) == 13)
            {
                return false;
            }
        });
    }

    // Mandatory Asterisk
    $(".mandatory", _SelectedArea).not(".az-no-asterisk").each(function ()
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

    // Navbar Menu
    var _$NavbarMenu = $(".az-navbar-menu");
    var _NavbarTopHeight = _$NavbarMenu.parents(".az-navbar-top").height();
    _$NavbarMenu.off().on("click", "li > a", function (e)
    {
        var _Anchor = $(this).attr('href');
        if (_Anchor.indexOf("#") === 0)
        {
            e.preventDefault();
            if (_$NavbarMenu.parents(".az-navbar-top").hasClass("az-navbar-sticky") == false)
            {
                _NavbarTopHeight = 0;
            }
            if (_Options.navbarMenuAnimate)
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

    // Sidebar Menu
    var _$SidebarMenu = $(".az-sidebar-menu");
    _$SidebarMenu.off().on("click", "li > a", function (e)
    {
        e.preventDefault();
        var _Anchor = $(this).attr('href');
        if (_Anchor.indexOf("#") === -1)
        {
            showCoverSpin();
            $("#" + ThisFormId).attr(
            {
                "action": _Anchor,
                "method": "POST"
            }).submit();
        }
    });

    // Menu
    var _$SideMenu = $(".az-menu");
    _$SideMenu.off().on("click", "div > a", function (e)
    {
        e.preventDefault();
        var _Anchor = $(this).attr('href');
        if (_Anchor.indexOf("#") === -1)
        {
            showCoverSpin();
            $("#" + ThisFormId).attr(
            {
                "action": _Anchor,
                "method": "POST"
            }).submit();
        }
    });

    // Dropdown Menu
    if ($(".az-dropdown-button").is(":button"))
    {
        $(".az-dropdown-button").off("click", setDropdownClickEvent).on("click", setDropdownClickEvent);
    }
    $(".az-dropdown-button[href]").off("click", setDropdownClickEvent).on("click", setDropdownClickEvent);

    // Get URl Paramaters
    var urlParameters = getURLParameters(window.location.href);
    if (isEmpty(urlParameters) === false)
    {
        if (urlParameters.hasOwnProperty('scrollto'))
        {
            $('html, body').stop().animate(
            {
                scrollTop: $("#" + urlParameters.scrollto).offset().top
            },
            {
                easing: 'easeInOutExpo',
                duration: 1500
            });
        }
        if (urlParameters.hasOwnProperty('accordion'))
        {
            setAccordion(Number(urlParameters.accordion));
        }
    }
    consoleLog("formStyle");
    $.publish("validation/formStyle");
}

// Form Validation - Key Press
function validateValue(e)
{
    var _Element = e.target || e.srcElement;
    var _CurrentValidChar = getValidateType(e.data.ElementClass);
    var _SelectedArea = e.data.SelectedArea;
    var _KeyChar = e.keyCode || e.which;
    var _Options = ObjInitializePageOptions;

    if (_KeyChar == 8 || _KeyChar == 13)
    {
        return true;
    }
    else
    {
        var _Char = String.fromCharCode(_KeyChar);
        if (_CurrentValidChar.indexOf(_Char.toLowerCase()) >= 0)
        {
            return true;
        }
        else
        {
            if ($(".az-alert-active").length == 0)
            {
                var _$InlineRoleAlert = $("[role='alert']", _SelectedArea);
                var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
                if (_$InlineRoleAlert.length > 0)
                {
                    var _CurrentText = _$InlineRoleAlert.text();
                    _$InlineRoleAlert.text(SingleDefaultElements.invalidCharacterText).removeClass(_Options.dialogNormalClass).addClass(_Options.dialogAlertClass).show();
                    $(_Element).focus();
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$InlineRoleAlert.text(_CurrentText).removeClass(_Options.dialogAlertClass).addClass(_Options.dialogNormalClass).show();
                        $("body").removeClass("az-alert-active");
                    }, _Options.dialogAlertTimeout);
                }
                else if (_$DialogRoleAlert.length > 0)
                {
                    _$DialogRoleAlert.hide();
                    var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert ' + _Options.dialogAlertClass + '" style="padding: 7px;" role="alert">' + SingleDefaultElements.invalidCharacterText + '</p></div></div>');
                    _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
                    $(_Element).focus();
                    $("body").addClass("az-alert-active");
                    window.setTimeout(function ()
                    {
                        _$NewTitleBar.remove();
                        _$DialogRoleAlert.show();
                        $("body").removeClass("az-alert-active");
                    }, _Options.dialogAlertTimeout);
                }
                else
                {
                    $("body").addClass("az-alert-active");
                    initializeAZWindow(
                    {
                        dialogTitle: SingleDefaultElements.invalidCharacterTitle,
                        dialogText: SingleDefaultElements.invalidCharacterText
                    });
                }
            }
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    }
}

function serializeForm(SelectedArea)
{
    if (isEmpty(ObjJsonValidation) === false)
    {
        var _SelectedArea = "";
        var _$Selector = {};
        var _CurrentDataType = "";
        var _OutputData = {};
        var _ElementError = false;
        var _Options = ObjInitializePageOptions;

        if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
        {
            _SelectedArea = $(SelectedArea);
        }
        else
        {
            _SelectedArea = "";
        }

        $.each(ObjJsonValidation, function (HTMLElement, ObjJsonSubValidation)
        {
            if ($('#' + HTMLElement, _SelectedArea).length > 0)
            {
                _$Selector = {};
                _CurrentDataType = "";
                _$Selector = $('#' + HTMLElement, _SelectedArea);

                if (isEmpty(_$Selector) === false && isEmpty(ObjJsonSubValidation) === false)
                {
                    _CurrentDataType = ObjJsonSubValidation.datatype.toLowerCase();

                    if (_CurrentDataType != "")
                    {
                        if (_CurrentDataType == "int")
                        {
                            _OutputData[HTMLElement] = Number(_$Selector.val());
                        }
                        else if (_CurrentDataType == "date")
                        {
                            if (_$Selector.val().replace(/^\s+|\s+$/g, '') != "")
                            {
                                _OutputData[HTMLElement] = moment(_$Selector.datepicker("getDate")).format('MM/DD/YYYY');
                            }
                            else
                            {
                                _OutputData[HTMLElement] = null;
                            }
                        }
                        else
                        {
                            _OutputData[HTMLElement] = encodeURIComponent(_$Selector.val());
                        }
                        if (ObjJsonSubValidation.class.toLowerCase().indexOf("validate") != -1)
                        {
                            if (validateValue(_$Selector, _CurrentDataType, ObjJsonSubValidation) != 0)
                            {
                                if ($(".az-alert-active").length == 0)
                                {
                                    var _$InlineRoleAlert = $("[role='alert']", _SelectedArea);
                                    var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
                                    if (_$InlineRoleAlert.length > 0)
                                    {
                                        var _CurrentText = _$InlineRoleAlert.text();
                                        _$InlineRoleAlert.text(SingleElements[HTMLElement + "SubmitError"]).removeClass(_Options.dialogNormalClass).addClass(_Options.dialogAlertClass).show();
                                        _$Selector.focus();
                                        $("body").addClass("az-alert-active");
                                        window.setTimeout(function ()
                                        {
                                            _$InlineRoleAlert.text(_CurrentText).removeClass(_Options.dialogAlertClass).addClass(_Options.dialogNormalClass).show();
                                            $("body").removeClass("az-alert-active");
                                        }, _Options.dialogAlertTimeout);
                                    }
                                    else if (_$DialogRoleAlert.length > 0)
                                    {
                                        _$DialogRoleAlert.hide();
                                        var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert ' + _Options.dialogAlertClass + '" style="padding: 7px;" role="alert">' + SingleElements[HTMLElement + "SubmitError"] + '</p></div></div>');
                                        _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
                                        _$Selector.focus();
                                        $("body").addClass("az-alert-active");
                                        window.setTimeout(function ()
                                        {
                                            _$NewTitleBar.remove();
                                            _$DialogRoleAlert.show();
                                            $("body").removeClass("az-alert-active");
                                        }, _Options.dialogAlertTimeout);
                                    }
                                    else
                                    {
                                        $("body").addClass("az-alert-active");
                                        initializeAZWindow(
                                        {
                                            dialogTitle: SingleDefaultElements.invalidCharacterTitle,
                                            dialogText: SingleElements[HTMLElement + "SubmitError"]
                                        });
                                    }
                                    consoleLog(HTMLElement);
                                }
                                _ElementError = true;
                                return false;
                            }
                        }
                    }
                }
            }
        });
        if (_ElementError == false)
        {
            return _OutputData;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }

    function validateValue($Selector, CurrentDataType, ObjJsonSubValidation)
    {
        var _NoneValid = 0;
        var _CurrentLabel = ObjJsonSubValidation.label.toLowerCase();
        var _CurrentClass = ObjJsonSubValidation.class.match(/[\w-]*validate-[\w-]*/g)[0].toLowerCase();
        var _CurrentType = getCurrentType($Selector);

        if (_CurrentType == "input")
        {
            var _CurrentValue = $Selector.val().replace(/^\s+|\s+$/g, '');

            if (_CurrentLabel == "mandatory" && _CurrentValue == "")
            {
                _NoneValid += 1;
            }
            else if (_CurrentLabel == "mandatory" && _CurrentValue != "")
            {
                _NoneValid = validateValidValue($Selector, _CurrentClass, _CurrentValue, CurrentDataType, ObjJsonSubValidation);
            }
            else if (_CurrentLabel == "optional" && _CurrentValue != "")
            {
                _NoneValid = validateValidValue($Selector, _CurrentClass, _CurrentValue, CurrentDataType, ObjJsonSubValidation);
            }
        }
        else if (_CurrentType == "select" && _CurrentLabel == "mandatory")
        {
            if ($Selector.val() == "" || $Selector.val() == null || $Selector.val() == undefined || $Selector.val() == "0")
            {
                _NoneValid += 1;
            }
        }
        return _NoneValid;

        /////////////////////////////////

        function getCurrentType($Selector)
        {
            if ($Selector.is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color'], textarea"))
            {
                return "input";
            }
            else if ($Selector.is("select"))
            {
                return "select";
            }
        }

        function validateValidValue($Selector, CurrentClass, CurrentValue, CurrentDataType, ObjJsonSubValidation)
        {
            var _NoneValid = 0;
            if (CurrentDataType == "date" && isNaN(new Date(_$Selector.datepicker("getDate"))))
            {
                _NoneValid += 1;
            }
            else if (CurrentDataType == "datetime")
            {
                _NoneValid = 0;
            }
            else
            {
                var _CurrentValidChar = getValidateType(CurrentClass);
                for (var i = 0; i < CurrentValue.length; i++)
                {
                    if (_CurrentValidChar.indexOf(CurrentValue.charAt(i).toLowerCase()) == -1)
                    {
                        consoleLog(CurrentValue.charAt(i));
                        _NoneValid += 1;
                    }
                }
                if (CurrentClass == "validate-email" && isValidEmail(CurrentValue) == false)
                {
                    _NoneValid += 1;
                }
                if (CurrentClass == "validate-web" && isValidURL(CurrentValue) == false)
                {
                    _NoneValid += 1;
                }
                if (ObjJsonSubValidation.hasOwnProperty("maxlength") == true && CurrentValue.length > ObjJsonSubValidation.maxlength)
                {
                    _NoneValid += 1;
                }
                if (ObjJsonSubValidation.hasOwnProperty("minlength") == true && CurrentValue.length < ObjJsonSubValidation.minlength)
                {
                    _NoneValid += 1;
                }
            }
            return _NoneValid;
        }
    }
}

function isValidEmail(Email)
{
    var _RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/
    return _RegExp.test(Email);
}

function isValidURL(URL)
{
    var _RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    return _RegExp.test(URL);
}

function populateForm(SelectedArea, SelectedObject)
{
    if (isEmpty(SelectedObject) === false && isEmpty(ObjJsonValidation) === false)
    {
        var _SelectedArea = "";
        var _$Selector = {};
        var _DataAttr = "";
        if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
        {
            _SelectedArea = $(SelectedArea);
        }
        else
        {
            _SelectedArea = "";
        }

        $.each(SelectedObject, function (HTMLElement, Value)
        {
            _$Selector = {};
            _DataAttr = "";
            if ($('#' + HTMLElement, _SelectedArea).length > 0 && $('#' + HTMLElement, _SelectedArea).attr("data-attr") != undefined)
            {
                _$Selector = $('#' + HTMLElement, _SelectedArea);
            }
            else if ($('.' + HTMLElement, _SelectedArea).length > 0 && $('.' + HTMLElement, _SelectedArea).attr("data-attr") != undefined)
            {
                _$Selector = $('.' + HTMLElement, _SelectedArea);
            }

            if (isEmpty(_$Selector) === false)
            {
                _DataAttr = _$Selector.attr("data-attr");
                if (ObjJsonValidation[HTMLElement].datatype == "date")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](moment(Value).format('L'));
                    }
                }
                else if (ObjJsonValidation[HTMLElement].datatype == "datetime")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](moment(Value).format('L') + " - " + moment(Value).format('LT'));
                    }
                    else
                    {
                        _$Selector[_DataAttr](0);
                    }
                }
                else if (ObjJsonValidation[HTMLElement].datatype == "time")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](moment('01/01/1900 ' + Value).format('LT'));
                    }
                    else
                    {
                        _$Selector[_DataAttr](0);
                    }
                }
                else if (ObjJsonValidation[HTMLElement].datatype == "militarytime")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](moment('01/01/1900 ' + Value).format('HH:mm'));
                    }
                    else
                    {
                        _$Selector[_DataAttr](0);
                    }
                }
                else if (ObjJsonValidation[HTMLElement].datatype == "decimal")
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](numeral(Value).format('0.00'));
                    }
                }
                else
                {
                    if (Value != "" && Value != null && Value != undefined)
                    {
                        _$Selector[_DataAttr](Value);
                    }
                    else if (Value == null)
                    {
                        _$Selector[_DataAttr](0);
                    }
                }
            }
        });
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

function initializeSlideshow(Options)
{
    var _Defaults =
    {
        setArrows: false,
        timer: 3000,
        fadein: 1000,
        fadeout: 1000
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    var _$Slideshow = $(".az-slideshow");
    var _$Slides = $(".az-slides");
    var _SlideShowTimer = 0;
    var _SlideIndex = 0;

    if (_$Slideshow.length > 0)
    {
        if (_Options.setArrows)
        {
            _$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
            $(".az-arrows", _$Slideshow).on("mouseenter", function ()
            {
                $.unsubscribe("functionlib/runSlides");
                window.clearTimeout(_SlideShowTimer);

            }).on("mouseleave", function ()
            {
                $.subscribe("functionlib/runSlides", function (e, data)
                {
                    _SlideShowTimer = window.setTimeout(runSlides, _Options.timer);
                });
                runSlides();
            })
        }

        $.subscribe("functionlib/windowResize", function (e, data)
        {
            _$Slideshow.height($("slide:first", _$Slides).height());
        });

        $.subscribe("functionlib/runSlides", function (e, data)
        {
            _SlideShowTimer = window.setTimeout(runSlides, _Options.timer);
        });

        _$Slideshow.height($("slide:first", _$Slides).height());
        $("slide:gt(0)", _$Slides).hide();
        runSlides();

        function runSlides()
        {
            $("slide", _$Slides).eq(_SlideIndex).fadeOut(_Options.fadeout);
            _SlideIndex = (_SlideIndex != $("slide", _$Slides).length - 1) ? _SlideIndex + 1 : 0;
            $("slide", _$Slides).eq(_SlideIndex).fadeIn(_Options.fadein, function ()
            {
                $.publish("functionlib/runSlides");
            });
        }

        plusDivs = function (n)
        {
            $.unsubscribe("functionlib/runSlides");
            window.clearTimeout(_SlideShowTimer);
            _SlideIndex += n;
            showDivs();
        }

        showDivs = function ()
        {
            if (_SlideIndex > $("slide", _$Slides).length - 1)
            {
                _SlideIndex = 0;
            }
            if (_SlideIndex < 0)
            {
                _SlideIndex = $("slide", _$Slides).length - 1;
            };
            $("slide", _$Slides).hide();
            $("slide", _$Slides).eq(_SlideIndex).show();
        }
    }
}

var _WindowWidth = 0;
function adjustStyle()
{
    if ($("#div-window-size").length == 0)
    {
        $("body").append('<div id="div-window-size" style="position: fixed; z-index: 499999; left: 0; bottom: 0; width: 100%; height: 20px; text-align: center;"></div>');
    }

    _WindowWidth = parseInt(window.innerWidth);
    if (_WindowWidth > 1199)
    {
        $("#div-window-size").css({ "background-color": "#337ab7", "color": "#ffffff" }).html("xl - (1200 - &#8734) - " + _WindowWidth + " px");
    }
    else if (_WindowWidth > 991 && _WindowWidth < 1200)
    {
        $("#div-window-size").css({ "background-color": "#5cb85c", "color": "#ffffff" }).html("lg - (992 - 1199) - " + _WindowWidth + " px");
    }
    else if (_WindowWidth > 767 && _WindowWidth < 993)
    {
        $("#div-window-size").css({ "background-color": "#5bc0de", "color": "#ffffff" }).html("md - (768 - 991) - " + _WindowWidth + " px");
    }

    else if (_WindowWidth > 576 && _WindowWidth < 768)
    {
        $("#div-window-size").css({ "background-color": "#f0ad4e", "color": "#ffffff" }).html("sm - (577 - 767) - " + _WindowWidth + " px");
    }
    else
    {
        $("#div-window-size").css({ "background-color": "#d9534f", "color": "#ffffff" }).html("xs - (0 - 576) - " + _WindowWidth + " px");
    }
}


// TODO
var initializeAjax = function (Options, ObjData)
{
    var _Defaults =
    {
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        timeout: 15000,
        exceptionAction: "silent",
        exceptionErrorText: "",
        transferType: ""
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if (typeof ObjData === "object")
    {
        _Options.transferType = ObjData.hasOwnProperty("TransferType") === true ? ObjData.TransferType : "";
        _Options.data = JSON.stringify(ObjData);
        consoleLog(JSON.stringify(ObjData));
    }

    $.ajaxSetup({ cache: false });
    var _CurrentAjax = $.ajax(_Options).promise();

    _CurrentAjax.fail(function (jqXHR, textStatus, errorThrown)
    {
        var _statusText = jqXHR.statusText == "timeout" ? "Timeout" : _Options.exceptionErrorText;
        throwException(_Options.exceptionAction, "", ThisPage, _Options.transferType + ":Status:" + jqXHR.statusText, _statusText);
    });

    return _CurrentAjax;
}

function initializeModalTitlebar(Options)
{
    var _Defaults =
    {
        titlebarText: "",
        titlebarTimeout: 3000
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert az-alert-danger" style="padding: 7px;" role="alert">' + _Options.titlebarText + '</p></div></div>');
    var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
    _$DialogRoleAlert.hide();
    _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
    $("body").addClass("az-alert-active");
    window.setTimeout(function ()
    {
        _$NewTitleBar.remove();
        _$DialogRoleAlert.show();
        $("body").removeClass("az-alert-active");
    }, _Options.titlebarTimeout);
}

function openStandardAlert(SelectedTitle, SelectedText, SelectedAdditional, Modal)
{
    Modal = Modal === true ? true : false;
    if ($('#az-modal').length == 0)
    {
        var _Defaults =
        {
            dialogWidth: 450,
            dialogHeight: 150
        };
        var _Options = _Defaults;

        var _HTML = "";
        _HTML = '<div id="az-modal-background">';
        _HTML += '<div id="az-modal">';
        _HTML += '<div class="az-modal-card">';
        _HTML += '<header>';
        _HTML += '<h1>' + SelectedTitle + '</h1>';
        _HTML += '</header>';
        _HTML += '<article style="overflow-y: auto;">';
        _HTML += '<div>' + SelectedText + '</div>';
        _HTML += '<div>' + SelectedAdditional + '</div>';
        _HTML += '</article>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
        $("body").append(_HTML);
        $("#az-modal-background").css({ "display": "block" });
        var _$AzModal = $("#az-modal");

        if (_Options.dialogWidth > window.innerWidth)
        {
            _Options.dialogWidth = (window.innerWidth - 60);
        }
        if (_Options.dialogHeight > window.innerHeight)
        {
            _Options.dialogHeight = (window.innerHeight - 144);
        }
        _$AzModal.css({ "width": _Options.dialogWidth });
        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Options.dialogHeight });

        if (Modal == false)
        {
            $("#az-modal-background").off("click", closeStandardAlert).on("click", closeStandardAlert);
        }
        $(".az-modal-card > header", _$AzModal).off("click").on("click", function ()
        {
            closeStandardAlert();
        });
        $.publish("functionlib/openStandardAlert");
    }
}

function closeStandardAlert()
{
    var _$Background = $("#az-modal-background");
    if (_$Background.length > 0)
    {
        $("#az-modal").slideUp(function ()
        {
            _$Background.remove();
            $("body").removeClass("az-alert-active");
        });
    }
}

function openStandardConfirm(SelectedTitle, SelectedText, SelectedButton1, SelectedButton2, FunctionToRun)
{
    if ($('#az-modal').length == 0)
    {
        var _Defaults =
        {
            dialogWidth: 450,
            dialogHeight: 150
        };
        var _Options = _Defaults;

        var _HTML = "";
        var _Button1ColClass = ' xs-6 az-text-left';
        if (SelectedButton2 == "")
        {
            var _Button1ColClass = ' xs-12 az-text-center';
        }
        _HTML = '<div id="az-modal-background">';
        _HTML += '<div id="az-modal">';
        _HTML += '<div class="az-modal-card">';
        _HTML += '<header>';
        _HTML += '<h1>' + SelectedTitle + '</h1>';
        _HTML += '</header>';
        _HTML += '<article style="overflow-y: auto;">';
        _HTML += '<div>' + SelectedText + '</div>';
        _HTML += '<div>';
        _HTML += '<div class="az-row az-margin-t-28 az-margin-b-14">';
        if (SelectedButton2 != "")
        {
            _HTML += '<div class="az-col xs-6 az-text-right">';
            _HTML += '<div class="az-form-group">';
            _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdStandardConfirmButton2" style="width: 60%; margin-right: 4px;">' + SelectedButton2 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        _HTML += '<div class="az-col' + _Button1ColClass + '">';
        _HTML += '<div class="az-form-group">';
        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdStandardConfirmButton1" style="width: 60%; margin-left: 4px;">' + SelectedButton1 + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</article>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';
        $("body").append(_HTML);
        $("#az-modal-background").css({ "display": "block" });
        var _$AzModal = $("#az-modal");

        if (_Options.dialogWidth > window.innerWidth)
        {
            _Options.dialogWidth = (window.innerWidth - 60);
        }
        if (_Options.dialogHeight > window.innerHeight)
        {
            _Options.dialogHeight = (window.innerHeight - 144);
        }
        _$AzModal.css({ "width": _Options.dialogWidth });
        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Options.dialogHeight });

        $("#cmdStandardConfirmButton2").off().on('click', function ()
        {
            closeStandardConfirm();
        });
        $("#cmdStandardConfirmButton1").off().on('click', function ()
        {
            closeStandardConfirm();
            if (FunctionToRun)
            {
                FunctionToRun();
            }
        });
        $(".az-modal-card > header", _$AzModal).off("click").on("click", function ()
        {
            closeStandardConfirm();
        });
        $.publish("functionlib/openStandardConfirm");
    }
}

function closeStandardConfirm()
{
    var _$Background = $("#az-modal-background");
    if (_$Background.length > 0)
    {
        $("#az-modal").slideUp(function ()
        {
            _$Background.remove();
            $("body").removeClass("az-alert-active");
        });
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//        openStandardConfirm(SingleDefaultElements.cancelDialogConfirmTitle, SingleDefaultElements.cancelDialogConfirmText, SingleDefaultElements.cancelDialogConfirmButton1, SingleDefaultElements.cancelDialogConfirmButton2, FunctionToRun);
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