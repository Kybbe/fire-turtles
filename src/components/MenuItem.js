import { useDispatch } from "react-redux";
import add from '../assets/graphics/add.svg';
import { addToCart } from "../store/menuActions";

function MenuItem(props) {
    
    const dispatch = useDispatch();

    function addItem(item) {
		console.log("adding item to cart", item);
		dispatch( addToCart(item) );
	}
	
    return (
        <li className='menuItem' onClick={() => addItem({ name: props.item.title, price: props.item.price })}>
            <img src={add} alt="add" className='menuPlus'></img>
            <div className='menuItemText'>
                <h2 className="menuTitle"> { props.item.title } </h2>
                <p className="menuDescription">{ props.item.desc }</p>
            </div>
            <h2 className="menuPrice"> { props.item.price } kr</h2>
        </li>
    )
}

export default MenuItem;