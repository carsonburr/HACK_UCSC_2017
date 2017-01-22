import './home.html';
import '../components/searchbar.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.app_home_page.onCreated(function(){
	const rand = Math.floor(Math.random()*4);
	if (rand === 0) { Session.set("rec", "/img/locations/westcliffdrive2.jpg")}
	else if (rand === 1) { Session.set("rec", "/img/locations/boardwalk.jpg")}
	else if (rand === 2) { Session.set("rec", "/img/locations/surfingmuseum.jpg")}
	else if (rand === 3) { Session.set("rec", "/img/locations/naturalbridges.jpg")}
});

Template.app_home_page.helpers({
	bg_img() {
		return Session.get("rec");
	},
});