import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado para la lista de evaluaciones, se inicializa leyendo de localStorage
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('items');
    return saved ? JSON.parse(saved) : [];
  });

  // Estado para la evaluación que se está editando
  const [itemToEdit, setItemToEdit] = useState(null);

  // Guarda en localStorage cada vez que items cambie
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función para agregar o actualizar una evaluación
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => 
        item.id === itemToEdit.id ? { ...item, value } : item
      ));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Eliminar evaluación por id
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Preparar evaluación para editar
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <>
      <div className="frame titulo-container">
        <h1>Evaluación de Alumnos</h1>
      </div>

      <div className="frame form-container">
        <h2>Agregar Nueva Evaluación</h2>
        <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      </div>

      <div className="frame lista-container">
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </>
  );
}

export default App;
