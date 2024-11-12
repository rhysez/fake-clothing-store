import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Nav({cartQuantity}) {

    return (
        <>
            <div className='nav-container'>
                <h3 className='nav-title'><strong>FRESH</strong></h3>
                <ul className='nav-list'>
                    <Link to='/' className='nav-button' key={1}>Home</Link>
                    <Link to='/shop' className='nav-button' key={2}>Shop</Link>
                </ul>
                <Link to='/cart' className='shopping-cart'>CART: {cartQuantity}</Link>
            </div>
        </>
    )
}

export default Nav
