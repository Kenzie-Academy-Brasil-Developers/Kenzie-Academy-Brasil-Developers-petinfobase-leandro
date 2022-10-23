import openModal from "./modals.js";

const openModalDeleteHabit = (id) => {
  const deleteForm = deleteHabitForm(id);
  openModal(deleteForm);
};

const deleteHabitForm = (id) => {
  const formulario = document.createElement("form");
  formulario.classList.add("formbase");

  formulario.insertAdjacentHTML(
    "beforeend",
    `
        <h3>Deletar Habíto</h3>
        <h4>Certeza que deseja excluir este hábito?</h4>
        <p>Após executar essa ação não será possível desfazer</p>
        <div>
            <button type="submit" class="createButton">Deletar habito</button>
        </div>
    `
  );

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    await deleteHabit(id);
    await renderList();
  });

  return formulario;
};
