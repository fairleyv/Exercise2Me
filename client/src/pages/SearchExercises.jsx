import Auth from '../utils/auth';
import { useState, useEffect, useContext } from 'react';

import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';


import { useMutation } from '@apollo/client';
import { SAVE_EXERCISE } from '../utils/mutations';
import { saveExerciseIds, getSavedExerciseIds } from '../utils/localStorage';
import { ExerciseContext } from '../context/exerciseContext';


const SearchExercises = () => {
  const { exerciseSearch, groupSearchFormatted } = useContext(ExerciseContext);
  // create state for holding returned exercise data
  const [searchedExercises, setSearchedExercises] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');


  // create state to hold saved ExerciseId values
  const [savedExerciseIds, setSavedExerciseIds] = useState(getSavedExerciseIds());

  const [saveExercise, { loading: mutationLoading, error: mutationError }] = useMutation(SAVE_EXERCISE);

  // set up useEffect hook to save `savedExerciseIds` list to localStorage on component unmount

  useEffect(() => {
    return () => saveExerciseIds(savedExerciseIds);
  }, [savedExerciseIds]);

  // create method to search for Exercises and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    // how to search in database

    exerciseSearch(searchInput);   
    

    setSearchedExercises(groupSearchFormatted);
    setSearchInput('');

  };

  // create function to handle saving a Exercise to our database
  const handleSaveExercise = async (exerciseId) => {
    // find the Exercise in `searchedExercises` state by the matching id
    const exerciseToSave = searchedExercises.find((exercise) => exercise.exerciseId === exerciseId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await saveExercise({
        variables: { ...exerciseToSave, token}
      });

      console.log(data);

      if (mutationError) {
        throw new Error('something went wrong!');
      }

      // if Exercise successfully saves to user's account, save Exercise id to state
      setSavedExerciseIds([...savedExerciseIds, data.saveExercise.exerciseId]);
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
                  <option value="" disabled >Select An Exercise Type</option>
                  <option value='upper'>Upper Body</option>
                  <option value='lower'>Lower Body</option>
                  <option value='cardio'>Cardio</option>
                  <option value='core'>Core</option>
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
      </Container>
    </>
  );
};

export default SearchExercises;
