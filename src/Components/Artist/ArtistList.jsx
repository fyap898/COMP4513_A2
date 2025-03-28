import ArtistListItem from "./ArtistListItem";

const ArtistList = (props) => {
    const sortedArtists = [...props.artists].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
    );
    return (
              <ul className="mt-4 space-y-2">
                  {sortedArtists.map(a => <ArtistListItem key={a.artistId} lastName={a.lastName} firstName={a.firstName}/>)}
              </ul>
    );
}

export default ArtistList;