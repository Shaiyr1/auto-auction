
$primary: #176b56;
$primary-dark: #105442;
$accent: #d9f36a;
$text: #19241f;
$muted: #748079;
$border: #e5eae6;
$surface: #f5f7f4;
$white: #ffffff;

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 44px;
  padding: 0 17px;
  border: 1px solid transparent;
  border-radius: 10px;
  font: inherit;
  font-size: 14px;
  font-weight: 650;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-1px);
  }

  &--primary {
    background: $primary;
    color: $white;

    &:hover {
      background: $primary-dark;
    }
  }

  &--light {
    background: $white;
    color: $text;
    border-color: $border;

    &:hover {
      background: $surface;
    }
  }

  &--white {
    background: $white;
    color: $primary;

    &:hover {
      background: $accent;
    }
  }

  &--large {
    min-height: 52px;
    padding: 0 22px;
  }

  &--wide {
    width: 100%;
  }
}

.icon-button {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid $border;
  border-radius: 10px;
  background: $white;
  cursor: pointer;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $text;
  text-decoration: none;
  flex-shrink: 0;

  &__icon {
    display: grid;
    place-items: center;
    width: 43px;
    height: 43px;
    border-radius: 12px;
    background: $primary;
    color: $white;
  }

  strong,
  small {
    display: block;
  }

  strong {
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: 1px;
  }

  small {
    margin-top: 5px;
    color: $muted;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
  }
}

.header {
  position: relative;
  z-index: 5;
  background: $white;
  border-bottom: 1px solid $border;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    min-height: 82px;
  }

  &__nav,
  &__actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__nav a,
  &__link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #47534b;
    font-size: 14px;
    font-weight: 550;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: $primary;
    }
  }

  &__link {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  &__menu {
    display: none;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid $border;
    border-radius: 10px;
    background: $white;
    cursor: pointer;
  }
}

.favorites-count {
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 20px;
  background: $primary;
  color: $white;
  font-size: 11px;
}

.hero {
  overflow: hidden;
  padding: 62px 0 0;
  background: $surface;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 0.95fr;
    align-items: center;
    gap: 50px;
  }

  &__content {
    padding-bottom: 38px;
  }

  &__content h1 {
    margin: 22px 0 18px;
    font-size: clamp(36px, 4.3vw, 58px);
    line-height: 1.09;
    letter-spacing: -2.5px;
  }

  &__content h1 span {
    color: $primary;
  }

  &__content > p {
    max-width: 510px;
    color: $muted;
    font-size: 16px;
    line-height: 1.8;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 27px;
  }

  &__trust {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 24px;
    color: #526057;
    font-size: 12px;
  }

  &__trust span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  &__trust svg {
    color: $primary;
  }

  &__visual {
    position: relative;
    min-width: 0;
    height: 355px;
    align-self: stretch;
    margin-top: 5px;
    overflow: visible;
    border-radius: 18px 18px 0 0;
  }

  &__visual > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px 18px 0 0;
  }

  &__floating {
    position: absolute;
    right: 16px;
    bottom: 22px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 12px 35px #17231c1c;
  }

  &__floating-icon {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #e7f5ec;
    color: $primary;
  }

  &__floating small,
  &__floating strong {
    display: block;
  }

  &__floating small {
    color: $muted;
    font-size: 11px;
  }

  &__floating strong {
    margin-top: 4px;
    font-size: 14px;
  }

  &__stats {
    display: flex;
    gap: 52px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid $border;
  }

  &__stats > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__stats > div > svg {
    color: $primary;
  }

  &__stats strong,
  &__stats small {
    display: block;
  }

  &__stats strong {
    font-size: 14px;
  }

  &__stats small {
    margin-top: 5px;
    color: $muted;
    font-size: 11px;
  }
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: $primary;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.4px;
}

.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #31a66b;
}

.section {
  padding: 76px 0;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;

  h2 {
    margin: 12px 0 8px;
    font-size: clamp(27px, 3vw, 36px);
    letter-spacing: -1px;
  }

  p {
    margin: 0;
    color: $muted;
    font-size: 14px;
    line-height: 1.7;
  }

  &--center {
    display: block;
    text-align: center;
    margin-bottom: 40px;
  }
}

.search-bar {
  display: grid;
  grid-template-columns: 1fr 180px 185px;
  gap: 12px;
  padding: 13px;
  margin-bottom: 20px;
  border: 1px solid $border;
  border-radius: 14px;
  background: $white;

  &__input,
  &__select {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    min-height: 45px;
    padding: 0 12px;
    border: 1px solid $border;
    border-radius: 9px;
    color: $muted;
    background: $white;
  }

  &__input input,
  &__select select {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    color: $text;
    font: inherit;
    font-size: 13px;
  }

  &__select select {
    cursor: pointer;
  }

  &__input:focus-within,
  &__select:focus-within {
    border-color: $primary;
  }
}

