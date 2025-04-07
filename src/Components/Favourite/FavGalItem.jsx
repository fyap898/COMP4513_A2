const FavGalItem = (props) => {
    return(
        <>
        {/* <li className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-700 text-left">Gallery Name 1</h4>
            <p className="text-sm text-gray-500 text-left">Description of this genre. It is coy used in...</p>
            <p className="text-sm text-gray-500 text-left">Description of this genre</p>
            <div className="mt-2 flex justify-between">
                <a href="#" className="text-blue-500 hover:underline text-sm">More Info</a>
                <button className="text-red-500 hover:text-red-700 text-sm">Remove</button>
            </div>
        </li> */}
        <div className="flex items-center gap-6 p-6 rounded-md bg-[#A0BBBF] border-[#6B8B93]">
                {/* <img src={`https://res.cloudinary.com/funwebdev/image/upload/h_200/art/paintings/square/${imageFileName.padStart(6, '0')}.jpg`} alt="Thumbnail" className="w-20 h-20 object-cover rounded-md"/> */}
                <div className="text-left space-y-1">
                    <p className="text-lg font-semibold text-[#0A171A]">{props.gallery.galleryName}</p>
                    <p className="text-sm text-[#3D5C64]">Native Name: {props.gallery.galleryNativeName}</p>
                    <p className="text-sm text-[#3D5C64]">Country: {props.gallery.galleryCountry}</p>
                </div>
                <div className="ml-auto flex flex-col items-end space-y-2">
                    <button className="mt-2 px-4 py-2 rounded-md bg-[#3D5C64] text-white font-semibold hover:bg-[#6B8B93] transition" onClick={() => props.learnMore(props.gallery)}>Learn More</button>
                    <button className="px-3 py-1 text-sm rounded-md bg-[#3D5C64] text-white font-medium hover:bg-red-600 transition" onClick={() => props.remove(props.gallery)} >Remove</button>
                </div>
            </div>
        </>
    );
}

export default FavGalItem;