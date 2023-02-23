import React from 'react';
import { Link } from 'react-router-dom';

import "../index.css"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    link : {
        textDecoration: "none",
        color: 'white'
    },
    toolbar : {
        backgroundColor: 'darkSalmon'
    }
}))


function Navbar () {
    const classes = useStyles();
    return (
        <>
        <ul className='navbar'>
            <li className='navEl'>
                <Link to = "/ps70"> Home</Link>
            </li>
            <li className='navEl'>
                <Link to = "/ps70/about"> About</Link>
            </li>
        </ul>

       
        </>
        
    )
}

export default Navbar;