.results-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  color: $muted;
  font-size: 12px;

  strong {
    color: $text;
  }

  > span:last-child {
    display: flex;
    align-items: center;
    gap: 7px;
  }
}

.auction-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.auction-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid $border;
  border-radius: 15px;
  background: $white;
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px #14291d0d;
  }

  &__image-wrap {
    position: relative;
    height: 205px;
    overflow: hidden;
    background: $surface;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s;
  }

  &:hover &__image {
    transform: scale(1.04);
  }

  &__status {
    position: absolute;
    top: 13px;
    left: 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    border-radius: 6px;
    background: $white;
    font-size: 10px;
    font-weight: 700;
  }

  &__year {
    position: absolute;
    bottom: 12px;
    left: 13px;
    padding: 6px 9px;
    border-radius: 6px;
    background: #18231dd9;
    color: $white;
    font-size: 11px;
  }

  &__body {
    padding: 17px;
  }

  &__title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  &__title-row h3 {
    margin: 0;
    font-size: 19px;
    letter-spacing: -0.4px;
  }

  &__bids {
    padding: 5px 7px;
    border-radius: 6px;
    background: #eff6f0;
    color: $primary;
    font-size: 10px;
    white-space: nowrap;
  }

  &__details {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    margin: 15px 0;
    color: $muted;
    font-size: 11px;
  }

  &__details span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  &__price {
    padding: 14px 0;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
  }

  &__price span,
  &__price strong {
    display: block;
  }

  &__price span {
    color: $muted;
    font-size: 11px;
  }

  &__price strong {
    margin-top: 5px;
    color: $primary;
    font-size: 23px;
    letter-spacing: -0.7px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-top: 14px;
  }

  &__time {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #b76a29;
    font-size: 11px;
    font-weight: 700;
  }

  &__button {
    min-height: 38px;
    padding: 0 12px;
    font-size: 12px;
  }
}

.favorite-button {
  position: absolute;
  top: 12px;
  right: 12px;
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  border: 0;
  border-radius: 50%;
  background: $white;
  color: $text;
  cursor: pointer;

  &:hover,
  &--active {
    color: #dc4c57;
  }
}

.empty-state {
  padding: 65px 20px;
  border: 1px dashed $border;
  border-radius: 14px;
  text-align: center;

  > svg {
    color: $muted;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 20px;
    color: $muted;
    font-size: 14px;
  }
}

.how {
  background: $surface;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
}

.how-card {
  position: relative;
  padding: 27px;
  border: 1px solid $border;
  border-radius: 14px;
  background: $white;

  &__number {
    position: absolute;
    top: 23px;
    right: 24px;
    color: #dce4de;
    font-size: 29px;
    font-weight: 800;
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: #e7f5ec;
    color: $primary;
  }

  h3 {
    margin: 25px 0 10px;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: $muted;
    font-size: 13px;
    line-height: 1.8;
  }
}

.seller-cta {
  padding: 55px 0;
  background: $primary;
  color: $white;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .eyebrow {
    color: $accent;
  }

  h2 {
    margin: 12px 0 8px;
    font-size: clamp(26px, 3vw, 36px);
  }

  p {
    margin: 0;
    color: #d1e2da;
    font-size: 14px;
  }
}

.footer {
  padding: 25px 0;
  background: #13231b;
  color: #c1cec6;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  p,
  > span,
  &__inner > span {
    font-size: 11px;
  }

  .logo strong {
    color: $white;
  }

  .logo small {
    color: #a9b9ae;
  }

  .logo__icon {
    background: #254b39;
  }
}

.modal-backdrop {
  position: fixed;
  z-index: 20;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  overflow-y: auto;
  background: #101a14a8;
  backdrop-filter: blur(4px);
}

.modal {
  width: min(100%, 510px);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  border-radius: 16px;
  background: $white;
  box-shadow: 0 25px 80px #0002;

  &__header {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 18px 22px;
    border-bottom: 1px solid $border;
    background: $white;
  }

  &__header h2 {
    margin: 0;
    font-size: 20px;
  }
}

.form {
  display: grid;
  gap: 16px;
  padding: 22px;

  label {
    display: grid;
    gap: 7px;
    color: $text;
    font-size: 13px;
    font-weight: 650;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    padding: 0 12px;
    border: 1px solid #dce3dd;
    border-radius: 9px;
    outline: none;
    background: $white;
    color: $text;
    font: inherit;
    font-size: 13px;
  }

  input:focus,
  select:focus {
    border-color: $primary;
    box-shadow: 0 0 0 3px #176b5614;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
}

.form-note {
  margin: 0;
  color: $muted;
  font-size: 12px;
  line-height: 1.7;
}

.details-image {
  display: block;
  width: calc(100% - 40px);
  height: 225px;
  margin: 20px auto 0;
  border-radius: 12px;
  object-fit: cover;
}

.details-content {
  padding: 20px;

  > p {
    color: $muted;
    font-size: 13px;
    line-height: 1.8;
  }
}

.details-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 6px 9px;
    border-radius: 6px;
    background: $surface;
    color: $text;
    font-size: 11px;
  }
}

