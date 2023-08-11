const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var timeout;
function touchCircle(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#touchCircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

function landingPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
  })
    .from(
      ".boundaryBoxElement",

      {
        y: "10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.2,
        delay: -1,
      }
    )
    .from(
      "#screenFooter",

      {
        y: "10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      }
    );
}
landingPageAnimation();

//jab mouse move ho to ham skew kr payein aur max and min skew define/set kr payein
//jab mouse move ho to CHAPTA Ki value badhe
//jab move hona band ho to chapta na ho

function circleCompress() {
  //define default scale value i.e X-scale = 1, y-scale=1 ;
  var xscale = 1;
  var yscale = 1;
  var xPrevious = 0;
  var yPrevious = 0;
  window.addEventListener("mousemove", function (dets) {
    var xDiff = dets.clientX - xPrevious;
    var yDiff = dets.clientY - yPrevious;
    xPrevious = dets.clientX;

    xscale = gsap.utils.clamp(0.8, 1.2, xDiff);
    yscale = gsap.utils.clamp(0.8, 1.2, yDiff);
    touchCircle(xscale, yscale);
  });
}
circleCompress();
//teeno elem select karo unpe mousemove karo aur ye pta karo ke mouse kaha se kaha par hai, jiska matlab
//hai mouse ki x and y position pata karo. Mouse ki x and y position ke badle image ko show karo aur us image ko move karo

//move karte vakt rotate kro
//jese jese mouse tezz chale vese vese rotation bhi tezz ho jaaye

// document.querySelectorAll(".elem").forEach(function(elem)
// {
//   elem.addEventListener("mousemove",function(details)
//   {
//     //details will have clientX and clientY
//     console.log(details);
//     //screenX screenY will learn later
//     //console.log("Hello. Are you working?");
//     //yes it is working
//    gsap.to(elem.querySelectorAll("img"),
//    {
//         opacity:1,
//         ease:Power1, 

//    }
//    )
//   })
// })
document.querySelectorAll(".elem").forEach(function(elem) {
  elem.addEventListener("mousemove", function(details) {
    gsap.to(elem.querySelectorAll("img"), {
      opacity: 1,
      ease: "power1",
    });
  });
});


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});