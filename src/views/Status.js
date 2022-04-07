import Drone from '../assets/graphics/drone.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function Status() {
  const navigate = useNavigate();

  const eta = useSelector(state => state.ETA);
  const orderNr = useSelector(state => state.orderNr);
  const hasOrdered = useSelector(state => state.hasOrdered);
  const ETATimerDone = useSelector(state => state.ETATimerDone);
  
  const droneElem = useRef(null);

  useEffect(() => {    
    if (!hasOrdered) {
      navigate('/menu');
    }
  }, []);

  useEffect(() => {
    if (hasOrdered && ETATimerDone) {
      droneElem.current.classList.add('droneFlyAway');
    }
  }, [ETATimerDone]);

    return (
        <div className="background-status">
          <div className="ordernum">
            <h4>Ordernummer: {orderNr} </h4>
          </div>
          <div className="drone" ref={droneElem}>
            <img src= {Drone} alt='Drone'/>
          </div>
          <div className="order">
            <h1>Din beställning är {ETATimerDone ? "framme" : "på väg"}!</h1>
          </div>
          <div className="timer">
            <h3>{ETATimerDone ? "" : `ETA: ${eta} minuter`}</h3>
          </div>
          <div className ='button-button'>
          <button className='button-status' onClick={() => {navigate('/menu') }}><h3>Ok, cool!</h3></button>
          </div>
        </div>
    )
}


export default Status;