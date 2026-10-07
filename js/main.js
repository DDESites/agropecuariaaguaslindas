/* Agropecuária Águas Lindas — interações do site */

(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var aberto = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", aberto ? "true" : "false");
      burger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Abrir menu");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.focus();
      }
    });
  }

  /* ---------- Animação de entrada no scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduzirMovimento || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Formulário de contato ---------- */
  var form = document.getElementById("form");
  var note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      note.classList.remove("is-error");

      // honeypot anti-spam
      if (form.website && form.website.value) return;

      var nome = form.nome.value.trim();
      var msg = form.msg.value.trim();

      if (nome.length < 2 || msg.length < 5) {
        note.textContent = "Preencha seu nome e uma mensagem para continuarmos.";
        note.classList.add("is-error");
        return;
      }

      var texto = encodeURIComponent("Olá! Meu nome é " + nome + ". " + msg);
      note.textContent = "Tudo certo! Abrindo o WhatsApp para você…";
      form.reset();
      window.open("https://wa.me/5531999991234?text=" + texto, "_blank", "noopener");
    });
  }

  /* ---------- Ano no rodapé ---------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
