// File Name: FavouritePainting
// Purpose: Renders list of favourited paintings for user to view and remove 
//          individual painting object
// Detail: This component takes in array of favourited painting objects and
//          populate all of the favourited painting object in a list.

import FavPaintingItem from "./FavPaintingItem";

const FavouritePainting = (props) => {

    const hasFav = props.favPainting && props.favPainting.length > 0;
    return(
        <div id="content-painting" className="tab-content flex flex-col gap-2 h-[55vh]">
            <ul className="p-4 bg-gray-50 rounded-lg shadow-sm overflow-auto h-[55vh] w-full space-y-2">
                {hasFav ? (
                    props.favPainting.map(p => <FavPaintingItem painting={p} key={p.paintingId} learnMore={props.learnMore} remove={props.remove}/>)
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400 text-center">No Favourite Paintings Yet.</p>
                    </div>
                )}
            </ul>
        </div>
    );
}
export default FavouritePainting;