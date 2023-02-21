gsap.from('.nav', {
    duration: 1,
     x:'-100%'
    })

gsap.from('li',{
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: .1  //fade in
})

gsap.from('h3', {
    duration: 1,
    y:'10%',
    delay: 3,
    opacity:0
    })

gsap.from('.content', {
    duration: 1,
    y:'100%',
    delay: 2
    })

// beer img
const tl = gsap.timeline();
tl.add(gsap.from("img", { y: -200, duration: 1,delay: 4, opacity: 0 })); // show up from above
tl.add(gsap.to("img", { y: -20, duration: 1 , yoyo: true, repeat: -1})); // yoyo repeat
