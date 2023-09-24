import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';

function Understanding() {

    const understandingRating = useSelector(store => store.understandingRating);

    const history = useHistory();
    
    const home = () => {
        history.push('/')
    }
    const support = () => {
        history.push('/support')
    }

    useEffect(() => {
        fetchUnderstandingRating();
    }, []);

    const fetchUnderstandingRating = () => {
        axios.get('/understanding').then(response => {
            understandingRating(response.data);
        }).catch(error => {
            console.log('error in fetch feelingRating', error);
            // alert('something went wrong');
          })
    }

        return(
            <div>
                <h2>Understanding</h2>

                <p>Understanding Rating: {understandingRating}</p>

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={support}
                    >NEXT</Button>
            </div>
        )

}

export default Understanding;