function Nav() {
    const navList = ['Home', 'Shop', 'Sale']
    const navListMapped = navList.map((item, index) => {
        return <li className='nav-button' key={index}>{item}</li>
    })

    return (
        <>
            <ul className='nav-list'>
                {navListMapped}
            </ul>
        </>
    )
}

export default Nav
