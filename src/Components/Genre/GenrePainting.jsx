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