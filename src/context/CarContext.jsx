import { createContext, useState, useContext } from "react";
// Creamos el contexto con createContext
 const CarContext = createContext();
//creo una fcion para no estar importanto a cada rato el usecontext y cardcontex
//hgo todo en una sola fcion
export const useCartContext = () => useContext(CarContext);

//children componente q van a ir dentro
//CREO EL COMPONENTE, recibe el childer xq desp envuelve todos los componenetes q estan adentro
export const CarProvider = ({ children }) => {
    //creo el estado del carrito vacio
    const [carrito, setCarrito] = useState([]);   

   //limpio el carrito
   const clearCart = () => {setCarrito([]);}
   //busco produto el carrito
   const isInCart = (id) =>  carrito.find(product => product.id === id)?true:false;
    //elimino un producto del cart
    const removeProduct = (id) => setCarrito(carrito.filter(product => product.id !==id));
    //agregar productos al carrito
    const addToCart = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }
    //cantidad de productos en el carrito
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
//precio total de los productos del carrito
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    //retorna el Provider cn las funciones del carrito
    return <CarContext.Provider value={{
        carrito,
        clearCart,
        isInCart,
        removeProduct,
        addToCart,
        cantidadEnCarrito,
        precioTotal
        
    }}>
        {children}
    </CarContext.Provider>

}
export default CarProvider
