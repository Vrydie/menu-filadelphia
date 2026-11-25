/* =========================================================
   CONFIGURACIÓN DEL NEGOCIO — edita aquí
   ========================================================= */
const CONFIG = {
  name: 'Filadelphia Social Food',
  whatsapp: '573001234567', // TODO: número real con código de país, sin "+" ni espacios
  coverage: '🛵 Domicilios en la zona · 🍽️ Pedidos en mesa',
  payments: ['Efectivo', 'Nequi', 'Daviplata', 'Transferencia', 'Datáfono'],
};

const SALSAS = ['Salsa de la casa', 'Tártara', 'Piña', 'Ajo', 'Mostaza miel', 'BBQ', 'Rosada', 'Picante'];
const EXTRAS = [
  ['Chorizo', 4000], ['Tocineta', 4000], ['Pollo o carne', 9000], ['Queso', 4000],
  ['Maduro', 4000], ['Cebolla', 3000], ['Maíz', 3000], ['Guacamole', 3000],
];

// Tamaños reutilizables: [etiqueta, precio, máx. sabores (opcional)]
const X124 = (a, b, c) => [['Personal · x1', a], ['Para 2 · x2', b], ['Para 4 · x4', c]];
const COMBO = (s, c) => [['Sencillo', s], ['Combo', c]];

/* Producto: { name, desc, emoji, img?, badge?, price | sizes, pick? }
     badge: 'Más Vendida' | 'Recomendada para 2' | 'La más Monstruosa' | 'Nueva'
     img:   ruta a la foto, ej. 'img/salchi-ranchera.jpg' (si falta, se muestra el emoji)
     pick:  { label, options, max } → selección obligatoria (sabores, proteína…)
   Categoría: { id, name, note?, salsas?, extras?, items } — salsas/extras activan esos modificadores */
