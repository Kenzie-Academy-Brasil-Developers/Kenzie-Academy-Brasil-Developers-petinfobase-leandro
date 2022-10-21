// import { requestCreateNewPost } from "./requests.js"; //acho que essa não é aqui (ela cria novos posts na api)
import { getLocalStorage } from "./localStorage.js";
import { requestProfile } from "./requests.js";
import { requestFindAllPost } from "./requests.js";
import { modalAdicionar } from "./modals/modalNewPost.js";

const ul = document.getElementById("ulPosts");
const buttonCreatePost = document.getElementById("createNewPost");

export const verifyPermission = () => {
  const user = getLocalStorage();

  if (user == "") {
    window.location.replace("../../pages/login/login.html");
  }
};

export const renderUserImage = async () => {
  const user = await requestProfile();
  const img = document.querySelectorAll(".UserIMG");

  img.forEach((element) => (element.src = user.avatar));

  img.src = user.avatar;
};

function date() {
  let data = new Date();
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();
  let dataAtual = `${mes} de ${ano}`;
  console.log(dataAtual);
}

export const createNewPost = () => {
  buttonCreatePost.addEventListener("click", modalAdicionar);
};

export const renderPosts = async () => {
  const posts = await requestFindAllPost();

  ul.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");
    const divPrincipal = document.createElement("div");
    const divTopCard = document.createElement("div");
    const divUser = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const date = document.createElement("p");
    const divButtons = document.createElement("div");
    const buttonEdit = document.createElement("div");
    const buttonDelete = document.createElement("div");

    const divPost = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    divTopCard.classList.add("headerCard");
    divButtons.classList.add("buttonsCard");
    buttonEdit.classList = "button-default transparent-button-small";
    buttonDelete.classList = "button-default transparent-button-small";
    divPost.classList.add("divPosts");
    h2.classList.add("title-1");
    p.classList.add("text-2");
    a.classList.add("text-3");

    img.src = post.user.avatar;
    name.innerText = post.user.username;
    date.innerText = "date";
    buttonEdit.innerText = "Editar";
    buttonDelete.innerText = "Excluir";

    h2.innerText = post.title;
    p.innerText = post.content;
    a.innerText = "Acessar publicação";
    a.href = "";

    divUser.append(img, name, date);
    divButtons.append(buttonEdit, buttonDelete);
    divTopCard.append(divUser, divButtons);
    divPost.append(h2, p, a);
    divPrincipal.append(divTopCard, divPost);

    li.appendChild(divPrincipal);
    ul.appendChild(li);
  });
};
