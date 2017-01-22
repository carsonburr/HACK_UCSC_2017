import './searchbar.html';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.search_bar.events({
	'click #go'(event, instance) {
		Session.set("search_query", event.target.parentElement.children[0].value);
		Meteor.defer(() => {
			FlowRouter.go('/search');
		});
	},
});