.details-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 17px 0;
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;

  span,
  strong {
    display: block;
  }

  span {
    margin-bottom: 5px;
    color: $muted;
    font-size: 11px;
  }

  strong {
    font-size: 13px;
  }
}

.details-current-bid {
  display: grid;
  gap: 6px;
  padding: 17px 0;

  > span {
    color: $muted;
    font-size: 12px;
  }

  > strong {
    color: $primary;
    font-size: 27px;
  }

  > small {
    color: $muted;
    font-size: 11px;
  }
}

.notice {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 13px;
  margin-bottom: 18px;
  border-radius: 10px;
  background: #eff6f0;
  color: $primary;

  svg {
    flex-shrink: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.7;
  }
}

@media (max-width: 1050px) {
  .header__inner {
    gap: 15px;
  }

  .header__nav,
  .header__actions {
    gap: 12px;
  }

  .header__actions .button {
    padding: 0 11px;
    font-size: 12px;
  }

  .hero__inner {
    gap: 28px;
  }

  .hero__stats {
    gap: 25px;
  }

  .auction-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .container {
    width: calc(100% - 32px);
  }

  .header__inner {
    min-height: 72px;
  }

  .header__menu {
    display: grid;
    margin-left: auto;
  }

  .header__nav {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: none;
    align-items: stretch;
    gap: 0;
    padding: 8px 16px 16px;
    border-bottom: 1px solid $border;
    background: $white;
  }

  .header__nav--open {
    display: flex;
    flex-direction: column;
  }

  .header__nav a,
  .header__link {
    min-height: 45px;
    padding: 0 8px;
  }

  .header__actions {
    gap: 8px;
  }

  .header__actions .button {
    min-height: 40px;
    padding: 0 10px;
  }

  .header__actions .button--light {
    display: none;
  }

  .logo strong {
    font-size: 17px;
  }

  .logo small {
    font-size: 7px;
  }

  .logo__icon {
    width: 38px;
    height: 38px;
  }

  .hero {
    padding-top: 38px;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .hero__content {
    padding-bottom: 0;
  }

  .hero__content h1 {
    font-size: clamp(34px, 8vw, 48px);
    letter-spacing: -1.7px;
  }

  .hero__content > p {
    font-size: 14px;
  }

  .hero__visual {
    height: 280px;
    margin-top: 0;
  }

  .hero__stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 25px;
  }

  .hero__stats small {
    font-size: 12px;
  }

  .section {
    padding: 55px 0;
  }

  .search-bar {
    grid-template-columns: 1fr 1fr;
  }

  .search-bar__input {
    grid-column: 1 / -1;
  }

  .auction-grid {
    gap: 14px;
  }

  .auction-card__image-wrap {
    height: 170px;
  }

  .auction-card__body {
    padding: 12px;
  }

  .auction-card__title-row {
    flex-wrap: wrap;
  }

  .auction-card__title-row h3 {
    font-size: 16px;
  }

  .auction-card__details {
    gap: 8px;
    font-size: 10px;
  }

  .auction-card__price strong {
    font-size: 19px;
  }

  .auction-card__footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .auction-card__button {
    width: 100%;
  }

  .how__grid {
    grid-template-columns: 1fr;
  }

  .seller-cta__inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 430px) {
  .container {
    width: calc(100% - 24px);
  }

  .header__actions .button--primary {
    font-size: 0;
    gap: 0;
    width: 40px;
    padding: 0;
  }

  .header__actions .button--primary svg {
    width: 20px;
    height: 20px;
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero__actions .button {
    width: 100%;
  }

  .hero__visual {
    height: 225px;
  }

  .hero__floating {
    right: 8px;
    bottom: 10px;
    padding: 10px;
  }

  .hero__floating-icon {
    width: 34px;
    height: 34px;
  }

  .search-bar {
    grid-template-columns: 1fr;
    padding: 9px;
  }

  .search-bar__input {
    grid-column: auto;
  }

  .auction-grid {
    grid-template-columns: 1fr;
  }

  .auction-card__image-wrap {
    height: 220px;
  }

  .auction-card__footer {
    align-items: center;
    flex-direction: row;
  }

  .auction-card__button {
    width: auto;
  }

  .results-line {
    align-items: flex-start;
    flex-direction: column;
  }

  .form__row {
    grid-template-columns: 1fr;
  }
}
