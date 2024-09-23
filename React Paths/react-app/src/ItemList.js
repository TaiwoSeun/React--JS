import React from 'react'
import LineItem from './LineItem';

const ItemList = ( { items, handleChecker, handleDeleter } ) => {
  return (
        <ul>
             {items.map((item) => (
                  <LineItem
                     key={item.id}
                     item = {item}
                     handleChecker = {handleChecker}
                     handleDeleter = {handleDeleter}
                  />
             ))}
         </ul>
  )
}

export default ItemList