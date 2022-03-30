import Add from '../assets/graphics/add.svg';

function Menu() {
    return (
        <div className="menuInfo">
        <h1>MENU</h1>

        <h2 className="coffe"></h2>
        <h2 className="price"></h2>
        <p className="product"></p>
        <img src={Add} alt="add"></img>

        </div>

    )
}

export default Menu;