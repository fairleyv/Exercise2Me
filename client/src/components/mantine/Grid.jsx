import { Grid, Container } from '@mantine/core';

import { ExerciseCard } from './ExerciseCard';

import { ListExercise } from './ListExercise'





export default function Demo() {
  return (
    <>
        {/* <DragDropContext> */}
    <Grid justify="space-around">
      <Grid.Col span={{ base: 12, md: 5}}>

        <Container fluid> <ListExercise></ListExercise> </Container>
        </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5}}>
      <Container fluid> <ExerciseCard></ExerciseCard> </Container>
      </Grid.Col>
    </Grid>
        {/* </DragDropContext> */}
    </>
  );
}

