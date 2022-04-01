
//här gör vi samma menu & menuItem, vi gör en funktion i en separat fil och skickar sedan in den i Cart för att göra det mer strukturerat. 

function CartItem() {
    return (
        //<div className="cartItem">
            <li className='cartItem' key={item.name?item.name:""}>
					<div className='itemText'>
						<h3 className='cartTitle'>{item.name?item.name:""}</h3>
						<p className='cartPrice'>{item.price?item.price:""} kr</p>
					</div>
					<div className="quantity">
						<button className='arrow up' onClick={() => addItem({name: item.name, price: item.price})}><img src={upArrow} alt="Up arrow"></img></button>
						<p className='cartQuantity'>{item.quantity?item.quantity:""}</p>
						<button className='arrow down' onClick={() => removeItem(item.name)}><img src={downArrow} alt="Down arrow"></img></button>
					</div>
				</li>
        //</div>
    )
}

export default CartItem;