
import './Home.css'
import Products from '../../components/Products';
import CarouselComp from '../../components/Carousel';
import ModalComp from '../../components/Modal';
import Form from '../../components/Form';
function Home() {
   
   
  return (
         
    <div>
    
         <Form/>
        <ModalComp/>
        <br/>
        {/* <span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/OLX_Logo.jpg/922px-OLX_Logo.jpg' height='250px'/> </span> */}
        <div>ALL CATEGORIES - Mobile | Phones | Cars | Motorcycles | Houses | TV - Video-Audio | Tablets | Land & Plots</div>
        <CarouselComp/>
        <Products/>

            

    </div>
  )
}

export default Home;