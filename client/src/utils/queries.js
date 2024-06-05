import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        savedExercises {
            exerciseId
            exerciseName
            equipmentNeeded
            description
            difficulty
            image
            group {
                exerciseName
                description
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
