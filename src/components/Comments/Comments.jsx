import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    //Defining a local state to store the user's feeling rating
    const [newCommentsRating , setNewCommentsRating] = useState('');
    // const commentsRating = useSelector(store => store.commentsRating);

    function AddingCommentsRating () {
        // Tell redux that we want to add the new element
        dispatch({
            type:'ADD_COMMENTS_RATING',
            // Pass in the element name, that we're tracking in state
            payload: newCommentsRating,
        })
        // clear the form field
        setNewCommentsRating('');
        history.push('/review')
    }
    
    const home = () => {
        history.push('/')
    }

        return(
            <div>
                <h2>Comments</h2>

                <h2>Any comments you want to leave?</h2>
                <input
                    type="text"
                    value={newCommentsRating}
                    onChange={event => setNewCommentsRating(event.target.value)}
                />

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={AddingCommentsRating}
                    >NEXT</Button>
            </div>
        )

}

export default Comments;