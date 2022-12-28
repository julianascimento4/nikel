const myModal = new bootstrap.Modal("#register-modal");

//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const session = document.getElementById("session-check").checked;
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

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function getAccout(key) {
  const accout = localStorage.getItem(key);

  if (accout) {
    return JSON.parse(accout);
  }

  return "";
}
