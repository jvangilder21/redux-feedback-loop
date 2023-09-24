import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';

function Support() {

    const dispatch = useDispatch();
    const history = useHistory();

    //Defining a local state to store the user's feeling rating
    const [newSupportRating , setNewSupportRating] = useState('');

    const supportRating = useSelector(store => store.supportRating);

    

    function AddingSupportRating () {
        // Tell redux that we want to add the new element
        dispatch({
            type:'ADD_SUPPORT_RATING',
            // Pass in the element name, that we're tracking in state
            payload: newSupportRating,
        })
        // clear the form field
        setNewSupportRating('');
        history.push('/comments')
    }
    
    const home = () => {
        history.push('/')
    }
   

    // useEffect(() => {
    //     fetchSupportRating();
    // }, []);

    // const fetchSupportRating = () => {
    //     axios.get('/support').then(response => {
    //         supportRating(response.data);
    //     }).catch(error => {
    //         console.log('error in fetch feelingRating', error);
    //         // alert('something went wrong');
    //       })
    // }

        return(
            <div>
                <h2>Support</h2>

                <p>Support Rating: {supportRating}</p>

                <h2>How are you supported today:</h2>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={newSupportRating}
                    onChange={event => setNewSupportRating(event.target.value)}
                />

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={AddingSupportRating}
                    >NEXT</Button>
            </div>
        )

}

export default Support;