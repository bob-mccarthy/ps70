import React from "react";
import myVideo from "/Users/robertmccarthy/Documents/GitHub/ps70/src/demo.mov";


function Week4(){
    return <section style = {{padding : '0.5em 1em 1em 1em'}}>
    <h2>Week 4: Micro Controller Programming</h2>
    <h3>Intro:</h3>
    <p> 
        The assignment for this week was simply to program the arduino (esp32 in my case) to do something. I wanted
        to take this week as an opportunity to start making progress toward my final project. While I have not fully 
        fleshed out my final project I know it will have a component that will need to detect my phone to see if I am
        using it during study time or not. So what I wanted to do this week is make something that would detect my phone
        and have some kind of response. What I ended up making was making a weight sensor, to detect the phone, and
        a buzzer, to alert when I put down my phone.
    </p>
    <h3> Documentation </h3>
    <h3> Pivoting </h3>
    <p>
        When I originally started I wanted to detect if I plugged my phone into it, because I felt that would be the hardest 
        system to cheat. With a weight sensor you could put a rock or a phone onto it, and the weight sensor would not know the
        difference. While if you detected if the phone was charging or not then they only way to cheat that is to plug someone 
        else's phone into your app. However, I quickly learned that this project would be out of the scope of this week's assignment
        especially considering this week is supposed to be the introduction to electronics and micro controllers. For the output the 
        original plan was to use a speaker and have some pre recorded audio play when I detected a phone. However, the issue with that was
        you software linked on the PS70 website to convert your audio file to the right format could not be downloaded on Mac OS. So I decided
        to use a buzzer instead because it was much easier to work with and got the same idea across, which is to provide feedback for
        when I put my phone on the sensor.
    </p>
    <h3> Planning </h3>
    <p>
        The plan is to make the weight sensor using capacitive sensing. Basically capacitive sensing passes electricity through one copper plate and it is received
        by another plate. The strength of the signal indicates how close they are to each other and if I put some medium, like foam, between the two plates 
        then I would have a weight sensor. Since if I put something like my phone on top of it, it will squish the foam making the plates closer together increasing
        the signal in the copper plates, the heavier the object, the more squish and the more signal (So the weight is proportional to the signal). Then if that signal 
        was strong enough, it exceeded a certain weight, then we woudl detect that as a phone then send a signal to the buzzer to make a noise
    </p>

    <h3> Execution </h3>
    <h4>Circuit Diagram</h4>
    <h4>Final Product</h4>
        What I ended up being able to build is a sensor which can detect if an object is placed on top of it.
    <section>
        <section>
            <h4>Code</h4>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/Code.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
        </section>
        <section>
            <h4>Display</h4>
            <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/ input and buzzer.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
        </section>
    </section>
    <h4>Hiccups</h4>
    <p>
        So I wanted to originally use a speaker instead of buzzer but I was not able to upload the files to the esp32 to play them. As well as,
        I was originally planning on using velostat instead of a capacitive sensor, but I could not get the circuit to work I am also still a little
        confused on a the need for a voltage divider, and just the purpose of voltage dividers in general.

        Also when I was constructing my circuit I was having an issue because nothing was happening but then Kalos told me that the issue
        could potentially be that my resistor was connecting to ground, so we moved around the order of the circuit and it fixed my problem.
    </p>


    </section>

}

export default Week4;