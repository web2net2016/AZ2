// AZ-Functionlib v2.0.0 | (c) web2net AS
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
var ThisLocation = "";
var ThisPage = "";
var azPageFunction = "";
var $ObjAZForm = {};

var ObjJsonValidation = {};
var LanguagePage = "";
var ValidationPage = "";
var ModalDialogScrollTop = 0;
var ObjInitializePageOptions = {};
var DebugMode = true;

// AZ Page
function initAZPage(Options, Callback)
{
    //showCoverSpin();

    var main = this;
    var _Defaults =
    {
        azPageLanguageClientStorage: false,
        azPageCustomerInfo: false,
        azPageSystemMenu: false,
        azPageLanguage: false,
        azPageValidation: false,
        azPageFormStyle: true,
        azPageGridView: false,

        dialogAlertClass: 'az-alert-danger',
        dialogNormalClass: 'az-alert-info',
        dialogAlertTimeout: 3000

        //accordionIndex: ""
        //navbarMenuAnimate: true
    };
    main.Options = $.extend({}, _Defaults, Options || {});
    ObjInitializePageOptions = main.Options;

    ThisLocation = window.document.location.hostname;
    ThisPage = window.document.location.pathname;
    $ObjAZForm = (window.document.forms.length > 0) ? $(window.document.forms[0]) : "";

    main.azGridView = function ()
    {
        if (main.Options.azPageGridView)
        {
            $.subscribeonce("functionlib/initGridView", function (e)
            {
                Callback();
            });
            new initGridView($ObjAZForm);
        }
        else
        {
            Callback();
        }
    }

    main.azFormStyle = function ()
    {
        if (main.Options.azPageFormStyle)
        {
            $.subscribeonce("functionlib/initAZFormStyle", function (e)
            {
                main.azGridView();
            });
            new initAZFormStyle($ObjAZForm);
        }
        else
        {
            main.azGridView();
        }
    }

    main.azValidation = function ()
    {
        if (main.Options.azPageValidation)
        {
            $.subscribeonce("functionlib/initAZGetValidation", function (e)
            {
                $.subscribeonce("functionlib/initAZSetValidation", function (e)
                {
                    main.azFormStyle();
                });
                new initAZSetValidation();
            });
            new initAZGetValidation(ValidationPage);
        }
        else
        {
            main.azFormStyle();
        }
    }

    main.azLanguage = function ()
    {
        if (main.Options.azPageLanguage)
        {
            $.subscribeonce("functionlib/initAZGetLanguage", function (e)
            {
                new initAZSetLanguage();
                main.azValidation();
            });
            new initAZGetLanguage(LanguagePage);
        }
        else
        {
            main.azValidation();
        }
    }

    if (main.Options.azPageLanguageClientStorage)
    {
        new initAZSetLanguageClientStorage();
    }
    if (main.Options.azPageCustomerInfo)
    {
        $.subscribeonce("functionlib/initAZGetCustomerInfo", function (e)
        {
            if (main.Options.azPageSystemMenu)
            {
                new initAZSetSystemMenu();
            }
            main.azLanguage();
        });
        new initAZGetCustomerInfo();
    }
    else
    {
        main.azLanguage();
    }
}

// AZ Get Language
function initAZGetLanguage(SelectedPage)
{
    $.ajaxSetup({ cache: false });
    $.getJSON(SelectedPage).done(function (data)
    {
        if (isEmpty(data) === false)
        {
            ObjPageLanguage = data;
            consoleLog("initAZGetLanguage");
            $.publish("functionlib/initAZGetLanguage");
        }
        else
        {
            throwException("silent", "", ThisPage, "initAZGetLanguage-1", "Language");
        }
    }).fail(function (jqXHR, textStatus, err)
    {
        throwException("silent", "", ThisPage, "initAZGetLanguage-2", "Language");
    });
}

// AZ Set Language
function initAZSetLanguage()
{
    azSetFormLanguage(MyDefaultLanguage.ObjNonLanguageElements);
    SingleNonLanguageElements = MyDefaultLanguage.SingleNonLanguageElements;
    if (ThisLanguage != undefined)
    {
        azSetFormLanguage(MyDefaultLanguage.ObjDefaultElements[ThisLanguage]);
        SingleDefaultElements = MyDefaultLanguage.SingleDefaultElements[ThisLanguage];
        if (isEmpty(ObjPageLanguage) === false)
        {
            azSetFormLanguage(ObjPageLanguage.ObjElements[ThisLanguage]);
            SingleElements = ObjPageLanguage.SingleElements[ThisLanguage];
            if (SingleElements.labelPageTitle != undefined)
            {
                document.title = SingleElements.labelPageTitle;
            }
        }
    }
    consoleLog("initAZSetLanguage");
    $.publish("functionlib/initAZSetLanguage");
}

