$(document).ready(function() {

    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('.progress'),
    scroll;

    document.addEventListener('scroll', function() {
    scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
    });

    gsap.registerPlugin(ScrollTrigger);

function headingtext(){
    var typed = new Typed('.element', {
        strings: [
            "IT'S A CRUEL AND RANDOM WORLD",
            "BUT ALL THE CHAOS IS SO BEAUTIFUL."],
            typeSpeed: 60,
            backspeed: 60,
            loop:true,
        });
    }
setTimeout(headingtext,700);
//header

// const tl = gsap.timeline();
// tl.from('.navcontainer' , { opacity:0, duration: 0.75 , y: -20})
// tl.from('.heading' , { opacity:0 , y:-40}, "+=0.15")
// tl.from('.paragraph' , { opacity:0, y: -40}, "+=0.10")
// tl.from('.button-spacing', { opacity:0, y: -40})
// tl.from('.phone-im' , { opacity:0 , y:50 , ease: 'Power4.easeOut' })

const tl = gsap.timeline();
tl.from('.navcontainer' , { opacity:0, duration: 0.50 , y: -20 , ease: 'Power4.easeOut'})
tl.from('.anim1' , { opacity:0 , y:-30 , stagger: 0.5 })
tl.from('.button-spacing' , { opacity:0 , y:-30})
tl.from('.phone-im' , { opacity:0 , y:30 , ease: 'Power4.easeOut', duration:1})

const t2 = gsap.timeline({
    ease: 'Power1.easeOut'
});
console.log(t2);
t2.from('.about-info', { opacity:0 , x:-20 , duration:1 })
.from('.aboutpara' , { opacity:0 , x:20 })
.from('.icon-placement' , { opacity :0 , y:-20}, "+=1")
.from('.anim2', { opacity:0 , y:20 , stagger:0.7})
.from('.featureinfo' , { opacity:0 , x:-30 } , "+=1" )
.from('.featurepara' , { opacity:0 , x:30 } , "+=1" )
.from('.anim3l' , { opacity:0 , x:-20} , "+=1")
.from('.anim3r' , { opacity:0 , x:20})
.from('.phone-mid' , { opacity:0 , y:-30})

ScrollTrigger.create({
    animation: t2,
    trigger: '.about-section',
    markers: {startColor: "green", endColor: "red", fontSize: "12px"},
    start: "top 80%",
    end: "+=2500px",
    // pin: true,
    scrub:true,
});


const t3 = gsap.timeline({
    ease: 'Power1.easeOut'
    });
    console.log(t3);
    t3.from('.featureinfo' , { opacity:0 , x:-60 , scrollTrigger:'.featureinfo' } , "+=0.40" )
    t3.from('.featurepara' , { opacity:0 , x:60 , scrollTrigger:'.featurepara'})
    t3.from('.anim3l' , { opacity:0 , x:-50} , "+=0.10")
    t3.from('.anim3r' , { opacity:0 , x:50} , "-=0.10")
    t3.from('.phone-mid' , { opacity:0 , y:40})
});

ScrollTrigger.create({
    animation: t3,
    trigger: '.feature-section',
    markers: {startColor: "yellow", endColor: "orange", fontSize: "12px"},
    start: "top",
    end: "+=500px",
    // pin: true,
    scrub:true,
});

// });