const MENU = [
  {
    id: 'especiales', name: 'Salchipapas Especiales', note: 'Con todo: maduro, tocineta, queso gratinado y más.',
    salsas: true, extras: true, items: [
      { name: 'Salchi Ranchera', emoji: '🌭', badge: 'Más Vendida', desc: 'Papa amarilla, salchicha ranchera, queso, salsa y maíz.', sizes: X124(22000, 32000, 56000) },
      { name: 'Salchi Maduro Tocineta', emoji: '🍟', desc: 'Papa amarilla, salchicha, queso, tocineta y maduro.', sizes: X124(18000, 26000, 45000) },
      { name: 'Salchi Costilla Maduro', emoji: '🍖', desc: 'Papa amarilla, salchicha, queso, costilla ahumada y maduro.', sizes: X124(20000, 28000, 50000) },
      { name: 'Salchi Colombiana', emoji: '🌽', desc: 'Papa amarilla, salchicha, queso, maíz, tocineta y maduro.', sizes: X124(18000, 26000, 45000) },
      { name: 'Salchi Pollo Tocineta', emoji: '🍗', desc: 'Papa amarilla, salchicha, queso, pollo desmechado y tocineta.', sizes: X124(19000, 29000, 50000) },
      { name: 'Salchi Mexicana', emoji: '🌮', badge: 'Nueva', desc: 'Papa amarilla, salchicha, queso, carne desmechada, guacamole, pico de gallo, salsas y nachos.', sizes: X124(22000, 32000, 56000) },
    ],
  },
  {
    id: 'personales', name: 'Salchipapas Personales', salsas: true, extras: true, items: [
      { name: 'Personal', emoji: '🍟', desc: 'Papa, salchicha y salsas.', price: 12000 },
      { name: 'Salchi Sencilla', emoji: '🧀', desc: 'Papa, salchicha, salsas y queso.', price: 14000 },
      { name: 'Choripapa', emoji: '🔥', desc: 'Papa amarilla, chorizo, queso, salsas y ripio.', price: 16000 },
    ],
  },
  {
    id: 'compartir', name: 'Para Compartir', note: 'Familiares y picadas para el parche.', salsas: true, extras: true, items: [
      { name: 'Salchi Mounstrosa (x4)', emoji: '👹', badge: 'La más Monstruosa', desc: 'Papa amarilla, salchicha, queso, pollo, maíz, chorizo y cebolla.', price: 50000 },
      { name: 'Salchi Especial (x2)', emoji: '🍟', badge: 'Recomendada para 2', desc: 'Papa amarilla, salchicha, queso, tocineta y ripio.', price: 18000 },
      { name: 'Salchi Familiar (x4)', emoji: '👨‍👩‍👧‍👦', desc: 'Papa amarilla, salchicha, queso, tocineta y ripio.', price: 35000 },
      { name: 'Picada', emoji: '🥩', desc: 'Carnes surtidas, chorizo, morcilla, salchicha, papa y maduro con ají de la casa.', sizes: [['Personal', 28000], ['Para 2', 52000], ['Para 4', 90000]] },
    ],
  },
  {
    id: 'alitas', name: 'Alitas', note: 'Acompañadas con papa amarilla.', items: [
      {
        name: 'Alitas', emoji: '🍗', desc: 'Alitas crocantes bañadas en tu salsa favorita, con papa amarilla.',
        sizes: [['6 alitas · 1 sabor', 18000, 1], ['12 alitas · 2 sabores', 30000, 2], ['24 alitas · 2 sabores', 52000, 2], ['36 alitas · 3 sabores', 73000, 3]],
        pick: { label: 'Sabores', options: ['BBQ', 'Picante', 'Mielmostaza'] },
      },
    ],
  },
  {
    id: 'burgers', name: 'Burgers', salsas: true, extras: true, items: [
      { name: 'Sencilla de Res', emoji: '🍔', desc: 'Pan artesanal, vegetales frescos, carne casera, queso cheddar y salsa de la casa.', sizes: COMBO(16000, 23000) },
      { name: 'Sencilla de Pollo', emoji: '🍔', desc: 'Pan artesanal, vegetales frescos, pollo, queso cheddar y salsa de la casa.', sizes: COMBO(18000, 24000) },
      { name: 'Especial de Res', emoji: '🍔', desc: 'Pan artesanal, queso cheddar, vegetales frescos, carne casera, tocineta y salsa de la casa.', sizes: COMBO(20000, 26000) },
      { name: 'Especial de Pollo', emoji: '🍔', desc: 'Pan artesanal, queso cheddar, vegetales frescos, pollo, tocineta y salsa de la casa.', sizes: COMBO(22000, 27000) },
      { name: 'Doble Carne de Res', emoji: '🍔', badge: 'Más Vendida', desc: 'Pan artesanal, queso cheddar, vegetales frescos, doble carne casera, tocineta y salsa de la casa.', sizes: COMBO(23000, 28000) },
      { name: 'Doble Carne Mixta', emoji: '🍔', desc: 'Pan artesanal, queso cheddar, vegetales frescos, carne de res y pollo, tocineta y salsa de la casa.', sizes: COMBO(25000, 30000) },
    ],
  },
  {
    id: 'hotdogs', name: 'Hot Dogs', salsas: true, extras: true, items: [
      { name: 'Sencillo', emoji: '🌭', desc: 'El clásico de la casa.', sizes: COMBO(12000, 18000) },
      { name: 'Choriperro', emoji: '🌭', desc: 'Con chorizo.', sizes: COMBO(14000, 19000) },
      { name: 'Especial', emoji: '🌭', desc: 'Versión cargada de la casa.', sizes: COMBO(15000, 20000) },
      { name: 'Ranchero', emoji: '🌭', desc: 'Con salchicha ranchera.', sizes: COMBO(17000, 23000) },
      { name: 'Mexicano', emoji: '🌶️', desc: 'Estilo mexicano.', sizes: COMBO(20000, 27000) },
    ],
  },
  {
    id: 'desgranados', name: 'Desgranados', salsas: true, extras: true, items: [
      { name: 'Sencillo de Pollo o Cerdo', emoji: '🥗', desc: 'Base de lechuga, papa francesa, salsa de la casa, chorizo, queso, ripio y maíz.', price: 19000, pick: { label: 'Proteína', options: ['Pollo', 'Cerdo'], max: 1 } },
      { name: 'Sencillo de Res', emoji: '🥗', desc: 'Base de lechuga, papa francesa, salsa de la casa, res, chorizo, queso, ripio y maíz.', price: 22000 },
      { name: 'Especial para 2 (Cerdo y Pollo)', emoji: '🥗', badge: 'Recomendada para 2', desc: 'Base de lechuga, papa francesa, salsa de la casa, cerdo y pollo, chorizo, tocineta, maíz, queso y ripio.', price: 28000 },
      { name: 'Especial para 2 (Res y Pollo)', emoji: '🥗', desc: 'Base de lechuga, papa francesa, salsa de la casa, res y pollo, chorizo, tocineta, queso, ripio y maíz.', price: 30000 },
      { name: 'Desgranado Familiar', emoji: '🥗', desc: 'Base de lechuga, papa francesa, salsa de la casa, cerdo y pollo, chorizo, tocineta, queso, ripio y maíz.', price: 50000 },
    ],
  },
  {
    id: 'colitas', name: 'Colitas', salsas: true, extras: true, items: [
      { name: 'Ropa Vieja', emoji: '🥖', desc: 'Pan alargado relleno de carne desmechada.', sizes: COMBO(18000, 25000) },
      { name: 'Americano', emoji: '🥖', desc: 'Pan alargado estilo americano.', sizes: COMBO(19000, 26000) },
      { name: 'Jamón y Queso', emoji: '🥖', desc: 'Pan alargado con jamón y queso.', sizes: COMBO(15000, 22000) },
      { name: 'Hawaiana', emoji: '🍍', desc: 'Pan alargado con jamón, queso y piña.', sizes: COMBO(16000, 23000) },
    ],
  },
  {
    id: 'asados', name: 'Asados', note: '250 g de carne, acompañados con papa francesa y ensalada.', items: [
      { name: 'Res', emoji: '🥩', desc: '250 g de res a la parrilla con papa francesa y ensalada.', price: 30000 },
      { name: 'Filete de Pollo', emoji: '🍗', desc: '250 g de filete de pollo con papa francesa y ensalada.', price: 27000 },
      { name: 'Cerdo', emoji: '🥓', desc: '250 g de cerdo con papa francesa y ensalada.', price: 28000 },
      { name: 'Costilla Ahumada', emoji: '🍖', desc: '250 g de costilla ahumada con papa francesa y ensalada.', price: 28000 },
    ],
  },
  {
    id: 'maduro', name: 'Maduro', note: 'Plátano maduro relleno y gratinado.', salsas: true, extras: true, items: [
      { name: 'Maduro Mexicano', emoji: '🍌', desc: 'Maduro relleno estilo mexicano, gratinado.', price: 20000 },
      { name: 'Maduro Pollo y Tocineta', emoji: '🍌', desc: 'Maduro relleno de pollo y tocineta, gratinado.', price: 20000 },
    ],
  },
  {
    id: 'adicionales', name: 'Adicionales y Toppings', items: [
      { name: 'Papa francesa grande', emoji: '🍟', price: 8000 },
      { name: 'Papa francesa pequeña', emoji: '🍟', price: 6000 },
      { name: 'Papa amarilla grande', emoji: '🥔', price: 7000 },
      { name: 'Papa amarilla pequeña', emoji: '🥔', price: 5000 },
      ...EXTRAS.map(([name, price]) => ({ name: `Porción de ${name.toLowerCase()}`, emoji: '➕', price })),
    ],
  },
  {
    // PRECIOS PROVISIONALES: el menú impreso no trae precio de bebidas
    id: 'bebidas', name: 'Bebidas', items: [
      {
        name: 'Jugo natural', emoji: '🥤', desc: 'En agua o en leche, de la fruta que quieras.',
        sizes: [['En agua', 6000], ['En leche', 7000]],
        pick: { label: 'Sabor', max: 1, options: ['Mango', 'Mora', 'Fresa', 'Guanábana', 'Lulo', 'Maracuyá', 'Limonada', 'Cereza', 'Coco', 'Piña colada', 'Mango biche', 'Maracumango'] },
      },
      { name: 'Gaseosa', emoji: '🥫', desc: 'Bien fría.', sizes: [['Personal', 4000], ['1.5 L', 7000], ['3 L', 10000]] },
    ],
  },
  {
    // PRECIO PROVISIONAL
    id: 'salsas', name: 'Salsas Especiales', note: 'Las salsas van gratis con tu plato. ¿Quieres más?', items: [
      { name: 'Porción extra de salsa', emoji: '🥫', desc: 'Una porción adicional de la salsa que elijas.', price: 1000, pick: { label: 'Salsa', max: 1, options: SALSAS } },
    ],
  },
];

