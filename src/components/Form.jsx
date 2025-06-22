// Importa React y dos hooks: useState para manejar el estado local y useEffect para manejar efectos secundarios.
import React, { useState, useEffect } from "react";

// Componente funcional llamado Form que recibe dos props:
// - addOrUpdateItem: función para agregar o actualizar un ítem.
// - itemToEdit: objeto que representa el ítem que se desea editar (si existe).
function Form ({ addOrUpdateItem, itemToEdit }) {
  
  // Estado local para almacenar el valor del input de texto.
  const [inputValue, setInputValue] = useState('');

  // Hook useEffect que se ejecuta cada vez que cambia itemToEdit.
  // Si hay un ítem para editar, se llena el input con su valor.
  // Si no, el input se limpia (se deja en blanco).
  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue('');
    }
  }, [itemToEdit]);

  // Función que se ejecuta al enviar el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página).

    // Si el input no está vacío (después de quitar espacios),
    // llama a la función addOrUpdateItem con el valor actual del input
    // y luego limpia el input.
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue);
      setInputValue('');
    }
  };

  // Retorna el JSX del formulario:
  // - Un input controlado (su valor está ligado al estado inputValue).
  // - Un botón que dice "Actualizar" si se está editando, o "Agregar" si es un nuevo ítem.
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado a medida que se escribe.
      />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

// Exporta el componente Form para que pueda usarse en otros archivos.
export default Form;
