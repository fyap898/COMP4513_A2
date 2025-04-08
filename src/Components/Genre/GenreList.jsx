// File Name: GenreList
// Purpose: Renders list of genres for user to select for info population
// Detail: This component takes in array of genre objects and populate all
//          of the genre object in a list.

import GenreListItem from "./GenreListItem";

const GenreList = (props) => {
    const sortedGenres = [...props.genres].sort((a,b) => {
        a.genreName.localeCompare(b.genreName);
    })
    return(
        <ul className="mt-4 space-y-2">
            {sortedGenres.map(g => <GenreListItem genre={g} key={g.genreId} populateInfo={props.populateInfo}/>)}
        </ul>
    );
}

export default GenreList;