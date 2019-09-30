﻿// AZ-Functionlib v2.0.0 | (c) web2net AS

var azModalDialogScrollTop = 0;
var ObjInitializePageOptions = {};
var DebugMode = true;

// AZ Accordion
function initAZAccordion(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azAccordionId: "",
        azAccordionHeightStyle: "content",
        azAccordionCollapsible: true,
        azAccordionOpenEvent: "click",
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
        _Main.$AccordionCard.children("header").append('<i class="' + _Main.Options.azAccordionIconClosed + '"></i>');

        var _MaxArticleHeight = 0;
        _Main.azArticleHeight = function ()
        {
            _MaxArticleHeight = 0;
            _Main.$AccordionCard.children("article").css({ height: "inherit" });
            _Main.$AccordionCard.children("article").each(function ()
            {
                _MaxArticleHeight = Math.max(_MaxArticleHeight, $(this).height());
            });
            if (_MaxArticleHeight > 0)
            {
                _Main.$AccordionCard.children("article").height(_MaxArticleHeight);
            }
        }

        _Main.setAZAccordion = function (SelectedIndex)
        {
            execAZAccordion(_Main.$Accordion.children(".az-accordion-card").eq(SelectedIndex).children("header"));
        }

        _Main.$Accordion.off().on(_Main.Options.azAccordionOpenEvent, ".az-accordion-card > header", function (e)
        {
            execAZAccordion($(this));
            var _Element = e.target || e.srcElement;
            $.publish("functionlib/azAccordionHeader",
                {
                    azAccordionId: _Main.Options.azAccordionId,
                    azAccordionHeaderJQElement: $(_Element)
                });
        });

        var azAccordionActivated = "";
        var azAccordionDeactivated = "";
        function execAZAccordion($SelectedAccordionHeader)
        {
            if ($SelectedAccordionHeader.hasClass("az-accordion-header-active") === true)
            {
                if (_Main.Options.azAccordionCollapsible === true)
                {
                    $SelectedAccordionHeader.removeClass("az-accordion-header-active");
                    $SelectedAccordionHeader.siblings("article").slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                    $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                    if (azAccordionActivated == $SelectedAccordionHeader.parent().index())
                    {
                        azAccordionActivated = "";
                    }
                    $.publish("functionlib/azAccordionActivate",
                        {
                            azAccordionId: _Main.Options.azAccordionId,
                            azAccordionStatus: "closed",
                            azAccordionActivated: azAccordionActivated,
                            azAccordionDeactivated: azAccordionDeactivated
                        });
                    azAccordionDeactivated = $SelectedAccordionHeader.parent().index();
                }
                else
                {
                    if (azAccordionDeactivated == $SelectedAccordionHeader.parent().index())
                    {
                        azAccordionDeactivated = "";
                    }
                    $.publish("functionlib/azAccordionActivate",
                        {
                            azAccordionId: _Main.Options.azAccordionId,
                            azAccordionStatus: "open",
                            azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                            azAccordionDeactivated: azAccordionDeactivated
                        });
                    azAccordionDeactivated = $SelectedAccordionHeader.parent().index();
                }
            }
            else
            {
                _Main.$AccordionCard.children("header").removeClass("az-accordion-header-active");
                _Main.$AccordionCard.children("article").slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                $("i", _Main.$AccordionCard.children("header")).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                $SelectedAccordionHeader.addClass("az-accordion-header-active");
                $SelectedAccordionHeader.siblings("article").slideDown(_Main.Options.azAccordionSlideDown).addClass("az-accordion-article-active");
                $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconClosed).addClass(_Main.Options.azAccordionIconOpen);

                if (azAccordionDeactivated == $SelectedAccordionHeader.parent().index())
                {
                    azAccordionDeactivated = "";
                }
                $.publish("functionlib/azAccordionActivate",
                    {
                        azAccordionId: _Main.Options.azAccordionId,
                        azAccordionStatus: "open",
                        azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                        azAccordionDeactivated: azAccordionDeactivated
                    });
                azAccordionDeactivated = $SelectedAccordionHeader.parent().index();
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
            _Main.setAZAccordion(0);
        }
    }
}

