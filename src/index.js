import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root =  document.getElementById('root')
// crear un elemento y reindezarlo en pantalla recibe tres parametros: 1.componente 2.propiedades y 3.hijos 
const elemento = React.createElement("h1",{className:"saludos"},"Hola Mundo Sin JSX")
// render necesita dos parametros 1.El Elemento 2.el nodo del documento html donde renderizar.
//ReactDOM.render(elemento,root) sin jsx
// con jsx
// metodo 1
//ReactDOM.render(<h1 className="saludos">Hola mundo con JSX</h1>,root) 
// metodo 2
ReactDOM.render(<App/>,root)
 
