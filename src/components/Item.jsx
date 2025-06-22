// Importa React para poder usar JSX.
import React from 'react';

// Componente funcional llamado Item.
// Recibe tres props:
// - item: el objeto que representa el ítem (por ejemplo, una tarea).
// - deleteItem: función que se llama para eliminar el ítem.
// - editItem: función que se llama para comenzar a editar el ítem.
function Item({ item, deleteItem, editItem }) {
  return (
    // Cada ítem se muestra como un elemento de lista (li).
    <li>
      {/* Muestra el valor del ítem (por ejemplo, el texto de una tarea) */}
      {item.value}
      
      {/* Botón para editar el ítem.
          Cuando se hace clic, llama a la función editItem y le pasa el ítem completo */}
      <button onClick={() => editItem(item)}>Editar</button>

      {/* Botón para eliminar el ítem.
          Cuando se hace clic, llama a la función deleteItem con el id del ítem */}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

// Exporta el componente para que pueda usarse en otros archivos.
export default Item;
