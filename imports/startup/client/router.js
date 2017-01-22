import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/app_body.js';

import '../../ui/pages/root_redirector.js';
import '../../ui/pages/home.js';
import '../../ui/pages/search.js';
import '../../ui/pages/main_menu.js';
import '../../ui/pages/bucket_list.js';
import '../../ui/pages/my_memories.js';
import '../../ui/pages/challenges.js';

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

FlowRouter.route('/menu', {
	name: 'App.main_menu',
	action() {
		BlazeLayout.render('App_body', { main: 'main_menu' });
	},
});

FlowRouter.route('/bucket_list', {
	name: 'App.bucket_list',
	action() {
		BlazeLayout.render('App_body', { main: 'bucket_list' });
	},
});

FlowRouter.route('/memories', {
	name: 'App.memories',
	action() {
		BlazeLayout.render('App_body', { main: 'my_memories' });
	},
});

FlowRouter.route('/challenges', {
	name: 'App.challenges',
	action() {
		BlazeLayout.render('App_body', { main: 'challenges' });
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