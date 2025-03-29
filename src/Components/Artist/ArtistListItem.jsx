const ArtistListItem = (props) => {

    const name = props.artist.firstName ? `${props.artist.firstName} ${props.artist.lastName}` : props.artist.lastName;
    return (
        <li className="cursor-pointer p-2 hover:bg-[#DAE2DF] rounded" onClick={() => props.populateInfo(props.artist)}>{name}</li>
    );
}

export default ArtistListItem;