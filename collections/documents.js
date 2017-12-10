import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Documents = new Mongo.Collection('documents');

// Creating the data schema
Documents.attachSchema(new SimpleSchema({
  clientname: {
    label: "Client Name",
    type: String,
    max: 100
  },
  clientage: {
  	label: "Client Age",
    type: Number,
  },

},
{ tracker: Tracker }));