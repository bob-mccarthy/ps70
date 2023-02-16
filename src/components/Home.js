import React from "react";
import { makeStyles } from '@mui/styles';
import LinkCard from "./LinkCard";

const useStyles = makeStyles((theme) => ({
    basicGrid : {
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px,5fr))",
        margin: "1rem"
    },
    card : {
        transiton: '0.3',
        '&:hover' : {
            transform : 'translateY(-3) scale(1.1)'
        }
    }
}))


const cards = [{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/books.jpeg"), alt: "Money Cat", link: "/ps70/week1", disabled:false, title: "Week 1"}, 
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/cardboard sphere.png"), alt: "TBD", link: "/ps70/week2", disabled:false, title: "Week 2"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week3", disabled:false, title: "Week 3"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week4", disabled:true, title: "Week 4"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week5", disabled:true, title: "Week 5"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week6", disabled:true, title: "Week 6"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week7", disabled:true, title: "Week 7"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week8", disabled:true, title: "Week 8"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week9", disabled:true, title: "Week 9"},
{img: require("/Users/robertmccarthy/Documents/GitHub/ps70/src/github-logo.png"), alt: "TBD", link: "/ps70/week10", disabled:true, title: "Week 10"}]

function Home(){
    const classes = useStyles()
    return <>
    <section className= {classes.basicGrid}>
        {cards.map((x) => {
            return <LinkCard {...x} />
        })}

    </section>
    </>
}

export default Home;