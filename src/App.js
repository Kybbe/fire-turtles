import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';

import Menu from './views/Menu';
import AboutUs from './views/AboutUs';
import Status from './views/Status';
import Landing from './views/Landing';
import Profile from './views/Profile';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

const navbarProfile = [
  <div key="profileCollection">
    <Navbar key="navbar" />
    <Profile />
  </div>
]

function openCart() {
  document.querySelector('.cart').classList.toggle('openCart');
  document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
  document.querySelector('.App').classList.toggle('noOverflowScroll');
}

function App() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const storeUser = useSelector(state => state.user);
  let ETA = useSelector(state => state.ETA);
  const hasStartedETA = useSelector(state => state.hasStartedETATimer);

  useEffect(() => {
    let user = localStorage.getItem('user')
    dispatch({type: "ADD_USER", payload: JSON.parse(user)});
  }, [])

  useEffect(() => {
    if(storeUser !== 0) {
      localStorage.setItem('user', JSON.stringify(storeUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [storeUser])

  useEffect(() => {
    var inTimerEta = ETA;
    function decrementTimer () {
      dispatch({type: "DECREMENT_ETA"});
      inTimerEta--;
      console.log(inTimerEta)
      if(inTimerEta === 0) {
        navigate("/status");
        clearInterval(timer);
        dispatch({type: "SET_HAS_STARTED_ETA_TIMER", payload: false});
        dispatch({type: "SET_ETATIMER_DONE", payload: true});
        console.log("STOPPED TIMER");
      }
    }
    if(ETA > 1) {
      console.log("STARTED TIMER");
      var timer = setInterval(decrementTimer, 60000);
    }
  }, [hasStartedETA])

  return (
    <div className="App">
      <div className='transparentBlackBackground hidden' onClick={openCart}></div>
      <Routes>
        <Route path="/" element={<Landing />} />  {/* Byt till landing page senare */}
        <Route path='/menu' element={navbarMenu } />
        <Route path='/about' element={navbarAboutUs} />
        <Route path='/profile' element={navbarProfile} />
        <Route path='/status' element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
