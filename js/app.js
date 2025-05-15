const aniadirtarea = (e) => {
    e.preventDefault();
  
    const tarea = document.getElementById("tarea").value.trim();
    const listaul = document.querySelector(".list-group");
  
    if (tarea !== "") {
      listaul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${tarea}
          <button type="button" class="btn btn-danger btn-sm eliminar">Eliminar tarea</button>
        </li>
      `;
    }
  
    formenviar.reset();
  };
  const eliminarBoton = (e) => {
    if (e.target.classList.contains("eliminar")) {
      e.target.parentElement.remove();
    }
  };
  // agarrar form y lista
  const formenviar = document.getElementById("formtarea");
  const listaul = document.getElementById("ultarea");
  
  // eventos
  formenviar.addEventListener("submit", aniadirtarea);
  listaul.addEventListener("click", eliminarBoton);
  