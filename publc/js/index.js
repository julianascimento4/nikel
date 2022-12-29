const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;

  const accout = getAccout(email);

  if (!accout) {
    alert("Oops! Verifique o usuário ou a senha");
    return;
  }

  if (accout) {
    if (accout.password !== password) {
      alert("Oops! Verifique o usuário ou a senha");
      return;
    }

    saveSession(email, checkSession);

    window.location.href = "home.html";
  }
});

//Criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-create-input").value;
  const password = document.getElementById("password-create-input").value;

  if (email.length < 5) {
    alert("Preencha o campo com um e-mail válido.");
    return;
  }

  if (password.length < 4) {
    alert("Preecha a senha com no mínimo 4 dígitos");
    return;
  }

  saveAccount({
    login: email,
    password: password,
    transctions: [],
  });

  myModal.hide();

  alert("Conta criada com sucesso");
});

function checkLogged() {
  if (session) {
    sessionStorage.getItem("logged", session);
    logged = session;
  }

  if (logged) {
    saveSession(logged, session);

    window.location.href = "home.html";
  }
}

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
  if (saveSession) {
    localStorage.setItem("session", data);
  }

  sessionStorage.setItem("logged", data);
}
function getAccout(key) {
  const accout = localStorage.getItem(key);

  if (accout) {
    return JSON.parse(accout);
  }

  return "";
}
