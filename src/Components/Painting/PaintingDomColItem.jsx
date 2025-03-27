const PaintingDomColItem = (props) => {
    return(
        <div className="w-8 h-8 rounded-md border border-gray-300" style={{ backgroundColor: props.colourCode }} title={props.colourName}></div>
    );
}

export default PaintingDomColItem