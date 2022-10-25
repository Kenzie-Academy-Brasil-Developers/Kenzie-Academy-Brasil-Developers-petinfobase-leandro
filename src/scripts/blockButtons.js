const inputs = document.querySelectorAll("input");
const button = document.querySelector("#button-access");

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
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      });
    })
  }
