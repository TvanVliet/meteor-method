import { Template } from 'meteor/templating';
import { Documents } from '../../collections/documents.js';

import './body.html';
import '../../collections/documents.js'


Template.body.events({
  'submit #form1'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form elements
    const target = event.target;
    const text = target.text.value;
    const number = target.number.value;
 
    Meteor.call('saveDocument', text, number);
 
    // Clear form
    target.text.value = '';
    target.number.value = '';

  },
});