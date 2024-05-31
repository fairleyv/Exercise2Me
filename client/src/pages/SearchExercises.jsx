import { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';


import Auth from '../utils/auth';
// TODO queries and mutations
import { saveExercise } from '../utils/API';
import { saveExerciseIds, getSavedExerciseIds } from '../utils/localStorage';

const SearchExercises = () => {
  // create state for holding returned google api data
  const [searchedExercises, setSearchedExercises] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved ExerciseId values
  const [savedExerciseIds, setSavedExerciseIds] = useState(getSavedExerciseIds());

  // set up useEffect hook to save `savedExerciseIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveExerciseIds(savedExerciseIds);
  });

  // create method to search for Exercises and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchExercises(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const exerciseData = items.map((Exercise) => ({
        exerciseId: Exercise.id,
        equipmentNeeded: Exercise.volumeInfo.equipmentNeeded || ['No equipment to display'],
        name: Exercise.volumeInfo.name,
        description: Exercise.volumeInfo.description,
        image: Exercise.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedExercises(exerciseData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a Exercise to our database
  const handleSaveExercise = async (exerciseId) => {
    // find the Exercise in `searchedExercises` state by the matching id
    const exerciseToSave = searchedExercises.find((Exercise) => Exercise.exerciseId === exerciseId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveExercise(exerciseToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if Exercise successfully saves to user's account, save Exercise id to state
      setSavedExerciseIds([...savedExerciseIds, exerciseToSave.exerciseId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search Exercises</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
              <Form.Control
        as='select'
        name='searchInput'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        size='lg'
        placeholder='Find your exercise'
      >
        <option value='upper'>Upper Body</option>
        <option value='lower'>Lower Body</option>
        <option value='cardio'>Cardio</option>
      </Form.Control>
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedExercises.length
            ? `Viewing ${searchedExercises.length} results:`
            : 'Choose type of exercise to begin'}
        </h2>
        <Row>
          {searchedExercises.map((Exercise) => {
            return (
              <Col md="4" key={Exercise.exerciseId}>
                <Card border='dark'>
                  {Exercise.image ? (
                    <Card.Img src={Exercise.image} alt={`The cover for ${Exercise.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{Exercise.name}</Card.Title>
                    <p className='small'>Equipment: {Exercise.equipmentNeeded}</p>
                    <Card.Text>{Exercise.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedExerciseIds?.some((savedExerciseId) => savedExerciseId === Exercise.exerciseId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveExercise(Exercise.exerciseId)}>
                        {savedExerciseIds?.some((savedExerciseId) => savedExerciseId === Exercise.exerciseId)
                          ? 'This Exercise has already been saved!'
                          : 'Save this Exercise!'}
                      </Button>
                    )}
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

export default SearchExercises;