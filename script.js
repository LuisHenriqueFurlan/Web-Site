document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contacts-sec form");

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
});
