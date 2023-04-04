function CategoryItem(props) {
    const {
        id,
        name,
        showList,
    } = props;

    const categoryImage = '/images/category-' + id + '.png';

    return (
        <div className='category' onClick={() => showList(id)}>

            <div>
                <img src={process.env.PUBLIC_URL + categoryImage} alt={name} />
            </div>

            <span> {name} </span>

        </div>
    );
}

export { CategoryItem };