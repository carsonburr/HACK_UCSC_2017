import './full_screen_image.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.full_screen_image.helpers({
	bg_img() {
		return '/img/locations/westcliffdrive.jpg';
	},
});