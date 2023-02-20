import './App.css'
import { Route, Routes } from 'react-router-dom';
import Aside from './components/aside/Aside.jsx'
import Proyects from './components/proyects/Proyects';
import Contact from './components/contacts/Contacts';
import Person from './components/personalInformation/Person';
import Studies from './components/studies/Studies.jsx';
import Goals from './components/goals/Goals.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Aside />} />
        <Route exact path="/person" element={<><Aside /> <Person /></>} />
        <Route exact path="/goals" element={<><Aside /> <Goals /></>}/>  
        <Route exact path="/studies" element={<><Aside /> <Studies /></>} />   
        <Route exact path="/proyects" element={<><Aside /> <Proyects /></>} />  
        <Route exact path="/contact" element={<><Aside /> <Contact /></>} />  
      </Routes>
    </div>
  );
}

export default App;



