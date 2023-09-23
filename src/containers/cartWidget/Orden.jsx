/* eslint-disable no-undef */
import React, { useState } from 'react'
import { useCartContext } from '../../context/CarContext';
import { collection, addDoc} from "firebase/firestore";
import { db } from '../../firebase/client';
import style from "./style.module.css";

const Orden = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, clearCart } = useCartContext();
//****************limpiar**************************** */  
    const handleVaciar = () => {
        clearCart();
    }     
// *************CAPTURAR DATOS**********************
const valorInicial = {
    nombre: '',
    email: '',
    telefono: ''
}
const [user,setUser] = useState(valorInicial)

const capturarInput = (e)=>{
    const {name,value}= e.target;
    setUser({...user, [name]:value})
}

const guardarDatos = async(e)=> {
    e.preventDefault();
    try{
        const pedidosRef = collection(db, "orders");
       await addDoc(pedidosRef,{
          cliente :{ ...user}, 
          productos: carrito,
          total: precioTotal(),
         }).then((doc) => {
            setPedidoId(doc.id);
            
        })
    }catch(error){

        console.log('error');
    }

    setUser({...valorInicial})
}


// **********************************************

    //*******************************CREAR ORDEN***************/

    // const pedidosRef = collection(db, "orders");
    // const crearCompra = () => {
    //     const pedido = {
    //         cliente :{ ...user}, 
    //         // cliente: {name: "silvia",email:"syl@gmail.com",telefono:"12345678"},
    //         productos: carrito,
    //         total: precioTotal()
    //     }
    //     console.log(pedido);

    //     addDoc(pedidosRef, pedido)
    //         .then((doc) => {
    //             setPedidoId(doc.id);
    //             // console.log('pedidoId');
    //             //console.log(doc.id);
    //             // clearCart();
    //         })
    // }

    if (pedidoId) {
        return (
            <div className={style["container-finCompraId"]}>
                {/* <p className={style["title-Gracias"]}>¡Muchas gracias por tu compra!</p> */}
                <p className={style["nroPedido"]}>Tu número de pedido es: {pedidoId}</p>
                <button className={style["btn-limpiar"]} onClick={handleVaciar}>Finalizar Compra.</button>
            </div>

        )
    }


    // *******************MODIFICAR ORDEN**************************
    //Hacer un update de un DOC
    // const updateOrder = (id) => {
    //     const orderToUpdate = doc(db, "orders", id)
    //     updateDoc(orderToUpdate, { total: 99 }) // Segundo parametro: Los campos que quiero updatear
    // }


    return (
        <div className={style["contenedor-finalizarCompra"]}>
            <h1 className="main-title">Finalizar compra</h1>

            <form onSubmit={guardarDatos} className={style["formulario-finalizarCompra"]}>
                <input name="nombre" type="text" placeholder="Ingresá tu nombre" onChange={capturarInput} value={user.nombre} />
                <input name="email" type="email" placeholder="Ingresá tu e-mail" onChange={capturarInput} value={user.email} />
                <input name="telefono" type="phone" placeholder="Ingresá tu teléfono" onChange={capturarInput} value={user.telefono} />
                <div className={style["botones"]}>
                    <button className={style["btn-finalizarCompra"]} onClick={guardarDatos}>Comprar</button>                    
                    {/* <button className={style["btn-modificar"]} onClick={() => updateOrder('IfdlpJ6jp6897V3wZJmF')}>Editar orden</button> */}

                </div>
            </form>
        </div>
    )
}

export default Orden

