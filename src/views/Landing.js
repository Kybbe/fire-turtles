import  Landings from'../assets/graphics/airbean-landing.svg';
import Sides1 from '../assets/graphics/intro-graphic-left.svg';
import Sides2 from '../assets/graphics/intro-graphic-right.svg';





function Landing() {
    return (
        <div className="airbeanfront Sides1 Sides2 ">
        


            <img src={Landings} alt="landings"></img>
            <img src={Sides1} alt="sides1"></img>
            <img src={Sides2} alt="sides2"></img>
          
            
        </div>
    )
}

export default Landing;