let selectedCategory = "all";
let selectedCity = "all";
let searchQuery = "";
let currentLang = "ru";
let favorites = [];

window.onload = function() {
    renderCategoryChips();
    renderPlaces();
    lucide.createIcons();
};

function renderCategoryChips() {
    const container = document.getElementById('categories-container');
    container.innerHTML = categories.map(cat => {
        const isActive = selectedCategory === cat.id;
        const activeClasses = isActive 
            ? "gold-gradient-bg text-navy-900 font-bold shadow-lg scale-105 border-transparent" 
            : "bg-navy-800/80 text-slate-200 border-slate-700/80 hover:bg-slate-800 hover:text-gold-accent";
        
        let label = cat.nameRu;
        if (currentLang === 'kz') label = cat.nameKz;
        if (currentLang === 'en') label = cat.nameEn;

        return `
            <button onclick="filterCategory('${cat.id}')" 
                    class="px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${activeClasses}">
                <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
                <span>${label}</span>
            </button>
        `;
    }).join('');
    lucide.createIcons();
}

function renderPlaces() {
    const grid = document.getElementById('places-grid');
    const noResults = document.getElementById('no-results');
    
    const filtered = placesData.filter(place => {
        const matchCategory = selectedCategory === "all" || place.category === selectedCategory;
        const matchCity = selectedCity === "all" || place.city === selectedCity;
        const matchSearch = searchQuery === "" || 
                            place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            place.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchCity && matchSearch;
    });

    document.getElementById('results-count').innerText = filtered.length;
    
    let filterText = "Все";
    if (selectedCategory !== "all") filterText = selectedCategory;
    if (selectedCity !== "all") filterText += ` • ${selectedCity}`;
    document.getElementById('active-filter-label').innerText = `Фильтр: ${filterText}`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    grid.innerHTML = filtered.map(place => {
        const isFav = favorites.includes(place.id);
        const heartClass = isFav ? "text-rose-500 fill-rose-500" : "text-slate-400 hover:text-rose-500";

        return `
            <div class="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
                <div>
                    <div class="relative h-48 overflow-hidden bg-slate-100">
                        <img src="${place.image}" alt="${place.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        <span class="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-gold-accent text-xs font-bold px-2.5 py-1 rounded-md">
                            ${place.city}
                        </span>
                        <button onclick="toggleFavorite(${place.id})" class="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md transition hover:scale-110">
                            <i data-lucide="heart" class="w-4 h-4 ${heartClass}"></i>
                        </button>
                    </div>

                    <div class="p-5">
                        <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                            <span class="font-semibold text-gold-600 flex items-center space-x-1">
                                <i data-lucide="${place.icon}" class="w-3.5 h-3.5 inline mr-1"></i>
                                ${place.categoryLabel}
                            </span>
                            <span class="flex items-center text-amber-500 font-bold space-x-1">
                                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 inline mr-0.5"></i>
                                ${place.rating}
                            </span>
                        </div>
                        <h3 class="font-bold text-navy-900 text-base mb-2 group-hover:text-gold-600 transition line-clamp-1">${place.title}</h3>
                        <p class="text-slate-600 text-xs line-clamp-2 mb-4 leading-relaxed">${place.description}</p>
                    </div>
                </div>

                <div class="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 pt-3">
                    <span class="text-xs font-extrabold text-navy-900">${place.price}</span>
                    <button onclick="openPlaceModal(${place.id})" class="text-xs font-bold text-gold-600 hover:text-navy-900 transition flex items-center">
                        <span>Подробнее</span>
                        <i data-lucide="chevron-right" class="w-3.5 h-3.5 ml-0.5"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function filterCategory(catId) {
    selectedCategory = catId;
    renderCategoryChips();
    renderPlaces();
}

function handleCityFilter() {
    selectedCity = document.getElementById('city-select').value;
    renderPlaces();
}

function handleSearch() {
    searchQuery = document.getElementById('search-input').value;
    renderPlaces();
}

function resetFilters() {
    selectedCategory = "all";
    selectedCity = "all";
    searchQuery = "";
    document.getElementById('city-select').value = "all";
    document.getElementById('search-input').value = "";
    renderCategoryChips();
    renderPlaces();
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    document.getElementById('fav-count').innerText = favorites.length;
    renderPlaces();
    renderFavoritesList();
}

function openFavoritesModal() {
    renderFavoritesList();
    document.getElementById('favorites-modal').classList.remove('hidden');
}

function closeFavoritesModal() {
    document.getElementById('favorites-modal').classList.add('hidden');
}

function renderFavoritesList() {
    const list = document.getElementById('favorites-list');
    if (favorites.length === 0) {
        list.innerHTML = `<p class="text-slate-500 text-xs text-center py-6">Избранных мест пока нет.</p>`;
        return;
    }

    const favPlaces = placesData.filter(p => favorites.includes(p.id));
    list.innerHTML = favPlaces.map(p => `
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div class="flex items-center space-x-3">
                <img src="${p.image}" class="w-12 h-12 rounded-lg object-cover">
                <div>
                    <h4 class="font-bold text-xs text-navy-900">${p.title}</h4>
                    <span class="text-xs text-slate-500">${p.city} • ${p.price}</span>
                </div>
            </div>
            <button onclick="toggleFavorite(${p.id})" class="text-slate-400 hover:text-rose-500">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function openPlaceModal(id) {
    const place = placesData.find(p => p.id === id);
    if (!place) return;

    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="h-64 overflow-hidden relative">
            <img src="${place.image}" class="w-full h-full object-cover">
            <div class="absolute bottom-4 left-4 bg-navy-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-gold-accent font-bold text-xs">
                ${place.city}
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h2 class="text-xl font-bold text-navy-900">${place.title}</h2>
                <span class="text-amber-500 font-bold text-sm flex items-center">
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400 inline mr-1"></i> ${place.rating}
                </span>
            </div>
            <p class="text-slate-600 text-sm mb-6 leading-relaxed">${place.description}</p>
            <div class="flex items-center justify-between border-t pt-4">
                <div>
                    <span class="text-xs text-slate-400 block">Стоимость:</span>
                    <span class="text-lg font-extrabold text-navy-900">${place.price}</span>
                </div>
                <button onclick="toggleFavorite(${place.id}); closePlaceModal();" class="px-6 py-2.5 rounded-xl gold-gradient-bg text-navy-900 font-bold text-xs hover:brightness-110 flex items-center space-x-1.5">
                    <i data-lucide="heart" class="w-4 h-4 ${favorites.includes(place.id) ? 'fill-navy-900' : ''}"></i>
                    <span>${favorites.includes(place.id) ? 'Удалить из избранного' : 'В избранное'}</span>
                </button>
            </div>
        </div>
    `;
    document.getElementById('place-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closePlaceModal() {
    document.getElementById('place-modal').classList.add('hidden');
}

function openCodeModal() {
    document.getElementById('code-modal').classList.remove('hidden');
}

function closeCodeModal() {
    document.getElementById('code-modal').classList.add('hidden');
}

function calculateAiTour() {
    const budget = document.getElementById('calc-budget').value;
    const days = document.getElementById('calc-days').value;

    alert(`ИИ-подборка sapar сформирована!\n\nРекомендованный маршрут: Алматы — Кольсай — Чарын\nБюджет: ~${budget} KZT\nПродолжительность: ${days} дней\nПодробная программа отправлена в профиль.`);
}