/* =========================================================
   LÓGICA — normalmente no necesitas tocar debajo de aquí
   ========================================================= */
const $ = (s) => document.querySelector(s);
const fmt = (n) => '$' + n.toLocaleString('es-CO');
const esc = (s) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const PRODUCTS = {};
MENU.forEach((cat) => cat.items.forEach((p, i) => {
  p.id = `${cat.id}-${i}`;
  p.cat = cat;
  p.sizes ??= [['', p.price]];
  PRODUCTS[p.id] = p;
}));

const unitPrice = (p, sizeIdx, extraIdxs) =>
  p.sizes[sizeIdx][1] + extraIdxs.reduce((sum, i) => sum + EXTRAS[i][1], 0);
const needsOptions = (p) => p.sizes.length > 1 || p.pick || p.cat.salsas || p.cat.extras;

let cart = [];
let current = null; // producto abierto en el modal
let qty = 1;

/* ---------- Render del menú ---------- */
function renderMenu() {
  $('#catnav').innerHTML = MENU.map((c) => `<a class="chip" href="#${c.id}">${c.name}</a>`).join('');
  $('#menu').innerHTML = MENU.map((c) => `
    <section class="cat" id="${c.id}" aria-labelledby="t-${c.id}">
      <h2 class="cat-title" id="t-${c.id}">${c.name}</h2>
      ${c.note ? `<p class="cat-note">${c.note}</p>` : ''}
      <div class="grid">${c.items.map(card).join('')}</div>
    </section>`).join('');
}

