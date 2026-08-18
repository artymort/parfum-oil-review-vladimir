const stores = [
  { name: "Гипермаркет «Лента»", address: "Московское шоссе, 2", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20Московское%20шоссе%2C%202%2C%20Лента", twoGis: "https://2gis.ru/barnaul/search/Московское%20шоссе%202%20Лента" },
  { name: "ТРЦ «Ашан»", address: "улица Тракторная, 45А", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20Тракторная%2045А%2C%20Ашан", twoGis: "https://2gis.ru/barnaul/search/Тракторная%2045А%20Ашан" },
  { name: "ТЦ «Крейсер»", address: "проспект Ленина, 46А", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20проспект%20Ленина%2046А%2C%20Крейсер", twoGis: "https://2gis.ru/barnaul/search/проспект%20Ленина%2046А%20Крейсер" },
  { name: "ТЦ «Черемушки»", address: "проспект Строителей, 9Б", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20проспект%20Строителей%209Б%2C%20Черемушки", twoGis: "https://2gis.ru/barnaul/search/проспект%20Строителей%209Б%20Черемушки" },
  { name: "ТЦ «Батуринский»", address: "улица Батурина, 20", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20улица%20Батурина%2020%2C%20Батуринский", twoGis: "https://2gis.ru/barnaul/search/улица%20Батурина%2020%20Батуринский" },
  { name: "ТЦ «Восток-1»", address: "улица Егорова, 8Б", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20улица%20Егорова%208Б%2C%20Восток-1", twoGis: "https://2gis.ru/barnaul/search/улица%20Егорова%208Б%20Восток-1" },
  { name: "ТЦ «Торговые ряды»", address: "улица Большая Московская", yandex: "https://yandex.ru/maps/?text=Барнаул%2C%20Большая%20Московская%2C%20Торговые%20ряды", twoGis: "https://2gis.ru/barnaul/search/Большая%20Московская%20Торговые%20ряды" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label="Основная навигация">
          <a className="wordmark" href="#top" aria-label="Parfum Oil — наверх">PARFUM OIL</a>
          <a className="city-chip" href="#stores">
            <span className="city-dot" aria-hidden="true" />
            Барнаул
            <span className="city-count">7 адресов</span>
          </a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> Спасибо, что выбрали нас</p>
            <h1>Ваше мнение —<span>наш лучший ингредиент.</span></h1>
            <p className="hero-lead">Выберите магазин, в котором были, поделитесь впечатлением — и покажите отзыв консультанту.</p>
            <a className="primary-cta" href="#stores">Выбрать магазин <Arrow /></a>
          </div>

          <div className="sample-stage" aria-label="Пробник аромата в подарок">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="vial-shadow" />
            <div className="vial" aria-hidden="true">
              <div className="vial-cap" />
              <div className="vial-glass"><span>PARFUM</span><b>OIL</b><i>sample</i></div>
            </div>
            <div className="gift-seal"><span>ваш</span><strong>ПРОБНИК</strong><span>в подарок</span></div>
            <p className="stage-note">Аромат выбираете вы</p>
          </div>
        </div>

        <ol className="steps" aria-label="Как получить пробник">
          <li><span>01</span> Найдите свой магазин</li>
          <li><span>02</span> Выберите удобные карты</li>
          <li><span>03</span> Поделитесь впечатлением</li>
        </ol>
      </section>

      <section className="stores-section" id="stores">
        <div className="section-heading">
          <div><p className="eyebrow"><span>02</span> Наши адреса</p><h2>Где вы были?</h2></div>
          <p className="section-intro">Нажмите на нужный адрес, затем выберите площадку — Яндекс Карты или 2ГИС.</p>
          <span className="huge-count" aria-hidden="true">07</span>
        </div>

        <div className="store-list">
          {stores.map((store, index) => (
            <article className="store-card" key={store.name}>
              <span className="store-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="store-copy"><h3>{store.name}</h3><p>{store.address}</p></div>
              <div className="map-actions">
                <a href={store.yandex} target="_blank" rel="noreferrer"><span className="map-monogram yandex-mark">Я</span>Яндекс Карты<Arrow /></a>
                <a className="two-gis" href={store.twoGis} target="_blank" rel="noreferrer"><span className="map-monogram gis-mark">2</span>2ГИС<Arrow /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="honest-note">
          <span className="note-star" aria-hidden="true">✳</span>
          <p>Нам важны ваши настоящие впечатления — так мы становимся лучше. После публикации покажите отзыв консультанту и выберите пробник.</p>
        </div>
      </section>

      <section className="shop-section" id="shop">
        <div className="shop-copy">
          <p className="eyebrow light"><span>03</span> Продолжить знакомство</p>
          <h2>Аромат, который<br />захочется забрать с собой.</h2>
          <p>Скоро здесь появятся хиты сезона с переходом прямо в карточку товара интернет-магазина.</p>
          <a className="shop-link" href="#top">В интернет-магазин <Arrow /></a>
        </div>
        <div className="notes-stack" aria-label="Будущая подборка ароматов">
          <article className="note-card note-card-one"><span>01 / woody</span><strong>Кедр<br />&amp; инжир</strong><i>скоро</i></article>
          <article className="note-card note-card-two"><span>02 / floral</span><strong>Ирис<br />&amp; мускус</strong><i>скоро</i></article>
          <article className="note-card note-card-three"><span>03 / amber</span><strong>Амбра<br />&amp; ваниль</strong><i>скоро</i></article>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">PARFUM OIL</a>
        <p>Парфюмерные масла, которые остаются в памяти.</p>
        <span>Барнаул · 2026</span>
      </footer>
    </main>
  );
}
