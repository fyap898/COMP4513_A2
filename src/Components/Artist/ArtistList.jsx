// File Name: ArtistList
// Purpose: Renders list of artists for user to select
// Detail: This component takes in array of artist objects and populate
//          all of the artist object in a list.

import ArtistListItem from "./ArtistListItem";

const ArtistList = (props) => {
    const sortedArtists = [...props.artists].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
    );
    return (
              <ul className="mt-4 space-y-2">
                  {sortedArtists.map(a => <ArtistListItem key={a.artistId} artist={a} populateInfo={props.populateInfo}/>)}
              </ul>
    );
}

export default ArtistList;