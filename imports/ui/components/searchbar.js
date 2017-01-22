import './searchbar.html';

Template.search_bar.events({
	'click #go'(event, instance) {
		Session.set("search_query", event.target.parentElement.children[0].value);
		Meteor.defer(() => {
			FlowRouter.go('/search');
		});
	},
});