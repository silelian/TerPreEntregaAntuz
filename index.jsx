import { Navbar, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../../containers/cartWidget";
import style from "./style.module.css";
import icono from "../../assets/img/icono.ico";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className={style["navBarEstilo"]} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div className={style["navPrincipal"]}>
                            <img src={icono} alt="Icono" className={style["navIcono"]} />

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 m-5" style={{ maxHeight: "100px" }} navbarScroll>
                            <div className={style["navh1"]}>
                                <Nav.Link as={Link} to='/' >Marroquinería</Nav.Link>
                            </div>
                            <div className={style["nav-item"]}>                          
                            <Nav.Link as={Link} to="/productos/Carteras" >Carteras</Nav.Link>
                            <Nav.Link as={Link} to="/productos/Mochilas">Mochilas</Nav.Link>
                            <Nav.Link as={Link} to="/productos/Portafolios">Portafolios</Nav.Link>
                            <Nav.Link as={Link} to="/productos/Billeteras">Billeteras</Nav.Link>
                            <Nav className={style["carrito"]}> <CartWidget/></Nav>
                            </div> 
                            {/* asi seria el original sin boostrap
                            <Link to = 'category/Carteras'>Carteras</Link>
                            <Link to = 'category/Mochilas'>Mochilas</Link>
                            <Link to = 'category/Portafolios'>Portafolios</Link> */}
                               
                        </Nav>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default NavBar;
