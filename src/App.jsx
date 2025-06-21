import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
 const [item, setItems] = useState([]);
 const [itemToEdit, setItemToEdit] = useState(null);
 useEffect(() => {
 const storedItems =
 JSON.parse(localStorage.getItem('items')) ||[];
 setItems(storedItems);
 }, []);
 useEffect(() => {
 localStorage.setItem('items', JSON.stringify(item));
 }, [item]);
 const addOrUpdateItem = (value) => {
 if (itemToEdit) {
 setItems(item.map(item => item.id === itemToEdit.id ? { ...item, value } : item))
 setItemToEdit(null);
 } else {
 setItems([...item, { id: Date.now(), value }]);
 }
 }; 
 const deleteItem = (id) => {
 setItems(item.filter(item => item.id !==id));
 };
 const editItem = (item) => {
 setItemToEdit(item);
 };
 return (
 <div className="App">
 <h1>CRUD con LocalStorage</h1>
 <Form
addOrUpdateItem={addOrUpdateItem}
itemToEdit={itemToEdit}/>
<List items={item}
deleteItem={deleteItem} editItem={editItem}/>
 </div>
 );
 }
export default App;