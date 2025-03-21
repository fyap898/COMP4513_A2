import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Artist from './Components/Artist/Artist'
import Gallery from './Components/Gallery/Gallery'
import Genre from './Components/Genre/Genre'
import Painting from './Components/Painting/Painting'
import Favourite from './Components/Favourite/Favourite'

// depend which button is selected, display which page
function App() {

  return (
    
    <article>
        <Header/>
        <Painting/>
        <Favourite/>
    </article>
  );
}

export default App;
