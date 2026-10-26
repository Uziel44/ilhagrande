/* ==========================================================================
   GUIA ILHA GRANDE AVENTURA
   Traducciones (EN / PT). Se carga antes de index.js.

   CÓMO FUNCIONA
   El inglés (idioma principal) vive en el propio HTML: sirve de respaldo sin JS
   y para los buscadores. Al cargar se guarda una copia de cada texto marcado y
   es lo que se restaura al volver a "en". Aquí abajo está el portugués.
     data-i18n="clave"                    → reemplaza el contenido del elemento
     data-i18n-attr="atributo:clave;..."  → reemplaza atributos (alt, aria-label, content)
     data-wa-key="clave"                  → reescribe el mensaje (?text=) de un enlace wa.me

   Para agregar otro idioma: súmalo a LANGS, crea su diccionario en DICT
   y agrega un botón [data-lang] en el header.
   ========================================================================== */

(function () {
  "use strict";

  const LANGS = ["en", "pt"];
  const DEFAULT = "en";
  const STORAGE_KEY = "lang";

  const DICT = {
    // Textos que genera el JS (en el HTML ya están en inglés)
    en: {
      "menu.open": "Open menu",
      "menu.close": "Close menu"
    },
    pt: {
      "menu.open": "Abrir menu",
      "menu.close": "Fechar menu",
      "meta.title": "Guia Ilha Grande Aventura | Passeios de canoa havaiana e trekking",
      "meta.description": "Passeios de canoa havaiana e trekking em pequenos grupos em Ilha Grande, Brasil. Remadas noturnas com bioluminescência, passeios ao amanhecer e subidas guiadas ao Pico do Papagaio.",
      "meta.ogtitle": "Guia Ilha Grande Aventura",
      "meta.ogdesc": "Remadas noturnas com bioluminescência, passeios de canoa ao amanhecer e trilhas guiadas em Ilha Grande, Brasil.",
      "skip": "Ir para o conteúdo",
      "nav.about": "Sobre nós",
      "nav.book": "Reservar passeio",
      "aria.menu": "Abrir menu",
      "aria.hero": "Água bioluminescente ao redor de uma canoa havaiana à noite em Ilha Grande",
      "hero.l1": "Noites que brilham.",
      "hero.l2": "Amanheceres que",
      "hero.l3": "valem acordar.",
      "hero.text": "Passeios de canoa havaiana e montanha em pequenos grupos em Ilha Grande, Brasil, com o guia Franco Raffaeli.",
      "hero.cta1": "Reserve pelo WhatsApp",
      "hero.cta2": "Ver os passeios",
      "aria.scroll": "Rolar para o conteúdo",
      "alt.franco": "Franco Raffaeli, guia local em Ilha Grande",
      "about.h": "Seu guia na ilha",
      "about.lead": "Franco rema e faz trilhas em Ilha Grande há anos. Cada passeio tem um guia e no máximo seis pessoas, para que ninguém fique para trás e a ilha continue tranquila.",
      "about.p": "Não é necessária nenhuma experiência em nenhum dos passeios. Você recebe uma aula de remo antes de sair, todo o equipamento de segurança e, depois, as fotos e os vídeos do passeio.",
      "about.t1": "Nenhuma experiência necessária",
      "about.t2": "Seis pessoas por grupo, um guia",
      "about.t3": "Equipamento de segurança incluído",
      "about.t4": "Fotos e vídeos do seu passeio",
      "split.h": "Nossos dois tipos de passeio",
      "alt.split1": "Canoa havaiana no mar ao amanhecer",
      "split.k1": "Na água",
      "split.t1": "Passeios de canoa havaiana: bioluminescência depois de escurecer, remadas ao amanhecer e ao entardecer.",
      "split.c1": "Três passeios",
      "alt.split2": "Trilheiros em uma trilha na floresta de Ilha Grande",
      "split.k2": "Na montanha",
      "split.t2": "Subidas guiadas pela Mata Atlântica até o topo do Pico do Papagaio.",
      "split.c2": "Uma trilha",
      "glow.k": "O passeio que faz as pessoas voltarem",
      "glow.h": "Nade entre as estrelas",
      "glow.lead": "Pequenos organismos marinhos se acendem quando a água se move. Remamos depois de escurecer, entramos no mar com máscara e a água brilha ao redor das suas mãos a cada braçada.",
      "glow.note": "A bioluminescência é um fenômeno natural, por isso depende do mar e do céu. Noites mais escuras mostram mais luz, e é por isso que os horários de saída mudam com a fase da lua.",
      "f.dur": "Duração",
      "f.dur.v": "2 horas",
      "f.dep": "Saídas",
      "f.dep.v": "18h, 20h e 22h",
      "f.grp": "Tamanho do grupo",
      "f.grp.v": "Máximo de 6 pessoas",
      "f.price": "Preço",
      "f.price.v": "R$150 por pessoa",
      "glow.cta": "Ver noites disponíveis",
      "tours.h": "O resto do Karamuru",
      "tours.t": "Mesma canoa, mesmo grupo pequeno, outra luz. Os dois passeios saem da Vila do Abraão.",
      "alt.sunrise": "Nascer do sol visto de uma canoa havaiana em Ilha Grande",
      "sr.h": "Remada ao amanhecer",
      "sr.t": "Saímos antes do amanhecer e remamos até um ponto para ver o sol nascer. No caminho fazemos snorkel sobre o coral e depois seguimos a costa de volta, passando por aves, praias e floresta.",
      "sr.m1": "<span>Saída</span> 5h, muda conforme a estação",
      "sr.m2": "<span>Grupo</span> máximo de 6 pessoas",
      "sr.m3": "<span>Preço</span> R$150 por pessoa",
      "sr.cta": "Pergunte sobre a remada ao amanhecer",
      "alt.sunset": "Remada de canoa ao pôr do sol em Ilha Grande",
      "ss.h": "Remada ao entardecer",
      "ss.t": "Uma tarde tranquila na água ao longo da costa de Ilha Grande, no horário em que a luz muda. Uma boa primeira remada se você nunca andou de canoa.",
      "ss.m1": "<span>Saída</span> fim da tarde, muda conforme a estação",
      "ss.m3": "<span>Preço</span> consulte-nos",
      "ss.cta": "Pergunte sobre a remada ao entardecer",
      "trek.lead": "Uma subida guiada pela Mata Atlântica até uma das melhores vistas do estado do Rio de Janeiro. Aquecemos no ponto de encontro e depois subimos pela floresta em um ritmo que funcione para o grupo.",
      "trek.p": "No caminho há animais para observar, plantas que você não verá em nenhum outro lugar e mirantes sobre toda a baía. No topo fazemos uma parada de verdade antes de descer.",
      "trek.t1": "Guia local o tempo todo",
      "trek.t2": "Fotos e vídeos incluídos",
      "trek.t3": "Sem necessidade de experiência em escalada",
      "trek.cta": "Pergunte sobre a trilha",
      "alt.trek": "Vista panorâmica do Pico do Papagaio sobre Ilha Grande",
      "info.h": "Antes de vir",
      "info.p": "Tudo o que as pessoas costumam perguntar antes de reservar.",
      "a1.h": "O que está incluído",
      "a1.1": "Máscara de snorkel",
      "a1.2": "Colete salva-vidas",
      "a1.3": "Aula de remo antes de sair",
      "a1.4": "Fotos e vídeos do passeio",
      "a1.5": "Bolsa estanque para seus pertences",
      "a2.h": "O que levar",
      "a2.1": "Uma garrafinha de água, um corta-vento, roupa de banho e toalha.",
      "a2.2": "Para a remada ao amanhecer, leve também protetor solar.",
      "a3.h": "Onde nos encontramos",
      "a3.1": "Mámbembe Hostel, Vila do Abraão, Ilha Grande.",
      "a3.2": "Abrir o ponto de encontro no Google Maps",
      "a4.h": "Como pagar",
      "a4.1": "Dinheiro, Pix ou cartão com uma pequena taxa.",
      "a4.2": "O pagamento é feito no dia, no ponto de encontro.",
      "a5.h": "Preciso de experiência?",
      "a5.1": "Não. Nenhum dos passeios exige experiência prévia.",
      "a5.2": "Todo passeio de canoa começa com uma aula de remo, e o guia fica com o grupo o tempo todo.",
      "gal.h": "Na ilha",
      "alt.g1": "Grupo de canoa na água",
      "alt.g2": "Trilha na floresta de Ilha Grande",
      "alt.g3": "Snorkel sobre o coral",
      "alt.g4": "Vista do topo",
      "alt.g5": "Pôr do sol visto da canoa",
      "alt.g6": "Praia em Ilha Grande",
      "trust.h": "Veja o que dizem",
      "trust.p": "Avaliações e fotos do dia a dia dos passeios.",
      "cta.h": "Pronto quando você estiver",
      "cta.t": "Envie uma mensagem e encontraremos o dia, a maré e a lua certos para o seu passeio.",
      "cta.b": "Fale conosco no WhatsApp",
      "foot.blurb": "Passeios de canoa e montanha em Ilha Grande, Angra dos Reis, Brasil.",
      "foot.tours": "Passeios",
      "foot.l1": "Bioluminescência",
      "foot.l2": "Amanhecer e entardecer",
      "foot.l4": "Informações práticas",
      "foot.touch": "Contato",
      "foot.addr": "Vila do Abraão, Ilha Grande<br>Rio de Janeiro, Brasil",
      "foot.site": "Site por Plexiweb Development",
      "aria.wa": "Fale conosco no WhatsApp",
      "wa.book": "Olá Franco, gostaria de reservar um passeio em Ilha Grande.",
      "wa.glow": "Olá Franco, gostaria de fazer o passeio de bioluminescência. Quais noites estão disponíveis?",
      "wa.sunrise": "Olá Franco, gostaria de fazer a remada ao amanhecer.",
      "wa.sunset": "Olá Franco, gostaria de fazer a remada ao entardecer.",
      "wa.trek": "Olá Franco, gostaria de fazer a trilha do Pico do Papagaio.",
      "aria.lang": "Idioma"
    }
  };

  const $$ = function (sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); };
  const metaDesc = document.querySelector('meta[name="description"]');

  let lang = DEFAULT;

  // ---- Copia del inglés original, antes de tocar el DOM ----
  const source = new Map();
  $$("[data-i18n], [data-i18n-attr], [data-wa-key]").forEach(function (el) {
    const entry = { html: null, attrs: [], wa: null };
    if (el.dataset.i18n) entry.html = el.innerHTML;
    (el.dataset.i18nAttr || "").split(";").filter(Boolean).forEach(function (pair) {
      const i = pair.indexOf(":");
      const attr = pair.slice(0, i).trim();
      entry.attrs.push({ attr: attr, key: pair.slice(i + 1).trim(), value: el.getAttribute(attr) });
    });
    if (el.dataset.waKey) {
      const url = new URL(el.href);
      entry.wa = { base: url.origin + url.pathname, key: el.dataset.waKey, text: url.searchParams.get("text") };
    }
    source.set(el, entry);
  });
  const originalTitle = document.title;
  const originalDescription = metaDesc ? metaDesc.content : "";

  // t("clave"): texto en el idioma actual; si falta, cae al inglés
  const t = function (key) {
    return (DICT[lang] && DICT[lang][key]) || (DICT[DEFAULT] && DICT[DEFAULT][key]) || key;
  };

  const apply = function () {
    const isDefault = lang === DEFAULT;
    const pick = function (key, original) { return isDefault ? original : (DICT[lang][key] || original); };

    source.forEach(function (entry, el) {
      if (entry.html !== null) el.innerHTML = pick(el.dataset.i18n, entry.html);
      entry.attrs.forEach(function (a) { el.setAttribute(a.attr, pick(a.key, a.value)); });
      if (entry.wa) el.href = entry.wa.base + "?text=" + encodeURIComponent(pick(entry.wa.key, entry.wa.text));
    });
    document.title = pick("meta.title", originalTitle);
    if (metaDesc) metaDesc.content = pick("meta.description", originalDescription);
    document.documentElement.lang = lang;

    $$("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  };

  const setLang = function (next, opts) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    apply();
    if (!opts || opts.persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* modo privado */ }
    }
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: lang } }));
  };

  // Idioma inicial: elección guardada → idioma del navegador → inglés
  const initial = function () {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (_) { /* sin almacenamiento */ }
    const preferred = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || [];
    const match = preferred.map(function (l) { return String(l).toLowerCase().slice(0, 2); }).find(function (l) { return LANGS.includes(l); });
    return match || DEFAULT;
  };

  $$("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
  });

  window.I18N = { t: t, setLang: setLang, get lang() { return lang; } };

  setLang(initial(), { persist: false });
})();
