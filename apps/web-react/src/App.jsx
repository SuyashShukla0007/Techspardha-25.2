import {Routes,Route} from 'react-router-dom';
import Events from './pages/Events';
import Developer from './pages/Developer';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Home from './pages/Home';
import FAQ from './components/Home/FAQ/FAQ'
const App=()=>{
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Events' element={<Events/>}/>
      <Route path='/Developer' element={<Developer/>}/>
      <Route path='/Schedule' element={<Schedule/>}/>
      <Route path='/Teams' element={<Teams/>}/>
    </Routes>
  );
}
export default App