import { Title, Paper, Divider, UnstyledButton } from '@mantine/core';
import { ExerciseContext } from '../../context/exerciseContext';
import { useEffect, useState, useContext } from 'react';


// const data = {
//     exercises: [
//       "Biceps Curls", 
//       "Overhead Press", 
//       "Pushup",
//       "Triceps Kickback",
//       "Bench press"
//     ]
// }

export function ExerciseList() {
  const { groupSearchFormatted } = useContext(ExerciseContext);
  // const { exercises } = data;
const [exercises, setExercises] = useState([]);
useEffect(() => {
  setExercises(groupSearchFormatted)
  console.log(groupSearchFormatted);
  console.log(exercises);
}, [groupSearchFormatted])

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
         List of Upper Body exercises:
        </Title>
        {featured}
      </Paper>
      </>
  );
}


// old code:

// export function ExerciseList() {
//     return (
//         <>
//       <Paper shadow="lg" p="xl">
//         <Title order={3}>
//          List of Upper Body exercises:
//         </Title>
//         <Divider my="md" />
//         <UnstyledButton>
//           Biceps Curls
//         </UnstyledButton>
//         <Divider my="md" />
//         <UnstyledButton>
//           Overhead Press
//         </UnstyledButton>
//         <Divider my="md" />
//         <UnstyledButton>
//           Pushup
//         </UnstyledButton>
//         <Divider my="md" />
//         <UnstyledButton>
//           Triceps Kickback
//         </UnstyledButton>
//         <Divider my="md" />
//         <UnstyledButton>
//           Bench press
//         </UnstyledButton>
//       </Paper>
//       </>
//     );
//   }