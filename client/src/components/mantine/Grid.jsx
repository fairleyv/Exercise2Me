import { Grid, Container } from '@mantine/core';

import { ExerciseCard } from './ExerciseCard';
import { ExerciseList } from './ExerciseList';

import classes from './Grid.module.css';

import {MyListExercise} from './MyListExercise';


export default function Demo() {
  return (
    <>
    <Grid className={classes.list} justify="space-around">
      <Grid.Col span={{ base: 12, md: 5}}>
        <Container fluid><MyListExercise></MyListExercise></Container>
        </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5}}>
      <Container fluid> <ExerciseCard></ExerciseCard> </Container>
      </Grid.Col>
    </Grid>
    </>
  );
}

