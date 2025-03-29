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

// depend which button is selected, display which page
function App() {

  //Data retrieval UseState
  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [genres, setGenres] = useState([]);
  const [paintingGenres, setPaintingGenres] = useState([]);
  const [enrichedPaintings, setEnrichedPaintings] = useState([]);

  //Login credential
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Page State
  // available page: 'login', 'artist', 'gallery', 'painting', 'genre', 'favourite', 'about'
  const [currentPage, setCurrentPage] = useState('painting');


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
    } else if(currentPage === 'favourite'){
        body.className = "bg-[#A0BBBF] pointer-event-none overflow-hidden";
        body.style.backgroundImage = "";
    } else if(currentPage === 'about'){
      body.className = "bg-[#A0BBBF] pointer-event-none overflow-hidden";
      body.style.backgroundImage = "";
    } else {
      body.className= "bg-[#A0BBBF]";
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
          {currentPage === 'artist' && <Artist artists={artists} paintings={enrichedPaintings} galleries={galleries} genres={genres}/>}
          {currentPage === 'gallery' && <Gallery data={galleries}/>}
          {currentPage === 'painting' && <Painting paintings={enrichedPaintings} artists={artists} galleries={galleries} genres={genres}/>}
          {currentPage === 'genre' && <Genre data={genres}/>}

      </article>}
    </>
  );
}

export default App;
