import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  /* declaring and assigning variable in jsx..
  //  const name = "Seun";

  //this is how to Create a function in react.. it's called arrow function.
  const handleNames = () => {
    const names = ['Seun', 'Taiwo', 'Emmanuel'];
    const num = Math.floor(Math.random() * 3);
    return names[num];
  }*/
 
    //Using the useState and setting the hooks.. with a list of an array of object as the default hook state.
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('recipelist')))

  //useState hook to hold the get and set of the item to be added to the list..
  const [newItem, setNewItem] = useState('')
  
  
  // Function to set and save items...
    const setAndSaveItems = (newItems) => {
        setItems(newItems)
        //This is to store the item that is checked into the local storage and it can be fetch back to be re-used.
        localStorage.setItem('recipelist', JSON.stringify(newItems))
    }

  // Arrow function to add new item to the item list
    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1
      const myNewItem = {id, checked : false, item}
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems)
  }
 
   //To Handle the checklist to change amidst the list items, lets create another arrow func..
    const handleChecker = (id) => {
    const listItems = items.map((item) => (item.id === id) ? {...item, checked : !item.checked} : item)
    setAndSaveItems(listItems)
}

    //To Delete from the list of items..
    const handleDeleter = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
}

// Arrow function that handle the submit with an event..
const handleSubmit = (e) => {
  e.preventDefault()
  if (!newItem) return
  //addItem
  addItem(newItem)
  setNewItem('');
}

  return (
    <div className="App">
        {/* <h2>Hello! this is my first react project</h2>
        <p>This is a new react project by {handleNames()}</p> */}

        <Header title = "Recipes List"/>
       <AddItem 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
       />
        <Content 
          items = {items}
          handleChecker = {handleChecker}
          handleDeleter = {handleDeleter}
        />
        <Footer length = {items.length}/>
    </div>
  );
}

export default App;
