var controller = new ScrollMagic.Controller();

$(".wrapper").each(function() {
    var tl = gsap.timeline();
    var child = $(this).find(".child");
    tl.to(child, 1, { y: -180, ease: Linear.easeNone });

    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.4,
        duration: "100%"
    })
        .setTween(tl)
        .addIndicators()
        .addTo(controller);
});
