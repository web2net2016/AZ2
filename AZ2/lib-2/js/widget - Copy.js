
function AZWindow(Options)
{
    if (this instanceof AZWindow === true)
    {
        var _Main = this;
        var _Defaults =
        {
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

        if ($('#az-window').length === 0)
        {
            $.publish("functionlib/azWindowBeforeOpen", { azWindowId: "az-window" });

            ModalDialogScrollTop = 0;
            _Main.$Window = $("<div></div>").attr("id", "az-window").addClass("az-window " + _Main.Options.azWindowStyle);
            _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar " + _Main.Options.azWindowStyle).html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>");
            _Main.$Dialog = $("<div></div>").addClass("az-window-dialog " + _Main.Options.azWindowStyle);
            _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
            _Main.$Dialog.append(_Main.$Article);
            _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

            // AZWindow Colors
            if (_Main.Options.azWindowBackgroundColor !== "")
            {
                _Main.$Window.add(_Main.$Dialog).css({ "background-color": _Main.Options.azWindowBackgroundColor + " !important" });
            }
            if (_Main.Options.azWindowColor !== "")
            {
                _Main.$Dialog.css({ "color": _Main.Options.azWindowColor + " !important" });
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
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                        else
                        {
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                    }
                    else
                    {
                        if ((_Main.WindowHeight + _Main.Options.azWindowPositionTop) > (window.innerHeight - 28))
                        {
                            _Main.Options.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                        else
                        {
                            _Main.Options.azWindowHeight = (_Main.WindowHeight + _Main.TitlebarHeight);
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                    }
                }
                else
                {
                    if (_Main.Options.azWindowContentHeight === false)
                    {
                        _Main.$Window.addClass("az-window-center-center");
                        SetAZWindowHeight(_Main.Options.azWindowHeight);
                    }
                    else
                    {
                        if (_Main.WindowHeight > (window.innerHeight - 28))
                        {
                            _Main.Options.azWindowHeight = (window.innerHeight - 28);
                            _Main.$Window.addClass("az-window-center-center");
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                        else
                        {
                            _Main.Options.azWindowHeight = (_Main.WindowHeight + _Main.TitlebarHeight);
                            _Main.$Window.addClass("az-window-center-center");
                            SetAZWindowHeight(_Main.Options.azWindowHeight);
                        }
                    }
                }

                if (_Main.Options.azWindowAnimation === true)
                {
                    _Main.$Window.fadeIn();
                }
                else
                {
                    _Main.$Window.show();
                }

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
            }, 200);

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
                            SetAZWindowHeight(_Main.WindowResizeOptions.azWindowHeight);
                        }
                        else
                        {
                            _Main.$Window.addClass("az-window-center");
                            _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                            SetAZWindowHeight(_Main.WindowResizeOptions.azWindowHeight);
                        }
                    }
                    else
                    {
                        _Main.$Window.addClass("az-window-center-center");
                        SetAZWindowHeight(_Main.WindowResizeOptions.azWindowHeight);                        
                    }
                }, 200);
            };

            function SetAZWindowHeight(Height)
            {
                _Main.$Window.height(Height);
                _Main.$Dialog.height((Height - _Main.TitlebarHeight) - 7);
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Dialog.height(Height - _Main.TitlebarHeight);
                }
            };
        }
    }
    else
    {
        return new AZWindow(Options);
    }
}
