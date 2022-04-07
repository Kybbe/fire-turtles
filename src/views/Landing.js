import  Landings from'../assets/graphics/airbean-landing.svg';
import Sides1 from '../assets/graphics/intro-graphic-left.svg';
import Sides2 from '../assets/graphics/intro-graphic-right.svg';

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMenu } from '../store/menuActions';

function Landing() {
  const navigate=useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
      const url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu"
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          dispatch( addMenu(json) )
          console.log(addMenu(json));
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, []);

  return (
    <section style={{height: "100%"}} onClick={() => {navigate('/menu')}}>
        <div className='landing backgroundLandingGreen ' >
        <img src={Landings} alt="landings"></img>
        <img src={Sides1} alt="sides1" className=" Sides1"></img>
        <img src={Sides2} alt="sides2" className="Sides2"></img>
    </div>
    </section>  
  )
}

export default Landing;