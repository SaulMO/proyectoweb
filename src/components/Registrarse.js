import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles,Typography,TextField,Button,Grid,Link,Paper } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import Covid19 from './../assets/images/covid19'

export default function Registrarse()
{
    const clases = estilos();
    return(
        <Grid container component="main" className={clases.root}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={clases.paper}>
                    <AccountCircleIcon className={clases.carita}/>
                    <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
                    <form className={clases.formulario} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Correo Electrónico" name="email" autoComplete="email" autoFocus />
                        <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Contraseña" name="password" autoComplete="password" autoFocus />
                        <Button type="submit" className={clases.boton} fullWidth variant="contained" color="primary">Iniciar Sesión</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="opciones">
                                    Olvidaste Contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="opciones">
                                    Registrarse
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={clases.imagen}></Grid>
        </Grid>
    );
}

const estilos = makeStyles((tema) => ({
    root: {
        height: '100vh',
    },
    formulario: {
        width: '100%',
        marginTop: tema.spacing(1),
    },
    imagen: {
        backgroundImage: "url(" + Covid19 + ")",
        backgroundRepeat: 'no-repeat',
        backgroundColor: tema.palette.type === 'light' ? tema.palette.grey[50] : tema.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {    
        margin: tema.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carita: {
        margin: tema.spacing(2),
        fontSize: 50,
        color: teal[900]
    },
    boton: {
        margin: tema.spacing(2,0,2)
    }
}))