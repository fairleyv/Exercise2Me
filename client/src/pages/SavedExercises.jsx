import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_USER_BY_ID } from '../utils/queries';
import { DELETE_SAVED_EXERCISE } from '../utils/mutations';
import { deleteSavedExerciseId } from '../utils/localStorage';
import Auth from '../utils/auth';

const SavedExercises = () => {
  const { loading, error, data } = useQuery(QUERY_GET_USER_BY_ID);
  const  [deleteSavedExercise] = useMutation(DELETE_SAVED_EXERCISE);

  if (loading) return <h2>LOADING...</h2>;
  if (error) return <Alert variant='danger'>Error loading data!</Alert>;
  
  const userData = data?.me || {};

  // create function that accepts the Exercise's mongo _id value as param and deletes the Exercise from the database
  const handleDeleteExercise = async (exerciseId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteSavedExercise({
        variables: { exerciseId },
      });

      // upon success, delete exercise's id from localStorage
     deleteSavedExerciseId(exerciseId);
    } catch (err) {
      console.error(err);
    }
  };

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
        <h2 className='pt-5'>
          {userData.savedExercises?.length
            ? `Viewing ${userData.savedExercises.length} saved ${userData.savedExercises.length === 1 ? 'exercise' : 'exercises'}:`
            : 'You have no saved exercises!'}
        </h2>
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

export default SavedExercises;
