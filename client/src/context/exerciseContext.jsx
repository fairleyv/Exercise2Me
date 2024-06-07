import React, { createContext, useEffect, useState } from 'react';
import { GET_EXERCISE_BY_GROUP, QUERY_GET_USER_BY_USERNAME } from '../utils/queries';
import {SAVE_EXERCISE, DELETE_SAVED_EXERCISE} from '../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
const ExerciseProvider = ({ children }) => {
    const [groupSearchFormatted, setGroupSearchFormatted] = useState([]);
    const [userData, setUserData] = useState([]);

    const loggedIn = Auth.loggedIn(); // Check if the user is logged in


    // const [exercises, setExercises] = useState([
    //     { id: 1, name: 'exercise 1', difficulty: 'easy' },
    //     { id: 2, name: 'exercise 2', difficulty: 'easy' },
    //     { id: 3, name: 'exercise 3', difficulty: 'easy' },
    // ]);


    const [exercisesByGroup, setExercisesByGroup] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    const [getExerciseByGroup, { loading, error: queryError, data: exerciseData }] = useLazyQuery(GET_EXERCISE_BY_GROUP, {
        variables: { groupName: searchInput },
    });
    const [userQueryData, { error, data }] = useLazyQuery(QUERY_GET_USER_BY_USERNAME, {
        variables: { username: loggedIn ? Auth.getProfile().data.username : null },
        skip: !loggedIn, // Skip the query if the user is not logged in
    });
    const [saveExercise] = useMutation(SAVE_EXERCISE);
    const [deleteSavedExercise] = useMutation(DELETE_SAVED_EXERCISE);

    const formatData = (data) => {

        if (!data) return;

        let dataArray = data?.getExerciseByGroup;
        let savedUserData = data.userQueryData;
        if (data.getExerciseByGroup) {
            setGroupSearchFormatted(dataArray.map((exercise) => ({
                exerciseId: exercise._id,
                equipmentNeeded: exercise.equipmentNeeded || ['No equipment to display'],
                exerciseName: exercise.exerciseName,
                description: exercise.description,
                difficulty: exercise.difficulty,
                image: exercise.image || '',
            })));
        };

        if (data.savedUserData) {
            setUserData(savedUserData);
        }
    }
    console.log(groupSearchFormatted);
    console.log(userData);


    useEffect(() => {
        console.log(exerciseData);
        setTimeout(() => formatData(exerciseData), 25)        

        // console.log(exerciseData.getExerciseByGroup);

    }, [exerciseData])

    const exerciseSearch = (input) => {
        console.log(input);

        getExerciseByGroup({
            variables: { groupName: input }
        });
        if (loading) {
            return <div>Loading...</div>;
        }
        if (queryError) {
            return <div>Error...</div>;
        }
    }

    const handleSaveExercise = async (exerciseData) => {
        try {
            const {data} = await saveExercise({ variables: {exerciseData}});

        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteSavedExercise = async (exerciseId) => {
        try {
            const {data} = await deleteSavedExercise({ variables: {exerciseId}});
        } catch (err) {
            console.error(err);
        }
    };
    const addExerciseToDatabase = (newTask) => {

    };

    return (
        <ExerciseContext.Provider value={{ exerciseSearch, exercisesByGroup, groupSearchFormatted, handleSaveExercise, handleDeleteSavedExercise}}>
            {children}
        </ExerciseContext.Provider>
    );

};

export {ExerciseProvider};