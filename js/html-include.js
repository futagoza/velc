(function($){

  //var document = $(document);

  $("include").each(function(){
    var callee = $(this);
    $.get(callee.attr('src'), function(txt){
      //var data = $(txt);
      document.body.innerHTML += txt;
      callee.remove();
      //data.modal({ show: false });
    });
  });

})(jQuery);
