function Nav() {
    const navList = ['Home', 'Shop', 'Sale']
    const navListMapped = navList.map((item, index) => {
        return <li className='nav-button' key={index}>{item}</li>
    })

    return (
        <>
            <div className='nav-container'>
                <h3 className='nav-title'><strong>FRESH</strong></h3>
                <ul className='nav-list'>
                    {navListMapped}
                </ul>
                <h2>CART</h2>
            </div>
        </>
    )
}

export default Nav
