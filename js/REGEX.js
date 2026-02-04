const submitBtn = document.getElementById("submitBtn");
const msgContainer = document.querySelector(".msg");

function verifyEmailOrCpf(e) {
  msgContainer.innerHTML = "";
  e.preventDefault();

  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const inputTxt = document.querySelector(".input-txt");

  let msg = "";

  if (regexCpf.test(inputTxt.value.trim())) {
    msg = "CPF Válido";
    msgContainer.style.color = "rgba(0, 255, 0, 0.67)";
    msgContainer.innerHTML = `<p>${msg}</p>`;
  } else if (regexEmail.test(inputTxt.value.trim())) {
    msg = "E-MAIL Válido";
    msgContainer.style.color = "rgba(0, 255, 0, 0.67)";
    msgContainer.innerHTML = `<p>${msg}</p>`;
  } else {
    msg = "E-mail ou CPF inválidos";
    msgContainer.style.color = "#ff0000";
    msgContainer.innerHTML = `<p>${msg}</p>`;
    return;
  }

  alert("Enviado");
}