const BADGE_CLASS = { 'Más Vendida': '', 'Recomendada para 2': 'b-mustard', 'La más Monstruosa': 'b-red', 'Nueva': 'b-mustard' };
const media = (p) =>
  (p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : `<span aria-hidden="true">${p.emoji || '🍽️'}</span>`) +
  (p.badge ? `<span class="badge ${BADGE_CLASS[p.badge] ?? ''}">${p.badge}</span>` : '');

function card(p) {
  const multi = p.sizes.length > 1;
  return `
    <article class="card">
      <div class="card-img">${media(p)}</div>
      <div class="card-body">
        <h3>${p.name}</h3>
        ${p.desc ? `<p>${p.desc}</p>` : ''}
        <div class="card-foot">
          <span class="price">${multi ? '<small>Desde</small>' : ''}${fmt(p.sizes[0][1])}</span>
          <button class="add" type="button" data-id="${p.id}" aria-label="${needsOptions(p) ? 'Personalizar' : 'Agregar'} ${p.name}">
            ${needsOptions(p) ? 'Personalizar' : '+ Agregar'}
          </button>
        </div>
      </div>
    </article>`;
}

/* ---------- Modal de producto ---------- */
const opt = (type, name, value, label, extra = '', checked = false) => `
  <label class="opt"><input type="${type}" name="${name}" value="${value}" ${checked ? 'checked' : ''}>
  <span>${label}</span>${extra ? `<em>${extra}</em>` : ''}</label>`;

function openProduct(p) {
  current = p;
  qty = 1;
  const form = $('#productForm');
  form.reset();
  $('#pImg').innerHTML = media(p);
  $('#pName').textContent = p.name;
  $('#pDesc').textContent = p.desc || '';

  let html = '';
  if (p.sizes.length > 1) {
    html += `<fieldset class="group fields"><legend class="group-title">Elige tamaño <small class="req">Obligatorio</small></legend>
      ${p.sizes.map(([l, pr], i) => opt('radio', 'size', i, l, fmt(pr), i === 0)).join('')}</fieldset>`;
  }
  if (p.pick) {
    html += `<fieldset class="group fields"><legend class="group-title">${p.pick.label} <small class="req" id="pickHint"></small></legend>
      <div class="chips-opts">${p.pick.options.map((o) => opt('checkbox', 'pick', o, o)).join('')}</div></fieldset>`;
  }
  if (p.cat.salsas) {
    html += `<fieldset class="group fields"><legend class="group-title">Salsas incluidas <small>Gratis · elige las que quieras</small></legend>
      <div class="chips-opts">${SALSAS.map((s) => opt('checkbox', 'salsa', s, s)).join('')}</div></fieldset>`;
  }
  if (p.cat.extras) {
    html += `<fieldset class="group fields"><legend class="group-title">Adicionales <small>Opcional</small></legend>
      ${EXTRAS.map(([n, pr], i) => opt('checkbox', 'extra', i, n, '+' + fmt(pr))).join('')}</fieldset>`;
  }
  $('#pGroups').innerHTML = html;
  syncProduct();
  $('#productDlg').showModal();
}

function readProduct() {
  const fd = new FormData($('#productForm'));
  return {
    size: +(fd.get('size') ?? 0),
    picks: fd.getAll('pick'),
    salsas: fd.getAll('salsa'),
    extras: fd.getAll('extra').map(Number),
    note: (fd.get('note') || '').trim(),
  };
}

