// File Name: FavGalItem
// Purpose: Populates individual favourited gallery info in one list object
//          for user to view and remove from favourite
// Detail: Utilised by FavouriteGallery component to fully populate all favourited
//          gallery object.

const FavGalItem = (props) => {
    return(
        <>
        <div className="flex items-center gap-6 p-6 rounded-md bg-[#A0BBBF] border-[#6B8B93]">
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