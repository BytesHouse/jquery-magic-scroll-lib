$(document).ready(function () {
	
	//ScrollMagic controller init
	let controller = new ScrollMagic.Controller();

	let first_scene = new ScrollMagic.Scene({
		triggerElement : '.project1 .content',
		triggerHook: 0.8
	})
	.setClassToggle('.project1 .content', 'fade-left')
	.addIndicators()
	.addTo(controller);

	let second_scene = new ScrollMagic.Scene({
		triggerElement : '.project2 .content',
		triggerHook: 0.8
	})
	.setClassToggle('.project2 .content', 'fade-right')
	.addIndicators()
	.addTo(controller);

	let third_scene = new ScrollMagic.Scene({
		triggerElement : '.project3 .content',
		triggerHook: 0.8
	})
	.setClassToggle('.project3 .content', 'fade-left')
	.addIndicators()
	.addTo(controller);

	let fourth_scene = new ScrollMagic.Scene({
		triggerElement : '.project4 .content',
		triggerHook: 0.8
	})
	.setClassToggle('.project4 .content', 'fade-right')
	.addIndicators()
	.addTo(controller);
});