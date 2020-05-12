import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import MaterialTable from 'material-table';

function Servicios () {
    const clases = estilos();
    const [state, setState] = React.useState({
        columns: [
            {title: 'Servicio',field: 'servicio'},
            {title: 'Costo', field: 'costo', type: 'numeric'}
        ],
        data: [
            { servicio: 'Remplazar liquido en rodilla1', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla2', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla3', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla4', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla5', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla6', costo: 100 },
            { servicio: 'Remplazar liquido en rodilla7', costo: 100 },
        ]
    }); 

    return(
        <Grid className={clases.main}>
            <div align="center">
                <MaterialTable
                    title="Administrar Mis Servicios"
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd: (newData) => new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [prevState.data];
                                    data.push(newData);
                                    return {prevState,data}
                                });
                            },600);
                        }),
                        onRowUpdate: (newData, oldData) => new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if(oldData){
                                    setState((prevState) => {
                                        const data = [prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return {prevState,data};
                                    });
                                }
                            },600);
                        }),
                        onRowDelete: (oldData) => new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [prevState.data];
                                    data.splice(data.indexOf(oldData),1);
                                    return {prevState,data}
                                });
                            },600);
                        }),
                    }}/>
            </div>
        </Grid>
    )
}

const estilos = makeStyles ((tema) => ({
    main: {
        backgroundColor: '#dde0d2',
        opacity: 0.9,
        margin: tema.spacing(5)
    },
    titulo: {
        fontFamily: '"Balsamiq Sans", cursive',
        fontWeight: 500,
        fontSize: '22px',
    }
}))

export default Servicios;