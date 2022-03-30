import  Add from'../assets/graphics/airbean-landing.svg'



function Landing() {
    return (
        <div className="airbeanfront">
            <h1>MENU</h1>

            <h2 className="a"> A </h2>
            <h2 className="air">AIR BEAN</h2>
            <p className="drone"> DRONEDELIVERED COFFE</p>
            <img src={Add} alt="add"></img>
        </div>

    )
}

export default Landing;