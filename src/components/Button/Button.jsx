import React from 'react'
import s from './Button.module.css'

export default function Button({children}) {
  return (
    <button className={s.btn_catalog}>
        { children }
    </button>


  )
}
