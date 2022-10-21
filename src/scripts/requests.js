import toast from "./toast.js";
import { getLocalStorage } from "./localStorage.js";

const baseURL = "http://localhost:3333/";

export async function requestLogin(body) {
  try {
    const request = await fetch(baseURL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok == true) {
      const response = await request.json();

      localStorage.setItem("user", JSON.stringify(response));

      window.location.assign("../homePage/homePage.html");
    } else {
      const pError = document.getElementById("error");
      const inputError = document.getElementById("password");

      inputError.classList.add("inputError");
      pError.classList.remove("hidde");
      console.log(request);
      return request;
    }
  } catch (err) {
    console.log(err);
  }
}



export async function requestRegister(body) {
  try {
    const request = await fetch(baseURL + "users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok) {
      const response = await request.json();

      toast("Sua conta criada com sucesso!", `Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: `);

      // setTimeout(() => {
      //   window.location.replace("../login/login.html");
      // }, 4000);
    } else {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function requestProfile(body) {
  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseURL + "users/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function requestCreateNewPost(body) {
  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseURL + "posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function requestFindAllPost(body) {
  const localStorage = getLocalStorage();

  try {
    const request = await fetch(baseURL + "posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
  } catch (err) {
    console.log(err);
  }
}
