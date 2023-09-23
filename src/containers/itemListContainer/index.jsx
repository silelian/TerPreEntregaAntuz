import { useEffect, useState} from "react";
 import style from './style.module.css'
import { useParams,Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../firebase/client";

export default function ItemListConatainer() {
const [productos, setProductos] = useState([]);
const categoriaId = useParams().categoria;
useEffect(() => {
    // Traer toda la data de una coleccion de firebase://itemListContainer
    //referencia llamo a la base de datos de firebase             
    const productosRef = collection(db, "productos")
    const q = categoriaId ? query(productosRef, where("categoriaId", "==", categoriaId)) : productosRef;
    getDocs(q)
    .then((resp) => {

      setProductos(
        resp.docs.map((doc) => {
            //id: doc.id, me sirve para acceder al id de cada producto
          return { ...doc.data(), id: doc.id }
        })
      )
    })
    
}, [categoriaId])

    return (
        // fluid className="mt-4"
        <div className={style["contenedor-productos"]}>
            <div className={style["fila"]}>
                {/* recorro mi estado q es un array()items, devuelve una 
                card por cada elemento  */}
                {productos.map(item => (
                    <Col key={item.id} lg={4} className="mb-4">
                        <Card className={style["cardLocal"]}>                           
                            <Card.Body>
                                <Card.Title className={style["titulo"]}>{item.titulo}</Card.Title>                                
                                <Card.Img  src={item.imagen} className={style["imagen"]}/>
                                <Card.Text className={style["descripcion"]}>{item.descripcion}</Card.Text>  
                                <Card.Text className={style["precio"]}>Precio $:  {item.precio}</Card.Text>                                 
                                <Link to = {`/item/${item.id}`} className={style["boton"]}>Ver Detalle</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );
}
