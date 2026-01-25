// === بيانات القائمة (تم تحديث الصور بروابط 4K عالية الجودة) ===
const menuItems = [
    // الأطباق الشرقية - صور 4K عالية الجودة
    { id: 1, category: 'eastern', name: 'منسف حبايبنا', price: '25,000', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'المنسف الأصلي بالجميد واللحم البلدي', ingredients: [{n:'لحم خروف', i:'🍖'}, {n:'جميد', i:'🥛'}, {n:'أرز', i:'🍚'}, {n:'لوز', i:'🥜'}] },
    { id: 2, category: 'eastern', name: 'كباب عراقي', price: '18,000', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'كباب مشوي على الفحم مع الطماطم والبصل', ingredients: [{n:'لحم مفروم', i:'🥩'}, {n:'بصل', i:'🧅'}, {n:'سماق', i:'🧂'}, {n:'خبز', i:'🫓'}] },
    { id: 3, category: 'eastern', name: 'قوزي على تمن', price: '30,000', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'قطعة لحم كتف مطهية ببطء مع الرز والمكسرات', ingredients: [{n:'لحم كتف', i:'🍖'}, {n:'أرز مبهر', i:'🍚'}, {n:'زبيب', i:'🍇'}, {n:'مكسرات', i:'🥜'}] },
    { id: 4, category: 'eastern', name: 'دولمة عراقية', price: '15,000', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'مشكل خضار محشي بالرز واللحم المفروم', ingredients: [{n:'ورق عنب', i:'🍃'}, {n:'بصل', i:'🧅'}, {n:'لحم', i:'🥩'}, {n:'أرز', i:'🍚'}] },
    { id: 5, category: 'eastern', name: 'سمك مسكوف', price: '35,000', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'السمك العراقي الشهير المشوي بالطريقة التقليدية', ingredients: [{n:'سمك', i:'🐟'}, {n:'ليمون', i:'🍋'}, {n:'ملح خشن', i:'🧂'}, {n:'نار الحطب', i:'🔥'}] },
    { id: 6, category: 'eastern', name: 'مرق بامية باللحم', price: '12,000', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'بامية طازجة مع قطع اللحم والصلصة الحمراء', ingredients: [{n:'بامية', i:'🥗'}, {n:'لحم', i:'🍖'}, {n:'طماطم', i:'🍅'}, {n:'ثوم', i:'🧄'}] },
    { id: 7, category: 'eastern', name: 'كبة موصلية', price: '10,000', img: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'كبة برغل محشية باللحم والمكسرات', ingredients: [{n:'برغل', i:'🌾'}, {n:'لحم', i:'🥩'}, {n:'صنوبر', i:'🌲'}, {n:'بهارات', i:'🧂'}] },
    { id: 8, category: 'eastern', name: 'شيخ المحشي (كوسا)', price: '14,000', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'كوسا محشية باللحم والصنوبر بصوص اللبن', ingredients: [{n:'كوسا', i:'🥒'}, {n:'لحم', i:'🥩'}, {n:'لبن', i:'🥛'}, {n:'نعناع', i:'🌿'}] },
    { id: 9, category: 'eastern', name: 'تشريب دجاج', price: '15,000', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'تشريب عراقي أصفر بالدجاج والخبز', ingredients: [{n:'دجاج', i:'🍗'}, {n:'خبز', i:'🍞'}, {n:'نومي بصرة', i:'🍋'}, {n:'حمص', i:'🥜'}] },
    { id: 10, category: 'eastern', name: 'برياني عراقي', price: '16,000', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'أرز مبهر مع الدجاج والشعيرية والبطاطا', ingredients: [{n:'أرز', i:'🍚'}, {n:'دجاج', i:'🍗'}, {n:'بازلاء', i:'🟢'}, {n:'بهارات', i:'🌶️'}] },

    // الوجبات السريعة - صور 4K عالية الجودة
    { id: 11, category: 'fastfood', name: 'كلاسيك بيف برجر', price: '12,000', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'شريحة لحم بقري صافي مع الجبن الذائب', ingredients: [{n:'لحم بقري', i:'🥩'}, {n:'جبن', i:'🧀'}, {n:'خس', i:'🥬'}, {n:'طماطم', i:'🍅'}] },
    { id: 12, category: 'fastfood', name: 'شاورما دجاج', price: '8,000', img: 'https://images.unsplash.com/photo-1616683693504-3ea7d5d5f5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'شاورما دجاج بالتتبيلة الخاصة والثومية', ingredients: [{n:'دجاج', i:'🍗'}, {n:'ثومية', i:'🧄'}, {n:'مخلل', i:'🥒'}, {n:'خبز صاج', i:'🫓'}] },
    { id: 13, category: 'fastfood', name: 'بيتزا سوبريم', price: '15,000', img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'بيتزا غنية باللحم والخضروات والجبن', ingredients: [{n:'عجين', i:'🍕'}, {n:'لحم وببروني', i:'🥓'}, {n:'فلفل', i:'🫑'}, {n:'موزاريلا', i:'🧀'}] },
    { id: 14, category: 'fastfood', name: 'ساندويتش كباب', price: '7,000', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'ساندويتش كباب عراقي بالصمون الحجري', ingredients: [{n:'كباب', i:'🍢'}, {n:'صمون', i:'🥖'}, {n:'بصل', i:'🧅'}, {n:'طحينة', i:'🥣'}] },
    { id: 15, category: 'fastfood', name: 'بطاطا بالجبن', price: '6,000', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'بطاطا مقلية مغطاة بصوص الشيدر', ingredients: [{n:'بطاطا', i:'🍟'}, {n:'جبن سائل', i:'🧀'}, {n:'هالابينو', i:'🌶️'}] },
    { id: 16, category: 'fastfood', name: 'دجاج مقلي (بروستد)', price: '18,000', img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'نصف دجاجة مقرمشة مع البطاطا والثومية', ingredients: [{n:'دجاج', i:'🍗'}, {n:'تتبيلة سرية', i:'🤫'}, {n:'بطاطا', i:'🍟'}, {n:'ثوم', i:'🧄'}] },
    { id: 17, category: 'fastfood', name: 'هوت دوج سبيشال', price: '8,000', img: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'نقانق مشوية مع الماسترد والكاتشب', ingredients: [{n:'نقانق', i:'🌭'}, {n:'خردل', i:'🟡'}, {n:'كاتشب', i:'🔴'}, {n:'خبز', i:'🥖'}] },
    { id: 18, category: 'fastfood', name: 'ساندويتش فلافل', price: '3,000', img: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'فلافل عراقية مقرمشة بالعمبة', ingredients: [{n:'فلافل', i:'🧆'}, {n:'عمبة', i:'🥭'}, {n:'سلطة', i:'🥗'}, {n:'صمون', i:'🥖'}] },
    { id: 19, category: 'fastfood', name: 'كرسبي تشيكن برجر', price: '10,000', img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'صدر دجاج مقرمش مع الخس والمايونيز', ingredients: [{n:'دجاج كرسبي', i:'🍗'}, {n:'مايونيز', i:'⚪'}, {n:'خس', i:'🥬'}, {n:'خبز برجر', i:'🍔'}] },
    { id: 20, category: 'fastfood', name: 'ناجتس للأطفال', price: '8,000', img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'قطع دجاج ذهبية مع البطاطا والعصير', ingredients: [{n:'دجاج', i:'🍗'}, {n:'بقسماط', i:'🍞'}, {n:'بطاطا', i:'🍟'}, {n:'كاتشب', i:'🍅'}] },

    // الحلويات والمشروبات - صور 4K عالية الجودة
    { id: 21, category: 'desserts', name: 'كنافة بالجبن', price: '8,000', img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'كنافة نابلسية ساخنة بالقطر والفستق', ingredients: [{n:'عجينة كنافة', i:'🥨'}, {n:'جبن', i:'🧀'}, {n:'فستق', i:'🥜'}, {n:'شيرة', i:'🍯'}] },
    { id: 22, category: 'desserts', name: 'بسبوسة', price: '5,000', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'بسبوسة هشة باللوز وجوز الهند', ingredients: [{n:'سميد', i:'🌾'}, {n:'جوز هند', i:'🥥'}, {n:'لوز', i:'🥜'}, {n:'قطر', i:'🍯'}] },
    { id: 23, category: 'desserts', name: 'أم علي', price: '7,000', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'حلوى الحليب والرقائق والمكسرات الساخنة', ingredients: [{n:'حليب', i:'🥛'}, {n:'رقائق', i:'🥐'}, {n:'قشطة', i:'☁️'}, {n:'زبيب', i:'🍇'}] },
    { id: 24, category: 'desserts', name: 'زلابية (Churros)', price: '4,000', img: 'https://images.unsplash.com/photo-1543943482-6c9f19c1508b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'عجين مقلي ومغطى بالشيرة (العسل)', ingredients: [{n:'عجين', i:'🥨'}, {n:'زيت', i:'🌻'}, {n:'شيرة', i:'🍯'}] },
    { id: 25, category: 'desserts', name: 'بقلاوة مشكلة', price: '10,000', img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'تشكيلة من البقلاوة الفاخرة بالفستق', ingredients: [{n:'رقائق', i:'📄'}, {n:'فستق حلبي', i:'🥜'}, {n:'سمن', i:'🧈'}, {n:'عسل', i:'🍯'}] },
    { id: 26, category: 'desserts', name: 'تشيز كيك', price: '9,000', img: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'تشيز كيك نيويورك مع صوص الفراولة', ingredients: [{n:'جبن كريمي', i:'🧀'}, {n:'بسكويت', i:'🍪'}, {n:'فراولة', i:'🍓'}] },
    { id: 27, category: 'desserts', name: 'قطايف بالجوز', price: '5,000', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'قطايف مقلية محشوة بالجوز والقرفة', ingredients: [{n:'قطايف', i:'🥞'}, {n:'جوز', i:'🥜'}, {n:'قرفة', i:'🤎'}, {n:'قطر', i:'🍯'}] },
    { id: 28, category: 'desserts', name: 'ميلك شيك أوريو', price: '6,000', img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'مخفوق الحليب مع بسكويت الأوريو والكريمة', ingredients: [{n:'حليب', i:'🥛'}, {n:'أوريو', i:'🍪'}, {n:'آيس كريم', i:'🍦'}] },
    { id: 29, category: 'desserts', name: 'آيس كريم زعفران', price: '7,000', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'آيس كريم عربي بنكهة الزعفران والفستق', ingredients: [{n:'حليب', i:'🥛'}, {n:'زعفران', i:'🌺'}, {n:'فستق', i:'🥜'}, {n:'ماء ورد', i:'🌹'}] },
    { id: 30, category: 'desserts', name: 'عصير برتقال طازج', price: '4,000', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80', desc: 'عصير برتقال طبيعي 100% بدون إضافات', ingredients: [{n:'برتقال', i:'🍊'}, {n:'ثلج', i:'🧊'}] }
];

let cartCount = 0;
let cartItems = [];
let subTotal = 0;
const DELIVERY_FEE = 2000;

// === عرض القائمة ===
function renderMenu(filter = 'eastern') {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    
    const filteredItems = menuItems.filter(item => item.category === filter);
    
    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = (e) => {
            if(!e.target.closest('.add-btn')) {
                openExplosionModal(item);
            }
        };
        
        card.innerHTML = `
            <div class="dish-img-container">
                <img src="${item.img}" alt="${item.name}" class="dish-img" loading="lazy">
            </div>
            <div class="dish-info">
                <h3 class="dish-title">${item.name}</h3>
                <p class="dish-desc">${item.desc}</p>
                <div class="dish-footer">
                    <span class="price">${item.price} <small>د.ع</small></span>
                    <button class="add-btn" onclick="addToCart(${item.id})"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// === تبديل الأقسام ===
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderMenu(this.dataset.category);
    });
});

// === وظائف السلة ===
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cartItems.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
}

function updateCartUI() {
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').innerText = cartCount;
    
    subTotal = cartItems.reduce((total, item) => {
        const price = parseInt(item.price.replace(/,/g, ''));
        return total + (price * item.quantity);
    }, 0);
    
    const finalTotal = subTotal > 0 ? subTotal + DELIVERY_FEE : 0;
    
    document.getElementById('cartSubTotal').innerText = subTotal.toLocaleString() + ' د.ع';
    document.getElementById('cartFinalTotal').innerText = finalTotal.toLocaleString() + ' د.ع';
    
    // تحديث السعر في نافذة المودال ايضاً
    document.getElementById('modalSubTotal').innerText = subTotal.toLocaleString() + ' د.ع';
    document.getElementById('modalFinalTotal').innerText = finalTotal.toLocaleString() + ' د.ع';

    renderCartItems();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const content = document.getElementById('cartContent');
    
    if (sidebar.style.display === 'flex') {
        sidebar.classList.remove('active');
        content.style.transform = 'translateX(-100%)';
        setTimeout(() => { sidebar.style.display = 'none'; }, 300);
    } else {
        sidebar.style.display = 'flex';
        setTimeout(() => { 
            sidebar.classList.add('active');
            content.style.transform = 'translateX(0)';
        }, 10);
        renderCartItems();
    }
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (cartItems.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 20px; color:#777;">السلة فارغة حالياً</div>';
        return;
    }
    
    let html = '';
    cartItems.forEach(item => {
        html += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #f9f9f9; padding-bottom:10px;">
                <div>
                    <div style="font-weight:bold; font-size:0.95rem;">${item.name}</div>
                    <div style="font-size:0.85rem; color:#666;">${item.price} د.ع</div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQty(${item.id}, -1)" style="width:25px; height:25px; border-radius:50%; border:1px solid #ddd; background:#fff;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)" style="width:25px; height:25px; border-radius:50%; border:1px solid #ddd; background:#fff;">+</button>
                    <i class="fas fa-trash-alt" onclick="removeItem(${item.id})" style="color:#d9534f; cursor:pointer; font-size:0.9rem; margin-right:5px;"></i>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function changeQty(id, delta) {
    const item = cartItems.find(i => i.id === id);
    if(item) {
        item.quantity += delta;
        if(item.quantity <= 0) removeItem(id);
        else updateCartUI();
    }
}

function removeItem(id) {
    cartItems = cartItems.filter(i => i.id !== id);
    updateCartUI();
}

// === منطق إتمام الطلب والواتساب (جديد) ===
function openCheckoutModal() {
    if (cartItems.length === 0) {
        alert('السلة فارغة! أضف بعض المنتجات أولاً.');
        return;
    }
    toggleCart(); // إغلاق السلة
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

    if (!name || !phone || !address || !landmark) {
        alert("يرجى ملء جميع الحقول المطلوبة لإتمام الطلب.");
        return;
    }

    const finalTotal = subTotal + DELIVERY_FEE;

    // بناء رسالة الواتساب
    let message = `*طلب جديد من الموقع 🛍️*%0a`;
    message += `-----------------------------%0a`;
    message += `*👤 معلومات الزبون:*%0a`;
    message += `الاسم: ${name}%0a`;
    message += `رقم الهاتف: ${phone}%0a`;
    message += `العنوان: ${address}%0a`;
    message += `نقطة دالة: ${landmark}%0a`;
    message += `-----------------------------%0a`;
    message += `*🍽️ تفاصيل الطلب:*%0a`;

    cartItems.forEach(item => {
        const itemTotal = parseInt(item.price.replace(/,/g, '')) * item.quantity;
        message += `- ${item.name} (عدد ${item.quantity})%0a`;
        message += `   السعر: ${itemTotal.toLocaleString()} د.ع%0a`;
    });

    message += `-----------------------------%0a`;
    message += `مجموع الطلبات: ${subTotal.toLocaleString()} د.ع%0a`;
    message += `🚚 أجور التوصيل: ${DELIVERY_FEE.toLocaleString()} د.ع%0a`;
    message += `*💰 المبلغ الكلي الواصل: ${finalTotal.toLocaleString()} د.ع*%0a`;
    message += `-----------------------------%0a`;
    message += `يرجى تأكيد استلام الطلب. شكراً!`;

    const phoneNumber = "9647706205459";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // إعادة ضبط السلة
    cartItems = [];
    updateCartUI();
    closeCheckoutModal();
    // تنظيف الحقول
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    document.getElementById('custAddress').value = '';
    document.getElementById('custLandmark').value = '';
}

// === قائمة الموبايل ===
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// === تأثير الانفجار ===
function openExplosionModal(item) {
    const modal = document.getElementById('explosionModal');
    const mainDish = document.getElementById('mainDishView');
    const img = document.getElementById('modalImg');
    const title = document.getElementById('modalTitle');
    const panel = document.getElementById('ingredientsPanel');
    const container = document.getElementById('explosionContainer');

    document.querySelectorAll('.ingredient-particle').forEach(el => el.remove());

    img.src = item.img;
    title.innerText = item.name;
    panel.innerHTML = '';
    panel.classList.remove('show');
    modal.classList.add('active');

    mainDish.style.animation = 'shake 0.5s infinite';

    setTimeout(() => {
        mainDish.style.animation = 'none';
        
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;
        const radius = window.innerWidth < 768 ? 120 : 200;

        item.ingredients.forEach((ing, i) => {
            const particle = document.createElement('div');
            particle.className = 'ingredient-particle';
            particle.innerText = ing.i;
            container.appendChild(particle);

            particle.style.left = `calc(50% - 25px)`; 
            particle.style.top = `calc(50% - 25px)`;

            const angle = (i * (360 / item.ingredients.length)) * (Math.PI / 180);
            const destX = Math.cos(angle) * radius;
            const destY = Math.sin(angle) * radius;

            setTimeout(() => {
                particle.style.opacity = '1';
                particle.style.transform = `translate(${destX}px, ${destY}px)`;
            }, 50);

            setTimeout(() => {
                particle.style.transition = 'all 0.6s ease-in';
                particle.style.top = '85%';
                particle.style.left = `${(i + 1) * (100 / (item.ingredients.length + 1))}%`;
                particle.style.transform = 'translate(-50%, 0)';
                particle.style.opacity = '0';
            }, 1000);

            panel.innerHTML += `
                <div class="ingredient-item">
                    <div style="font-size: 2rem;">${ing.i}</div>
                    <div style="font-size: 0.9rem;">${ing.n}</div>
                </div>
            `;
        });
        
        setTimeout(() => panel.classList.add('show'), 1200);

    }, 600);
}

function addToCartFromModal() {
    const itemName = document.getElementById('modalTitle').innerText;
    const item = menuItems.find(i => i.name === itemName);
    if(item) {
        addToCart(item.id);
        closeModal();
    }
}

function closeModal() {
    document.getElementById('explosionModal').classList.remove('active');
}

function scrollToMenu(cat) {
    document.getElementById('menu').scrollIntoView();
    if(document.querySelector(`.tab-btn[data-category="${cat}"]`)) {
        document.querySelector(`.tab-btn[data-category="${cat}"]`).click();
    }
}

// === الخريطة ===
window.onload = () => {
    renderMenu('eastern');
    
    if(typeof L !== 'undefined') {
        const map = L.map('map').setView([33.3152, 44.3661], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'OpenStreetMap'
        }).addTo(map);
        L.marker([33.3152, 44.3661]).addTo(map).bindPopup('مطعم حبايبنا').openPopup();
    }
};
