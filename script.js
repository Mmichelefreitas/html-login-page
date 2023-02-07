function showSuccessMsg() {
  const message = document.getElementById("successMsg");

  message.className = "show";

  setTimeout(function () {
    message.className = "";
  }, 3000);
}
