import React from 'react'
import './Form.css'
import AddButton from './Buttons/AddAndSeachButton';
function Form({type,placeholder}) {
  return (
      <form>
         
         <input className='inputField' type = {type} placeholder = {placeholder}/>
         <AddButton buttonValue='SEARCH ITEM'/>

      </form>
  )
}

export default Form