import React from 'react';
import { useHistory } from "react-router-dom"
import { HashRouter as Router, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Home () {
    
    const history = useHistory();
    
    const Feeling = () => {
        history.push('/Feeling')
    }

        return (     
            <div>
                
                <br/>
                <br/>
                <Button 
                    variant='contained'
                    onClick={Feeling}
                    >LEAVE FEEDBACK HERE</Button>
            </div>

        );
    
}

export default Home;