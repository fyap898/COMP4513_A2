const FavouriteNav = () => {
    return(
        <nav className="flex space-x-2">
            <button onclick="showTab('gallery')" id="tab-gallery" 
                className="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black">
                    {/* <button onclick="showTab('xxx')" id="tab-xxx" 
                className="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black"> chosen */}
                Gallery
            </button>
            <button onclick="showTab('artist')" id="tab-artist" 
                className="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black">
                Artists
            </button>
            <button onclick="showTab('painting')" id="tab-painting" 
                className="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black">
                Paintings
            </button>
        </nav>
    );
}

export default FavouriteNav;

// className="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black" chosen
// className="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black" rest