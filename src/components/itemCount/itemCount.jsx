import React from "react";
import style from './style.module.css'

const ItemCount = ( {cantidad, Restar, Sumar, handleAgregar} ) => {

    return (
      <div>
  
          <div className={style["Agregar"]}>
              <button className={style["botonAgregar"]} onClick={Restar}>-</button>
              <p>{cantidad}</p>
              <button className={style["botonAgregar"]} onClick={Sumar}>+</button>
          </div>
          <button className={style["boton"]} onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    )
  }
  
  export default ItemCount