import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
         token
         user {
            _id
            username
        }
    }
}
`;

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
         token
         user {
            _id
            username
        }
    }
}
`;

export const SAVE_EXERCISE = gql`
    mutation saveExercise($exerciseData: ExerciseInput!) {
        saveExercise(exerciseData: $exerciseData) {
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

export const FAVORITE_EXERCISE = gql`
    mutation favoriteExercise($exerciseData: ExerciseInput!) {
        favoriteExercise(exerciseData: $exerciseData) {
            _id
            username
            email
            favoriteExercises {
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

export const DELETE_SAVED_EXERCISE = gql`
    mutation deleteSavedExercise($exerciseId: ID!) {
        deleteSavedExercise(exerciseId: $exerciseId) {
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

export const DELETE_FAVORITE_EXERCISE = gql`
    mutation deleteFavoriteExercise($exerciseId: ID!) {
        deleteFavoriteExercise(exerciseId: $exerciseId) {
            _id
            username
            email
            favoriteExercises {
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