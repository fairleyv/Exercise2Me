import { Title, Paper, Divider} from '@mantine/core';
import classes from './PaperForRoutine.module.css';

import { MyListExercise } from './MyListExercise';
import { ExerciseList } from './ExerciseList';

export function PaperForRoutine() {
  return (
    <>
      <Paper shadow="lg" p="xl">
        <h2 className={classes.titleText}>
        Organize your routine for the day:
        </h2>
        <Divider my="md" />
        <MyListExercise></MyListExercise>
      </Paper>
      </>
  );
}