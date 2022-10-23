import {
  createNewPostForm,
  updateForm,
  deleteForm,
  showForm,
  logOutForm,
} from "./forms.js";
import { getLocalStorage } from "./localStorage.js";
import { requestProfile } from "./requests.js";
import { requestFindAllPost } from "./requests.js";
// import { modalAdicionar } from "./modals/modalNewPost.js";
// import { modalUpdate } from "./modals/modalEditPost.js";
// import { modalDelete } from "./modals/modalDeletePost.js";
import openModal from "./modals.js";

const ul = document.getElementById("ulPosts");

export const verifyPermission = () => {
  const user = getLocalStorage();
  console.log(user);
  if (user == "") {
    window.location.replace("../../pages/login/login.html");
  }
};

export const renderUserImage = async () => {
  const user = await requestProfile();
  const img = document.querySelectorAll(".UserIMG");

  console.log(user);

  img.forEach((element) => (element.src = user.avatar));

  img.src = user.avatar;

  // image.addEventListener("click", (element) => {
  //   const leaveModal = logOutForm(element)
  //   openModal(leaveModal)
  // })
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

    const option = { year: "numeric", month: "long" || "short" || "numeric" };
    const locale = 'pt-br'
    const dateNow = new Date(post.createdAt).toLocaleDateString( locale, option)
    const dateToUse = dateNow[0].toUpperCase() + dateNow.substr(1)

    // console.log(dateToUse);

    img.src = post.user.avatar;
    name.innerText = post.user.username;
    date.innerText = dateToUse;

    buttonEdit.innerText = "Editar";

    buttonEdit.addEventListener("click", () => {
      const formUpdate = updateForm(post);
      openModal(formUpdate);
    });

    buttonDelete.innerText = "Excluir";

    buttonDelete.addEventListener("click", () => {
      const deletePost = deleteForm(post);
      openModal(deletePost);
    });

    h2.innerText = post.title;
    p.innerText = post.content;
    p.classList = "postBoxText"
    
    a.innerText = "Acessar publicação";

    a.addEventListener("click", (event) => {
      event.preventDefault();
      const showPost = showForm(post);
      openModal(showPost);
    });

    divUser.append(img, name, date);
    divButtons.append(buttonEdit, buttonDelete);
    divTopCard.append(divUser, divButtons);
    divPost.append(h2, p, a);
    divPrincipal.append(divTopCard, divPost);

    li.appendChild(divPrincipal);
    ul.appendChild(li);
  });
};

export const createNewPost = () => {
  const buttonCreatePost = document.getElementById("createNewPost");

  buttonCreatePost.addEventListener("click", async () => {
    const formCreate = createNewPostForm();
    openModal(formCreate);
  });
};

// export const cancelButton = (event) => {
//   const cancel = document.querySelector(".cancelButton")
//   cancel.addEventListener("click", (e) => {
//     console.log(cancel);
    
//     // window.location.replace("../../pages/homePage/homePage.html");
//   })
//   // cancel.forEach((button) => console.log(button))


// }