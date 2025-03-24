const FavouriteNav = () => {
    return(
        <nav class="flex space-x-2">
            <button onclick="showTab('gallery')" id="tab-gallery" 
                class="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black">
                    {/* <button onclick="showTab('xxx')" id="tab-xxx" 
                class="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black"> chosen */}
                Gallery
            </button>
            <button onclick="showTab('artist')" id="tab-artist" 
                class="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black">
                Artists
            </button>
            <button onclick="showTab('painting')" id="tab-painting" 
                class="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black">
                Paintings
            </button>
        </nav>
    );
}

export default FavouriteNav;

// class="tab-btn px-4 py-2 pb-2 rounded-t-lg bg-white text-black" chosen
// class="tab-btn px-4 py-2 rounded-t-lg text-gray-500 hover:text-black" rest