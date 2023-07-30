// Función para cambiar el modo de la página
const toggleDarkMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    const btnSun = document.getElementById("btn-sun");
    const btnMoon = document.getElementById("btn-moon");
  
    // Si el body tiene la clase "dark-mode", mostramos el botón de sol y ocultamos el botón de luna
    if (body.classList.contains("dark-mode")) {
      btnSun.style.display = "inline-block";
      btnMoon.style.display = "none";
    } else {
      // Si el body no tiene la clase "dark-mode", mostramos el botón de luna y ocultamos el botón de sol
      btnSun.style.display = "none";
      btnMoon.style.display = "inline-block";
    }
  };
  
  // Función para cambiar el estado del botón y aplicar los estilos correspondientes
  const changeButtonState = () => {
    const body = document.querySelector("body");
  
    // Obtiene el valor actual del botón y lo convierte a un número
    let currentValue = parseInt(body.dataset.fontSize);
  
    // Aumenta el valor actual en 1 y reinicia el ciclo cuando llega a 3
    currentValue = (currentValue % 3) + 1;
  
    // Actualiza el valor del tamaño de fuente en el atributo "data-font-size"
    body.dataset.fontSize = currentValue.toString();
  
    // Aplica los estilos correspondientes a todos los elementos según el valor actual
    body.classList.remove("normal-font", "medium-font", "large-font");
    if (currentValue === 1) {
      body.classList.add("normal-font");
    } else if (currentValue === 2) {
      body.classList.add("medium-font");
    } else {
      body.classList.add("large-font");
    }
  };
  
  const regionSelect = document.getElementById("Select1");
  
  const fillComunaOptions = () => {
    const region = regionSelect.value;
    const comunas = comunasPorRegion[region] || [];
  
    const comunaSelect = document.getElementById("Select2");
    comunaSelect.innerHTML = '<option value="" disabled selected>comuna</option>';
  
    for (const comuna of comunas) {
      const option = document.createElement("option");
      option.textContent = comuna;
      option.value = comuna;
      comunaSelect.appendChild(option);
    }
  };
  
  regionSelect.addEventListener("change", fillComunaOptions);
  
  const almacenar = () => {
    /* Inicio almacenar contenido de los id */
    const name = document.getElementById("name").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const genero = getSelectedGender();
    const direccion = document.getElementById("FormControlInput5").value.trim();
    const numero = document.getElementById("FormControlInput6").value.trim();
    const region = getSelectedOptionValue("Select1");
    const comuna = getSelectedOptionValue("Select2");
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const asunto = getSelectedAsunto();
    const contenido = document.getElementById("content").value.trim();
    /* Fin almacenar contenido de los id */

    /* Inicio verificar el tipo de dato */
    if (typeof name !== "string") {
      console.log("El nombre debe ser un string");
      return;
    }
    if (typeof apellido !== "string") {
      console.log("El apellido debe ser un string");
      return;
    }
    // Verificar otros campos si es necesario...
    /* Fin verificar tipo de dato */

    /* Inicio contenido persona */
    const persona = {
      "name": name,
      "apellido": apellido,
      "genero": genero,
      "direccion": direccion,
      "numero": numero,
      "region": region,
      "comuna": comuna,
      "email": email,
      "telefono": telefono,
      "asunto": asunto,
      "contenido": contenido
    };
    console.log(persona);
    /* Fin contenido persona */

    let listadoAntiguoStr = localStorage.getItem("alumnos");
    let listadoAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listadoAntiguo);
    if (listadoAntiguo == null) {
      var listadoNuevo = [persona];
    } else {
      var listadoNuevo = [...listadoAntiguo, persona];
    }
    localStorage.setItem("alumnos", JSON.stringify(listadoNuevo));

    // Llamar aquí a una función para mostrar los datos en la tabla, si deseas.
    // Por ejemplo, puedes crear una función llamada renderTable(listadoNuevo)
    // y llamarla aquí después de almacenar los datos.

  }

  document.getElementById("btn").addEventListener("click", almacenar);
  
  
  const comunasPorRegion = {
    Tarapaca: ["Iquique", "Alto Hospicio", "Pozo Almonte"],
    Antofagasta: ["Antofagasta", "Calama", "Tocopilla"],
    Atamaca: ["Copiapó", "Vallenar", "Chañaral"],
  };

  // Establecer el valor inicial del tamaño de fuente en 0 al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.dataset.fontSize = "0";
  });
  const almacenar = () => {
    // ... Tu código existente para recolectar los datos ...
  
    // Agregar el objeto persona a la tabla
    const tablaDatos = document.getElementById("tablaDatos");
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${genero}</td>
      <td>${direccion}</td>
      <td>${numero}</td>
      <td>${region}</td>
      <td>${comuna}</td>
      <td>${email}</td>
      <td>${telefono}</td>
      <td>${asunto}</td>
      <td>${contenido}</td>
    `;
    tablaDatos.appendChild(fila);
  
    // Resto del código para almacenar en localStorage ...
  };

  
  document.getElementById("btn-sun").addEventListener("click", toggleDarkMode);
  document.getElementById("btn-moon").addEventListener("click", toggleDarkMode);
  document.getElementById("up-nav").addEventListener("click", changeButtonState);

  // Escuchar