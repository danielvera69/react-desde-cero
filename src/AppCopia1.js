import React from 'react';
import "./styles/styles.scss"
// reglas JSX  // import {Fragment} from 'react'
// 1: todo elemento tiene que tener etiqueta de apertura y cierre
// 2: los componentes deben devolver un elemento padre
// 3: Apoyarse de los fragment o  <> cuando se necesita devolver dos elementos padres
// 4: img siempre se cierra
// 5: No usar  class sino className
// 6: for   htmlFor=>
// 7: No utilizar if, else, while
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm7lwTlPxpsRvkon6NqjzA5MQxD-DD1w-Fe9KYXfWlFPKu07I&usqp=CAU",
    "price": 50.00,
    "profesor": "Daniel Vera",
    "id": "1"
 
  },
  {
    "title": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/565fa9ec-8f84-448a-b0d8-855d059f16dd.png",
    "price": 70.00,
    "profesor": "Raul Berrones",
    "id": "2"
 
  },
  {
    "title": "Angular desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/9e7655f4-a855-4d30-a3e0-736fa47f479b.png",
    "price": 20.00,
    "profesor": "Moises Lopez",
    "id": "3"
 
  },
  {
    "title": "Vue desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/b393cce0-3ec8-4c61-877d-92e2e04f9120.png",
    "price": 30.00,
    "profesor": "Daniel Vera",
    "id": "4"
 
  },
 ]
const App = () => (
 <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://cdn4.buysellads.net/uu/1/63492/ 1588023070-ipvanish-2.png" alt="sin imagen"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos gratis</p>
          <p> Programacion</p>
          <a href="https://ed.team/" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
     {/* <Curso
        title="React Desde Cero"
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm7lwTlPxpsRvkon6NqjzA5MQxD-DD1w-Fe9KYXfWlFPKu07I&usqp=CAU'
        price={50}
        profesor="Daniel Vera"
        id='1'
     /> */}
     {
       cursos.map(
         c =>  
           <Curso
             title = {c.title}
             image = {c.image} 
             price = {c.price} 
             profesor = {c.profesor} 
             id = {c.id} 
           />
        )
    }
     
  </div>
 </> 
)

export default App;
