const button = document.querySelector("#button-login");
const inputs = document.querySelectorAll("input");

// export function buttonSpinner() {
//     const button = document.getElementById("button-login");
//     button.addEventListener("click", (event) => {
//       event.preventDefault();
//       button.innerHTML = "";
  
//       const img = document.createElement("img");
//       img.src = "../../../src/images/spinner.png";
//       img.alt = "spinner";
//       img.classList.add("loading");
  
//       button.appendChild(img);
  
//       localStorage.setItem("@petinfo: users", inputs.value);
  
//       login(button);
//     });
//   }

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

function checkInputs(inputs) {

    let verifyInput = true;
  
    if (inputs.value === "") {
      verifyInput = false;
    }
  
    return verifyInput;
  }
  
  export function verifyValueInput() {
    inputs.addEventListener("keyup", function () {
      if (checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  }
  verifyValueInput();