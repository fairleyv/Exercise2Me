const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import model from Exercise.js
const Exercise = require('./Exercise');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedExercises to be an array of data that adheres to the exerciseSchema
    savedExercises: [{
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    }],
    // set favoriteExercises to be an array of data that adheres to the exerciseSchema
    favoriteExercises: [{
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    }]

  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `savedExerciseCount` with the number of saved exercises we have
userSchema.virtual('savedExerciseCount').get(function () {
  return this.savedExercises.length;
});

// when we query a user, we'll also get another field called `favoriteExerciseCount` with the number of favorite exercises we have

userSchema.virtual('favoriteExerciseCount').get(function () {
  return this.favoriteExercises.length;
});

const User = model('User', userSchema);

module.exports = User;