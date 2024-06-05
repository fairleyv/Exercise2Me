
import { IconHeart } from '@tabler/icons-react';

import { IconBarbell, IconChartBarPopular } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './ExerciseCard.module.css';

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'Verudela Beach',
  country: 'Croatia',
  description:
    'Stand with feet shoulder-width apart, holding dumbbells with arms fully extended and palms facing forward. Keep elbows close to your torso. Curl the weights by contracting your biceps until the dumbbells reach shoulder level, exhaling as you lift. Pause and squeeze your biceps at the top, then slowly lower the dumbbells back while inhaling. Repeat for desired reps. Avoid swinging your body or using momentum.',
//   badges: [
//     { emoji: '☀️', label: 'Sunny weather' },
//     { emoji: '🦓', label: 'Onsite zoo' },
//     { emoji: '🌊', label: 'Sea' },
//     { emoji: '🌲', label: 'Nature' },
//     { emoji: '🤽', label: 'Water sports' },
//   ],
};

export function ExerciseCard() {
  const { image, title, description, country, badges } = mockdata;
//   const features = badges.map((badge) => (
//     <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
//       {badge.label}
//     </Badge>
//   ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>



      {/* <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section> */}

       
    <Card.Section className={classes.section}>
        <div className={classes.iconContainer}>
            <div>
                <IconBarbell className={classes.like} stroke={1.5} />
                <h6>Dumbbells</h6>
            </div>
            <div>
                <IconChartBarPopular className={classes.like} stroke={1.5} />
                <h6>Easy</h6>
            </div>
        </div>
     </Card.Section>
       

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconBarbell className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}