// AZ Ajax
function initAZAjax(Options)
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
        _Main.azAjaxOptions =
            {
                url: _Main.Options.azAjaxUrl,
                dataType: _Main.Options.azAjaxDataType,
                type: _Main.Options.azAjaxType,
                contentType: _Main.Options.azAjaxContentType,
                headers: _Main.Options.azAjaxObjHeaders,
                timeout: _Main.Options.azAjaxTimeout
            };
        if (isEmpty(_Main.Options.azAjaxObjToSend) === false)
        {
            _Main.azAjaxOptions.data = JSON.stringify(_Main.Options.azAjaxObjToSend);
        }
        $.ajaxSetup({ cache: false });
        var _CurrentAjax = $.ajax(_Main.azAjaxOptions).promise();
        return _CurrentAjax;
    }
    else
    {
        return $.Deferred().resolve("");
    }
}

// AZ Circular Bar
function initAZCircularBar(Options)
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
        azCircularBarCaptionColor: "",
    };

    if (Options && Options.length > 0)
    {
        $.each(Options, function (Index, ObjCurrentOption)
        {
            new aktivateAZCircularBar(ObjCurrentOption);
        });
    }
    else if (isEmpty(Options) === false)
    {
        new aktivateAZCircularBar(Options);
    }

    function aktivateAZCircularBar(ObjCurrentOption)
    {
        var _Main = this;
        _Main.Options = $.extend({}, _Defaults, ObjCurrentOption || {});

        if (_Main.Options.azCircularBarId != "")
        {
            _Main.$CircularBar = $("#" + _Main.Options.azCircularBarId);
            _Main.$CircularBar.Label = $('<span></span>').addClass("label").html(_Main.Options.azCircularBarLabel);
            _Main.$CircularBar.Slice = $('<div></div>').addClass("slice");
            _Main.$CircularBar.Bar = $('<div></div>').addClass("bar").css({ "border-color": _Main.Options.azCircularBarValueColor });
            _Main.$CircularBar.Fill = $('<div></div>').addClass("fill").css({ "border-color": _Main.Options.azCircularBarValueColor });
            _Main.$CircularBar.Slice.append(_Main.$CircularBar.Bar).append(_Main.$CircularBar.Fill);
            _Main.$CircularBar.append(_Main.$CircularBar.Label).append(_Main.$CircularBar.Slice).addClass("c100 p" + _Main.Options.azCircularBarValue).css({ "background-color": _Main.Options.azCircularBarColor, "font-size": _Main.Options.azCircularBarSize });
            if (_Main.Options.azCircularBarCaption != "")
            {
                _Main.$CircularBar.Caption = $('<span></span>').addClass("caption").css({ "top": _Main.Options.azCircularBarSize, "color": _Main.Options.azCircularBarCaptionColor }).html(_Main.Options.azCircularBarCaption);
            }
            _Main.$CircularBar.append(_Main.$CircularBar.Caption);
        }
    }
}

