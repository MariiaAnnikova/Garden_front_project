import React from 'react'

import s from './AllProductsCard.module.css'
import { addToCart } from '../../store/reducers/cart';
  import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';

export default function AllProductsCard({id, image, title, price, discont_price, count}) {

  const dispatch = useDispatch();
 

  const add_to_cart = () => dispatch(addToCart({id, title, image, discont_price, price, count}));
  

 

  return (
    <div className={s.all_products}>
 <div className={s.all_products_card}>
  <Link to = { `/product/${id}` }>
   <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
   <p>{ title } </p>
   </Link>
   <div className={s.price_all}> 
   <p> { price } $  </p>
   <p> {discont_price} $ </p>
   <p> - 7 %  </p>
   </div>
   <button onClick={add_to_cart} >Add to Cart</button>
   </div>

    </div>
  )
}
