(function () {
  'use strict';
  const {esc, icon, article, safeURL} = Atlas;
  const data = window.ATLAS_DATA;
  const main = document.getElementById('main'), search = document.getElementById('global-search');
  try { Atlas.validate(data); } catch (e) { main.innerHTML = `<h1>Library unavailable</h1><p>${esc(e.message)}</p>`; return; }
  const categories = [...new Set(data.topics.map(t => t.category))];
  const sourceCount = new Set(data.topics.flatMap(t => t.references.map(r => r.url))).size;
  const sectionCount = data.topics.reduce((total,t) => total+t.sections.length,0);
  let query = '', category = '', currentRoute = '', debounce;
  // Original vector illustration of an imaging gantry. It is not a patient image.
  function scannerVisual() { return `<svg class="scanner-visual" viewBox="0 0 340 225" fill="none" aria-hidden="true"><defs><linearGradient id="gantry-face" x1="80" y1="30" x2="240" y2="190" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#d5dee9"/></linearGradient><linearGradient id="gantry-bore" x1="125" y1="54" x2="205" y2="158" gradientUnits="userSpaceOnUse"><stop stop-color="#a7b7ca"/><stop offset="1" stop-color="#f4f7fb"/></linearGradient></defs><path d="M20 191H320M170 17V207" stroke="#dce4ed" stroke-dasharray="3 5"/><ellipse cx="175" cy="187" rx="116" ry="12" fill="#d4dde8" opacity=".42"/><path d="M203 35C156 25 107 49 107 104V178H245V98C245 66 233 44 203 35Z" fill="#bac8d8" stroke="#aebfd1"/><path d="M164 28C117 28 83 60 83 107V177H218V107C218 62 197 28 164 28Z" fill="url(#gantry-face)" stroke="#b7c7d8"/><ellipse cx="155" cy="101" rx="48" ry="54" fill="url(#gantry-bore)" stroke="#9bafc7"/><ellipse cx="163" cy="102" rx="36" ry="46" fill="#e7edf4" stroke="#b9c8d9"/><path d="M155 49C131 49 109 73 109 101" stroke="#5683b7" stroke-width="3" stroke-linecap="round"/><path d="M112 119C118 143 134 155 155 155" stroke="#8aa8cc" stroke-width="2" stroke-linecap="round"/><rect x="95" y="160" width="29" height="4" rx="2" fill="#a0b3cc"/><rect x="180" y="160" width="25" height="4" rx="2" fill="#a0b3cc"/><path d="M133 134H186L270 176H204L133 143V134Z" fill="#eef3f9" stroke="#acbdd1"/><path d="M133 134H185L265 170H204L133 139V134Z" fill="#8399b4"/><path d="M209 179V193H252V179" fill="#bac9da" stroke="#a5b8cf"/><path d="M116 105H194" stroke="#6f9acd" stroke-dasharray="3 3" opacity=".7"/><path d="M155 64V143" stroke="#6f9acd" stroke-dasharray="3 3" opacity=".7"/><circle cx="155" cy="105" r="3" fill="#4c7db7"/><path d="M224 65H266M270 65H278" stroke="#9eafc4"/><path d="M222 150H287" stroke="#c1ccd9"/><circle cx="267" cy="65" r="3" fill="#7397c4"/><path d="M47 75H70M58 64V86" stroke="#b6c8df"/><path d="M290 115H309M299 106V125" stroke="#c4d2e4"/></svg>`; }
  function quickReferences() {
    const items = [
      {ids:['hida','hepatobiliary'], title:'HIDA interpretation', subtitle:'Patterns, timing & pitfalls', icon:'flow'},
      {ids:['fdg-pet'], title:'FDG PET pearls', subtitle:'Preparation to response', icon:'scan'},
      {ids:['psma-pet'], title:'PSMA PET pearls', subtitle:'Uptake, staging & mimics', icon:'target'},
      {ids:['radionuclide-reference'], title:'Half-life reference', subtitle:'Physics at a glance', icon:'atom'}
    ].map(item => ({...item, topic:item.ids.map(id => data.topics.find(t => t.id===id)).find(Boolean)})).filter(item => item.topic);
    return items.length ? `<section class="quick-references" id="quick-references"><div class="quick-heading"><h2>At the reading station</h2><span>Frequently used references</span></div><div class="quick-grid">${items.map(item=>`<a class="quick-card" href="#/topic/${esc(item.topic.id)}">${icon(item.icon)}<span><strong>${esc(item.title)}</strong><small>${esc(item.subtitle)}</small></span>${icon('arrow','quick-arrow')}</a>`).join('')}</div></section>` : '';
  }
  function studyPath() {
    const steps = [
      {id:'fundamentals', title:'Build the foundation', text:'Connect decay, tracer kinetics, instrumentation, and image quality.', label:'Begin with the fundamentals'},
      {id:'hida', fallback:'hepatobiliary', title:'Read a study systematically', text:'Work from the clinical question through preparation, acquisition, patterns, and pitfalls.', label:'Practice with hepatobiliary imaging'},
      {id:'theranostics', title:'Connect imaging to therapy', text:'Study target expression, patient selection, treatment principles, and safety.', label:'Explore theranostics'}
    ].map(step=>({...step,topic:data.topics.find(t=>t.id===step.id)||data.topics.find(t=>t.id===step.fallback)})).filter(step=>step.topic);
    return steps.length ? `<section class="study-path" id="study-path"><div class="section-heading"><div><h2>A structured way to study</h2><p>Move from the underlying science to clinical reasoning.</p></div></div><div class="study-steps">${steps.map((step,i)=>`<div class="study-step"><span class="study-number">${i+1}</span><div><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p><a href="#/topic/${esc(step.topic.id)}">${esc(step.label)} ${icon('arrow')}</a></div></div>`).join('')}</div></section>` : '';
  }
  function footer() { return `<footer class="page-footer"><span>${esc(data.site.title)} · ${esc(data.site.tagline)}</span><a href="#/about">Educational use & site information</a></footer>`; }
  function sidebar(active = 'library') {
    document.getElementById('sidebar').innerHTML = `<a class="brand" href="#/" aria-label="${esc(data.site.title)} home"><span class="brand-mark">${icon('atom')}</span><span class="brand-name">${esc(data.site.title.replace(/\s+Atlas$/i,''))}<small>${/atlas$/i.test(data.site.title) ? 'ATLAS' : 'LIBRARY'}</small></span></a>
      <div class="side-heading">YOUR REFERENCE LIBRARY</div><nav class="side-nav"><a href="#/" class="nav-item ${active === 'library' && !category ? 'active' : ''}">${icon('grid')}All topics</a><a href="#/sources" class="nav-item ${active === 'sources' ? 'active' : ''}">${icon('book')}Source library</a></nav>
      <div class="side-heading">COLLECTIONS</div><nav class="side-nav collection-nav">${categories.map(c => `<a href="#/collection/${encodeURIComponent(c)}" class="nav-item ${category === c ? 'active' : ''}"><span class="collection-dot"></span>${esc(c)}<span class="nav-count">${data.topics.filter(t=>t.category===c).length}</span></a>`).join('')}</nav>
      <div class="side-bottom"><nav class="side-nav"><a href="#/about" class="nav-item ${active === 'about' ? 'active' : ''}">${icon('info')}About this library</a></nav><div class="side-note"><span class="open-dot"></span><strong>Knowledge for daily practice.</strong><br>Traceable sources. Clear context.<br>Educational content, not clinical advice.</div></div>`;
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
    ['hero','stats','quick-references','study-path'].forEach(id => {const element=document.getElementById(id);if(element) element.hidden=!!query||!!category;});
  }
  function renderLibrary() {
    const first = data.topics.find(t=>t.id==='fundamentals') || data.topics[0];
    main.innerHTML = `<section class="hero" id="hero"><div><div class="eyebrow"><span class="eyebrow-rule"></span>NUCLEAR MEDICINE / STUDY & REFERENCE</div><h1>Understand the tracer.<br><span>Interpret the study.</span></h1><p>${esc(data.site.intro)}</p><div class="hero-actions"><a href="#topics" class="button button-primary" data-scroll="topics">Explore the library ${icon('arrow')}</a><a href="#/sources" class="button button-quiet">Browse the sources ${icon('external')}</a></div></div>${first ? `<a href="#/topic/${esc(first.id)}" class="feature-card"><div class="feature-kicker">THE MOLECULAR PERSPECTIVE <span>ILLUSTRATION</span></div>${scannerVisual()}<div class="feature-caption"><div><h2>From physics to clinical insight.</h2><span class="feature-link">Explore the foundations of nuclear medicine</span></div>${icon('arrow')}</div></a>` : ''}</section>
      <div class="stats" id="stats"><div class="stat"><strong>${data.topics.length}</strong> reference topics</div><span class="stat-separator"></span><div class="stat"><strong>${sectionCount}</strong> study sections</div><span class="stat-separator"></span><div class="stat"><strong>${sourceCount}</strong> linked sources</div><span class="stats-note">${icon('book')}For residents & attending physicians</span></div>
      ${quickReferences()}<section id="topics"><div class="section-heading"><div><h2 id="library-heading">Explore the library</h2><p>Physics, clinical interpretation, molecular imaging, and therapy.</p></div><span class="count-label" id="result-count" aria-live="polite"></span></div><div class="filter-bar" role="group" aria-label="Filter topics by collection">${['',...categories].map(c => `<button class="filter-chip ${c === category ? 'active' : ''}" data-category="${esc(c)}" aria-pressed="${c===category}">${esc(c || 'All topics')}</button>`).join('')}</div><div class="topic-grid" id="topic-grid"></div></section>
      ${studyPath()}<aside class="library-note">${icon('book')}<div><h3>Study with the evidence in view.</h3><p>AI-assisted educational reference; not independently clinically reviewed. Follow the numbered citations to original guidance and verify current recommendations before clinical use. <a href="#/about">About this library</a></p></div></aside>${footer()}`;
    refreshCards(); sidebar();
  }
  function renderTopic(id) {
    // Preserve bookmarks from the original hepatobiliary chapter.
    if (id === 'hepatobiliary' && data.topics.some(t => t.id === 'hida')) {
      id = 'hida'; currentRoute = '#/topic/hida'; history.replaceState(null,'',currentRoute);
    }
    const t = data.topics.find(v=>v.id===id);
    if (!t) { main.innerHTML = `<div class="empty-state"><h1>Topic not found</h1><p>This topic may have been renamed or removed.</p><a class="button button-primary" href="#/">Return to the library</a></div>`; sidebar(); return; }
    category = t.category; sidebar('topic');
    document.title = `${t.title} · ${data.site.title}`;
    document.getElementById('topbar-path').innerHTML = `Library <span>/</span> ${esc(t.category)}`;
    const readingMinutes = Math.max(1,Math.ceil(t.sections.reduce((total,s)=>total+s.body.split(/\s+/).length,0)/220));
    main.innerHTML = `<div class="article-top"><a href="#/" class="back-link">${icon('back')}Back to the library</a><button class="button" id="print-topic">${icon('print')}Print topic</button></div><div class="article-layout"><article>${article(t)}</article><details class="article-toc" ${window.matchMedia('(min-width:1001px)').matches?'open':''}><summary>ON THIS PAGE<span class="toc-reading">${t.sections.length} sections · ${readingMinutes} min read</span></summary><nav aria-label="On this page">${t.sections.map(s=>`<a href="#section-${esc(s.id)}" data-scroll="section-${esc(s.id)}">${esc(s.title)}</a>`).join('')}${t.references.length?'<a href="#references" data-scroll="references">Sources & references</a>':''}</nav></details></div>${footer()}`;
  }
  function renderSources() {
    const sources = [...new Map(data.topics.flatMap(t=>t.references).map(r=>[r.url,r])).values()];
    document.title = `Source library · ${data.site.title}`;
    document.getElementById('topbar-path').innerHTML = 'Library <span>/</span> Source library';
    main.innerHTML = `<section class="simple-page"><div class="eyebrow">FURTHER READING</div><h1>Go to the source.</h1><p>The original resources linked throughout this library, collected in one place. These links do not imply endorsement of this website.</p><div class="source-list">${sources.filter(r=>safeURL(r.url)).map(r=>`<a class="source-link" href="${esc(safeURL(r.url))}" target="_blank" rel="noopener noreferrer"><span>${esc(r.title)}<small>${esc(new URL(r.url).hostname)}</small></span>${icon('external')}</a>`).join('')}</div></section>${footer()}`;
    sidebar('sources');
  }
  function renderAbout() {
    document.title = `About the library · ${data.site.title}`;
    document.getElementById('topbar-path').innerHTML = 'Library <span>/</span> About';
    main.innerHTML = `<section class="simple-page"><div class="eyebrow">ABOUT THE LIBRARY</div><h1>${esc(data.site.title)}</h1><p>${esc(data.site.about)}</p><h2>Built for deliberate study.</h2><p>Read freely, browse by collection, or search across all topic notes. The library connects tracer physiology and imaging methods with systematic interpretation, clinical pearls, and common pitfalls. Content is maintained by the site owner. Online access depends on the hosting settings.</p><h2>Read the evidence behind the explanation.</h2><p>The notes are AI-assisted educational material and have not undergone independent clinical review unless a topic explicitly identifies a reviewer and review date. Numbered citations link to original sources. Publication and content-update dates do not themselves indicate clinical validation. Verify recommendations against current guidance, tracer labeling, and your institution’s approved protocols.</p><h2>Images and attribution.</h2><p>Image captions and credits belong with each teaching image. Do not assume that an image is licensed for reuse merely because it is publicly visible. The homepage scanner is an original schematic illustration, not a patient scan.</p><h2>Privacy.</h2><p>This application does not add advertising, analytics, tracking cookies, or reader accounts. The hosting provider can process ordinary access logs. Following an external source link takes you to that provider’s website.</p><aside class="medical-note">${icon('info')}<p>This is an educational reference, not individual medical advice, a clinical protocol, or an emergency service.</p></aside></section>${footer()}`;
    sidebar('about');
  }
  function route() {
    const hash = location.hash || '#/';
    // In-page anchors are intercepted below so that article routes remain shareable.
    if (!hash.startsWith('#/')) {
      // Opening an in-page link in a new tab should still load the library.
      if (!currentRoute) { history.replaceState(null,'','#/'); route(); }
      return;
    }
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
    const link=e.target.closest('[data-scroll], [data-reference]');if(link){e.preventDefault();const id=link.dataset.scroll||'ref-'+link.dataset.reference;document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});return;}
    const image=e.target.closest('[data-image-src]');if(image){document.getElementById('lightbox-image').src=image.dataset.imageSrc;document.getElementById('lightbox-image').alt=image.dataset.imageAlt;document.getElementById('lightbox-caption').textContent=image.dataset.imageCaption;document.getElementById('lightbox').showModal();}
  });
  const lightbox=document.getElementById('lightbox');document.getElementById('lightbox-close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
  window.addEventListener('hashchange',route); route();
}());
