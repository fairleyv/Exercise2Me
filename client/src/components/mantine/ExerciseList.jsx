import { Title, Paper, Divider, UnstyledButton } from '@mantine/core';
import { ExerciseContext } from '../../context/exerciseContext';
import { useEffect, useState, useContext } from 'react';

export function ExerciseList() {
  const { groupSearchFormatted, exerciseChoice, selectedExerciseFormatted } = useContext(ExerciseContext);
  // const { setSelectedExercise } = useContext(ExerciseContext);

  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    setExercises(groupSearchFormatted)
    // console.log(groupSearchFormatted);
    // console.log(exercises);
  }, [groupSearchFormatted])
  // get group name to appear
  const groupName = exercises.length > 0 ? exercises[1].groupName : '';

  const handleExerciseClick = (exercise) => {
    exerciseChoice(exercise.exerciseName);
  };

  // handle onClick event for selected exercise
  const featured = groupSearchFormatted.map((exercise) => (
    <>
      <Divider my="md" />
      <UnstyledButton onClick={() => handleExerciseClick(exercise)}>
      {/* <UnstyledButton> */}
        {exercise.exerciseName}
      </UnstyledButton>
    </>
  ))

  return (
    <>
      <Paper shadow="lg" p="xl">
        <Title order={3}>
          List of {groupName ? `${groupName}` : ''} exercises:
        </Title>
        {featured}
      </Paper>
    </>
  );
}
