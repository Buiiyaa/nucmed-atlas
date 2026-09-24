(function () {
  'use strict';
  const {esc, icon, article, safeURL} = Atlas;
  const data = window.ATLAS_DATA;
  const main = document.getElementById('main'), search = document.getElementById('global-search');
  try { Atlas.validate(data); } catch (e) { main.innerHTML = `<h1>Library unavailable</h1><p>${esc(e.message)}</p>`; return; }
  const categories = [...new Set(data.topics.map(t => t.category))];
  let query = '', category = '', currentRoute = '', debounce;
  function footer() { return `<footer class="page-footer"><span>${esc(data.site.title)} · ${esc(data.site.tagline)}</span><a href="#/about">Educational use & site information</a></footer>`; }
  function sidebar(active = 'library') {
    document.getElementById('sidebar').innerHTML = `<a class="brand" href="#/" aria-label="${esc(data.site.title)} home"><span class="brand-mark">${icon('atom')}</span><span class="brand-name">${esc(data.site.title.replace(/\s+Atlas$/i,''))}<small>${/atlas$/i.test(data.site.title) ? 'ATLAS' : 'LIBRARY'}</small></span></a>
      <div class="side-heading">YOUR REFERENCE LIBRARY</div><nav class="side-nav"><a href="#/" class="nav-item ${active === 'library' && !category ? 'active' : ''}">${icon('grid')}All topics</a><a href="#/sources" class="nav-item ${active === 'sources' ? 'active' : ''}">${icon('book')}Source library</a></nav>
      <div class="side-heading">COLLECTIONS</div><nav class="side-nav collection-nav">${categories.map(c => `<a href="#/collection/${encodeURIComponent(c)}" class="nav-item ${category === c ? 'active' : ''}"><span class="collection-dot"></span>${esc(c)}<span class="nav-count">${data.topics.filter(t=>t.category===c).length}</span></a>`).join('')}</nav>
      <div class="side-bottom"><nav class="side-nav"><a href="#/about" class="nav-item ${active === 'about' ? 'active' : ''}">${icon('info')}About this library</a></nav><div class="side-note"><span class="open-dot"></span><strong>Knowledge, openly shared.</strong><br>No account needed to read.<br>Educational content, not clinical advice.</div></div>`;
  }
  function filtered() {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return data.topics.filter(t => (!category || t.category === category) && terms.every(term => [t.title,t.summary,t.category,...t.tags,...t.sections.map(s=>s.title+' '+s.body+' '+s.images.map(i=>i.alt+' '+i.caption).join(' ')),...t.references.map(r=>r.title)].join(' ').toLowerCase().includes(term)));
  }
  function cards() {
    const topics = filtered();
    return topics.length ? topics.map(t => `<a class="topic-card" data-category="${esc(t.category)}" href="#/topic/${esc(t.id)}"><div class="card-top"><span class="topic-icon">${icon(t.icon)}</span><span class="card-number">${String(data.topics.indexOf(t)+1).padStart(2,'0')}</span></div><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p><div class="card-bottom"><span>${esc(t.category)} · ${t.sections.length} sections</span>${icon('arrow')}</div></a>`).join('') : `<div class="empty-state">${icon('search')}<h3>No matching topics</h3><p>Try another term or search all collections.</p><button class="button" id="clear-filters">Clear search & filters</button></div>`;
  }
  function refreshCards() {
    const grid = document.getElementById('topic-grid');
    if (!grid) { renderLibrary(); return; }
    grid.innerHTML = cards();
    document.getElementById('result-count').textContent = `${filtered().length} topic${filtered().length === 1 ? '' : 's'}`;
    const heading = document.getElementById('library-heading');
    heading.textContent = query ? `Search results for “${query}”` : category || 'Explore the library';
    document.querySelectorAll('.filter-chip').forEach(b => { b.classList.toggle('active', b.dataset.category === category); b.setAttribute('aria-pressed', String(b.dataset.category === category)); });
    const hero = document.getElementById('hero'); if (hero) hero.hidden = !!query || !!category;
    const stats = document.getElementById('stats'); if (stats) stats.hidden = !!query || !!category;
  }
  function renderLibrary() {
    const first = data.topics.find(t=>t.id==='fundamentals') || data.topics[0];
    main.innerHTML = `<section class="hero" id="hero"><div><div class="eyebrow">THE NUCLEAR MEDICINE LIBRARY</div><h1>A clearer view of<br><span>nuclear medicine.</span></h1><p>${esc(data.site.intro)}</p><a href="#topics" class="button button-primary" data-scroll="topics">Browse all topics ${icon('arrow')}</a></div>${first ? `<a href="#/topic/${esc(first.id)}" class="feature-card"><span class="feature-orbit">${icon('atom')}</span><div class="feature-kicker">START WITH THE FUNDAMENTALS</div><h2>From tracer<br>to understanding.</h2><span class="feature-link">Explore the essentials ${icon('arrow')}</span></a>` : ''}</section>
      <div class="stats" id="stats"><div class="stat"><strong>${data.topics.length}</strong> topics to explore</div><span class="stat-separator"></span><div class="stat"><strong>${categories.length}</strong> collections</div><span class="stat-separator"></span><div class="stat"><strong>Open</strong> to everyone</div><span class="stats-note">A library that grows with knowledge.</span></div>
      <section id="topics"><div class="section-heading"><div><h2 id="library-heading">Explore the library</h2><p>Choose a topic. Follow your curiosity.</p></div><span class="count-label" id="result-count" aria-live="polite"></span></div><div class="filter-bar" role="group" aria-label="Filter topics by collection">${['',...categories].map(c => `<button class="filter-chip ${c === category ? 'active' : ''}" data-category="${esc(c)}" aria-pressed="${c===category}">${esc(c || 'All topics')}</button>`).join('')}</div><div class="topic-grid" id="topic-grid"></div></section>
      <aside class="library-note">${icon('book')}<div><h3>A starting point, with room to grow.</h3><p>Introductory notes link to their sources. Consult current professional guidance before clinical use.</p></div></aside>${footer()}`;
    refreshCards(); sidebar();
  }
  function renderTopic(id) {
    const t = data.topics.find(v=>v.id===id);
    if (!t) { main.innerHTML = `<div class="empty-state"><h1>Topic not found</h1><p>This topic may have been renamed or removed.</p><a class="button button-primary" href="#/">Return to the library</a></div>`; sidebar(); return; }
    category = t.category; sidebar('topic');
    document.title = `${t.title} · ${data.site.title}`;
    document.getElementById('topbar-path').innerHTML = `Library <span>/</span> ${esc(t.category)}`;
    main.innerHTML = `<div class="article-top"><a href="#/" class="back-link">${icon('back')}Back to the library</a><button class="button" id="print-topic">${icon('print')}Print topic</button></div><div class="article-layout"><article>${article(t)}</article><nav class="article-toc" aria-label="On this page"><div class="eyebrow">ON THIS PAGE</div>${t.sections.map(s=>`<a href="#section-${esc(s.id)}" data-scroll="section-${esc(s.id)}">${esc(s.title)}</a>`).join('')}${t.references.length?'<a href="#references" data-scroll="references">Sources & references</a>':''}</nav></div>${footer()}`;
  }
  function renderSources() {
    const sources = [...new Map(data.topics.flatMap(t=>t.references).map(r=>[r.url,r])).values()];
    main.innerHTML = `<section class="simple-page"><div class="eyebrow">FURTHER READING</div><h1>Go to the source.</h1><p>The original resources linked throughout this library, collected in one place. These links do not imply endorsement of this website.</p><div class="source-list">${sources.filter(r=>safeURL(r.url)).map(r=>`<a class="source-link" href="${esc(safeURL(r.url))}" target="_blank" rel="noopener noreferrer"><span>${esc(r.title)}<small>${esc(new URL(r.url).hostname)}</small></span>${icon('external')}</a>`).join('')}</div></section>${footer()}`;
    sidebar('sources');
  }
  function renderAbout() {
    main.innerHTML = `<section class="simple-page"><div class="eyebrow">ABOUT THE LIBRARY</div><h1>${esc(data.site.title)}</h1><p>${esc(data.site.about)}</p><h2>Built for learning.</h2><p>Read freely, browse by collection, or search across all topic notes. Content is maintained by the site owner. There are no public editing controls, comments, quizzes, or learner accounts.</p><h2>Use the sources.</h2><p>The initial notes are introductory, AI-assisted educational material and have not undergone independent clinical review. A topic shows a named review only when the owner supplies reviewer details. Publication and content-update dates do not by themselves indicate clinical validation.</p><h2>Images and attribution.</h2><p>Image captions and credits belong with each teaching image. Do not assume that an image is licensed for reuse merely because it is publicly visible. No patient images are included in the starter library.</p><h2>Privacy.</h2><p>This application does not add advertising, analytics, tracking cookies, or reader accounts. The hosting provider can process ordinary access logs. Following an external source link takes you to that provider’s website.</p><aside class="medical-note">${icon('info')}<p>This is an educational reference, not individual medical advice, a clinical protocol, or an emergency service.</p></aside></section>${footer()}`;
    sidebar('about');
  }
  function route() {
    const hash = location.hash || '#/';
    // In-page anchors are intercepted below so that article routes remain shareable.
    if (!hash.startsWith('#/')) return;
    currentRoute = hash; category = '';
    const parts = hash.slice(2).split('/');
    document.title = `${data.site.title} · Nuclear Medicine Library`;
    document.getElementById('topbar-path').innerHTML = 'Library <span>/</span> Overview';
    if (parts[0] === 'topic') { query=''; search.value=''; renderTopic(parts[1]); }
    else if (parts[0] === 'sources') { query=''; search.value=''; renderSources(); }
    else if (parts[0] === 'about') { query=''; search.value=''; renderAbout(); }
    else { if (parts[0] === 'collection') { try { category=decodeURIComponent(parts.slice(1).join('/')); } catch {category='';} } renderLibrary(); }
    closeNav(); window.scrollTo({top:0,behavior:'instant'});
  }
  function closeNav() { document.getElementById('sidebar').classList.remove('mobile-open'); document.getElementById('nav-backdrop').classList.remove('open'); document.getElementById('menu-toggle').setAttribute('aria-expanded','false'); }
  document.getElementById('menu-toggle').innerHTML=icon('menu');
  document.getElementById('search-icon').innerHTML=icon('search');
  document.getElementById('lightbox-close').innerHTML=icon('close');
  document.getElementById('menu-toggle').addEventListener('click',()=>{const open=document.getElementById('sidebar').classList.toggle('mobile-open');document.getElementById('nav-backdrop').classList.toggle('open',open);document.getElementById('menu-toggle').setAttribute('aria-expanded',String(open));});
  document.getElementById('nav-backdrop').addEventListener('click',closeNav);
  search.addEventListener('input',()=>{clearTimeout(debounce);debounce=setTimeout(()=>{query=search.value.trim();category='';if(!currentRoute.startsWith('#/topic')&&!['#/sources','#/about'].includes(currentRoute)){history.replaceState(null,'','#/');currentRoute='#/';refreshCards();sidebar();}else{location.hash='#/';}},100);});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();search.focus();}if(e.key==='Escape'){closeNav();}});
  document.addEventListener('click',e=>{
    const navLink=e.target.closest('a[href^="#/"]');if(navLink){query='';search.value='';if(navLink.getAttribute('href')===location.hash){e.preventDefault();route();return;}}
    const filter=e.target.closest('button[data-category]');if(filter){category=filter.dataset.category;query='';search.value='';const url=category?'#/collection/'+encodeURIComponent(category):'#/';if(location.hash===url){refreshCards();sidebar();}else location.hash=url;return;}
    if(e.target.closest('#clear-filters')){query='';category='';search.value='';history.replaceState(null,'','#/');currentRoute='#/';refreshCards();sidebar();return;}
    if(e.target.closest('#print-topic')){window.print();return;}
    const link=e.target.closest('[data-scroll], [data-reference]');if(link){e.preventDefault();const id=link.dataset.scroll||'ref-'+link.dataset.reference;document.getElementById(id)?.scrollIntoView({behavior:'smooth'});return;}
    const image=e.target.closest('[data-image-src]');if(image){document.getElementById('lightbox-image').src=image.dataset.imageSrc;document.getElementById('lightbox-image').alt=image.dataset.imageAlt;document.getElementById('lightbox-caption').textContent=image.dataset.imageCaption;document.getElementById('lightbox').showModal();}
  });
  const lightbox=document.getElementById('lightbox');document.getElementById('lightbox-close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
  window.addEventListener('hashchange',route); route();
}());
