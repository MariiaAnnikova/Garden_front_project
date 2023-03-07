import React from 'react'

import s from './AllProductsCard.module.css'
import { addToCart } from '../../store/reducers/cart';
  import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';

export default function AllProductsCard({id, image, title, price, discont_price, count}) {

  const dispatch = useDispatch();
 

  const add_to_cart = () => dispatch(addToCart({id, title, image, discont_price, price, count}));
  
  const DiscountPrice = Math.round(((price - discont_price) / price) * 100);
 
  //DiscountPrice  !== 0 ? - { DiscountPrice} % : "No discount"

  return (
    <div className={s.all_products}>
 <div className={s.all_products_card}>
  <Link to = { `/product/${id}` }>
   <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
   <p>{ title } </p>
   </Link>
   <div className={s.price_all}> 

   
        <p className={s.discont_price}>
          {discont_price}
          <span>$</span>
        </p>
        {DiscountPrice !== 0 && <p>{price}$</p>}
        {DiscountPrice!== 0 && <p>-{DiscountPrice}%</p>}
      


     
         {/* 
         <p>{ DiscountPrice} ===0 ?  <p>'no dicount on this product'</p> :  <p>{ discont_price }, { DiscountPrice} </p> </p>*/}
 
   





  
   </div>
   <button onClick={add_to_cart} >Add to Cart</button>
   </div>

    </div>
  )
}
