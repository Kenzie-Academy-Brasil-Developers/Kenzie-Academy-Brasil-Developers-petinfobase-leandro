const inputs = document.querySelectorAll("input");
const button = document.querySelector("#button-access");

export function buttonSpinner() {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      button.innerHTML = "";
  
      const img = document.createElement("img");
      img.src = "../../../src/images/spinner.png";
      img.alt = "spinner";
      img.classList.add("loading");
  
      button.appendChild(img);
    });
  }

function checkInputs(inputs) {
    let verifyInput = true;
  
    if (inputs.value === "") {
      verifyInput = false;
    }
  
    return verifyInput;
  }
  
  export function verifyValueInput() {

    inputs.forEach((input) => {
      input.addEventListener("keyup", function () {

        if (checkInputs(input)) {
          // buttonSpinner()
          button.disabled = false;
        } else {

          button.disabled = true;
        }
      });
    })
  }
  