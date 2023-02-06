
import './Home.css'
import Products from '../../components/Products';
import CarouselComp from '../../components/Carousel';
import ModalComp from '../../components/Modal';
import Form from '../../components/Form';
import FIlterOnUserSearch from '../../components/FIlterOnUserSearch';
import { useSelector } from 'react-redux'
import bottomLogo from '../../assets/olx-logo-2.png'

function Home() {
  const productState = useSelector((state)=>state.product)
  const {userSearchValue} = productState;
   
  return (

         
    <div>
         
        <Form/>
        <ModalComp/>
        <br/>
        <div style={{marginLeft:'1rem'}}>
          <span> <img style={{marginBottom:'0.3rem'}} src={bottomLogo} alt='Logo' height='25px'/> </span>
          ALL CATEGORIES - Mobile | Phones | Cars | Motorcycles | Houses | TV - Video-Audio | Tablets | Land & Plots</div>
        <CarouselComp/>

        {
          userSearchValue?  <FIlterOnUserSearch/> :  <Products/>
        }

    
       
       

            

    </div>
  )
}

export default Home;