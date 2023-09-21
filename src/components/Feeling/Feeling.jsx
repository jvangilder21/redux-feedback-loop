import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Feeling() {

    const reduxStore = useSelector(store => store);

    const dispatch = useDispatch();

    const feelingRating = useSelector(store => store.feelingRating);

        return(
            <div>
                <h2>Feelings</h2>

                <p>Feeling Rating {feelingRating}</p>
            </div>
        )
}

export default Feeling;