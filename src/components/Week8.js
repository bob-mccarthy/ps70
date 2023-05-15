import React from "react";
import print from "../assets/Week8/3d-print.jpg"
import cast from "../assets/Week8/cast.jpg"
import failedImport from "../assets/Week8/failed-import.jpg"
import finalCast from "../assets/Week8/final-cast.jpg"
import importAndToolpath from "../assets/Week8/import-and-toolpath.jpg"
import moldBismuth from "../assets/Week8/mold-bismuth.jpg"
import murakamiFinal from "../assets/Week8/murakami final.jpg"
import shopBot from "../assets/Week8/shopbot.jpg"
import solderSetup from "../assets/Week8/solder-setup.jpg"

function Week8(){
    return <section style = {{padding : '0.5em 1em 1em 1em'}}>
                <h2>Week 8</h2>
                <img src = {print} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {cast} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {failedImport} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {finalCast} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {importAndToolpath} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {moldBismuth} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {murakamiFinal} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {shopBot} alt = {'yelling box'} style = {{height: '350px'}}></img>
                <img src = {solderSetup} alt = {'yelling box'} style = {{height: '350px'}}></img>
            </section>
}

export default Week8;