useEffect( () => {
    url = "https://grave-talented-floss.glitch.me/api/artists";
    console.log('fetching … here to check if I’ve gone infinite');
    fetch (url)
    .then( resp => resp.json() )
    .then( data => { setSeasons(data); })
    }, [] );