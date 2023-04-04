import React from 'react';


function TypeFilter (props) {
    const {
        goods = [],
        category,
        showFilter = Function.prototype,
    } = props;

    let types = [];

    return (
        <>
        {goods.map((item) => {
                if (item.category === category) {

                    if (!types.includes(item.target)) {
                        types.push(item.target);

                        return (
                            <span
                                className="types-filter"
                                onClick={() => showFilter(item.target)}
                            >
                                {item.target}

                            </span>
                        )
                    }

                }
            })}

        </>
    );
}

export {TypeFilter};