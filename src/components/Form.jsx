import './Form.css'
import { useDispatch } from 'react-redux';
import { userSearchValue } from '../Redux/ProductReducers';
import topLogo from '../assets/olxLogo.png'
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
        <div>
        <span> <img src={topLogo} height='70rem' style={{position:'absolute',top:'15px',left:'40px'}}/> </span>
         <input className='inputField' type = 'text' placeholder = 'Search Product' onChange={onChangeHandler}/>
        </div>
      </form>
  )
}

export default Form