const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedExercises: [Exercise]!
    favoriteExercises: [Exercise]!
  }

  type Group {
    groupName: String!
    description: String!
  }

  type Exercise {
    _id: ID
    description: String!
    image: String
    equipmentNeeded: String!
    difficulty: String!
    exerciseName: String!
    group: [Group]!
  }

    type Auth {
    token: ID!
    user: User
  }


  type Query {
    getUserByUsername(username: String!): User
    getAllExercises: [Exercise]!
    getExerciseById(_id: ID!): Exercise
    getExerciseByGroup(groupName: String!): [Exercise]
    getExerciseByExerciseName(exerciseName: String!): [Exercise]

  }

    type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveExercise(userId: ID!, exerciseId: ID!): User
    favoriteExercise(userId: ID!, exerciseId: ID!): User
    deleteSavedExercise(userId: ID!, exerciseId: ID!): User
    deleteFavoriteExercise(userId: ID!, exerciseId: ID!): User
  }

`;

module.exports = typeDefs;