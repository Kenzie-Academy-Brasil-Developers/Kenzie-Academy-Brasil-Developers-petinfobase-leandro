import { requestUpdatePost } from "../requests.js";
import { renderPosts } from "../homePage.js";

const body = document.querySelector("body");

export const modalUpdate = ({ title, content, id }) => {
  let divPrincipal = document.createElement("div");
  let divForm = document.createElement("div");
  let divHeader = document.createElement("div");
  let h2 = document.createElement("h2");
  let closeButton = document.createElement("button");
  let form = document.createElement("form");
  let labelTitle = document.createElement("label");
  let inputTitle = document.createElement("input");
  let labelContent = document.createElement("label");
  let inputContent = document.createElement("textarea");
  let divButtons = document.createElement("div");
  let buttonCancel = document.createElement("button");
  let buttonAdd = document.createElement("button");

  divPrincipal.classList.add("modal");
  divForm.classList.add("divForm");
  divHeader.classList.add("divHeader");
  divButtons.classList.add("divButtons");
  form.classList.add("form");
  form.id = `${id}`;
  form.addEventListener("submit", (event) => event.preventDefault());

  h2.classList.add("title-2");
  labelTitle.classList.add("text-3");
  labelContent.classList.add("text-3");
  inputTitle.classList = "text-3 input-default-modal";
  inputContent.classList = "text-3 textarea-modal";
  buttonCancel.classList = "button-default transparent-button-small";
  buttonAdd.classList = "button-default blue-button-small";

  h2.innerText = "Criando novo post";
  closeButton.innerText = "X";
  labelTitle.innerText = "Título do post";
  inputTitle.placeholder = "Digite o título aqui...";
  inputTitle.required = "required";
  inputTitle.name = "title";
  inputTitle.value = `${title}`;

  labelContent.innerText = "Conteúdo do post";
  inputContent.placeholder = "Desenvolva o conteúdo do post aqui";
  inputContent.required = "required";
  inputContent.name = "content";
  inputContent.value = `${content}`;

  buttonCancel.innerText = "Cancelar";
  buttonAdd.innerText = "Salva Alterações";
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
  form.append(labelTitle, inputTitle, labelContent, inputContent, divButtons);
  divHeader.append(h2, closeButton);
  divForm.append(divHeader, form);
  divPrincipal.appendChild(divForm);

  body.append(divPrincipal);

  function objectModal() {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const inputs = [...event.target];

      const body = {};

      inputs.forEach(({ name, value }) => {
        if (name) {
          body[name] = value;
        }
      });

      console.log(body);
      await requestUpdatePost(body, id);
      await renderPosts();
    });

    return form;
  }
};
