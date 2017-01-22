import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Attractions } from './attractions.js';

export const insertAttraction = new ValidatedMethod({
	name: 'attractions.insert',
	validate: Attractions.simpleSchema().pick(['name', 'tags', 'tags.$', 'picture']).validator({ clean: true, filter: true }),
	run({ name, tags, picture }) {
		const attraction = {
			name,
			tags,
			picture,
		}
		
		return Attractions.insert(attraction);
	},
});


export const removeAttraction = new ValidatedMethod({
	name: 'attractions.remove',
	validate: new SimpleSchema({
		attractionId: Attractions.simpleSchema().schema('_id'),
	}).validator({ clean: true, filter: false }),
	run({ attractionId }) {
		const attraction = Attractions.findOne(attractionId);
		
		Attractions.remove(attractionId);
	},
});

const ATTRACTIONS_METHODS = _.pluck([
	insertAttraction,
	removeAttraction,
], 'name');

if (Meteor.isServer) {
	/*DDPRateLimiter.addRule({
		name(name) {
			return _.contains(FLAVORS_METHODS, name);
		},
		
		connectionId() { return true; },
	}, 5, 1000);*/
}