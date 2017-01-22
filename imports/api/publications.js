import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Attractions } from './attractions.js';

Meteor.publish('search', function (searchValue){
	if (!searchValue) {
		return Attractions.find({});
	}
	
	return Attractions.find(
	{ $text: {$search: searchValue} },
	{
		fields: {
			score: {$meta: "textScore" }
		},
		
		sort: {
			score: { $meta: "textScore"}
		}
	}
	);
});