// Importa React para poder usar JSX.
import React from 'react';

// Importa el componente Item, que representa cada elemento individual de la lista.
import Item from './Item';

// Componente funcional llamado List.
// Recibe tres props:
// - items: un arreglo de objetos, donde cada uno representa un ítem (por ejemplo, tareas).
// - deleteItem: función que se pasa a cada ítem para permitir su eliminación.
// - editItem: función que se pasa a cada ítem para permitir su edición.
function List({ items, deleteItem, editItem }) {
  return (
    // Se usa una lista desordenada (<ul>) para mostrar los ítems.
    <ul>
      {/* Se recorre el arreglo de ítems con map. Por cada ítem:
          - Se renderiza un componente <Item>
          - Se le pasa el objeto item, y las funciones deleteItem y editItem como props.
          - Se asigna una key única (obligatorio en listas en React) usando item.id */}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
}

// Exporta el componente List para que pueda usarse en otros archivos.
export default List;
