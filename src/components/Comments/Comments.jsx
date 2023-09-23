import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';

function Comments() {

    const commentsRating = useSelector(store => store.commentsRating);

    const history = useHistory();
    
    const home = () => {
        history.push('/')
    }
    const review = () => {
        history.push('/review')
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        axios.get('/comments').then(response => {
            feelingRating(response.data);
        }).catch(error => {
            console.log('error in fetch comments Rating', error);
            // alert('something went wrong');
          })
    }

        return(
            <div>
                <h2>Comments</h2>

                <p>Please leave any additional comments: {commentsRating}</p>

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={review}
                    >NEXT</Button>
            </div>
        )

}

export default Comments;