const pickMax = (p, size) => p.sizes[size][2] || p.pick?.max || 1;

// Respeta el máximo de sabores y actualiza el precio
function syncProduct(changed) {
  const p = current;
  const s = readProduct();
  if (p.pick) {
    const max = pickMax(p, s.size);
    const boxes = [...document.querySelectorAll('input[name="pick"]')];
    if (max === 1 && changed?.name === 'pick' && changed.checked) boxes.forEach((b) => { if (b !== changed) b.checked = false; });
    // Si bajó el tamaño, desmarca los sabores que sobran
    boxes.filter((b) => b.checked).slice(max).forEach((b) => { b.checked = false; });
    const count = boxes.filter((b) => b.checked).length;
    boxes.forEach((b) => { b.disabled = max > 1 && !b.checked && count >= max; });
    $('#pickHint').textContent = max === 1 ? 'Elige 1' : `Elige hasta ${max}`;
  }
  const final = readProduct();
  $('#pQty').textContent = qty;
  $('#pTotal').textContent = fmt(unitPrice(p, final.size, final.extras) * qty);
}

function addCurrent() {
  const p = current;
  const s = readProduct();
  if (p.pick && !s.picks.length) {
    toast(`Elige ${p.pick.label.toLowerCase()}`);
    document.querySelector('input[name="pick"]').focus();
    return false;
  }
  const details = [];
  if (s.picks.length) details.push(`${p.pick.label}: ${s.picks.join(', ')}`);
  if (s.salsas.length) details.push(`Salsas: ${s.salsas.join(', ')}`);
  if (s.extras.length) details.push(`Adicionales: ${s.extras.map((i) => `${EXTRAS[i][0]} (+${fmt(EXTRAS[i][1])})`).join(', ')}`);
  if (s.note) details.push(`Nota: ${s.note}`);
  addLine({
    key: JSON.stringify([p.id, s.size, s.picks, s.salsas, s.extras, s.note]),
    name: p.name,
    size: p.sizes[s.size][0],
    details,
    unit: unitPrice(p, s.size, s.extras),
  }, qty);
  return true;
}

/* ---------- Carrito ---------- */
function addLine(line, n) {
  const found = cart.find((l) => l.key === line.key);
  if (found) found.qty += n;
  else cart.push({ ...line, qty: n });
  renderCart();
  toast(`✓ ${line.name} agregado`);
  const fab = $('#cartFab');
  fab.classList.remove('bump');
  void fab.offsetWidth; // reinicia la animación
  fab.classList.add('bump');
}

const cartTotal = () => cart.reduce((sum, l) => sum + l.unit * l.qty, 0);

