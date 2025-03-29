import PaintingListItem from "./PaintingListItem";

const PaintingList = (props) => {

    return(
        <div className="mt-6 space-y-4">
            {props.paintings.map(p => <PaintingListItem painting={p} key={p.paintingId} learnMore={props.learnMore}/>)}
        </div>
    );
}

export default PaintingList;