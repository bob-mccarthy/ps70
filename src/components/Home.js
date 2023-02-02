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


const cards = [{imgPath: "/books.jpeg", alt: "Money Cat", link: "/week1", disabled:false, title: "Week 1"}, 
{imgPath: "/github-logo.png", alt: "TBD", link: "/week2", disabled:true, title: "Week 2"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week3", disabled:true, title: "Week 3"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week4", disabled:true, title: "Week 4"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week5", disabled:true, title: "Week 5"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week6", disabled:true, title: "Week 6"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week7", disabled:true, title: "Week 7"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week8", disabled:true, title: "Week 8"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week9", disabled:true, title: "Week 9"},
{imgPath: "/github-logo.png", alt: "TBD", link: "/week10", disabled:true, title: "Week 10"}]

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