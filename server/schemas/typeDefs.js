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

    type Auth {
    token: ID!
    user: User
  }


  type Query {
    getAllUsers: [userSchema]!
    getUserById(userId: ID!): userSchema
    getAllExercises: [exerciseSchema]!
    getExerciseById(exerciseId: ID!): exerciseSchema

  }

    type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;