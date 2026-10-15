
import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar({
  query,
  onQueryChange,
  brand,
  onBrandChange,
  sort,
  onSortChange
}) {
  return (
    <div className="search-bar">
      <label className="search-bar__input">
        <Search size={20} />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Марка, модель или город"
        />
      </label>

      <label className="search-bar__select">
        <SlidersHorizontal size={18} />
        <select
          value={brand}
          onChange={(event) => onBrandChange(event.target.value)}
          aria-label="Марка автомобиля"
        >
          <option value="all">Все марки</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Lexus">Lexus</option>
          <option value="Honda">Honda</option>
          <option value="BMW">BMW</option>
          <option value="Kia">Kia</option>
        </select>
      </label>

      <label className="search-bar__select">
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          aria-label="Сортировка"
        >
          <option value="newest">Сначала новые</option>
          <option value="priceAsc">Сначала дешевле</option>
          <option value="priceDesc">Сначала дороже</option>
          <option value="bids">По количеству ставок</option>
        </select>
      </label>
    </div>
  );
}
