import Drone from '../assets/graphics/drone.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart } from "../store/menuActions";

function Status() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch( deleteCart() )
      localStorage.removeItem("cart");
    }, [])
    return (
        <div className="background backgroundOrange">
          <div className="ordernum">
            <h4>Ordernummer: </h4>
          </div>
          <div className="drone">
            <img src= {Drone} alt='Drone'/>
          </div>
          <div className="order">
            <h1>Din beställning är på väg!</h1>
          </div>
          <div className="timer">
            <p>13 minuter</p>
          </div>
          <button onClick={() => {navigate('/menu') }}><h3>Ok, cool!</h3></button>
        </div>
    )
}

export default Status;