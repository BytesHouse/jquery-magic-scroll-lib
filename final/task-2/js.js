$(document).ready(function () {
	
	//ScrollMagic controller init
	let controller = new ScrollMagic.Controller();

	let wipeAnimation = new TimelineMax()
			.fromTo(".project2", {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo(".project3",    {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo(".project4", {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		new ScrollMagic.Scene({
			triggerElement: "#main",
			triggerHook: "onLeave",
			duration: "300%"
		})
		.setPin("#main")
		.setTween(wipeAnimation)
		.addIndicators()
		.addTo(controller);
	});