function renderCart() {
  const count = cart.reduce((n, l) => n + l.qty, 0);
  $('#cartFab').hidden = count === 0;
  $('#fabCount').textContent = count;
  $('#fabTotal').textContent = fmt(cartTotal());
  $('#cartTotal').textContent = fmt(cartTotal());
  $('#sendBtn').disabled = count === 0;
  $('#lines').innerHTML = count === 0
    ? '<li class="empty">Tu pedido está vacío. ¡Agrega algo rico! 🍟</li>'
    : cart.map((l, i) => `
      <li class="line">
        <div class="line-info">
          <strong>${esc(l.name)}${l.size ? ` · ${l.size}` : ''}</strong>
          ${l.details.length ? `<ul>${l.details.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : ''}
        </div>
        <div class="line-side">
          <span class="price">${fmt(l.unit * l.qty)}</span>
          <div class="stepper">
            <button type="button" data-line="${i}" data-step="-1" aria-label="Quitar uno">${l.qty === 1 ? '🗑' : '−'}</button>
            <output>${l.qty}</output>
            <button type="button" data-line="${i}" data-step="1" aria-label="Agregar uno">+</button>
          </div>
        </div>
      </li>`).join('');
}

function setOrderType(type) {
  const mesa = type === 'mesa';
  $('#fMesa').disabled = $('#fMesa').hidden = !mesa;
  $('#fDomicilio').disabled = $('#fDomicilio').hidden = mesa;
}

/* ---------- Mensaje de WhatsApp ---------- */
function buildMessage(f) {
  const sep = '━━━━━━━━━━━━';
  const out = [`🍟 *NUEVO PEDIDO* · ${CONFIG.name}`, sep];
  if (f.type === 'mesa') {
    out.push('*Tipo:* 🍽️ Para la mesa', `*Mesa:* ${f.mesa}`, `*Cliente:* ${f.name}`);
  } else {
    out.push('*Tipo:* 🛵 Domicilio', `*Cliente:* ${f.name}`, `*Teléfono:* ${f.phone}`, `*Dirección:* ${f.address}`);
    if (f.ref) out.push(`*Indicaciones:* ${f.ref}`);
    out.push(`*Pago:* ${f.pay}`);
  }
  out.push(sep, '*PEDIDO:*');
  cart.forEach((l) => {
    out.push(`▪️ *${l.qty}x ${l.name}*${l.size ? ` (${l.size})` : ''} — ${fmt(l.unit * l.qty)}`);
    l.details.forEach((d) => out.push(`    • ${d}`));
  });
  out.push(sep, `💰 *TOTAL: ${fmt(cartTotal())}*`);
  if (f.type === 'domicilio') out.push('_(+ valor del domicilio por confirmar)_');
  return out.join('\n');
}

function sendOrder() {
  const form = $('#checkoutForm');
  if (!form.reportValidity()) return;
  const f = Object.fromEntries(new FormData(form));
  for (const k in f) f[k] = String(f[k]).trim();
  // encodeURIComponent convierte los saltos de línea en %0A
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage(f))}`;
  window.open(url, '_blank', 'noopener');
}

/* ---------- Utilidades ---------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// Resalta la categoría visible en la barra
function watchCategories() {
  const chips = [...document.querySelectorAll('.chip')];
  const track = $('#catnav');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      chips.forEach((c) => c.classList.toggle('active', c.hash === '#' + e.target.id));
      const active = chips.find((c) => c.hash === '#' + e.target.id);
      track.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('.cat').forEach((s) => io.observe(s));
}

/* ---------- Eventos ---------- */
function init() {
  document.title = `${CONFIG.name} · Menú`;
  $('#coverage').textContent = CONFIG.coverage;
  $('#paySelect').insertAdjacentHTML('beforeend', CONFIG.payments.map((p) => `<option>${p}</option>`).join(''));
  renderMenu();
  renderCart();
  watchCategories();

  // QR por mesa: menu/index.html?mesa=5
  const mesa = new URLSearchParams(location.search).get('mesa');
  if (mesa) {
    $('#mesaBanner').hidden = false;
    $('#mesaBanner').textContent = `🍽️ Estás en la mesa ${mesa}`;
    $('#checkoutForm').elements.mesa.value = mesa;
  }

  $('#menu').addEventListener('click', (e) => {
    const btn = e.target.closest('.add');
    if (!btn) return;
    const p = PRODUCTS[btn.dataset.id];
    if (needsOptions(p)) openProduct(p);
    else addLine({ key: p.id, name: p.name, size: '', details: [], unit: p.sizes[0][1] }, 1);
  });

  const pForm = $('#productForm');
  pForm.addEventListener('input', (e) => syncProduct(e.target));
  pForm.addEventListener('click', (e) => {
    const step = e.target.closest('[data-step]');
    if (!step) return;
    qty = Math.max(1, qty + +step.dataset.step);
    syncProduct();
  });
  pForm.addEventListener('submit', (e) => {
    if (e.submitter?.value === 'cancel') return;
    e.preventDefault();
    if (addCurrent()) $('#productDlg').close();
  });

  $('#cartFab').addEventListener('click', () => $('#cartDlg').showModal());
  $('#lines').addEventListener('click', (e) => {
    const b = e.target.closest('[data-line]');
    if (!b) return;
    const l = cart[b.dataset.line];
    l.qty += +b.dataset.step;
    if (l.qty <= 0) cart.splice(b.dataset.line, 1);
    renderCart();
  });
  const cForm = $('#checkoutForm');
  cForm.addEventListener('change', (e) => { if (e.target.name === 'type') setOrderType(e.target.value); });
  cForm.addEventListener('submit', (e) => {
    if (e.submitter?.value === 'cancel') return;
    e.preventDefault();
    sendOrder();
  });

  // Cierra los sheets al tocar el fondo oscuro
  document.querySelectorAll('dialog').forEach((d) =>
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); }));
}

init();

// Auto-chequeo rápido (ver consola)
console.assert(unitPrice(PRODUCTS['especiales-0'], 1, [0, 6]) === 32000 + 4000 + 3000, 'unitPrice');
console.assert(encodeURIComponent('a\nb') === 'a%0Ab', 'saltos de línea → %0A');
