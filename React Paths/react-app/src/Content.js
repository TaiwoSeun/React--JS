import React from "react";
import ItemList from "./ItemList";


const Content = ( { items, handleChecker, handleDeleter } ) => {
  return (
    <main>
        {items.length ? (
             <ItemList 
                items = {items}
                handleChecker = {handleChecker}
                handleDeleter = {handleDeleter}
             />
        ) : (<p style = {{marginTop : "2rem"}}>The list is empty..</p>)}
    </main>
  )
}

export default Content;