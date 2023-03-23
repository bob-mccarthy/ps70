import React from "react";

function Week5(){
    return <section style = {{padding : '0.5em 1em 1em 1em'}}>
            <h2>Week 5</h2>
            <p>First I printed out a pyramid to get used to working with 3d printing, my small print was originally twice the size and it was going to be a 20 minute print, but 
            then when I shrunk it down and changed the print quality is cut over 10 minutes on the print time which helped me realized just how drastically size and print quality
            affect print time</p>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/pyramid print.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            <p> For my other 3D print I wanted to make a ball bearing. I modeled a ball bearing in fusion 360. In order to model the ball bearing I made a circle
                with a rectangle on top and bottom of that circle, when I revolved these rectangles about the x axis I got the two rings of the bearing. Then revolved the 
                circle to get a sphere and then created a circular pattern to get the ball bearing</p>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/ball bearing design.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            <br></br>
            <a href = {require('/Users/robertmccarthy/Documents/GitHub/ps70/src/Ball Bearing v4.stl')} download>Ball Bearing Download</a>
            <p>
                However, issues that I have had with Ball Bearings were first I made the spheres to big and the print quality low this meant that the spheres were stuck and 
                would not roll around in the rings. So I then shrunk the size of hte balls and improved the print quality, but this had issues as well as I had go in the opposite 
                direction and there was too much space and the balls eventually fell out. So finally in the end I tweaked the results and made the spheres a little bigger which solved 
                the problem and helped me land on the design in the stl and the design in the last pic
            </p>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/scaffolding.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/final print.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/first product.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            
            <h2>Final Project</h2>
            <p>I am still am not completely finalized on the direction I was to take the final project in
                but what I do know is that the core of it will be a box which displays a timer and detects if my phone
                is in at the right times or not
            </p>
            <h2>Materials for Core Component of the box: </h2>
            <ul>
                <li>
                    Wood (the would that is lying around the shop will do)
                </li>
                <li>
                    A hinge (to open and close the box)
                </li>
                <li>
                    Wireless charger to detect charging
                </li>
                <li>
                    LED or LCD Display (to display the timer)
                </li>
            </ul>
            With these materials I can build the core of my machine and then for potential offshoots
            <ul>
                <li>Insult Robot</li>
                <ul>
                    <li>
                        Some kind of speaker (small bluetooth speaker)
                    </li>
                </ul>
                <li>Spitball Robot</li>
                <ul>
                    <li>
                        2 servos
                    </li>
                    <li>
                        Camera for image detection
                    </li>
                    <li>
                        Air compressor 
                    </li>
                    <li>
                        Build materials (3d printed parts and scraps around the space)
                    </li>
                </ul>
                <li>
                    Tomagachi pet
                    <ul>
                        <li>
                            A nicer LCD display on the front of the box
                        </li>
                    </ul>
                </li>
            </ul>
            I was also wondering if I could explore multiple of these avenues because I think the insult robot will not take too much time,
            So I feel like I could do this in modules and build and insult module which I can hook up to the core of the design and I could take that
            off and then attach like the tomogachi module and this would allow me to pursue multiple projects if time permits
        </section>
}

export default Week5;