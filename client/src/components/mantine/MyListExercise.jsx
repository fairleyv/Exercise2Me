import {clsx} from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './MyListExercise.module.css';
import { useEffect } from 'react';

const data = [
  { difficulty: "Easy", equipmentNeeded: "dumbell", image: 'C', ExerciseName: 'Bicep Curls' },
  { difficulty: "Intermediate", equipmentNeeded: "kettlebell", image: 'N', ExerciseName: 'Lateral Raises' },
  { difficulty: "Intermediate", equipmentNeeded: "ropes", image: 'Y', ExerciseName: 'Alternating Waves' },
  { difficulty: "Hard", equipmentNeeded: "Pullup Bar", image: 'Ba', ExerciseName: 'Pull Ups' },
  { difficulty: "Easy", equipmentNeeded: "None", image: 'Ce', ExerciseName: 'Pushups' },
];

export function MyListExercise() {
  const [state, handlers] = useListState(
    () => JSON.parse(localStorage.getItem('exerciseData')) || data);

    useEffect(() => {
    localStorage.setItem('exerciseData', JSON.stringify(state));
  }, [state]);


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
            <h2 weight={500} size="lg" style={{ marginRight: '20px' }}>{index + 1}</h2> {/* Rank displayed based on current index */}
            
            <div style={{ 
              borderRadius: '1px',
              width: '100%'
          }}>
              <h3 size="xl" className={classes.dropText}>{item.ExerciseName}</h3>
              {/* <Text c="dimmed" size="sm">
                Difficulty Level: {item.difficulty} • Equipment Needed: {item.equipmentNeeded}
              </Text> */}
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