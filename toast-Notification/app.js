const suc = document.getElementById("succ");
const err = document.getElementById("err");
const inv = document.getElementById("inv");

let tBox = document.querySelector(".toastBox");
let success ='<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let error = '<i class="fa-solid fa-circle-xmark"></i> Some error occured !!';
let invalid ='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again?';

suc.addEventListener("click", () => {
  showToast(success);
});
err.addEventListener("click", () => {
  showToast(error);
});
inv.addEventListener("click", () => {
  showToast(invalid);
});

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toastStyle");
  toast.innerHTML = message;
  tBox.appendChild(toast);

  if (message.includes("error")) {
    toast.classList.add("error");
  }
  if (message.includes("Invalid")) {
    toast.classList.add("Invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
