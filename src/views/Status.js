import Drone from '../assets/graphics/drone.svg';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setOrderNrAndETA} from '../store/menuActions';


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
        console.log(setOrderNrAndETA(json));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

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
          <button className='button-status'><h3>Ok, cool!</h3></button>
        </div>
    )
}

export default Status;