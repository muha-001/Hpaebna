// === Translations Object ===
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_menu: "القائمة",
        nav_reservation: "الحجز",
        nav_contact: "اتصل بنا",
        hero_title: "مطعم حبايبنا العالمي",
        hero_subtitle: "طعم بغداد الأصيل في كل لقمة<br>نجمع بين عراقة الماضي ولذة الحاضر",
        btn_eastern: "الأطباق الشرقية",
        btn_fastfood: "وجبات سريعة",
        menu_title: "قائمة الطعام",
        search_placeholder: "ابحث عن طبقك المفضل...",
        cat_eastern: "أطباق شرقية",
        cat_fastfood: "وجبات سريعة",
        cat_desserts: "حلويات ومشروبات",
        cart_title: "سلة الطلبات",
        cart_empty: "السلة فارغة حالياً",
        cart_subtotal: "المجموع:",
        cart_delivery: "أجور التوصيل:",
        cart_total: "الإجمالي النهائي:",
        btn_checkout: "إتمام الطلب",
        checkout_title: "معلومات التوصيل",
        label_name: "الاسم الثلاثي:",
        label_phone: "رقم الهاتف:",
        label_address: "العنوان الدقيق:",
        label_landmark: "أقرب نقطة دالة:",
        btn_send_whatsapp: "إرسال الطلب عبر واتساب",
        gallery_title: "معرض الصور",
        reviews_title: "آراء الزبائن",
        toast_added: "تمت إضافة {item} إلى السلة",
        status_open: "مفتوح الآن",
        status_closed: "مغلق حالياً",
        currency: "د.ع",
        add_to_cart: "أضف للسلة"
    },
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_reservation: "Reservation",
        nav_contact: "Contact",
        hero_title: "Habaibna International",
        hero_subtitle: "The authentic taste of Baghdad in every bite <br> Combining heritage with modern flavors",
        btn_eastern: "Eastern Dishes",
        btn_fastfood: "Fast Food",
        menu_title: "Food Menu",
        search_placeholder: "Search for your favorite dish...",
        cat_eastern: "Eastern",
        cat_fastfood: "Fast Food",
        cat_desserts: "Desserts & Drinks",
        cart_title: "Your Order",
        cart_empty: "Your cart is empty",
        cart_subtotal: "Subtotal:",
        cart_delivery: "Delivery Fee:",
        cart_total: "Final Total:",
        btn_checkout: "Checkout",
        checkout_title: "Delivery Information",
        label_name: "Full Name:",
        label_phone: "Phone Number:",
        label_address: "Exact Address:",
        label_landmark: "Nearest Landmark:",
        btn_send_whatsapp: "Send via WhatsApp",
        gallery_title: "Gallery",
        reviews_title: "Customer Reviews",
        toast_added: "Added {item} to cart",
        status_open: "Open Now",
        status_closed: "Closed Now",
        currency: "IQD",
        add_to_cart: "Add to Cart"
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

