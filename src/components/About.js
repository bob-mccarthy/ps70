import React from "react";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    textGrid : {
        backgroundColor: '#ffd4da',
        display: 'flex',
        padding: '15px',
        
    },
    margin: {
        margin: '10px'
    },
    alignLeft : {
        alignContent: "left"
    },
    alignRight: {
        alignContent: "right"
    },
    centered: {
        justifyContent: "center"
    },
    white: {
        color: "white"

    }
}))
function About() {
    const classes = useStyles();

    return <>
        <section className = {`${classes.textGrid} ${classes.margin} ${classes.centered}`}>
        <h1 className={classes.centered}>ABOUT ME</h1>
        </section>
        <section className = {`${classes.textGrid} ${classes.margin}`}>
        <img className = {classes.alignLeft} src = "./bobby.JPG" alt = "Bobby McCarthy" width = "300px"></img>
        <div>
        <p className = {classes.margin}>
            Hello my name is Bobby, I am a senior in Currier and currently am studying Computer Science. 
            Something to know about me is I love making things. I love
            painting shoes, editing videos, programming, and I spent the whole summer making decorations for my 
            common room. Some other things I enjoy in my freetime is going to the gym, hanging out with friends,
            and watching excessive amounts of YouTube videos. 
        </p> 
        <p className= {classes.margin}>
            However, I think one thing that has frustrated me is that I have all these hobbies about building things
            but I have never been able to do anything with manufacturing or electronics. I have had many ideas to make stupid robots
            like that a robot that would shock me if I used my phone too much, or a robot that would shoot spitballs at me if I used my phone 
            too much, or a robot that slaps if I use my phone too much. Clearly, I also use my phone too much and my project will definitely 
            centered on reducing my screentime in some manner. 
        </p>
        </div>
        </section>
    </>
}

export default About;