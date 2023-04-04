import React from 'react';


function CompanyFilter (props) {
    const {
        goods = [],
        category,
        showCompany = Function.prototype,
    } = props;

    let count = 0;
    let producers = [];

    return (
        <>
            <span>Производитель</span>
            <input type="text" placeholder="Поиск..." />

            {goods.map((item) => {
                if (item.category === category) {

                    if (!producers.includes(item.company)) {
                        producers.push(item.company);

                        return (
                            <label>
                                <input type="checkbox" onChange={() => showCompany(item)} />
                                <span>{item.company}</span>
                            </label>
                        )
                    }

                }
            })}

            <span><br /></span>

        </>
    );
}

export {CompanyFilter};