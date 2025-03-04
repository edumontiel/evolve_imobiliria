// Selecionando elementos
const openModal = document.querySelector(".button");
const closeModal = document.querySelector(".close");
const modal = document.getElementById("modalContato");
const form = document.getElementById("contatoForm");

// Abre o spam
openModal.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    modal.style.display = "flex";
});

// fecha o spam
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});