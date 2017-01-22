import './bucket_list.html';

import '../components/list_item.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bucket_List } from '../../startup/client/local_collections.js';

Template.bucket_list.helpers({
	item() {
		return Bucket_List.find({});
	},
});