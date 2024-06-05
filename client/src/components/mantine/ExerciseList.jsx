import { Title, Paper, Divider, UnstyledButton } from '@mantine/core';

const data = {
    exercises: [
      "Biceps Curls", 
      "Overhead Press", 
      "Pushup",
      "Triceps Kickback",
      "Bench press"
    ]
}

export function ExerciseList() {
  const { exercises } = data;

  const featured = exercises.map((exercise) => (
    <>
    <Divider my="md" />
    <UnstyledButton>
      {exercise}
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