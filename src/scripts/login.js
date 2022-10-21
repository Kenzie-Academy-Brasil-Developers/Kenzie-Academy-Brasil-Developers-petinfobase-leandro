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
        console.log(body);
      }
    });
    // console.log("elements");

    const check = await requestLogin(body);
console.log(check);
    
  });
};

function buttonToRegister() {
  buttonRegister.addEventListener("click", () => {
    window.location.replace("../register/register.html");
  });
}

export function buttonSpinner() {
  const button = document.getElementById("button-login");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    button.innerHTML = "";

    const img = document.createElement("img");
    img.src = "../../../src/images/spinner.png";
    img.alt = "spinner";
    img.classList.add("loading");

    button.appendChild(img);

    localStorage.setItem("@petinfo: users", inputs.value);

    login(button);
  });
}
buttonToRegister();

// async function login(button) {
//   const users = await fetch(`https://api.github.com/users/${inputs.value}`)
//     .then((res) => res.json())
//     .then((res) => {
//       button.innerHTML = "";
//       button.innerText = "Acessar";

//       return res;
//     });

//   if (users.message) {
//     const textError = document.getElementById("error");

//     textError.classList.remove("hidde");

//     return "A senha está incorreta";
//   }
//   window.location.assign("../src/pages/login.html");
//   return users;
// }

// function checkInputs(inputs) {
//   let verifyInput = true;

//   if (inputs.value === "") {
//     verifyInput = false;
//     inputs.classList.add(inputError);
//   } else {
//     inputs.classList.remove(inputError);
//   }

//   return verifyInput;
// }
