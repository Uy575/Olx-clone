import './Form.css'
import { useDispatch } from 'react-redux';
import { userSearchValue } from '../Redux/ProductReducers';
import topLogo from '../assets/olxLogo.png'
function Form() {

  const dispatch = useDispatch(); // to send value to redux


  //function to handle on change user search value
  const onChangeHandler = e =>{
    console.log(e.target.value)
    dispatch(userSearchValue(e.target.value.toLocaleLowerCase()));
  }
 
 //function when form submitted
  const onSubmit = e =>{
    e.preventDefault();

  }
 

  return (
      <form onSubmit={onSubmit}>
        <div>
        <span> <img src={topLogo} height='70rem' style={{position:'absolute',top:'15px',left:'40px'}} alt='Logo'/> </span>
         <input className='inputField' type = 'text' placeholder = 'Search Product' onChange={onChangeHandler}/>
        </div>
      </form>
  )
}

export default Form