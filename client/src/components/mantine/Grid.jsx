import { Grid, Container } from '@mantine/core';

import { ExerciseCard } from './ExerciseCard';
import { ExerciseList } from './ExerciseList';

import classes from './Grid.module.css';


export default function Demo() {
  return (
    <>
    <Grid className={classes.list} justify="space-around">
      <Grid.Col span={{ base: 12, md: 5}}>
        <Container fluid><ExerciseList></ExerciseList></Container>
        </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5}}>
      <Container fluid> <ExerciseCard></ExerciseCard> </Container>
      </Grid.Col>
    </Grid>
    </>
  );
}

