// AZ-Functionlib v2.0.0 | (c) web2net AS

var azModalDialogScrollTop = 0;
var ObjInitializePageOptions = {};
var DebugMode = true;

// AZ Accordion
function AZAccordion(Options)
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

// AZ Ajax
function AZAjax(Options)
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
            _Main.azAjaxOptions.data = JSON.stringify(_Main.Options.azAjaxObjToSend);
        }
        $.ajaxSetup({ cache: false });
        return $.ajax(_Main.AjaxOptions).promise();
    }
    else
    {
        return $.Deferred().resolve("");
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
        azModalDialogBackgroundColor: "#FFFFFF",
        azModalDialogColor: "#000000",
        azModalDialogTitlebarBackgroundColor: "#009688",
        azModalDialogTitlebarColor: "#FFFFFF",
        azModalDialogBeforeOpen: function () { },
        azModalDialogAfterOpen: function () { }
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if ($('#az-modal-dialog').length == 0)
    {
        $.subscribeonce("functionlib/azModalDialogBeforeOpen", function ()
        {
            azModalDialogScrollTop = 0;
            _Main.$Body = $("body");
            _Main.$Background = $("<div></div>").attr("id", "az-background");
            _Main.$Dialog = $("<div></div>").attr("id", "az-modal-dialog").css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important", "color": _Main.Options.azModalDialogColor + " !important" });
            _Main.$Card = $("<div></div>").addClass("az-modal-card");
            _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
            _Main.$Card.append(_Main.$Article);
            _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe");

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
                _Main.$Body.addClass("az-no-parent-scroll");
            }
            if (_Main.Options.azModalDialogiFrameURL != "")
            {
                _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": (_Main.Options.azModalDialogHeight - 80) });
                _Main.$Card.append(_Main.$Iframe);
            }
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
            if (_Main.Options.azModalDialogBackground === false)
            {
                _Main.$Background.css({ "background-color": "transparent" });
            }
            if (_Main.Options.azModalDialogModal === false)
            {
                _Main.$Background.off("click").on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-background")
                    {
                        _Main.azModalDialogClose();
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
                    close: function (e, ui)
                    {
                        if (e.originalEvent)
                        {
                            _Main.azModalDialogClose();
                        }
                    }
                });
            _Main.$Body.append(_Main.$Background);
            AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterOpen, "functionlib/azModalDialogAfterOpen");

            _Main.azModalDialogClose = function (Options)
            {
                var _Defaults =
                {
                    azModalDialogLocationReload: false,
                    azModalDialogAfterClose: function () { }
                };
                _Main.Options = $.extend({}, _Defaults, Options || {}, _Main.Options);

                $.subscribeonce("functionlib/azModalDialogAfterClose", function ()
                {
                    if (_Main.Options.azModalDialogLocationReload === true)
                    {
                        $.subscribeonce("functionlib/azModalDialogBackgroundRemoved", function ()
                        {
                            location.reload();
                        });
                    }
                    _Main.$Body.removeClass("az-no-parent-scroll");
                    if (_Main.$Body.hasClass("") === true)
                    {
                        _Main.$Body.removeAttr("class");
                    }
                    _Main.$Iframe.attr("src", "");
                    _Main.$Dialog.dialog("close");
                    if (_Main.$Dialog.length > 0)
                    {
                        _Main.$Dialog.remove();
                    }
                    if (_Main.$Background.length > 0)
                    {
                        _Main.$Background.remove();
                        $.publish("functionlib/azModalDialogBackgroundRemoved");
                    }
                    if (_Main.Options.azModalDialogLocationReload === false)
                    {
                        if (azModalDialogScrollTop > 0)
                        {
                            $(window).scrollTop(azModalDialogScrollTop);
                        }
                    }
                });
                AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterClose, "functionlib/azModalDialogAfterClose");
            }
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
    }
    return (
        {
            "ModalDialogClose": _Main.azModalDialogClose,
            "ChangeModalTitlebar": _Main.azChangeModalTitlebar
        });
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

    if (_Main.Options.azSnackbarId != "" && $("#" + _Main.Options.azSnackbarId).length === 0)
    {
        _Main.$Body = $("body");
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
                _Main.AnimateOpenOptions.top = 10;
            }
            if (_Main.AnimateOpenOptions.hasOwnProperty("bottom") === true)
            {
                _Main.AnimateOpenOptions.bottom = 10;
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

        _Main.azChangeSnackbarText = function (SnackbarText)
        {
            _Main.$TextCell.html(SnackbarText)
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
        _Main.$Body.append(_Main.$Wrapper);
        _Main.$Wrapper.animate(_Main.AnimateOpenOptions, 500);
    }
    return (
        {
            "ChangeSnackbarText": _Main.azChangeSnackbarText
        });
}

// AZ Tabs
function AZTabs(Options)
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
            _Main.$Tabs.children("ul").children("li").removeClass("az-tabs-tab-active");
            _Main.$Tabs.children("ul").children("li").eq(_MenuIndex).addClass("az-tabs-tab-active");
            _Main.$Article.removeClass("az-tabs-article-active");
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
        _Main.azSelectTabs(0);
    }
    return (
        {
            "SelectTab": _Main.azSelectTabs,
            "ChangeText": _Main.azChangeText,
            "ToggleVertical": _Main.azToggleVertical
        });
}

