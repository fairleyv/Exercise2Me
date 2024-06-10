import React, { createContext, useEffect, useState } from 'react';
import { GET_EXERCISE_BY_GROUP, QUERY_GET_USER_BY_USERNAME, GET_EXERCISE_BY_EXERCISENAME } from '../utils/queries';
import { SAVE_EXERCISE, DELETE_SAVED_EXERCISE } from '../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ExerciseList } from '../components/mantine/ExerciseList';

// Create the context
export const ExerciseContext = createContext();

// Create the provider component
const ExerciseProvider = ({ children }) => {
    const [groupSearchFormatted, setGroupSearchFormatted] = useState([]);
    const [userData, setUserData] = useState([]);
    const [selectedExerciseFormatted, setSelectedExerciseFormatted] = useState([]);
    
    const loggedIn = Auth.loggedIn(); // Check if the user is logged in
    //TODO have selectedExercise set but I'm not getting it from ExerciseList
    const [selectedExercise, setSelectedExercise] = useState([]);
    const [exercisesByGroup, setExercisesByGroup] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    
    
    const [getExerciseByGroup, { loading, error: queryError, data: exerciseDataByGroup }] = useLazyQuery(GET_EXERCISE_BY_GROUP, {
        variables: {
            groupName: searchInput
        },
    });
    const [getExerciseByName, { loadingAgain, error: exerciseError, data: selectedExerciseData }] = useLazyQuery(GET_EXERCISE_BY_EXERCISENAME, {
        variables: {
            exerciseName: selectedExercise
        },
    });
    const [userQueryData, { error, data }] = useLazyQuery(QUERY_GET_USER_BY_USERNAME, {
        variables: { username: loggedIn ? Auth.getProfile().data.username : null },
        skip: !loggedIn, // Skip the query if the user is not logged in
    });
    const [saveExercise] = useMutation(SAVE_EXERCISE);
    const [deleteSavedExercise] = useMutation(DELETE_SAVED_EXERCISE);

    useEffect(() => {
        if (loggedIn) {
            console.log("Triggering userQueryData...");
            userQueryData(); // Trigger the lazy query
        }
    }, [loggedIn]);

    useEffect(() => {
        if (error) {
            console.error("Query error:", error);
        }
    }, [error]);

    useEffect(() => {
        if (data) {
            setUserData(data.getUserByUsername); // Log the actual data returned by the query
        }

        if (!loadingAgain && selectedExerciseData && data) { // Ensure 'data' from userQueryData is also available
            formatData(selectedExerciseData, data); // Pass the actual data, not the function
        }
    }, [loadingAgain, selectedExerciseData, data]);

    const formatData = (data) => {

        if (!data) return;

        let dataArray = data?.getExerciseByGroup;
        if (data.getExerciseByGroup) {
            setGroupSearchFormatted(dataArray.map((exercise) => ({
                exerciseId: exercise._id,
                equipmentNeeded: exercise.equipmentNeeded || ['No equipment to display'],
                exerciseName: exercise.exerciseName,
                description: exercise.description,
                difficulty: exercise.difficulty,
                image: exercise.image || '',
                groupName: exercise.group[0].groupName,

            })));
        }
    }
    // console.log(groupSearchFormatted);
    // console.log(userData);

    useEffect(() => {
        // console.log(exerciseDataByGroup);
        setTimeout(() => formatData(exerciseDataByGroup), 25)

        // console.log(exerciseDataByGroup.getExerciseByGroup);

    }, [exerciseDataByGroup])

    const exerciseSearch = (input) => {
        // console.log(input);

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

    const exerciseChoice = (selectedExercise) => {
       console.log(selectedExercise);
        getExerciseByName({
        variables: { exerciseName: selectedExercise }
    });
    if (loadingAgain) {
        return <div>Loading...</div>;
    }
    if (exerciseError) {
        return <div>Error...</div>;
    }}
    // TODO For selected exercises getting all the exercises data
    const formatSelectedExercise = (data2) => {
        console.log(data2);
        if (!data2) return;
        let dataArray2 = data2?.getExerciseByName;
        if (data2.getExerciseByName) {
            setSelectedExerciseFormatted(dataArray2.map((exercise) => ({
                exerciseId: exercise._id,
                equipmentNeeded: exercise.equipmentNeeded || ['No equipment to display'],
                exerciseName: exercise.exerciseName,
                description: exercise.description,
                difficulty: exercise.difficulty,
                image: exercise.image || '',
                groupName: exercise.group[0].groupName,
            })));
        }
    }
    useEffect(() => {
        setTimeout(() => formatSelectedExercise(selectedExerciseData), 30)
    }, [selectedExerciseData])

// TODO saave and delete
    const handleSaveExercise = async (exerciseData) => {
        try {
            const { data } = await saveExercise({ variables: { exerciseData } });

        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteSavedExercise = async (exerciseId) => {
        try {
            const { data } = await deleteSavedExercise({ variables: { exerciseId } });
        } catch (err) {
            console.error(err);
        }
    };
    const addExerciseToDatabase = (newTask) => {

    };

    return (
        <ExerciseContext.Provider value={{ exerciseSearch, exercisesByGroup, groupSearchFormatted, exerciseChoice, selectedExercise, setSelectedExercise, selectedExerciseFormatted, userData, handleSaveExercise, handleDeleteSavedExercise }}>
            {children}
        </ExerciseContext.Provider>
    );

};

export { ExerciseProvider };