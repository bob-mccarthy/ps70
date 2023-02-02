import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    centered : {
        justifyContent: 'center',
    },
    textGrid : {
        backgroundColor: '#ffd0b5',
        display: 'flex',
        padding: '15px'
    },
    margin :{
        margin: '10px'
    },
    alignLeft: {
        alignContent: 'left',
    },
    alignRight:{
        alignContent: 'right',
    },
}))


function Week1(){
    const classes = useStyles();
    return  <>
        <section className = {`${classes.textGrid} ${classes.margin} ${classes.centered}`}>
        <h1 className={classes.centered}>Final Project Proposal</h1>
        </section>
        <section className= {`${classes.textGrid} ${classes.margin}`}>
        <div className={classes.alignRight}>
        <p>The big inspiration for this project my procrastination habits. I have attempted many different methods for getting work done, but none of 
            them have really worked. The closest methodology to being effective  I have used is the pomodoro technique, the pomodoro technique is simply where you
            work for 25 minutes take a 5 minute break and repeat. This study method will work for a little while, but then I will go to take one of my 5 minute breaks
            and I will get distracted and it will turn into a 30 minute break and then I will have lost all of my momentum. 
        </p>
        <p>
            So I want to make something that will help take distractions away from me when I am supposed to be 
            studying. Currently my biggest distraction is my phone, so I want something that stops me from using my phone when it is not my break. 
        </p>
        <p>
            That is where my final project idea comes into play. I want to make a box which will store my phone while I am working and that I can take my
            phone out of during the break but it will punish me if I do not put my phone back in the box and reward me if I properly complete a study session.
        </p>
        <p>
            There are a few different mechanisms for incentivizing me to study I would like to test out or combine. 
        </p>
        <ul>
            <li>
                Option One: Insults. I think it would be funny if I had an box that would yell insults at me when I try to take my phone during break
            </li>
            <li>
                Option Two: Rewards. This idea takes inspiration from apps like forest app which grow a tree for every time you grow a succesfully complete a pomodoro session
                you grow a digital tree and every time you mess up that tree dies. So for my box I want to have an visual representation of success and failure to further incentize
                good use of the phone 
            </li>
            <li>
                Option Three: The Streak. Similar to Option Two I want visual rewards and punishments but in this idea I really want to capture this idea of the streak
                if you know you have done something 8 days in a row you are more likely to do it for a ninth. So I want rewards that compound like a tamagotchi pet that
                that gets bigger and more accessories the more sessions you complete and dies if you mess up enough.
            </li>
        </ul>
        </div>
        </section>
    </> 
}
export default Week1