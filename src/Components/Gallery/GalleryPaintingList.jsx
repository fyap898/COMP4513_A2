import GalleryPaintingItem from "./GalleryPaintingItem";

const GalleryPaintingList = (props) => {
    console.log(props.gallery);
    const filteredPaintings = props.paintings.filter(p => p.galleryId === props.gallery.galleryId);
    console.log(filteredPaintings);
    return (
        <div className="mt-6 space-y-4">
            {filteredPaintings.map(p => <GalleryPaintingItem key={p.paintingId} painting={p} learnMore={props.learnMore}/>)}
        </div>
    );
}

export default GalleryPaintingList;