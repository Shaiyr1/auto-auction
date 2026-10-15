
import { Clock3, Gauge, Heart, MapPin, Settings2 } from "lucide-react";
import { formatSom } from "../../data";

export default function AuctionCard({
  car,
  isFavorite,
  onToggleFavorite,
  onOpen
}) {
  return (
    <article className="auction-card">
      <div className="auction-card__image-wrap">
        <img
          className="auction-card__image"
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          loading="lazy"
        />

        <span className="auction-card__status">
          <span className="status-dot" />
          Идут торги
        </span>

        <button
          className={`favorite-button ${isFavorite ? "favorite-button--active" : ""}`}
          onClick={() => onToggleFavorite(car.id)}
          aria-label={isFavorite ? "Убрать из избранного" : "В избранное"}
        >
          <Heart size={19} fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <span className="auction-card__year">{car.year} год</span>
      </div>

      <div className="auction-card__body">
        <div className="auction-card__title-row">
          <h3>{car.brand} {car.model}</h3>
          <span className="auction-card__bids">{car.bidsCount} ставок</span>
        </div>

        <div className="auction-card__details">
          <span><Gauge size={15} /> {car.mileage.toLocaleString("ru-RU")} км</span>
          <span><Settings2 size={15} /> {car.transmission}</span>
          <span><MapPin size={15} /> {car.city}</span>
        </div>

        <div className="auction-card__price">
          <span>Текущая ставка</span>
          <strong>{formatSom(car.currentBid)}</strong>
        </div>

        <div className="auction-card__footer">
          <span className="auction-card__time">
            <Clock3 size={16} />
            {car.timeLeft}
          </span>
          <button
            className="button button--primary auction-card__button"
            onClick={() => onOpen(car)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </article>
  );
}
