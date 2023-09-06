
    var tl = gsap.timeline();

    tl.from('.nav img,.nav .nav-sec h3,.nav .nav-third h3,.nav .nav-third button',{
        y:-100,
        duration:0.5,
        delay:0.5,
        opacity:0,
        stagger:0.2,

    })

    tl.from('.content h1',{
        x:-400,
        opacity:0,
        duration:0.5,
        delay:0.5,
        stagger:0.2,
        // yoyo:true

    })

    gsap.from('.img-left',{
        y:300,
        opacity:0,
        duration:0.5,
        delay:2,
        // rotate:360,


    })

    gsap.from('.img-right',{
        y:-300,
        opacity:0,
        duration:0.5,
        delay:2,
        // rotate:360,


    })

    tl.from('.scroller', {

        scale: 0,
        opacity: 0

    })

    tl.to('.scroller', {

        y: 30,
        duration:0.5,
        repeat: -1,

        yoyo:true,


    })


