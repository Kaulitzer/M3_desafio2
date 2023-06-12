document.querySelector("#validarBtn").addEventListener("click", validarCompra);

function validarCompra() {
let total = 0;
let mensaje = "";

const sticker1 = parseInt(document.querySelector("#sticker1").value);
const sticker2 = parseInt(document.querySelector("#sticker2").value);
const sticker3 = parseInt(document.querySelector("#sticker3").value);

if (!isNaN(sticker1) && sticker1 >= 0 && Number.isInteger(sticker1)) {
    total += sticker1;
} else {
    mensaje += "Debe ingresar un monto válido en cada espacio. ";
}

if (!isNaN(sticker2) && sticker2 >= 0 && Number.isInteger(sticker2)) {
    total += sticker2;
} else {
    mensaje += "Debe ingresar un monto válido en cada espacio. ";
}

if (!isNaN(sticker3) && sticker3 >= 0 && Number.isInteger(sticker3)) {
    total += sticker3;
} else {
    mensaje += "Debe ingresar un monto válido en cada espacio. ";
}

if (mensaje === "") {
    if (total === 0) {
    mensaje = "No has seleccionado ningún sticker.";
    } else if (total > 10) {
    mensaje = "Llevas demasiados stickers. El monto máximo es de 10 stickers.";
    } else {
    mensaje = `Llevas ${total} stickers.`;
    }
}

document.querySelector("#mensaje").textContent = mensaje;
}