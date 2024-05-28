const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedExercises` array in User.js
const exerciseSchema = new Schema({
  description: {
    type: String,
    required: true,
  },  
  exerciseId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  equipmentNeeded: [{
    type: String
  }],
  difficulty: {
    type: String,
    required: true
  },
  exerciseName: {
    type: String,
    required: true,
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;