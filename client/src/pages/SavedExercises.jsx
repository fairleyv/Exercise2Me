import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import {useContext} from 'react';
import { ExerciseContext } from '../context/exerciseContext';
import { useQuery } from '@apollo/client';
import { QUERY_GET_USER_BY_USERNAME } from '../utils/queries';
import { deleteSavedExerciseId } from '../utils/localStorage';
import Auth from '../utils/auth';

const SavedExercises = () => {
  const { loading, data } = useQuery(QUERY_GET_USER_BY_USERNAME);
  const {handleDeleteSavedExercise} = useContext(ExerciseContext);

  const userData = data?.me || {};

  // create function that accepts the Exercise's mongo _id value as param and deletes the Exercise from the database
  const handleDeleteExercise = async (exerciseId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await handleDeleteSavedExercise(exerciseId);

    // upon success, delete exercise's id from localStorage
    deleteSavedExerciseId(exerciseId);
    } catch (err) {
      console.error(err);
    }

  if (loading) {
    return <h2>LOADING...</h2>;
  }


  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing {userData.username}'s Routine!</h1>
        </Container>
      </div>
      <Container>
        {/* <h2 className='pt-5'>
          {userData.savedExercises.length
            ? `Viewing ${userData.savedExercises.length} saved ${userData.savedExercises.length === 1 ? 'exercise' : 'exercises'}:`
            : 'You have no saved exercises!'}
        </h2> */}
        <Row>
          {userData.savedExercises?.map((exercise) => {
            return (
              <Col md="4">
                <Card key={exercise.exerciseId} border='dark'>
                  {exercise.image ? <Card.Img src={exercise.image} alt={`${exercise.exerciseName}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{exercise.exerciseName}</Card.Title>
                    <p className='small'>Equipment: {exercise.equipmentNeeded}</p>
                    <Card.Text>{exercise.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteExercise(exercise.exerciseId)}>
                     delete this Exercise!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
};

export default SavedExercises;