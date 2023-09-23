import { createContext, useState, useEffect } from "react";
// import context from "react-bootstrap/esm/AccordionContext";
// import { useState, useEffect } from "react";


// Creamos el contexto con createContext
export const ShopContext = createContext();

//children componente q van a ir dentro
//CREO EL COMPONENTE, recibe el childer xq desp envuelve todos los componenetes q estan adentro
export const ShopComponentContext = ({ children }) => {
    //creo el estado del carrito
    const [cart, setCart] = useState();
    //creo el estado del producto
    const [productos, setProductos] = useState([])
    //creo el estado del total del carrito
    const [totalCarrito, setTotalCarrito] = useState(0);
    //creo el estado usuario agrega
    const [user, setUser] = useState();
    //limpiar carrito
    const clearCart = () => {
        //pasa el carrito vacio y el total lo vuelve a cero
        setCart([]);
        setTotalCarrito(0)
    }

   

    //agregar productos al carrito
    // const addToCart = (item,cantidad) =>{
    // console.log(item);
    //     setCart(
    //         [
    //             ...cart,
    //             {
    //                 item:item,
    //                 cantidad:cantidad
    //             }
    //         ]
    //     )
    // }


    //retorna el Provider cn las funciones del carrito
    return <ShopContext.Provider value={{
        productos, setProductos, cart, setCart, totalCarrito,
        setTotalCarrito, clearCart, user, setUser
    }}>
        {children}
    </ShopContext.Provider>

}
