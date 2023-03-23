import React from "react";

function Week7(){
    return <section style = {{padding : '0.5em 1em 1em 1em'}}>
                <h2>Week 7</h2>
                <p>
                    This week my goal was to make major progress towards my final project and I wanted to work on the core functionality of my robot.
                    So the idea for this week was to work on a timer that would have a concept of a study mode and a relax mode (where if you cannot remove your phone during 
                    study time but you can do it during relax time), a mechanism which detects the presence of my phone using a the wireless charger, and then a display which 
                    will display all of this format.
                </p>
                <p>
                    For the Study Timer I used the C++ class structure to support all of the functions I needed. So the core functionality of the timer is built on the function
                    esp_timer_get_time() which returns the number of microseconds since bootup, and the reason I used this over millis() is because apparently millis overflows after 
                    49ish days and esp_timer_get_time() does not overflow for over 200 years. So I just thought I would stick with that just so that I do not have to worry about overflow
                    issues in my lifetime. In the code listed below I just wanted to support functionality such that I have the timer be in two modes, study mode and relax mode.
                    When the timer was in study mode, if you take your phone off of the wireless charger it would notify you and pause itself, while in relax mode you are free to take the 
                    phone off. The idea of pausing was where I came into the most trouble, since esp_timer_get_time() never stops ticking and what I basically did is keep a value of the
                    current time which I am constantly adding to which is its current value + the difference between the last time I checked the time and the current time. Kind of a long 
                    winded explanation, but in defining time in this way, made it much easier to implement pausing
                </p>
                <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/timer header file.png")} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <p>
                    In order to detect my I have two wires which detect a change in voltage and then I display whether my phone was taken off
                    the charger only if it is study time, as well as I display the seconds that the timer has elapsed all of this on the OLED display
                </p>
                <img src = {require("/Users/robertmccarthy/Documents/GitHub/ps70/src/prototype.jpg")} alt = {'yelling box'} style = {{height: '350px'}}></img>
            </section>
}

export default Week7;