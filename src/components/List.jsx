// Importa React para poder usar JSX.
import React from 'react';

// Importa el componente Item, que representa cada elemento individual de la lista.
import Item from './Item';

// Componente funcional llamado List.
// Recibe tres props:
// - items: un arreglo de objetos, donde cada uno representa una evaluación.
// - deleteItem: función que se pasa a cada ítem para permitir su eliminación.
// - editItem: función que se pasa a cada ítem para permitir su edición.
function List({ items, deleteItem, editItem }) {
  return (
    // Se usa un contenedor <div> en lugar de <ul> para mostrar las evaluaciones como tarjetas.
    <div className="evaluaciones">
      <h2>Evaluaciones Guardadas</h2>

      {/* Se recorre el arreglo de ítems con map. Por cada ítem:
          - Se renderiza un componente <Item>
          - Se le pasa el objeto item, y las funciones deleteItem y editItem como props.
          - Se asigna una key única (obligatorio en listas en React) usando item.id */}
      {items.length === 0 ? (
        <p>No hay evaluaciones aún.</p>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))
      )}
    </div>
  );
}

// Exporta el componente List para que pueda usarse en otros archivos.
export default List;
