import  Landings from'../assets/graphics/airbean-landing.svg';
import Sides1 from '../assets/graphics/intro-graphic-left.svg';
import Sides2 from '../assets/graphics/intro-graphic-right.svg';
import Menu from './Menu';




function Landing() {
    return (
    <section><button onClick={<Menu />}>Menu</button>
        <div className="airbeanfront  ">

            <img src={Landings} alt="landings"></img>
            
            
         </div>
          <div className=" Sides1  ">
        
          <img src={Sides1} alt="sides1"></img>
          
        </div>

        <div className=" Sides2 ">
    
        <img src={Sides2} alt="sides2"></img>
        </div>
    </section>
            
    )
}

export default Landing;