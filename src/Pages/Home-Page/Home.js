import ProductList from '../../components/Product-list'
import AddItem from '../../components/Add-item';
import SearchItem from '../../components/Search-item';
import './Home.css'
import Porducts from '../../components/Porducts';
function Home() {
   
   
  return (
         
    <div>
    
        <SearchItem/>
        <AddItem/>
        <Porducts/>
            

    </div>
  )
}

export default Home;