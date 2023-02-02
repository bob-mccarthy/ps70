import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    fillContainer : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", 
        border: "solid",
        borderColor: "black",
        borderWidth: "5px"

              
    },
    fillImg : {
        flexShrink: "0",
        maxHeight: '100%',

        transiton: '0.3',
        '&:hover' : {
            transform : 'translateY(-3) scale(1.1)'
        },

    },
    disabled : {
        pointerEvents : 'none',
    },
    title : {
        position: "absolute",
        fontSize: "32px",
        color: "black",
    }
        
}))

function LinkCard(props){
    const classes = useStyles()
    // return <img className = {classes.temp} src = {props.imgPath} alt = {props.alt}></img>
    console.log(props.imgPath === "/Users/robertmccarthy/Documents/GitHub/ps70/src/books.jpeg")
    const newPath = "/Users/robertmccarthy/Documents/GitHub/ps70/src/books.jpeg"

    return (
    <Link className = {`${(props.disabled) ? classes.disabled : '' }`} to = {props.link} style = {{textDecoration: 'none', color: 'white'}}>    
    <div className = {classes.fillContainer} style = {{background: 'yellow', alignContent: 'center', backgroundColor: 'white', height: '450px'}}>
     <img  className = {classes.fillImg} src = {props.img} alt = {props.alt}></img>
     <div className= {classes.title}> {props.title}</div>
    </div>
    </Link>
    )

}

export default LinkCard;