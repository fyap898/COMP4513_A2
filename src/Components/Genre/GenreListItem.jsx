// File Name: GenreListItem
// Purpose: Populates individual genre info in one list object for user 
//          to select for info population
// Detail: Utilised by GenreList component to fully populate genre objects

const GenreListItem = (props) => {
    return(
        <li className="cursor-pointer p-2 hover:bg-[#A0BBBF] rounded" onClick={() => props.populateInfo(props.genre)}>{props.genre.genreName}</li>
    );
}
export default GenreListItem;