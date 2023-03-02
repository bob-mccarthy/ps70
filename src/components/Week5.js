import React from "react";

function Week5(){
    return <section style = {{padding : '0.5em 1em 1em 1em'}}>
            <h2>Week 5</h2>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/pyramid print.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
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