const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
  transctions: [],
};

document.getElementById("button-logout").addEventListener("click", logout);

// Adicionar lançamento
document.getElementById("transctions-form");

checkLogged();

function checkLogged() {
  if (session) {
    sessionStorage.getItem("logged", session);
    logged = session;
  }

  if (!logged) {
    window.location.href = "index.html";
    return;
  }

  const dataUser = localStorage.getItem(logged);
  if (dataUser) {
    data = JSON.parse(dataUser);
  }

  console.log(data);
}

function logout() {
  sessionStorage.removeItem("logged");
  localStorage.removeItem("session");

  window.location.href = "index.html";
}
