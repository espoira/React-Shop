import React from 'react';
import { CompanyFilter } from './CompanyFilter';

function TypeFilter (props) {
    const {
        goods,
        category,
        showFilter = Function.prototype,
        showCompany = Function.prototype,
    } = props;


    let types = [];

    return (
        <>
            {goods.map((item) => {
                if (item.category === category) {

                    if (!types.includes(item.target)) {
                        types.push(item.target);

                        return (
                            <span key={item.id} className="types-filter"
                                  onClick={() => showFilter(item.target)}
                            >
                                {item.target}

                            </span>
                        )
                    }

                }
            })}

            <div className="filters">
                <p>Подбор по параметрам:</p>

                <CompanyFilter goods={goods} category={category} showCompany={showCompany} />


                {types.map((item) => {

                    return (
                        <p key={item} onClick={() => showFilter(item)}>{item}</p>
                    )

                })}

            </div>

        </>
    );
}

export {TypeFilter};