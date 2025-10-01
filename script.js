document.querySelector(".copy-btn").addEventListener("click", (e) => {
  const email = e.currentTarget.dataset.email;
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById("copy-toast");
    toast.classList.add("toast-show");
    setTimeout(() => toast.classList.remove("toast-show"), 2000);
  });
});
