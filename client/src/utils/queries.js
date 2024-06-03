import { gql } from '@apollo/client';

export const QUERY_GET_USER_BY_ID = gql`
{
    getUserById {
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
            exerciseName
            description
        }
    }
}
`;