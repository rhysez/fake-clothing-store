import { Link } from "react-router-dom";

function Nav() {

    return (
        <>
            <div className='nav-container'>
                <h3 className='nav-title'><strong>FRESH</strong></h3>
                <ul className='nav-list'>
                    <Link to='/' className='nav-button' key={1}>Home</Link>
                    <Link to='/shop' className='nav-button' key={2}>Shop</Link>
                    <Link to='/sale' className='nav-button' key={3}>Sale</Link>
                </ul>
                <h2 className='shopping-cart'>CART</h2>
            </div>
        </>
    )
}

export default Nav
