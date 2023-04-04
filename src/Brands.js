function Brands() {

    let arr = ['01','02','03','04','05','06','07','08','09','10'];

    return (
        <section id="brands">

            <h3> <span>Лучшие</span> товары </h3>
            <p>От ведущих мировых брендов</p>

            {arr.map((item) => {

                return (<img src = {`${process.env.PUBLIC_URL}/images/brand-${item}.png`} />);

            })}

            <div className="pagination">
                <span></span> <span></span> <span></span> <span></span>
            </div>

        </section>
    );
}

export { Brands };