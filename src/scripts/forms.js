import { renderPosts } from "./homePage.js";
import {
  requestProfile,
  requestCreateNewPost,
  requestUpdatePost,
  requestDeletePost,
} from "./requests.js";
// import openModal from "./modal.js";
// import { cancelButton } from "./homePage.js";


const cancelButton = async () => {
  const cancel = document.querySelector(".cancelButton")
  console.log(cancel);
  // window.location.replace("../../pages/homePage/homePage.html");
}


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
      <textarea class="text-3 textarea-modal" placeholder="Desenvolva o conteúdo do post aqui" name="content" required></textarea>
      </span>

      <div class="divButtons">
      <button onclick="${cancelButton()}" class="cancelButton button alternativeButton button-default transparent-button-small">Cancelar</button>
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
        <input style="overflow-wrap: break-word" class="text-3 textarea-modal" placeholder="Digitar Descrição" value="${content}" name="content" required>
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




// const formulario = document.createElement("form");
//   formulario.classList.add("formbase");

//   let h2 = document.createElement("h2");
//   let spanTitle = document.createElement("span");
//   let labelTitle = document.createElement("label");
//   let inputTitle = document.createElement("input");
//   let spanContent = document.createElement("span");
//   let labelContent = document.createElement("label");
//   let inputContent = document.createElement("textarea");
//   let divButtons = document.createElement("div");
//   let buttonCancel = document.createElement("button");
//   let buttonAdd = document.createElement("button");

//   divButtons.classList.add("divButtons");

//   h2.classList.add("title-2");
//   labelTitle.classList.add("text-3");
//   labelContent.classList.add("text-3");
//   inputTitle.classList = "text-3 input-default-modal";
//   inputContent.classList = "text-3 textarea-modal";
//   buttonCancel.classList = "button-default transparent-button-small";
//   buttonAdd.classList = "button-default blue-button-small";

//   h2.innerText = "Criando novo post";

//   labelTitle.innerText = "Título do post";
//   inputTitle.placeholder = "Digite o título aqui...";
//   inputTitle.required = "required";
//   inputTitle.name = "title";

//   labelContent.innerText = "Conteúdo do post";
//   inputContent.placeholder = "Desenvolva o conteúdo do post aqui";
//   inputContent.required = "required";
//   inputContent.name = "content";

//   buttonCancel.innerText = "Cancelar";
//   buttonAdd.innerText = "Publicar";
//   buttonAdd.type = "submit";

//   buttonCancel.addEventListener("click", (event) => {
//     event.preventDefault();
//     window.location.replace("../../pages/homePage/homePage.html");
//   });

//   buttonAdd.addEventListener("click", objectModal);

//   divButtons.append(buttonCancel, buttonAdd);
//   spanTitle.append(labelTitle, inputTitle);
//   spanContent.append(labelContent, inputContent);
//   formulario.append(
//     h2,
//     labelTitle,
//     inputTitle,
//     labelContent,
//     inputContent,
//     divButtons
//   );

//   // body.append(formulario);
//   function objectModal() {
//     const formulario = document.querySelector("form");
//     formulario.addEventListener("submit", async (event) => {
//       event.preventDefault();
  
//       const inputs = [...event.target];
  
//       const body = {};
  
//       inputs.forEach(({ name, value }) => {
//         if (name) {
//           body[name] = value;
//         }
//       });
  
//       // console.log(body);
//       await requestCreateNewPost(body);
//       await renderPosts();
//     });
  
//     return formulario;
//   }
// };