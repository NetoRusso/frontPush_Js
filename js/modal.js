
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const close = document.querySelector('.modal-content-close');


function abrirModal() {

  modal.classList.add("active");
}

function fecharModal() {

  modal.classList.remove("active");
}


modalBtn.addEventListener("click", abrirModal);

close.addEventListener("click", fecharModal);

