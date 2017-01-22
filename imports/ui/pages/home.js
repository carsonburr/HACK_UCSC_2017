import './home.html';
import '../components/full_screen_image.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.app_home_page.helpers({
	bg_img() {
		return '/img/locations/boardwalk.jpg';
	},
});