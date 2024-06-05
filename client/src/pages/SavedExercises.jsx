import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
// TODO change paths to queries and mutations
import { getMe, deleteExercise } from '../utils/API';
import Auth from '../utils/auth';
import { removeExerciseId } from '../utils/localStorage';

const SavedExercises = () => {
  const [userData, setUserData] = useState({});

<<<<<<< Updated upstream
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);
=======
  const userData = data?.user || {};

>>>>>>> Stashed changes

  // create function that accepts the Exercise's mongo _id value as param and deletes the Exercise from the database
  const handleDeleteExercise = async (exerciseId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteExercise(exerciseId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove Exercise's id from localStorage
      removeExerciseId(exerciseId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing your Routine!</h1>
        </Container>
      </div>
      <Container>

        {/* <h2 className='pt-5'>

          {userData.savedExercises.length
            ? `Viewing ${userData.savedExercises.length} saved ${userData.savedExercises.length === 1 ? 'exercise' : 'exercises'}:`
            : 'You have no saved exercises!'}
        </h2> */}
        <Row>
          {userData.savedExercises.map((Exercise) => {
            return (
              <Col md="4">
<<<<<<< Updated upstream
                <Card key={Exercise.exerciseId} border='dark'>
                  {Exercise.image ? <Card.Img src={Exercise.image} alt={`${Exercise.name}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{Exercise.name}</Card.Title>
                    <p className='small'>Equipment: {Exercise.equipmentNeeded}</p>
                    <Card.Text>{Exercise.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteExercise(Exercise.exerciseId)}>
                      Delete this Exercise!
=======
                <Card key={exercise._id} border='dark'>
                  {exercise.image ? <Card.Img src={exercise.image} alt={`${exercise.exerciseName}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{exercise.exerciseName}</Card.Title>
                    <p className='small'>Equipment: {exercise.equipmentNeeded}</p>
                    <Card.Text>{exercise.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteExercise(exercise.exerciseId)}>
                     delete this Exercise!
>>>>>>> Stashed changes
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
