import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Week4 from './components/Week4';
import Week5 from './components/Week5';
import Week7 from './components/Week7';

function App() {
  const [visible, setVisible] = useState(true)

  let toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Navbar />
      <section className='container'>
        <section style= {{minWidth: '17em', height: '100vh'}}>
        <ul className='sideNavBar'>
            <li>
              PS70: Intro to Digital Fabrication
            </li>
            <Link className='sideNavEl' to = "/ps70">
              <li>
                Home
              </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/about">
              <li>
                About
              </li>
            </Link>
            <li >
             <div onClick={toggleVisible} style= {{cursor: 'pointer', display: 'flex'}} >Working Log    </div> 
             <i className= {`arrow ${visible ? 'down' : 'right'}`}></i> 
            </li>
            {
             visible && 
             <>
            <Link className = 'sideNavEl' to = "/ps70/week1">
            <li className='dropdownLink'> 
               Week 1
            </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week2"> 
            <li className='dropdownLink'>
              
              Week 2
              

            </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week3">
              <li className='dropdownLink'>
                Week 3
              </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week4">
            <li className='dropdownLink'>
               Week 4
            </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week5">
            <li className='dropdownLink'>
               Week 5
            </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week6">
            <li className='dropdownLink'>
               Week 6
            </li>
            </Link>
            <Link className='sideNavEl' to = "/ps70/week7">
            <li className='dropdownLink'>
               Week 7
            </li>
            </Link>
            </>
            }
        </ul>
        </section>
          <Routes>
            <Route path = "/ps70" element = {<Home />}/>
            <Route path = "/ps70/about" element = {<About />} />
            <Route path = "/ps70/week1" element = {<Week1 />} />
            <Route path = "/ps70/week2" element = {<Week2 />} />
            <Route path = "/ps70/week3" element = {<Week3 />} />
            <Route path = "/ps70/week4" element = {<Week4 />} />
            <Route path = "/ps70/week5" element = {<Week5 />} />
            {/* <Route path = "/ps70/week6" element = {<Week6 />} /> */}
            <Route path = "/ps70/week7" element = {<Week7 />} />
          </Routes>
      </section>
    </>
  );
}

export default App;
