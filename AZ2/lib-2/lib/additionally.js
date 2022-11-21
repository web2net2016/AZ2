



















//function AZCheckAsyncAndPublish(FunctionToRun, Publish, ObjData)
//{
//    if (FunctionToRun)
//    {
//        var _Obj = FunctionToRun();
//        if (!IsEmpty(_Obj) && _Obj.hasOwnProperty("promise"))
//        {
//            _Obj.always(function ()
//            {
//                $.publish(Publish, ObjData);
//            });
//        }
//        else
//        {
//            $.publish(Publish, ObjData);
//        }
//    }
//    else
//    {
//        $.publish(Publish, ObjData);
//    }
//}

// Additionally AZ-2.0 v.2 | (c) web2net AS

//function AZSetInputTypeEvents()
//{
//    var _DefaultLanguage = AZClientStorage("get", "language", "");
//    if (_DefaultLanguage == "")
//    {
//        _DefaultLanguage = AZSettings.DefaultLanguage;
//    }

//    $(":input").each(function ()
//    {
//        if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
//        {
//            $(this).attr("autocomplete", "off");
//            if ($(this).hasClass("az-input-animated"))
//            {
//                $(this).off("focusout", AZInputAnimatedFocusout).on("focusout", AZInputAnimatedFocusout);
//            }
//            if ($(this).hasClass("forceuppercase"))
//            {
//                $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
//            }
//            if ($(this).hasClass("forcelowercase"))
//            {
//                $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
//            }
//            if ($(this).hasClass("donotpaste"))
//            {
//                $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
//            }
//            if ($(this).hasClass("notenter"))
//            {
//                $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
//            }
//            if ($(this).hasClass("readonly"))
//            {
//                $(this).attr("readOnly", true);
//            }
//            if ($(this).hasClass("disabled"))
//            {
//                $(this).attr("disabled", true);
//            }
//            if ($(this).hasClass("selecttext"))
//            {
//                $(this).click(function (e)
//                {
//                    $(this).select();
//                });
//            }
//            AZDatepicker($(this), _DefaultLanguage);
//            AZTimepicker($(this), _DefaultLanguage);
//        }
//        if ($(this).is("[type='range']") && $(this).hasClass("az-range"))
//        {
//            $(this).off("input change", AZRange).on("input change", AZRange);
//        }
//        if ($(this).is("textarea"))
//        {
//            $(this).attr("autocomplete", "false");
//            if ($(this).hasClass("forceuppercase"))
//            {
//                $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
//            }
//            if ($(this).hasClass("forcelowercase"))
//            {
//                $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
//            }
//            if ($(this).hasClass("donotpaste"))
//            {
//                $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
//            }
//            if ($(this).hasClass("notenter"))
//            {
//                $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
//            }
//            if ($(this).hasClass("readonly"))
//            {
//                $(this).attr("readOnly", true);
//            }
//            if ($(this).hasClass("disabled"))
//            {
//                $(this).attr("disabled", true);
//            }
//            if ($(this).hasClass("selecttext"))
//            {
//                $(this).click(function (e)
//                {
//                    $(this).select();
//                });
//            }
//        }
//        if ($(this).is("[type='checkbox']"))
//        {
//            if ($(this).hasClass("disabled"))
//            {
//                $(this).attr("disabled", true);
//            }
//            if ($(this).hasClass("az-checkbox"))
//            {
//                $(this).off("click", AZCheckboxClick).on("click", AZCheckboxClick);
//            }
//            if ($(this).parent("label").hasClass("az-switch"))
//            {
//                $(this).off("click", AZSwitchClick).on("click", AZSwitchClick);
//            }
//        }
//        if ($(this).is("[type='radio']"))
//        {
//            if ($(this).hasClass("disabled"))
//            {
//                $(this).attr("disabled", true);
//            }
//            if ($(this).hasClass("az-radio"))
//            {
//                $(this).off("click", AZRadioClick).on("click", AZRadioClick);
//            }
//        }
//        if ($(this).is("select"))
//        {
//            if ($(this).hasClass("readonly"))
//            {
//                $(this).attr("readOnly", true);
//            }
//            if ($(this).hasClass("disabled"))
//            {
//                $(this).attr("disabled", true);
//            }
//        }
//        if ($(this).is("button"))
//        {
//            if ($(this).hasClass("cancel"))
//            {
//                if (typeof AZCancel == "function")
//                {
//                    $(this).off("click", AZCancel).on("click", AZCancel);
//                }
//            }
//            if ($(this).hasClass("submit"))
//            {
//                if (typeof AZSubmit == "function")
//                {
//                    $(this).off("click", AZSubmit).on("click", AZSubmit);
//                }
//            }
//            if ($(this).hasClass("delete"))
//            {
//                if (typeof AZDelete == "function")
//                {
//                    $(this).off("click", AZDelete).on("click", AZDelete);
//                }
//            }
//            if ($(this).hasClass("az-navbar-button"))
//            {
//                $(this).off("click", AZToggleNavbarMobile).on("click", AZToggleNavbarMobile);
//            }
//            if ($(this).hasClass("disabled"))
//            {
//                AZDisableButton(this);
//            }
//        }
//    });

//    // Password Eye
//    $(".passwordeye").off("click", AZHideShowPassword).on("click", AZHideShowPassword);

//    // Animated Label
//    $(".az-label-animated").off("click", AZLabelAnimatedClick).on("click", AZLabelAnimatedClick);

//    // Mandatory Asterisk
//    $(".mandatory").not(".az-no-asterisk, .az-input-icons").each(function ()
//    {
//        $(".az-mandatory-asterisk", this).remove();
//        $(this).append(' <span class="az-mandatory-asterisk">*</span>');
//    });

//    // Dropdown Menu
//    if ($(".az-dropdown-button").is(":button"))
//    {
//        $(".az-dropdown-button").off("click", AZDropdown).on("click", AZDropdown);
//    }
//    $(".az-dropdown-button[href]").off("click", AZDropdown).on("click", AZDropdown);

//    // Input Spinner
//    var _ObjAttributes = {};
//    var _$CurrentSpinner = null;
//    var _$ParentElement = null;
//    $(".az-input-spinner").each(function ()
//    {
//        _$CurrentSpinner = $(this).attr("disabled", true);
//        _$ParentElement = $(this).parent(".az-input-group");
//        _ObjAttributes = AZCheckSpinnerAttributes(this);

//        if (IsEmpty(_ObjAttributes) === false)
//        {
//            if ((_ObjAttributes.Value < _ObjAttributes.Min) || (_ObjAttributes.Value > _ObjAttributes.Max))
//            {
//                _$CurrentSpinner.remove();
//                _$ParentElement.html('<div>#Error</div>');
//            }
//            else
//            {
//                if (_ObjAttributes.hasOwnProperty("Decimals"))
//                {
//                    _$CurrentSpinner.val(numeral(_ObjAttributes.Value).format('0.00'));
//                }
//                _$ParentElement.append('<span class="az-input-group-addon az-spinner-decrement"><i class="fas fa-minus"></i></span>').append(_$CurrentSpinner).append('<span class="az-input-group-addon az-spinner-increment"><i class="fas fa-plus"></i></span>');
//                AZSetSpinnerEvents(_$ParentElement, _ObjAttributes);
//            }
//        }
//        else
//        {
//            _$CurrentSpinner.remove();
//            _$ParentElement.html('<div>#Error</div>');
//        }
//    });
//    $.publish("functionlib/AZSetInputTypeEvents");
//}
