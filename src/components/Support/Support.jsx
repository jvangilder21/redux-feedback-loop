import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Button from '@mui/material/Button';

function Support() {

    const supportRating = useSelector(store => store.supportRating);

    const history = useHistory();
    
    const home = () => {
        history.push('/')
    }
    const comments = () => {
        history.push('/comments')
    }

    useEffect(() => {
        fetchSupportRating();
    }, []);

    const fetchSupportRating = () => {
        axios.get('/support').then(response => {
            supportRating(response.data);
        }).catch(error => {
            console.log('error in fetch feelingRating', error);
            // alert('something went wrong');
          })
    }

        return(
            <div>
                <h2>Support</h2>

                <p>Support Rating: {supportRating}</p>

                <Button 
                    variant='contained'
                    onClick={home}
                    >HOME</Button>

                <Button 
                    variant='contained'
                    onClick={comments}
                    >NEXT</Button>
            </div>
        )

}

export default Support;