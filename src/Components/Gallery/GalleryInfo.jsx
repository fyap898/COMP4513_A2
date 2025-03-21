const GalleryInfo = () =>{
    return(
        <>
            <div class="mt-2 space-y-2">
                    <p><strong>Name:</strong> <span id="gallery-name" class="text-gray-700">Select a gallery</span></p>
                    <p><strong>Native Name:</strong> <span id="gallery-native" class="text-gray-700">-</span></p>
                    <p><strong>City:</strong> <span id="gallery-city" class="text-gray-700">-</span></p>
                    <p><strong>Address:</strong> <span id="gallery-address" class="text-gray-700">-</span></p>
                    <p><strong>Country:</strong> <span id="gallery-country" class="text-gray-700">-</span></p>
                    <p><strong>URL:</strong> <a href="#" id="gallery-url" class="text-blue-500 underline">-</a></p>
                </div>
                <button class="mt-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Add Favorites</button>

                <div class="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                    <p>Map (React Leaflet)</p>
                </div>
        </>
    );
}

export default GalleryInfo;