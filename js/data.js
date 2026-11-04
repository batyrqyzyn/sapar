const placesData = [
    {
        id: 1,
        title: "Шымбулак (Shymbulak Ski Resort)",
        category: "mountains",
        categoryLabel: "Горы",
        icon: "mountain",
        city: "Алматы",
        rating: 4.9,
        price: "от 12,000 ₸",
        image: "https://dknews.kz/storage/news/2023-10/b4TTGP1Pb5qq9uaxuM25CIJfenmSaOaL52WKpM5r.jpg",
        description: "Высокогорный горнолыжный курорт, расположенный в ущелье Медеу на высоте 2260 метров над уровнем моря."
    },
    {
        id: 2,
        title: "Озеро Кольсай",
        category: "nature",
        categoryLabel: "Отдых",
        icon: "trees",
        city: "Алматинская обл.",
        rating: 4.95,
        price: "от 8,000 ₸",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        description: "Система из трех живописных озер Северного Тянь-Шаня, называемых жемчужиной Заилийского Алатау."
    },
    {
        id: 3,
        title: "Урочище Бозжыра",
        category: "adventure",
        categoryLabel: "Приключения",
        icon: "compass",
        city: "Мангистау",
        rating: 5.0,
        price: "от 45,000 ₸",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        description: "Ослепительно белые останцовые горы на дне древнего океана Тетис. Одно из самых уникальных мест планеты."
    },
    {
        id: 4,
        title: "Боровое (Бурабай)",
        category: "nature",
        categoryLabel: "Отдых",
        icon: "trees",
        city: "Акмолинская обл.",
        rating: 4.8,
        price: "от 15,000 ₸",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "Курортная зона с сосновыми лесами, уникальными скалами и чистейшими озерами."
    },
    {
        id: 5,
        title: "Отель Ritz-Carlton Almaty",
        category: "hotels",
        categoryLabel: "Отели",
        icon: "hotel",
        city: "Алматы",
        rating: 4.9,
        price: "от 120,000 ₸",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        description: "Пятизвездочный отель с незабываемым панорамным видом на Заилийский Алатау и сервис высочайшего класса."
    },
    {
        id: 6,
        title: "Ресторан Navat",
        category: "cafes",
        categoryLabel: "Кафе и рестораны",
        icon: "utensils",
        city: "Астана",
        rating: 4.7,
        price: "от 6,000 ₸",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        description: "Аутентичный ресторан с национальным интерьером, казахской и центральноазиатской кухней."
    },
    {
        id: 7,
        title: "Клуб Bla Bla Bar",
        category: "clubs",
        categoryLabel: "Клубы",
        icon: "wine",
        city: "Алматы",
        rating: 4.6,
        price: "от 10,000 ₸",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
        description: "Крупнейший барный кластер и центр ночной жизни с автоскими концепциями и музыкальными программами."
    },
    {
        id: 8,
        title: "Чарынский Каньон",
        category: "adventure",
        categoryLabel: "Приключения",
        icon: "compass",
        city: "Алматинская обл.",
        rating: 4.9,
        price: "от 10,000 ₸",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        description: "Природный памятник из осадочных пород возрастом 12 миллионов лет с ущельем «Долина Замков»."
    }
];

const categories = [
    { id: "all", nameRu: "Все места", nameKz: "Барлық орындар", nameEn: "All Places", icon: "sparkles" },
    { id: "mountains", nameRu: "Горы", nameKz: "Таулар", nameEn: "Mountains", icon: "mountain" },
    { id: "adventure", nameRu: "Приключения", nameKz: "Саяхаттар", nameEn: "Adventure", icon: "compass" },
    { id: "nature", nameRu: "Отдых", nameKz: "Демалыс", nameEn: "Relaxation", icon: "trees" },
    { id: "clubs", nameRu: "Клубы", nameKz: "Клубтар", nameEn: "Clubs", icon: "wine" },
    { id: "cafes", nameRu: "Кафе и рестораны", nameKz: "Кафе мен мейрамханалар", nameEn: "Cafes & Dining", icon: "utensils" },
    { id: "hotels", nameRu: "Отели", nameKz: "Қонақ үйлер", nameEn: "Hotels", icon: "hotel" },
];