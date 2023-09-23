import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./ItemDetail";
import {getDoc,doc} from 'firebase/firestore'
import { db } from "../../firebase/client";


export default function ItemDetailContainer() {
  //defino el estado del producto q voy a mostrar
  const [item, setItem] = useState({});
  //uso el param para el parametro
  const { id } = useParams();
 
  useEffect(() => {
    const productRef = doc(db, "productos", id)    
       getDoc(productRef).then((resp => {          
        setItem( { id: resp.id,...resp.data() } )
       
      }))      
          
  }, [id]);
  return ( item && <ItemDetail item ={item}/>)
}

