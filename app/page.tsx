const stores = [
  { name: "Гипермаркет «Лента»", address: "Московское шоссе, 2", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20Московское%20шоссе%2C%202%2C%20Лента", twoGis: "https://2gis.ru/vladimir/search/Московское%20шоссе%202%20Лента" },
  { name: "ТРЦ «Ашан»", address: "улица Тракторная, 45А", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20Тракторная%2045А%2C%20Ашан", twoGis: "https://2gis.ru/vladimir/search/Тракторная%2045А%20Ашан" },
  { name: "ТЦ «Крейсер»", address: "проспект Ленина, 46А", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20проспект%20Ленина%2046А%2C%20Крейсер", twoGis: "https://2gis.ru/vladimir/search/проспект%20Ленина%2046А%20Крейсер" },
  { name: "ТЦ «Черемушки»", address: "проспект Строителей, 9Б", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20проспект%20Строителей%209Б%2C%20Черемушки", twoGis: "https://2gis.ru/vladimir/search/проспект%20Строителей%209Б%20Черемушки" },
  { name: "ТЦ «Батуринский»", address: "улица Батурина, 20", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20улица%20Батурина%2020%2C%20Батуринский", twoGis: "https://2gis.ru/vladimir/search/улица%20Батурина%2020%20Батуринский" },
  { name: "ТЦ «Восток-1»", address: "улица Егорова, 8Б", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20улица%20Егорова%208Б%2C%20Восток-1", twoGis: "https://2gis.ru/vladimir/search/улица%20Егорова%208Б%20Восток-1" },
  { name: "ТЦ «Торговые ряды»", address: "улица Большая Московская", yandex: "https://yandex.ru/maps/?text=Владимир%2C%20Большая%20Московская%2C%20Торговые%20ряды", twoGis: "https://2gis.ru/vladimir/search/Большая%20Московская%20Торговые%20ряды" },
];

export default function Home() {
  return (
    <main className="page">
      <div className="link-page">
        <header className="brand-bar">
          <span className="wordmark">PARFUM OIL</span>
          <span className="city"><i aria-hidden="true" /> Владимир</span>
        </header>

        <section className="intro">
          <p className="kicker">Отзыв → пробник в подарок</p>
          <h1>Выберите магазин</h1>
          <p className="intro-text">
            Найдите адрес, где вы были, и выберите удобные карты для отзыва.
          </p>
        </section>

        <section className="addresses" aria-labelledby="addresses-title">
          <div className="section-label">
            <h2 id="addresses-title">Наши адреса</h2>
            <span>{stores.length} точек</span>
          </div>

          <div className="address-list">
            {stores.map((store, index) => (
              <details className="address-item" key={store.name}>
                <summary>
                  <span className="address-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="address-copy">
                    <strong>{store.name}</strong>
                    <small>{store.address}</small>
                  </span>
                  <span className="toggle" aria-hidden="true" />
                </summary>
                <div className="map-buttons">
                  <a href={store.yandex} target="_blank" rel="noreferrer">
                    <img className="map-logo yandex-logo" src="/yandex-maps-logo.svg" alt="" aria-hidden="true" />
                    <span>Яндекс Карты</span>
                    <b aria-hidden="true">↗</b>
                  </a>
                  <a className="gis-button" href={store.twoGis} target="_blank" rel="noreferrer">
                    <img className="map-logo" src="/2gis-icon-logo.svg" alt="" aria-hidden="true" />
                    <span>2ГИС</span>
                    <b aria-hidden="true">↗</b>
                  </a>
                </div>
              </details>
            ))}
          </div>
        </section>

        <aside className="reward">
          <span className="reward-mark" aria-hidden="true">P</span>
          <p><strong>Покажите опубликованный отзыв консультанту</strong> и выберите пробник аромата.</p>
        </aside>

        <section className="more" aria-labelledby="more-title">
          <div className="section-label">
            <h2 id="more-title">Ещё от PARFUM OIL</h2>
          </div>
          <div className="more-grid">
            <div className="more-card catalog-card">
              <span>Интернет-магазин</span>
              <strong>Найти свой аромат</strong>
              <small>Ссылку добавим следующим шагом</small>
            </div>
            <a className="more-card social-card" href="https://www.instagram.com/parfum_oil_/" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@parfum_oil_</strong>
              <small>Новости и новинки <b aria-hidden="true">↗</b></small>
            </a>
          </div>
        </section>

        <footer>
          <span>PARFUM OIL</span>
          <small>Владимир</small>
        </footer>
      </div>
    </main>
  );
}
