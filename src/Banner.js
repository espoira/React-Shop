function Banner() {
    return (
        <section id={'banner'}>

            <article>
                <h1>Бытовая химия,<br/> косметика<br/> и хозтовары</h1>
                <h2>оптом по кокчетаву и области</h2>

                <a className="button" href="#categories">В КАТАЛОГ</a>

                <div>
                    <pre>{`
                        Только самые
                        выгодные предложения
                        `}
                    </pre>
                    <pre>{`
                        Бесплатная доставка
                        по`} <b>{`Кокчетаву от 10 тыс ₸`}</b>
		            </pre>
                </div>

            </article>

        </section>
    );
}

export { Banner };