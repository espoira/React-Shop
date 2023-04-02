function Address() {
    return (
        <section id="address">

            <div className="contacts">
                <h3>Контакты</h3>
                <p>Оптовый поставщик «Султан»</p>

                <div className="address-item">
                    <b> Адрес:<br/> </b>
                    <span>
                        г. Кокчетав, ул. Ж. Ташенова 129Б<br/>
                        <i>(Рынок Восточный)</i>
                    </span>
                </div>

                <div className="address-item">
                    <b> Отдел продаж:<br/> </b>
                    <span>
                         +7 (777) 490-00-91<br/>
                         opt.sultan@mail.ru
                    </span>
                </div>

                <div className="address-item">
                    <b><br/> Данные налогоплательщика:<br/> </b>
                    <span>
                        ИП Катран Д.С.<br/>
                        ИНН: 860113450858
                    </span>
                </div>

            </div>

        </section>
    );
}

export { Address };