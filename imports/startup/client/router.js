import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/app_body.js';

import '../../ui/pages/root_redirector.js';
import '../../ui/pages/home.js';
import '../../ui/pages/search.js';

FlowRouter.route('/home', {
	name: 'App.home_page',
	action() {
		BlazeLayout.render('App_body', { main: 'app_home_page' });
	},
});

FlowRouter.route('/search', {
	name: 'App.search_page',
	action() {
		BlazeLayout.render('App_body', { main: 'app_search_page' });
	},
});

FlowRouter.route('/', {
	name: 'App.home',
	action() {
		BlazeLayout.render('App_body', { main: 'app_root_redirector' });
	},
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', {});
	}
};