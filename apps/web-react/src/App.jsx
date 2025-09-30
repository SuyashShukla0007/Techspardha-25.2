import {Routes,Route} from 'react-router-dom';
const App=()=>{
  return (
    <Routes>
      <Route path="/" element={<div className="text-5xl text-primary">Hello React</div>} />
    </Routes>
  );
}
export default App