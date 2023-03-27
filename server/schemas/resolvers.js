const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //"me" querys queries mongo db and finds user based on context user id
    me: async (args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Yo homie. You gotta login.');
    },
  },

  Mutation: {
    // addUser, login, addBook, removeBook
  }
};

module.exports = resolvers;
