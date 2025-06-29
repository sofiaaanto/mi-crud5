// Importa React para poder usar JSX.
import React from 'react';

// Componente funcional llamado Item.
// Recibe tres props:
// - item: el objeto que representa la evaluación (con nombre, asignatura y promedio).
// - deleteItem: función que se llama para eliminar el ítem.
// - editItem: función que se llama para comenzar a editar el ítem.
function Item({ item, deleteItem, editItem }) {
  return (
    // Cada evaluación se muestra dentro de una tarjeta con estilo personalizado.
    <div className="evaluacion-card">
      {/* Contenedor para los datos del alumno */}
      <div className="info">
        {/* Muestra el nombre del alumno */}
        <p><strong>Alumno:</strong> {item.value.nombre}</p>

        {/* Muestra la asignatura evaluada */}
        <p><strong>Asignatura:</strong> {item.value.asignatura}</p>

        {/* Muestra el promedio obtenido */}
        <p><strong>Promedio:</strong> {item.value.promedio.toFixed(1)}</p>

        {/* Si el promedio es 7.0, se muestra una etiqueta de "Destacado" */}
        {item.value.promedio === 7 && (
          <span className="destacado">Destacado</span>
        )}
      </div>

      {/* Contenedor para los botones de acción */}
      <div className="acciones">
        {/* Botón para editar el ítem.
            Cuando se hace clic, llama a la función editItem y le pasa el ítem completo */}
        <button className="editar" onClick={() => editItem(item)}>Editar</button>

        {/* Botón para eliminar el ítem.
            Cuando se hace clic, llama a la función deleteItem con el id del ítem */}
        <button className="eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda usarse en otros archivos.
export default Item;
