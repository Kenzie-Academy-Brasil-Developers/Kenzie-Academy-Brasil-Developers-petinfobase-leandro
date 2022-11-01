import { renderPosts } from "./homePage.js";
import {
  requestProfile,
  requestCreateNewPost,
  requestUpdatePost,
  requestDeletePost,
} from "./requests.js";

export const createNewPostForm = () => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  let h2 = document.createElement("h2");
  let spanTitle = document.createElement("span");
  let labelTitle = document.createElement("label");
  let inputTitle = document.createElement("input");
  let spanContent = document.createElement("span");
  let labelContent = document.createElement("label");
  let inputContent = document.createElement("textarea");
  let divButtons = document.createElement("div");
  let buttonCancel = document.createElement("button");
  let buttonAdd = document.createElement("button");

  divButtons.classList.add("divButtons");

  h2.classList.add("title-2");

  labelTitle.classList.add("text-3");
  inputTitle.classList = "text-3 input-default-modal";

  labelContent.classList.add("text-3");
  inputContent.classList = "text-3 textarea-modal";

  buttonCancel.classList = "button-default grey-button";
  buttonAdd.classList = "button-default blue-button-small";

  h2.innerText = "Criando novo post";

  labelTitle.innerText = "Título do post";
  inputTitle.placeholder = "Digite o título aqui...";
  inputTitle.required = "required";
  inputTitle.name = "title";

  labelContent.innerText = "Conteúdo do post";
  inputContent.placeholder = "Desenvolva o conteúdo do post aqui";
  inputContent.required = "required";
  inputContent.name = "content";

  buttonCancel.innerText = "Cancelar";
  buttonAdd.innerText = "Publicar";
  buttonAdd.type = "submit";

  buttonCancel.addEventListener("click", (event) => {
    const backgroundModal = document.getElementById("backgroundModal");
    event.preventDefault();
    backgroundModal.remove();
  });

  buttonAdd.addEventListener("click", objectModal);

  divButtons.append(buttonCancel, buttonAdd);
  spanTitle.append(labelTitle, inputTitle);
  spanContent.append(labelContent, inputContent);
  formulario.append(
    h2,
    labelTitle,
    inputTitle,
    labelContent,
    inputContent,
    divButtons
  );

  function objectModal() {
    const backgroundModal = document.getElementById("backgroundModal");
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();

      const inputs = [...event.target];

      const body = {};

      inputs.forEach(({ name, value }) => {
        if (name) {
          body[name] = value;
        }
      });

      // console.log(body);
      await requestCreateNewPost(body);
      await renderPosts();
      backgroundModal.remove();
    });
    // window.location.replace("../../pages/homePage/homePage.html");
    return formulario;
  }
  return formulario;
};

export const updateForm = ({ title, content, id }) => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  let h2 = document.createElement("h2");
  let spanTitle = document.createElement("span");
  let labelTitle = document.createElement("label");
  let inputTitle = document.createElement("input");
  let spanContent = document.createElement("span");
  let labelContent = document.createElement("label");
  let inputContent = document.createElement("textarea");
  let divButtons = document.createElement("div");
  let buttonCancel = document.createElement("button");
  let buttonAdd = document.createElement("button");

  divButtons.classList.add("divButtons");

  h2.classList.add("title-2");

  labelTitle.classList.add("text-3");
  inputTitle.classList = "text-3 input-default-modal";

  labelContent.classList.add("text-3");
  inputContent.classList = "text-3 textarea-modal";

  buttonCancel.classList = "button-default grey-button";
  buttonAdd.classList = "button-default blue-button-small";

  h2.innerText = "Criando novo post";

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
  buttonAdd.innerText = "Salvar alterações";
  buttonAdd.type = "submit";

  buttonCancel.addEventListener("click", (event) => {
    const backgroundModal = document.getElementById("backgroundModal");
    event.preventDefault();
    backgroundModal.remove();
    // window.location.replace("../../pages/homePage/homePage.html");
  });

  buttonAdd.addEventListener("click", objectModal);

  divButtons.append(buttonCancel, buttonAdd);
  spanTitle.append(labelTitle, inputTitle);
  spanContent.append(labelContent, inputContent);
  formulario.append(
    h2,
    labelTitle,
    inputTitle,
    labelContent,
    inputContent,
    divButtons
  );

  function objectModal() {
    const backgroundModal = document.getElementById("backgroundModal");
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();

      const inputs = [...event.target];

      const body = {};

      inputs.forEach(({ name, value }) => {
        if (name) {
          body[name] = value;
        }
      });

      await requestUpdatePost(body, id);
      await renderPosts();
      backgroundModal.remove();
    });

    return formulario;
  }
  return formulario;
};

export const deleteForm = (id) => {
  // console.log(id);
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  let h2 = document.createElement("h2");
  h2.classList.add("title-2");
  h2.innerText = "Confirmação de exclusão";

  let h4 = document.createElement("h4");
  h4.classList.add("text-delete");
  h4.innerText = "Tem certeza que deseja excluir este post?";

  let p = document.createElement("p");
  p.classList.add("text-2");
  p.innerText =
    "Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir";

  let divButtons = document.createElement("div");
  divButtons.classList.add("divButtonsRemove");

  let buttonCancel = document.createElement("button");
  buttonCancel.classList =
    "button alternativeButton button-default grey-button";
  buttonCancel.innerText = "Cancelar";

  buttonCancel.addEventListener("click", (event) => {
    // event.preventDefault();
    // window.location.replace("../../pages/homePage/homePage.html");
    const backgroundModal = document.getElementById("backgroundModal");
    event.preventDefault();
    backgroundModal.remove();
  });

  let buttonAdd = document.createElement("button");
  buttonAdd.innerText = "Sim, excluir este post";
  buttonAdd.classList = "createButton button-default red-button-small";
  buttonAdd.id = "buttonDeletePost";

  buttonAdd.addEventListener("click", objectModal);

  divButtons.append(buttonCancel, buttonAdd);
  formulario.append(h2, h4, p, divButtons);

  function objectModal() {
    const backgroundModal = document.getElementById("backgroundModal");

    formulario.addEventListener("submit", (event) => {
      event.preventDefault();

      requestDeletePost(id);
      // renderPosts();
      backgroundModal.remove();
      // window.location.replace("../../pages/homePage/homePage.html");
    });
    return formulario;
  }
  return formulario;
};

export const showForm = (post) => {
  const option = { year: "numeric", month: "long" || "short" || "numeric" };
  const locale = "pt-br";
  const dateNow = new Date(post.createdAt).toLocaleDateString(locale, option);
  const dateToUse = dateNow[0].toUpperCase() + dateNow.substr(1);

  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
      <span class="showPostHeader">
      <img src="${post.user.avatar}" alt="${post.user.username}">
      <p>${post.user.username}</p>
      <p>${dateToUse}</p>
      </span>

      <span class="showPostFeet">
      <h2 for="title" class="text-3">${post.title}</h2>
      <p class="text-3" style="overflow-wrap: break-word">${post.content}</p>
      </span>
      `
  );

  formulario.addEventListener("submit", async (event) => {
    await renderPosts();
  });

  return formulario;
};
