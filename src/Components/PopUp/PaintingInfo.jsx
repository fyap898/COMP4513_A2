// File Name: PaintingInfo
// Purpose: Pop up for detailed painting's information
// Detail: Pops up and display respective painting's information and allow user
//          to add respective painting to favourite.

import PaintingDomColItem from "../Painting/PaintingDomColItem";
import {useState} from 'react';

// Input: painting, key,  
const PaintingInfo = (props) => {

    const [showToast, setShowToast] = useState(false);

    const imageFileName = String(props.painting.imageFileName);
    const description = props.painting?.description === "" ? "NA" : props.painting.description;

    const inFav = props.painting && props.favPainting
    ? props.favPainting.some(p => p.paintingId === props.painting.paintingId)
    : false;
    
    const getButtonStyle = (inFav) => {
        return inFav
        ? "px-4 py-2 border border-gray-400 rounded-md font-semibold bg-gray-400 cursor-not-allowed"
        : "px-4 py-2 border border-gray-400 rounded-md font-semibold hover:bg-gray-200";
    }

    const handleAddToFav = () => {
        props.onFav();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 overflow-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-6xl relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Painting Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button onClick={props.onClose} className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">Close</button>
                        <button onClick={handleAddToFav} disabled={inFav} className={getButtonStyle(inFav)}>Add Favorites</button>
                    </div>
                </div>

                {/* Content layout */}
                <div className="flex gap-6">
                
                {/* Left Image Panel */}
                    <div className="flex-shrink-0 w-[300px] max-h-[90vh] overflow-hidden flex items-center justify-center">
                        <img
                        src={`/paintings/full/${imageFileName.padStart(6, '0')}.jpg`}
                        alt="Thumbnail"
                        className="max-w-full max-h-[90vh] object-contain rounded-md"
                        />
                    </div>

                    {/* Right Info Panel */}
                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2 overflow-y-auto max-h-[90vh] pr-2">
                        <h3 className="text-3xl font-bold text-left">{props.painting.title}</h3>
                        <p className="text-xl font-semibold text-left">{props.painting.artistName}</p>

                        <div className="text-left text-gray-700 space-y-1 mt-2">
                            <p><span className="font-semibold">Year of Work:</span> {props.painting.yearOfWork}</p>
                            <p><span className="font-semibold">Medium:</span> {props.painting.medium}</p>
                            <p><span className="font-semibold">Width:</span> {props.painting.width} cm</p>
                            <p><span className="font-semibold">Height:</span> {props.painting.height} cm</p>
                            <p><span className="font-semibold">Gallery Name:</span> {props.painting.galleryName}</p>
                            <p><span className="font-semibold">Gallery City:</span> {props.painting.galleryCity}</p>
                            <p><span className="font-semibold">Museum Link:</span> <a href={props.painting.museumLink} className="hover:underline text-blue-600 hover:text-blue-800">View Museum</a></p>
                            <p><span className="font-semibold">Wiki Link:</span> <a href={props.painting.wikiLink} className="hover:underline text-blue-600 hover:text-blue-800">View Wiki</a></p>
                            <p><span className="font-semibold">Description:</span> {description}</p>
                            <p><span className="font-semibold">Copyright Text:</span> {props.painting.copyrightText}</p>
                        </div>

                        {/* Colors */}
                        <div className="mt-4">
                            <p className="text-xl text-left font-bold mb-2">Dominant Colors</p>
                            <div className="flex gap-2 flex-wrap">
                                {props.painting.domColors.map(c => (
                                <PaintingDomColItem key={`${c.web}-${c.name}`} colourCode={c.web} colourName={c.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A0BBBF] text-black px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInOut">
                  Added to Favourites!
                </div>
            )}
        </div>

    );
}

export default PaintingInfo;