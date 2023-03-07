
import React from 'react'
import {Link }from 'react-router-dom'
import s from './ProductCategoryCard.module.css'

export default function ProductCategoryCard({ id, title, image}) {
  return (
    <div className={s.category_card}> 
    <Link to={`categories/${id}`} >
   <img src={`http://127.0.0.1:3333${image}`} alt = {title } />
  
   
</Link>
</div>
  )
  }