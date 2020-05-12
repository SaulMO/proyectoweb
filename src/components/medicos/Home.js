import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Logo from './../../assets/images/logo.png';
import Footer from './../Footer';
import Servicios from './Servicios';
import Consultas from './Consultas';
import Recetas from './Recetas';
import Facturacion from './Facturacion';
import './../../assets/css/Home.css';

function Home()
{
    const clases = estilos();
    const secciones = [
        { titulo: 'Servicios', url: "/Servicios" },
        { titulo: 'Consultas', url: "/Consultas" },
        { titulo: 'Recetas', url: "/Recetas" },
        { titulo: 'Facturación', url: "/Facturacion" }
    ]
    return (
        <Router>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Toolbar component="nav" variant="dense" className={clases.toolbarNav}>
                    <img src={Logo} className={clases.logo} alt="Logo" width="18%" align="center"/>
                    {secciones.map((seccion) => ( 
                        <Link to={seccion.url} className={clases.toolbarNavLink}>
                            {seccion.titulo}
                        </Link>
                    ))}
                    <Button className={clases.logout}>LogOut</Button>
                </Toolbar>
            </Container>
            <Switch>
                <Route path="/Servicios" exact component={Servicios}/>
                <Route path="/Consultas" exact component={Consultas}/>
                <Route path="/Recetas" exact component={Recetas}/>
                <Route path="/Facturacion" exact component={Facturacion}/>
            </Switch>
            <Footer title="Medical Care" description="Taking Care Of You Remotely"/>
        </Router>
    );
}

const estilos = makeStyles((tema) => ({
    toolbarNav: {
        display: 'flex',
        justifyContent: 'space-around',
        overflowX: 'auto',
        alignItems: 'center',
        backgroundColor: '#dde0d2',
        opacity: 0.9,
    },
    toolbarNavLink: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none',
        color: '#000',
        fontFamily: '"Balsamiq Sans", cursive',
        fontWeight: 500,
        fontSize: '18px',
        textDecoration: 'none',
        padding: tema.spacing(1),
    },
    logo: {
        padding: tema.spacing(2),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logout: {
        padding: '9px 25px',
        backgroundColor: '#447d81',
        border: 'none',
        borderRadius: '50px',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        color: '#fff'
        
    },
}))

export default Home;