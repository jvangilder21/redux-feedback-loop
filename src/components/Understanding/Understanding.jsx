import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    //Defining a local state to store the user's feeling rating
    const [newUnderstandingRating , setNewUnderstandingRating] = useState('');

    const understandingRating = useSelector(store => store.understandingRating);

    function AddingUnderstandingRating () {
        // Tell redux that we want to add the new element
        dispatch({
            type:'ADD_UNDERSTANDING_RATING',
            // Pass in the element name, that we're tracking in state
            payload: newUnderstandingRating,
        })
        // clear the form field
        setNewUnderstandingRating('');
        history.push('/support')
    }
    
    const home = () => {
        history.push('/')
    }
    // const support = () => {
    //     dispatch({ type: 'ADD_UNDERSTANDING_RATING', payload: newUnderstandingRating})
    //     history.push('/support')
    // }

    // useEffect(() => {
    //     fetchUnderstandingRating();
    // }, []);

    // const fetchUnderstandingRating = () => {
    //     axios.get('/understanding').then(response => {
    //         understandingRating(response.data);
    //     }).catch(error => {
    //         console.log('error in fetch feelingRating', error);
    //         // alert('something went wrong');
    //       })
    // }

        return(
            <div>
                <h2>Understanding</h2>

                <p>Understanding Rating: {understandingRating}</p>

                
                <h2>How well are you Understanding today:</h2>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={newUnderstandingRating}
                    onChange={event => setNewUnderstandingRating(event.target.value)}
                />
                

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={AddingUnderstandingRating}
                    >NEXT</Button>
            </div>
        )

}

export default Understanding;