// File Name: FavouriteGallery
// Purpose: Renders list of favourited galleries for user to view and remove 
//          individual gallery object
// Detail: This component takes in array of favourited gallery objects and
//          populate all of the favourited gallery object in a list.

import FavGalItem from "./FavGalItem";

const FavouriteGallery = (props) => {

    const hasFav = props.favGal && props.favGal.length > 0;
    return(
        <div id="content-gallery" className="tab-content flex flex-col gap-2 h-[55vh]">
            <ul className="p-4 bg-gray-50 rounded-lg shadow-sm overflow-auto h-[55vh] w-full space-y-2">
                {hasFav ? (
                    props.favGal && props.favGal.map(g => <FavGalItem gallery={g} key={g.galleryId} learnMore={props.learnMore} remove={props.remove}/>)
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400 text-center">No Favourite Galleries Yet.</p>
                    </div>
                )}
                
            </ul>
        </div>

    );
}

export default FavouriteGallery;