// AZ Modal Dialog
function initAZModalDialog(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azModalDialogModal: true,
        azModalDialogTitle: "",
        azModalDialogText: "",
        azModalDialogTitlebar: true,
        azModalDialogTitlebarClose: true,
        azModalDialogiFrameURL: "",
        azModalDialogWidth: 450,
        azModalDialogHeight: 300,
        azModalDialogResizable: false,
        azModalDialogDraggable: true,
        azModalDialogNoParentScroll: false,
        azModalDialogBackground: true,
        azModalDialogCloseOnEscape: true,
        azModalDialogPosition: false,
        azModalDialogPositionOf: {},
        azModalDialogPositionMy: "left bottom-30",
        azModalDialogPositionAt: "left top",
        azModalDialogBeforeOpen: function () { },
        azModalDialogAfterOpen: function () { }
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if ($('#az-modal-dialog').length == 0)
    {
        $.subscribeonce("functionlib/initAZModalDialog/azModalDialogBeforeOpen", function ()
        {
            azModalDialogScrollTop = 0;
            _Main.$ModalBody = $("body");
            _Main.$ModalBackground = $("<div></div>").attr("id", "az-modal-background");
            _Main.$ModalDialog = $("<div></div>").attr("id", "az-modal-dialog");
            _Main.$ModalCard = $("<div></div>").addClass("az-modal-card");
            _Main.$ModalArticle = $("<article></article>").css({ "overflow-y": "auto" }).html(_Main.Options.azModalDialogText).css({ "width": "100%" });
            _Main.$ModalCard.append(_Main.$ModalArticle);
            _Main.$ModalIframe = $("<iframe></iframe>").attr("id", "az-iframe");
            if (_Main.Options.azModalDialogiFrameURL != "")
            {
                _Main.$ModalIframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": (_Main.Options.azModalDialogHeight - 80) });
                _Main.$ModalCard.append(_Main.$ModalIframe);
            }
            _Main.$ModalDialog.append(_Main.$ModalCard);
            _Main.$CurrentDialog = _Main.$ModalDialog.dialog(
                {
                    autoOpen: false,
                    modal: false,
                    width: (_Main.Options.azModalDialogWidth - 16),
                    height: _Main.Options.azModalDialogHeight,
                    resizable: _Main.Options.azModalDialogResizable,
                    draggable: _Main.Options.azModalDialogDraggable,
                    closeOnEscape: _Main.Options.azModalDialogCloseOnEscape
                });
            if (_Main.Options.azModalDialogPosition && isEmpty(_Main.Options.azModalDialogPositionOf) == false)
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
            if (_Main.Options.azModalDialogBackground === false)
            {
                _Main.$ModalBackground.css({ "background-color": "transparent" });
            }
            if (_Main.Options.azModalDialogModal === false)
            {
                _Main.$ModalBackground.off("click").on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-modal-background")
                    {
                        new azModalDialogClose();
                    }
                });
            }
            if (_Main.Options.azModalDialogWidth > window.innerWidth)
            {
                _Main.Options.azModalDialogWidth = (window.innerWidth - 20);
            }
            if (_Main.Options.azModalDialogHeight > window.innerHeight)
            {
                _Main.Options.azModalDialogHeight = (window.innerHeight - 20);
            }
            if (_Main.Options.azModalDialogNoParentScroll)
            {
                azModalDialogScrollTop = $(window).scrollTop();
                _Main.$ModalBody.addClass("az-no-parent-scroll");
            }
            _Main.$CurrentDialog.Titlebar = _Main.$CurrentDialog.siblings(".ui-dialog-titlebar");
            $(".ui-dialog-title", _Main.$CurrentDialog.Titlebar).html(_Main.Options.azModalDialogTitle);
            $(".ui-dialog-titlebar-close", _Main.$CurrentDialog.Titlebar).removeAttr("title");
            if (_Main.Options.azModalDialogTitlebar === false)
            {
                _Main.$CurrentDialog.Titlebar.hide();
            }
            if (_Main.Options.azModalDialogTitlebarClose === false)
            {
                $(".ui-dialog-titlebar-close", _Main.$CurrentDialog.Titlebar).hide();
            }
            _Main.$CurrentDialog.dialog("open");
            _Main.$CurrentDialog.dialog(
                {
                    close: function (e, ui)
                    {
                        if (e.originalEvent)
                        {
                            new azModalDialogClose();
                        }
                    }
                });
            _Main.$ModalBody.append(_Main.$ModalBackground);
            checkAsyncAndPublish(_Main.Options.azModalDialogAfterOpen, "functionlib/initAZModalDialog/azModalDialogAfterOpen");
        });
        checkAsyncAndPublish(_Main.Options.azModalDialogBeforeOpen, "functionlib/initAZModalDialog/azModalDialogBeforeOpen");
    }
}

