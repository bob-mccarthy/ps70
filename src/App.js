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

function App() {
  const [visible, setVisible] = useState(true)

  let toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Navbar />
      <section className='container'>
        <section style= {{minWidth: '17em'}}>
        <ul className='sideNavBar'>
            <li>
              PS70: Intro to Digital Fabrication
            </li>
            <li>
              <Link to = "/ps70"> Home</Link>
            </li>
            <li>
              <Link to = "/ps70/about"> About</Link>
            </li>
            <li >
             <div onClick={toggleVisible} style= {{cursor: 'pointer', display: 'flex'}} >Working Log    </div> 
             <i className= {`arrow ${visible ? 'down' : 'right'}`}></i> 
            </li>
            {
             visible && 
             <>
            <li className='dropdownLink' > 
              <Link to = "/ps70/week1"> Week 1</Link>
            </li>
            <li className='dropdownLink'>
              <Link to = "/ps70/week2"> Week 2</Link>
            </li>
            <li className='dropdownLink'>
              <Link to = "/ps70/week3"> Week 3</Link>
            </li>
            <li className='dropdownLink'>
              <Link to = "/ps70/week4"> Week 4</Link>
            </li>
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
          </Routes>
      </section>
    </>
  );
}

export default App;
