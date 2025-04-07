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
import Login from './Components/Login'
import PaintingInfo from './Components/Painting/PaintingInfo'
import fetchAllData from './Fetch'
import EnrichPaintings from './EnrichPaintings'
import About from './Components/About'

// depend which button is selected, display which page
function App() {

  //Data retrieval UseState
  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [genres, setGenres] = useState([]);
  const [paintingGenres, setPaintingGenres] = useState([]);
  const [enrichedPaintings, setEnrichedPaintings] = useState([]);
  const [favGal, setFavGal] = useState([]);
  const [favArt, setFavArt] = useState([]);
  const [favPainting, setFavPainting] = useState([]);

  const emptyFav = () => {
      setFavGal([]);
      setFavArt([]);
      setFavPainting([]);
  }

  //Login credential
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Page State
  // available page: 'login', 'artist', 'gallery', 'painting', 'genre', 'favourite', 'about'
  const [currentPage, setCurrentPage] = useState('favourite');


  const handleLogin = (e) => {
    e.preventDefault();
  
    const validEmail = "felix@mtroyal.ca";
    const validPassword = "comp4513";
  
    if (email === validEmail && password === validPassword) {
      alert("Login successful!");
      setIsLoggedIn(true);
      setCurrentPage('artist'); // can be any page

    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // adjust body's class according to the page
  // in this case just for changing background image for login
  const updateBodyClass = () => {
    const body = document.body;
  
    if (currentPage === 'login') {
      body.className = 'bg-[#A0BBBF] overflow-hidden bg-cover bg-center bg-no-repeat';
      body.style.backgroundImage = "url('/HeroLightUp.jpg')";
    } else {
      body.className= "bg-[#A0BBBF] pointer-events-auto";
      body.style.backgroundImage = "";
    };
  }  

  useEffect(() => {
    console.log("loadData");
    async function loadData() {
      const data = await fetchAllData();
      if (data) {
        setArtists(data.artistsData);
        setGalleries(data.galleriesData);
        setPaintings(data.paintingsData);
        setGenres(data.genresData);
        setPaintingGenres(data.paintingGenresData);
      }
    }

    loadData();
  }, []);
 
  useEffect(() => {
    const enriched = EnrichPaintings(paintings, artists, galleries, genres, paintingGenres);
    setEnrichedPaintings(enriched);
  }, [artists, galleries, paintings, genres, paintingGenres]);

  // Use Effect for switching page depend on the current page state
  useEffect(() => {
    console.log(currentPage);
    updateBodyClass();
  }, [currentPage])

  // debug console
  // console.log(artists);
  // console.log(galleries);
  // console.log(genres);
  // console.log(currentPage);
  // console.log(domColors);
  console.log(enrichedPaintings);



  return (
    <>
      {currentPage === 'login' && <Login handleLogin={handleLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>}
      {currentPage !== 'login' &&
      <article >
          <Header page={currentPage} setPage={setCurrentPage}/>
          {currentPage === 'artist' && <Artist setCurrentPage={setCurrentPage} artists={artists} paintings={enrichedPaintings} galleries={galleries} genres={genres} favArt={favArt} favPainting={favPainting} addArt={setFavArt} addPainting={setFavPainting}/>}
          {currentPage === 'gallery' && <Gallery setCurrentPage={setCurrentPage} galleries={galleries} paintings={enrichedPaintings} favGal={favGal} favPainting={favPainting} addGal={setFavGal} addPainting={setFavPainting}/>}
          {currentPage === 'painting' && <Painting setCurrentPage={setCurrentPage} paintings={enrichedPaintings} artists={artists} galleries={galleries} genres={genres} favPainting={favPainting} addPainting={setFavPainting}/>}
          {currentPage === 'genre' && <Genre setCurrentPage={setCurrentPage} genres={genres} paintings={enrichedPaintings} favPainting={favPainting} addPainting={setFavPainting}/>}
          {currentPage === 'favourite' && <Favourite setCurrentPage={setCurrentPage} emptyFav={emptyFav} favGal={favGal} favArt={favArt} favPainting={favPainting} setFavGal={setFavGal} setFavArt={setFavArt} setFavPainting={setFavPainting}/>}
          {currentPage === 'about' && <About/>}
      </article>}
    </>
  );
}

export default App;
