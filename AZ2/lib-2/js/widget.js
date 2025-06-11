// AZ Widgets AZ-2.0 v.2 | (c) web2net AS

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
                $(window).on("resize", function ()
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
                    Options: _Main.Options,
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
            if (AZIsEmpty(_Main.Options.azAjaxObjToSend) === false)
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
            azModalDialogReturnId: "",
            azModalDialogStyle: "rounded",
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
            $.publish("functionlib/azModalDialogBeforeOpen" + _Main.Options.azModalDialogReturnId, { azModalDialogId: _Main.Options.azModalDialogId });

            ModalDialogScrollTop = 0;
            _Main.$Iframe = {};
            _Main.$Window;
            _Main.$Dialog = $("<div></div>").attr("id", _Main.Options.azModalDialogId).addClass("az-modal-dialog-content " + _Main.Options.azModalDialogStyle);
            if (_Main.Options.azModalDialogiFrameURL == "")
            {
                _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
                _Main.$Dialog.append(_Main.$Article);
            }

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
                    maxWidth: (window.innerWidth - 28),
                    maxHeight: (window.innerHeight - 28),
                    resizable: _Main.Options.azModalDialogResizable,
                    draggable: _Main.Options.azModalDialogDraggable,
                    closeOnEscape: _Main.Options.azModalDialogCloseOnEscape,
                    focus: function (e, ui)
                    {
                        var _Element = e.target || e.srcElement;
                        $(".ui-dialog").not($(_Element).parent(".ui-dialog")).css({ "z-index": "5000" });
                        $(_Element).parent(".ui-dialog").css({ "z-index": "5001" });
                        $.publish("functionlib/azModalDialogFocus" + _Main.Options.azModalDialogReturnId,
                            {
                                $Window: _Main.$Window,
                                $Titlebar: _Main.$Titlebar,
                                $Dialog: _Main.$Dialog,
                                $Article: _Main.$Article,
                                $Iframe: _Main.$Iframe,
                                azModalDialogId: _Main.Options.azModalDialogId
                            });
                    },
                    close: function (e, ui)
                    {
                        if (e.originalEvent)
                        {
                            _Main.azModalDialogClose(e);
                        }
                    },
                    dragStart: function (e, ui)
                    {
                        $(this).parent(".az-modal-dialog").removeClass("az-modal-dialog-center-center");
                    }
                });

            if (_Main.Options.azModalDialogPosition && AZIsEmpty(_Main.Options.azModalDialogPositionOf) === false && window.innerWidth > 576)
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
            else
            {
                _Main.$Dialog.parent(".ui-dialog").addClass("az-modal-dialog-center-center");
            }
            _Main.$Window = _Main.$Dialog.parent(".ui-dialog").addClass("az-modal-dialog " + _Main.Options.azModalDialogStyle);
            _Main.$Titlebar = _Main.$Window.children(".ui-dialog-titlebar").addClass("az-modal-dialog-titlebar " + _Main.Options.azModalDialogStyle);
            _Main.$Titlebar.children(".ui-dialog-title").html(_Main.Options.azModalDialogTitle);
            _Main.$Titlebar.children(".ui-dialog-titlebar-close").removeAttr("title");

            // AZModalDialog Colors
            if (_Main.Options.azModalDialogBackgroundColor !== "")
            {
                _Main.$Window.css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important" });
            }
            if (_Main.Options.azModalDialogColor !== "")
            {
                _Main.$Dialog.css({ "color": _Main.Options.azModalDialogColor + " !important" });
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

            _Main.$Dialog.dialog("open");

            // AZModalDialog iFrame
            if (_Main.Options.azModalDialogiFrameURL != "")
            {
                var _IFrameHeight = _Main.$Dialog.height();
                if (_Main.Options.azModalDialogTitlebar === true)
                {
                    _IFrameHeight = (_Main.$Dialog.height() + 1);
                }
                _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azModalDialogId).addClass("az-iframe");
                _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
                _Main.$Dialog.append(_Main.$Iframe); //.addClass("overflow");
            }

            // AZModalDialog Close
            _Main.azModalDialogClose = function (e)
            {
                if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
                {
                    _Main.$Iframe.attr("src", "");
                }

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
                $.publish("functionlib/azModalDialogAfterClose" + _Main.Options.azModalDialogReturnId, { azModalDialogId: _Main.Options.azModalDialogId });
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

                if (_Main.Options.azModalDialogiFrameURL != "")
                {
                    var _IFrameHeight = _Main.$Dialog.height();
                    if (_Main.Options.azModalDialogTitlebar === true)
                    {
                        _IFrameHeight = (_Main.$Dialog.height() + 1);
                    }
                    _Main.$Iframe.css({ "width": "100%", "height": _IFrameHeight });
                }
            };

            $.publish("functionlib/azModalDialogAfterOpen" + _Main.Options.azModalDialogReturnId,
                {
                    Options: _Main.Options,
                    $Window: _Main.$Window,
                    $Titlebar: _Main.$Titlebar,
                    $Dialog: _Main.$Dialog,
                    $Article: _Main.$Article,
                    $Iframe: _Main.$Iframe,
                    azModalDialogId: _Main.Options.azModalDialogId,
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
                $(window).on("resize", function ()
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
            azWindowReturnId: "",
            azWindowId: "",
            azWindowStyle: "rounded",
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

        if (_Main.Options.azWindowId == "")
        {
            _Main.Options.azWindowId = AZGuid();
        }

        if (_Main.Options.azWindowId !== "" && $("#" + _Main.Options.azWindowId).length === 0)
        {
            $.publish("functionlib/azWindowBeforeOpen" + _Main.Options.azWindowReturnId, { azWindowId: _Main.Options.azWindowId });

            ModalDialogScrollTop = 0;
            _Main.$Window = $("<div></div>").attr("id", _Main.Options.azWindowId).addClass("az-window " + _Main.Options.azWindowStyle);
            _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar " + _Main.Options.azWindowStyle).html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>");
            _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Article);

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

            window.setTimeout(function ()
            {
                _Main.$Window.width(_Main.Options.azWindowWidth);
                _Main.WindowHeight = AZElementSize(_Main.$Window).Height;
                _Main.TitlebarHeight = AZElementSize(_Main.$Titlebar).Height;

                if (_Main.Options.azWindowPositionTop > 0)
                {
                    if (_Main.Options.azWindowContentHeight === false)
                    {
                        if ((_Main.Options.azWindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                        {
                            _Main.Options.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                        }
                        else
                        {
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                        }
                    }
                    else
                    {
                        if ((_Main.WindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                        {
                            _Main.Options.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                        }
                        else
                        {
                            _Main.Options.azWindowHeight = _Main.WindowHeight;
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                        }
                    }
                }
                else
                {
                    if (_Main.Options.azWindowContentHeight === false)
                    {
                        _Main.$Window.addClass("az-window-center-center");
                    }
                    else
                    {
                        if (_Main.WindowHeight > (window.innerHeight - 28))
                        {
                            _Main.Options.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                        }
                        else
                        {
                            _Main.Options.azWindowHeight = _Main.WindowHeight;
                            _Main.$Window.addClass("az-window-center-center");
                        }
                    }
                }
                SetAZWindowHeight(_Main.Options.azWindowHeight);

                if (_Main.Options.azWindowAnimation === true)
                {
                    _Main.$Window.fadeIn();
                }
                else
                {
                    _Main.$Window.show();
                }

                $.publish("functionlib/azWindowAfterOpen" + _Main.Options.azWindowReturnId,
                    {
                        Options: _Main.Options,
                        $Window: _Main.$Window,
                        $Titlebar: _Main.$Titlebar,
                        $Article: _Main.$Article,
                        azWindowId: _Main.Options.azWindowId,
                        azWindowClose: _Main.azWindowClose,
                        azChangeWindowTitlebar: _Main.azChangeWindowTitlebar,
                        azWindowResize: _Main.azWindowResize
                    });
            }, 100);

            // AZWindow Close
            _Main.azWindowClose = function ()
            {
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
                $.publish("functionlib/azWindowAfterClose" + _Main.Options.azWindowReturnId, { azWindowId: _Main.Options.azWindowId });
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

                // AZWindow Size
                if (_Main.WindowResizeOptions.azWindowWidth > (window.innerWidth - 28))
                {
                    _Main.WindowResizeOptions.azWindowWidth = (window.innerWidth - 28);
                }
                if (_Main.WindowResizeOptions.azWindowHeight > (window.innerHeight - 28))
                {
                    _Main.WindowResizeOptions.azWindowHeight = (window.innerHeight - 28);
                }

                window.setTimeout(function ()
                {
                    _Main.$Window.width(_Main.WindowResizeOptions.azWindowWidth);

                    if (_Main.Options.azWindowPositionTop > 0)
                    {
                        if ((_Main.WindowResizeOptions.azWindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                        {
                            _Main.WindowResizeOptions.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                        }
                        else
                        {
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                        }
                    }
                    else
                    {
                        _Main.$Window.addClass("az-window-center-center");
                    }
                    SetAZWindowHeight(_Main.WindowResizeOptions.azWindowHeight);
                }, 100);
            };

            function SetAZWindowHeight(Height)
            {
                _Main.$Window.height(Height.toFixed(0));
                if (_Main.Options.azWindowTitlebar === true)
                {
                    _Main.$Article.height(((Height + 7) - _Main.TitlebarHeight).toFixed(0));
                }
                else
                {
                    _Main.$Article.height((Height + 7).toFixed(0));
                }
            };    
        }        
    }
    else
    {
        return new AZWindow(Options);
    }
}

function AZWindowButton(Options)
{
    if (AZIsEmpty(Options) === false)
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
            azFullWindowReturnId: "",
            azFullWindowArea: {},
            azFullWindowStyle: "flat",
            azFullWindowId: "",
            azFullWindowTitle: "",
            azFullWindowText: "",
            azFullWindowiFrameURL: "",
            azFullWindowPosition: "bottom",
            azFullWindowFadeIn: 400,
            azFullWindowFadeOut: 400,
            azFullWindowHeight: 0,
            azFullWindowTitlebar: false,
            azFullWindowTitlebarClose: true,
            azFullWindowBackgroundColor: "",
            azFullWindowColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azFullWindowId == "")
        {
            _Main.Options.azFullWindowId = AZGuid();
        }

        if (_Main.Options.azFullWindowId !== "" && $("#" + _Main.Options.azFullWindowId).length === 0)
        {
            $.publish("functionlib/azFullWindowBeforeOpen" + _Main.Options.azFullWindowReturnId, { azFullWindowId: _Main.Options.azFullWindowId });

            ModalDialogScrollTop = 0;
            _Main.$Titlebar = {};
            _Main.$Article = {};
            _Main.$Iframe = {};
            _Main.$Window = $("<div></div>").attr("id", _Main.Options.azFullWindowId).addClass("az-full-window " + _Main.Options.azFullWindowStyle);
            _Main.$Titlebar = $("<div></div>").addClass("az-full-window-titlebar").html("<div>" + _Main.Options.azFullWindowTitle + "</div><span>X</span>");
            _Main.$Article = $("<article></article>").html(_Main.Options.azFullWindowText);
            if (_Main.Options.azFullWindowTitle != "")
            {
                _Main.$Window.append(_Main.$Titlebar);
            }
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Article);

            if (_Main.Options.azFullWindowBackgroundColor !== "")
            {
                _Main.$Window.css({ "background-color": _Main.Options.azFullWindowBackgroundColor + " !important" });
            }
            if (_Main.Options.azFullWindowColor !== "")
            {
                _Main.$Window.css({ "color": _Main.Options.azFullWindowColor + " !important" });
            }
            if (Number.isInteger(_Main.Options.azFullWindowHeight) === false || _Main.Options.azFullWindowHeight < 1 || _Main.Options.azFullWindowHeight > window.innerHeight)
            {
                _Main.Options.azFullWindowHeight = window.innerHeight;
            }
            if (Number.isInteger(_Main.Options.azFullWindowFadeIn) === false || _Main.Options.azFullWindowFadeIn < 1)
            {
                _Main.Options.azFullWindowFadeIn = 400;
            }
            if (Number.isInteger(_Main.Options.azFullWindowFadeOut) === false || _Main.Options.azFullWindowFadeOut < 1)
            {
                _Main.Options.azFullWindowFadeOut = 400;
            }

            // AZFullWindow No Parent Scroll
            if ($("body").hasClass("az-no-parent-scroll") === false)
            {
                ModalDialogScrollTop = $(window).scrollTop();
                $("body").addClass("az-no-parent-scroll");
            }

            _Main.AnimateOpenOptions = { "height": _Main.Options.azFullWindowHeight + "px", "opacity": 1 };
            _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
            if (_Main.Options.azFullWindowStyle.includes("shadow"))
            {
                _Main.$Window.addClass('shadow-top');
            }
            if (_Main.Options.azFullWindowPosition == "top")
            {
                _Main.$Window.css({ "top": 0 });
            }
            else if (_Main.Options.azFullWindowPosition == "bottom")
            {
                _Main.$Window.css({ "bottom": 0 });
            }

            // AZFullWindow Titlebar
            if (_Main.Options.azFullWindowTitlebar === false)
            {
                _Main.$Titlebar.hide();
            }
            if (_Main.Options.azFullWindowTitlebarClose === false)
            {
                _Main.$Titlebar.children("span").hide();
            }
            else
            {
                _Main.$Titlebar.children("span").off().on("click", function (e)
                {
                    _Main.azFullWindowClose(e);
                });
            }

            if (AZIsEmpty(_Main.Options.azFullWindowArea) === false)
            {
                _Main.Options.azFullWindowArea.append(_Main.$Window.css({ "position": "absolute" }));
            }
            else
            {
                $("body").append(_Main.$Window);
            }

            var _Style = window.getComputedStyle ? getComputedStyle(_Main.$Article[0], null) : _Main.$Article[0].currentStyle;
            var _ArticleHeight = (_Main.Options.azFullWindowHeight - parseInt(_Style.marginTop));
            if (_Main.Options.azFullWindowTitlebar === true)
            {
                _Main.TitlebarHeight = AZElementSize(_Main.$Titlebar).Height;
                _ArticleHeight = (_Main.Options.azFullWindowHeight - (_Main.TitlebarHeight + parseInt(_Style.marginTop)));
            }
            _Main.$Article.height(_ArticleHeight);

            if (_Main.Options.azFullWindowiFrameURL != "")
            {
                 var _IFrameHeight = (_ArticleHeight - 7);
                _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azFullWindowId).addClass("az-iframe");
                _Main.$Iframe.attr("src", _Main.Options.azFullWindowiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
                _Main.$Article.append(_Main.$Iframe).addClass("overflow");
            }

            _Main.$Window.animate(_Main.AnimateOpenOptions, _Main.Options.azFullWindowFadeIn);

            // AZFullWindow Close
            _Main.azFullWindowClose = function (e)
            {
                _Main.$Window.animate(_Main.AnimateCloseOptions, _Main.Options.azFullWindowFadeOut, function ()
                {
                    $(this).remove();

                    if ($(".az-full-window").length === 0)
                    {
                        if (ModalDialogScrollTop > 0)
                        {
                            window.setTimeout(function () { $(window).scrollTop(ModalDialogScrollTop); }, 0);
                        }
                        $("body").removeClass("az-no-parent-scroll");
                        if ($("body").hasClass("") === true)
                        {
                            $("body").removeAttr("class");
                        }
                    }
                    $.publish("functionlib/azFullWindowAfterClose" + _Main.Options.azFullWindowReturnId, { azFullWindowId: _Main.Options.azFullWindowId });
                });
            };

            // AZFullWindow Resize
            _Main.azFullWindowResize = function (Options)
            {
                var _Defaults =
                {
                    azFullWindowHeight: _Main.Options.azFullWindowHeight
                };
                _Main.azFullWindowHeightOptions = $.extend({}, _Defaults, Options || {});

                _Main.Options.azFullWindowHeight = _Main.azFullWindowHeightOptions.azFullWindowHeight;
                if (Number.isInteger(_Main.Options.azFullWindowHeight) === false || _Main.Options.azFullWindowHeight < 1 || _Main.Options.azFullWindowHeight > window.innerHeight)
                {
                    _Main.Options.azFullWindowHeight = window.innerHeight;
                }

                var _Style = window.getComputedStyle ? getComputedStyle(_Main.$Article[0], null) : _Main.$Article[0].currentStyle;
                var _ArticleHeight = (_Main.Options.azFullWindowHeight - parseInt(_Style.marginTop));
                if (_Main.Options.azFullWindowTitlebar === true)
                {
                    _Main.TitlebarHeight = AZElementSize(_Main.$Titlebar).Height;
                    _ArticleHeight = (_Main.Options.azFullWindowHeight - (_Main.TitlebarHeight + parseInt(_Style.marginTop)));
                }
                _Main.$Article.height(_ArticleHeight);

                if (_Main.Options.azFullWindowiFrameURL != "")
                {
                    var _IFrameHeight = (_ArticleHeight - 7);
                    _Main.$Iframe.css({ "height": _IFrameHeight });
                }

                _Main.$Window.height(_Main.azFullWindowHeightOptions.azFullWindowHeight);
            };

            $.publish("functionlib/azFullWindowAfterOpen" + _Main.Options.azFullWindowReturnId,
                {
                    Options: _Main.Options,
                    $Window: _Main.$Window,
                    $Titlebar: _Main.$Titlebar,
                    $Article: _Main.$Article,
                    $Iframe: _Main.$Iframe,
                    azFullWindowId: _Main.Options.azFullWindowId,
                    azFullWindowClose: _Main.azFullWindowClose,
                    azFullWindowResize: _Main.azFullWindowResize
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

//function AZSlideshow(Options)
//{
//    if (this instanceof AZSlideshow === true)
//    {
//        var _Main = this;
//        var _Defaults =
//        {
//            azSlideshowId: "",
//            azSlideshowType: "slideshow",
//            azSlideshowDirection: "horisontal",
//            azSlideshowEffect: "fade",
//            azSlideshowArrows: true,
//            azSlideshowPagination: false,
//            azSlideshowAutoplay: false,
//            azSlideshowLoop: true,
//            azSlideshowSpeed: 400,
//            azSlideshowWidth: 0,
//            azSlideshowHeight: 0
//        };
//        _Main.Options = $.extend({}, _Defaults, Options || {});

//        if (_Main.Options.azSlideshowId != "")
//        {
//            _Main.SwiperOptions = {};
//            _Main.$SwiperOutherWrapper = $('<div class="swiper-outher-wrapper"></div>');
//            if (_Main.Options.azSlideshowType == "page")
//            {
//                _Main.$SwiperOutherWrapper = $('<div class="swiper-outher-wrapper-page"></div>');
//            }

//            if (_Main.Options.azSlideshowWidth > 0)
//            {
//                _Main.$SwiperOutherWrapper.width(_Main.Options.azSlideshowWidth);
//            }
//            if (_Main.Options.azSlideshowHeight > 0)
//            {
//                _Main.$SwiperOutherWrapper.height(_Main.Options.azSlideshowHeight);
//            }
//            _Main.$Swiper = $("#" + _Main.Options.azSlideshowId).wrap(_Main.$SwiperOutherWrapper);
//            _Main.SwiperOptions.speed = _Main.Options.azSlideshowSpeed;

//            // Page
//            if (_Main.Options.azSlideshowType == "page")
//            {
//                if (_Main.Options.azSlideshowDirection == "vertical")
//                {
//                    _Main.SwiperOptions.direction = "vertical";
//                }
//                _Main.SwiperOptions.slidesPerView = 1;
//                _Main.SwiperOptions.spaceBetween = 30;
//                _Main.SwiperOptions.mousewheel = true;
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.Options.azSlideshowEffect = "";
//                _Main.Options.azSlideshowAutoplay = false;
//                _Main.Options.azSlideshowLoop = false;
//                _Main.Options.azSlideshowArrows = false;
//                _Main.Options.azSlideshowPagination = false;
//            }

//            // Effects
//            if (_Main.Options.azSlideshowEffect === "fade")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "fade";
//            }
//            if (_Main.Options.azSlideshowEffect === "cube")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "cube";
//                _Main.SwiperOptions.cubeEffect =
//                {
//                    shadow: true,
//                    slideShadows: true,
//                    shadowOffset: 20,
//                    shadowScale: 0.94,
//                };
//                _Main.Options.azSlideshowArrows = false;
//                _Main.Options.azSlideshowPagination = false;
//            }
//            if (_Main.Options.azSlideshowEffect === "flip")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "flip";
//                _Main.Options.azSlideshowPagination = false;
//            }
//            if (_Main.Options.azSlideshowEffect === "coverflow")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "coverflow";
//                _Main.SwiperOptions.centeredSlides = true;
//                _Main.SwiperOptions.slidesPerView = "auto";
//                _Main.SwiperOptions.coverflowEffect =
//                {
//                    rotate: 50,
//                    stretch: 0,
//                    depth: 100,
//                    modifier: 1,
//                    slideShadows: true
//                };
//                _Main.Options.azSlideshowArrows = false;
//                _Main.Options.azSlideshowPagination = false;
//            }
//            if (_Main.Options.azSlideshowEffect === "creative1")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        translate: [0, 0, -400]
//                    },
//                    next:
//                    {
//                        shadow: true,
//                        translate: ["100%", 0, 0]
//                    }
//                };
//            }
//            if (_Main.Options.azSlideshowEffect === "creative2")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        translate: ["-120%", 0, -500]
//                    },
//                    next:
//                    {
//                        shadow: true,
//                        translate: ["120%", 0, -500]
//                    }
//                };
//            }
//            if (_Main.Options.azSlideshowEffect === "creative3")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        translate: ["-20%", 0, -1]
//                    },
//                    next:
//                    {
//                        translate: ["100%", 0, 0]
//                    }
//                };
//            }
//            if (_Main.Options.azSlideshowEffect === "creative4")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        translate: [0, 0, -800],
//                        rotate: [180, 0, 0]
//                    },
//                    next:
//                    {
//                        shadow: true,
//                        translate: [0, 0, -800],
//                        rotate: [-180, 0, 0]
//                    }
//                };
//            }
//            if (_Main.Options.azSlideshowEffect === "creative5")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        translate: ["-125%", 0, -800],
//                        rotate: [0, 0, -90]
//                    },
//                    next:
//                    {
//                        shadow: true,
//                        translate: ["125%", 0, -800],
//                        rotate: [0, 0, 190]
//                    }
//                };
//            }
//            if (_Main.Options.azSlideshowEffect === "creative6")
//            {
//                _Main.SwiperOptions.grabCursor = true;
//                _Main.SwiperOptions.effect = "creative";
//                _Main.SwiperOptions.creativeEffect =
//                {
//                    prev:
//                    {
//                        shadow: true,
//                        origin: "left center",
//                        translate: ["-5%", 0, -200],
//                        rotate: [0, 100, 0]
//                    },
//                    next:
//                    {
//                        origin: "right center",
//                        translate: ["5%", 0, -200],
//                        rotate: [0, -100, 0]
//                    }
//                };
//            }

//            if (_Main.Options.azSlideshowAutoplay === true)
//            {
//                _Main.SwiperOptions.autoplay =
//                {
//                    delay: 3000
//                };
//            }
//            if (_Main.Options.azSlideshowLoop === true)
//            {
//                _Main.SwiperOptions.loop = true;
//            }
//            if (_Main.Options.azSlideshowArrows === true && window.innerWidth > 576)
//            {
//                _Main.$Swiper.children(".swiper-wrapper").append('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
//                _Main.SwiperOptions.navigation =
//                {
//                    nextEl: ".swiper-button-next",
//                    prevEl: ".swiper-button-prev"
//                };
//            }
//            if (_Main.Options.azSlideshowPagination === true && window.innerWidth > 576)
//            {
//                _Main.$Swiper.children(".swiper-wrapper").append('<div class="swiper-pagination"></div>');
//                _Main.SwiperOptions.pagination =
//                {
//                    el: ".swiper-pagination",
//                    clickable: true
//                };
//            }

//            new Swiper("#" + _Main.Options.azSlideshowId, _Main.SwiperOptions);
//            var _SwiperCssOptions =
//            {
//                width: '100%'
//            };
//            var _SwiperSlideCssOptions =
//            {
//                backgroundPosition: 'center',
//                backgroundSize: 'cover'
//            };
//            if (_Main.Options.azSlideshowEffect !== "coverflow")
//            {
//                _SwiperCssOptions.height = '100%';
//            }
//            else
//            {
//                _SwiperCssOptions.paddingTop = '50px';
//                _SwiperCssOptions.paddingBottom = '50px';
//                _SwiperSlideCssOptions.width = '300px';
//                _SwiperSlideCssOptions.height = '300px';
//            }
//            _Main.$Swiper.css(_SwiperCssOptions);
//            $(".swiper-slide", _Main.$Swiper).css(_SwiperSlideCssOptions);
//            $(".swiper-slide > img", _Main.$Swiper).css({ 'display': 'block', 'width': '100%' });

//            $.publish("functionlib/azSlideshowAfterOpen", _Main);
//        }
//    }
//    else
//    {
//        return new AZSlideshow(Options);
//    }
//}

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
                        var _Data =
                        {
                            azInputId: _Main.Options.azRangeMultiId,
                            azInputValueLeft: _Main.Options.azRangeMultiValues[0],
                            azInputValueRight: _Main.Options.azRangeMultiValues[1],
                            azInputJQElement: _Main.$MultiRange
                        };
                        $.publish("functionlib/azRangeMultiCreate",
                            {
                                azInputId: _Data.azInputId,
                                azInputValueLeft: _Data.azInputValueLeft,
                                azInputValueRight: _Data.azInputValueRight,
                                azInputJQElement: _Data.azInputJQElement
                            });
                        if (typeof AZValidateDirty == "function")
                        {
                            AZValidateDirty("functionlib/azRangeMultiCreate", _Data);
                        }
                    },
                    slide: function (event, ui)
                    {
                        var _Data =
                        {
                            azInputId: _Main.Options.azRangeMultiId,
                            azInputValueLeft: ui.values[0],
                            azInputValueRight: ui.values[1],
                            azInputJQElement: _Main.$MultiRange
                        };
                        $.publish("functionlib/azRangeMultiSlide",
                            {
                                azInputId: _Data.azInputId,
                                azInputValueLeft: _Data.azInputValueLeft,
                                azInputValueRight: _Data.azInputValueRight,
                                azInputJQElement: _Data.azInputJQElement
                            });
                        if (typeof AZValidateDirty == "function")
                        {
                            AZValidateDirty("functionlib/azRangeMultiSlide", _Data);
                        }
                    },
                    stop: function (event, ui)
                    {
                        var _Data =
                        {
                            azInputId: _Main.Options.azRangeMultiId,
                            azInputValueLeft: ui.values[0],
                            azInputValueRight: ui.values[1],
                            azInputJQElement: _Main.$MultiRange
                        };
                        $.publish("functionlib/azRangeMultiStop",
                            {
                                azInputId: _Data.azInputId,
                                azInputValueLeft: _Data.azInputValueLeft,
                                azInputValueRight: _Data.azInputValueRight,
                                azInputJQElement: _Data.azInputJQElement
                            });
                        if (typeof AZValidateDirty == "function")
                        {
                            AZValidateDirty("functionlib/azRangeMultiStop", _Data);
                        }
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

function AZWizard(Step, DataList, Options)
{
    if (AZIsEmpty(DataList) === false)
    {
        if ((Step >= DataList.length) || Step < 0)
        {
            Step = 0;
        }
        var _DataObj = DataList.at(Step);

        var _DefaultOptions =
        {
            azModalDialogStyle: "rounded",
            azModalDialogWidth: 300,
            azModalDialogHeight: 150,
            azModalDialogTitle: "Informasjon",
            azModalDialogTitlebar: true,
            azModalDialogTitlebarClose: false,
            azModalDialogContentHeight: true,
            azModalDialogPositionMy: "right top+10",
            azModalDialogPositionAt: "right bottom",
            azModalDialogBackgroundColor: "",
            azModalDialogColor: "",
            azModalDialogTitlebarBackgroundColor: "",
            azModalDialogTitlebarColor: "",
            azModalDialogWizardPrevious: "Forrige",
            azModalDialogWizardNext: "Neste",
            azModalDialogWizardClose: "Lukk"
        };
        var _Options = { ..._DefaultOptions, ...Options, ..._DataObj };

        $.subscribeonce("functionlib/azModalDialogAfterOpen", function (e, data)
        {
            if (Step >= 1)
            {
                $(".button-previous", data.$Article).css({ "display": "block" });
            }
            if ((Step + 1) == DataList.length)
            {
                $(".button-next", data.$Article).css({ "display": "none" });
                $(".button-close", data.$Article).css({ "display": "block" });
            }
            $("#cmdWizardPrevious").off().on('click', function ()
            {
                data.azModalDialogClose();
                AZWizard((Step - 1), DataList, Options);
            });
            $("#cmdWizardNext").off().on('click', function ()
            {
                data.azModalDialogClose();
                AZWizard((Step + 1), DataList, Options);
            });
            $("#cmdWizardClose").off().on('click', function ()
            {
                data.azModalDialogClose();
            });
        });

        var _HTML = "";
        _HTML = '<div class="wizard-wrapper">';
        _HTML += '<div class="az-form-group" style="min-height: 35px; font-size: 15px;">' + _Options.azModalDialogText + '</div>';
        _HTML += '<div class="button-wrapper" style="display: flex; justify-content: flex-end; align-items: center; margin-top: 14px;">';
        _HTML += '<div class="az-form-group" style="margin-right: auto;">';
        _HTML += '<p style="font-size: 15px;">' + (Step + 1) + ' - ' + DataList.length + '</p>';
        _HTML += '</div>';
        _HTML += '<div class="az-form-group button-previous" style="display: none;">';
        _HTML += '<button type="button" class="az-button az-round primary az-shadow-1 az-shadow-hover-2" id="cmdWizardPrevious">' + _Options.azModalDialogWizardPrevious + '</button>';
        _HTML += '</div>';
        _HTML += '<div class="az-form-group button-next">';
        _HTML += '<button type="button" class="az-button az-round primary az-shadow-1 az-shadow-hover-2" id="cmdWizardNext">' + _Options.azModalDialogWizardNext + '</button>';
        _HTML += '</div>';
        _HTML += '<div class="az-form-group button-close" style="display: none;">';
        _HTML += '<button type="button" class="az-button az-round danger az-shadow-1 az-shadow-hover-2" id="cmdWizardClose">' + _Options.azModalDialogWizardClose + '</button>';
        _HTML += '</div>';
        _HTML += '</div>';
        _HTML += '</div>';

        if ($("#" + _Options.azModalDialogPositionOf).length > 0)
        {
            new AZModalDialog(
                {
                    azModalDialogId: "Wizard",
                    azModalDialogStyle: _Options.azModalDialogStyle,
                    azModalDialogTitle: _Options.azModalDialogTitle,
                    azModalDialogText: _HTML,
                    azModalDialogWidth: _Options.azModalDialogWidth,
                    azModalDialogHeight: _Options.azModalDialogHeight,
                    azModalDialogTitlebar: _Options.azModalDialogTitlebar,
                    azModalDialogTitlebarClose: _Options.azModalDialogTitlebarClose,
                    azModalDialogPositionMy: _Options.azModalDialogPositionMy,
                    azModalDialogPositionAt: _Options.azModalDialogPositionAt,
                    azModalDialogPositionOf: $("#" + _Options.azModalDialogPositionOf),
                    azModalDialogBackgroundColor: _Options.azModalDialogBackgroundColor,
                    azModalDialogColor: _Options.azModalDialogColor,
                    azModalDialogTitlebarBackgroundColor: _Options.azModalDialogTitlebarBackgroundColor,
                    azModalDialogTitlebarColor: _Options.azModalDialogTitlebarColor,
                    azModalDialogContentHeight: _Options.azModalDialogContentHeight,
                    azModalDialogNoParentScroll: true,
                    azModalDialogModal: false,
                    azModalDialogDraggable: false,
                    azModalDialogPosition: true,
                });
        }
        else
        {
            consoleLog({ consoleType: "error", consoleText: "AZWizard - Cannot find current object " + _Options.azModalDialogPositionOf });
        }
    }
    else
    {
        consoleLog({ consoleType: "error", consoleText: "AZWizard - The data list is empty" });
    }
}