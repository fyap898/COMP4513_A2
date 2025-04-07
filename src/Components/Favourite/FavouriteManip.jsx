const FavouriteManip = (props) => {
    return(
        <div className="space-x-4 z-20">
            <button className="px-4 py-2 bg-gray-220 rounded-md cursor-pointer hover:bg-gray-300" onClick={() => props.emptyFav()}>Empty All Favourites</button>
        </div>
    );
}

export default FavouriteManip;