import './main_menu.html';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.main_menu.helpers({
	bg_img() {
		return Session.get("rec");
	},
	links: [
		{ text: "Home", link: "home" },
		{ text: "Bucket List", link: "bucket_list" },
		{ text: "My Memories", link: "memories" },
		{ text: "Daily Challenges", link: "challenges" }
	],
});