const { User, Exercise } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find().populate('users');
        },
        getUserById: async (parent, { _id }) => {
            return User.findOne({ _id }).populate('user');
        },
        getAllExercises: async () => {
            return Exercise.find().populate('exercises');
        },
        getExerciseById: async (parent, { exerciseId }) => {
            return Thought.findOne({ _id: exerciseId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedExercises');
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
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
    }
};




module.exports = resolvers;