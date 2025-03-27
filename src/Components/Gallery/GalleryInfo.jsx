const GalleryInfo = () =>{
    return(
        <>
            <div className="mt-2 space-y-2">
                    <p><strong>Name:</strong> <span id="gallery-name" className="text-[#3D5C64]">Select a gallery</span></p>
                    <p><strong>Native Name:</strong> <span id="gallery-native" className="text-[#3D5C64]">-</span></p>
                    <p><strong>City:</strong> <span id="gallery-city" className="text-[#3D5C64]">-</span></p>
                    <p><strong>Address:</strong> <span id="gallery-address" className="text-[#3D5C64]">-</span></p>
                    <p><strong>Country:</strong> <span id="gallery-country" className="text-[#3D5C64]">-</span></p>
                    <p><strong>URL:</strong> <a href="#" id="gallery-url" className="text-blue-500 underline">-</a></p>
                </div>
                <button className="mt-4 px-4 py-2 bg-[#0A171A] text-white rounded-md hover:bg-[#DAE2DF] hover:text-black">Add Favorites</button>

                <div className="mt-4 w-full h-48 bg-[#DAE2DF] flex items-center justify-center rounded-lg">
                    <p className="text-[#6B8B93]">Map (React Leaflet)</p>
                </div>
        </>
    );
}

export default GalleryInfo;