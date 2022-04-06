import Drone from '../assets/graphics/drone.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderNrAndETA, deleteCart } from "../store/menuActions";


function Status() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eta = useSelector(state => state.ETA);
  const orderNr = useSelector(state => state.orderNr);

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order"

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        dispatch( setOrderNrAndETA(json) )
        console.log( setOrderNrAndETA(json) );
      } catch (error) {
        console.log("error", error);
      }
    };
    
    if (localStorage.cart && localStorage.cart.match('name')) {
      fetchData();
      dispatch( deleteCart() )
      window.localStorage.clear();
    } else {
      navigate('/menu');
      
    }
       
}, []);

    return (
        <div className="background-status">
          <div className="ordernum">
            <h4>Ordernummer: {orderNr} </h4>
          </div>
          <div className="drone">
            <img src= {Drone} alt='Drone'/>
          </div>
          <div className="order">
            <h1>Din beställning är på väg!</h1>
          </div>
          <div className="timer">
            <h3>ETA: {eta}  minuter</h3>
          </div>
          <div className ='button-button'>
          <button className='button-status' onClick={() => {navigate('/menu') }}><h3>Ok, cool!</h3></button>
          </div>
        </div>
    )
}


export default Status;