$(function(){


function init(){
  $("body").append("<div class='container'></div>");
  $container = $(".container");

  createElements();
}


function createElements(){
  var yLine = 6;
  var xLine = 6;
  var area = 100;
  for(var i=1; i<yLine; i++){
    for(var n=1; n<xLine; n++){
      $(".container").append("<div class='test6box"+i+"_"+n+"'></div>");
      $box = $(".test6box"+i+"_"+n+"");
        $box.css({
         "height": area,
         "width": area,
         "top": i * area,
         "left": n * area,
         "position": "absolute",
         "backgraund-color": "#ccc",
         "border": "1px solid #000",
        });
    }
  }
};

init();

});

