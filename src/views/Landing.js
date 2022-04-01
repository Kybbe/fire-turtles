import  Landings from'../assets/graphics/airbean-landing.svg';
import Sides1 from '../assets/graphics/intro-graphic-left.svg';
import Sides2 from '../assets/graphics/intro-graphic-right.svg';

import { useNavigate } from "react-router-dom";



function Landing() {
    const navigate=useNavigate();
function Redirect(){
    

    navigate('/menu')

}
    return (
    <section onClick={Redirect}>
       <div className='landing backgroundLandingGreen'>
        <img src={Landings} alt="landings"></img>
        <img src={Sides1} alt="sides1" className=" Sides1"></img>
        <img src={Sides2} alt="sides2" className="Sides2"></img>
    </div>
    </section>
            
    )
}

export default Landing;