import './search.html';
import '../components/searchbar.js';
import '../components/list_item.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Attractions } from '../../api/attractions.js';
import { Session } from 'meteor/session';
import { jQuery } from 'meteor/jquery';

Template.app_search_page.onCreated(function() {
	Meteor.defer(function() {
		$(window).scrollTop(0);
	});
});

Template.app_search_page.helpers({
	results() {
		console.log(Session.get("search_query"));
		Meteor.subscribe("search", Session.get("search_query"));
		if (Session.get("search_query")) {
			return Attractions.find({}, { sort: [["score", "desc"]]});
		} else {
			return Attractions.find({});
		}
	},
});