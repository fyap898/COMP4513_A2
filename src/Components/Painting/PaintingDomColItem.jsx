const PaintingDomColItem = (props) => {
    return(
        <div className="w-8 h-8 rounded-md border border-gray-300" style={{ backgroundColor: props.colorCode }}></div>
    );
}

export default PaintingDomColItem