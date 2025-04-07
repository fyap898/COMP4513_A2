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