// === Menu Data (All 30 Items Restricted) ===
const menuItems = [
    // Eastern
    { id: 1, category: 'eastern', name: 'منسف حبايبنا', name_en: 'Mansaf Habaibna', price: '25,000', img: 'assets/mansaf.png', desc: 'المنسف الأصلي بالجميد واللحم البلدي', desc_en: 'Original Mansaf with Jameed and local lamb.', ingredients: [{ n: 'لحم خروف', i: '🍖' }, { n: 'جميد', i: '🥛' }, { n: 'أرز', i: '🍚' }, { n: 'لوز', i: '🥜' }] },
    { id: 2, category: 'eastern', name: 'كباب عراقي', name_en: 'Iraqi Kebab', price: '18,000', img: 'assets/kebab.png', desc: 'كباب مشوي على الفحم مع الطماطم والبصل', desc_en: 'Grilled kebab on charcoal with tomatoes and onions.', ingredients: [{ n: 'لحم مفروم', i: '🥩' }, { n: 'بصل', i: '🧅' }, { n: 'سماق', i: '🧂' }, { n: 'خبز', i: '🫓' }] },
    { id: 3, category: 'eastern', name: 'قوزي على تمن', name_en: 'Quzi on Rice', price: '30,000', img: 'assets/quzi.png', desc: 'قطعة لحم كتف مطهية ببطء مع الرز والمكسرات', desc_en: 'Slow-cooked lamb shoulder with rice and nuts.', ingredients: [{ n: 'لحم كتف', i: '🍖' }, { n: 'أرز مبهر', i: '🍚' }, { n: 'زبيب', i: '🍇' }, { n: 'مكسرات', i: '🥜' }] },
    { id: 4, category: 'eastern', name: 'دولمة عراقية', name_en: 'Iraqi Dolma', price: '15,000', img: 'assets/dolma.png', desc: 'مشكل خضار محشي بالرز واللحم المفروم', desc_en: 'Mixed vegetables stuffed with rice and minced meat.', ingredients: [{ n: 'ورق عنب', i: '🍃' }, { n: 'بصل', i: '🧅' }, { n: 'لحم', i: '🥩' }, { n: 'أرز', i: '🍚' }] },
    { id: 5, category: 'eastern', name: 'سمك مسكوف', name_en: 'Masgouf Fish', price: '35,000', img: 'assets/masgouf.png', desc: 'السمك العراقي الشهير المشوي بالطريقة التقليدية', desc_en: 'Famous Iraqi grilled fish in the traditional way.', ingredients: [{ n: 'سمك', i: '🐟' }, { n: 'ليمون', i: '🍋' }, { n: 'ملح خشن', i: '🧂' }, { n: 'نار الحطب', i: '🔥' }] },
    { id: 6, category: 'eastern', name: 'مرق بامية باللحم', name_en: 'Okra Stew with Meat', price: '12,000', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800', desc: 'بامية طازجة مع قطع اللحم والصلصة الحمراء', desc_en: 'Fresh okra with meat pieces and red sauce.', ingredients: [{ n: 'بامية', i: '🥗' }, { n: 'لحم', i: '🍖' }, { n: 'طماطم', i: '🍅' }, { n: 'ثوم', i: '🧄' }] },
    { id: 7, category: 'eastern', name: 'كبة موصلية', name_en: 'Mosul Kubba', price: '10,000', img: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?auto=format&fit=crop&w=800', desc: 'كبة برغل محشية باللحم والمكسرات', desc_en: 'Bulgur kubba stuffed with meat and nuts.', ingredients: [{ n: 'برغل', i: '🌾' }, { n: 'لحم', i: '🥩' }, { n: 'صنوبر', i: '🌲' }, { n: 'بهارات', i: '🧂' }] },
    { id: 8, category: 'eastern', name: 'شيخ المحشي (كوسا)', name_en: 'Sheikh al-Mahshi', price: '14,000', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800', desc: 'كوسا محشية باللحم والصنوبر بصوص اللبن', desc_en: 'Zucchini stuffed with meat and pine nuts in yogurt sauce.', ingredients: [{ n: 'كوسا', i: '🥒' }, { n: 'لحم', i: '🥩' }, { n: 'لبن', i: '🥛' }, { n: 'نعناع', i: '🌿' }] },
    { id: 9, category: 'eastern', name: 'تشريب دجاج', name_en: 'Chicken Tashreeb', price: '15,000', img: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?auto=format&fit=crop&w=800', desc: 'تشريب عراقي أصفر بالدجاج والخبز', desc_en: 'Yellow Iraqi tashreeb with chicken and bread.', ingredients: [{ n: 'دجاج', i: '🍗' }, { n: 'خبز', i: '🍞' }, { n: 'نومي بصرة', i: '🍋' }, { n: 'حمص', i: '🥜' }] },
    { id: 10, category: 'eastern', name: 'برياني عراقي', name_en: 'Iraqi Biryani', price: '16,000', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800', desc: 'أرز مبهر مع الدجاج والشعيرية والبطاطا', desc_en: 'Spiced rice with chicken, vermicelli, and potatoes.', ingredients: [{ n: 'أرز', i: '🍚' }, { n: 'دجاج', i: '🍗' }, { n: 'بازلاء', i: '🟢' }, { n: 'بهارات', i: '🌶️' }] },

    // Fast Food
    { id: 11, category: 'fastfood', name: 'كلاسيك بيف برجر', name_en: 'Classic Beef Burger', price: '12,000', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800', desc: 'شريحة لحم بقري صافي مع الجبن الذائب', desc_en: 'Pure beef patty with melted cheese.', ingredients: [{ n: 'لحم بقري', i: '🥩' }, { n: 'جبن', i: '🧀' }, { n: 'خس', i: '🥬' }, { n: 'طماطم', i: '🍅' }] },
    { id: 12, category: 'fastfood', name: 'شاورما دجاج', name_en: 'Chicken Shawarma', price: '8,000', img: 'https://images.unsplash.com/photo-1616683693504-3ea7d5d5f5c5?auto=format&fit=crop&w=800', desc: 'شاورما دجاج بالتتبيلة الخاصة والثومية', desc_en: 'Chicken shawarma with special seasoning and garlic sauce.', ingredients: [{ n: 'دجاج', i: '🍗' }, { n: 'ثومية', i: '🧄' }, { n: 'مخلل', i: '🥒' }, { n: 'خبز صاج', i: '🫓' }] },
    { id: 13, category: 'fastfood', name: 'بيتزا سوبريم', name_en: 'Supreme Pizza', price: '15,000', img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800', desc: 'بيتزا غنية باللحم والخضروات والجبن', desc_en: 'Pizza rich in meat, vegetables, and cheese.', ingredients: [{ n: 'عجين', i: '🍕' }, { n: 'ببروني', i: '🥓' }, { n: 'فلفل', i: '🫑' }, { n: 'موزاريلا', i: '🧀' }] },
    { id: 14, category: 'fastfood', name: 'ساندويتش كباب', name_en: 'Kebab Sandwich', price: '7,000', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800', desc: 'ساندويتش كباب عراقي بالصمون الحجري', desc_en: 'Iraqi kebab sandwich in stone oven bread.', ingredients: [{ n: 'كباب', i: '🍢' }, { n: 'صمون', i: '🥖' }, { n: 'بصل', i: '🧅' }, { n: 'طحينة', i: '🥣' }] },
    { id: 15, category: 'fastfood', name: 'بطاطا بالجبن', name_en: 'Cheesy Fries', price: '6,000', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800', desc: 'بطاطا مقلية مغطاة بصوص الشيدر', desc_en: 'French fries covered with cheddar sauce.', ingredients: [{ n: 'بطاطا', i: '🍟' }, { n: 'جبن', i: '🧀' }, { n: 'هالابينو', i: '🌶️' }] },
    { id: 16, category: 'fastfood', name: 'دجاج مقلي (بروستد)', name_en: 'Broasted Chicken', price: '18,000', img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800', desc: 'نصف دجاجة مقرمشة مع البطاطا والثومية', desc_en: 'Crispy chicken with fries and garlic sauce.', ingredients: [{ n: 'دجاج', i: '🍗' }, { n: 'تتبيلة', i: '🤫' }, { n: 'بطاطا', i: '🍟' }, { n: 'ثوم', i: '🧄' }] },
    { id: 17, category: 'fastfood', name: 'هوت دوج سبيشال', name_en: 'Special Hot Dog', price: '8,000', img: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800', desc: 'نقانق مشوية مع الماسترد والكاتشب', desc_en: 'Grilled hot dog with mustard and ketchup.', ingredients: [{ n: 'نقانق', i: '🌭' }, { n: 'خردل', i: '🟡' }, { n: 'كاتشب', i: '🔴' }, { n: 'خبز', i: '🥖' }] },
    { id: 18, category: 'fastfood', name: 'ساندويتش فلافل', name_en: 'Falafel Sandwich', price: '3,000', img: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=800', desc: 'فلافل عراقية مقرمشة بالعمبة', desc_en: 'Crispy Iraqi falafel with amba.', ingredients: [{ n: 'فلافل', i: '🧆' }, { n: 'عمبة', i: '🥭' }, { n: 'سلطة', i: '🥗' }, { n: 'صمون', i: '🥖' }] },
    { id: 19, category: 'fastfood', name: 'كرسبي تشيكن برجر', name_en: 'Crispy Chicken Burger', price: '10,000', img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800', desc: 'صدر دجاج مقرمش مع الخس والمايونيز', desc_en: 'Crispy chicken breast with lettuce and mayo.', ingredients: [{ n: 'دجاج', i: '🍗' }, { n: 'مايونيز', i: '⚪' }, { n: 'خس', i: '🥬' }, { n: 'خبز', i: '🍔' }] },
    { id: 20, category: 'fastfood', name: 'ناجتس للأطفال', name_en: 'Kids Nuggets', price: '8,000', img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800', desc: 'قطع دجاج ذهبية مع البطاطا والعصير', desc_en: 'Golden chicken pieces with fries.', ingredients: [{ n: 'دجاج', i: '🍗' }, { n: 'بقسماط', i: '🍞' }, { n: 'بطاطا', i: '🍟' }, { n: 'كاتشب', i: '🍅' }] },

    // Desserts
    { id: 21, category: 'desserts', name: 'كنافة بالجبن', name_en: 'Cheese Kunafa', price: '8,000', img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800', desc: 'كنافة نابلسية ساخنة بالقطر والفستق', desc_en: 'Hot Nabulsi kunafa with syrup and pistachios.', ingredients: [{ n: 'عجينة', i: '🥨' }, { n: 'جبن', i: '🧀' }, { n: 'فستق', i: '🥜' }, { n: 'شيرة', i: '🍯' }] },
    { id: 22, category: 'desserts', name: 'بسبوسة', name_en: 'Basbousa', price: '5,000', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800', desc: 'بسبوسة هشة باللوز وجوز الهند', desc_en: 'Soft basbousa with almonds and coconut.', ingredients: [{ n: 'سميد', i: '🌾' }, { n: 'جوز هند', i: '🥥' }, { n: 'لوز', i: '🥜' }, { n: 'قطر', i: '🍯' }] },
    { id: 23, category: 'desserts', name: 'أم علي', name_en: 'Om Ali', price: '7,000', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800', desc: 'حلوى الحليب والرقائق والمكسرات الساخنة', desc_en: 'Hot milk dessert with flakes and nuts.', ingredients: [{ n: 'حليب', i: '🥛' }, { n: 'رقائق', i: '🥐' }, { n: 'قشطة', i: '☁️' }, { n: 'زبيب', i: '🍇' }] },
    { id: 24, category: 'desserts', name: 'زلابية (Churros)', name_en: 'Zalabia', price: '4,000', img: 'https://images.unsplash.com/photo-1543943482-6c9f19c1508b?auto=format&fit=crop&w=800', desc: 'عجين مقلي ومغطى بالشيرة (العسل)', desc_en: 'Fried dough with syrup.', ingredients: [{ n: 'عجين', i: '🥨' }, { n: 'زيت', i: '🌻' }, { n: 'شيرة', i: '🍯' }] },
    { id: 25, category: 'desserts', name: 'بقلاوة مشكلة', name_en: 'Mixed Baklava', price: '10,000', img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800', desc: 'تشكيلة من البقلاوة الفاخرة بالفستق', desc_en: 'Variety of luxury pistachio baklava.', ingredients: [{ n: 'رقائق', i: '📄' }, { n: 'فستق', i: '🥜' }, { n: 'سمن', i: '🧈' }, { n: 'عسل', i: '🍯' }] },
    { id: 26, category: 'desserts', name: 'تشيز كيك', name_en: 'Cheesecake', price: '9,000', img: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?auto=format&fit=crop&w=800', desc: 'تشيز كيك نيويورك مع صوص الفراولة', desc_en: 'New York cheesecake with strawberry sauce.', ingredients: [{ n: 'جبن كريمي', i: '🧀' }, { n: 'بسكويت', i: '🍪' }, { n: 'فراولة', i: '🍓' }] },
    { id: 27, category: 'desserts', name: 'قطايف بالجوز', name_en: 'Qatayef with Walnut', price: '5,000', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800', desc: 'قطايف مقلية محشوة بالجوز والقرفة', desc_en: 'Fried qatayef stuffed with walnuts.', ingredients: [{ n: 'قطايف', i: '🥞' }, { n: 'جوز', i: '🥜' }, { n: 'قرفة', i: '🤎' }, { n: 'قطر', i: '🍯' }] },
    { id: 28, category: 'desserts', name: 'ميلك شيك أوريو', name_en: 'Oreo Milkshake', price: '6,000', img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800', desc: 'مخفوق الحليب مع بسكويت الأوريو والكريمة', desc_en: 'Milkshake with Oreo cookies and cream.', ingredients: [{ n: 'حليب', i: '🥛' }, { n: 'أوريو', i: '🍪' }, { n: 'آيس كريم', i: '🍦' }] },
    { id: 29, category: 'desserts', name: 'آيس كريم زعفران', name_en: 'Saffron Ice Cream', price: '7,000', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800', desc: 'آيس كريم عربي بنكهة الزعفران والفستق', desc_en: 'Arabic ice cream with saffron and pistachio.', ingredients: [{ n: 'حليب', i: '🥛' }, { n: 'زعفران', i: '🌺' }, { n: 'فستق', i: '🥜' }, { n: 'ورد', i: '🌹' }] },
    { id: 30, category: 'desserts', name: 'عصير برتقال طازج', name_en: 'Fresh Orange Juice', price: '4,000', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800', desc: 'عصير برتقال طبيعي 100% بدون إضافات', desc_en: '100% natural orange juice.', ingredients: [{ n: 'برتقال', i: '🍊' }, { n: 'ثلج', i: '🧊' }] }
];

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const DELIVERY_FEE = 2000;

// === Language Logic ===
function updateLanguage() {
    const lang = currentLang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langText').innerText = lang === 'ar' ? 'EN' : 'AR';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    renderMenu(document.querySelector('.tab-btn.active')?.dataset.category || 'eastern');
    updateCartUI();
    checkStoreStatus();
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

// === Store Status Logic ===
function checkStoreStatus() {
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= 10 || hour < 2;

    const statusBanner = document.getElementById('store-status-banner') || (() => {
        const d = document.createElement('div');
        d.id = 'store-status-banner';
        document.body.prepend(d);
        return d;
    })();

    statusBanner.className = isOpen ? 'status-open' : 'status-closed';
    statusBanner.innerText = isOpen ? translations[currentLang].status_open : translations[currentLang].status_closed;
}

// === Toast System ===
function showToast(message) {
    const container = document.getElementById('toast-container') || (() => {
        const c = document.createElement('div');
        c.id = 'toast-container';
        document.body.appendChild(c);
        return c;
    })();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// === Search Logic ===
let searchQuery = "";
function handleSearch() {
    searchQuery = document.getElementById('menuSearch').value.toLowerCase();
    renderMenu(document.querySelector('.tab-btn.active').dataset.category);
}

// === Render Menu ===
function renderMenu(filter = 'eastern') {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = item.category === filter;
        const name = currentLang === 'ar' ? item.name : item.name_en;
        const matchesSearch = name.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = (e) => {
            if (!e.target.closest('.add-btn')) openExplosionModal(item);
        };

        const name = currentLang === 'ar' ? item.name : item.name_en;
        const desc = currentLang === 'ar' ? item.desc : item.desc_en;

        card.innerHTML = `
            <div class="dish-img-container">
                <img src="${item.img}" alt="${name}" class="dish-img" loading="lazy">
            </div>
            <div class="dish-info">
                <h3 class="dish-title">${name}</h3>
                <p class="dish-desc">${desc}</p>
                <div class="dish-footer">
                    <span class="price">${item.price} <small>${translations[currentLang].currency}</small></span>
                    <button class="add-btn" onclick="addToCart(${item.id})"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// === Tabs Logic ===
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.category);
    });
});

// === Cart Logic ===
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existing = cartItems.find(i => i.id === itemId);
    if (existing) existing.quantity++;
    else cartItems.push({ ...item, quantity: 1 });

    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartUI();
    const itemName = currentLang === 'ar' ? item.name : item.name_en;
    showToast(translations[currentLang].toast_added.replace('{item}', itemName));
}

function updateCartUI() {
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelector('.cart-count').innerText = cartCount;

    const subTotal = cartItems.reduce((acc, item) => acc + (parseInt(item.price.replace(/,/g, '')) * item.quantity), 0);
    const total = subTotal > 0 ? subTotal + DELIVERY_FEE : 0;

    document.getElementById('cartSubTotal').innerText = `${subTotal.toLocaleString()} ${translations[currentLang].currency}`;
    document.getElementById('cartFinalTotal').innerText = `${total.toLocaleString()} ${translations[currentLang].currency}`;

    if (document.getElementById('modalSubTotal')) {
        document.getElementById('modalSubTotal').innerText = `${subTotal.toLocaleString()} ${translations[currentLang].currency}`;
        document.getElementById('modalFinalTotal').innerText = `${total.toLocaleString()} ${translations[currentLang].currency}`;
    }

    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (cartItems.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 20px; color:#777;">${translations[currentLang].cart_empty}</div>`;
        return;
    }

    container.innerHTML = cartItems.map(item => {
        const name = currentLang === 'ar' ? item.name : item.name_en;
        return `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:10px;">
                <div>
                    <div style="font-weight:bold; font-size:0.95rem;">${name}</div>
                    <div style="font-size:0.85rem; color:#666;">${item.price} ${translations[currentLang].currency}</div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQty(${item.id}, -1)" class="qty-btn" style="width:25px; height:25px; border-radius:50%; border:1px solid #ddd; background:#fff;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)" class="qty-btn" style="width:25px; height:25px; border-radius:50%; border:1px solid #ddd; background:#fff;">+</button>
                    <i class="fas fa-trash-alt" onclick="removeItem(${item.id})" style="color:#d9534f; cursor:pointer;"></i>
                </div>
            </div>
        `;
    }).join('');
}

function changeQty(id, delta) {
    const item = cartItems.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeItem(id);
        else {
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateCartUI();
        }
    }
}

function removeItem(id) {
    cartItems = cartItems.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const isOpen = sidebar.style.display === 'flex';

    if (isOpen) {
        sidebar.style.display = 'none';
        sidebar.classList.remove('active');
    } else {
        sidebar.style.display = 'flex';
        setTimeout(() => sidebar.classList.add('active'), 10);
    }
}

// === Explosion Modal Logic ===
function openExplosionModal(item) {
    const modal = document.getElementById('explosionModal');
    const mainDish = document.getElementById('mainDishView');
    const img = document.getElementById('modalImg');
    const title = document.getElementById('modalTitle');
    const panel = document.getElementById('ingredientsPanel');
    const container = document.getElementById('explosionContainer');

    document.querySelectorAll('.ingredient-particle').forEach(el => el.remove());

    const name = currentLang === 'ar' ? item.name : item.name_en;
    img.src = item.img;
    title.innerText = name;
    panel.innerHTML = '';
    panel.classList.remove('show');
    modal.classList.add('active');

    mainDish.style.animation = 'shake 0.5s infinite';

    setTimeout(() => {
        mainDish.style.animation = 'none';

        const radius = window.innerWidth < 768 ? 120 : 200;

        item.ingredients.forEach((ing, i) => {
            const particle = document.createElement('div');
            particle.className = 'ingredient-particle';
            particle.innerText = ing.i;
            particle.style.position = 'absolute';
            particle.style.opacity = '0';

            container.appendChild(particle);

            const angle = (i * (360 / item.ingredients.length)) * (Math.PI / 180);
            const destX = Math.cos(angle) * radius;
            const destY = Math.sin(angle) * radius;

            setTimeout(() => {
                particle.style.opacity = '1';
                particle.style.transform = `translate(${destX}px, ${destY}px)`;
            }, 50);

            panel.innerHTML += `
                <div class="ingredient-item">
                    <div style="font-size: 2rem;">${ing.i}</div>
                    <div style="font-size: 0.9rem;">${currentLang === 'ar' ? ing.n : ing.n}</div>
                </div>
            `;
        });

        setTimeout(() => panel.classList.add('show'), 800);
    }, 600);
}

function addToCartFromModal() {
    const itemName = document.getElementById('modalTitle').innerText;
    const item = menuItems.find(i => (currentLang === 'ar' ? i.name : i.name_en) === itemName);
    if (item) {
        addToCart(item.id);
        closeModal();
    }
}

function closeModal() {
    document.getElementById('explosionModal').classList.remove('active');
}

// === Checkout Logic ===
function openCheckoutModal() {
    if (cartItems.length === 0) {
        showToast(currentLang === 'ar' ? "السلة فارغة!" : "Cart is empty!");
        return;
    }
    toggleCart();
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function finalizeOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const landmark = document.getElementById('custLandmark').value.trim();

    const phoneRegex = /^(07[3-9][0-9]{8}|009647[3-9][0-9]{8}|\+9647[3-9][0-9]{8})$/;

    if (!name || name.length < 3) {
        showToast(currentLang === 'ar' ? "يرجى إدخال الاسم الثلاثي" : "Please enter full name");
        return;
    }
    if (!phoneRegex.test(phone)) {
        showToast(currentLang === 'ar' ? "رقم الهاتف غير صحيح" : "Invalid phone number");
        return;
    }
    if (!address || address.length < 10) {
        showToast(currentLang === 'ar' ? "يرجى كتابة العنوان بالتفصيل" : "Please write detailed address");
        return;
    }

    const subTotalVal = cartItems.reduce((acc, item) => acc + (parseInt(item.price.replace(/,/g, '')) * item.quantity), 0);
    const finalTotal = subTotalVal + DELIVERY_FEE;

    let message = `*طلب جديد من الموقع 🛍️*%0a`;
    message += `-----------------------------%0a`;
    message += `*👤 معلومات الزبون:*%0a`;
    message += `الاسم: ${name}%0aالهاتف: ${phone}%0aالعنوان: ${address}%0aنقطة دالة: ${landmark}%0a`;
    message += `-----------------------------%0a`;
    message += `*🍽️ تفاصيل الطلب:*%0a`;

    cartItems.forEach(item => {
        const itemTotal = parseInt(item.price.replace(/,/g, '')) * item.quantity;
        message += `- ${item.name} (x${item.quantity}): ${itemTotal.toLocaleString()} د.ع%0a`;
    });

    message += `-----------------------------%0a`;
    message += `المجموع: ${subTotalVal.toLocaleString()} د.ع%0a`;
    message += `التوصيل: ${DELIVERY_FEE.toLocaleString()} د.ع%0a`;
    message += `*المبلغ الكلي: ${finalTotal.toLocaleString()} د.ع*%0a`;

    window.open(`https://wa.me/9647706205459?text=${message}`, '_blank');

    cartItems = [];
    localStorage.removeItem('cart');
    updateCartUI();
    closeCheckoutModal();
}

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('active');
}

function scrollToMenu(cat) {
    document.getElementById('menu').scrollIntoView();
    const btn = document.querySelector(`.tab-btn[data-category="${cat}"]`);
    if (btn) btn.click();
}

// === Map & Init ===
window.onload = () => {
    updateLanguage();

    if (typeof L !== 'undefined') {
        const map = L.map('map').setView([33.3152, 44.3661], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'OpenStreetMap'
        }).addTo(map);
        L.marker([33.3152, 44.3661]).addTo(map).bindPopup('مطعم حبايبنا').openPopup();
    }

    const galleryGrid = document.getElementById('galleryGrid');
    const galleryImages = [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800'
    ];
    galleryGrid.innerHTML = galleryImages.map(img => `<div class="gallery-item"><img src="${img}"></div>`).join('');

    const reviewsCon = document.getElementById('reviewsContainer');
    const reviews = [
        { name: "Ahmed", text: "أفضل كباب في بغداد!", text_en: "Best kebab in Baghdad!" },
        { name: "Sarah", text: "الخدمة سريعة والأكل يجنن", text_en: "Fast service and amazing food!" }
    ];
    reviewsCon.innerHTML = reviews.map(r => `
        <div class="review-card">
            <p class="review-text">"${currentLang === 'ar' ? r.text : r.text_en}"</p>
            <p class="review-author">- ${r.name}</p>
        </div>
    `).join('');
};
