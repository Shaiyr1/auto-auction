
export const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2021,
      engine: "2.5 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 68000,
      city: "Бишкек",
      startPrice: 1850000,
      currentBid: 1920000,
      bidsCount: 8,
      timeLeft: "02:45:18",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85",
      description:
        "Седан в хорошем состоянии. Автоматическая коробка передач, бензиновый двигатель. Данные демонстрационные."
    },
    {
      id: 2,
      brand: "Hyundai",
      model: "Sonata",
      year: 2022,
      engine: "2.0 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 45000,
      city: "Ош",
      startPrice: 1650000,
      currentBid: 1730000,
      bidsCount: 5,
      timeLeft: "05:20:42",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1000&q=85",
      description:
        "Современный седан для города и поездок. Информация о состоянии требует проверки."
    },
    {
      id: 3,
      brand: "Lexus",
      model: "RX 350",
      year: 2020,
      engine: "3.5 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 72000,
      city: "Бишкек",
      startPrice: 2850000,
      currentBid: 2960000,
      bidsCount: 12,
      timeLeft: "00:48:15",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
      description:
        "Просторный кроссовер. Характеристики и история автомобиля в этом примере не подтверждены."
    },
    {
      id: 4,
      brand: "Honda",
      model: "Accord",
      year: 2019,
      engine: "1.5 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 83000,
      city: "Каракол",
      startPrice: 1250000,
      currentBid: 1310000,
      bidsCount: 4,
      timeLeft: "01:12:30",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85",
      description:
        "Седан с автоматической коробкой передач. Фотографии используются как демонстрационный материал."
    },
    {
      id: 5,
      brand: "BMW",
      model: "X5",
      year: 2021,
      engine: "3.0 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 59000,
      city: "Бишкек",
      startPrice: 3650000,
      currentBid: 3780000,
      bidsCount: 15,
      timeLeft: "03:10:05",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
      description:
        "Премиальный кроссовер. Реальная комплектация и техническое состояние требуют проверки."
    },
    {
      id: 6,
      brand: "Kia",
      model: "K5",
      year: 2023,
      engine: "2.0 л",
      transmission: "Автомат",
      fuel: "Бензин",
      mileage: 32000,
      city: "Ош",
      startPrice: 1750000,
      currentBid: 1810000,
      bidsCount: 6,
      timeLeft: "04:35:20",
      status: "active",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
      description:
        "Седан 2023 года. Демонстрационная карточка для проверки интерфейса аукциона."
    }
  ];
  
  export const formatSom = (amount) =>
    new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0
    }).format(amount) + " сом";
  