function azModalDialogClose(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azModalDialogLocationReload: false,
        azModalDialogAfterClose: function () { }
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    $.subscribeonce("functionlib/azModalDialogAfterClose", function ()
    {
        _Main.$ModalBody = $("body");
        _Main.$ModalBackground = $("#az-modal-background");
        _Main.$ModalDialog = $("#az-modal-dialog");

        if (_Main.Options.azModalDialogLocationReload === true)
        {
            $.subscribeonce("functionlib/backgroundRemovedModalDialog", function ()
            {
                location.reload();
            });
        }
        _Main.$ModalBody.removeClass("az-alert-active az-no-parent-scroll");
        if (_Main.$ModalBody.hasClass("") === true)
        {
            _Main.$ModalBody.removeAttr("class");
        }
        $("#az-iframe").attr("src", "");
        _Main.$ModalDialog.dialog("close");
        if (_Main.$ModalDialog.length > 0)
        {
            _Main.$ModalDialog.remove();
        }
        if (_Main.$ModalBackground.length > 0)
        {
            _Main.$ModalBackground.remove();
            $.publish("functionlib/backgroundRemovedModalDialog");
        }
        if (_Main.Options.azModalDialogLocationReload === false)
        {
            if (azModalDialogScrollTop > 0)
            {
                $(window).scrollTop(azModalDialogScrollTop);
            }
        }
    });
    checkAsyncAndPublish(_Main.Options.azModalDialogAfterClose, "functionlib/azModalDialogAfterClose");
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
        azModalDialogTitle: "",
        azModalDialogAlertClass: 'az-alert-danger',
        azModalDialogAlertTimeout: 3000
    };
    var _Options = $.extend({}, _Defaults, Options || {});

    if (Options.hasOwnProperty("dialogAlertClass") === false)
    {
        _Options.azModalDialogAlertClass = ObjInitializePageOptions.azModalDialogAlertClass;
    }
    if (Options.hasOwnProperty("dialogAlertTimeout") === false)
    {
        _Options.azModalDialogAlertTimeout = ObjInitializePageOptions.azModalDialogAlertTimeout;
    }

    if ($(".az-alert-active").length == 0)
    {
        var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert ' + _Options.azModalDialogAlertClass + '" style="padding: 7px;" role="alert">' + _Options.azModalDialogTitle + '</p></div></div>');
        var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
        _$DialogRoleAlert.hide();
        _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
        $("body").addClass("az-alert-active");
        window.setTimeout(function ()
        {
            _$NewTitleBar.remove();
            _$DialogRoleAlert.show();
            $("body").removeClass("az-alert-active");
            if ($("body").hasClass("") === true)
            {
                $("body").removeAttr("class");
            }
        }, _Options.azModalDialogAlertTimeout);
    }
}

