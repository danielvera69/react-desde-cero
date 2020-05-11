import React from 'react'
// define valores por default
import PropTypes  from 'prop-types'
// el JSX utiliza el componente react en su estructura
// const curso = {
//   'title':'React desde cero',
//   'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm7lwTlPxpsRvkon6NqjzA5MQxD-DD1w-Fe9KYXfWlFPKu07I&usqp=CAU',
//   'price':'50usd'
// }
// Se puede recibir el parametro (props) o destructurando el props

const Curso = ({title, image, price, profesor,id}) => (
   <article className="card" id={id}>
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
         <img src={image} alt={title}/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
         <h3 className="center">{title ? title:'No'}</h3>
         <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{`$ ${price} USD`}</a>
         </div>
         <div className="s-main-center">
           <h6>{`Profesor: ${profesor}`}</h6>
         </div>
      </div>
   </article>
)
Curso.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   price: PropTypes.number,
   profesor: PropTypes.string,
   id: PropTypes.string
}
Curso.defaultProps = {
   title: "Sin Titulo",
   image: "Sin imagen",
   price: 0.00,
   profesor: "No asignado",
   id: "0"
}

export default Curso    
