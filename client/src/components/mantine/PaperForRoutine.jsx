import { Title, Paper, Divider} from '@mantine/core';

import classes from './PaperForRoutine.module.css';

import {MyListExercise} from './MyListExercise';

export function PaperForRoutine() {
  return (
    <>
      <Paper shadow="lg" p="xl">
        <h3 className={classes.titleText}>
        Organize your routine for the day:
        </h3>
        <Divider my="md" />
        <MyListExercise></MyListExercise>
      </Paper>
      </>
  );
}