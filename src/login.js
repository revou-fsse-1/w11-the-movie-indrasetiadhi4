import { getAllUsers } from "./services/getUsers.js";

function verifyLogin() {
  const formLogin = document.getElementById("form-login");
  formLogin.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const users = await getAllUsers();

    const checkUsername = users.some((user) => user.username === username);
    if (!checkUsername) {
      alert("Invalid username or password, please try again.");
      return;
    }

    const userDB = users.find((user) => user.username === username);
    const checkPassword = userDB.password === password;
    if (!checkPassword) {
      alert("Invalid username or password, please try again.");
      return;
    }

    alert("Login successful!");

    window.location.href = "./homepage";
  });
}

addEventListener("DOMContentLoaded", function () {
  verifyLogin();
});