function azSetFormLanguage(ObjElements)
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
    $.publish("functionlib/azSetFormLanguage");
}

// AZ Set Language Client Storage
function initAZSetLanguageClientStorage()
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
    consoleLog("initAZSetLanguageClientStorage");
    $.publish("functionlib/initAZSetLanguageClientStorage");
}

// AZ Get Customer Info
function initAZGetCustomerInfo()
{
    ObjCustomerInfo = JSON.parse(clientStorage("get", "customerinfo", ""));
    if (isEmpty(ObjCustomerInfo) === false && ObjCustomerInfo.hasOwnProperty("UserSignIn"))
    {
        ThisCustomerName = ObjCustomerInfo.UserSignIn.CustomerName;
        ThisUserNo = ObjCustomerInfo.UserSignIn.UserNo;
        ThisFirstName = ObjCustomerInfo.UserSignIn.FirstName;
        ThisLastName = ObjCustomerInfo.UserSignIn.LastName;
        ThisEmail = ObjCustomerInfo.UserSignIn.Email;
        ThisProfileImage = ObjCustomerInfo.UserSignIn.ProfileImage;
        ThisLanguage = ObjCustomerInfo.UserSignIn.LanguageCode;
        ThisUserType = ObjCustomerInfo.UserSignIn.UserType;
        $('#cmdMenuActiveUser').text(ThisFirstName + " " + ThisLastName);
        moment.locale(ThisLanguage);
        consoleLog("initAZGetCustomerInfo");
        $.publish("functionlib/initAZGetCustomerInfo");
    }
    else
    {
        throwException("silent", "", ThisPage, "initAZGetCustomerInfo-1", "LoadData");
        window.location.href = "/index.html";
    }
}

