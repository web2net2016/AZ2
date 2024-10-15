

window.setTimeout(function ()
{
    _Main.WindowHeight = AZElementSize(_Main.$Dialog).Height;
    _Main.TitlebarHeight = AZElementSize(_Main.$Titlebar).Height;

    if (_Main.Options.azModalDialogContentHeight === true)
    {
        if (_Main.WindowHeight > (window.innerHeight - 28))
        {
            _Main.Options.azModalDialogHeight = (window.innerHeight - 28);
        }
        else
        {
            _Main.Options.azModalDialogHeight = _Main.WindowHeight;
            if (_Main.Options.azModalDialogTitlebar === true)
            {
                _Main.Options.azModalDialogHeight = (_Main.Options.azModalDialogHeight + _Main.TitlebarHeight + 14);
                if (_Main.Options.azWindowStyle == "flat")
                {
                    _Main.Options.azModalDialogHeight = (_Main.Options.azModalDialogHeight + _Main.TitlebarHeight);
                }
            }
            if (_Main.Options.azModalDialogHeight > (window.innerHeight - 28))
            {
                _Main.Options.azModalDialogHeight = (window.innerHeight - 28);
            }
        }
    }

    // AZModalDialog iFrame
    if (_Main.Options.azModalDialogiFrameURL != "")
    {
        var _IFrameHeight = _Main.Options.azModalDialogHeight;
        if (_Main.Options.azModalDialogTitlebar === true)
        {
            _IFrameHeight = (_Main.Options.azModalDialogHeight + 1);
        }
        _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azModalDialogId).addClass("az-iframe");
        _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
        _Main.$Dialog.append(_Main.$Iframe).addClass("overflow");
    }
    _Main.$Dialog.dialog({ height: _Main.Options.azModalDialogHeight });
}, 100);




















function AZModalDialog(Options)
{
    if (this instanceof AZModalDialog === true)
    {
        var _Main = this;
        var _Defaults =
        {
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
            $.publish("functionlib/azModalDialogBeforeOpen", { azModalDialogId: _Main.Options.azModalDialogId });

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

            // AZModalDialog UI Dialog
            _Main.$Dialog.dialog(
                {
                    autoOpen: false,
                    modal: false,
                    width: _Main.Options.azModalDialogWidth,
                    height: "auto",
                    //height: _Main.Options.azModalDialogContentHeight === false ? _Main.Options.azModalDialogHeight : "auto",
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

            _Main.$Dialog.dialog("open");
            _Main.$Dialog.dialog(
                {
                    focus: function (e, ui)
                    {
                        var _Element = e.target || e.srcElement;
                        $(".ui-dialog").not($(_Element).parent(".ui-dialog")).css({ "z-index": "5000" });
                        $(_Element).parent(".ui-dialog").css({ "z-index": "5001" });
                        $.publish("functionlib/azModalDialogFocus",
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
                    }
                });

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

            window.setTimeout(function ()
            {
                _Main.WindowHeight = AZElementSize(_Main.$Dialog).Height;
                _Main.TitlebarHeight = AZElementSize(_Main.$Titlebar).Height;

                if (_Main.Options.azModalDialogContentHeight === true)
                {
                    if (_Main.WindowHeight > (window.innerHeight - 28))
                    {
                        _Main.Options.azModalDialogHeight = (window.innerHeight - 28);
                    }
                    else
                    {
                        _Main.Options.azModalDialogHeight = _Main.WindowHeight;
                        if (_Main.Options.azModalDialogTitlebar === true)
                        {
                            _Main.Options.azModalDialogHeight = (_Main.Options.azModalDialogHeight + _Main.TitlebarHeight + 14);
                            if (_Main.Options.azWindowStyle == "flat")
                            {
                                _Main.Options.azModalDialogHeight = (_Main.Options.azModalDialogHeight + _Main.TitlebarHeight);
                            }
                        }
                        if (_Main.Options.azModalDialogHeight > (window.innerHeight - 28))
                        {
                            _Main.Options.azModalDialogHeight = (window.innerHeight - 28);
                        }
                    }
                }

                // AZModalDialog iFrame
                if (_Main.Options.azModalDialogiFrameURL != "")
                {
                    var _IFrameHeight = _Main.Options.azModalDialogHeight;
                    if (_Main.Options.azModalDialogTitlebar === true)
                    {
                        _IFrameHeight = (_Main.Options.azModalDialogHeight + 1);
                    }
                    _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azModalDialogId).addClass("az-iframe");
                    _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": _IFrameHeight });
                    _Main.$Dialog.append(_Main.$Iframe).addClass("overflow");
                }
                _Main.$Dialog.dialog({ height: _Main.Options.azModalDialogHeight });
            }, 100);

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
                $.publish("functionlib/azModalDialogAfterClose", { azModalDialogId: _Main.Options.azModalDialogId });
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
                    _Main.$Iframe.css({ "width": "100%", "height": _Main.ModalDialogResize.azModalDialogHeight });
                }
            };

            $.publish("functionlib/azModalDialogAfterOpen",
                {
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
