/* ==========================================================================
   GUIA ILHA GRANDE AVENTURA
   Único archivo de JavaScript.

   QUÉ HACE ESTE ARCHIVO
   1. Abre y cierra el menú en celular
   2. Abre y cierra los paneles de "Before you come"
   3. Marca el header cuando bajás en la página
   4. Escribe el año actual en el footer

   Las traducciones (EN / PT / ES) viven en i18n.js.

   No hay código dentro del HTML: todo el comportamiento vive acá.
   ========================================================================== */

(function () {
  "use strict";


  /* ------------------------------------------------------------------------
     1. MENÚ MÓVIL
     ------------------------------------------------------------------------ */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navMenu");

  if (burger && nav) {

    const setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", window.I18N.t(open ? "menu.close" : "menu.open"));
    };

    // i18n.js ya reescribió el aria-label base en el idioma nuevo
    document.addEventListener("i18n:change", function () {
      setMenu(burger.getAttribute("aria-expanded") === "true");
    });

    burger.addEventListener("click", function () {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    // Al tocar cualquier enlace del menú, se cierra
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    // La tecla Escape también lo cierra
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    // Si la ventana se agranda, el menú móvil no debe quedar abierto
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }


  /* ------------------------------------------------------------------------
     2. ACORDEÓN DE "BEFORE YOU COME"
     Al abrir un panel se cierran los demás.
     La altura se calcula sola, así que podés agregar o sacar texto sin tocar
     nada del código.
     ------------------------------------------------------------------------ */
  const accordion = document.getElementById("accordion");

  if (accordion) {
    const heads = accordion.querySelectorAll(".acc__head");

    const openPanel = function (head) {
      const panel = document.getElementById(head.dataset.acc);
      if (!panel) return;
      head.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    };

    const closePanel = function (head) {
      const panel = document.getElementById(head.dataset.acc);
      if (!panel) return;
      head.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = "0px";
    };

    heads.forEach(function (head) {
      head.addEventListener("click", function () {
        const wasOpen = head.getAttribute("aria-expanded") === "true";

        // cerrar todos
        heads.forEach(closePanel);

        // y abrir el que se tocó, salvo que ya estuviera abierto
        if (!wasOpen) openPanel(head);
      });
    });

    // Deja abierto el que viene marcado como abierto en el HTML
    heads.forEach(function (head) {
      if (head.getAttribute("aria-expanded") === "true") openPanel(head);
    });

    // Si la ventana cambia de ancho o de idioma, el texto ocupa otra altura:
    // recalculamos el panel que esté abierto
    const refit = function () {
      heads.forEach(function (head) {
        if (head.getAttribute("aria-expanded") === "true") openPanel(head);
      });
    };
    window.addEventListener("resize", refit);
    document.addEventListener("i18n:change", refit);
  }


  /* ------------------------------------------------------------------------
     3. SOMBRA DEL HEADER AL BAJAR
     ------------------------------------------------------------------------ */
  const header = document.getElementById("siteHeader");

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }


  /* ------------------------------------------------------------------------
     4. AÑO EN EL FOOTER
     Se actualiza solo, no hace falta editarlo cada enero.
     ------------------------------------------------------------------------ */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

})();