// AZ Set System Menu
function initAZSetSystemMenu()
{
    if (isEmpty(ObjCustomerInfo) === false && ObjCustomerInfo.hasOwnProperty("MainMenu"))
    {
        $.each(ObjCustomerInfo.MainMenu, function (i, MainMenuContent)
        {
            if (MainMenuContent.RoleFeatureStatus == "block")
            {
                $("." + MainMenuContent.Name + "_" + MainMenuContent.Type + ", #" + MainMenuContent.Name + "_" + MainMenuContent.Type).css({ "display": "block" });
            }
        });
        consoleLog("initAZSetSystemMenu");
        $.publish("functionlib/initAZSetSystemMenu");
    }
    else
    {
        throwException("dialog", "", ThisPage, "initAZSetSystemMenu-1", "LoadData");
    }
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

function initGridView(SelectedArea)
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
        $.publish("functionlib/initGridView");
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

function initAZGetValidation(SelectedPage)
{
    $.ajaxSetup({ cache: false });
    $.getJSON(SelectedPage).done(function (data)
    {
        if (data instanceof Object && data != null && data != undefined)
        {
            ObjJsonValidation = data;
            consoleLog("initAZGetValidation");
            $.publish("functionlib/initAZGetValidation");
        }
        else
        {
            throwException("silent", "", ThisPage, "initAZGetValidation-1", "Validation");
        }
    }).fail(function (jqXHR, textStatus, err)
    {
        throwException("silent", "", ThisPage, "initAZGetValidation-2", "Validation");
    });
}

function initAZSetValidation(SelectedArea)
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
    consoleLog("initAZSetValidation");
    $.publish("functionlib/initAZSetValidation");
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

function initAZFormStyle(SelectedArea)
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
        }
        if ($(this).is("textarea"))
        {
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
        }
        if ($(this).is("[type='checkbox']"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
        }
        if ($(this).is("[type='radio']"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
        }
        if ($(this).is("select"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("change", validateDirty).on("change", validateDirty);
            }
        }
        if ($(this).is("button"))
        {
            if ($(this).hasClass("validate"))
            {
                $(this).off("click", validateDirty).on("click", validateDirty);
            }
        }
    });

    //setPortfolio();
    //$(window).resize(function ()
    //{
    //    setPortfolio();
    //    closeNavbarMobile();
    //});

    // Disabled Form Enter
    //if ($("#" + $ObjAZForm).hasClass("disabled-enter") == true)
    //{
    //    $("#" + $ObjAZForm).off('keypress').on('keypress', function (e)
    //    {
    //        if ((e.keyCode || e.which) == 13)
    //        {
    //            return false;
    //        }
    //    });
    //}

    // Mandatory Asterisk
    //$(".mandatory", _SelectedArea).not(".az-no-asterisk").each(function ()
    //{
    //    $(".az-mandatory-asterisk", this).remove();
    //    $(this).append(' <span class="az-mandatory-asterisk">*</span>');
    //});

    // Password Eye
    //$(".passwordeye").off("click", hideShowPassword).on("click", hideShowPassword);

    // Animated Label
    //$(".az-label-animated").off("click", azLabelAnimatedClick).on("click", azLabelAnimatedClick);

    // Adjust Cards Height
    //$('.az-accordion-card.adjust, .az-card.adjust, .az-list-card.adjust, .az-timeline-card.adjust').matchHeight();

    // Navbar Menu
    //var _$NavbarMenu = $(".az-navbar-menu");
    //var _NavbarTopHeight = _$NavbarMenu.parents(".az-navbar-top").height();
    //_$NavbarMenu.off().on("click", "li > a", function (e)
    //{
    //    var _Anchor = $(this).attr('href');
    //    if (_Anchor.indexOf("#") === 0)
    //    {
    //        e.preventDefault();
    //        if (_$NavbarMenu.parents(".az-navbar-top").hasClass("az-navbar-sticky") == false)
    //        {
    //            _NavbarTopHeight = 0;
    //        }
    //        if (_Options.navbarMenuAnimate)
    //        {
    //            $('html, body').stop().animate(
    //                {
    //                    scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
    //                },
    //                {
    //                    easing: 'easeInOutExpo',
    //                    duration: 1500
    //                });
    //        }
    //        else
    //        {
    //            $('html, body').stop().animate(
    //                {
    //                    scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
    //                },
    //                {
    //                    duration: 0
    //                });
    //        }
    //        $(".az-navbar-top-content").removeClass("mobile");
    //    }
    //});

    // Sidebar Menu
    //var _$SidebarMenu = $(".az-sidebar-menu");
    //_$SidebarMenu.off().on("click", "li > a", function (e)
    //{
    //    e.preventDefault();
    //    var _Anchor = $(this).attr('href');
    //    if (_Anchor.indexOf("#") === -1)
    //    {
    //        showCoverSpin();
    //        $("#" + $ObjAZForm).attr(
    //        {
    //            "action": _Anchor,
    //            "method": "POST"
    //        }).submit();
    //    }
    //});

    // Menu
    //var _$SideMenu = $(".az-menu");
    //_$SideMenu.off().on("click", "div > a", function (e)
    //{
    //    e.preventDefault();
    //    var _Anchor = $(this).attr('href');
    //    if (_Anchor.indexOf("#") === -1)
    //    {
    //        showCoverSpin();
    //        $("#" + $ObjAZForm).attr(
    //        {
    //            "action": _Anchor,
    //            "method": "POST"
    //        }).submit();
    //    }
    //});

    // Dropdown Menu
    //if ($(".az-dropdown-button").is(":button"))
    //{
    //    $(".az-dropdown-button").off("click", setDropdownClickEvent).on("click", setDropdownClickEvent);
    //}
    //$(".az-dropdown-button[href]").off("click", setDropdownClickEvent).on("click", setDropdownClickEvent);

    // Get URl Paramaters
    //var urlParameters = getURLParameters(window.location.href);
    //if (isEmpty(urlParameters) === false)
    //{
    //    if (urlParameters.hasOwnProperty('scrollto'))
    //    {
    //        $('html, body').stop().animate(
    //        {
    //            scrollTop: $("#" + urlParameters.scrollto).offset().top
    //        },
    //        {
    //            easing: 'easeInOutExpo',
    //            duration: 1500
    //        });
    //    }
    //    if (urlParameters.hasOwnProperty('accordion'))
    //    {
    //        setAccordion(Number(urlParameters.accordion));
    //    }
    //}
    consoleLog("initAZFormStyle");
    $.publish("functionlib/initAZFormStyle");
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
    var _RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
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