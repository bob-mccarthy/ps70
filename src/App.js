import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Week1 from './components/Week1';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/ps70" element = {<Home />}/>
        <Route path = "/ps70/about" element = {<About />} />
        <Route path = "/ps70/week1" element = {<Week1 />} />
      </Routes>
    </>
  );
}

export default App;
