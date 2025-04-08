// File Name: PaintingDomColItem
// Purpose: Populates respective painting's dominant colours
// Detail: Utilised by Painting Info to display dominant colours info.

const PaintingDomColItem = (props) => {
    return(
        <div className="w-8 h-8 rounded-md border border-gray-300" style={{ backgroundColor: props.colourCode }} title={props.colourName}></div>
    );
}

export default PaintingDomColItem