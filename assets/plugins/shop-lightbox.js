
$(document).on("ready",function(){var m=$(document).find('a[href*="data:application"]'),n=$('<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><span class="close" data-dismiss="modal" aria-label="Close"></span><div class="row"><div class="col-12 col-sm-6"><img class="form-group item-image w-100"></div><div class="col-12 col-sm-6"><div class="form-group name"><h5 class="item-name"></h5></div><div class="form-group row"><div class="col-auto price display-5"><span class="item-cur"></span><span class="item-price"></span></div><div class="col-auto old-price display-5"><span class="item-cur"></span><span class="item-old-price"></span></div></div><div class="form-group row variants"><div class="col-12 col-md-6"><label class="variant1-label"></label><select class="form-control variant1"></select></div><div class="col-12 col-md-6"><label class="variant2-label"></label><select class="form-control variant2"></select></div><div class="col-12 col-md-6"><label class="variant3-label"></label><select class="form-control variant3"></select></div></div><div class="form-group row"><a class="btn btn-sm btn-primary buy-button display-4">Buy Now</a><a class="btn btn-sm btn-secondary add-button display-4">Add to Cart</a></div><div class="description form-group"><p class="item-description"></p></div></div></div></div></div></div></div>');
$("body").append(n);m.each(function(){var h=$(this);h.attr("data-toggle","modal");h.attr("data-target","#exampleModal");var a=$("#exampleModal");h.click(function(k){a.modal("show");var b=JSON.parse(decodeURIComponent(h.attr("href").replace(/^data:application\/json,/,"")));a.find(".item-name").html(b.name);a.find(".item-cur").each(function(){$(this).html(b.currency)});a.find(".item-old-price").html(b.oldPrice);a.find(".item-description").html(b.description);a.find(".item-image").attr("src",b.images);
var l=a.find("select");l.each(function(){$(this).html("")});if(b.variants1){var g=$("<option>");$(b.variants1).each(function(){a.find("select.variant1").siblings("label").html(b.option1);a.find("select.variant1").append(g.clone().val(this).html(this))})}else a.find("select.variant1").parent().remove();b.variants2?(g=$("<option>"),$(b.variants2).each(function(){a.find("select.variant2").siblings("label").html(b.option2);a.find("select.variant2").append(g.clone().val(this).html(this))})):a.find("select.variant2").parent().remove();
b.variants3?(g=$("<option>"),$(b.variants3).each(function(){a.find("select.variant3").siblings("label").html(b.option3);a.find("select.variant3").append(g.clone().val(this).html(this))})):a.find("select.variant3").parent().remove();b.allPrice=b.allPrice.split(",");a.find(".item-price").html(b.allPrice[0]||b.price);var d={business:b.email,cmd:"_xclick",amount:a.find(".item-price").html(),item_name:a.find(".item-name").html(),currency_code:a.find(".item-cur").html()};a.find(".variant1-label").length&&
(d.on0=a.find(".variant1-label").html());a.find("select.variant1").length&&(d.os0=a.find("select.variant1").val());a.find(".variant2-label").length&&(d.on1=a.find(".variant2-label").html());a.find("select.variant2").length&&(d.os1=a.find("select.variant2").val());a.find(".variant3-label").length&&(d.on2=a.find(".variant3-label").html());a.find("select.variant3").length&&(d.os2=a.find("select.variant3").val());console.log("https://www.paypal.com/cgi-bin/webscr?"+$.param(d));console.log("https://www.paypal.com/cgi-bin/webscr?"+
$.param(d).replace("cmd=_xclick","cmd=_cart")+"&add=1");a.find(".buy-button").attr("href","https://www.paypal.com/cgi-bin/webscr?"+$.param(d));a.find(".add-button").attr("href",("https://www.paypal.com/cgi-bin/webscr?"+$.param(d)).replace("cmd=_xclick","cmd=_cart")+"&add=1");a.on("hidden.bs.modal",function(){$(this).styler&&a.find("select").styler("destroy")});l.each(function(){$(this).styler&&$(this).styler();$(this).on("change",function(c){for(var d=c=0;d<b.variants1.length;d++)if(b.variants2&&
b.variants3)for(var e=0;e<b.variants2.length;e++)for(var f=0;f<b.variants3.length;f++)a.find("select.variant1").val()==b.variants1[d]&&a.find("select.variant2").val()==b.variants2[e]&&a.find("select.variant3").val()==b.variants3[f]&&a.find(".item-price").html(b.allPrice[c]),c++;else if(b.variants2)for(e=0;e<b.variants2.length;e++)a.find("select.variant1").val()==b.variants1[d]&&a.find("select.variant2").val()==b.variants2[e]&&a.find(".item-price").html(b.allPrice[c]),c++;else if(b.variants3)for(f=
0;f<b.variants3.length;f++)a.find("select.variant1").val()==b.variants1[d]&&a.find("select.variant3").val()==b.variants3[f]&&a.find(".item-price").html(b.allPrice[c]),c++;else a.find("select.variant1").val()==b.variants1[d]&&a.find(".item-price").html(b.allPrice[c]),c++;c={business:b.email,cmd:b.type,amount:a.find(".item-price").html(),item_name:a.find(".item-name").html(),currency_code:a.find(".item-cur").html()};"_cart"===c.cmd&&(c.add=1);a.find(".variant1-label").length&&(c.on0=a.find(".variant1-label").html());
a.find("select.variant1").length&&(c.os0=a.find("select.variant1").val());a.find(".variant2-label").length&&(c.on1=a.find(".variant2-label").html());a.find("select.variant2").length&&(c.os1=a.find("select.variant2").val());a.find(".variant3-label").length&&(c.on2=a.find(".variant3-label").html());a.find("select.variant3").length&&(c.os2=a.find("select.variant3").val());a.find(".btn.btn-primary").attr("href","https://www.paypal.com/cgi-bin/webscr?"+$.param(c));a.on("hidden.bs.modal",function(){$(this).styler&&
a.find("select").styler("destroy")})})});k.stopPropagation();k.preventDefault()})})});
