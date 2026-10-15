
import {
    CarFront,
    Heart,
    Menu,
    Plus,
    UserRound,
    X
  } from "lucide-react";
  import { useState } from "react";
  
  export default function Header({
    favoritesCount,
    onFavorites,
    onAddCar,
    onLogin
  }) {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header className="header">
        <div className="container header__inner">
          <a
            className="logo"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo__icon">
              <CarFront size={25} />
            </span>
            <span>
              <strong>AUCTION</strong>
              <small>АВТОАУКЦИОН КЫРГЫЗСТАН</small>
            </span>
          </a>
  
          <button
            className="header__menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
  
          <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
            <a href="#auctions" onClick={() => setMenuOpen(false)}>
              Аукционы
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              Как это работает
            </a>
            <button
              className="header__link"
              onClick={() => {
                onFavorites();
                setMenuOpen(false);
              }}
            >
              <Heart size={17} />
              Избранное
              {favoritesCount > 0 && (
                <span className="favorites-count">{favoritesCount}</span>
              )}
            </button>
          </nav>
  
          <div className="header__actions">
            <button className="button button--light" onClick={onLogin}>
              <UserRound size={17} />
              Войти
            </button>
            <button className="button button--primary" onClick={onAddCar}>
              <Plus size={18} />
              Продать авто
            </button>
          </div>
        </div>
      </header>
    );
  }
  