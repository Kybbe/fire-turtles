import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Menu from './views/Menu';
import AboutUs from './views/AboutUs';
import Status from './views/Status';
import Landing from './views/Landing';

const navbarMenu = [
    <div key="menuCollection">
      <Navbar key="navbar" />
      <Menu key="menu" />
    </div>
];

const navbarAboutUs = [
  <div key="aboutUsCollection">
    <Navbar key="navbar" />
    <AboutUs key="aboutUs" />
  </div>
];

function openCart() {
  document.querySelector('.cart').classList.toggle('openCart');
  document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
  document.querySelector('.App').classList.toggle('noOverflowScroll');
}

function App() {
  return (
    <div className="App">
      <div className='transparentBlackBackground hidden' onClick={openCart}></div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/about' element={navbarAboutUs} />
        <Route path='/menu' element={navbarMenu } />
        <Route path='/status' element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
