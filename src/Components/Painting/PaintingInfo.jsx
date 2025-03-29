import PaintingDomColItem from "./PaintingDomColItem";

// Input: painting, key,  
const PaintingInfo = (props) => {

    const imageFileName = String(props.painting.imageFileName);
    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-5xl relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Painting Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200" onClick={props.onClose}>Close</button>
                        <button className="px-4 py-2 border border-gray-400 rounded-md font-semibold hover:bg-gray-200">Add Favorites</button>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-[300px] h-[300px] bg-gray-200 border border-gray-400 flex items-center justify-center text-gray-600 text-lg">
                        <img src={`https://res.cloudinary.com/funwebdev/image/upload/art/paintings/square/${imageFileName.padStart(6,'0')}.jpg`} alt="Thumbnail" className="w-full h-full object-cover rounded-md"/>
                    </div>

                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2">
                        <h3 className="text-3xl font-bold text-left">{props.painting.title}</h3>
                        <p className="text-xl font-semibold text-left">{props.painting.artistName}</p>

                        <div className="text-left text-gray-700 space-y-1 mt-2">
                            <p><span className="font-semibold">Year of Work:</span> {props.painting.yearOfWork}</p>
                            <p><span className="font-semibold">Medium:</span> {props.painting.title}</p>
                            <p><span className="font-semibold">Width:</span> {props.painting.width} cm</p>
                            <p><span className="font-semibold">Height:</span> {props.painting.height} cm</p>
                            <p><span className="font-semibold">Copyright:</span> NA</p>
                            <p><span className="font-semibold">Gallery Name:</span> {props.painting.galleryName}</p>
                            <p><span className="font-semibold">Gallery City:</span> {props.painting.galleryCity}</p>
                            <p>
                            <span className="font-semibold">Museum Link:</span>{' '}
                            <a href={props.painting.museumLink} className="underline text-blue-600 hover:text-blue-800">View Museum</a>
                            </p>
                            <p>
                            <span className="font-semibold">Wiki Link:</span>{' '}
                            <a href={props.painting.wikiLink} className="underline text-blue-600 hover:text-blue-800">View Wiki</a>
                            </p>
                            <p><span className="font-semibold">Description:</span> {props.painting.description}</p>
                            <p><span className="font-semibold">Copyright Text:</span> {props.painting.copyrightText}</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-xl text-left font-bold mb-2">Dominant Colors</p>
                            <div className="flex gap-2">
                                {props.painting.domColors.map(c => <PaintingDomColItem key={`${c.web}-${c.name}`} colourCode={c.web} colourName={c.name}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaintingInfo;