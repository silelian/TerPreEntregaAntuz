import ItemListConatainer from "../containers/itemListContainer";
import NavBar from "../components/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
 //import CartWidget from "../containers/cartWidget";
import Orden from "../containers/cartWidget";
import { CarProvider} from "../context/CarContext";
import Carrito from "../containers/cartWidget/Carrito";


export default function Router() {
    return (
        //envuelvo todos los componentes con el carprovider
        <CarProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* en el path se coloca la ruta a la q queremos ir */}
                    {/* element,va el componente que quiero mostrar */}
                    <Route exact path="/" element={<ItemListConatainer />} />
                    <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/productos"element={<ItemListConatainer />} />
                    <Route exact path="/productos/:categoria"element={<ItemListConatainer />} />
                    <Route exact path="/Carrito" element={< Carrito/>} /> 
                    <Route exact path="/Orden" element={<Orden />}/>
                         
                </Routes>
                {/* aqui puede ir el footer */}
            </BrowserRouter>
        </CarProvider>
    );
}
