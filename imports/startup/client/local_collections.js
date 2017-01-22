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

export const Bucket_List = new AttractionsCollection(null);
export const My_Memories = new AttractionsCollection(null);

Bucket_List.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  name: { type: String },
  picture: { type: String },
});

Bucket_List.attachSchema(Bucket_List.schema);

Bucket_List.publicFields = {
  name: 1,
  picture: 1,
};

My_Memories.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  name: { type: String },
  picture: { type: String },
});

My_Memories.attachSchema(My_Memories.schema);

My_Memories.publicFields = {
  name: 1,
  picture: 1,
};