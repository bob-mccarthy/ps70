import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/ps70" element = {<Home />}/>
        <Route path = "/ps70/about" element = {<About />} />
        <Route path = "/ps70/week1" element = {<Week1 />} />
        <Route path = "/ps70/week2" element = {<Week2 />} />
        <Route path = "/ps70/week3" element = {<Week3 />} />
      </Routes>
    </>
  );
}

export default App;
