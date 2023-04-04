function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/pictures/logo_white.svg`} />
                </li>
                <li>
                  <p>
                    Компания «Султан» — снабжаем<br /> розничные магазины товарами<br />
                    "под ключ" в Кокчетаве и Акмолинской<br /> области
                  </p>
                </li>
                <li><span>Подпишись на скидки и акции</span></li>
                <li><input type="text" placeholder="Введите ваш E-mail" /></li>
            </ul>

            <ul>
                <li>Меню сайта:</li>
                <li><a>О компании</a></li>
                <li><a>Доставка и оплата</a></li>
                <li><a>Возврат</a></li>
                <li><a>Контакты</a></li>
            </ul>

            <ul>
                <li>Категории:</li>
                <li><a>Бытовая химия</a></li>
                <li><a>Косметика и гигиена</a></li>
                <li><a>Товары для дома</a></li>
                <li><a>Товары для детей и мам</a></li>
                <li><a>Посуда</a></li>
            </ul>

            <ul>
                <li>Скачать прайс-лист:</li>
                <li>
                    <a className="button" href="#">Прайс-лист
                        <b className="material-icons">vertical_align_bottom</b>
                    </a>
                </li>
                <li>Связь в мессенджерах:</li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/pictures/whatsApp.png`} />
                    <img src={`${process.env.PUBLIC_URL}/pictures/telegram.png`} />
                </li>
            </ul>

            <ul>
                <li>Контакты:</li>
                <li> +7 (777) 490-00-91
                    <span><br />время работы: 9:00-20:00</span>
                    <span id="phone"><br/>Заказать звонок</span>
                </li>
                <li id="email">opt.sultan@mail.ru
                    <span><br />На связи в любое время<br /></span>
                </li>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/pictures/Visa.png`} />
                    <img src={`${process.env.PUBLIC_URL}/pictures/MasterCard.png`} />
                </li>
            </ul>
        </footer>
    );
}

export { Footer };