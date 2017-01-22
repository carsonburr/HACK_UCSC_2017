import './home.html';
import '../components/searchbar.js';
import './main_menu.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.app_home_page.onCreated(function(){
	const rand = Math.floor(Math.random()*4);
	if (rand === 0) { Session.set("rec", "/img/locations/westcliffdrive2.jpg");}
	else if (rand === 1) { Session.set("rec", "/img/locations/boardwalk.jpg");}
	else if (rand === 2) { Session.set("rec", "/img/locations/surfingmuseum.jpg");}
	else if (rand === 3) { Session.set("rec", "/img/locations/naturalbridges.jpg");}
	
	
	if (rand === 0) { Session.set("place", "West Cliff Drive");}
	else if (rand === 1) { Session.set("place", "Santa Cruz Beach Boardwalk");}
	else if (rand === 2) { Session.set("place", "The Surfing Museum");}
	else if (rand === 3) { Session.set("place", "Natural Bridges State Beach");}
});

Template.app_home_page.helpers({
	bg_img() {
		return Session.get("rec");
	},
	place() {
		return Session.get("place");
	},
});

Template.app_home_page.events({
	'click #beach'(event, instance) {
		Session.set("search_query", "beach");
		Meteor.defer(() => {
			FlowRouter.go('/search');
		});
	},
	'click #museum'(event, instance) {
		Session.set("search_query", "museum");
		Meteor.defer(() => {
			FlowRouter.go('/search');
		});
	},
	'click #park'(event, instance) {
		Session.set("search_query", "park");
		Meteor.defer(() => {
			FlowRouter.go('/search');
		});
	},
});