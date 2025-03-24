import PaintingDomColItem from "./PaintingDomColItem";

const PaintingInfo = () => {
    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-5xl relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Painting Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">Close</button>
                        <button className="px-4 py-2 border border-gray-400 rounded-md font-semibold hover:bg-gray-200">Add Favorites</button>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-[300px] h-[300px] bg-gray-200 border border-gray-400 flex items-center justify-center text-gray-600 text-lg">
                        Painting image
                    </div>

                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2">
                        <h3 className="text-3xl font-bold text-left">Painting Title</h3>
                        <p className="text-xl font-semibold text-left">Artist Name</p>

                        <div className="text-left text-gray-700 space-y-1 mt-2">
                            <p><span className="font-semibold">Year of Work:</span> 1889</p>
                            <p><span className="font-semibold">Medium:</span> Oil on Canvas</p>
                            <p><span className="font-semibold">Width:</span> 73.7 cm</p>
                            <p><span className="font-semibold">Height:</span> 92.1 cm</p>
                            <p><span className="font-semibold">Copyright:</span> Public Domain</p>
                            <p><span className="font-semibold">Gallery Name:</span> Museum of Modern Art</p>
                            <p><span className="font-semibold">Gallery City:</span> New York</p>
                            <p>
                            <span className="font-semibold">Museum Link:</span>{' '}
                            <a href="#" className="underline text-blue-600 hover:text-blue-800">View Museum</a>
                            </p>
                            <p>
                            <span className="font-semibold">Wiki Link:</span>{' '}
                            <a href="#" className="underline text-blue-600 hover:text-blue-800">View Wiki</a>
                            </p>
                            <p><span className="font-semibold">Description:</span> This painting is one of van Gogh’s most iconic works...</p>
                            <p><span className="font-semibold">Copyright Text:</span> Image courtesy of Wikimedia Commons</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-xl text-left font-bold mb-2">Dominant Colors</p>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-md border border-gray-300"></div>
                                <div className="w-8 h-8 bg-orange-500 rounded-md border border-gray-300"></div>
                                <div className="w-8 h-8 bg-green-500 rounded-md border border-gray-300"></div>
                                <div className="w-8 h-8 bg-yellow-500 rounded-md border border-gray-300"></div>
                                <PaintingDomColItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaintingInfo;