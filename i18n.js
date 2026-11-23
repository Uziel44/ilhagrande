/* ==========================================================================
   GUIA ILHA GRANDE AVENTURA
   Traducciones (EN / PT / ES). Se carga antes de index.js.

   CÓMO FUNCIONA
   El inglés (idioma principal) vive en el propio HTML: sirve de respaldo sin JS
   y para los buscadores. Al cargar se guarda una copia de cada texto marcado y
   es lo que se restaura al volver a "en". Aquí abajo están el portugués y el español.
     data-i18n="clave"                    → reemplaza el contenido del elemento
     data-i18n-attr="atributo:clave;..."  → reemplaza atributos (alt, aria-label, content)
     data-wa-key="clave"                  → reescribe el mensaje (?text=) de un enlace wa.me

   Para agregar otro idioma: súmalo a LANGS, crea su diccionario en DICT
   y agrega un botón [data-lang] en el header.
   ========================================================================== */

(function () {
  "use strict";

  const LANGS = ["en", "pt", "es"];
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
      "hero.l1": "Canoa havaiana,",
      "hero.l2": "bioluminescência e",
      "hero.l3": "trekking em Ilha Grande.",
      "hero.text": "Passeios ao amanhecer, tour noturno de bioluminescência e trekking guiado ao Pico do Papagaio.",
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
      "glow.k": "Não é necessário ter experiência para participar",
      "glow.h": "Tour de bioluminescência em canoa havaiana",
      "glow.lead": "Capacidade: até 6 pessoas + 1 instrutor experiente em navegação e segurança.",
      "glow.note": "Os horários podem variar de acordo com as fases da lua e as condições sazonais.",
      "f.dur": "Duração",
      "f.dur.v": "Aproximadamente 2 horas",
      "f.dep": "Saída",
      "f.dep.v": "A partir das 19h, horário a combinar",
      "f.grp": "Tamanho do grupo",
      "f.grp.v": "Até 6 pessoas + 1 instrutor",
      "f.price": "Preço",
      "f.price.v": "R$180 por pessoa",
      "glow.cta": "Ver noites disponíveis",
      "g.meet.h": "Ponto de encontro",
      "g.meet.map": "Ver no mapa",
      "g.bring.h": "O que levar",
      "g.b1": "Garrafinha de água",
      "g.b2": "Corta-vento",
      "g.b3": "Roupa de banho",
      "g.b4": "Toalha",
      "g.inc.h": "O que está incluído",
      "g.i1": "Máscara de snorkel",
      "g.i2": "Colete salva-vidas",
      "g.i3": "Aula de remada",
      "g.i4": "Fotos e vídeos",
      "g.i5": "Bolsa impermeável (water bag)",
      "g.pay.h": "Formas de pagamento",
      "g.p1": "Dinheiro em espécie",
      "g.p2": "PIX",
      "g.p3": "Cartão (com taxa adicional)",
      "tours.h": "O resto do Karamuru",
      "tours.t": "Mesma canoa, mesmo grupo pequeno, outra luz.",
      "alt.sunrise": "Nascer do sol visto de uma canoa havaiana em Ilha Grande",
      "sr.h": "Passeio de canoa havaiana ao amanhecer",
      "sr.t": "Não é necessária experiência para participar. Saímos antes do amanhecer e remamos até um ponto para ver o sol nascer. No caminho fazemos snorkel sobre o coral e depois seguimos a costa de volta, passando por aves, praias e floresta.",
      "sr.m1": "<span>Saída</span> 4h às 6h20, varia conforme o horário do nascer do sol",
      "sr.m2": "<span>Grupo</span> 6 pessoas + 1 instrutor",
      "sr.m3": "<span>Preço</span> R$150 por pessoa",
      "sr.m4": "Ponto de encontro",
      "sr.m5": "<span>O que levar</span> Garrafinha de água, corta-vento, roupa de banho, toalha, protetor solar",
      "sr.m6": "<span>Incluído</span> Máscara de snorkel, colete salva-vidas, aula de remada, fotos e vídeos, mochila impermeável (water bag)",
      "sr.m7": "<span>Pagamento</span> Dinheiro, PIX, cartão (com taxa)",
      "sr.cta": "Pergunte sobre a remada ao amanhecer",
      "trek.lead": "Nível: difícil / muito difícil. Não tente se testar nesta trilha.",
      "trek.p": "Fotos e vídeos de alta qualidade são entregues a cada participante.",
      "trek.h": "Pico do Papagaio · Trilha noturna",
      "tk.dep": "Saída",
      "tk.dep.v": "00h30, nascer do sol às 4h55",
      "tk.arr": "Chegada",
      "tk.arr.v": "8h25, Vila do Abraão",
      "tk.meet": "Ponto de encontro",
      "tk.meet.v": "Em frente à Yes Pousada / Bugio Hostel",
      "tk.dist": "Distância",
      "tk.dist.v": "14 km no total",
      "tk.dur": "Duração",
      "tk.dur.v": "3 horas de subida, 2 horas no topo e 3 horas de descida",
      "tk.price": "Preço",
      "tk.price.v": "R$300",
      "tk.pay": "Pagamento",
      "tk.pay.v": "PIX, transferência bancária ou cartão",
      "tk.off.h": "O que oferecemos",
      "tk.o1": "Guia credenciado pelo INEA-PEIG",
      "tk.o2": "Suporte técnico e acompanhamento durante a atividade",
      "tk.o3": "Primeiros socorros (kit compartilhado)",
      "tk.o4": "Lanternas de cabeça profissionais",
      "tk.o5": "Bastão de trekking",
      "tk.bring.h": "O que cada participante deve levar",
      "tk.b1": "Mochila de trekking",
      "tk.b2": "Lanche leve (barras de cereal, chocolate, biscoitos salgados e frutas, como banana ou maçã)",
      "tk.b3": "1,5 litro de água e Gatorade (opcional)",
      "tk.b4": "Calçado adequado para trekking (botas ou tênis de trilha)",
      "tk.b5": "Calça de trekking/legging ou bermuda",
      "tk.b6": "Camiseta extra para trocar por causa do suor",
      "tk.b7": "Jaqueta corta-vento/impermeável",
      "tk.b8": "Saco plástico para recolher seu lixo",
      "tk.imp.h": "Importante",
      "tk.imp": "Não use fragrâncias doces, apenas desodorantes secos, por causa de abelhas e vespas.",
      "tk.book": "Para fazer sua reserva você precisa preencher o formulário de saúde e fazer um pagamento antecipado de 50%.",
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
      "a3.1": "Base Karamuru, Vila do Abraão, Ilha Grande.",
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
      "wa.book": "Olá Franco, estive vendo o site...",
      "wa.glow": "Olá Franco, estive vendo o site...",
      "wa.sunrise": "Olá Franco, estive vendo o site...",
      "wa.trek": "Olá Franco, estive vendo o site...",
      "aria.lang": "Idioma"
    },
    es: {
      "meta.title": "Guía Ilha Grande Aventura | Excursiones en canoa hawaiana y trekking",
      "meta.description": "Excursiones en canoa hawaiana y trekking en grupos pequeños en Ilha Grande, Brasil. Remadas nocturnas con bioluminiscencia, excursiones al amanecer y subidas guiadas al Pico do Papagaio.",
      "meta.ogtitle": "Guía Ilha Grande Aventura",
      "meta.ogdesc": "Remadas nocturnas con bioluminiscencia, excursiones en canoa al amanecer y treks guiados en Ilha Grande, Brasil.",
      "skip": "Saltar al contenido",
      "nav.about": "Sobre nosotros",
      "nav.book": "Reservar excursión",
      "aria.menu": "Abrir menú",
      "aria.hero": "Agua bioluminiscente alrededor de una canoa hawaiana de noche en Ilha Grande",
      "hero.l1": "Canoa hawaiana,",
      "hero.l2": "bioluminiscencia y",
      "hero.l3": "trekking en Ilha Grande.",
      "hero.text": "Excursiones al amanecer, tour nocturno de bioluminiscencia y trekking guiado al Pico do Papagaio.",
      "hero.cta1": "Reserva por WhatsApp",
      "hero.cta2": "Ver las excursiones",
      "aria.scroll": "Ir al contenido",
      "alt.franco": "Franco Raffaeli, guía local en Ilha Grande",
      "about.h": "Hola, soy Franco Raffaeli",
      "about.lead": "Nací en Buenos Aires, Argentina, y crecí en Mar del Plata.",
      "about.p": "A los 21 años decidí dejar una vida estable (buen sueldo todos los meses, todo organizado) para redescubrirme. Eso me costó amigos, familia y la zona de confort.<br><br>Viví en Florianópolis, la isla de la magia, donde hice la residencia permanente, conocí gente increíble, hice muchas caminatas, surfeé y trabajé como voluntario en un hostel. Después de un año sentí que tenía que seguir viajando, y Ilha Grande fue el destino. Pensé que solo iba a estar de paso, pero la isla me conquistó.<br><br>Llegué el 14 de diciembre de 2014. Empecé en una agencia, vendiendo paseos en barco, y enseguida descubrí mi pasión: los senderos. Ya les compartía a los turistas lo que sabía de la Mata Atlántica, la flora y la fauna, sin cobrar nada. Hice un curso con los guardaparques locales y me formé profesionalmente. Pocos meses después empecé a guiar la subida nocturna al Pico do Papagaio.<br><br>Trabajé con otras personas y no todo salió bien. Me fui a Europa y, en marzo de 2025, volví a la isla.<br><br>Hoy me tomo mi trabajo muy en serio. Trabajo solo, pero no estoy solo. Tengo mucho que agradecer y sigo dando lo mejor de mí a cada persona que guío.",
      "about.t1": "No se necesita experiencia",
      "about.t2": "Seis personas por grupo, un guía",
      "about.t3": "Equipo de seguridad incluido",
      "about.t4": "Fotos y videos de tu excursión",
      "split.h": "Nuestros dos tipos de excursión",
      "alt.split1": "Canoa hawaiana en el mar al amanecer",
      "split.k1": "En el mar",
      "split.title1": "Canoa hawaiana",
      "split.t1": "Excursiones en canoa hawaiana: bioluminiscencia, remadas al amanecer y al atardecer.",
      "split.c1": "Tres excursiones",
      "alt.split2": "Senderistas en un sendero del bosque de Ilha Grande",
      "split.k2": "En la montaña",
      "split.title2": "Trilha Pico do Papagaio",
      "split.t2": "Caminata nocturna, subidas al amanecer.",
      "split.c2": "Una ruta",
      "glow.k": "No se necesita experiencia para participar",
      "glow.h": "Tour de bioluminiscencia en canoa hawaiana",
      "glow.lead": "Capacidad: hasta 6 personas + 1 instructor con experiencia en navegación y seguridad.",
      "glow.note": "Los horarios pueden variar según las fases de la luna y las condiciones de temporada.",
      "f.dur": "Duración",
      "f.dur.v": "Aproximadamente 2 horas",
      "f.dep": "Salida",
      "f.dep.v": "A partir de las 19:00, horario a combinar",
      "f.grp": "Tamaño del grupo",
      "f.grp.v": "Hasta 6 personas + 1 instructor",
      "f.price": "Precio",
      "f.price.v": "R$180 por persona",
      "glow.cta": "Ver noches disponibles",
      "g.meet.h": "Punto de encuentro",
      "g.meet.map": "Ver en el mapa",
      "g.bring.h": "Qué llevar",
      "g.b1": "Botella de agua",
      "g.b2": "Cortaviento",
      "g.b3": "Ropa de baño",
      "g.b4": "Toalla",
      "g.inc.h": "Qué incluye",
      "g.i1": "Máscara de snorkel",
      "g.i2": "Chaleco salvavidas",
      "g.i3": "Clase de remo",
      "g.i4": "Fotos y videos",
      "g.i5": "Bolsa impermeable (water bag)",
      "g.pay.h": "Formas de pago",
      "g.p1": "Efectivo",
      "g.p2": "PIX",
      "g.p3": "Tarjeta (con recargo)",
      "tours.h": "El resto de Karamuru",
      "tours.t": "La misma canoa, el mismo grupo pequeño, otra luz.",
      "alt.sunrise": "Amanecer desde una canoa hawaiana en Ilha Grande",
      "sr.h": "Tour de canoa hawaiana al amanecer",
      "sr.t": "No se necesita experiencia para participar. Salimos antes del alba y remamos hasta un punto para ver salir el sol. En el camino hacemos snorkel sobre el coral y luego seguimos la costa de regreso, entre aves, playas y bosque.",
      "sr.m1": "<span>Salida</span> 4:00 a 6:20, varía según la hora del amanecer",
      "sr.m2": "<span>Grupo</span> 6 personas + 1 instructor",
      "sr.m3": "<span>Precio</span> R$150 por persona",
      "sr.m4": "Punto de encuentro",
      "sr.m5": "<span>Qué llevar</span> Botella de agua, cortaviento, ropa de baño, toalla, protector solar",
      "sr.m6": "<span>Incluye</span> Máscara de snorkel, chaleco salvavidas, clase de remo, fotos y videos, mochila impermeable (water bag)",
      "sr.m7": "<span>Pago</span> Efectivo, PIX, tarjeta (con recargo)",
      "sr.cta": "Consulta por la remada al amanecer",
      "trek.lead": "Nivel: difícil / muy difícil. No intentes ponerte a prueba en este hike.",
      "trek.p": "Fotos y videos de alta calidad son entregados a cada participante.",
      "trek.h": "Pico do Papagaio · Trekking nocturno",
      "tk.dep": "Salida",
      "tk.dep.v": "00:30, amanecer a las 4:55",
      "tk.arr": "Llegada",
      "tk.arr.v": "08:25, Vila do Abraão",
      "tk.meet": "Punto de encuentro",
      "tk.meet.v": "Frente a Yes Pousada / Bugio Hostel",
      "tk.dist": "Distancia",
      "tk.dist.v": "14 km en total",
      "tk.dur": "Duración",
      "tk.dur.v": "3 horas de subida, 2 horas en la cima y 3 horas de descenso",
      "tk.price": "Precio",
      "tk.price.v": "R$300",
      "tk.pay": "Pago",
      "tk.pay.v": "PIX, transferencia bancaria o tarjeta",
      "tk.off.h": "Qué ofrecemos",
      "tk.o1": "Guía acreditado por el INEA-PEIG",
      "tk.o2": "Soporte técnico y acompañamiento durante la actividad",
      "tk.o3": "Primeros auxilios (kit compartido)",
      "tk.o4": "Linternas de cabeza profesionales",
      "tk.o5": "Bastón de trekking",
      "tk.bring.h": "Qué debe llevar cada participante",
      "tk.b1": "Mochila para trekking",
      "tk.b2": "Snack ligero (barras de cereal, chocolate, galletas saladas y frutas, como plátano o manzana)",
      "tk.b3": "1,5 litros de agua y Gatorade (opcional)",
      "tk.b4": "Calzado adecuado para trekking (botas o zapatillas de hiking)",
      "tk.b5": "Pantalones de trekking/leggings o shorts",
      "tk.b6": "Camiseta extra para cambiarse por la transpiración",
      "tk.b7": "Chaqueta cortavientos/impermeable",
      "tk.b8": "Bolsa de plástico para recoger tu basura",
      "tk.imp.h": "Importante",
      "tk.imp": "No utilices fragancias dulces, solo desodorantes secos, debido a las abejas y avispas.",
      "tk.book": "Para hacer tu reservación tendrás que completar el formulario de salud y hacer un pago adelantado del 50%.",
      "trek.cta": "Consulta por el trek",
      "alt.trek": "Vista panorámica del Pico do Papagaio sobre Ilha Grande",
      "info.h": "Antes de venir",
      "info.p": "Todo lo que la gente suele preguntar antes de reservar.",
      "a1.h": "Qué está incluido",
      "a1.1": "Máscara de snorkel",
      "a1.2": "Chaleco salvavidas",
      "a1.3": "Clase de remo antes de salir",
      "a1.4": "Fotos y videos de la excursión",
      "a1.5": "Bolsa estanca para tus cosas",
      "a2.h": "Qué llevar",
      "a2.1": "Una botella de agua, un cortavientos, traje de baño y toalla.",
      "a2.2": "Para la remada al amanecer, lleva también protector solar.",
      "a3.h": "Dónde nos encontramos",
      "a3.1": "Base Karamuru, Vila do Abraão, Ilha Grande.",
      "a3.2": "Abrir el punto de encuentro en Google Maps",
      "a4.h": "Cómo pagar",
      "a4.1": "Efectivo, Pix o tarjeta con una pequeña comisión.",
      "a4.2": "Se paga el mismo día, en el punto de encuentro.",
      "a5.h": "¿Necesito experiencia?",
      "a5.1": "No. Ninguna de las excursiones requiere experiencia previa.",
      "a5.2": "Toda excursión en canoa empieza con una clase de remo, y el guía está con el grupo todo el tiempo.",
      "gal.h": "En la isla",
      "alt.g1": "Grupo en canoa en el agua",
      "alt.g2": "Sendero del bosque en Ilha Grande",
      "alt.g3": "Snorkel sobre el coral",
      "alt.g4": "Vista desde la cima",
      "alt.g5": "Atardecer desde la canoa",
      "alt.g6": "Playa en Ilha Grande",
      "trust.h": "Mira lo que dicen",
      "trust.p": "Reseñas y fotos del día a día de las excursiones.",
      "cta.h": "Listos cuando tú lo estés",
      "cta.t": "Envía un mensaje y encontraremos el día, la marea y la luna ideales para tu excursión.",
      "cta.b": "Escríbenos por WhatsApp",
      "foot.blurb": "Excursiones en canoa y montaña en Ilha Grande, Angra dos Reis, Brasil.",
      "foot.tours": "Excursiones",
      "foot.l1": "Bioluminiscencia",
      "foot.l2": "Amanecer y atardecer",
      "foot.l4": "Información práctica",
      "foot.touch": "Contacto",
      "foot.addr": "Vila do Abraão, Ilha Grande<br>Río de Janeiro, Brasil",
      "foot.site": "Sitio por Plexiweb Development",
      "aria.wa": "Escríbenos por WhatsApp",
      "aria.lang": "Idioma",
      "wa.book": "Hola Franco, estuve viendo la web...",
      "wa.glow": "Hola Franco, estuve viendo la web...",
      "wa.sunrise": "Hola Franco, estuve viendo la web...",
      "wa.trek": "Hola Franco, estuve viendo la web...",
      "menu.open": "Abrir menú",
      "menu.close": "Cerrar menú"
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
