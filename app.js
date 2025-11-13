/* App logic */
(function(){
  const grid = document.getElementById('grid');
  const searchEl = document.getElementById('search');
  const categoryEl = document.getElementById('category');
  const sortEl = document.getElementById('sort');

  // Populate category dropdown from data
  const categories = Array.from(new Set(MOLECULES.map(m => m.category))).sort();
  for (const c of categories) {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    categoryEl.appendChild(opt);
  }

  function normalize(s){ return (s || '').toLowerCase().trim(); }

  function sortData(items){
    const mode = sortEl.value;
    if (mode === 'molecule-az') return items.sort((a,b)=>a.molecule.localeCompare(b.molecule));
    if (mode === 'molecule-za') return items.sort((a,b)=>b.molecule.localeCompare(a.molecule));
    if (mode === 'brands-desc') return items.sort((a,b)=> (b.brands?.length||0) - (a.brands?.length||0));
    if (mode === 'brands-asc') return items.sort((a,b)=> (a.brands?.length||0) - (b.brands?.length||0));
    return items;
  }

  function filterData(){
    const q = normalize(searchEl.value);
    const cat = categoryEl.value;
    let items = MOLECULES.filter(m => {
      const inCat = (cat === 'all' ? true : m.category === cat);
      if (!q) return inCat;
      const inMol = normalize(m.molecule).includes(q);
      const inBrand = (m.brands || []).some(b => normalize(b.name).includes(q));
      return inCat && (inMol || inBrand);
    });
    return sortData(items);
  }

  function render(){
    const items = filterData();
    grid.innerHTML = '';
    if (!items.length){
      grid.innerHTML = `<p style="opacity:.8">No matches.</p>`;
      return;
    }
    for (const m of items){
      const card = document.createElement('article');
      card.className = 'card';
      const count = (m.brands?.length || 0);
      card.innerHTML = `
        <div class="molecule">${m.molecule}</div>
        <div class="meta">
          <span class="badge">${m.category}</span>
          <span class="badge">${count} brand${count===1?'':'s'}</span>
        </div>
        <button class="toggle" aria-expanded="false">Show brands</button>
        <ul class="brandlist" id="list"></ul>
      `;
      const btn = card.querySelector('.toggle');
      const list = card.querySelector('#list');
      btn.addEventListener('click', () => {
        const isOpen = list.classList.toggle('show');
        btn.textContent = isOpen ? 'Hide brands' : 'Show brands';
        btn.setAttribute('aria-expanded', String(isOpen));
      });
      for (const b of (m.brands || [])){
        const li = document.createElement('li');
        li.className = 'brand';
        const price = (b.price != null) ? `<span class="price">₹${b.price}</span>` : '';
        li.innerHTML = `<span class="name">${b.name}</span>${price}`;
        list.appendChild(li);
      }
      grid.appendChild(card);
    }
  }

  searchEl.addEventListener('input', render);
  categoryEl.addEventListener('change', render);
  sortEl.addEventListener('change', render);

  render();
})();