$(function () {
  $(".list>img").on({
    "click": function () {
      let src = $(this).attr("src");
      if (src != $(".display img").attr("src")) {
        $(".list img").css("opacity", 1);
        $(".display img").hide().attr("src", src).fadeIn(1000);
      }
      $(this).fadeTo(1000, 0.5);
    }
  });

  $("ul li").click(function () {
    $(".list img").css("opacity", 1);
    let c = $(this).attr("class");
    $(".list img").attr("src", function (i, origVal) {
      newVal = `./photo/${c}${i + 1}.jpg`;
      $(".display img").attr("src", `./photo/${c}1.jpg`);
      return newVal;
    });
    
    
  });

  $(".day-night").click(function () {
    $("body").toggleClass("night");
    if ($("body").attr("class") == "night") {
      $("aside img").attr("src", "./photo/arrow-blue.png");
    }
    else $("aside img").attr("src", "./photo/arrow-black.png");
  });

  $(".day-auto").click(function(){
    let date = new Date;
    let hour = date.getHours();
    if(hour<8 || hour>19){
      $("body").addClass("night");
      $("aside img").attr("src", "./photo/arrow-blue.png");
    }
    else $("body").removeClass("night");
  });

});