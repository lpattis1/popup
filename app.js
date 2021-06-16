const btn = document.querySelector("button");
const closeBtn = document.querySelector(".popup-close");

function openModal(btn) {
  btn.addEventListener("click", function (e) {
    const popup = document.querySelector(".popup-wrapper");
    const popupBox = document.querySelector(".popup");
    popupBox.animate(
      [
        {
          transform: "scale(0.3)",
          opacity: "0",
        },
        {
          transform: "scale(1)",
          opacity: "1",
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
    popup.classList.add("open");
  });
}

function closeModal(close) {
  close.addEventListener("click", function (e) {
    const popup = document.querySelector(".popup-wrapper");
    const popupBox = document.querySelector(".popup");
    popup.classList.remove("open");
  });
}

function clickOutsidePopupAndClose() {
  const popup = document.querySelector(".popup-wrapper");
  popup.addEventListener("click", function (e) {
    popup.classList.remove("open");
  });
}

openModal(btn);
closeModal(closeBtn);
clickOutsidePopupAndClose();