// AZ Snackbar
function initAZSnackbar(Options)
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
        azSnackbarBackgroundColor: "333333",
        azSnackbarTextColor: "FFFFFF",
        azSnackbarCloseColor: "FFFFFF"
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if (_Main.Options.azSnackbarId != "" && $("#" + _Main.Options.azSnackbarId).length == 0)
    {
        _Main.$Wrapper = $('<div></div>').attr({ "id": _Main.Options.azSnackbarId }).addClass("az-snackbar");
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
        _Main.$Wrapper.addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);

        if (window.innerWidth < 576)
        {
            _Main.$Wrapper.addClass("az-snackbar-mobile");
            if (_Main.AnimateOpenOptions.hasOwnProperty("top") === true)
            {
                _Main.AnimateOpenOptions.top = 0;
            }
            if (_Main.AnimateOpenOptions.hasOwnProperty("bottom") === true)
            {
                _Main.AnimateOpenOptions.bottom = 0;
            }
            if (_Main.Options.azSnackbarMobileMinHeight > 0)
            {
                _Main.$Wrapper.css({ "min-height": _Main.Options.azSnackbarMobileMinHeight })
            }
        }

        _Main.closeAZSnackbar = function ()
        {
            _Main.$Wrapper.animate(_Main.AnimateCloseOptions, 500, function ()
            {
                $("#" + _Main.Options.azSnackbarId).remove();
            });
        }

        if (_Main.Options.azSnackbarClose === true)
        {
            _Main.$Close = $('<td></td>').html("X").addClass("az-snackbar-close").css({ "color": "#" + _Main.Options.azSnackbarCloseColor + "" });
            _Main.$Close.off("click").on("click", function ()
            {
                _Main.closeAZSnackbar();
            });
        }
        else
        {
            _Main.$Close = "";
            window.setTimeout(function ()
            {
                _Main.closeAZSnackbar();
            }, _Main.Options.azSnackbarTimeout);
        }

        _Main.$TextCell = $('<td></td>').html(_Main.Options.azSnackbarText).addClass("az-snackbar-text").css({ "color": "#" + _Main.Options.azSnackbarTextColor + "" });
        _Main.$TableRow = $('<tr></tr>').append(_Main.$TextCell).append(_Main.$Close);
        _Main.$Table.append(_Main.$TableRow);
        _Main.$Wrapper.append(_Main.$Table).css({ "background-color": "#" + _Main.Options.azSnackbarBackgroundColor + "" });
        $("body").append(_Main.$Wrapper);
        _Main.$Wrapper.animate(_Main.AnimateOpenOptions, 500);

        _Main.setAZSnackbarText = function (SnackbarText)
        {
            _Main.$TextCell.html(SnackbarText);
        }
    }
}

// AZ Tabs
function initAZTabs(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azTabsId: "",
        azTabsHeightStyle: "content",
        azTabsOpenEvent: "click"
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if (_Main.Options.azTabsId != "")
    {
        _Main.$Tabs = $("#" + _Main.Options.azTabsId);
        _Main.$TabsCard = _Main.$Tabs.children(".az-tabs-card");

        var _MaxArticleHeight = 0;
        _Main.azArticleHeight = function ()
        {
            _MaxArticleHeight = 0;
            _Main.$TabsCard.children("article").css({ height: "inherit" });
            _Main.$TabsCard.children("article").each(function ()
            {
                _MaxArticleHeight = Math.max(_MaxArticleHeight, $(this).height());
            });
            if (_MaxArticleHeight > 0)
            {
                _Main.$TabsCard.children("article").height(_MaxArticleHeight);
            }
        }

        _Main.setAZTabs = function (SelectedIndex)
        {
            execAZTabs(_Main.$Tabs.children("ul").children("li").eq(SelectedIndex));
        }

        _Main.$Tabs.off().on(_Main.Options.azTabsOpenEvent, " > ul > li", function (e)
        {
            execAZTabs($(this));
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

        var azTabsDeactivated = "";
        function execAZTabs($SelectedTab)
        {
            var _MenuIndex = $($SelectedTab).index();
            _Main.$Tabs.children("ul").children("li").removeClass("az-tabs-tab-active");
            _Main.$Tabs.children("ul").children("li").eq(_MenuIndex).addClass("az-tabs-tab-active");
            _Main.$TabsCard.children("article").removeClass("az-tabs-article-active");
            _Main.$TabsCard.eq(_MenuIndex).children("article").addClass("az-tabs-article-active");
            $.publish("functionlib/azTabsActivate",
                {
                    azTabsId: _Main.Options.azTabsId,
                    azTabsActivated: _MenuIndex,
                    azTabsDeactivated: azTabsDeactivated
                });
            azTabsDeactivated = _MenuIndex;
        }

        if (_Main.Options.azTabsHeightStyle == "auto")
        {
            _Main.azArticleHeight();
            $(window).resize(function ()
            {
                _Main.azArticleHeight();
            });
        }
        _Main.setAZTabs(0);
    }
}

function initAZWindow(Options)
{
    var _Defaults =
    {
        dialogModal: false,
        dialogTitle: "",
        dialogText: "",
        dialogTitlebar: true,
        dialogTitlebarClose: true,
        //dialogButton1: "",
        //dialogButton2: "",
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
        $.subscribeonce("functionlib/initAZWindow/dialogBeforeOpen", function ()
        {
            azModalDialogScrollTop = 0;

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
            //_HTML += createAZWindowButton(_Options)
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
                    azModalDialogScrollTop = $(window).scrollTop();
                    $("body").addClass("az-no-parent-scroll");
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
            $.publish("functionlib/initAZWindow");
            checkAsyncAndPublish(_Options.dialogAfterOpen, "");
        });
        checkAsyncAndPublish(_Options.dialogBeforeOpen, "functionlib/initAZWindow/dialogBeforeOpen");
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
        $("body").removeClass("az-alert-active az-no-parent-scroll");
        if ($("body").hasClass("") === true)
        {
            $("body").removeAttr("class");
        }
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
            if (azModalDialogScrollTop > 0)
            {
                $(window).scrollTop(azModalDialogScrollTop);
            }
        }
    });
    checkAsyncAndPublish(_Options.dialogClose, "functionlib/closeAZWindow");
}

