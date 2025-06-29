// Importa React y dos hooks: useState para manejar el estado local y useEffect para manejar efectos secundarios.
import React, { useState, useEffect } from "react";

// Componente funcional llamado Form que recibe dos props:
// - addOrUpdateItem: función para agregar o actualizar un ítem.
// - itemToEdit: objeto que representa el ítem que se desea editar (si existe).
function Form({ addOrUpdateItem, itemToEdit }) {

  // Estado local para almacenar los valores de nombre, asignatura y promedio.
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  // Hook useEffect que se ejecuta cada vez que cambia itemToEdit.
  // Si hay un ítem para editar, se llenan los inputs con sus valores.
  // Si no, los inputs se limpian (se dejan en blanco).
  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.value.nombre);
      setAsignatura(itemToEdit.value.asignatura);
      setPromedio(itemToEdit.value.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  // Función que se ejecuta al enviar el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página).

    // Verifica que todos los campos estén completos antes de continuar.
    if (nombre.trim() && asignatura.trim() && promedio !== '') {
      // Crea un objeto con los valores actuales del formulario.
      const value = {
        nombre,
        asignatura,
        promedio: parseFloat(promedio),
      };

      // Llama a la función addOrUpdateItem con el objeto de valores.
      addOrUpdateItem(value);

      // Limpia los campos del formulario.
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  };

  // Retorna el JSX del formulario:
  // - Tres inputs controlados para nombre, asignatura y promedio.
  // - Un botón que dice "Actualizar Evaluación" si se está editando, o "Agregar Evaluación" si es un nuevo ítem.
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del Alumno: </label>
      <input
        type="text"
        placeholder="Ej: Juan Pérez"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label>Asignatura: </label>
      <input
        type="text"
        placeholder="Ej: Matemáticas"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <label>Promedio(0.0 - 7.0): </label>
      <input
        type="number"
        placeholder="Ej: 5.5"
        min="0"
        max="7"
        step="0.1"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
      </button>
    </form>
  );
}

// Exporta el componente Form para que pueda usarse en otros archivos.
export default Form;
