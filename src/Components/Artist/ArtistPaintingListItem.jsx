const ArtistPaintingListItem = (props) => {
    const imageFileName = String(props.painting.imageFileName);
    return(
        <div className="flex items-center gap-6 p-6 rounded-md bg-[#DAE2DF] border-[#6B8B93]">
            <img src={`/paintings/square/${imageFileName.padStart(6, '0')}.jpg`} alt="Thumbnail" className="w-20 h-20 object-cover rounded-md"/>
            <div className="text-left space-y-1">
                <p className="text-lg font-semibold text-[#0A171A]">{props.painting.title}</p>
                <p className="text-sm text-[#3D5C64]">Artist: {props.painting.artistName}</p>
                <p className="text-sm text-[#3D5C64]">Year: {props.painting.yearOfWork}</p>
                <p className="text-sm text-[#3D5C64]">Gallery: {props.painting.galleryName}</p>
                <p className="text-sm text-[#3D5C64]">Medium: {props.painting.medium}</p>
                <p className="text-sm text-[#3D5C64]">Size: (WxH) {props.painting.width} cm × {props.painting.height} cm</p>
                <button className="mt-2 px-4 py-2 rounded-md bg-[#3D5C64] text-white font-semibold hover:bg-[#6B8B93] transition" onClick={() => props.learnMore(props.painting)}>Learn More</button>
            </div>
        </div>
    );
}

export default ArtistPaintingListItem;