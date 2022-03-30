import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './components/Cart';

import Menu from './views/Menu';
import Test from './views/Test';
import AboutUs from './views/AboutUs';
import Status from './views/Status';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
