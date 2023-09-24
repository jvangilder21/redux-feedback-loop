import React from 'react';
import { useHistory } from "react-router-dom"
import { HashRouter as Router, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Home () {
    
    const history = useHistory();
    
    const feeling = () => {
        history.push('/feeling')
    }

        return (     
            <div>
                <h2>HELLO! Please your leave feedback!</h2>
                <br/>
                <br/>
                <Button 
                    variant='contained'
                    onClick={feeling}
                    >LEAVE FEEDBACK HERE</Button>
            </div>

        );
    
}

export default Home;