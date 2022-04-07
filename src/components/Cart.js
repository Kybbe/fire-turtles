import bag from '../assets/graphics/bag.svg';

import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from "../store/menuActions";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';

function Cart() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
	const user = useSelector(state => state.user);

	const cartElem = useRef(null);
	const cartTotalElem = useRef(null);
	
	function openCart() {
		cartElem.current.classList.toggle('openCart');
		document.querySelector('.transparentBlackBackground').classList.toggle('hidden');
		document.querySelector('.App').classList.toggle('noOverflowScroll');
	}
	
	async function order() {
		console.log('order function cart');
		if(cart.length === 0) {
			return;
		}
	  openCart();
		console.log('order', user.id);
		if(user.id !== undefined) {
			let response = await fetch(`http://localhost:5002/api/beans/order/${user.id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({items: cart})
			})
			let data = await response;
			if(data.status === 200) {
				data = await response.json();
				console.log("Order placed!")
				await dispatch({type: "SET_HAS_ORDERED"});
				await dispatch({type: "SET_ORDER_NR&ETA", payload: {orderNr: data.orderNr, eta: data.eta}});
				await dispatch({type: "SET_HAS_STARTED_ETA_TIMER", payload: true});
				await dispatch({type: "SET_ETATIMER_DONE", payload: false});
				await dispatch( deleteCart() )
				navigate("/status");
			}
			else {
				console.log("Couldn't place order!")
			}
		}
		else {
			console.log("Not logged in!")
			alert("Du måste logga in för att kunna beställa!");
			navigate('/profile');
		}
	}

	//go through all items in cart and calculate total price from item.price
	var totalPrice = 0;
	for (let i = 0; i < cart.length; i++) {
		totalPrice += Number(cart[i].price * cart[i].quantity);
	}

	// go through all items in cart and calculate total quantity from item.quantity
	var totalQuantity = 0;
	for (let i = 0; i < cart.length; i++) {
		totalQuantity += Number(cart[i].quantity);
	}

	//if "Gustav Adolfsbakelse" and "Bryggkaffe" is in cart, remove 40 from total price for each pair (so if there are 3 pairs, it will remove 120)
	//the items may not be beside each other in the cart, so we need to check all items in the cart
	var gustavs = 0;
	var bryggkaffe = 0;
	var kampanjer = 0;
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].name === "Gustav Adolfsbakelse") {
			gustavs = cart[i].quantity;
		}
		if (cart[i].name === "Bryggkaffe") {
			bryggkaffe = cart[i].quantity;
		}
	}
	//while they are both above 0, remove one from each and remove 40 from total price
	while (gustavs > 0 && bryggkaffe > 0) {
		gustavs--;
		bryggkaffe--;
		kampanjer++;
		totalPrice -= 40;
	}

	//NEDAN GÖR VI LOCALSTORAGE TILL CARTEN SÅ DET SPARAS NÄR VI UPPDATERAR SIDAN. 
    
	 //useEffect - varjegång något uppdateras gör vi en funktion. Kommer senare användas i localstorage / callback.
	 useEffect(() => {
		function loadFromLocalStorage() {
		  let cartFromStorage = JSON.parse(localStorage.getItem("cart")) //localstorage del 2: hämtar datan du skickat/sparat in på webben och sätter vårat state till datan/skickar tillbaka infon. 
		  if(cartFromStorage !== null && cartFromStorage.length > 0) {
			dispatch(addCart(cartFromStorage))
		  }
		}
		loadFromLocalStorage()
	  }, [])
	
	  // localStorage del 1; sparar vår info i localstorage/webbläsaren. 
	  useEffect(() => {
		function saveToLocalStorage() {
		  localStorage.setItem("cart", JSON.stringify(cart))
		}
		function makeButtonBigAnimation() {
			if(cartTotalElem.current.classList === undefined) { return }
			cartTotalElem.current.classList.add('orderButtonAnimation');
			setTimeout(() => {
				cartTotalElem.current.classList.remove('orderButtonAnimation');
			}, 300);
		}		
		makeButtonBigAnimation();
		saveToLocalStorage()
	  }, [cart])
	
	return(
		<div>
			<div className="cart" ref={cartElem}>
			<h1 style={{textAlign: "center"}}>Din beställning</h1>

			{cart.length !== 0 ? <ul className='cartList'>
				{cart.map((item, index) => (			
					<CartItem item={item} key={index} />
				))}
			</ul>: <h3 style={{textAlign: "center"}}>Inget i din kundvagn😢</h3>}

			<div className='cartBottom'>
				<div className='cartBottomText'>
					<h2 style={{margin: "0"}}>Total</h2>
					<h4 className='kampanjer' style={{marginTop: "5px", marginBottom: "0px"}}>{kampanjer > 0 ? `You saved ${kampanjer * 40}kr!` : ""}</h4>
					<p style={{marginTop: "5px"}}>Inkl moms + drönarleverans</p>
				</div>
				<div className='cartBottomPrice'>
					<h2 style={{marginTop: "0"}}>{totalPrice} kr</h2>
				</div>
			</div>
			<button className='cartOrder' onClick={order}>Take my money!</button>

		</div>
		<div style={{position: "relative"}}>
			<button className='cartBtn' onClick={openCart}><img src={bag} alt="bag"></img></button>
			<p className='cartTotal' ref={cartTotalElem} onClick={openCart}>{totalQuantity}</p>
		</div>
		</div>
	)
}

export default Cart;
