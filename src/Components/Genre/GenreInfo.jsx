const GenreInfo = () => {
    return(
        <div className="flex flex-wrap gap-4">
            <p className="flex items-center"><strong className="mr-2">Name:</strong> <span id="genre-name" className="text-[#3D5C64]">Select a genre</span></p>
            <p className="flex items-center"><strong className="mr-2">Description:</strong> <span id="genre-description" className="text-[#3D5C64]">-</span></p>
            <p className="flex items-center"><strong className="mr-2">More Info:</strong> <a href="#" id="genre-url" className="text-blue-500 underline">-</a></p>
        </div>
    );
}

export default GenreInfo;