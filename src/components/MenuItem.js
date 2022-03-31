

function MenuItem() {
    function addItem(item) {
		console.log("adding item to cart", item);
		dispatch( addToCart(item) );
	}
	
    return (

        <li className='menuItem' onClick={() => addItem({ name: "Kaffe Latte", price: "40" })}>
            <img src={add} alt="add" className='menuPlus'></img>
            <div className='menuItemText'>
                <h2 className="menuTitle"> Kaffe Latte </h2>
                <p className="menuDescription">description</p>
            </div>
            <h2 className="menuPrice">40 kr</h2>

        </li>
    )
}

export default MenuItem;