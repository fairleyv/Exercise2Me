import { Grid, Container } from '@mantine/core';

import { ExerciseCard } from './ExerciseCard';


export default function Demo() {
  return (
    <>
    <Grid justify="space-around">
      <Grid.Col span={{ base: 12, md: 5}}>
        <Container fluid> Hello </Container>
        </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5}}>
      <Container fluid> <ExerciseCard></ExerciseCard> </Container>
      </Grid.Col>
    </Grid>
    </>
  );
}

