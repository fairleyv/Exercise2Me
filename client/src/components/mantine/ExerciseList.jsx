import { Title, Paper, Divider, UnstyledButton } from '@mantine/core';
import { ExerciseContext } from '../../context/exerciseContext';
import { useEffect, useState, useContext } from 'react';

export function ExerciseList() {
  const { groupSearchFormatted } = useContext(ExerciseContext);

  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    setExercises(groupSearchFormatted)
    console.log(groupSearchFormatted);
    console.log(exercises);
  }, [groupSearchFormatted])
  // get group name to appear
  const groupName = exercises.length > 0 ? exercises[1].groupName : '';
  console.log(groupName);

  const featured = exercises.map((exercise) => (
    <>
      <Divider my="md" />
      <UnstyledButton>
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