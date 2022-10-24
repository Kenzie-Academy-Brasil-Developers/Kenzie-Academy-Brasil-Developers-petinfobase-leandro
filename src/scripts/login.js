/* Desenvolva seu código aqui */
import { requestLogin } from "./requests.js";

const buttonRegister = document.querySelector("#button-login");



export const eventLogin = () => {
  const form = document.querySelector("form");
  const elements = [...form.elements];

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    elements.forEach((element) => {
      
      if (element.tagName == "INPUT" && element.value !== "") {
        body[element.id] = element.value;

        // buttonRegister.disabled = true
        // buttonRegister.classList.remove("disabled")
      } else {
        // buttonRegister.disabled = true
      }
    });

    const check = await requestLogin(body);

    console.log(check);
    
  });
};

export function buttonToRegister() {
  buttonRegister.addEventListener("click", () => {
    window.location.replace("../register/register.html");
  });
}