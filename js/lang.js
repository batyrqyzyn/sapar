const translations = {
    ru: {
        title: "Открой Казахстан вместе с sapar",
        subtitle: "Исследуйте великую степь, величественные горы, священные места и современные мегаполисы в единой цифровой экосистеме.",
        searchPlaceholder: "Куда вы хотите отправиться?",
        placesTitle: "Популярные места",
        placesSub: "Топ локаций Казахстана для вашего следующего путешествия",
        navDiscover: "Главная",
        navTours: "Туры",
        navNews: "Новости",
        navFavorites: "Избранное"
    },
    kz: {
        title: "Қазақстанды sapar-мен бірге ашыңыз",
        subtitle: "Ұлы даланы, асқар тауларды, қасиетті жерлерді және заманауи мегаполистерді бір цифрлық экожүйеде зерттеңіз.",
        searchPlaceholder: "Қайда саяхаттағыңыз келеді?",
        placesTitle: "Үздік локациялар",
        placesSub: "Келесі саяхатыңызға арналған Қазақстанның үздік орындары",
        navDiscover: "Бас бет",
        navTours: "Турлар",
        navNews: "Жаңалықтар",
        navFavorites: "Таңдаулылар"
    },
    en: {
        title: "Discover Kazakhstan with sapar",
        subtitle: "Explore the vast steppe, majestic mountains, sacred heritage, and modern metropolises in one digital ecosystem.",
        searchPlaceholder: "Where do you want to go?",
        placesTitle: "Popular Destinations",
        placesSub: "Top locations in Kazakhstan for your next adventure",
        navDiscover: "Home",
        navTours: "Tours",
        navNews: "News",
        navFavorites: "Favorites"
    }
};

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('hero-title').innerText = t.title;
    document.getElementById('hero-subtitle').innerText = t.subtitle;
    document.getElementById('search-input').placeholder = t.searchPlaceholder;
    document.getElementById('section-places-title').innerText = t.placesTitle;
    document.getElementById('section-places-sub').innerText = t.placesSub;
    document.getElementById('nav-discover').innerText = t.navDiscover;
    document.getElementById('nav-tours').innerText = t.navTours;
    document.getElementById('nav-news').innerText = t.navNews;
    document.getElementById('nav-favorites').innerText = t.navFavorites;

    renderCategoryChips();
}