import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Feeling() {

    const feelingRating = useSelector(store => store.feelingRating);

    useEffect(() => {
        fetchFeelingRating();
    }, []);

    const fetchFeelingRating = () => {
        axios.get('/feeling').then(response => {
            feelingRating(response.data);
        }).catch(error => {
            console.log('error in fetch feelingRating', error);
            alert('something went wrong');
          })
    }

        return(
            <div>
                <h2>Feelings</h2>

                <p>Feeling Rating {feelingRating}</p>
            </div>
        )
}

export default Feeling;