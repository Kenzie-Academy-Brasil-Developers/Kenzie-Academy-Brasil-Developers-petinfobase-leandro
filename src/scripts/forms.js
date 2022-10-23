import { renderPosts } from "./homePage.js";
import {
  requestProfile,
  requestCreateNewPost,
  requestUpdatePost,
  requestDeletePost,
} from "./requests.js";
// import openModal from "./modal.js";

export const createNewPostForm = () => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
        <h3 class="title-2">Criando novo post</h3>

        <span>
        <label for="title" class="text-3">Título do post</label>
        <input class="text-3 input-default-modal" placeholder="Digite o título aqui..." name="title" required>
        </span>

        <span>
        <label for="content" class="text-3">Conteúdo do post</label>
        <input class="text-3 textarea-modal" placeholder="Desenvolva o conteúdo do post aqui" name="content" required>
        </span>

        <div class="divButtons">
        <button onclick="" class="button alternativeButton button-default transparent-button-small">Cancelar</button>
        <button class="button button-default blue-button-small" type="submit">Publicar</button>
        </div>
        `
  );

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputs = [...event.target];

    const body = {};

    inputs.forEach(({ name, value }) => {
      if (name) {
        body[name] = value;
      }
    });

    await requestCreateNewPost(body);
    await renderPosts();
  });

  return formulario;
};

export const updateForm = ({ title, content, id }) => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
        <h3 class="title-2">Edição</h3>
        
        <span>
        <label for="title" class="text-3">Título do post</label>
        <input class="text-3 input-default-modal" placeholder="Digitar Titulo" name="title" value="${title}" required>
        </span>
        
        <span>
        <label for="content" class="text-3">Conteúdo do post</label>
        <input class="text-3 textarea-modal" placeholder="Digitar Descrição" value="${content}" name="content" required>
        </span>
        
        <div class="divButtons">
            <button onclick="" class="button alternativeButton button-default transparent-button-small">Cancelar</button>
            <button class="button button-default blue-button-small" type="submit">Salvar alterações</button>
        </div>
    `
  );

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
  });

  return formulario;
};

export const deleteForm = (id) => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
        <h3 class="title-2">Confirmação de exclusão</h3>
        <h4 class="text-delete">Tem certeza que deseja excluir este post?</h4>
        <p clas="text-2">Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
        <div class="divButtonsRemove">
        <button onclick="" class="button alternativeButton button-default transparent-button-small">Cancelar</button>
        <button type="submit" class="createButton button-default red-button-small">Sim, excluir este post</button>
        </div>
    `
  );

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    await requestDeletePost(id);
    await renderPosts();
  });

  return formulario;
};

export const showForm = ({ avatar, username, createdAt, title, content }) => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
      <span class="showPostHeader">
      <img src="${avatar}" alt="${username}">
      <p>${username}</p>
      <p>${createdAt}</p>
      </span>

      <span class="showPostFeet">
      <h2 for="title" class="text-3">${title}</h2>
      <p class="text-3">${content}</p>
      </span>
      `
  );

  formulario.addEventListener("submit", async (event) => {

    await renderPosts();

  });

  return formulario;
};

export const logOutForm = ({ username }) => {
    const formulario = document.createElement("form");
    formulario.classList.add("formbase");
  
    formulario.insertAdjacentHTML(
      "beforeend",
      `
        <span class="showPostHeader">
        <p>${username}</p>
        </span>
  
        <span class="showPostFeet">
        <img src="../images/sign-out-alt.png" alt="logout icon">
        <button for="title" class="text-3">Sair da conta</button>
        </span>
        `
    );
  
    formulario.addEventListener("submit", async (event) => {
  
      await renderPosts();
  
    });
  
    return formulario;
  };