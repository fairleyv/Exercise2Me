const { Schema, model } = require('mongoose');

// Group subschema to be used in the exerciseSchema

const groupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

// Schema for exercise Model
const exerciseSchema = new Schema({
  description: {
    type: String,
    required: true,
  },  
  image: {
    type: String,
  },
  equipmentNeeded: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true
  },
  exerciseName: {
    type: String,
    required: true,
  },
  group: [groupSchema]
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;