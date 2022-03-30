import  Landings from'../assets/graphics/airbean-landing.svg';
import '../views/landing.css';



function Landing() {
    return (
        <div className="airbeanfront,sides">
        

            <h2 className="a">A</h2>
            <h2 className="air">AIR BEAN</h2>
            <p className="drone"> DRONEDELIVERED COFFE</p>
            <img src={Landings} alt="landings"></img>
            
        </div>
    )
}

export default Landing;