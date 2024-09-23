import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ( { item, handleChecker, handleDeleter } ) => {
  return (
            <li className="item" key={item.id}>
                     <input
                         onChange = {() => {handleChecker(item.id)}}
                         type="checkbox"
                         checked = {item.checked}
                     />
                     <label 
                         onDoubleClick = {() => {handleChecker(item.id)}}
                         style = {(item.checked) ? {textDecoration : "line-through", color : "green"} : null}
                     >{item.item}</label>
                     <FaTrashAlt
                         onClick = {() => {handleDeleter(item.id)}}
                         role="button"
                         tabIndex={0}
                         aria-label={`Delete ${item.item}`}
                     /> 
             </li>
  )
}

export default LineItem