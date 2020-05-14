import React, {Fragment} from 'react';
import "./styles/styles.scss"
//import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario';
const App = () => (
 <Fragment>
   <Banner/> 
   <Formulario nombre="Daniel Vera" correo="dv@gmail.com"/> 
 </Fragment> 
)

export default App;
