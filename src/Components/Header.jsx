const Header = (props) => {
    
    const getButtonStyle = (page) => {
        return props.page === page
          ? "px-6 py-3 rounded-md bg-[#3D5C64] text-[#DAE2DF]" // active
          : "px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white"; // inactive
    };

    const getTitle = (page) => {
        if(page === 'artist')
            return 'Artists';
        if(page === 'painting')
            return 'Paintings';
        if(page === 'gallery')
            return 'Galleries';
        if(page === 'genre')
            return 'Genres';
    }

    return(
        <header className="flex justify-between items-center bg-[#6B8B93] w-full fixed top-0 left-0 h-25 z-50 px-8 shadow-md">
            <div className="text-lg text-[#DAE2DF] font-bold ml-8">Logo</div>
            <h2 className="text-2xl font-semibol text-[#DAE2DF]">Art Dashboard Project {getTitle(props.page)} View</h2>
            <nav className="space-x-4 mr-8">
                <button className={getButtonStyle('artist')} onClick={() => props.setPage('artist')}>Artists</button>
                <button className={getButtonStyle('painting')} onClick={() => props.setPage('painting')}>Paintings</button>
                <button className={getButtonStyle('gallery')} onClick={() => props.setPage('gallery')}>Galleries</button>
                <button className={getButtonStyle('genre')} onClick={() => props.setPage('genre')}>Genres</button>
                <button className="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">Favorites</button>
                <button className="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">About</button>
            </nav>
        </header>
    );
}

export default Header;

// "px-6 py-3 rounded-md bg-[#3D5C64] text-[#DAE2DF]" chosen
// "px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white" rest
