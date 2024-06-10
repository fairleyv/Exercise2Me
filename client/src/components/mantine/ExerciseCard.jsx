import { IconBarbell, IconChartBarPopular } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './ExerciseCard.module.css';
import { ExerciseContext } from '../../context/exerciseContext';
import { useEffect, useState, useContext } from 'react';

// have selectedExercise onClick
export function ExerciseCard() {

  const { selectedExerciseFormatted } = useContext(ExerciseContext);
  // map data
  console.log(selectedExerciseFormatted);

  // console.log(data2.getExerciseByExerciseName);

  const selected = selectedExerciseFormatted.map((selectedExercise) => (
    <>
      <Card.Section>
        <Image src="https://steelsupplements.com/cdn/shop/articles/shutterstock_657941434_376ae0c9-1a39-42d3-bc39-3eaf18d5038f_1000x.jpg?v=1641548776" alt={selectedExercise.exerciseName} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {selectedExercise.exerciseName}
          </Text>
          <Badge size="sm" variant="light" color="purple" >
            {selectedExercise.groupName}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {selectedExercise.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <div className={classes.iconContainer}>
          <div>
            <IconBarbell className={classes.like} stroke={1.5} />
            <h6>{selectedExercise.equipmentNeeded}</h6>
          </div>
          <div>
            <IconChartBarPopular className={classes.like} stroke={1.5} />
            <h6>{selectedExercise.difficulty}</h6>
          </div>
        </div>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} color="#198754">
          Save to My Routine
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconBarbell className={classes.like} stroke={1.5} />
          </ActionIcon> */}
      </Group>
    </>
  ))

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        {selected}
      </Card>
    </>
  );
}

// const { selectedExerciseFormatted } = useContext(ExerciseContext);

// const [selectedExercise, setSelectedExercise] = useState([]);

// useEffect(() => {
//   setSelectedExercise(selectedExerciseFormatted)
// }, [selectedExerciseFormatted]);

//   return (
//     <>
//       {selectedExercise ? (
//         <Card withBorder radius="md" p="md" className={classes.card}>
//           <Card.Section>
//             <Image src={selectedExercise.image} alt={selectedExercise.exerciseName} height={180} />
//           </Card.Section>

//           <Card.Section className={classes.section} mt="md">
//             <Group justify="apart">
//               <Text fz="lg" fw={500}>
//                 {selectedExercise.exerciseName}
//               </Text>
//               <Badge size="sm" variant="light" color="purple">
//                 {/* {selectedExercise[1].groupName} */}
//               </Badge>
//             </Group>
//             <Text fz="sm" mt="xs">
//               {selectedExercise.description}
//             </Text>
//           </Card.Section>

//           <Card.Section className={classes.section}>
//             <div className={classes.iconContainer}>
//               <div>
//                 <IconBarbell className={classes.like} stroke={1.5} />
//                 <h6>{selectedExercise.equipmentNeeded}</h6>
//               </div>
//               <div>
//                 <IconChartBarPopular className={classes.like} stroke={1.5} />
//                 <h6>{selectedExercise.difficulty}</h6>
//               </div>
//             </div>
//           </Card.Section>

//           <Group mt="xs">
//             <Button radius="md" style={{ flex: 1 }} color="#198754">
//               Save to My Routine
//             </Button>
//           </Group>
//         </Card>
//       ) : (
//         <div>
//           {selectedExerciseFormatted.map((exercise, index) => (
//             <Card withBorder radius="md" p="md" className={classes.card} key={index} onClick={handleOnClick}>
//               <Card.Section>
//                 <Image src={exercise.image} alt={exercise.exerciseName} height={180} />
//               </Card.Section>

//               <Card.Section className={classes.section} mt="md">
//                 <Group justify="apart">
//                   <Text fz="lg" fw={500}>
//                     {exercise.exerciseName}
//                   </Text>
//                   <Badge size="sm" variant="light" color="purple">
//                     {exercise.group.groupName}
//                   </Badge>
//                 </Group>
//                 <Text fz="sm" mt="xs">
//                   {exercise.description}
//                 </Text>
//               </Card.Section>

//               <Card.Section className={classes.section}>
//                 <div className={classes.iconContainer}>
//                   <div>
//                     <IconBarbell className={classes.like} stroke={1.5} />
//                     <h6>{exercise.equipmentNeeded}</h6>
//                   </div>
//                   <div>
//                     <IconChartBarPopular className={classes.like} stroke={1.5} />
//                     <h6>{exercise.difficulty}</h6>
//                   </div>
//                 </div>
//               </Card.Section>
//             </Card>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }