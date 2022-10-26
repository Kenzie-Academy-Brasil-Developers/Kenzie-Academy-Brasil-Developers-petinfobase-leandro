import { requestProfile } from "./requests.js"

const openModal = (children) => {
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainConatiner = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background") 
    backgroundContainer.id = "backgroundModal"
    mainConatiner.classList.add("modal-container") 
    closeModalButton.classList.add("modal-close")
    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

// console.log(createNewPostForm());

    mainConatiner.append(closeModalButton)
    mainConatiner.append(children)
    backgroundContainer.append(mainConatiner)
    body.appendChild(backgroundContainer)
}

export default openModal


export const modalLogOut = async () => {
    const user = await requestProfile();

    const ul = document.getElementById("modalLogOut")

    const li = document.createElement("li")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")

    li.classList.add("liLogout")
    div.classList.add("divLogout")

    img.classList.add("UserIMG")
    img.src = user.avatar;
    img.alt = user.username
    
    p.innerText = `@${user.username}`

    button.classList = "btnLeave grey-button text-4"
    button.innerText = "Sair da conta"
    button.id = "leave"

    button.addEventListener("click", () => {
        localStorage.clear();
        window.location.replace("../../pages/login/login.html");
      });

    div.append(p, button)
    li.append(img, div)

    ul.appendChild(li)
}
// modalLogOut();