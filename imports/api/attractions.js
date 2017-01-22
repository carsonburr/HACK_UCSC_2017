import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class AttractionsCollection extends Mongo.Collection {
	insert(attraction, callback) {
		const ourAttraction = attraction;
		if (!ourAttraction) {
			let nextLetter = 'A';
			ourAttraction.name = 'Undefined Attraction ${nextLetter}';
			
			while (!!this.findOne({ name: ourAttraction.name })) {
				nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
				ourAttraction.name = 'Undefined Attraction ${nextLetter}';
			}
		}
		
		return super.insert(ourAttraction, callback);
	}
	
	remove(selector, callback) {
		return super.remove(selector, callback);
	}
}

export const Attractions = new AttractionsCollection('Attractions');

Attractions.deny({
  insert() { return true; },
  remove() { return true; },
});

Attractions.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  name: { type: String },
  tags: { type: [String] },
  picture: { type: String },
});

Attractions.attachSchema(Attractions.schema);

Attractions.publicFields = {
  name: 1,
  tags: 1,
  picture: 1,
};