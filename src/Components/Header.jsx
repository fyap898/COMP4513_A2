// File Name: Header
// Purpose: Let user to navigate through different pages in the web application
// Detail: Provide choices for user to choose and direct them to view on different
//          categories' page.

const Header = (props) => {
    
    const getButtonStyle = (page) => {
        return props.page === page
          ? "px-6 py-3 rounded-md bg-[#3D5C64] text-[#DAE2DF]" // active
          : "px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white"; // inactive
    };

    const getTitle = (page) => {
        if(page === 'artist')
            return "Art Dashboard Project Artists View";
        if(page === 'painting')
            return "Art Dashboard Project Paintings View";
        if(page === 'gallery')
            return "Art Dashboard Project Galleries View";
        if(page === 'genre')
            return "Art Dashboard Project Genres View";
        if(page === 'favourite')
            return "Art Dashboard Project Favourites View";
        if(page === 'about')
            return "About";
    }

    return(
        <header className="flex justify-between items-center bg-[#6B8B93] w-full fixed top-0 left-0 h-25 z-50 px-8 shadow-md">
            <div className="text-lg text-[#DAE2DF] font-bold ml-8"><img src="/Logo.png" alt="Logo" className="w-25 h-25 object-contain"></img></div>
            <h2 className="text-2xl font-semibol text-[#DAE2DF]">{getTitle(props.page)}</h2>
            <nav className="space-x-4 mr-8">
                <button className={getButtonStyle('artist')} onClick={() => props.setPage('artist')}>Artists</button>
                <button className={getButtonStyle('painting')} onClick={() => props.setPage('painting')}>Paintings</button>
                <button className={getButtonStyle('gallery')} onClick={() => props.setPage('gallery')}>Galleries</button>
                <button className={getButtonStyle('genre')} onClick={() => props.setPage('genre')}>Genres</button>
                <button className={getButtonStyle('favourite')} onClick={() => props.setPage('favourite')}>Favourites</button>
                <button className={getButtonStyle('about')} onClick={() => props.setPage('about')}>About</button>
            </nav>
        </header>
    );
}

export default Header;
