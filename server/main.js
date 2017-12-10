import { Meteor } from 'meteor/meteor';
import { Documents } from '../collections/documents.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    'saveDocument': function(text, number){

   	// Save document to database
    Documents.insert({
    	clientname: text,
    	clientage: number}, 
    	function(error, result) {
	});
    }
});