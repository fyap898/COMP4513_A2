// File Name: FavouriteNav
// Purpose: Navigate users to view different category of favourited objects
// Detail: Display respective category of favourited objects corresponding to 
//          selected tab.

const FavouriteNav = (props) => {
    return(
        <nav className="flex space-x-2 z-20">
            <button id="tab-gallery" onClick={() => props.setCurrentTab('gallery')}
                className={`tab-btn px-4 py-2 cursor-pointer rounded-t-lg ${props.currentTab === 'gallery' ? 'pb-2 bg-white text-black' : 'text-gray-500 hover:text-black'}`}>
                Galleries
            </button>
            <button id="tab-artist" onClick={() => props.setCurrentTab('artist')}
                className={`tab-btn px-4 py-2 cursor-pointer rounded-t-lg ${props.currentTab === 'artist' ? 'pb-2 bg-white text-black' : 'text-gray-500 hover:text-black'}`}>
                Artists
            </button>
            <button id="tab-painting" onClick={() => props.setCurrentTab('painting')}
                className={`tab-btn px-4 py-2 cursor-pointer rounded-t-lg ${props.currentTab === 'painting' ? 'pb-2 bg-white text-black' : 'text-gray-500 hover:text-black'}`}>
                Paintings
            </button>
        </nav>
    );
}

export default FavouriteNav;
