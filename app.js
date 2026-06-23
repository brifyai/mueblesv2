// ---------- Slideshow ----------
const slides = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('slideDots');
let cur = 0;
if (slides.length && dotsWrap) {
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  });
  const dots = dotsWrap.querySelectorAll('button');
  function go(i) {
    slides[cur].classList.remove('is-active');
    dots[cur].classList.remove('active');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('is-active');
    dots[cur].classList.add('active');
  }
  setInterval(() => go(cur + 1), 5500);
}

// ---------- Menu panel ----------
const menuPanel = document.getElementById('menuPanel');
const backdrop = document.getElementById('backdrop');
function openPanel(el) { el.classList.add('open'); backdrop.classList.add('show'); }
function closeAll() {
  menuPanel && menuPanel.classList.remove('open');
  const cd = document.getElementById('cartDrawer');
  cd && cd.classList.remove('open');
  backdrop.classList.remove('show');
}
document.getElementById('menuBtn')?.addEventListener('click', () => openPanel(menuPanel));
document.getElementById('menuClose')?.addEventListener('click', closeAll);
backdrop?.addEventListener('click', closeAll);

// ---------- Cart (localStorage) ----------
const CART_KEY = 'luk_cart';
const fmt = n => '$' + n.toLocaleString('es-CL');
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const saveCart = c => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); };

function addToCart(item) {
  const cart = getCart();
  const found = cart.find(p => p.id === item.id);
  if (found) found.qty += 1; else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  const cd = document.getElementById('cartDrawer');
  cd && openPanel(cd);
}
function removeFromCart(id) { saveCart(getCart().filter(p => p.id !== id)); }

function renderCart() {
  const cart = getCart();
  const count = cart.reduce((s, p) => s + p.qty, 0);
  const total = cart.reduce((s, p) => s + p.qty * p.price, 0);
  document.querySelectorAll('#cartCount').forEach(e => e.textContent = count);
  const tEl = document.getElementById('cartTotal');
  if (tEl) tEl.textContent = fmt(total);
  const wrap = document.getElementById('cartItems');
  if (!wrap) return;
  if (!cart.length) { wrap.innerHTML = '<p class="cart-empty">No hay productos en el carrito.</p>'; return; }
  wrap.innerHTML = cart.map(p => `
    <div class="cart-row">
      <img src="${p.img}" alt="${p.name}">
      <div class="info">
        <h4>${p.name}</h4>
        <p class="price">${p.qty} × ${fmt(p.price)}</p>
      </div>
      <button class="rm" data-id="${p.id}">Quitar</button>
    </div>`).join('');
  wrap.querySelectorAll('.rm').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.id)));
}

document.getElementById('cartBtn')?.addEventListener('click', () => {
  renderCart();
  openPanel(document.getElementById('cartDrawer'));
});
document.getElementById('cartClose')?.addEventListener('click', closeAll);

renderCart();
window.LukCart = { addToCart, getCart, removeFromCart };
