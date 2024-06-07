import { clsx } from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './MyListExercise.module.css';

const data = [
  { difficulty: "Easy", equipmentNeeded: "dumbell", image: 'C', ExerciseName: 'Bicep Curls' },
  { difficulty: "Intermediate", equipmentNeeded: "kettlebell", image: 'N', ExerciseName: 'Lateral Raises' },
  { difficulty: "Intermediate", equipmentNeeded: "ropes", image: 'Y', ExerciseName: 'Alternating Waves' },
  { difficulty: "Hard", equipmentNeeded: "Pullup Bar", image: 'Ba', ExerciseName: 'Pull Ups' },
  { difficulty: "Easy", equipmentNeeded: "None", image: 'Ce', ExerciseName: 'Pushups' },
];

export function MyListExercise() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.image} index={index} draggableId={item.image}>
      {(provided, snapshot) => (
        <div
          className={clsx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* <Text className={classes.image}>{item.image}</Text> */}
          <div style={{ padding: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
            <Text weight={500} size="lg" style={{ marginRight: '20px' }}>{index + 1}</Text> {/* Rank displayed based on current index */}
            
          <div style={{ //border color and size styling
            border: '1px solid black',
            padding: '10px',
            borderRadius: '5px',
            width: '100%'
        }}>
            <Text size="xl">{item.ExerciseName}</Text>
            <Text c="dimmed" size="sm">
              Difficulty Level: {item.difficulty} • Equipment Needed: {item.equipmentNeeded}
            </Text>
          </div>
        </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => 
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}