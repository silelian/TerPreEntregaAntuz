/* eslint-disable react/jsx-no-undef */
import { BsCart3 } from "react-icons/bs";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CarContext";


const CartWidget = () => {
    const { cantidadEnCarrito} = useCartContext();

    return (
        <div>                
        <Link to="./Carrito"><BsCart3 className={style["carrito-color"]} /></Link>
            <span className={style["carrito-p"]}>{cantidadEnCarrito()}</span>    
        </div>
    );
};

export default CartWidget;
