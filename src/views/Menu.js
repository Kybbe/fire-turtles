import Add from '../assets/graphics/add.svg';

function Menu() {
    return (
        <div className="menuInfo">
        <h1>MENU</h1>

        <h2 className="coffe"> Kaffe Latte </h2>
        <h2 className="price">40 SEK</h2>
        <p className="product"> mjölk + kaffe acceptera eller dra</p>
        <img src={Add} alt="add"></img>

        </div>

    )
}

export default Menu;