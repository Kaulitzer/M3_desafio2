document.querySelector("#verificarBtn").addEventListener("click", verificarPassword);

function verificarPassword() {
  const select1 = document.querySelector("#select1");
  const select2 = document.querySelector("#select2");
  const select3 = document.querySelector("#select3");
  const password1 = select1.value;
  const password2 = select2.value;
  const password3 = select3.value;
  const mensaje = document.querySelector("#mensaje");

  if (password1 === "9" && password2 === "1" && password3 === "1") {
    mensaje.textContent = "Password 1 es correcto.";
  } else if (password1 === "7" && password2 === "1" && password3 === "4") {
    mensaje.textContent = "Password 2 es correcto.";
  } else {
    mensaje.textContent = "Password incorrecto.";
  }
}
