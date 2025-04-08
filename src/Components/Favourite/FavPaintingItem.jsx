// File Name: FavPaintingItem
// Purpose: Populates individual favourited painting info in one list object
//          for user to view and remove from favourite
// Detail: Utilised by FavouritePainting component to fully populate all favourited
//          painting object.

const FavPaintingItem = (props) => {
    const imageFileName = String(props.painting.imageFileName);
    return(
        <>
            <div className="flex items-center gap-6 p-6 rounded-md bg-[#A0BBBF] border-[#6B8B93]">
                <img src={`https://res.cloudinary.com/funwebdev/image/upload/h_200/art/paintings/square/${imageFileName.padStart(6, '0')}.jpg`} alt="Thumbnail" className="w-20 h-20 object-cover rounded-md"/>
                <div className="text-left space-y-1">
                    <p className="text-lg font-semibold text-[#0A171A]">{props.painting.title}</p>
                    <p className="text-sm text-[#3D5C64]">Artist: {props.painting.artistName}</p>
                    <p className="text-sm text-[#3D5C64]">Year: {props.painting.yearOfWork}</p>
                    <p className="text-sm text-[#3D5C64]">Gallery: {props.painting.galleryName}</p>
                    <p className="text-sm text-[#3D5C64]">Medium: {props.painting.medium}</p>
                    <p className="text-sm text-[#3D5C64]">Size: (WxH) {props.painting.width} cm × {props.painting.height} cm</p>
                </div>
                <div className="ml-auto flex flex-col items-end space-y-2">
                    <button className="mt-2 px-4 py-2 rounded-md bg-[#3D5C64] text-white font-semibold hover:bg-[#6B8B93] transition" onClick={() => props.learnMore(props.painting)}>Learn More</button>
                    <button className="px-3 py-1 text-sm rounded-md bg-[#3D5C64] text-white font-medium hover:bg-red-600 transition" onClick={() => props.remove(props.painting)}>Remove</button>
                </div>
            </div>
        </>
    );
}

export default FavPaintingItem;