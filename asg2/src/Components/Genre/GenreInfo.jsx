const GenreInfo = () => {
    return(
        <div class="flex flex-wrap gap-4">
            <p class="flex items-center"><strong class="mr-2">Name:</strong> <span id="genre-name" class="text-gray-700">Select a genre</span></p>
            <p class="flex items-center"><strong class="mr-2">Description:</strong> <span id="genre-description" class="text-gray-700">-</span></p>
            <p class="flex items-center"><strong class="mr-2">More Info:</strong> <a href="#" id="genre-url" class="text-blue-500 underline">-</a></p>
        </div>
    );
}

export default GenreInfo;