function AZWindow(Options)
{
    var _Main = this;
    var _Defaults =
    {
        azWindowModal: false,
        azWindowTitle: "",
        azWindowText: "",
        azWindowTitlebar: true,
        azWindowTitlebarClose: true,
        azWindowWidth: 450,
        azWindowHeight: 0,
        azWindowPositionTop: 0,
        azWindowAnimation: true,
        azWindowNoParentScroll: false,
        azWindowBackground: true,
        azWindowBorderColor: "#FFFFFF",
        azWindowTitlebarBackgroundColor: "#009688",
        azWindowTitlebarColor: "#FFFFFF",
        azWindowBackgroundColor: "#FFFFFF",
        azWindowColor: "#000000",
        azWindowBeforeOpen: function () { },
        azWindowAfterOpen: function () { }
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if ($('#az-window').length === 0)
    {
        $.subscribeonce("functionlib/azWindowBeforeOpen", function ()
        {
            azModalDialogScrollTop = 0;
            _Main.$Body = $("body");
            _Main.$Background = $("<div></div>").attr("id", "az-background");
            _Main.$Window = $("<div></div>").attr("id", "az-window").css({ "background-color": _Main.Options.azWindowBorderColor + " !important" });
            _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>").css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important", "color": _Main.Options.azWindowTitlebarColor + " !important" });
            _Main.$Dialog = $("<div></div>").addClass("az-window-dialog").css({ "background-color": _Main.Options.azWindowBackgroundColor + " !important", "color": _Main.Options.azWindowColor + " !important" });
            _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText);
            _Main.$Dialog.append(_Main.$Article);
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

            _Main.Options.azWindowWidth = (_Main.Options.azWindowWidth - 14);
            if (_Main.Options.azWindowWidth > (window.innerWidth - 20))
            {
                _Main.Options.azWindowWidth = (window.innerWidth - 20);
            }
            if (_Main.Options.azWindowHeight > 0)
            {
                if (_Main.Options.azWindowHeight > (window.innerHeight - 20))
                {
                    _Main.Options.azWindowHeight = (window.innerHeight - 20);
                }
            }
            else
            {
                _Main.Options.azWindowHeight = 150;
            }
            if (_Main.Options.azWindowNoParentScroll === true)
            {
                azModalDialogScrollTop = $(window).scrollTop();
                _Main.$Body.addClass("az-no-parent-scroll");
            }
            if (_Main.Options.azWindowBackground === false)
            {
                _Main.$Background.css({ "background-color": "transparent" });
            }
            if (_Main.Options.azWindowModal === false)
            {
                _Main.$Background.off().on("click", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    if ($(_Element).attr("id") == "az-background")
                    {
                        _Main.azWindowClose();
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
                _Main.$Titlebar.children("span").off().on("click", function ()
                {
                    _Main.azWindowClose();
                });
            }
            _Main.$Window.width(_Main.Options.azWindowWidth);
            _Main.$Window.height(_Main.Options.azWindowHeight - 14);
            if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > ($(window).scrollTop() + $(window).height()))           )
            {
                _Main.$Window.css({ "top": ($(window).scrollTop() + $(window).height() / 2) - (_Main.$Window.height() / 2) });
            }
            else
            {
                _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
            }
            _Main.$Body.append(_Main.$Background).append(_Main.$Window);
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

            _Main.azWindowClose = function (Options)
            {
                var _Defaults =
                {
                    azWindowLocationReload: false,
                    azWindowAfterClose: function () { }
                };
                _Main.Options = $.extend({}, _Defaults, Options || {}, _Main.Options);

                $.subscribeonce("functionlib/azWindowAfterClose", function ()
                {
                    if (_Main.Options.azWindowLocationReload === true)
                    {
                        $.subscribeonce("functionlib/azWindowBackgroundRemoved", function ()
                        {
                            location.reload();
                        });
                    }
                    _Main.$Body.removeClass("az-no-parent-scroll");
                    if (_Main.$Body.hasClass("") === true)
                    {
                        _Main.$Body.removeAttr("class");
                    }
                    if (_Main.$Background.length > 0)
                    {
                        _Main.$Background.remove();
                        $.publish("functionlib/azWindowBackgroundRemoved");
                    }
                    if (_Main.$Window.length > 0)
                    {
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
                    if (_Main.Options.azWindowLocationReload === false)
                    {
                        if (azModalDialogScrollTop > 0)
                        {
                            $(window).scrollTop(azModalDialogScrollTop);
                        }
                    }
                });
                AZCheckAsyncAndPublish(_Main.Options.azWindowAfterClose, "functionlib/azWindowAfterClose");
            }

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

function AZFullWindow(Options)
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
        azFullWindowAfterOpen: function () { }
    };
    _Main.Options = $.extend({}, _Defaults, Options || {});

    if ($("#az-full-window").length === 0)
    {
        $.subscribeonce("functionlib/azFullWindowBeforeOpen", function ()
        {
            azModalDialogScrollTop = 0;
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
                azModalDialogScrollTop = $(window).scrollTop();
                _Main.$Body.addClass("az-no-parent-scroll");
            });
            AZCheckAsyncAndPublish(_Main.Options.azFullWindowAfterOpen, "functionlib/azFullWindowAfterOpen");
        });
        AZCheckAsyncAndPublish(_Main.Options.azFullWindowBeforeOpen, "functionlib/azFullWindowBeforeOpen");

        _Main.$Close.on('click', function ()
        {
            _Main.$Body.removeClass("az-no-parent-scroll");
            if (_Main.$Body.hasClass("") === true)
            {
                _Main.$Body.removeAttr("class");
            }
            if (azModalDialogScrollTop > 0)
            {
                $(window).scrollTop(azModalDialogScrollTop);
            }
            _Main.$Window.animate(_Main.AnimateCloseOptions, _Main.Options.azFullWindowFadeOut, function ()
            {
                $(this).remove();
                $.publish("functionlib/azFullWindowClosed");
            });
        });
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

// AZ Slideshow
function AZSlideshow(Options)
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
function AZRangeMulti(Options)
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