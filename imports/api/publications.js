import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Attractions } from './attractions.js';

Meteor.publish('attractions', function attractionsPublication(){
	return Attractions.find();
});