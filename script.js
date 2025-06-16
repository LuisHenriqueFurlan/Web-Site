document.addEventListener("DOMContentLoaded", function () {
  // Código do formulário
  const form = document.querySelector("#contacts-sec form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const mensagem = form.querySelector("textarea").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
      form.reset();
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const elementsToAnimate = document.querySelectorAll(
    ".card-product, .cards-3, .box-missao, .content-about"
  );

  elementsToAnimate.forEach((el) => observer.observe(el));

  const cards = document.querySelectorAll(".card-product, .cards-3");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
      card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "";
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  if (menuToggle && mobileMenu && closeBtn) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      menuToggle.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuToggle.style.display = "block";
    });
  }

  const rgbButtons = document.querySelectorAll(".btn-whatsapp");

  rgbButtons.forEach((btn) => {
    if (!enableRgbEffect) {
      btn.style.backgroundColor = "";
      return;
    }

    let step = 0;
    function rgbEffect() {
      const r = Math.floor(128 + 127 * Math.sin(step));
      const g = Math.floor(128 + 127 * Math.sin(step + 2));
      const b = Math.floor(128 + 127 * Math.sin(step + 4));

      btn.style.backgroundColor = `rgb(${r},${g},${b})`;
      step += 0.05;

      requestAnimationFrame(rgbEffect);
    }
    rgbEffect();
  });
});
