import './my_memories.html';

import '../components/list_item.js';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { My_Memories } from '../../startup/client/local_collections.js';

Template.my_memories.helpers({
	item() {
		return My_Memories.find({});
	},
});