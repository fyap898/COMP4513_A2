// File Name: GalleryList
// Purpose: Renders list of galleries for user to select for info population
// Detail: This component takes in array of artist objects and populate
//          all of the gallery object in a list.

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