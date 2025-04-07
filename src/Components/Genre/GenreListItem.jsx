const GenreListItem = (props) => {
    return(
        <li className="cursor-pointer p-2 hover:bg-[#A0BBBF] rounded" onClick={() => props.populateInfo(props.genre)}>{props.genre.genreName}</li>
    );
}
export default GenreListItem;