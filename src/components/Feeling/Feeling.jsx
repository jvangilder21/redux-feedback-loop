import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';



function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    //Defining a local state to store the user's feeling rating
    const [newFeelingRating , setNewFeelingRating] = useState('');

    const feelingRating = useSelector(store => store.feelingRating);


    function AddingFeelingRating () {
        // Tell redux that we want to add the new element
        dispatch({
            type:'ADD_FEELING_RATING',
            // Pass in the element name, that we're tracking in state
            payload: newFeelingRating,
        })
        // clear the form field
        setNewFeelingRating('');
        history.push('/understanding')
    }

    // const home = () => {
    //     history.push('/')
    // }
   
        return(
            <div>
                <h2>Feelings</h2>

                <h2>How are you feeling today:</h2>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={newFeelingRating}
                    onChange={event => setNewFeelingRating(event.target.value)}
                
                />
                    
                {/* <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button> */}

                <Button 
                    type="submit"
                    variant='contained'
                    onClick={AddingFeelingRating}
                    >NEXT</Button>
            </div>
        )
}

export default Feeling;