//function createAZWindowButton(Options)
//{
//    var _Defaults =
//    {
//        dialogButton1: "",
//        dialogButton2: ""
//    };
//    var _Options = $.extend({}, _Defaults, Options || {});

//    var _HTML = "";
//    if (_Options.dialogButton1 != "" && _Options.dialogButton2 != "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-6 az-text-right">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Options.dialogButton2 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '<div class="az-col xs-6 az-text-left">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Options.dialogButton1 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    else if (_Options.dialogButton1 != "" && _Options.dialogButton2 == "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-12 az-text-center">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button primary az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + _Options.dialogButton1 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    else if (_Options.dialogButton1 == "" && _Options.dialogButton2 != "")
//    {
//        _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
//        _HTML += '<div class="az-col xs-12 az-text-center">';
//        _HTML += '<div class="az-form-group">';
//        _HTML += '<button type="button" class="az-button info az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + _Options.dialogButton2 + '</button>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//        _HTML += '</div>';
//    }
//    return _HTML;
//}

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
function initAZSlideIn(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azSlideInId: "",
        azSlideInTop: 30,
        azSlideInWidth: 300,
        azSlideInHeight: 500,
        azSlideInIcon: "fas fa-bars",
        azSlideInPosition: "right"
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if (_Main.Options.azSlideInId != "")
    {
        _Main.$SlideIn = $("#" + _Main.Options.azSlideInId);
        _Main.$SlideInTab = _Main.$SlideIn.children(".az-slidein-tab");
        _Main.$SlideInCard = _Main.$SlideIn.children(".az-slidein-card");

        if (_Main.$SlideInTab.find("div").length === 0)
        {
            _Main.$SlideInTab.append("<div></div>")
        }
        _Main.TextLength = _Main.$SlideInTab.children("div").text().length;

        _Main.SlideInOptions = {};
        _Main.SlideInTabOptions = {};
        if (_Main.TextLength > 0)
        {
            _Main.TextLength = (_Main.TextLength * 11);
            _Main.SlideInTabOptions = { "height": _Main.TextLength };
            if (_Main.Options.azSlideInPosition == "right")
            {
                _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "right": - 11 });
            }
            else if (_Main.Options.azSlideInPosition == "left")
            {
                _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "left": - (_Main.TextLength - 30) });
            }
            _Main.TextLength = (_Main.TextLength / 2);
        }
        else
        {
            _Main.SlideInTabOptions = { "height": 100 };
            if (_Main.Options.azSlideInPosition == "right")
            {
                _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "right": - 11 }).append('<i class="' + _Main.Options.azSlideInIcon + ' fa-rotate-90"></i>');
            }
            else if (_Main.Options.azSlideInPosition == "left")
            {
                _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "left": - 70 }).append('<i class="' + _Main.Options.azSlideInIcon + ' fa-rotate-90"></i>');
            }
            _Main.TextLength = 30;
        }

        if (_Main.Options.azSlideInPosition == "right")
        {
            _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "right": - _Main.Options.azSlideInWidth };
            _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": ((_Main.Options.azSlideInHeight / 2) - (_Main.TextLength / 2)), "left": - 40, "border-top-left-radius": 15, "border-bottom-left-radius": 15 });
        }
        else if (_Main.Options.azSlideInPosition == "left")
        {
            _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "left": - _Main.Options.azSlideInWidth };
            _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": ((_Main.Options.azSlideInHeight / 2) - (_Main.TextLength / 2)), "left": _Main.Options.azSlideInWidth, "border-top-right-radius": 15, "border-bottom-right-radius": 15 });
        }
        _Main.$SlideInTab.css(_Main.SlideInTabOptions);
        _Main.$SlideInCard.find("article").css({ "height": _Main.Options.azSlideInHeight });

        window.setTimeout(function ()
        {
            _Main.$SlideIn.css(_Main.SlideInOptions).addClass("transition-" + _Main.Options.azSlideInPosition).show();
        }, 500);

        _Main.$SlideInTab.on('click', function ()
        {
            if (_Main.Options.azSlideInPosition == "right")
            {
                _Main.$SlideIn.toggleClass('display-right');
            }
            else if (_Main.Options.azSlideInPosition == "left")
            {
                _Main.$SlideIn.toggleClass('display-left');
            }
        });
    }
}

