import  Landings from'../assets/graphics/airbean-landing.svg'



function Landing() {
    return (
        <div className="airbeanfront">
        

            <h2 className="a"> A </h2>
            <h2 className="air">AIR BEAN</h2>
            <p className="drone"> DRONEDELIVERED COFFE</p>
            <img src={Landings} alt="landings"></img>
        </div>
    )
}

export default Landing;