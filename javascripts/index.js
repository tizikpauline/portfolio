// Smooth scroll
$(document).ready(function(){
  $(".right").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

// BG Pictures

// Window size
let winsize;
const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
calcWinsize();
window.addEventListener('resize', calcWinsize);

// The feDisplacementMap element
const feDisplacementMapEl = document.querySelector('feDisplacementMap');

class Menu {
    constructor() {
        this.DOM = {
            // The SVG element
            svg: document.querySelector('svg.distort'),
            // The menu element
            menu: document.querySelector('.cases')
        };
        // The images (one per menu link)
        this.DOM.imgs = [...this.DOM.svg.querySelectorAll('g > image')];
        // The menu links
        this.DOM.casesLinks = [...this.DOM.cases.querySelectorAll('.cases__link')];
        // Mouse position
        this.mousePos = {x: winsize.width/2, y: winsize.height/2};
        // Last mouse positions (one to consider for the image translation movement, another for the scale value of the feDisplacementMap element)
        this.lastMousePos = {
            translation: {x: winsize.width/2, y: winsize.height/2},
            displacement: {x: 0, y: 0}
        };
        // feDisplacementMap scale value
        this.dmScale = 0;
        // Current menu link position
        this.current = -1;

        this.initEvents();
        requestAnimationFrame(() => this.render());
    }
    initEvents() {
        // Update mouse position
        window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));

        this.DOM.casesLinks.forEach((item, pos) => {
            // Create spans for each letter
            charming(item);
            const letters = [...item.querySelectorAll('span')];

            const mouseenterFn = () => {
                // Hide the previous menu image.
                if ( this.current !== -1 ) {
                   TweenMax.set(this.DOM.imgs[this.current], {opacity: 0});
                }
                // Update current.
                this.current = pos;

                // Now fade in the new image if we are entering the menu or just set the new image's opacity to 1 if switching between menu items.
                if ( this.fade ) {
                    TweenMax.to(this.DOM.imgs[this.current], 0.5, {ease: Quad.easeOut, opacity: 1});
                    this.fade = false;
                }
                else {
                    TweenMax.set(this.DOM.imgs[this.current], {opacity: 1});
                }

                // Letters effect
                TweenMax.staggerTo(letters, 0.2, {
                    ease: Sine.easeInOut,
                    y: this.lastMousePos.translation.y < this.mousePos.y ? 30 : -30,
                    startAt: {opacity: 1, y: 0},
                    opacity: 0,
                    yoyo: true,
                    yoyoEase: Back.easeOut,
                    repeat: 1,
                    stagger: {
                        grid: [1,letters.length-1],
                        from: 'center',
                        amount: 0.12
                    }
                });
            };
            item.addEventListener('mouseenter', mouseenterFn);
        });

        const mousemenuenterFn = () => this.fade = true;
        const mousemenuleaveFn = () => TweenMax.to(this.DOM.imgs[this.current], .2, {ease: Quad.easeOut, opacity: 0});

        this.DOM.cases.addEventListener('mouseenter', mousemenuenterFn);
        this.DOM.cases.addEventListener('mouseleave', mousemenuleaveFn);
    }
    render() {
        // Translate the image on mousemove
        this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.2);
        this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.2);
        this.DOM.svg.style.transform = `translateX(${(this.lastMousePos.translation.x-winsize.width/2)}px) translateY(${this.lastMousePos.translation.y-winsize.height*5.75}px)`;

        // Scale goes from 0 to 50 for mouseDistance values between 0 to 140
        this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.1);
        this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.1);
        const mouseDistance = distance(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y);
        this.dmScale = Math.min(lineEq(50, 0, 140, 0, mouseDistance), 50);
        feDisplacementMapEl.scale.baseVal = this.dmScale;

        requestAnimationFrame(() => this.render());
    }
}

$(".cases a:nth-of-type(1)").mouseenter (function() {
  $(".cases").css({
    "background-image": "url(images/MTS.jpg)",
    "background-size": "60%",
    "background-position": "95% 10%",
    "background-repeat": "no-repeat",
    "-webkit-transition": "all" + "1s",
    "-moz-transition": "all" + "1s",
    "-o-transition": "all" + "1s",
    "transition": "1s"
  })
})

$(".cases a:nth-of-type(1)").mouseleave (function() {
  $(".cases").css({
    "background-image": "none",
    "transition": "2s"
  })
})

$(".cases a:nth-of-type(2)").mouseenter (function() {
  $(".cases").css({
    "background-image": "url(images/MTS.jpg)",
    "background-size": "60%",
    "background-position": "96% 20%",
    "background-repeat": "no-repeat",
    "-webkit-transition": "all" + "1s",
    "-moz-transition": "all" + "1s",
    "-o-transition": "all" + "1s",
    "transition": "1s"
  })
})

$(".cases a:nth-of-type(2)").mouseleave (function() {
  $(".cases").css({
    "background-image": "none",
    "transition": "2s"
  })
})

$(".cases a:nth-of-type(3)").mouseenter (function() {
  $(".cases").css({
    "background-image": "url(images/MTS.jpg)",
    "background-size": "60%",
    "background-position": "90% 70%",
    "background-repeat": "no-repeat",
    "-webkit-transition": "all" + "1s",
    "-moz-transition": "all" + "1s",
    "-o-transition": "1s",
    "transition": "1s"
  })
})

$(".cases a:nth-of-type(3)").mouseleave (function() {
  $(".cases").css({
    "background-image": "none",
    "transition": "2s"
  })
})

$(".cases a:nth-of-type(4)").mouseenter (function() {
  $(".cases").css({
    "background-image": "url(images/MTS.jpg)",
    "background-size": "60%",
    "background-position": "95% 100%",
    "background-repeat": "no-repeat",
    "-webkit-transition": "all" + "1s",
    "-moz-transition": "all" + "1s",
    "-o-transition": "all" + "1s",
    "transition": "1s"
  })
})

$(".cases a:nth-of-type(4)").mouseleave (function() {
  $(".cases").css({
    "background-image": "none",
    "transition": "2s"
  })
})

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
