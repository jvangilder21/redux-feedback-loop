import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';



function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    
    //Defining a local state to store the user's feeling rating
    const [newFeelingRating , setNewFeelingRating] = useState('');

    // Don't think this is needed on this page.
    const feelingRating = useSelector(store => store.feelingRating);


    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        // Tell redux that we want to add the new element
        dispatch({
            type:'ADD_FEELING_RATING',
            // Pass in the element name, that we're tracking in state
            payload: newFeelingRating,
        })
        // clear the form field
        setNewFeelingRating('');
    }

    const home = () => {
        history.push('/')
    }
    const understanding = () => {
        dispatch({ type: 'ADD_FEELING_RATING', payload: newFeelingRating})
        history.push('/understanding')
    }

    useEffect(() => {
        fetchFeelingRating();
    }, []);

    const fetchFeelingRating = () => {
        axios.get('/feeling').then(response => {
            feelingRating(response.data);
        }).catch(error => {
            console.log('error in fetch feelingRating', error);
            // alert('something went wrong');
          })
    }

        return(
            <div>
                <h2>Feelings</h2>

                {/* Keeping this here til we know it clears correctly */}
                <p>How are you feeling today: {feelingRating}</p>

                <form onSubmit={handleFeelingSubmit}>
                    <label>
                        How are you feeling today:
                        <input
                            type="number"
                            min="1"
                            max="5"
                            value={newFeelingRating}
                            onChange={event => setNewFeelingRating(event.target.value)}
                        />
                    </label>
                </form>

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    type="submit"
                    variant='contained'
                    onClick={understanding}
                    >NEXT</Button>
            </div>
        )
}

export default Feeling;