import GalleryListItem from "./GalleryListItem";

const GalleryList = (props) => {

    const sortedGalleries = [...props.galleries].sort((a, b) =>
        a.galleryName.localeCompare(b.galleryName)
    );
    return(
        <ul className="mt-4 space-y-2">
            {sortedGalleries.map(g => <GalleryListItem key={g.galleryId} gallery={g} populateInfo={props.populateInfo}/>)}
        </ul>
    );
}

export default GalleryList;