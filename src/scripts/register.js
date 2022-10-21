import { requestRegister } from "./requests.js";

const buttonReturnLogin = document.querySelectorAll("#button-login");

export const eventRegister = () => {
  const form = document.querySelector("form");
  const elements = [...form.elements];

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        body[element.id] = element.value;
      }
    });

    await requestRegister(body);
  });
};

export function buttonToLogin() {
  buttonReturnLogin.forEach((button) => {

    button.addEventListener("click", () => {
      window.location.replace("../login/login.html");
    });

  })
}
