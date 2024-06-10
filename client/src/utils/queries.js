import { gql } from '@apollo/client';

export const QUERY_GET_USER_BY_USERNAME = gql`
query Query($username: String!) {
  getUserByUsername(username: $username) {
    _id
    username
    email
    password
    savedExercises {
      _id
      description
      image
      equipmentNeeded
      difficulty
      exerciseName
      group {
        groupName
      }
    }
  }
}
`;

export const QUERY_GET_ALL_EXERCISES = gql`
{
    getAllExercises {
        _id
        exerciseName
        equipmentNeeded
        description
        difficulty
        image
        group {
            groupName
            description
        }
    }
}
`;

export const GET_EXERCISE_BY_GROUP = gql `
query Query($groupName: String!) {
  getExerciseByGroup(groupName: $groupName) {
    _id
    description
    image
    equipmentNeeded
    difficulty
    exerciseName
    group {
      groupName
      description
    }
  }
}
`

export const GET_EXERCISE_BY_EXERCISENAME = gql `
query Query($exerciseName: String!) {
  getExerciseByExerciseName(exerciseName: $exerciseName) {
    _id
    description
    image
    equipmentNeeded
    difficulty
    exerciseName
    group {
      groupName
      description
    }
  }
}
`