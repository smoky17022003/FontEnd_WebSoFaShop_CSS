function copyToClipboard(e){var n=jQuery("<input>");jQuery("body").append(n),jQuery(e).addClass("copying"),setTimeout(function(){jQuery(e).removeClass("copying")},300),n.val(jQuery(e).html()).select(),document.execCommand("copy"),n.remove()}!function(e){"use strict";e(document).ready(function(){var n={formatNoMatches:vncheckout_array.formatNoMatches},a=!1,t=!1,i=e("#billing_city_field"),s=e("#billing_address_2_field"),c=e("#shipping_city_field"),l=e("#shipping_address_2_field");if(e("#billing_state").select2(n),e("#billing_city").select2(n),e("#billing_address_2").select2(n),e("body #billing_state").on("change.select2 select2:select",function(t){e("#billing_city option").val("");var c=t.val;c||(c=e("#billing_state option:selected").val()),c&&!a&&(a=!0,e.ajax({type:"post",dataType:"json",url:vncheckout_array.get_address,data:{action:"load_diagioihanhchinh",matp:c},context:this,beforeSend:function(){i.addClass("devvn_loading"),s.addClass("devvn_loading")},success:function(t){if(a=!1,e("#billing_city,#billing_address_2").html("").select2(n),t.success){var c=t.data,l=new Option("","");e("#billing_city").append(l),e.each(c,function(n,a){var t=new Option(a.name,a.maqh);e("#billing_city").append(t)})}i.removeClass("devvn_loading"),s.removeClass("devvn_loading")}}))}),e("#billing_address_2").length>0&&e("#billing_city").on("select2:select",function(a){var t=a.val;t||(t=e("#billing_city option:selected").val()),t&&e.ajax({type:"post",dataType:"json",url:vncheckout_array.get_address,data:{action:"load_diagioihanhchinh",maqh:t},context:this,beforeSend:function(){s.addClass("devvn_loading")},success:function(a){if(e("#billing_address_2").html("").select2(n),a.success){var t=a.data,i=new Option("","");e("#billing_address_2").append(i),e.each(t,function(n,a){var t=new Option(a.name,a.xaid);e("#billing_address_2").append(t)})}s.removeClass("devvn_loading")}})}),e("#shipping_state").select2(n),e("#shipping_city").select2(n),e("#shipping_address_2").select2(n),e("body #shipping_state").on("select2:select",function(n){e("#shipping_city option").val("");var a=n.val;a||(a=e("#shipping_state option:selected").val()),a&&!t&&(t=!0,e.ajax({type:"post",dataType:"json",url:vncheckout_array.get_address,data:{action:"load_diagioihanhchinh",matp:a},context:this,beforeSend:function(){c.addClass("devvn_loading"),l.addClass("devvn_loading")},success:function(n){if(t=!1,e("#shipping_city,#shipping_address_2").html("").select2(),n.success){var a=n.data,i=new Option("","");e("#shipping_city").append(i),e.each(a,function(n,a){var t=new Option(a.name,a.maqh);e("#shipping_city").append(t)})}c.removeClass("devvn_loading"),l.removeClass("devvn_loading")}}))}),e("#shipping_address_2").length>0&&e("#shipping_city").on("select2:select",function(a){var t=a.val;t||(t=e("#shipping_city option:selected").val()),t&&e.ajax({type:"post",dataType:"json",url:vncheckout_array.get_address,data:{action:"load_diagioihanhchinh",maqh:t},context:this,beforeSend:function(){l.addClass("devvn_loading")},success:function(a){if(e("#shipping_address_2").html("").select2(n),a.success){var t=a.data,i=new Option("","");e("#shipping_address_2").append(i),e.each(t,function(n,a){var t=new Option(a.name,a.xaid);e("#shipping_address_2").append(t)})}l.removeClass("devvn_loading")}})}),e("#calc_shipping_city_field").length>0&&e(document.body).bind("country_to_state_changed updated_wc_div",function(){var n=e("#calc_shipping_city_field #calc_shipping_city");n.val(),e("#calc_shipping_state").val();n.select2();var a=!1,t=function(t){t&&!a&&e.ajax({type:"post",dataType:"json",url:vncheckout_array.get_address,data:{action:"load_diagioihanhchinh",matp:t},context:this,beforeSend:function(){a=!0},success:function(t){if(a=!1,t.success){var i=t.data,s=[];e.each(i,function(e,n){s.push({id:n.maqh,text:n.name})}),n.html("").select2({placeholder:"Chọn quận/huyện",data:s})}}})};e("body select.state_select:visible").each(function(){t(e(this).val()),e(this,"body").on("select2:select",function(){t(e(this).val())})})}),e("#devvn_ghtk_tracking").on("submit",function(){var n=e(this).serialize(),a=e(this).closest(".devvn_ghtk_tracking_form");return e.ajax({type:"post",dataType:"json",url:vncheckout_array.admin_ajax,data:{action:"ghtk_tracking",data:n},context:this,beforeSend:function(){a.addClass("devvn_loading")},success:function(n){var t=n.data;t&&e.each(t.fragments,function(n,t){e(n,a).html(t)}),a.removeClass("devvn_loading")},error:function(e,n,t){a.removeClass("devvn_loading")}}),!1}),e("body").on("change","input[name=payment_method]",function(){vncheckout_array.enabled_free_shipping&&e("form.checkout").trigger("update_checkout")}),null!=typeof magnificPopup&&e(".get_address_byphone").length>0){e(".get_address_byphone").magnificPopup({type:"inline",midClick:!0,showCloseBtn:!1});var d=!1;e("body").on("click",".btn_get_address",function(){if(d)return!1;var n=e(this),a=e(this).closest("#get_address_content"),t=e("#sdt_get_address",a).val(),i=e(".get_address_content_mess",a),s="";return t&&/^0+(\d{9,10})$/.test(t)?(i.html(""),e("#g-recaptcha-response",a).length>0&&!(s=e("#g-recaptcha-response",a).val())?(i.html("Vui lòng nhập mã xác thực."),!1):(e.ajax({type:"post",dataType:"json",url:vncheckout_array.admin_ajax,data:{action:"get_address_byphone",phone:t,"g-recaptcha-response":s},context:this,beforeSend:function(){i.html(vncheckout_array.loading_text),n.addClass("devvn_loading"),d=!0},success:function(a){if(a.success){if(e("#billing_city,#billing_address_2").html("").select2(),a.data.billing.billing_state&&(e("#billing_state").val(a.data.billing.billing_state).select2().trigger("change"),e("#billing_state").val())){var t=a.data.district,s=new Option("","");if(e("#billing_city").append(s),e.each(t,function(n,a){var t=new Option(a.name,a.maqh);e("#billing_city").append(t)}),a.data.billing.billing_city&&e("#billing_address_2").length>0){e("#billing_address_2").val(a.data.billing.billing_address_2);t=a.data.ward,s=new Option("","");e("#billing_address_2").append(s),e.each(t,function(n,a){var t=new Option(a.name,a.xaid);e("#billing_address_2").append(t)})}}e.each(a.data.billing,function(n,a){e("#"+n).is("select"),e("#"+n).val(a)}),i.html(""),e("#billing_address_2").trigger("change"),e.magnificPopup.close()}else i.html(vncheckout_array.loadaddress_error);n.removeClass("devvn_loading"),d=!1}}),!1)):(i.html(vncheckout_array.phone_error),!1)}),e("body").on("click",".btn_cancel",function(){var n=e(this).closest("#get_address_content"),a=e(".get_address_content_mess",n);return n.removeClass("get_address_error"),e.magnificPopup.close(),d=!1,a.html(""),e("#billing_first_name").length>0?e("#billing_first_name").focus():e("#billing_last_name").focus(),!1})}e("body").on("change","input[name=payment_method]",function(){vncheckout_array.has_vtp&&e("form.checkout").trigger("update_checkout")})})}(jQuery)