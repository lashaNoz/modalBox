const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);

function openModal() {
  modalBg.className += " active change";
  modal.className += " active change";
}

function closeModal(e) {
  console.log(e.target);
  if (e.target === closeBtn || e.target === modalBg) {
    modalBg.classList.remove("active");
    modal.classList.remove("active");

    setTimeout(() => {
      modalBg.classList.remove("change");
      modal.classList.remove("change");
    }, 1000);
  }
}
