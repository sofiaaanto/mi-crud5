import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado para almacenar la lista de ítems
  const [item, setItems] = useState([]);

  // Estado para saber si se está editando un ítem existente
  const [itemToEdit, setItemToEdit] = useState(null);

  // useEffect que se ejecuta solo una vez al cargar la app
  // Recupera los ítems almacenados previamente en localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // useEffect que se ejecuta cada vez que cambia "item"
  // Guarda los ítems en localStorage para mantenerlos persistentes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(item));
  }, [item]);

  // Función para agregar un nuevo ítem o actualizar uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un ítem para editar, lo actualiza en la lista
      setItems(item.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null); // Limpia el estado de edición
    } else {
      // Si no hay ítem para editar, crea uno nuevo con id único
      setItems([...item, { id: Date.now(), value }]);
    }
  };

  // Función para eliminar un ítem por su id
  const deleteItem = (id) => {
    setItems(item.filter(item => item.id !== id));
  };

  // Función que establece qué ítem será editado (al hacer clic en "editar")
  const editItem = (item) => {
    setItemToEdit(item);
  };

  // Renderiza la interfaz con el formulario y la lista de ítems
  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />
      <List
        items={item}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
