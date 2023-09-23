import { Col, Card, Container } from "react-bootstrap";
import style from './style.module.css'
import ItemCount from "../itemCount/itemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../context/CarContext";
import { useState } from "react";

export default function ItemDetail({ item }) {

    const {addToCart} = useCartContext();

    const [cantidad, setCantidad] = useState(1);

    const Restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const Sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    } 
    return (
        <div>
            <div className={style["container-Detalle"]}>
                <div className={style["filaDetalle"]}>
                    {/* recorro mi estado q es un array()items, devuelve una 
                card por cada elemento  */}
                    <Col lg={4} className="mb-4">
                        <Card key={item.id} className={style["cardLocalDetalle"]}>
                            <Card.Body>
                                <Card.Title className={style["title"]}>{item.titulo}</Card.Title>
                                <Card.Img variant="top" src={item.imagen} className={style["imagen"]} />
                                <Card.Text className={style["descripcion"]}>{item.descripcion}</Card.Text>
                                <Card.Text className={style["precio"]}>Precio $:  {item.precio}</Card.Text>
                                
                                <div>
                                    <ItemCount 
                                     cantidad={cantidad}
                                     Sumar={Sumar}
                                     Restar={Restar}
                                     handleAgregar={() => { addToCart(item, cantidad) }}                                    
                                    
                                     />
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    )
}