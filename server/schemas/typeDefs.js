const typeDefs = `
  type userSchema {
    _id: ID
    username: String
    email: String
    password: String
    savedExercises: [exerciseSchema]!
    favoriteExercises: [exerciseSchema]!
  }

  type exerciseSchema {
    _id: ID
    description: String!
    exerciseId: String!
    image: String
    equipmentNeeded: [String]
    difficulty: String!
    exerciseName: String!
  }

  type Query {
    getAllUsers: [userSchema]!
    getUserById(userId: ID!): userSchema
    getAllExercises: [exerciseSchema]!
    getExerciseById(exerciseId: ID!): exerciseSchema

  }

`;

module.exports = typeDefs;