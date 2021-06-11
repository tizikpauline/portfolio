// Smooth scroll
$(document).ready(function(){
  $(".right").on("click","a", function (event) {
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

window.onscroll = function () {scrollingFunction()};

function scrollingFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
 if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
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
