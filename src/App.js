import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Antecedentes from './components/pacientes/Antecedentes';
import Consultas from './components/pacientes/Consultas';
import Tienda from './components/pacientes/Tienda';

function App()
{
  return (
    <Router>
      <Switch>
        <Route path="/Consultas" exact component={Consultas}/>
        <Route path="/Tienda" exact component={Tienda}/>
        <Route path="/" exact component={Antecedentes}/>
      </Switch>
    </Router>
  )
}

export default App;