import Drone from '../assets/graphics/drone.svg';

function Status() {
    return (
        <div className="background">
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
          <button><h3>Ok, cool!</h3></button>
        </div>
    )
}

export default Status;