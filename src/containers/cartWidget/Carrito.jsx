
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CarContext';
// import Order from "./Order"
import style from "./style.module.css";
import Orden from './Orden';
// import Swal from "sweetalert2";
// import { useEffect } from 'react';
import ItemListConatainer from "../itemListContainer"
export default function Carrito() {

//      const {carrito,precioTotal,clearCart} = useCartContext();  
// console.log('entra')
//     const Vaciar = () => {
//        clearCart();
//     }
//  const error = () => {
//     Swal.fire({
//         title: `No existen productos en el carrito.`,
//         icon: "error",
//         confirmButtonText : "Aceptar"
//      })
//  }   
const { carrito, precioTotal, clearCart } = useCartContext();

// const handleVaciar = () => {
//     clearCart();
// }

return (
<div className={style["carrito-contenedor"]}>
    <h1 className={style["carrito-titulo"]}>Marroquineria-Carrito</h1>

    {
        carrito.map((prod) => (
            <div key={prod.id}className={style["card-detalle"]}>
                <br />
                <p className={style["title-CarritoDetalle"]}>{prod.titulo}</p>
                <p className={style["descripcionDetalle"]}>Precio unit: ${prod.precio}</p>
                <p className={style["precioDetalle"]}>Precio total: ${prod.precio * prod.cantidad}</p>
                <p className={style["cantidadDetalle"]}>Cantidad: {prod.cantidad}</p>
                <img className={style["imagen"]} src={prod.imagen} alt="" />
                <br />
            </div>
        ))
    }

    {  
  
        carrito.length > 0 ?
        <>
            <h2 className={style["titulo-PrecioTotal"]}>Precio total: ${precioTotal()}</h2>           
            <Link className={style[""]}><Orden/></Link>
            
        </> 
        :    
        <> 
        <p className={style["title-Gracias"]}>¡Muchas gracias por tu compra!</p>
       <Link to= "/" className={style["btn-volver"]} >Volver al Inicio</Link></> 
        
    }
    
</div>
)


}

