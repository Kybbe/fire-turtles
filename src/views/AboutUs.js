import Header from '../assets/graphics/graphics-header.svg';
import Footer from '../assets/graphics/graphics-footer.svg';
import Cortado from '../assets/graphics/eva-cortado.jpg';

import '../App.css'

export default function AboutUs() {
 
  return (
   
   
    <div className="about backgroundBeige "> <img src={Header} alt="sides1" className=" Header"></img>
      
      <h1 style={{textAlign: "center"}}>Om oss</h1>
      <p>Airbean:s historia går tillbaka till 20,000 B.C när vår skapare Airius beaniclus lyfte sin nybryggda kanna kaffe för snabbt, och råkade kasta den ner i händerna på sin kompis. Detta ledde Airius till en häpnadsväckande upptäckt! Blandningen av luftigt kaffe och extremt snabb leverans blev en succé direkt. Sen dess har imperiet aldrig slutat växa. Den senaste utvecklingen hos Airbean har varit övergången från kastande till drönare, vilket har ökat effektiviteten och säkerheten hos våra kunder med 80000%! </p>
      <p>Du är välkommen in att testa den godaste versionen av ditt favoritkaffe, med en helt unik tvist av leverans! Airbean lovar nu även en brännskade-fri upplevelse!</p>
    
      <h3>Airbean:s kaffe är:</h3>
      <ul>
        <li>Ekologiskt</li>
        <li>Närproducerat</li>
        <li>Veganskt</li>
        <li>Laktosfritt</li>
        <li>Sockerfritt</li>
        <li>Fritt från färgämnen</li>
        <li>Utan konserveringsmedel</li>
        <li>Utan palmolja</li>
        <li>Fairtrade</li>
        <li>Nyckelhåls-märkt</li>
        <li>Kaffe-fritt</li>
        <li>Svanenmärkt</li>
        <li>Gjort på äkta läder</li>
      </ul>

      <h5>Kan innehålla spår av: </h5>
      <ul>
        <li>Mjölk</li>
        <li>Socker</li>
        <li>Barnarbete</li>
        <li>Vatten</li>
        <li>Kaffe</li>
        <li>Nyckelhål</li>
        <li>Svanar</li>
        <li>Palmolja</li>
        <li>Nötter</li>
        <li>Skaldjur</li>
        <li>Barn</li>
        <li>Gelatin</li>
        
      </ul>
      <img src={Cortado} alt="sides2" className="Cortado"></img>
      <h2>EVA CORTADO</h2>
      <h1>VD & GRUNDARE</h1>
      <img src={Footer} alt="sides2" className="Footer"></img>
     
    </div >
  );
}