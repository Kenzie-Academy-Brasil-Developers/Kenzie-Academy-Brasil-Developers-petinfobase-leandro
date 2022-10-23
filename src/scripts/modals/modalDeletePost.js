import { requestDeletePost } from "../requests.js";
import { renderPosts } from "../homePage.js";
import openModal from "./modals.js";

const body = document.querySelector("body");

// const deletePostSelected = (id) => {
//   const deletePost = modalDelete(id);
//   openModal(deletePost);
// };

export const modalDelete = (id) => {
  let divPrincipal = document.createElement("div");
  let divHeader = document.createElement("div");
  let h2 = document.createElement("h2");
  let closeButton = document.createElement("button");

  let divText = document.createElement("div");
  let h2Title = document.createElement("h2");
  let p = document.createElement("p");

  let divButtons = document.createElement("div");
  let buttonCancel = document.createElement("button");
  let buttonAdd = document.createElement("button");

  divPrincipal.classList.add("modal");
  divText.classList.add("divForm");
  divHeader.classList.add("divHeader");
  divButtons.classList.add("divButtons");

  h2.classList.add("text-3");
  h2Title.classList.add("title-2");
  p.classList.add("text-4");

  buttonCancel.classList = "button-default transparent-button-small";
  buttonAdd.classList = "button-default blue-button-small";

  h2.innerText = "Confirmação de exclusão";
  closeButton.innerText = "X";
  h2Title.innerText = "Tem certeza que deseja excluir este post?";
  p.innerText =
    "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir";

  buttonCancel.innerText = "Cancelar";
  buttonAdd.innerText = "Sim, excluir este post";
  buttonAdd.type = "submit";

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("../../pages/homePage/homePage.html");
  });

  buttonCancel.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("../../pages/homePage/homePage.html");
  });

  buttonAdd.addEventListener("click", objectModal);

  divButtons.append(buttonCancel, buttonAdd);
  divHeader.append(h2, closeButton);
  divText.append(divHeader, h2Title, p, divButtons);
  divPrincipal.appendChild(divText);

  body.append(divPrincipal);

  function objectModal() {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      await requestDeletePost(id);
      await renderPosts();
    });
    return form;
  }
};
