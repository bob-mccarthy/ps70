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


function Week3(){
    const classes = useStyles();
    
    return  <>
        <section className = {`${classes.textGrid} ${classes.margin} ${classes.centered}`}>
        <h1 className={classes.centered}>Laser Cutting</h1>
        </section>
        <section className= {`${classes.textGrid} ${classes.margin}`}>
        <div className={classes.alignRight}>
        <section style={{'display': 'flex'}}>
        
        <p className= {classes.margin}>
        My kinetic sculpture this week was a sculpture which would be two lumberjacks moving back and forth to cut a piece of wood forever. 
        However, there were many roadblocks that I hit along the way in trying to make this piece.

        The basic idea is that there is a platform with holes in it and there is a sliding platform beneath it which will slide back and forth and 
        the lumberjacks would stand on the moving platform with a saw between them which would give the illusion that the lumberjacks were cutting a piece of wood. 
        </p>
        
        </section>
        <section style={{'display': 'flex'}}>
        <p className= {classes.margin}>
        I first made a prototype out of cardboard to work on turning rotational motion into linear motion. This worked well because the sliding panel when held on both sides would move back and forth when rotating the wheel. 
        However, after I realized that would work I wanted to hook up my prototype up to a motor. It was at this point that any thing you attach to a gear needs to be precisely fixed to the motor because if not, 
        the motor axle will not grip the thing it is attached to and the attachment will not rotate. (Leading to results like this)
        </p>
        </section>
        <p>
        So I knew I had to recut these pieces and after talking to Nathan because I had my enclosure made out of cardboard and the sliding panel was made out of cardboard so they would get caught on each other, 
        and when you have interacting pieces it is important to use different materials to mitigate things getting caught on each other. 
        So I cut out the entire mechanism out of acrylic and also cut a hole in specifically for the motor. 
        </p>

        <p>
        This is where my first big struggle was. I did not know how to attach the acrylic pieces to each other. But eventually I was given the idea to drill holes into the pieces and then tapped then and attach them with screws. 
        The first problem I noticed was that with the screws my pieces could not rotate because they were screwed in.

        Then my savior Jeff told me to drill a slightly larger hold and use a nut, and this solved the rotation problem but introduced another. 
        Since the bolts added extra height the mechanism would get caught on itself, so because of that I added spacers to the design to bring it to where it was right now. 
        I still need to print out the aesthetic pieces like the lumberjacks but the actual mechanism was put together. 
        </p>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/too tight.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/gets caught.png")} alt = {'assembly 2'} style = {{height: '350px'}}></img>
        <img className = {classes.alignLeft} src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/spacers.png")} alt = {'assembly 1'} style = {{height: '350px'}}></img>
        
        <section className = {classes.textGrid}>
        
        </section>
        </div>
        </section>
    </> 
}
export default Week3