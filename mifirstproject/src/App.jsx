import './App.css'
import { Footer } from './Footer'
import { Header } from './Header'
import MovieList from './MovieList'
import { Pincipal } from './Pincipal'

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
  return (
    <div>
      {/* <Header />
      <Pincipal/>
      <Footer/> */}
     <MovieList peliculas={peliculas}/>
    </div>      
  )
}

export default App
