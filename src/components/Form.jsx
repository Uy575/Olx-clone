import './Form.css'
import { useDispatch } from 'react-redux';
import { userSearchValue } from '../Redux/ProductReducers';
function Form() {

  const dispatch = useDispatch();


  

  const onChangeHandler = e =>{
    console.log(e.target.value)
    dispatch(userSearchValue(e.target.value.toLocaleLowerCase()));
  }
 

  const onSubmit = e =>{
    e.preventDefault();

  }
 

  return (
      <form onSubmit={onSubmit}>
         
         <input className='inputField' type = 'text' placeholder = 'Search Product' onChange={onChangeHandler}/>
      </form>
  )
}

export default Form