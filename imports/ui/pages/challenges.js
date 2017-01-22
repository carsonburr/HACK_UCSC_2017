import './challenges.html';

Template.challenges.helpers({
	bg_img() {
		return Session.get("rec");
	},
});