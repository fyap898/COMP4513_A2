// File Name: PaintingList
// Purpose: Renders list of paintings for user to select for adding to
//          favourite list
// Detail: This components initially populates all painting objects while
//          allowing users to setting filter layers on paintings.

import PaintingListItem from "./PaintingListItem";

const PaintingList = (props) => {

    return(
        <div className="mt-6 space-y-4">
            {props.paintings.map(p => <PaintingListItem painting={p} key={p.paintingId} learnMore={props.learnMore}/>)}
        </div>
    );
}

export default PaintingList;