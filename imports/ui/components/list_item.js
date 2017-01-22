import './list_item.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Attractions } from '../../api/attractions.js';

Template.list_item.helpers({
	picture() {
		return this.picture;
	},
	name() {
		return this.name;
	},
});