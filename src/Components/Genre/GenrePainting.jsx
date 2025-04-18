// File Name: GenrePainting
// Purpose: Renders list of paintings for user to select for adding to favourite
// Detail: This component takes in array of painting objects that filtered by
//          association with user-selected genre and populate them in a list.

import GenrePaintingItem from "./GenrePaintingItem";

const GenrePainting = (props) => {

    const filteredPainting = props.paintings.filter(p => p.genreNames.includes(props.genre.genreName));
    const sortedPainting = [...filteredPainting].sort((a,b) => {
       a.title.localeCompare(b.title)
    });
    console.log(sortedPainting);
    return(
        <div className="mt-6 space-y-4">
            {sortedPainting.map(p => <GenrePaintingItem painting={p} key={p.paintingId} learnMore={props.learnMore}/>)}
        </div>
    );
}

export default GenrePainting;