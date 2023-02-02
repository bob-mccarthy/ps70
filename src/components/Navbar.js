import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar,
        Toolbar,
        IconButton,
        Typography,
        Stack,
        Button
    } from '@mui/material';

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
        <AppBar >
            <Toolbar className = {classes.toolbar}>
                <Typography variant = "h4" >
                    <Link to = "/" className = {classes.link}>
                        PS70
                    </Link>
                </Typography>
                <IconButton size = 'large' edge = 'start' color = 'inherit' aria-label = 'logo'>
                {/* <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
                /> */}
                </IconButton>
                <Typography variant = "h6" component ="div" sx = {{flexGrow:1}}>
                    Bobby McCarthy
                </Typography>
                <Stack direction = "row" spacing = {2}>
                    <Button>
                        <Link to = "/" className = {classes.link}>
                            Home
                        </Link>
                    </Button>
                    <Button>
                        <Link to = "/about" className = {classes.link}>
                            About
                        </Link>
                    </Button>
                </Stack>
            </Toolbar>    
        </AppBar>
        <Toolbar />
        </>
        
    )
}

export default Navbar;