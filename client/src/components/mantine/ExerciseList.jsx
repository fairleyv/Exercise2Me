import { Title, Paper, Divider, UnstyledButton } from '@mantine/core';

export function ExerciseList() {
    return (
        <>
      <Paper shadow="lg" p="xl">
        <Title order={3}>
         List of Upper Body exercises:
        </Title>
        <Divider my="md" />
        <UnstyledButton>
          Biceps Curls
        </UnstyledButton>
        <Divider my="md" />
        <UnstyledButton>
          Overhead Press
        </UnstyledButton>
        <Divider my="md" />
        <UnstyledButton>
          Pushup
        </UnstyledButton>
        <Divider my="md" />
        <UnstyledButton>
          Triceps Kickback
        </UnstyledButton>
        <Divider my="md" />
        <UnstyledButton>
          Bench press
        </UnstyledButton>
      </Paper>
      </>
    );
  }