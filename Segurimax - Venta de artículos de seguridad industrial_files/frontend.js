function awcfe_initialize_script($ck){

    if (typeof jQuery().datetimepicker === 'function') {
    jQuery(".awcfe_date_field .awcfedatepicker").each(function() {
        e = jQuery(this).data("dpconfig");
    
        null == e && (e = {}), jQuery(this).datetimepicker( jQuery.extend({
            timepicker: false,
            scrollInput: false,
            format:awcfeSettings.dateFormat,
            validateOnBlur:false,
        }, e) );
    
        //jQuery(this).trigger("change");
    });
    }
        
    if (typeof jQuery().datetimepicker === 'function') {
    jQuery(".awcfe_time_field .awcfetimepicker").each(function() {
        e = jQuery(this).data("dpconfig");
        null == e && (e = {}), jQuery(this).datetimepicker( jQuery.extend({
            datepicker: false,
            scrollInput: false,
            format:awcfeSettings.timeFormat,
            formatTime:awcfeSettings.timeFormat,
            validateOnBlur:false,
        }, e) );
    });
    }
        
    if (typeof jQuery().datetimepicker === 'function') {
    jQuery(".awcfe_datetime_field .awcfedatetimepicker").each(function() {
    
        e = jQuery(this).data("dpconfig");
        null == e && (e = {}), jQuery(this).datetimepicker( jQuery.extend({
            scrollInput: false,
            format:awcfeSettings.dateFormat+' '+awcfeSettings.timeFormat,
            validateOnBlur:false,
        }, e) );
    
    });
    }
    
    if (jQuery('.awcfe-color').length) {	
    jQuery(".awcfe_color_field .awcfe-color").spectrum({
        preferredFormat: "hex",
        showInput: false,
        allowEmpty: true,
    });
    }
    
    if ( jQuery.isFunction(jQuery.fn.selectWoo) ) {
        // jQuery('.awcfemultiselect').select2();
        jQuery('.awcfemultiselect').selectWoo();
    }
    
    
    /*
    jQuery(document).on('click', '.awcfe-remove-uploaded', function (e) {
        e.preventDefault();
    });
    */
    
    
    
    /* conditional section */
    /*
    jQuery(".awcfe_cl_section input,.awcfe_cl_section select,.awcfe_cl_section textarea" ).on('keyup change', function () {
    
        var related = jQuery(this).data('sec-related');
        var itemType = jQuery(this).data('type');
        var isSec = 'section';
        // console.log(itemType);
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec);
            });
        }
    
    });
    
    jQuery('.awcfe_cl_section .awce-check-param .awcfe_cl_fields').on('keyup change', function () {
        var related = jQuery(this).closest('.awce-check-param').data('sec-related');
        var itemType = jQuery(this).closest('.awce-check-param').data('type');
        var isSec = 'section';
        //console.log(related);
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec);
            });
        }
    });
    */
    
    jQuery('.awcfe_condSec').each(function () {
        var itemType = jQuery(this).data('type');
        var elmnt = jQuery(this).attr('id');
        var isSec = 'section';
        exc_relations(elmnt, itemType, isSec, $ck);
    });
    
    // jQuery('.acwcfe_extra_section.awcfe_has_sec_rules').each(function () {
    //     var itemType = jQuery(this).data('type');
    //     var elmnt = jQuery(this).attr('id');
    //     var isSec = 'section';
    //     exc_relations(elmnt, itemType, isSec);
    // });
    
    
    /* conditional fields */
    // console.log($ck);
    /*
    jQuery(".awcfe_has_relation input,.awcfe_has_relation select,.awcfe_has_relation textarea" ).on('keyup change', function () {
    
        var related = jQuery(this).data('related');
        var itemType = jQuery(this).data('type');
        var isSec = 'field';
        // console.log(itemType);
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec);
            });
        }
    
    });
    */
    
      jQuery('.awcfe_condField').each(function () {
          var itemType = jQuery(this).find('.awcfe_cl_fields').data('type');
          if( itemType == 'checkboxGroup' || itemType == 'radio' || itemType == 'imageGroup' || itemType == 'colorGroup'  ){
              var elmnt = jQuery(this).find('.awce-check-param').attr('id');
          } else {
              var elmnt = jQuery(this).find('.awcfe_cl_fields').attr('id');
          }
          var isSec = 'field';
          exc_relations(elmnt, itemType, isSec, $ck);
      });
    
    //  awcfe_payMethodCL();
    jQuery('.awcfe_has_sec_rules').each(function () {
        var itemType = jQuery(this).data('type');
        var elmnt = jQuery(this).attr('id');
        var isSec = 'section';
        exc_relations(elmnt, itemType, isSec, $ck);
    });
    
    // jQuery($ck+' .awcfe_has_relation').each(function () {
    jQuery(' .awcfe_has_relation').each(function () {
    
      var itemType = jQuery(this).find('.awcfe_cl_fields').data('type');
    
      if( itemType == 'checkboxGroup' || itemType == 'radio' || itemType == 'imageGroup' || itemType == 'colorGroup' ){
          var related = jQuery(this).find('.awce-check-param').data('related');
      } else {
        var related = jQuery(this).find('.awcfe_cl_fields').data('related');
      }
        // var related = jQuery(this).find('.awcfe_cl_fields').data('related');
    
        var isSec = 'field';
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec, $ck);
            });
            //awcfe_calculate_price();
        }
    });
    
    /*
    jQuery('.awcfe_has_relation .awce-check-param .awcfe_cl_fields').on('keyup change', function () {
        var related = jQuery(this).closest('.awce-check-param').data('related');
        var itemType = jQuery(this).closest('.awce-check-param').data('type');
        var isSec = 'field';
        //console.log(related);
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec);
            });
        }
    });
    */
    
    /* ***** */
    }
    
    
    /* min-max selection */
    jQuery(document).on('change', ".awcfe_has_val_rules input", function (e) {
      $item = jQuery(this).parents(".awcfe_has_val_rules");
      $rules = $item.data('val_rules');
    
      if ($rules.selection !== undefined && $rules.selection.min !== undefined && $rules.selection.min > 0) {
          if (jQuery("input[type=checkbox]:checked", $item).length <= $rules.selection.min) {
              awcfe_remove_val_error($item);
          }
      }
    
      if ($rules.selection !== undefined && $rules.selection.max !== undefined && $rules.selection.max > 0) {
          if (jQuery("input[type=checkbox]:checked", $item).length > $rules.selection.max) {
              awcfe_show_val_error($item, awcfeSettings.strings.sel_max_req_error.replace('%d', $rules.selection.max));
              jQuery(this).prop('checked', false);
          } else {
            awcfe_remove_val_error($item);
          }
      }
    
    });
    
    function awcfe_show_val_error($field, $msg) {
        if ($field.next('.awcfe_error_msg').length) {
            $field.next('.awcfe_error_msg').html('<p>' + $msg + '</p>');
        } else {
            jQuery('<div class="awcfe_error_msg"><p>' + $msg + '</p></div>').insertAfter($field);
        }
    
    }
    
    function awcfe_remove_val_error($field) {
        if ($field.next('.awcfe_error_msg').length) {
            $field.next('.awcfe_error_msg').remove();
        }
    }
    
    if( jQuery(".awcfe_has_val_rules").length > 0 ){
    
    jQuery('form.checkout').on('checkout_place_order', function () {
        $status = true;
        jQuery(".awcfe_has_val_rules", jQuery(this)).each(function () {
              $item = jQuery(this);
              $rules = $item.data('val_rules');
              if ($rules.selection !== undefined && $rules.selection.max !== undefined && $rules.selection.max > 0) {
                  if ($item.is(":visible") && jQuery("input[type=checkbox]:checked", $item).length > $rules.selection.max) {
                      awcfe_show_val_error($item, awcfeSettings.strings.sel_max_req_error.replace('%d', $rules.selection.max));
                      $status = false;
                  }
              }
              if ($rules.selection !== undefined && $rules.selection.min !== undefined && $rules.selection.min > 0) {
                  if ($item.is(":visible") && jQuery("input[type=checkbox]:checked", $item).length < $rules.selection.min) {
                      awcfe_show_val_error($item, awcfeSettings.strings.sel_min_req_error.replace('%d', $rules.selection.min));
                      $status = false;
                  }
              }
          });
    
          if ($status == false) {
              alert(awcfeSettings.strings.fix_val_errors);
              return false;
          } else {
              return true;
          }
    
    });
    
    }
    
    /* min-max selection */
    
    
    jQuery(document).on('keyup change', ".awcfe_cl_section input,.awcfe_cl_section select,.awcfe_cl_section textarea", function (e) {
    //jQuery(".awcfe_cl_section input,.awcfe_cl_section select,.awcfe_cl_section textarea" ).on('keyup change', function () {
    
        var related = jQuery(this).data('sec-related');
        var itemType = jQuery(this).data('type');
        var isSec = 'section';
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec, $ck);
            });
        }
    
    });
    
    jQuery(document).on('keyup change', '.awcfe_cl_section .awce-check-param .awcfe_cl_fields', function (e) {
    //jQuery('.awcfe_cl_section .awce-check-param .awcfe_cl_fields').on('keyup change', function () {
        var related = jQuery(this).closest('.awce-check-param').data('sec-related');
        var itemType = jQuery(this).closest('.awce-check-param').data('type');
        var isSec = 'section';
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec, $ck);
            });
        }
    });
    
    
    /* conditional fields */
    jQuery(document).on('keyup change', ".awcfe_has_relation input,.awcfe_has_relation select,.awcfe_has_relation textarea", function (e) {
    //jQuery(".awcfe_has_relation input,.awcfe_has_relation select,.awcfe_has_relation textarea" ).on('keyup change', function () {
    
        var related = jQuery(this).data('related');
        var itemType = jQuery(this).data('type');
        var isSec = 'field';
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec, $ck);
            });
        }
    
    });
    
    jQuery(document).on('keyup change', '.awcfe_has_relation .awce-check-param .awcfe_cl_fields', function (e) {
    //jQuery('.awcfe_has_relation .awce-check-param .awcfe_cl_fields').on('keyup change', function () {
        var related = jQuery(this).closest('.awce-check-param').data('related');
        var itemType = jQuery(this).closest('.awce-check-param').data('type');
        var isSec = 'field';
        if (related != null) {
            related.forEach(function (el) {
                exc_relations(el, itemType, isSec, $ck);
            });
        }
    });
    
    /* mmm */
    function awcfe_payMethodCL(){
    
      jQuery('.awcfe_condFieldPay').each(function () {
          var itemType = jQuery(this).find('.awcfe_cl_fields').data('type');
          if( itemType == 'checkboxGroup' || itemType == 'radio' || itemType == 'imageGroup' || itemType == 'colorGroup' ){
              var elmnt = jQuery(this).find('.awce-check-param').attr('id');
          } else {
              var elmnt = jQuery(this).find('.awcfe_cl_fields').attr('id');
          }
          var isSec = 'field';
          exc_relations(elmnt, itemType, isSec, $ck);
      });
      jQuery('.awcfe_has_sec_rules').each(function () {
      // jQuery('.acwcfe_extra_section.awcfe_has_sec_rules').each(function () {
          var itemType = jQuery(this).data('type');
          var elmnt = jQuery(this).attr('id');
          var isSec = 'section';
          exc_relations(elmnt, itemType, isSec, $ck);
      });
    
    }
    
    jQuery(document).on('change', 'input[name="awcdp_deposit_option"]', function (e) {
      awcfe_payMethodCL();
    });
    
    
    jQuery(document).on('change', 'input[name="payment_method"]', function (e) {
      awcfe_payMethodCL();
    });
    
    jQuery(document).on('change', 'input[name="shipping_method[0]"]', function (e) {
      awcfe_payMethodCL();
    });
    
    
    function exc_relations(ele_id, itemType, isSec, $ck ) {
    
        var $element = jQuery("#" + ele_id);
        if ($element.length == 0) {
            return false;
        }
        var $relation = $element.data('rules');
    
        if (!$relation) {
            return false;
        }
        var $rules = $relation.rules;
        $evel_str = '';
    
        $rules.forEach(function (ele) {
            $evel_str += '(';
            ele.rules.forEach(function (el) {
    
                $evel_str += '(';
                if (eval_relation(el.rules, $element, itemType )) {
                    $evel_str += ' true ';
                } 
                else {
                    $evel_str += ' false ';
                }
                $evel_str += ') ' + ((el.operator !== false) ? el.operator : '') + ' ';
    
            });
    
            if (ele.length > 0) {
                $evel_str = $evel_str.match(/\(.*\)/g)[0] + ' ';
            }
    
            $evel_str += ') ' + ((ele.operator !== false) ? ele.operator : '') + ' ';
    
        });
    
        if ($rules.length > 0) {
            $evel_str = $evel_str.match(/\(.*\)/g)[0];
        }
    
    
        var result = false;
        try {
            result = eval($evel_str.replace(/or/gi, '||').replace(/and/gi, '&&'));
        } catch (e) {
            return false;
        }
    
        var hidenFields = jQuery('#awcfe_disabled_fields').val();
        var elementID = $element.attr('id');
        var elementTyp = $element.attr('type');
    
    
        if(isSec == 'field'){
          if (result) {
    
              if ($relation.action == 'show') {
                  //$element.closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).removeAttr('disabled');
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).siblings('.awcfe-file-value').removeAttr('disabled');
                  }
                  removeHiddenFields(hidenFields, elementID );
    
                  /*
                  if (!$element.is(":visible")) {
                        $element.show(0, function () {
                            awcfe_calculate_price();
                        }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                    } else {
                        return true;
                    }
                    */
    
                    if( $ck == '' ){
                      if( elementTyp==='file'){
                        var $siblings = $element.siblings('.awcfe-file-button-wrap').find('.awcfe-file-button');
                        if (!$siblings.is(":visible") && !$siblings.hasClass('fileAdded') ) {
                              $siblings.show(0, function () {
                                  awcfe_calculate_price();
                              }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                              $element.closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                          } else {
                              //return true;
                          }
                      } else {
                        if (!$element.is(":visible")) {
                              $element.show(0, function () {
                                  awcfe_calculate_price();
                              }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                          } else {
                              //return true;
                          }
                      }
                    }
                    $element.closest('.awcfe_cl_parent').show().removeClass('awcfe_cl_hidden');
    
              } else {
    
    
                    if( $ck == '' ){
                    if( elementTyp==='file'){
                      var $siblings = $element.siblings('.awcfe-file-button-wrap').find('.awcfe-file-button');
                      if ( ($siblings.is(":visible")  && !$siblings.hasClass('fileAdded') )  ) {
                            jQuery('#'+elementID).attr('disabled', true);
                            if( elementTyp==='file'){
                                jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                            }
                            $siblings.hide(0, function () {
                                awcfe_calculate_price();
                            });
    
                        } else {
                          //  return true;
                        }
    
                    } else {
    
                      if ($element.is(":visible")) {
                        jQuery('#'+elementID).attr('disabled', true);
                        if( elementTyp==='file'){
                            jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                        }
                            $element.hide(0, function () {
                                awcfe_calculate_price();
                            });
    
                        } else {
                            return true;
                        }
    
                    }
                }
                /*
                if ($element.is(":visible")) {
                  jQuery('#'+elementID).attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                  }
                      $element.hide(0, function () {
                          awcfe_calculate_price();
                      });
    
                  } else {
                      return true;
                  }
                  */
    
                  $element.closest('.awcfe_cl_parent').addClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                  }
                  addHiddenFields(hidenFields, elementID );
    
    
              }
    
          } else {
              if ($relation.action == 'show') {
    
                if( $ck == '' ){
                if( elementTyp==='file'){
                  var $siblings = $element.siblings('.awcfe-file-button-wrap').find('.awcfe-file-button');
                  if ( ($siblings.is(":visible")  && !$siblings.hasClass('fileAdded') )  ) {
                        jQuery('#'+elementID).attr('disabled', true);
                        if( elementTyp==='file'){
                            jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                        }
                        $siblings.hide(0, function () {
                            awcfe_calculate_price();
                        });
    
                    } else {
                      //  return true;
                    }
    
                } else {
    
                  if ($element.is(":visible")) {
                    jQuery('#'+elementID).attr('disabled', true);
                    if( elementTyp==='file'){
                        jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                    }
                        $element.hide(0, function () {
                            awcfe_calculate_price();
                        });
    
                    } else {
                        //return true;
                    }
    
                  }
                  }
    
                              /*
                              if ($element.is(":visible")) {
                                jQuery('#'+elementID).attr('disabled', true);
                                if( elementTyp==='file'){
                                    jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                                }
                                    $element.hide(0, function () {
                                        awcfe_calculate_price();
                                    });
    
                                } else {
                                    return true;
                                }
                                */
    
                  $element.closest('.awcfe_cl_parent').addClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).siblings('.awcfe-file-value').attr('disabled', true);
                  }
                  addHiddenFields(hidenFields, elementID );
    
    
              } else {
                  if($element.closest('.awcfe_cl_parent').hasClass('awcfe_cl_hidden') ){
                      $element.closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                      jQuery('#'+elementID).removeAttr('disabled');
                      if( elementTyp==='file'){
                          jQuery('#'+elementID).siblings('.awcfe-file-value').removeAttr('disabled');
                      }
                      removeHiddenFields(hidenFields, elementID );
    
                  }
    
                  if( $ck == '' ){
                  if( elementTyp==='file'){
                    var $siblings = $element.siblings('.awcfe-file-button-wrap').find('.awcfe-file-button');
                    if (!$siblings.is(":visible") && !$siblings.hasClass('fileAdded') ) {
                          $siblings.show(0, function () {
                              awcfe_calculate_price();
                          }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                          $element.closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                      } else {
                          //return true;
                      }
                  } else {
                    if (!$element.is(":visible")) {
                          $element.show(0, function () {
                              awcfe_calculate_price();
                          }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                      } else {
                          return true;
                      }
                  }
                }
                //  $element.closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
                                /*
                                if (!$element.is(":visible")) {
                                      $element.show(0, function () {
                                          awcfe_calculate_price();
                                      }).closest('.awcfe_cl_parent').removeClass('awcfe_cl_hidden');
    
                                  } else {
                                      return true;
                                  }
                                  */
              }
          }
        } else if(isSec == 'section'){
    
          if (result) {
    
              if ($relation.action == 'show') {
    
                  //$element.removeClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).find('input, textarea, select').removeAttr('disabled');
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).find('.awcfe-file-value').removeAttr('disabled');
                  }
                  removeHiddenFields(hidenFields, elementID );
    
                  if( $ck == '' ){
                  if (!$element.is(":visible")) {
                        $element.show(0, function () {
                            awcfe_calculate_price();
                        }).removeClass('awcfe_cl_hidden');
                    } else {
                        //return true;
                    }
                  }
                   $element.show().removeClass('awcfe_cl_hidden');
    
              } else {
    
    
                if ($element.is(":visible")) {
                  jQuery('#'+elementID).find('input, textarea, select').attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).find('.awcfe-file-value').attr('disabled', true);
                  }
                      $element.hide(0, function () {
                          awcfe_calculate_price();
                      });
    
                  } else {
                      //return true;
                  }
    
    
                  $element.addClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).find('input, textarea, select').attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).find('.awcfe-file-value').attr('disabled', true);
                  }
                  addHiddenFields(hidenFields, elementID );
    
              }
          } else {
              if ($relation.action == 'show') {
    
    
                if ($element.is(":visible")) {
                  jQuery('#'+elementID).find('input, textarea, select').attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).find('.awcfe-file-value').attr('disabled', true);
                  }
                      $element.hide(0, function () {
                          awcfe_calculate_price();
                      });
    
                  } else {
                      return true;
                  }
    
                  $element.addClass('awcfe_cl_hidden');
                  jQuery('#'+elementID).find('input, textarea, select').attr('disabled', true);
                  if( elementTyp==='file'){
                      jQuery('#'+elementID).find('.awcfe-file-value').attr('disabled', true);
                  }
                  addHiddenFields(hidenFields, elementID );
    
              } else {
                  if($element.hasClass('awcfe_cl_hidden') ){
                      $element.removeClass('awcfe_cl_hidden');
                      jQuery('#'+elementID).find('input, textarea, select').removeAttr('disabled');
                      if( elementTyp==='file'){
                          jQuery('#'+elementID).find('.awcfe-file-value').removeAttr('disabled');
                      }
                      removeHiddenFields(hidenFields, elementID );
                  }
    
                  if (!$element.is(":visible")) {
                        $element.show(0, function () {
                            awcfe_calculate_price();
                        }).removeClass('awcfe_cl_hidden');
    
                    } else {
                        return true;
                    }
    
              }
          }
        }
    
    
        if ( jQuery.isFunction(jQuery.fn.selectWoo) ) {
            // jQuery('.awcfemultiselect').select2();
            setTimeout(function () {
              jQuery('.awcfemultiselect').selectWoo();
            });
    
        }
    
    
    
        var related = $element.data('related');
        var itemsType = $element.data('type');
    
        if (related != null ) {
            related.forEach(function (el) {
                exc_relations(el, itemsType, isSec );
            });
        }
    
        var related = $element.data('sec-related');
        var itemsType = $element.data('type');
    
        var isSec = 'section';
        if (related != null ) {
            related.forEach(function (el) {
                exc_relations(el, itemsType, isSec );
            });
        }
    
        //jQuery('body').trigger('update_checkout');
    
    
    }
    /*
    function removeHiddenFields( hidenFields, element) {
    
        var hiddenArr = '';
        if (hidenFields.length === 0){
            hiddenArr = [];
        } else {
          if(hidenFields.includes(element)){
            if (hidenFields.indexOf(',') > -1) {
                temp = hidenFields.split(",");
                temp.splice( jQuery.inArray(element,temp) ,1 );
            } else {
                temp = [];
            }
            // temp = hidenFields.split(",");
            // temp.splice( jQuery.inArray(element,temp) ,1 );
            hiddenArr = temp.toString()
          } else {
            hiddenArr = hidenFields;
          }
        }
        jQuery('#awcfe_disabled_fields').val(hiddenArr);
    
    }
    */
    
    function removeHiddenFields( hidenFields, element) {
    
        var hiddenArr = '';
        if (hidenFields.length === 0){
            hiddenArr = [];
        } else {
            temp = hidenFields.split(",");
            //if(hidenFields.includes(element)){
          if( jQuery.inArray(element,temp)!== -1 ){
            //if (hidenFields.indexOf(',') > -1) {
            if (temp && temp.length > 0) {
                //temp = hidenFields.split(",");
                temp.splice( jQuery.inArray(element,temp) ,1 );
            } else {
                temp = [];
            }
            // temp = hidenFields.split(",");
            // temp.splice( jQuery.inArray(element,temp) ,1 );
            hiddenArr = temp.toString()
          } else {
            hiddenArr = hidenFields;
          }
        }
        jQuery('#awcfe_disabled_fields').val(hiddenArr);
    
    }
    
    function addHiddenFields( hidenFields, element) {
    
        var hiddenArr = '';
        if (hidenFields.length === 0){
            hiddenArr = element;
        } else {
            temp = hidenFields.split(",");
            // temp.indexOf(element) === -1 ? temp.push(element) : console.log("already exists");
            temp.indexOf(element) === -1 ? temp.push(element) : '';
            hiddenArr = temp.toString()
        }
        jQuery('#awcfe_disabled_fields').val(hiddenArr);
    
    }
    
    
    jQuery('.awcfe_cl_hidden.awcfe_has_sec_rules').each(function () {
      jQuery(this).find('input, textarea, select').attr('disabled', true);
    
      var hidenFields = jQuery('#awcfe_disabled_fields').val();
      var elementID = jQuery(this).attr('id');
      addHiddenFields(hidenFields, elementID );
    });
    
    
    function eval_relation(rule, $element, itemType ) {
    
        var flag = false;
        if (rule.cl_field === 'cart_product') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_cart_items').val().split(','));
            flag = true;
        } else if (rule.cl_field === 'cart_category') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_cart_categories').val().split(','));
            flag = true;
        } else if (rule.cl_field === 'shipping_class') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_cart_shipping_class').val().split(','));
            flag = true;
        } else if (rule.cl_field === 'cart_subtotal') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_amount_subtotal').val());
            flag = true;
        } else if (rule.cl_field === 'cart_total') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_amount_total').val());
            flag = true;
        } else if (rule.cl_field === 'cart_weight') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_cart_weight').val());
            flag = true;
        } else if (rule.cl_field === 'cart_variation') {
          var $field = new Array();
          $field.push(jQuery('#awcfe_cart_variatns').val().split(','));
          flag = true;
        }else if (rule.cl_field === 'user_role') {
            var $field = new Array();
            $field.push(jQuery('#awcfe_role_user').val().split(','));
            $field.push(jQuery('#awcfe_role_user').val());
            flag = true;
        } else if (rule.cl_field === 'payment_method') {
          var $field = new Array();
          $field.push( jQuery('input[name="payment_method"]:checked').val() );
          flag = true;
        } else if (rule.cl_field === 'checkout_deposit') {
          var $field = new Array();
          $field.push( jQuery('input[name="awcdp_deposit_option"]:checked').val() );
          flag = true;
        } else if (rule.cl_field === 'shipping_method') {
          var $field = new Array();
          $field.push( jQuery('input[name="shipping_method[0]"]:checked').val() );
          flag = true;
        } else {
            var $field = jQuery("#" + rule.cl_field);
            flag = false;
        }
    
        if (flag == false ) {
          var itemType = $field.find('.awcfe_cl_fields').data('type');
        }
        var $fieldType = itemType;
    
        // if (flag == false && $field.is(":visible") == false ) {
        if (flag == false && $field.hasClass("awcfe_cl_hidden") ) {
          return false;
        }
        if (!$field.length) {
            return false;
        }
    
        if (rule.cl_relation === '0') {
            return false;
        }
        var val = Array();
    
        if (rule.cl_field !== 'cart_product' && rule.cl_field !== 'cart_category' && rule.cl_field !== 'cart_subtotal' && rule.cl_field !== 'cart_total' && rule.cl_field !== 'cart_variation' && rule.cl_field !== 'user_role' && rule.cl_field !== 'payment_method' && rule.cl_field !== 'checkout_deposit' && rule.cl_field !== 'shipping_method' && rule.cl_field !== 'cart_weight' && rule.cl_field !== 'shipping_class' ) {
    
            if (jQuery.inArray($fieldType, ['text', 'tel', 'email', 'colorpicker', 'hidden', 'url' ]) >= 0) {
                if ($field.find('input').val() ) {
                    val.push($field.find('input').val().toLowerCase().trim());
                }
    
            } else if (jQuery.inArray($fieldType, ['file']) >= 0) {
                if ($field.find('input').val()) {
                    val.push($field.find('input').val().split('\\').pop().toLowerCase());
                } else if ($field.parents('.awcfe_file_field').length) {
                    $temp = $field.parents('.awcfe_file_field').find('.awcfe-file-value').val();
                    if ($temp.split("||").length === 2) {
                        val.push($temp.split("||")[1].toLowerCase());
                    }
                }
    
            } else if (jQuery.inArray($fieldType, ['numberfield']) >= 0) {
                if ($field.find('input').val()) {
                    val.push(parseFloat($field.find('input').val().toLowerCase().trim()));
                }
    
            } else if (jQuery.inArray($fieldType, ['textarea']) >= 0) {
                if ($field.find('textarea').val() ) {
                    val.push($field.find('textarea').val().toLowerCase().trim());
                }
    
            } else if (jQuery.inArray($fieldType, ['html']) >= 0) {
                if ($field.find('html').val() ) {
                    val.push($field.find('html').val().toLowerCase().trim());
                }

            } else if (jQuery.inArray($fieldType, ['check-box', 'toggleSwitch']) >= 0) {
                val = $field.find('input:checked').map(function () {
                    return jQuery(this).val().toLowerCase();
                }).get();
    
            } else if (jQuery.inArray($fieldType, ['checkboxGroup', 'radio', 'imageGroup', 'colorGroup']) >= 0) {
                val = $field.find('input:checked').map(function () {
                    /* if (jQuery(this).hasClass('wcpa_other')) {
                        if (jQuery.inArray(rule.cl_relation, ['contains', 'not_contains', 'starts_with', 'ends_with']) >= 0) {
                            return jQuery(this).val().replace('WCPAOTH ', '').toLowerCase();
                        }
                        return 'other';
                    } else {
                        return jQuery(this).val().toLowerCase();
                    } */
                    return jQuery(this).val().toLowerCase();
    
                }).get();
            } else if (jQuery.inArray($fieldType, ['select', 'multiselect', 'country', 'state']) >= 0) {
                if ($field.find('select').val() && $field.find('select').val().constructor === Array) {
                    val = $field.find('select').val().map(function (e) {
                        return e.toLowerCase();
                    });
                } else if ($field.find('select').val()) {
                    val.push($field.find('select').val().toLowerCase());
                }
            } else if (jQuery.inArray($fieldType, ['datepicker', 'datetimepicker']) >= 0) {
                if ($field.find('input').val()) {
                    if (jQuery.inArray(rule.cl_relation, ['contains', 'not_contains', 'starts_with', 'ends_with']) >= 0) {
    
                        val.push($field.find('input').val().toLowerCase());
                    } else if( jQuery.inArray(rule.cl_relation, ['day_is', 'day_is_not']) >= 0 ) {
                      var dd = awcfe_get_day_week( $field.find('input').val().toLowerCase() );
                      val.push( dd.toLowerCase() );
                    } else {
                        var d = awcfe_get_date_obj($field.find('input').val(), 'wp');
                        if (typeof d.getTime === 'function') {
                            val.push(d.getTime());
                        }
    
                    }
                }
    
            } else if (jQuery.inArray($fieldType, ['timepicker']) >= 0) {
                if ($field.find('input').val()) {
                    if (jQuery.inArray(rule.cl_relation, ['contains', 'not_contains', 'starts_with', 'ends_with']) >= 0) {
                        val.push($field.find('input').val().toLowerCase());
                    } else {
                        var d = new Date('1/1/2018 ' + $field.find('input').val());
                        val.push(d.getTime());
                    }
                }
            }
    
        }
    
    
        var rel_val = false;
    
        if (rule.cl_field === 'cart_product') {
            val = (jQuery('#awcfe_cart_items').val().split(',').map(Number));
        } else if (rule.cl_field === 'cart_category') {
            val = (jQuery('#awcfe_cart_categories').val().split(',').map(Number));
        } else if (rule.cl_field === 'shipping_class') {
            val = (jQuery('#awcfe_cart_shipping_class').val().split(',').map(Number));
        } else if (rule.cl_field === 'cart_variation') {
            val = (jQuery('#awcfe_cart_variatns').val().split(',').map(Number));
        } else if (rule.cl_field === 'payment_method') {
            val = jQuery('input[name="payment_method"]:checked').val().split(',');
        } else if (rule.cl_field === 'checkout_deposit') {
            val = jQuery('input[name="awcdp_deposit_option"]:checked').val();
            if (typeof val === 'undefined') { 
                val = '';
            }
        } else if (rule.cl_field === 'shipping_method') {
            if(jQuery('input[name="shipping_method[0]"]').is(":hidden")){
                val = jQuery('input[name="shipping_method[0]"]').val().split(',');
            } else {
                if( jQuery('input[name="shipping_method[0]"]').length > 0 ){
                    val = jQuery('input[name="shipping_method[0]"]:checked').val().split(',');
                }
            }
            //val = jQuery('input[name="shipping_method[0]"]:checked').val().split(',');
        } else if (rule.cl_field === 'cart_subtotal') {
            var val = new Array();
            val1 = parseFloat(jQuery('#awcfe_amount_subtotal').val()).toFixed(2);
            val.push(val1);
        } else if (rule.cl_field === 'cart_total') {
            var val = new Array();
            val1 = parseFloat(jQuery('#awcfe_amount_total').val()).toFixed(2);
            val.push(val1);
        } else if (rule.cl_field === 'cart_weight') {
            var val = new Array();
            val1 = parseFloat(jQuery('#awcfe_cart_weight').val()).toFixed(2);
            val.push(val1);
        } else if (rule.cl_field === 'user_role') {
            // var val = new Array();
            // val1 = jQuery('#awcfe_role_user').val();
            // val.push(val1);
    
            val = jQuery('#awcfe_role_user').val().split(',');
        }
    
        if (val.length == 0) {
            switch (rule.cl_relation) {
                case 'is_empty':
                    if (val.length === 0 || val[0] === '' || val[0] === null) {
                        return true;
                    } else {
                        return false;
                    }
                case 'is_not_empty':
                    if (val.length === 0 || val[0] === '' || val[0] === null) {
                        return false;
                    } else {
                        return true;
                    }
                default:
                    return false;
            }
        }
    
    
        if (rule.cl_val && rule.cl_field === 'cart_product') {
            rel_val = rule.cl_val;
            rel_val = rel_val.map(function (x) {
                return parseInt(x, 10);
            });
        } else if (rule.cl_val && rule.cl_field === 'cart_variation') {
            rel_val = rule.cl_val;
            rel_val = rel_val.split(',');
            rel_val = rel_val.map(function (x) {
                return parseInt(x, 10);
            });
        } else if (rule.cl_val && rule.cl_field === 'payment_method') {
            rel_val = rule.cl_val;
            rel_val = rel_val.split(',');
            rel_val = rel_val.map(function (x) {
                return x;
            });
        } else if (rule.cl_val && rule.cl_field === 'checkout_deposit') {
            rel_val = rule.cl_val;
            rel_val = rel_val.split(',');
            rel_val = rel_val.map(function (x) {
                return x;
            });
        } else if (rule.cl_val && rule.cl_field === 'shipping_method') {
            rel_val = rule.cl_val;
            rel_val = rel_val.split(',');
            rel_val = rel_val.map(function (x) {
                return x;
            });
        } else if (rule.cl_val && rule.cl_field === 'cart_category') {
            rel_val = rule.cl_val;
            rel_val = rel_val.map(function (x) {
                return parseInt(x, 10);
            });
        } else if (rule.cl_val && rule.cl_field === 'shipping_class') {
            rel_val = rule.cl_val;
            rel_val = rel_val.split(',');
            rel_val = rel_val.map(function (x) {
                return parseInt(x, 10);
            });
        } else if (rule.cl_val && rule.cl_field === 'cart_subtotal') {
    
            rel_val = (parseFloat(rule.cl_val).toFixed(2));
    
        } else if (rule.cl_val && rule.cl_field === 'cart_total') {
    
            rel_val = (parseFloat(rule.cl_val).toFixed(2));
    
        } else if (rule.cl_val && rule.cl_field === 'cart_weight') {
    
            rel_val = (parseFloat(rule.cl_val).toFixed(2));
    
        } else if (rule.cl_val && rule.cl_field === 'user_role') {
    
            rel_val = rule.cl_val;
            rel_val = rel_val.map(function (x) {
                return x;
            });
    
    
        } else if (rule.cl_val && ($fieldType == 'datepicker' || $fieldType == 'datetimepicker')) {
            if (jQuery.inArray(rule.cl_relation, ['contains', 'not_contains', 'starts_with', 'ends_with']) >= 0) {
                rel_val = rule.cl_val.toLowerCase();
            } else if (jQuery.inArray(rule.cl_relation, ['day_is', 'day_is_not']) >= 0) {
              rel_val = rule.cl_val.toLowerCase();
            } else {
                var d1 = awcfe_get_date_obj(rule.cl_val);
                rel_val = d1.getTime();
            }
        } else if (rule.cl_val && ($fieldType == 'timepicker')) {
            if (jQuery.inArray(rule.cl_relation, ['contains', 'not_contains', 'starts_with', 'ends_with']) >= 0) {
                rel_val = rule.cl_val.toLowerCase();
            } else {
                var d1 = new Date('1/1/2018 ' + rule.cl_val);
                rel_val = d1.getTime();
            }
        } else if (rule.cl_val && $fieldType == 'numberfield') {
            rel_val = parseFloat(((rule.cl_val.value) ? rule.cl_val.value : rule.cl_val));
        } else if (rule.cl_val) {
            rel_val = ((rule.cl_val.value) ? rule.cl_val.value : rule.cl_val).toLowerCase();
        }
    
        switch (rule.cl_relation) {
            case 'day_is':
                if (jQuery.inArray(rel_val, val) >= 0) {
                    return true;
                } else {
                    return false;
                }
            case 'day_is_not':
                if (jQuery.inArray(rel_val, val) >= 0) {
                    return false;
                } else {
                    return true;
                }
            case 'is':
                if (jQuery.inArray(rel_val, val) >= 0) {
                    return true;
                } else {
                    return false;
                }
            case 'is_not':
                if (jQuery.inArray(rel_val, val) >= 0) {
                    return false;
                } else {
                    return true;
                }
            case 'is_in':
                if (Array.isArray(rel_val)) {
    
                    // var is_in = rel_val.filter(function (e) {
                    //     if (jQuery.inArray(e, val) >= 0) {
                    //         return true;
                    //     } else {
                    //         return false;
                    //     }
                    // });
    
                    var is_in = rel_val.filter(element => val.includes(element));
                    if (is_in.length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
    
            case 'is_not_in':
                if (Array.isArray(rel_val)) {
                    var is_in = rel_val.filter(function (e) {
                        if (jQuery.inArray(e, val) >= 0) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    if (is_in.length > 0) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }


            case 'is_select':
                if (val == 'deposit') {
                    return true;
                } else {
                    return false;
                }

            case 'is_not_select':
                if (val == 'full') {
                    return true;
                } else {
                    return false;
                }

            case 'is_empty':
                if (val.length === 0 || val[0] === '' || val[0] === null) {
                    return true;
                } else {
                    return false;
                }
            case 'is_not_empty':
                if (val.length === 0 || val[0] === '' || val[0] === null) {
                    return false;
                } else {
                    return true;
                }
            case 'is_greater':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) > parseFloat(rel_val)) {
                        return true;
                    }
                }
                return false;
            case 'is_lessthan':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) >= parseFloat(rel_val)) { // need to ensuer no values are greater
                        return false;
                    }
                }
                return true;
            case 'is_greater_or_equal':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) >= parseFloat(rel_val)) {
                        return true;
                    }
                }
                return false;
            case 'is_lessthan_or_equal':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) > parseFloat(rel_val)) {
                        return false;
                    }
                }
                return true;
            case 'contains':
                for (var i = 0; i < val.length; i++) {
                    if (val[i].indexOf(rel_val) !== -1) {
                        return true;
                    }
                }
                return false;
            case 'not_contains':
                for (var i = 0; i < val.length; i++) {
                    if (val[i].indexOf(rel_val) !== -1) {
                        return false;
                    }
                }
                return true;
            case 'starts_with':
                for (var i = 0; i < val.length; i++) {
                    if (val[i].startsWith(rel_val)) {
                        return true;
                    }
                }
                return false;
            case 'ends_with':
                for (var i = 0; i < val.length; i++) {
                    if (val[i].endsWith(rel_val)) {
                        return true;
                    }
                }
                return false;
            case 'date_is':
            case 'time_is':
                if (jQuery.inArray(rel_val, val) >= 0) {
                    return true;
                } else {
                    return false;
                }
            case 'date_is_before':
            case 'time_is_before':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) >= parseFloat(rel_val)) { // need to ensuer no values are greater
                        return false;
                    }
                }
    
                return true;
            case 'date_is_after':
            case 'time_is_after':
                for (var i = 0; i < val.length; i++) {
                    if (parseFloat(val[i]) > parseFloat(rel_val)) { // need to ensuer no values are greater
                        return true;
                    }
                }
                return false;
    
        }
    
    
    }
    
    function awcfe_get_day_week( val ){
      var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'Saturday'];
      var d = awcfe_get_date_obj( val, 'wp');
      var n = d.getDay()
      return days[n];
    }
    
    function awcfe_get_date_obj(val, date_format) {
    
        date_format = typeof date_format !== 'undefined' ? date_format : false;
        if (typeof moment == 'function') {
            if (date_format == 'wp') {
                return moment(val, awcfeSettings.dateFormatJs + ' ' + awcfeSettings.timeFormatJs).toDate();
            } else if (date_format !== false) {
                return moment(val, date_format).toDate();
            } else {
                return moment(val).toDate();
            }
    
        }
        return new Date(val);
    }
    
      /* / RegExp / */
    
      jQuery(document).on('change keyup', '.wcfe_allowed_chars input[type=text], .wcfe_allowed_chars textarea', function (e) {
          var val = jQuery(this).val();
          var new_val = '';
          var validation = jQuery(this).data('validation');
          var errormsg = jQuery(this).data('errormsg');
          var allowed_chars = regExpFromString(validation.allowed_chars, 'i');
    
          var a = jQuery.trim(val).match(allowed_chars) ? true : false;
          if(a == true){
            jQuery(this).parents('.form-row').removeClass('woocommerce-invalid');
          } else {
            jQuery(this).parents('.form-row').removeClass('woocommerce-validated');
            jQuery(this).closest('.form-row').addClass('woocommerce-invalid');
    
              if (typeof $error_ele !== 'undefined') {
                  $error_ele.remove();
              }
              $error_ele = jQuery('<span class="wcfe_error_msg">' + errormsg + '</span>').insertAfter(jQuery(this));
              setTimeout(function () {
                  $error_ele.fadeOut(1000, function () {
                      jQuery(this).remove();
                  })
              }, 1500);
    
          }
      });
    
      function regExpFromString(q, ext) {
          var flags = q.replace(/.*\/([gimuy]*)$/, '$1');
          if (flags === q) flags = '';
          var pattern = (q.charAt(0) == '/' ? q.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1') : q);
          try {
              if (flags == '' && q.charAt(0) !== '/') {
                  flags = ext;
              }
              return new RegExp(pattern, flags);
          } catch (e) {
              return null;
          }
      }
    
    
    
    // }
    
    var $ck = '';
    awcfe_initialize_script($ck);
    
    // jQuery( document.body ).on( 'updated_checkout', function() {
    //   awcfe_initialize_script();
    //   var $ck = '.acwcfe_extra_section';
    //   awcfe_file_action_script($ck);
    //
    //   jQuery('.acwcfe_extra_section .awcfe_price_field .awcfe_price_item').on('change', function () {
    //     awcfe_calculate_price();
    //   });
    //
    // });
    
    jQuery(document.body).bind('update_checkout', function () {
      var myform = jQuery('.acwcfe_extra_section');
      var disabled = myform.find(':input:disabled').removeAttr('disabled');
      var secFieldData = jQuery('.acwcfe_extra_section input, .acwcfe_extra_section select, .acwcfe_extra_section textarea').serializeArray();
      disabled.attr('disabled','disabled');
      dataObj = {};
      jQuery(secFieldData).each(function(i, field){
        if(field.name in dataObj){
            dataObj[field.name] = dataObj[field.name] +','+ field.value;
        } else {
            dataObj[field.name] = field.value;
        }
      })
    });
    jQuery(document.body).bind('updated_checkout', function () {
    
        jQuery('.acwcfe_extra_section').find('input, select, textarea').each(function() {
          var itemName = jQuery(this).attr('name');
          var itemId = jQuery(this).attr('id');
          var itemType = jQuery(this).attr('data-type');
          if( itemName in dataObj){
            if(itemType == 'checkboxGroup'){
              optz = dataObj[itemName].trim().split(',');
              optz.forEach(function(item) {
                jQuery(":checkbox[name='"+itemName+"'][value='"+item+"']").attr('checked', true);
              });
            } else if( itemType == 'radio'){
                jQuery(":radio[name='"+itemName+"'][value='"+dataObj[itemName]+"']").attr('checked', true).trigger('change');
            } else if(itemType == 'multiselect'){
              jQuery("#"+itemId).val( dataObj[itemName].trim().split(',') );
            } else if(itemType == 'colorpicker'){
              jQuery("#"+itemId).spectrum("set", dataObj[itemName] ).trigger('change');
            } else if(itemType == 'fileitem'){
              var valuee = dataObj[itemName];
              jQuery("input[name='"+itemName+"']").val( valuee );
              if(valuee){
                var data = JSON.parse(valuee);
                var preview = "";
                if( data.type === "image/jpg" || data.type === "image/png" || data.type === "image/gif" || data.type === "image/jpeg" ) {
                    preview = "<span class='awcfe-file-image-container'><img src='" + data.url + "' title='" + data.filename + "' /></span>";
                } else {
                    preview = "<span class='awcfe-file-image-container'><img src='" + awcfeSettings.asseturl + "/images/text.png' title='" + data.filename + "' /></span>";
                }
                jQuery("input[name='"+itemName+"']").siblings('.awcfe-file-list1').find('.awcfe-file-list').append(preview);
                jQuery("input[name='"+itemName+"']").siblings('.awcfe-file-list1').show();
                jQuery("input[name='"+itemName+"']").siblings('.awcfe-file-button-wrap').hide();
              }
    
            } else {
              jQuery("#"+itemId).val( dataObj[itemName] );
            }
          }
    
        });
    
    
        var $ck = '.acwcfe_extra_section';
          awcfe_initialize_script($ck);
          awcfe_file_action_script($ck);
        jQuery('.acwcfe_extra_section .awcfe_price_field .awcfe_price_item').on('change', function () {
           //awcfe_calculate_price();
        });
    
        jQuery('.acwcfe_extra_section.awcfe_has_sec_rules').each(function () {
            var itemType = jQuery(this).data('type');
            var elmnt = jQuery(this).attr('id');
            var isSec = 'section';
            exc_relations(elmnt, itemType, isSec, $ck);
        });
    
        jQuery('.acwcfe_extra_section .awcfe_has_relation').each(function () {
    
            var related = jQuery(this).find('.awcfe_cl_fields').data('related');
            var itemType = jQuery(this).find('.awcfe_cl_fields').data('type');
            var isSec = 'field';
            if (related != null) {
                related.forEach(function (el) {
                    exc_relations(el, itemType, isSec, $ck);
                });
            }
        });
        awcfeInitMap();
    
    });
    
    
    
    
    var $ck = '';
    awcfe_file_action_script($ck);
    
    function awcfe_file_action_script($ck){
    
          jQuery( $ck+" .awcfe_file_field ").each(function(i, field) {
    
              var $field = jQuery(field),
              $button_file = $field.find('[type=file]'),
              $button_click = $field.find('.awcfe-file-button'),
              $button_wrap = $field.find('.awcfe-file-button-wrap'),
              $field_list = $field.find('.awcfe-file-list'),
              $field_list1 = $field.find('.awcfe-file-list1'),
    
              $file_value = $field.find('.awcfe-file-value'),
              $button_remove = $field.find('.awcfe-remove-uploaded'),
              $up_loading = $field.find('.awcfe-file-upstatus'),
              $up_error = $field.find('.awcfe-file-error');
    
              $button_click.on('click', function (e) {
                  e.preventDefault();
                  $button_file.trigger('click');
              });
    
    
                $button_file.on('change', prepareUpload);
    
              function prepareUpload(event) {
                  var file = event.target.files;
                  var data = new FormData();
                  data.append("action", "awcfe_file_action");
                  data.append("maxsize", jQuery( this ).attr("data-max") );
                  data.append("minsize", jQuery( this ).attr("data-min") );
                  data.append("types", jQuery( this ).attr("data-types") );
    
                  jQuery.each(file, function(key, value)
                  {
                      // data.append("awcfe_file_upload[]", value);
                      data.append("awcfe_file_upload", value);
                  });
    
                  jQuery.ajax({
                      url: awcfeSettings.ajaxurl,
                      type: 'POST',
                      data: data,
                      cache: false,
                      dataType: 'json',
                      processData: false,
                      contentType: false,
                      beforeSend: function () {
                          $up_error.hide();
                          $up_error.html('');
                          $field_list.text('');
                          $up_loading.show();
                          $button_click.removeClass('fileAdded');
                      },
                      success: function(data, textStatus, jqXHR) {
                          $up_loading.hide();
                          $button_file.val('');
                          if( data.response == "SUCCESS" ){
                              var preview = "";
    
                              if( data.type === "image/jpg" || data.type === "image/png" || data.type === "image/gif" || data.type === "image/jpeg" ) {
                                  preview = "<span class='awcfe-file-image-container'><img src='" + data.url + "' title='" + data.filename + "' /></span>";
                              } else {
                                  preview = "<span class='awcfe-file-image-container'><img src='" + awcfeSettings.asseturl + "/images/text.png' title='" + data.filename + "' /></span>";
                                  // preview = data.filename;
                              }
    
                              delete data["response"];
                              jQuery($file_value).val( JSON.stringify(data) );
    
                              jQuery($field_list).append(preview);
                              jQuery($field_list1).show();
                              $button_click.hide();
                              $button_click.addClass('fileAdded');
                              $button_wrap.hide();
                              $button_remove.attr("data-fileurl",data.url );
                                awcfe_calculate_price();
    
                          } else {
                              jQuery($up_error).html( data.error );
                              $up_error.show();
                          }
    
    
                      }
    
                  });
    
    
              }
    
    
              $button_remove.on('click', function (e) {
                  e.preventDefault();
    
                  var fileurl = jQuery(this).attr("data-fileurl");
                  var data = { fileurl: fileurl, action: 'awcfe_file_delete' };
                  jQuery.ajax({
                      url: awcfeSettings.ajaxurl,
                      type: 'POST',
                      data: data,
                      cache: false,
                      dataType: 'json',
                      beforeSend: function () {
                          $up_error.hide();
                          $field_list.text('');
                          $up_loading.show();
                      },
                      success: function(data, textStatus, jqXHR) {
                          $up_loading.hide();
                          if( data.response == "SUCCESS" ){
                              $field_list1.hide();
                              $button_click.show();
                              $button_click.removeClass('fileAdded');
                              $button_wrap.show();
                              jQuery($file_value).val('');
                              awcfe_calculate_price();
                          }
                          if( data.response == "ERROR" ){
                              jQuery($up_error).html( data.error );
                              $up_error.show();
                          }
                      },
                      error: function(jqXHR, textStatus, errorThrown){
                          jQuery($up_error).html( textStatus );
                          $up_error.show();
                      }
                  });
    
    
              });
    
    
          });
    
    }
    
    
    awcfe_calculate_price();
    
    jQuery(document).on('change', '.awcfe_price_field .awcfe_price_item', function (e) {
    // jQuery('.awcfe_price_field .awcfe_price_item').on('change', function () {
    
      awcfe_calculate_price();
    
    });
    
    
        function awcfe_calculate_price(){
    
          var priceInfoArr = {};
          jQuery(".awcfe_price_item:not([disabled])").each(function() {
              var dis = jQuery(this);
              var itype = '';
    
                  var priceInfo = {};
                      pname = dis.prop("name");
                      ftype = dis.data('type');
                      taxable = dis.data('taxable');
                      taxClass = dis.data('taxClass');
    
                  var plabel = dis.data("pricelabel"),
                      priceType = dis.data("pricetype"),
                      priceOption = dis.data("priceoption");
    
                  if( ftype == 'multiselect' ){
    
                    var pname = dis.data("name");
                    var value = dis.val();
                    var selected = jQuery(this).find('option:selected', this);
                    var total = 0;
                    selected.each(function() {
                        total += isNaN(parseFloat(jQuery(this).data('optionprice') )) ? 0 : parseFloat(jQuery(this).data('optionprice') );
                    });
                    var price = total;
    
                  } else if( ftype == 'radio' ){
    
                      var pname = dis.data("name");
                      var value = jQuery('input[name="'+pname+'"]:checked').val();
    
                      if(priceOption == 'fixed_for_all'){
                        var price = dis.data("price");
                      } else {
                        var price = jQuery('input[name="'+pname+'"]:checked').data('optionprice');
                      }
    
                  } else if( ftype == 'checkboxGroup' ){
    
                    var pname = dis.data("name");
                    // var value = jQuery('input[name="'+pname+'[]"]:checked').val();
                    var value = [];
                    jQuery('input:checkbox[name="'+pname+'[]"]:checked').each(function() {
                        value.push(jQuery(this).val());
                    });
    
                        var total = 0;
                        jQuery('input[name="'+pname+'[]"]:checked').each(function(){
                          total += isNaN(parseFloat(jQuery(this).data('optionprice') )) ? 0 : parseFloat(jQuery(this).data('optionprice') );
                        });
                        var price = total;
    
                  } else if( ftype == 'check-box' || ftype == 'toggleSwitch' ){
    
                        var price = 0;
    
                    if( dis.is(':checked') ){
                      var value = dis.val();
                       price = dis.data("price");
                    }
    
                  } 
                  else if( ftype == 'select' ){
                      var value = dis.val();
                      if(priceOption == 'fixed_for_all'){
                        var price = dis.data("price");
                      }
                       else {
                        var price = dis.find(':selected').data('optionprice');
                      }
    
                  } 
                  else if( ftype == 'file' ){
                    var value = dis.siblings('.awcfe-file-value').val(),
                        price = dis.data("price");
    
                  } else if( ftype == 'imageGroup' || ftype == 'colorGroup' ){
                      itype = dis.data('frp');
    
                      if( itype == 'radio' ){
    
                          var pname = dis.data("name");
                          var value = jQuery('input[name="'+pname+'"]:checked').val();
    
                          if(priceOption == 'fixed_for_all'){
                            var price = dis.data("price");
                          } else {
                            var price = jQuery('input[name="'+pname+'"]:checked').data('optionprice');
                          }
    
                      } else if( itype == 'checkboxGroup'   ){
    
                        var pname = dis.data("name");
                        //var value = jQuery('input[name="'+pname+'[]"]:checked').val();
                        var value = [];
                        jQuery('input:checkbox[name="'+pname+'[]"]:checked').each(function() {
                            value.push(jQuery(this).val());
                        });
    
                            var total = 0;
                            jQuery('input[name="'+pname+'[]"]:checked').each(function(){
                              total += isNaN(parseFloat(jQuery(this).data('optionprice') )) ? 0 : parseFloat(jQuery(this).data('optionprice') );
                            });
                            var price = total;
    
                      }
    
                  } else {
                    var value = dis.val();
                    var price = dis.data("price");
                    if (value !== false && value !== '' && value !== null && price) {
                        if (priceType == 'custom') {
                            var formula = price.replace(/{this.value}/g, value).replace(/{value}/g, value);
                            try {
                                price = eval(formula);
                            } catch (e) {
                                price = 0;
                                
                            }
                        }
                    }
                  }
    
                    priceInfo.ftype = ftype;
                    priceInfo.itype = itype;
                    priceInfo.name = pname;
                    priceInfo.label = plabel;
                    priceInfo.price = price;
                    priceInfo.priceType = priceType;
                    priceInfo.priceOption = priceOption;
                    priceInfo.value = value;
                    priceInfo.taxable = taxable;
                    priceInfo.taxClass = taxClass;
    
              priceInfoArr[pname] = priceInfo;
    
    
          });
    
        if (jQuery('.awcfe_price_item').length > 0) {
          jQuery.ajax({
              type: 'POST',
              url: awcfeSettings.ajaxurl,
              data: {
                  'action': 'awcfe_price_action',
                  'price': JSON.stringify(priceInfoArr),
              },
              success: function (result) {
                  jQuery('body').trigger('update_checkout');
              },
              error: function(error){
                  console.log(error);
              }
          });
        }
    
        }
    
    
    
        jQuery('body').on('country_to_state_changed', function(){
    
            var elementID = 'billing_state';
            if ('#'+elementID.length > 0){
              if( jQuery('#billing_state').attr('type') == 'hidden' ){
                addCountryState(elementID);
              } else {
                removeCountryState(elementID);
              }
            }
            var elementIDs = 'shipping_state';
            if ('#'+elementIDs.length > 0){
              if( jQuery('#shipping_state').attr('type') == 'hidden' ){
                addCountryState(elementIDs)
              } else {
                removeCountryState(elementIDs);
              }
            }
    
        });
    
        function addCountryState(elementID){
          var hidenFields = jQuery('#awcfe_disabled_fields').val();
          addHiddenFields(hidenFields, elementID );
        }
    
        function removeCountryState(elementID){
          var hidenFields = jQuery('#awcfe_disabled_fields').val();
          removeHiddenFields(hidenFields, elementID );
        }
    
    
    
    
        function awcfeInitMap() {
            var componentForm = {
                street_number: 'short_name',
                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name'
            };
            jQuery('.awcfe_placeselector_field').each(function () {
                var input = jQuery(this).find('.awcfe_google_place').get(0);
                var $that = jQuery(this);
                var autocomplete = new google.maps.places.Autocomplete(input);
                var geocoder = new google.maps.Geocoder();
                autocomplete.addListener('place_changed', function () {
                    var place = autocomplete.getPlace();
    
                    for (var component in componentForm) {
                        jQuery('.' + component, $that).val('');
                        jQuery('.' + component, $that).removeAttr('disabled', 'disabled');
                    }
                    for (var i = 0; i < place.address_components.length; i++) {
                        var addressType = place.address_components[i].types[0];
                        if (componentForm[addressType]) {
                            var val = place.address_components[i][componentForm[addressType]];
                            jQuery('.' + addressType, $that).val(val);
    
                        }
                    }
                    if (place.geometry) {
                        jQuery('.awcfe_lat', $that).val(place.geometry.location.lat());
                        jQuery('.awcfe_lng', $that).val(place.geometry.location.lng());
                    }
                });
                if ($that.find('.awcfe_map').length) {
                    var map = new google.maps.Map($that.find('.awcfe_map').get(0), {
                        center: {lat: 0, lng: 0},
                        zoom: 15
                    });
                    var marker;
                    autocomplete.bindTo('bounds', map);
    
                    var marker = new google.maps.Marker({
                        map: map,
                        draggable: true,
                        anchorPoint: new google.maps.Point(0, -29)
                    });
                    jQuery.post("https://www.googleapis.com/geolocation/v1/geolocate?key=" + awcfeSettings.google_map_api, function (success) {
                        map.setCenter(success.location);
                        marker.setVisible(false);
                        marker.setPosition(success.location);
                        marker.setVisible(true);
                    })
                    google.maps.event.addListener(marker, 'dragend', function () {
                        jQuery('.awcfe_lat', $that).val(marker.getPosition().lat());
                        jQuery('.awcfe_lng', $that).val(marker.getPosition().lng());
                        geocoder.geocode({
                            latLng: marker.getPosition()
                        }, function (responses) {
                            for (var component in componentForm) {
                                jQuery('.' + component, $that).val('');
                                jQuery('.' + component, $that).removeAttr('disabled', 'disabled');
                            }
                            if (responses && responses.length > 0) {
                                jQuery('.awcfe_google_place', $that).val(responses[0].formatted_address);
                                // jQuery.wcpaIterate();
                                for (var i = 0; i < responses[0].address_components.length; i++) {
                                    var addressType = responses[0].address_components[i].types[0];
                                    if (componentForm[addressType]) {
                                        var val = responses[0].address_components[i][componentForm[addressType]];
                                        jQuery('.' + addressType, $that).val(val);
    
                                    }
                                }
                            }
                        });
                    });
                    autocomplete.addListener('place_changed', function () {
                        marker.setVisible(false);
                        var place = autocomplete.getPlace();
                        if (!place.geometry) {
                            // User entered the name of a Place that was not suggested and
                            // pressed the Enter key, or the Place Details request failed.
                            window.alert("No details available for input: '" + place.name + "'");
                            return;
                        }
                        // If the place has a geometry, then present it on a map.
                        if (place.geometry.viewport) {
                            map.fitBounds(place.geometry.viewport);
                        } else {
                            map.setCenter(place.geometry.location);
                            map.setZoom(17);  // Why 17? Because it looks good.
                        }
                        marker.setPosition(place.geometry.location);
                        marker.setVisible(true);
    
                    });
                }
    
            })
        }
    
    jQuery('body.woocommerce-checkout span.description').removeClass('description').addClass('awcfe_show_description').removeAttr('aria-hidden');
    