const { User, Exercise } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getUserByUsername: async (parent, { username }) => {
            const user = await User.findOne({username}).populate('savedExercises');
            return user;
        },      
        getAllExercises: async (parent, {}) => {
            return Exercise.find();
        },
        getExerciseById: async(parent, {_id }) => {
            return Exercise.findById(_id);
        },
        getExerciseByGroup: async (parent, { groupName }) => {
            return Exercise.find({ "group.groupName": groupName });
        },
        getExerciseByExerciseName: async (parent, { exerciseName }) => {
            return Exercise.find({ "exerciseName": exerciseName });
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveExercise: async (parent, {userId, exerciseId}, context) => {
            if (!context.user || context.user._id !== userId) {
                throw AuthenticationError;
            };

            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            };

            const exercise = await Exercise.findById(exerciseId);
            if (!exercise) {
                throw new Error('Exercise not found');
            };

            const updatedUser = await User.findOneAndUpdate(
                {_id:userId},
                {$addToSet: {savedExercises: exerciseId}},
                {new: true}
        );
        return updatedUser;
        }, 
        favoriteExercise: async (parent, { userId, exerciseId }, context) => {
            if (!context.user || context.user._id !== userId) {
                throw AuthenticationError;
            };

            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            };

            const exercise = await Exercise.findById(exerciseId);
            if (!exercise) {
                throw new Error('Exercise not found');
            };

            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { favoriteExercises: exerciseId } },
                {new: true}
            );
            return updatedUser;
        },
        deleteSavedExercise: async (parent, { userId, exerciseId }, context) => {
            if (!context.user || context.user._id !== userId) {
                throw AuthenticationError;
            };

            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            };

            const exercise = await Exercise.findById(exerciseId);
            if (!exercise) {
                throw new Error('Exercise not found');
            };

            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedExercises: exerciseId } },
                {new: true}
            );
            return updatedUser;
        },
        deleteFavoriteExercise: async (parent, { userId, exerciseId }, context) => {
            if (!context.user || context.user._id !== userId) {
                throw AuthenticationError;
            };

            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            };

            const exercise = await Exercise.findById(exerciseId);
            if (!exercise) {
                throw new Error('Exercise not found');
            };

            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { favoriteExercises: exerciseId } },
                {new: true}
            );
            return updatedUser;
        },
    }
};




module.exports = resolvers;