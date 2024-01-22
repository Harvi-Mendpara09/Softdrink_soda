var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "60% 50%",
    scrub: 2,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "5%"
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left:"27%",
},'orange')

tl.to("#orange",{
    width:"15%",
    top:"160%",
    right:"1%",
    
},'orange')

tl.to("#leaf",{
    width:"10%",
    rotate:"-50deg",
    top:"115%",
    left:"82%",
},'orange')

tl.to("#leaf2",{
    width:"10%",
    rotate:"180deg",
    top:"115%",
    left:"12%",
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: 1,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#coca-cola",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.to("#orange-cut",{
    left: "40%",
    top: "205%",
    width:"20%"
}, 'ca')

tl2.to("#fanta",{
    left: "33%",
    top: "218%",
    width:"33%"
}, 'ca')


