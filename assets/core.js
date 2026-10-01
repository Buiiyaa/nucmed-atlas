/* Shared, dependency-free rendering. User text is escaped; raw HTML is never rendered. */
(function () {
  'use strict';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const symbols = {
    atom:'<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    book:'<path d="M12 6c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z"/><path d="M12 6v15"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
    external:'<path d="M14 3h7v7m0-7L10 14"/><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3 12h4l2-4 3 8 2-4h7"/>',
    scan:'<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"/><circle cx="12" cy="12" r="5"/><path d="M12 9v6m-3-3h6"/>',
    layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    brain:'<path d="M12 5a3 3 0 0 0-5-2 4 4 0 0 0-4 5 4 4 0 0 0 0 7 4 4 0 0 0 4 5 3 3 0 0 0 5-2V5Zm0 0a3 3 0 0 1 5-2 4 4 0 0 1 4 5 4 4 0 0 1 0 7 4 4 0 0 1-4 5 3 3 0 0 1-5-2"/><path d="M7 7c3 0 3 4 0 4m10-4c-3 0-3 4 0 4M6 16h2m8 0h2"/>',
    thyroid:'<path d="M10 10C3 2 2 6 3 12s5 9 7 4h4c2 5 6 2 7-4s0-10-7-2h-4Z"/><path d="M10 10v6m4-6v6"/>',
    kidney:'<path d="M7 3C2 3 1 11 3 17s8 5 7 0-5-3-3-7 3-7 0-7Zm10 0c5 0 6 8 4 14s-8 5-7 0 5-3 3-7-3-7 0-7Z"/>',
    bone:'<path d="M7 4a3 3 0 1 0-5 3 3 3 0 0 0 4 4l7 7a3 3 0 0 0 4 4 3 3 0 1 0 3-5 3 3 0 0 0-4-4L9 6a3 3 0 0 0-2-2Z"/>',
    flow:'<path d="M4 5h8a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h12M4 5l3-3M4 5l3 3m13 13-3-3m3 3-3 2"/>',
    shield:'<path d="m12 3 9 4v6c0 5-9 9-9 9s-9-4-9-9V7l9-4Z"/><path d="m8 12 3 3 5-6"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    close:'<path d="m6 6 12 12M6 18 18 6"/>',
    plus:'<path d="M12 4v16M4 12h16"/>',
    check:'<path d="m4 12 5 5L20 6"/>',
    lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 4v3"/>',
    image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1"/><path d="m3 16 5-5 4 4 3-3 6 6"/>',
    upload:'<path d="M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5"/>',
    download:'<path d="M12 3v13m-5-5 5 5 5-5M3 17v4h18v-4"/>',
    print:'<path d="M6 9V3h12v6M6 18H3v-9h18v9h-3M6 14h12v7H6z"/>',
    folder:'<path d="M3 5h6l2 2h10v13H3V5Z"/>',
    settings:'<path d="M3 7h18M3 17h18"/><circle cx="8" cy="7" r="3" fill="var(--surface,white)"/><circle cx="16" cy="17" r="3" fill="var(--surface,white)"/>',
    trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  const icon = (name, cls = '') => `<svg class="icon ${esc(cls)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${symbols[name] || symbols.book}</svg>`;
  function safeURL(value, image = false) {
    const s = String(value || '').trim();
    if (/^https?:\/\//i.test(s)) {
      try { const u = new URL(s); return u.username || u.password ? '' : u.href; } catch { return ''; }
    }
    if (image && /^images\/[a-zA-Z0-9][a-zA-Z0-9._/-]*$/.test(s) && !s.includes('..')) return s;
    if (image && /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s)) return s;
    return '';
  }
  function inline(text) {
    // Tokenize links before escaping: no raw HTML, event attributes, or executable URLs.
    const re = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*\n]+)\*\*|\*([^*\n]+)\*|`([^`\n]+)`|\[(\d+)\]/g;
    let out = '', pos = 0, m;
    while ((m = re.exec(text)) !== null) {
      out += esc(text.slice(pos, m.index));
      if (m[1]) {
        const u = safeURL(m[2]);
        out += u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(m[1])}</a>` : esc(m[1]);
      } else if (m[3]) out += `<strong>${esc(m[3])}</strong>`;
      else if (m[4]) out += `<em>${esc(m[4])}</em>`;
      else if (m[5]) out += `<code>${esc(m[5])}</code>`;
      else out += `<a class="citation" href="#ref-${esc(m[6])}" data-reference="${esc(m[6])}" aria-label="Source ${esc(m[6])}">[${esc(m[6])}]</a>`;
      pos = re.lastIndex;
    }
    return out + esc(text.slice(pos));
  }
  function markdown(value) {
    const lines = String(value || '').replace(/\r\n/g, '\n').split('\n');
    let html = '', para = [], list = '', fence = false, code = [];
    const flushP = () => { if (para.length) html += `<p>${inline(para.join(' '))}</p>`; para = []; };
    const closeList = () => { if (list) html += `</${list}>`; list = ''; };
    const cells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(v => v.trim());
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      if (/^```/.test(line)) { flushP(); closeList(); if (fence) { html += `<pre><code>${esc(code.join('\n'))}</code></pre>`; code = []; } fence = !fence; continue; }
      if (fence) { code.push(line); continue; }
      if (line.includes('|') && lines[lineIndex + 1] && /^\s*\|?\s*:?-{3,}:?\s*\|/.test(lines[lineIndex + 1])) {
        flushP(); closeList();
        const headings = cells(line);
        html += `<div class="table-wrap" role="region" aria-label="Reference table" tabindex="0"><table><thead><tr>${headings.map(h=>`<th scope="col">${inline(h)}</th>`).join('')}</tr></thead><tbody>`;
        lineIndex++;
        while (lines[lineIndex + 1] && lines[lineIndex + 1].includes('|') && lines[lineIndex + 1].trim()) {
          const row = cells(lines[++lineIndex]);
          html += `<tr>${headings.map((_, n)=>`<td>${inline(row[n] || '')}</td>`).join('')}</tr>`;
        }
        html += '</tbody></table></div>';
        continue;
      }
      if (!line.trim()) { flushP(); closeList(); continue; }
      const h = line.match(/^#{1,4}\s+(.+)$/), ul = line.match(/^\s*[-*]\s+(.+)$/), ol = line.match(/^\s*\d+\.\s+(.+)$/), quote = line.match(/^>\s?(.*)$/);
      if (h) { flushP(); closeList(); html += `<h3>${inline(h[1])}</h3>`; }
      else if (ul || ol) { flushP(); const tag = ul ? 'ul' : 'ol'; if (list !== tag) { closeList(); html += `<${tag}>`; list = tag; } html += `<li>${inline((ul || ol)[1])}</li>`; }
      else if (quote) { flushP(); closeList(); html += `<blockquote>${inline(quote[1])}</blockquote>`; }
      else { closeList(); para.push(line); }
    }
    flushP(); closeList(); if (fence) html += `<pre><code>${esc(code.join('\n'))}</code></pre>`;
    return html;
  }
  const date = s => /^\d{4}-\d{2}-\d{2}$/.test(s || '') ? new Date(s + 'T12:00:00').toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric'}) : '';
  const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'topic';
  const uid = prefix => `${prefix}-${globalThis.crypto?.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2, 10)}`;
  const clone = o => JSON.parse(JSON.stringify(o));
  const serialize = data => 'window.ATLAS_DATA = ' + JSON.stringify(data, null, 2).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + ';\n';
  function parseContent(text) {
    const m = String(text).trim().match(/^window\.ATLAS_DATA\s*=\s*([\s\S]+);$/);
    if (!m) throw new Error('This is not a NucMed Atlas content.js file.');
    const result = JSON.parse(m[1]); validate(result); return result;
  }
  function validate(data, publish = false) {
    if (!data || data.version !== 1 || !data.site || typeof data.site.title !== 'string' || !Array.isArray(data.topics)) throw new Error('Invalid library format.');
    if (publish && !data.site.title.trim()) throw new Error('Give the library a name before publishing.');
    for (const field of ['tagline','intro','about','updated']) if (typeof data.site[field] !== 'string') throw new Error('Invalid library settings.');
    if (data.topics.length > 1000) throw new Error('A library can contain up to 1,000 topics.');
    const ids = new Set();
    for (const t of data.topics) {
      if (!t || typeof t.id !== 'string' || !/^[a-z0-9-]+$/.test(t.id) || ids.has(t.id)) throw new Error('Every topic needs a unique, valid identifier.');
      ids.add(t.id);
      for (const field of ['title','summary','category','icon','updated']) if (typeof t[field] !== 'string') throw new Error(`Invalid ${field} in a topic.`);
      if (!Array.isArray(t.tags) || t.tags.some(v => typeof v !== 'string') || !Array.isArray(t.sections) || !Array.isArray(t.references)) throw new Error('Invalid topic structure.');
      if (publish && (!t.title.trim() || !t.category.trim())) throw new Error('Every topic needs a title and collection.');
      const sids = new Set();
      for (const s of t.sections) {
        if (!s || typeof s.id !== 'string' || !/^[a-z0-9-]+$/.test(s.id) || sids.has(s.id) || typeof s.title !== 'string' || typeof s.body !== 'string' || !Array.isArray(s.images)) throw new Error('Invalid section structure.');
        sids.add(s.id);
        if (publish && !s.title.trim()) throw new Error(`Add a heading to each section in “${t.title}”.`);
        for (const i of s.images) {
          if (!i || typeof i.src !== 'string' || !safeURL(i.src, true) || i.src.startsWith('data:')) throw new Error('Images must use a safe public URL or an images/ file path.');
          for (const f of ['alt','caption','credit','creditUrl']) if (typeof i[f] !== 'string') throw new Error('Invalid image details.');
          if (publish && !i.alt.trim()) throw new Error(`Add an image description (alt text) in “${t.title}”.`);
          if (publish && i.creditUrl && !safeURL(i.creditUrl)) throw new Error('Image source links must start with https:// or http://.');
        }
      }
      for (const r of t.references) {
        if (!r || typeof r.title !== 'string' || typeof r.url !== 'string') throw new Error('Invalid source structure.');
        if (publish && (!r.title.trim() || !safeURL(r.url))) throw new Error(`Give each source a title and a valid https:// link in “${t.title}”.`);
      }
    }
    return data;
  }
  function article(t, resolveImage = s => safeURL(s, true)) {
    const reviewed = t.reviewedBy && t.reviewedOn;
    return `<div class="article-label">${esc(t.category)} <span> / </span> TOPIC NOTE</div>
      <h1 class="article-title">${esc(t.title)}</h1><p class="article-deck">${esc(t.summary)}</p>
      <div class="article-meta"><span>${icon('clock')} Updated ${esc(date(t.updated))}</span><span class="review-label">${reviewed ? `Reviewed by ${esc(t.reviewedBy)} · ${esc(date(t.reviewedOn))}` : 'AI-assisted study notes · Not independently clinically reviewed'}</span></div>
      <div class="article-rule"></div>
      ${t.sections.map((s, index) => `<section class="article-section" id="section-${esc(s.id)}"><div class="section-number">${String(index + 1).padStart(2,'0')}</div><div class="section-content"><h2>${esc(s.title)}</h2><div class="prose">${markdown(s.body)}</div>${s.images.map(i => `<figure><button class="image-open" type="button" data-image-src="${esc(resolveImage(i.src))}" data-image-alt="${esc(i.alt)}" data-image-caption="${esc(i.caption)}" aria-label="Enlarge image: ${esc(i.alt)}"><img src="${esc(resolveImage(i.src))}" alt="${esc(i.alt)}" loading="lazy"></button>${i.caption ? `<figcaption>${esc(i.caption)}</figcaption>` : ''}${i.credit ? `<div class="image-credit">${i.creditUrl && safeURL(i.creditUrl) ? `<a href="${esc(safeURL(i.creditUrl))}" target="_blank" rel="noopener noreferrer">${esc(i.credit)}</a>` : esc(i.credit)}</div>` : ''}</figure>`).join('')}</div></section>`).join('')}
      ${t.references.length ? `<section class="references" id="references"><div class="eyebrow">READ FURTHER</div><h2>Sources & references</h2><ol>${t.references.map((r,n) => `<li id="ref-${n+1}"><a href="${esc(safeURL(r.url) || '#')}" target="_blank" rel="noopener noreferrer">${esc(r.title)} ${icon('external')}</a></li>`).join('')}</ol></section>` : ''}
      <aside class="medical-note">${icon('info')}<p>For education, not individual medical advice or a clinical protocol. Check original sources and current professional guidance before clinical use.</p></aside>`;
  }
  window.Atlas = {esc, icon, symbols, safeURL, inline, markdown, date, slug, uid, clone, serialize, parseContent, validate, article};
}());
