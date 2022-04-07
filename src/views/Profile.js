import header from '../assets/graphics/graphics-header.svg';

import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const storeUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  var createdId = "asd";
  async function getId() {
    const response = await fetch('http://localhost:5002/api/beans/key');
    const data = await response.json();
    createdId = data.key;
    console.log("id", createdId)
  }
  
  async function getUserCreateUser() {
    await getId()
    const userInput = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
    }
    //if any part of userInput is empty, return
    if (userInput.name === "" || userInput.email === "") {
      alert("Du måste fylla i alla fält!");
      return;
    }
    let databaseUser = await fetch(`http://localhost:5002/api/beans/profileFind/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    const data = await databaseUser.json();
    if(data.profile !== undefined) {
      console.log("Found you! :", data);
      dispatch({type: "ADD_USER", payload: data.profile});
    } else {
      if(document.getElementById("GDPR").checked === false) {
        alert("Du måste godkänna GDPR-villkoren!");
        return;
      }
      console.log("Creating new user!", await createdId);
      let response = await fetch(`http://localhost:5002/api/beans/profile/${createdId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
      })
      let data = await response.status;
      if(data === 200){
        dispatch({type: "ADD_USER", payload: {...userInput, id: createdId}})
        console.log("could'nt find you :(")
      }
    }
  }

  let totalTotal = 0;
  if(storeUser !== 0 && storeUser !== null) {
    if(storeUser.orderHistory !== undefined) { 
      //go through all storeUser.orderHistory and calculate totalTotal
      for (let i = 0; i < storeUser.orderHistory.length; i++) {
        totalTotal += Number(storeUser.orderHistory[i].total);
      }
    }
  }

  return (
    <div className="profile backgroundBlack" >
      <img src={header} alt="header" className="header"></img>

      <h1 style={{textAlign: "center", marginTop: "0"}}>Profile</h1>
        {/* loop through all values in storeUser */}
        {!storeUser ? (<div className="form backgroundBeige">
          <h2 className='textCenter littleMargin'>Välkommen till AirBean-familjen!</h2>
          <h4 className='textCenter littleMargin'>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h4>
          <label htmlFor="name">Namn</label>
          <input id="name" type="text" placeholder="Namn" />
          <label htmlFor="email">E-post</label>
          <input id="email" type="email" placeholder="E-post" />

          <div id='GDPRContainer'>
            <input type="checkbox" id="GDPR" />
            <label htmlFor="GDPR" id="GDPRText">Jag godkänner att AirBean behandlar mina personuppgifter enligt GDPR.</label>
          </div>

          <button onClick={getUserCreateUser}>Skapa konto/Logga in</button>
        </div>
        ): (
          <div>
            <div className='justifyCenter'>
              <svg width="94" height="94" viewBox="0 0 94 94" fill="none" style={{borderRadius: "50%", background: "#F3E3E0"}} xmlns="http://www.w3.org/2000/svg">
                <circle cx="47" cy="47" r="47" fill="#F3E4E1"/>
                <circle cx="47" cy="47" r="47" fill="#F3E4E1"/>
                <path d="M52.5546 56.3248C62.5736 53.8402 70 44.7873 70 34C70 21.2975 59.7025 11 47 11C34.2975 11 24 21.2975 24 34C24 44.7873 31.4264 53.8402 41.4454 56.3248C18.1059 59.0727 0 78.9219 0 103C0 128.957 21.0426 150 47 150C72.9574 150 94 128.957 94 103C94 78.9219 75.8941 59.0727 52.5546 56.3248Z" fill="#E5674E"/>
              </svg>
            </div>
            <h2 className='textCenter'>{storeUser.name}</h2>
            <h3 className='textCenter'>{storeUser.email}</h3>
            
            <h4 className='textCenter'>Orderhistorik</h4>
            {storeUser.orderHistory ? (
              <div>
                <ul style={{padding: "20px", paddingBottom: 0, marginBottom: 0}}>
                  { storeUser.orderHistory.map((order, index) => {
                    return <li key={index} style={{display: "flex", flexDirection: "column", borderBottom: "1px solid grey", marginBottom: "10px"}}>
                      <div className="orderHistoryHigher" style={{display: "flex", justifyContent: "space-between"}}>
                        <h5 style={{margin: "0", marginBottom: "5px"}}>{order.orderNr}</h5>
                        <h5 style={{margin: "0", marginBottom: "5px"}}>{order.timeStamp}</h5>
                      </div>
        
                      <div className="orderHistoryLower" style={{display: "flex", justifyContent: "space-between"}}>
                        <h5 style={{margin: "0", marginBottom: "5px"}}>Total ordersumma:</h5>
                        <h5 style={{margin: "0", marginBottom: "5px"}}>{order.total}</h5>
                      </div>
                    </li>
                  })}
                </ul>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0", paddingLeft: "20px", paddingRight: "20px"}}><h4 style={{margin: 0}}>Totalt spenderat:</h4> <h4 style={{margin: 0}}>{totalTotal}</h4></div>
              </div>
            ) : (
              <div style={{textAlign: "center"}}>Du har inga orderhistorik</div>
            )}
            <button onClick={() => { dispatch({type: "ADD_USER", payload: 0}); }} className="profileLogOut">Logga ut</button>
          </div>
        )}
    </div>
  )
}