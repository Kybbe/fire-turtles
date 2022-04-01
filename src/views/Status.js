import Drone from '../assets/graphics/drone.svg';
import { useEffect, useState} from 'react';



function Status() {
  const [eta, setEta] = useState('')
  const [orderNr, setOrderNr] = useState('')

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order"

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setEta(json.eta);
        setOrderNr(json.orderNr)
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
            <h3>{eta} minuter</h3>
          </div>
          <button className='button-status'><h3>Ok, cool!</h3></button>
        </div>
    )
}

export default Status;