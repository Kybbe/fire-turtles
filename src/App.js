import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './components/Cart';

import Menu from './views/Menu';
import AboutUs from './views/AboutUs';
import Status from './views/Status';


function App() {
  return (
    <div className="App" style={{height: "100%"}}>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Menu />} />  {/* Byt till landing page senare */}
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/status' element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
