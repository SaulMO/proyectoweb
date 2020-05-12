import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; //Icono Persona
import { makeStyles,Typography,TextField,Button,Grid,Paper,Dialog,DialogActions,DialogContent,CssBaseline,Container,FormLabel,RadioGroup,FormControlLabel,Radio,InputLabel,MenuItem,Select } from '@material-ui/core'; //Elementos para hacer formulario
import { teal } from '@material-ui/core/colors'; //Import conjunto colores Teal
import Covid19 from './../assets/images/covid19' //Import imagen de covid

function IniciarSesion()
{
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true);}
    const handleClose = () => {setOpen(false); setApertura(false); }

    const [apertura, setApertura] = React.useState(false);
    const handleShow = () => { setApertura(true) }
    const handleHide = () => { setApertura(false) }
    const DatosMedico = () => ( <Fragment>
        <Grid item xs={12}>
            <TextField autoComplete="cedula" name="cedula" variant="outlined" required fullWidth id="cedula" label="Cedula Profesional" autoFocus/>
        </Grid>
        <Grid item xs={12}>
            <InputLabel>Especialidad</InputLabel>
            <Select id="especialidadid" value={especialidad} onChange={manejarCambio}>
                <MenuItem value={1}>Anatomía Patológica</MenuItem>
                <MenuItem value={2}>Alergología</MenuItem>
                <MenuItem value={3}>Cardiología</MenuItem>
                <MenuItem value={4}>Cirugía Cardíaca</MenuItem>
                <MenuItem value={5}>Cirugía General</MenuItem>
                <MenuItem value={6}>Cirugía Plástica</MenuItem>
                <MenuItem value={7}>Cirugía de Mama</MenuItem>
                <MenuItem value={8}>Cirugía Maxilofocal</MenuItem>
                <MenuItem value={9}>Cirugía Vascular</MenuItem>
                <MenuItem value={10}>Dermatología</MenuItem>
                <MenuItem value={11}>Endocrinología y Nutrición</MenuItem>
                <MenuItem value={12}>Gastroenterología</MenuItem>
                <MenuItem value={13}>Genética</MenuItem>
                <MenuItem value={14}>Geriatría</MenuItem>
                <MenuItem value={15}>Ginecología</MenuItem>
                <MenuItem value={16}>Hematología</MenuItem>
                <MenuItem value={17}>Hepatología</MenuItem>
                <MenuItem value={18}>Enfermedades Infecciosas</MenuItem>
                <MenuItem value={19}>Medicina Interna</MenuItem>
                <MenuItem value={20}>Nefrología</MenuItem>
                <MenuItem value={21}>Neumología</MenuItem>
                <MenuItem value={22}>Neurología</MenuItem>
                <MenuItem value={23}>Neurocirugía</MenuItem>
                <MenuItem value={24}>Oftalmología</MenuItem>
                <MenuItem value={25}>Otorrinolaringología</MenuItem>
                <MenuItem value={26}>Oncología</MenuItem>
                <MenuItem value={27}>Pediatría</MenuItem>
                <MenuItem value={28}>Proctología</MenuItem>
                <MenuItem value={29}>Psiquiatría</MenuItem>
                <MenuItem value={30}>Rehabilitación</MenuItem>
                <MenuItem value={31}>Reumatología</MenuItem>
                <MenuItem value={32}>Traumatología</MenuItem>
                <MenuItem value={33}>Urología</MenuItem>
            </Select>
        </Grid>
    </Fragment>)
    
    const [especialidad, setEspecialidad] = React.useState('');
    const manejarCambio = (event) => {
        setEspecialidad(event.target.value);
    }
    const clases = estilos();   
    return(
        <Grid container component="main" className={clases.root}>
            <Grid item xs={false} sm={4} md={7} className={clases.imagen}></Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={clases.paper}>
                    <AccountCircleIcon className={clases.carita}/>
                    <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
                    <form className={clases.formulario} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Correo Electrónico" name="email" autoComplete="email" autoFocus />
                        <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Contraseña" name="password" autoComplete="password" autoFocus type="password"/>
                        <Button type="submit" className={clases.boton} fullWidth variant="contained" color="primary">Iniciar Sesión</Button>
                        <Grid container>
                            <Grid item xs>
                                <Button size="small" variant="outlined" color="secondary" onClick={handleClickOpen}>Olvidaste Contraseña?</Button>
                            </Grid>
                            <Grid item>
                                <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>Registrarse</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <div className={clases.paperregistro}>
                            <Typography component="h1" variant="h5">Registrate</Typography>
                            <AccountCircleIcon className={clases.carita}/>
                            <form className={clases.formulario}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField autoComplete="nombre" name="nombre" variant="outlined" required fullWidth id="nombre" label="Nombre" autoFocus/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField autoComplete="apellidos" name="apellidos" variant="outlined" required fullWidth id="apellidos" label="Apellidos" autoFocus/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="email" label="Correo electrónico" name="email" autocomplete="email" type="email"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="password" label="Contraseña" name="password" autocomplete="password" type="password"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="direccion" label="Dirección" name="direccion" autocomplete="direccion" type="text"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="estado" label="Estado/Provincia" name="estado" autocomplete="estado" type="text"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="municipio" label="Municipio" name="municipio" autocomplete="municipio" type="text"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="pais" label="País" name="pais" autocomplete="pais" type="pais"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField variant="outlined" required fullWidth id="telefono" label="Teléfono" name="telefono" autocomplete="telefono" type="tel"></TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel component="legend">Tipo de Usuario</FormLabel>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="Paciente">
                                            <FormControlLabel value="doctor" control={<Radio color="primary"/>} label="Médico" labelPlacement="end" onClick={handleShow}/>
                                            <FormControlLabel value="paciente" control={<Radio color="primary"/>} label="Paciente" labelPlacement="end" onClick={handleHide} />
                                        </RadioGroup>
                                    </Grid>
                                    { apertura ? <DatosMedico /> : null}
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancelar</Button>
                    <Button onClick={handleClose} color="primary">Registrarse</Button>
                </DialogActions>
            </Dialog>
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
    paperregistro: {
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

export default IniciarSesion;