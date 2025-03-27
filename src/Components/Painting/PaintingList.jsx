import PaintingListItem from "./PaintingListItem";

const PaintingList = (props) => {
    
    const enrichedPaintings = props.paintings.map(p => {
        const artist = props.artists.find(a => a.artistId === p.artistId);
        const gallery = props.galleries.find(g => g.galleryId === p.galleryId);

        return{...p,
            artistName: artist ? `${artist.firstName} ${artist.lastName}` : "Unknown",
            galleryName: gallery ? `${gallery.galleryName}` : 'Unknown',
            galleryCity: gallery ? `${gallery.galleryCity}` : 'Unknown'
        }
    })

    return(
        <div className="mt-6 space-y-4">
            {enrichedPaintings.map(p => <PaintingListItem painting={p} key={p.paintingId} artists={props.artists} galleries={props.galleries} genres={props.genres} learnMore={props.learnMore}/>)}
        </div>
    );
}

export default PaintingList;