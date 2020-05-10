import React, {Fragment} from 'react';
import "./styles/styles.scss"
// reglas JSX
// 1: todo elemento tiene que tener etiqueta de apertura y cierre
// 2: los componentes deben devolver un elemento padre
// 3: Apoyarse de los fragment o  <> cuando se necesita devolver dos elementos padres
// 4: img siempre se cierra
// 5: No usar  class sino className
// 6: for   htmlFor=>
// 7: No utilizar if, else, while
import Curso from './Curso'
const App = () =>(
 <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://cdn4.buysellads.net/uu/1/63492/1588023070-ipvanish-2.png"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos gratis</p>
          <p> Programacion</p>
          <a href="#" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
     <Curso/>
     <Curso/>
     <Curso/>
     <Curso/>
     <Curso/>
     <Curso/>
     <Curso/>
  </div>
 </> 
)

export default App;
