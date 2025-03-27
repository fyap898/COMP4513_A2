const ArtistListItem = (props) => {

    const name = props.firstName ? `${props.firstName} ${props.lastName}` : props.lastName;
    return (
        <li className="cursor-pointer p-2 hover:bg-[#DAE2DF] rounded">{name}</li>
    );
}

export default ArtistListItem;