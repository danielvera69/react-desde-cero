import React, {Component} from 'react'
// componente de clase
class Formulario extends Component {
    // El constructor es necesario cuando se necesita props
    
    constructor(props){
       // se pasa las prosp a la clase Component
        super(props)
       // el estado es un simple objeto y es exclusivo de este componente se encarga de los cambios de valores de ese objeto se inicializa con state y se actualiza con setState.
        this.state={
            nombre: "",
            correo: "",
            fecha: new Date()

        }
        // bind para poder utilizar this en la funcion
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }
    cambiarNombre(e){
        this.setState(
            {nombre: e.target.value}
        )
    }
    cambiarFecha(e){
        this.setState(
            {fecha: new Date()}
        )
    }
    // this.setState({}) Actualiza el estado recibe un objeto a actualizar
    //Metodo obligatorio retorna el contenido del jsx
    render(){
        // dentro del return se escribe tod el JSX deseado
        return (
            
            <div className="ed-grid">
              <h1>Formulario {this.props.nombre}</h1>
              <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
              <form id='form'>
                <div className="ed-grid m-grid-2">
                  <div className="form__item">
                      <label >Nombre Completo</label>
                      <input type="text" onChange={this.cambiarNombre}/>
                  </div>
                  <div className="form__item">
                      <label >Correo Electronico</label>
                      <input type="email" onChange={(e)=> this.setState({correo: e.target.value})}/>
                  </div>
                </div>    
              </form>
              <div>
                  <h2>{`Hola ${this.state.nombre}`}</h2>
                  <span>{`Tu correo es ${this.state.correo}`}</span>
                  
              </div>
              
            </div>
            
        )
    }
    // fase de montaje se ejecuta el constructor se renderiza y se ejecuta el componetDidMount()
    componentDidMount(){
        let ele = document.getElementById('form')
        console.log(ele)
        this.intervalofecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        },1000)
    }
    // fase de actualizacion se ejecuta cuando hay cambios en el componente, es decir las new props o setState() o forceUpdate() y vuelve a ejecutarse el render() y por ultimo se ejecuta el  componentDidUpdate()
    // este metodo posee los valores previos de los porsp y state
    componentDidUpdate(prevProps, prevState){
      
    //    console.log('Props: ',prevProps)
    //    console.log('States: ',prevState)
    //    console.log('-------')
    }
    // desmontaje solo ejecuta el metodo componentWillUnmount esto lo realiza cuando el componente se va a desmontar - ojo
    componentWillUnmount(){
       clearInterval(this.intervalofecha) 
    }

}
export default Formulario