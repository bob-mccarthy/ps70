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


function Week2(){
    const classes = useStyles();
    
    return  <>
        <section className = {`${classes.textGrid} ${classes.margin} ${classes.centered}`}>
        <h1 className={classes.centered}>Laser Cutting</h1>
        </section>
        <section className= {`${classes.textGrid} ${classes.margin}`}>
        <div className={classes.alignRight}>
        <section style={{'display': 'flex'}}>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/cardboard sphere.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        <p className= {classes.margin}>
            During this week we spent it learning how to use fusion 360 and the laser cutter. The first project I made was a cardboard sphere.
            I originally wanted to make a sphere because of how flat cardboard. It, at least to me, seems very unintuitive that you can take some thing
            this flat and cut in just the right way then assemble it in the right way you can make a sphere. So the specifics of how a constructed the piece 
            are I cut out two types of pieces. A curved piece and a connecter piece. Basically four curved pieces could connect to every connector piece and if you arranged 
            the pieces as shown in the picture you could make a sphere, but that is not the only way to arrange these pieces. You can rotate this pieces and organize in
            whatever arrangement you want.

            Also in making this sphere I definitely had my fair share of problems with the laser cutter. I first in a hurry would forget to change laser cutting settings which
            would lead me to burn a small hole in the cardboard leaving a certain section of the board unusable. However, after a while I started to get more of a routine and
            was much more cautious when using the machine. Also learning how to move the laser head around the cardboard to mkae sure the piece that I was cutting out fit on 
            there was a game changer because there were multiple times where my cuts would go off of the cardbaord and I would have to stop the laser cutting which would again ruin 
            a section of a piece. Overall, these mistakes really helped to internalize the importance of best practices.
        </p>
        
        </section>
        <section style={{'display': 'flex'}}>
        <p className= {classes.margin}>
           I also did the fusion 360 tutorial that was linked in assignment which worked on developing my sketching abilities. It helped to hammer in the abliities that we learned in
           class. It helped me getting a better idea for constraints, as well as just how to navigate around the different tool and gave me a little bit more intuition for how 
           to make certain shapes. However, while the tutorial was helped and I made these goofy looking shapes, the most learning I did was when I tried to start 3D modeling the 3D
           objects.
        </p>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/tut 1.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/tut 2.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        </section>
        <p>
            For my 3D objects I recreated my usb drive and my usb hub. My biggest issue with this is how if you look at the corners of the usb hub you will see that the ends are not 
            extruded as high as the rest of the piece and I did know how to cut the right amounnt of the usb corners to recreate that shape. However, I did learn alot through these builds
            I learned how to extrude, how to make sketches on faces, how to make a assemblies, and how to align objects with each other. I did not use tutorials to learn these other skills
            I just had an idea for how to make it and did a bunch of googling to try and fill in the blanks and I honestly found that to be the most motivating way to learn because all of the 
            learning was motivated by an end goal which I enjoyed a lot. Also I was fumbling with the calipers, for some reason I had trouble opening and closing them, but overall I got 
            the hang of them and was able to measure my pieces.
        </p>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/assembly view 3.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/assembly view 1.png")} alt = {'assembly 1'} style = {{height: '350px'}}></img>
        <p>
            Things that I want to improve for weeks going forward. TAKE MORE PICTURES. I think during this week I was laser cutting and I was just so focused on making 
            the sphere and cutting on these pieces that I never thought about documenting it, but then when I finished everything I realized that I really wished I had gotten
            more of the process, I realize I want this documentation to be more like a scrap book to just remember the small moments. To not just document the process but
            my emotions and feelings as I go along. So I will try and be more mindful to cover every aspect of the process in my documentation from this moment onward 
        </p>
        <section className = {classes.textGrid}>
        
        </section>
        </div>
        </section>
    </> 
}
export default Week2