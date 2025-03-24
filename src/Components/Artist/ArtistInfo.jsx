const ArtistInfo = () => {
    return(
        <>
            <div class="mt-2 space-y-2 text-left">
              <p><strong>Name:</strong> <span id="artist-name" class="text-[#DAE2DF]">Select an artist</span></p>
              <p><strong>Nationality:</strong> <span id="artist-nationality" class="text-[#DAE2DF]">-</span></p>
              <p><strong>Gender:</strong> <span id="artist-gender" class="text-[#DAE2DF]">-</span></p>
              <p><strong>Years:</strong> <span id="artist-years" class="text-[#DAE2DF]">-</span></p>
              <p><strong>Details:</strong> <span id="artist-details" class="text-[#DAE2DF]">-</span></p>
              <p><strong>URL:</strong> <a href="#" id="artist-url" class="text-blue-400 underline">-</a></p>
            </div>
            <div class="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">Artist Image</div>
            <button class="mt-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Add Favorites</button>
        </>
    );
}

export default ArtistInfo;

// Display nothing as default and disable button when no artist is selected
// button***