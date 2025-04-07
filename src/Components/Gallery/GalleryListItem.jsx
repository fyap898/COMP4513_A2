const GalleryListItem = (props) => {
    return(
        <li className="cursor-pointer p-2 hover:bg-[#6B8B93] rounded text-[#0A171A]" onClick={() => props.populateInfo(props.gallery)}>{props.gallery.galleryName}</li>
    );
}

export default GalleryListItem;