const ArtistInfo = () => {
    return(
        <>
            <div class="mt-2 space-y-2 text-left">
              <p><strong>Name:</strong> <span id="artist-name" class="text-gray-700">Select an artist</span></p>
              <p><strong>Nationality:</strong> <span id="artist-nationality" class="text-gray-700">-</span></p>
              <p><strong>Gender:</strong> <span id="artist-gender" class="text-gray-700">-</span></p>
              <p><strong>Years:</strong> <span id="artist-years" class="text-gray-700">-</span></p>
              <p><strong>Details:</strong> <span id="artist-details" class="text-gray-700">-</span></p>
              <p><strong>URL:</strong> <a href="#" id="artist-url" class="text-blue-500 underline">-</a></p>
            </div>
            <div class="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">Artist Image</div>
            <button class="mt-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Add Favorites</button>
        </>
    );
}

export default ArtistInfo;