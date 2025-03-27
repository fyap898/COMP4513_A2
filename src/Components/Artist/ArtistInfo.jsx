const ArtistInfo = () => {
    return(
        <>
            <div className="mt-2 space-y-2 text-left">
              <p><strong>Name:</strong> <span id="artist-name" className="text-[#DAE2DF]">Select an artist</span></p>
              <p><strong>Nationality:</strong> <span id="artist-nationality" className="text-[#DAE2DF]">-</span></p>
              <p><strong>Gender:</strong> <span id="artist-gender" className="text-[#DAE2DF]">-</span></p>
              <p><strong>Years:</strong> <span id="artist-years" className="text-[#DAE2DF]">-</span></p>
              <p><strong>Details:</strong> <span id="artist-details" className="text-[#DAE2DF]">-</span></p>
              <p><strong>URL:</strong> <a href="#" id="artist-url" className="text-blue-400 underline">-</a></p>
            </div>
            <div className="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">Artist Image</div>
            <button className="mt-4 px-4 py-2 bg-[#DAE2DF] text-black rounded-md hover:bg-[#0A171A] hover:text-white">Add Favorites</button>
        </>
    );
}

export default ArtistInfo;

// Display nothing as default and disable button when no artist is selected
// button***