import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';



function Feeling() {

    const feelingRating = useSelector(store => store.feelingRating);

    const history = useHistory();
    
    const home = () => {
        history.push('/')
    }
    const understanding = () => {
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

                <p>How are you feeling today: {feelingRating}</p>

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={understanding}
                    >NEXT</Button>
            </div>
        )
}

export default Feeling;