import './App.css'
import Blur from './Blur'
import Btn from './Btn'
import { Button } from './Button'
import CatsDogs from './CatsDogs'
import { Contador } from './Contador'
import Data from './Data'
import { Footer } from './Footer'
import Formulario from './FormularioChange'
import { Header } from './Header'
import MouseEnterLeave from './MouseEnterLeave'
import MovieList from './MovieList'
import OnKeyPress from './OnKeyPress'
import { Pincipal } from './Pincipal'
import { Skills } from './Skills'

function App() {

  const peliculas=[
    {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/abf8tHznhSvl9BAElD2cQeRr7do.jpg',
      nombre:'ARCANE',
      fecha:'6 Noviembre 2021'
    },
    {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/q1czoLwMaiUO1bznWuETCP5ueZj.jpg',
      nombre:'WICKED',
      fecha:'28 Noviembre 2024'
    },
    {
      imgUrl:'https://media.themoviedb.org/t/p/w220_and_h330_face/vK1sK1B3WglfgVWPn6Xj4nNsw1q.jpg',
      nombre:'GLADIADOR',
      fecha:'13 Noviembre 2024'
    },
  ]

  let datos={
    titulo:'Iniciando en React',
    bienvenida:'Bienvenidos a la especialidad de React',
    subtitulo:'Libreria de JavaScript',
    autor:{
      nombre:'Evolutech',
      academia:'Cisco',
      imagen:'https://media.themoviedb.org/t/p/w220_and_h330_face/abf8tHznhSvl9BAElD2cQeRr7do.jpg'
    },
    año : new Date().getFullYear()
  }




const AñosAcademia=(props)=>{
    return ` Evolutech tiene ${props.años} años  formando estudiantes`
}
const Status=(props)=>{
    return <p>{props.status?'La academia está formando profesionales hace más o igual a dos años':'La academia está formando estudiantes en menos de 2 años'}</p>
}

  let añoActual=2024
  let añoInauguracion=2022
  let status= (añoActual-añoInauguracion)>=2
  let skills=['HTML','CSS','JAVASCRIPT','REACT']

const saluda=()=>{
  alert('hola')
}

let mensaje='Todos los derechos reservados 2024'
  return (
    <div>
      <Header datos={datos}/>
        <AñosAcademia años={añoActual-añoInauguracion} />
     {/* <Pincipal/>
      <Footer/> */}
    <Status status={status}/>
     {/* <MovieList peliculas={peliculas}/> */}
     <Skills skills={skills}/>
     <Button text='enviar' onClick={saluda} />
      <Contador/>
      <CatsDogs/>
      {/* <Data/> */}
      <MovieList/>
     <Footer mensaje={mensaje}/>
     <Btn/>
     <Formulario/>
        <OnKeyPress/>
        <MouseEnterLeave/>
        <Blur/>
    </div>      
  )
}

export default App
