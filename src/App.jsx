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

// depend which button is selected, display which page
function App() {

  //Data retrieval UseState
  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [genres, setGenres] = useState([]);
  const [domColours, setDomColours] = useState({});

  //Login credential
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Page State
  // available page: 'login', 'artist', 'gallery', 'painting', 'genre', 'favourite', 'about'
  const [currentPage, setCurrentPage] = useState('artist');


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
      }
    }

    loadData();
  }, []);

  // Use Effect for loading dominant color for each painting, query using paintingId
  useEffect(() => {
    console.log("loadColour");
    const parsed = {};
    paintings.forEach(p => {
      parsed[p.paintingId] = p.jsonAnnotations ? JSON.parse(p.jsonAnnotations).dominantColors : [];
    });
    setDomColours(parsed);
  }, [paintings])

  // Use Effect for switching page depend on the current page state
  useEffect(() => {
    updateBodyClass();
  }, [currentPage])

  // debug console
  // console.log(artists);
  // console.log(galleries);
  // console.log(paintings);
  // console.log(genres);
  // console.log(currentPage);
  // console.log(domColours);



  return (
    <>
      {currentPage === 'login' && <Login handleLogin={handleLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>}
      {currentPage !== 'login' &&
      <article >
          <Header page={currentPage} setPage={setCurrentPage}/>
          {currentPage === 'artist' && <Artist artists={artists} paintings={paintings}/>}
          {currentPage === 'gallery' && <Gallery data={galleries}/>}
          {currentPage === 'painting' && <Painting paintings={paintings} artists={artists} galleries={galleries} genres={genres} domColours={domColours}/>}
          {currentPage === 'genre' && <Genre data={genres}/>}

      </article>}
    </>
  );
}

export default App;
