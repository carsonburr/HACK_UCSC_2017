import './list_item.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bucket_List } from '../../startup/client/local_collections.js';
import { My_Memories } from '../../startup/client/local_collections.js';

Template.list_item.helpers({
	picture() {
		return this.picture;
	},
	name() {
		return this.name;
	},
});

Template.list_item.events({
	'click #bucket_button'(event, template) {
		Bucket_List.insert({
			name: this.name,
			picture: this.picture,
		});
	},
	'click #memory_button'(event, template) {
		My_Memories.insert({
			name: this.name,
			picture: this.picture,
		});
	},
});