// Smooth scroll
$(document).ready(function(){
  $(".right ul").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

// custom cursor
const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

$(".right").mouseenter (function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #F2F0E9",
    "transition": "0.5s"
  })
})

$(".right").mouseleave(function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #111111",
    "transition": "0.5s"
  })
})

$("#about .text").mouseenter (function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #F2F0E9",
    "transition": "0.5s"
  })
})

$("#about .text").mouseleave(function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #111111",
    "transition": "0.5s"
  })
})

$("#projects .cases").mouseenter (function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #F2F0E9",
    "transition": "0.5s"
  })
})

$("#projects .cases").mouseleave (function() {
  $("#cursor .cursor--inner").css({
    "border": "solid 0.1vw #111111",
    "transition": "0.5s"
  })
})

$(".right a").mouseenter (function() {
  $("#cursor .cursor--inner").css({
    "width": "7vw",
    "height": "4vw",
    "transition": "0.5s"
  })
})

$(".right a").mouseleave (function() {
  $("#cursor .cursor--inner").css({
    "width": "5vw",
    "height": "5vw",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(1)").mouseenter (function() {
  $(".mts").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(1)").mouseleave (function() {
  $(".mts").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(2)").mouseenter (function() {
  $(".grimes").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(2)").mouseleave (function() {
  $(".grimes").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(3)").mouseenter (function() {
  $(".church").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(3)").mouseleave (function() {
  $(".church").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(4)").mouseenter (function() {
  $(".eat").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(4)").mouseleave (function() {
  $(".eat").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(5)").mouseenter (function() {
  $(".bloowery").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(5)").mouseleave (function() {
  $(".bloowery").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(6)").mouseenter (function() {
  $(".prelab").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(6)").mouseleave (function() {
  $(".prelab").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(7)").mouseenter (function() {
  $(".skryabin").css({
    "opacity": "100",
    "transition": "0.5s"
  })
})

$(".cases li:nth-of-type(7)").mouseleave (function() {
  $(".skryabin").css({
    "opacity": "0",
    "transition": "0.5s"
  })
})

$("#contacts .behance").mouseenter (function() {
  $("#contacts .behance").css({
    "width": "50vw",
    "transition": "0.5s"
  })
})

$("#contacts .behance").mouseleave (function() {
  $("#contacts .behance").css({
    "width": "18vw",
    "transition": "0.5s"
  })
})

$("#contacts .instagram").mouseenter (function() {
  $("#contacts .instagram").css({
    "width": "50vw",
    "transition": "0.5s"
  })
})

$("#contacts .instagram").mouseleave (function() {
  $("#contacts .instagram").css({
    "width": "18vw",
    "transition": "0.5s"
  })
})

$("#contacts .telegram").mouseenter (function() {
  $("#contacts .telegram").css({
    "width": "50vw",
    "transition": "0.5s"
  })
})

$("#contacts .telegram").mouseleave (function() {
  $("#contacts .telegram").css({
    "width": "18vw",
    "transition": "0.5s"
  })
})

$("#contacts .email").mouseenter (function() {
  $("#contacts .email").css({
    "width": "50vw",
    "transition": "0.5s"
  })
})

$("#contacts .email").mouseleave (function() {
  $("#contacts .email").css({
    "width": "18vw",
    "transition": "0.5s"
  })
})

if (window.matchMedia("(min-width: 768px)").matches) {
  window.onscroll = function () {scrollingFunction()};

  function scrollingFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      $('.main .right h1').css({
        "transform": "translate(-50vw,0)",
        "-webkit-transform": "translate(-50vw,0)",
        "color": "#111111",
        "transition": "2s"
      })
    } else {
      $('.main .right h1').css({
        "transform": "translate(0vw,0)",
        "-webkit-transform": "translate(0vw,0)",
        "color": "#F2F0E9",
        "transition": "2s"
    })
   }
   if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
   $('video').css({
     "opacity": "0",
     "transition": "0.5s"
   })
   } else {
   $('video').css({
     "opacity": "1",
     "transition": "0.5s"
   })
   }
   if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
   $('.main h1').css({
     "opacity": "0",
     "transition": "0.5s"
   })
  } else {
   $('.main h1').css({
     "opacity": "1",
     "transition": "0.5s"
   })
  }
 }
} else {
  // burger-menu

  $('.menu-button').click(function() {
      $('header .menu').css({
        "height": "100vh",
        "background-color": "#111111",
        "align-items": "flex-end",
        "justify-content": "flex-end",
      })

      $('header ul a').css({
        "display": "block",
        "padding-bottom": "10vw"
      })

      $('header ul').css({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "flex-end",
        "align-items": "flex-end",
        "transition": "2s",
        "margin-top": "6vw"
      })

      $('header .right').css({
        "flex-direction": "column",
        "justify-content": "flex-start",
        "align-items": "flex-end",
        "transition": "2s",
        "margin-top": "2vw"
      })

      $('.menu img:nth-of-type(1)').css({
        "display": "none",
        "transition": "2s"
      })

      $('.menu-button').css({
        "display": "none",
        "transition": "2s"
      })

      $('.close-button').css({
        "display": "block",
        "margin-left": "3vw",
        "transition": "2s"
      })
    })

    $('.close-button').click(function() {
      $('header .menu').css({
        "height": "10vh",
        "flex-direction": "row",
        "background-color": "transparent",
        "justify-content": "space-between",
        "align-items": "center"
      })

      $('header ul').css({
        "display": "none",
        "transition": "2s",
        "margin-top": "0"
      })

      $('header .right').css({
        "flex-direction": "row",
        "justify-content": "flex-end",
        "align-items": "center"
      })

      $('.close-button').css({
        "display": "none",
        "transition": "2s"
      })

      $('.menu-button').css({
        "display": "inline",
        "transition": "2s"
      })
    })

    $('header a').click(function() {
      $('header .menu').css({
        "height": "10vh",
        "flex-direction": "row",
        "background-color": "transparent",
        "justify-content": "space-between",
        "align-items": "center"
      })

      $('header ul').css({
        "display": "none",
        "transition": "2s",
        "margin-top": "0"
      })

      $('header .right').css({
        "flex-direction": "row",
        "justify-content": "flex-end",
        "align-items": "center"
      })

      $('.menu-button').css({
        "display": "inline",
        "transition": "2s"
      })

      $('.close-button').css({
        "display": "none",
        "transition": "2s"
      })
    })

  $("header").mouseenter (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #F2F0E9",
      "transition": "0.5s"
    })
  })

  $(".background").mouseenter (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #F2F0E9",
      "transition": "0.5s"
    })
  })

  $(".main").mouseenter (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #F2F0E9",
      "transition": "0.5s"
    })
  })

  $(".main").mouseleave (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #111111",
      "transition": "0.5s"
    })
  })

  $(".about").mouseenter (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #111111",
      "transition": "0.5s"
    })
  })

  $(".about").mouseleave (function() {
    $("#cursor .cursor--inner").css({
      "border": "solid 0.1vw #F2F0E9",
      "transition": "0.5s"
    })
  })

  window.onscroll = function () {scrollingFunction()};

  function scrollingFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $('.main h1').css({
      "opacity": "0",
      "transition": "0.5s"
    })
   } else {
    $('.main h1').css({
      "opacity": "1",
      "transition": "0.5s"
    })
   }
   if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
   $('video').css({
     "opacity": "0",
     "transition": "0.5s"
   })
   } else {
   $('video').css({
     "opacity": "1",
     "transition": "0.5s"
   })
   }
  }
}
