import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { postProduct,editProduct,getProducts } from '../../JS/actions/product/product'
import '../../App.css';
import Navbar1 from '../Navbar1/Navbar1'
import Footer from '../footer/index'
import Cards from '../Cards/Cards'



export default function Meubles() {
 const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProducts())
}, [])
const products = useSelector(state => state.produtReducer.products)

  return <h1 className='meubles'>
      <Navbar1 />
     
{ products.filter(el=>el.category==="Meubles").map(el=> <Cards product={el} />)}


      <Footer />

      
     </h1>;

}