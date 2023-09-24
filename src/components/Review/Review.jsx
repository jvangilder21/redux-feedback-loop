import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';

function Review() {

    const feeling = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.understandingRating);
    const support = useSelector(store => store.supportRating);
    const comments = useSelector(store => store.commentsRating);

    const history = useHistory();
    
    const home = () => {
        history.push('/')
    }
    const review = () => {
        history.push('/review')
    }

    useEffect(() => {
        fetchReview();
    }, []);

    const fetchReview = () => {
        axios.get('/comments').then(response => {
            feelingRating(response.data);
        }).catch(error => {
            console.log('error in fetch comments Rating', error);
            // alert('something went wrong');
          })
    }

    return(
        <div> 
            <h2>Review Your Feedback</h2>

            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>

            <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={review}
                    >SUBMIT</Button>

        </div>
    )

}

export default Review;