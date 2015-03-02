(function(global, $){

  // load remote html
  var models = {};
  $('[data-toggle="modal"]').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href'), content = models[href];
    if ( content ) {
      $(content).focus();
    } else {
      $.get(href, function(data){
        models[href] = data;
        $(data).modal();
      });
    }
  });

  //var document = $(global.document);

  /*$('.velc-model').each(function(){
    var callee = $(this);
    $.get(callee.attr('href'), function(txt){
      var html = $(txt);
      callee.data('toggle', 'model');
      callee.data('target', "#" + html[0].id);
      callee.removeClass('.velc-model');
      callee.removeAttr('href');
      html.modal({ show: false });
      //html.remove();
      //document.body.innerHTML += txt;
    });
  });*/

})(this, jQuery);
