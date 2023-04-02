function Header() {
    return (
        <header>
            <div id="contacts">
	            <span>
		          <b> г. Кокчетав, ул. Ж. Ташенова 129Б </b>
		          <br /> (Рынок Восточный)
		        </span>
                <span>
		          <b>opt.sultan@mail.ru</b>
		          <br /> На связи в любое время
		        </span>
            </div>

            <nav>
                <a>О компании</a>
                <a>Доставка и оплата</a>
                <a>Возврат</a>
                <a>Контакты</a>
            </nav>

            <div id="info">
                 <img src="pictures/logo_sultan.svg" />
                 <a className="button" href="#">
                     Каталог<b className="material-icons">border_all</b>
                 </a>
                 <input type="text" placeholder="Поиск..." />
                 <p>
                     +7 (777) 490-00-91 <br />
                     <i>время работы: 9:00-20:00</i>
                     <br /> <i> Заказать звонок </i>
                 </p>
                 <img id="img-call" src="pictures/help_call.png" />
                 <a className="button" id="btn-list" href="#">Прайс-лист
                     <b className="material-icons">vertical_align_bottom</b>
                 </a>
                 <i></i>
            </div>
        </header>
    );
}

export { Header };