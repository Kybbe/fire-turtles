import './App.css';
import { Route, Routes } from 'react-router-dom';

import Menu from './views/Menu';
import Test from './views/Test';
import AboutUs from './views/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