// AZ Slideshow
function initAZSlideshow(Options)
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
        _Main.SlideShowTimer = 0;
        _Main.SlideIndex = 0;

        if (_Main.Options.azSlideshowArrows)
        {
            _Main.$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
            $(".az-arrows", _Main.$Slideshow).on("mouseenter", function ()
            {
                $.unsubscribe("runSlides");
                window.clearTimeout(_Main.SlideShowTimer);

            }).on("mouseleave", function ()
            {
                $.subscribe("runSlides", function (e, data)
                {
                    _Main.SlideShowTimer = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                });
                window.setTimeout(runSlides, _Main.SlideShowTimer);
            })
        }

        $.subscribe("functionlib/azWindowResize", function (e, data)
        {
            _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
        });

        $.subscribe("runSlides", function (e, data)
        {
            _Main.SlideShowTimer = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
        });

        _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
        $("slide:gt(0)", _Main.$Slides).hide();
        window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);

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
            window.clearTimeout(_Main.SlideShowTimer);
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
            $("slide", _Main.$Slides).hide();
            $("slide", _Main.$Slides).eq(_Main.SlideIndex).show();
        }
    }
}

// AZ Range Multi
function initAZRangeMulti(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azRangeMultiId: "",
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

function azGetEvents(element)
{
    var elemEvents = $._data(element[0], "events");
    var allDocEvnts = $._data(document, "events");
    for (var evntType in allDocEvnts)
    {
        if (allDocEvnts.hasOwnProperty(evntType))
        {
            var evts = allDocEvnts[evntType];
            for (var i = 0; i < evts.length; i++)
            {
                if ($(element).is(evts[i].selector))
                {
                    if (elemEvents == null)
                    {
                        elemEvents = {};
                    }
                    if (!elemEvents.hasOwnProperty(evntType))
                    {
                        elemEvents[evntType] = [];
                    }
                    elemEvents[evntType].push(evts[i]);
                }
            }
        }
    }
    return elemEvents;
}

//////////////////////////////////////////////

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
//    var _Options = $.extend({}, _Defaults, Options || {});

//    if (typeof ObjData === "object")
//    {
//        _Options.transferType = ObjData.hasOwnProperty("TransferType") === true ? ObjData.TransferType : "";
//        _Options.data = JSON.stringify(ObjData);
//        consoleLog(JSON.stringify(ObjData));
//    }

//    $.ajaxSetup({ cache: false });
//    var _CurrentAjax = $.ajax(_Options).promise();

//    _CurrentAjax.fail(function (jqXHR, textStatus, errorThrown)
//    {
//        var _statusText = jqXHR.statusText == "timeout" ? "Timeout" : _Options.exceptionErrorText;
//        throwException(_Options.exceptionAction, "", ThisPage, _Options.transferType + ":Status:" + jqXHR.statusText, _statusText);
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
//    var _Options = $.extend({}, _Defaults, Options || {});

//    var _$NewTitleBar = $('<div class="ui-dialog-titlebar ui-widget-header"><div class="az-form-group" style="margin: 0;"><p class="az-alert az-alert-danger" style="padding: 7px;" role="alert">' + _Options.titlebarText + '</p></div></div>');
//    var _$DialogRoleAlert = window.parent.$(".ui-dialog-titlebar");
//    _$DialogRoleAlert.hide();
//    _$DialogRoleAlert.parents(".ui-dialog").prepend(_$NewTitleBar);
//    $("body").addClass("az-alert-active");
//    window.setTimeout(function ()
//    {
//        _$NewTitleBar.remove();
//        _$DialogRoleAlert.show();
//        $("body").removeClass("az-alert-active");
//    }, _Options.titlebarTimeout);
//}

//function openStandardAlert(SelectedTitle, SelectedText, SelectedAdditional, Modal)
//{
//    Modal = Modal === true ? true : false;
//    if ($('#az-modal').length == 0)
//    {
//        var _Defaults =
//        {
//            dialogWidth: 450,
//            dialogHeight: 150
//        };
//        var _Options = _Defaults;

//        var _HTML = "";
//        _HTML = '<div id="az-modal-background">';
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
//        $("#az-modal-background").css({ "display": "block" });
//        var _$AzModal = $("#az-modal");

//        if (_Options.dialogWidth > window.innerWidth)
//        {
//            _Options.dialogWidth = (window.innerWidth - 60);
//        }
//        if (_Options.dialogHeight > window.innerHeight)
//        {
//            _Options.dialogHeight = (window.innerHeight - 144);
//        }
//        _$AzModal.css({ "width": _Options.dialogWidth });
//        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Options.dialogHeight });

//        if (Modal == false)
//        {
//            $("#az-modal-background").off("click", closeStandardAlert).on("click", closeStandardAlert);
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
//    var _$Background = $("#az-modal-background");
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
//            dialogWidth: 450,
//            dialogHeight: 150
//        };
//        var _Options = _Defaults;

//        var _HTML = "";
//        var _Button1ColClass = ' xs-6 az-text-left';
//        if (SelectedButton2 == "")
//        {
//            var _Button1ColClass = ' xs-12 az-text-center';
//        }
//        _HTML = '<div id="az-modal-background">';
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
//        $("#az-modal-background").css({ "display": "block" });
//        var _$AzModal = $("#az-modal");

//        if (_Options.dialogWidth > window.innerWidth)
//        {
//            _Options.dialogWidth = (window.innerWidth - 60);
//        }
//        if (_Options.dialogHeight > window.innerHeight)
//        {
//            _Options.dialogHeight = (window.innerHeight - 144);
//        }
//        _$AzModal.css({ "width": _Options.dialogWidth });
//        $(".az-modal-card > article", _$AzModal).css({ "min-height": _Options.dialogHeight });

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
//    var _$Background = $("#az-modal-background");
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