const toast = (title, message) => {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container");

  const containerTitle = document.createElement("div");
  containerTitle.classList.add("containerTitle")
  
  const icon = document.createElement("img");
  icon.alt = `Mensagem de ${title}`;

  if (title == "Sua conta criada com sucesso!") {
    container.classList.add("successToast");
    icon.src = "../../images/check.png";
  }

  if (title == "DeleteSuccess!") {
    container.classList.add("successToast");
    icon.src = "../../images/check.png";
  }

  const textContainer = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.innerText = title;
  h3.classList.add("text-3")

  const span = document.createElement("span");
  span.innerText = `${message} `;
  span.classList.add("text-4")

  const a = document.createElement("a");
  a.href = "../login/login.html"
  a.innerText = "Acessar página de login"
  a.classList.add("text-4")

  containerTitle.append(icon, h3)
  textContainer.append(span, a);

  container.append(containerTitle, textContainer);

  body.appendChild(container);
};

export default toast;
