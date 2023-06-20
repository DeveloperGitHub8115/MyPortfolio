import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { Skill } from './components/skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Service } from './components/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skill />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Service />} />
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
