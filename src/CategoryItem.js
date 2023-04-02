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
                <img src={categoryImage} alt={name} />
            </div>

            <span> {name} </span>

        </div>
    );
}

export { CategoryItem };