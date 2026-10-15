
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CarFront,
  CheckCircle2,
  ShieldCheck,
  Timer,
  Users,
  X
} from "lucide-react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import AuctionCard from "./components/AuctionCard";
import { cars as initialCars, formatSom } from "./data/Cars/Cars";
import "./App.scss";

function Modal({ title, onClose, children }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal__header">
          <h2>{title}</h2>
          <button className="icon-button" onClick={onClose} aria-label="Закрыть">
            <X />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

function CarDetails({ car, onClose, onLogin }) {
  return (
    <Modal title={`${car.brand} ${car.model}`} onClose={onClose}>
      <img className="details-image" src={car.image} alt={`${car.brand} ${car.model}`} />

      <div className="details-content">
        <div className="details-tags">
          <span>{car.year} год</span>
          <span>{car.city}</span>
          <span>{car.fuel}</span>
        </div>

        <p>{car.description}</p>

        <div className="details-specs">
          <div><span>Пробег</span><strong>{car.mileage.toLocaleString("ru-RU")} км</strong></div>
          <div><span>Двигатель</span><strong>{car.engine}</strong></div>
          <div><span>Коробка передач</span><strong>{car.transmission}</strong></div>
          <div><span>Начальная цена</span><strong>{formatSom(car.startPrice)}</strong></div>
        </div>

        <div className="details-current-bid">
          <span>Текущая ставка</span>
          <strong>{formatSom(car.currentBid)}</strong>
          <small>{car.bidsCount} предложений · Осталось {car.timeLeft}</small>
        </div>

        <div className="notice">
          <ShieldCheck size={20} />
          <p>Ставки доступны только проверенным автодилерам. Владелец принимает окончательное решение после завершения торгов.</p>
        </div>

        <button className="button button--primary button--wide" onClick={onLogin}>
          Вход для дилеров
          <ArrowRight size={18} />
        </button>
      </div>
    </Modal>
  );
}

function AuthModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("dealer");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Авторизация ещё не подключена. На следующем этапе добавим сервер и проверку аккаунтов.");
  }

  return (
    <Modal title="Войти в аккаунт" onClose={onClose}>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Электронная почта
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@mail.com"
            required
          />
        </label>

        <label>
          Тип аккаунта
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option value="dealer">Автодилер</option>
            <option value="seller">Владелец автомобиля</option>
          </select>
        </label>

        <p className="form-note">
          Для дилеров потребуется проверка администратором. Пока это демонстрационная форма, без настоящего входа.
        </p>

        <button className="button button--primary button--wide" type="submit">
          Продолжить
        </button>
      </form>
    </Modal>
  );
}

function AddCarModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    brand: "Toyota",
    model: "",
    year: "2020",
    city: "Бишкек",
    mileage: "",
    startPrice: ""
  });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAdd({
      id: Date.now(),
      brand: form.brand,
      model: form.model.trim(),
      year: Number(form.year),
      engine: "Не указан",
      transmission: "Не указана",
      fuel: "Не указан",
      mileage: Number(form.mileage),
      city: form.city,
      startPrice: Number(form.startPrice),
      currentBid: Number(form.startPrice),
      bidsCount: 0,
      timeLeft: "Ожидает запуска",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
      description: "Новое демонстрационное объявление. Перед публикацией данные должен проверить администратор."
    });

    onClose();
  }

  return (
    <Modal title="Добавить автомобиль" onClose={onClose}>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Марка
          <select name="brand" value={form.brand} onChange={updateField}>
            {["Toyota", "Hyundai", "Lexus", "Honda", "BMW", "Kia", "Mercedes-Benz", "Другая"].map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>
        </label>

        <label>
          Модель
          <input name="model" value={form.model} onChange={updateField} placeholder="Например, Camry" required />
        </label>

        <div className="form__row">
          <label>
            Год выпуска
            <input name="year" type="number" min="1980" max="2027" value={form.year} onChange={updateField} required />
          </label>
          <label>
            Город
            <select name="city" value={form.city} onChange={updateField}>
              {["Бишкек", "Ош", "Каракол", "Джалал-Абад", "Токмок", "Другой"].map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Пробег, км
          <input name="mileage" type="number" min="0" value={form.mileage} onChange={updateField} required />
        </label>

        <label>
          Начальная цена, сом
          <input name="startPrice" type="number" min="1" value={form.startPrice} onChange={updateField} required />
        </label>

        <p className="form-note">
          Сейчас объявление добавляется только в состояние браузера. Загрузка фотографий, проверка документов и сохранение на сервере появятся на следующих этапах.
        </p>

        <button className="button button--primary button--wide" type="submit">
          Добавить в каталог
        </button>
      </form>
    </Modal>
  );
}

export default function App() {
  const [allCars, setAllCars] = useState(initialCars);
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("newest");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modal, setModal] = useState("");

  const filteredCars = useMemo(() => {
    let result = allCars.filter((car) => {
      const searchText = `${car.brand} ${car.model} ${car.city}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase().trim());
      const matchesBrand = brand === "all" || car.brand === brand;
      const matchesFavorite = !showFavorites || favorites.includes(car.id);

      return matchesQuery && matchesBrand && matchesFavorite;
    });

    if (sort === "priceAsc") {
      result.sort((a, b) => a.currentBid - b.currentBid);
    } else if (sort === "priceDesc") {
      result.sort((a, b) => b.currentBid - a.currentBid);
    } else if (sort === "bids") {
      result.sort((a, b) => b.bidsCount - a.bidsCount);
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [allCars, query, brand, sort, favorites, showFavorites]);

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function addCar(car) {
    setAllCars((previous) => [car, ...previous]);
    setShowFavorites(false);
    setQuery("");
    setBrand("all");
    setSort("newest");
  }

  function openLogin() {
    setSelectedCar(null);
    setModal("login");
  }

  function openAddCar() {
    setModal("addCar");
  }

  return (
    <>
      <Header
        favoritesCount={favorites.length}
        onFavorites={() => setShowFavorites((value) => !value)}
        onAddCar={openAddCar}
        onLogin={openLogin}
      />

      <main>
        <section className="hero" id="home">
          <div className="container hero__inner">
            <div className="hero__content">
              <span className="eyebrow">
                <span className="status-dot" />
                АВТОМОБИЛЬНЫЙ РЫНОК КЫРГЫЗСТАНА
              </span>

              <h1>
                Продайте автомобиль
                <br />
                <span>на лучших условиях</span>
              </h1>

              <p>
                Выставьте автомобиль на аукцион и получите предложения от проверенных автодилеров.
                Решение о продаже остаётся за вами.
              </p>

              <div className="hero__actions">
                <button className="button button--primary button--large" onClick={openAddCar}>
                  Выставить автомобиль
                  <ArrowRight size={19} />
                </button>
                <a href="#auctions" className="button button--light button--large">
                  Смотреть аукционы
                </a>
              </div>

              <div className="hero__trust">
                <span><ShieldCheck size={17} /> Проверка дилеров</span>
                <span><CheckCircle2 size={17} /> Вы решаете, продавать ли</span>
              </div>
            </div>

            <div className="hero__visual">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=90"
                alt="Автомобиль для аукциона"
              />
              <div className="hero__floating">
                <span className="hero__floating-icon"><ArrowDownRight size={22} /></span>
                <div>
                  <small>Прозрачные предложения</small>
                  <strong>От дилеров</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="container hero__stats">
            <div>
              <CarFront size={22} />
              <span><strong>{allCars.length}</strong><small>автомобилей в каталоге</small></span>
            </div>
            <div>
              <Users size={22} />
              <span><strong>Проверенные</strong><small>профессиональные дилеры</small></span>
            </div>
            <div>
              <Timer size={22} />
              <span><strong>Ограниченное время</strong><small>для каждого аукциона</small></span>
            </div>
          </div>
        </section>

        <section className="auctions section" id="auctions">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">ВЫБИРАЙТЕ ИНТЕРЕСНЫЕ МАШИНЫ</span>
                <h2>{showFavorites ? "Избранное" : "Автомобили на аукционе"}</h2>
                <p>Изучайте предложения и следите за ходом торгов.</p>
              </div>

              {showFavorites && (
                <button className="button button--light" onClick={() => setShowFavorites(false)}>
                  Все автомобили
                </button>
              )}
            </div>

            <SearchBar
              query={query}
              onQueryChange={setQuery}
              brand={brand}
              onBrandChange={setBrand}
              sort={sort}
              onSortChange={setSort}
            />

            <div className="results-line">
              <span>Найдено автомобилей: <strong>{filteredCars.length}</strong></span>
              <span><span className="status-dot" /> Демонстрационные торги</span>
            </div>

            {filteredCars.length > 0 ? (
              <div className="auction-grid">
                {filteredCars.map((car) => (
                  <AuctionCard
                    key={car.id}
                    car={car}
                    isFavorite={favorites.includes(car.id)}
                    onToggleFavorite={toggleFavorite}
                    onOpen={setSelectedCar}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <CarFront size={40} />
                <h3>Автомобили не найдены</h3>
                <p>Измените поисковый запрос или сбросьте фильтры.</p>
                <button
                  className="button button--primary"
                  onClick={() => {
                    setQuery("");
                    setBrand("all");
                    setShowFavorites(false);
                  }}
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="how section" id="how-it-works">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">ПРОСТО И ПОНЯТНО</span>
              <h2>Как работает аукцион</h2>
              <p>Три шага от объявления до решения о продаже.</p>
            </div>

            <div className="how__grid">
              <article className="how-card">
                <span className="how-card__number">01</span>
                <div className="how-card__icon"><CarFront size={25} /></div>
                <h3>Разместите автомобиль</h3>
                <p>Укажите характеристики, добавьте фотографии и дождитесь проверки объявления.</p>
              </article>

              <article className="how-card">
                <span className="how-card__number">02</span>
                <div className="how-card__icon"><Users size={25} /></div>
                <h3>Получите предложения</h3>
                <p>Проверенные дилеры участвуют в торгах и предлагают свои цены.</p>
              </article>

              <article className="how-card">
                <span className="how-card__number">03</span>
                <div className="how-card__icon"><CheckCircle2 size={25} /></div>
                <h3>Решите, продавать ли</h3>
                <p>После окончания аукциона изучите предложения и сами примите решение.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="seller-cta">
          <div className="container seller-cta__inner">
            <div>
              <span className="eyebrow">ВАШ АВТОМОБИЛЬ — ВАШЕ РЕШЕНИЕ</span>
              <h2>Готовы выставить машину?</h2>
              <p>Создайте объявление и подготовьте автомобиль к проверке.</p>
            </div>
            <button className="button button--white button--large" onClick={openAddCar}>
              Добавить автомобиль <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="logo logo--footer" href="#home">
            <span className="logo__icon"><CarFront size={24} /></span>
            <span><strong>AUCTION</strong><small>АВТОАУКЦИОН КЫРГЫЗСТАН</small></span>
          </a>
          <p>Демонстрационный проект. Торги пока не проводятся.</p>
          <span>© 2026 AUCTION</span>
        </div>
      </footer>

      {selectedCar && (
        <CarDetails
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onLogin={openLogin}
        />
      )}

      {modal === "login" && <AuthModal onClose={() => setModal("")} />}

      {modal === "addCar" && (
        <AddCarModal
          onClose={() => setModal("")}
          onAdd={addCar}
        />
      )}
    </>
  );
}
