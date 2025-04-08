// File Name: FavouriteArtist
// Purpose: Renders list of favourited artist for user to view and remove 
//          individual artist object
// Detail: This component takes in array of favourited artist objects and
//          populate all of the favourited artist object in a list.

import FavArtItem from "./FavArtItem";

const FavouriteArtist = (props) => {

    const hasFav = props.favArt && props.favArt.length > 0;
    
    return(
        <div id="content-artist" className="tab-content flex flex-col gap-2 h-[55vh]">
            <ul className="p-4 bg-gray-50 rounded-lg shadow-sm overflow-auto h-[55vh] w-full space-y-2">
                {hasFav ? (
                    props.favArt.map(a => <FavArtItem artist={a} key={a.artistId} learnMore={props.learnMore} remove ={props.remove}/>)
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400 text-center">No Favourite Artists Yet.</p>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default FavouriteArtist;