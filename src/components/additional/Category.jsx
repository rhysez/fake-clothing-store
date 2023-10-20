function Category(props) {
    return (
        <div className='category'>
            <img className='category-image' src={props.image} alt={props.alt} />
            <p className='category-text'>{props.text}</p>
        </div>
    )
}

export default Category