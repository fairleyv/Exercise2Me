import React, { createContext, useEffect, useState } from 'react';
import { GET_EXERCISE_BY_GROUP } from '../utils/queries';
import {SAVE_EXERCISE, DELETE_SAVED_EXERCISE} from '../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
const ExerciseProvider = ({ children }) => {
    const [groupSearchFormatted, setGroupSearchFormatted] = useState([]);


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

    const [saveExercise] = useMutation(SAVE_EXERCISE);
    const [deleteSavedExercise] = useMutation(DELETE_SAVED_EXERCISE);

    const formatData = (data) => {

        let dataArray = data?.getExerciseByGroup;
        if (data.getExerciseByGroup) {
            setGroupSearchFormatted(dataArray.map((exercise) => ({
                exerciseId: exercise._id,
                equipmentNeeded: exercise.equipmentNeeded || ['No equipment to display'],
                exerciseName: exercise.exerciseName,
                description: exercise.description,
                difficulty: exercise.difficulty,
                image: exercise.image || '',
            })));
        }
    }
    console.log(groupSearchFormatted);


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