function pageRedirect() {
  window.location.replace("http://localhost:4200/home");
}

$(document).on("click", ".super-button", function() {
  setTimeout("pageRedirect()", 2000);
});


$(document).ready(function() {
  $(document).on("click", ".super-button", function() {
    $(".main, .half, .overlay, .button-line, .super-button").addClass("active");
    setTimeout(function() {
      $(".main *").css("z-index", "1");
    }, 2800);
  });
});

$(document).ready(function() {
  setTimeout(function() {
    $(".loading").css("z-index", "1");
  }, 1500);
});

$(document).ready(function() {
  setTimeout(function() {
    $(".loading").css("visibility", "visible");
  }, 500);
});

$(window).scroll(function() {
  var x=$(window).innerWidth();
  var y=$(window).scrollTop();
    if(y > 180 && x > 768){
      $(".social").addClass("animated fadeOutRight");
    } else {
      $(".social").removeClass("animated fadeOutRight");
    }
});

function goBack() {
  window.history.back();
}