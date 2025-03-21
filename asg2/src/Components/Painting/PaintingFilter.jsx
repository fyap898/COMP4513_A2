const PaintingFilter = () => {
    return(
        <div class="mt-4 space-y-4">
            <label class="flex items-center space-x-2">
                <input type="radio" name="filter" class="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Title</span>
                <input type="text" class="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled/>
            </label>

            <label class="flex items-center space-x-2">
                <input type="radio" name="filter" class="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Artist</span>
                <select class="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled>
                    <option>Select an Artist</option>
                    <option>idk</option>
                </select>
            </label>

            <label class="flex items-center space-x-2">
                <input type="radio" name="filter" class="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Gallery</span>
                <select class="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled>
                    <option>Select a Gallery</option>
                    <option>idk</option>
                </select>
            </label>

            <div class="flex flex-col">
                <label class="flex items-center space-x-2">
                    <input type="radio" name="filter" class="w-4 h-4 text-[#3D5C64]"/>
                    <span className="text-[#0A171A]">Year</span>
                </label>
                <div class="flex items-center space-x-2 mt-2">
                    <span className="text-[#0A171A]">Less</span>
                    <input type="text" class="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-16"/>
                    <span className="text-[#0A171A]">Greater</span>
                    <input type="text" class="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-16" value="2017"/>
                </div>
            </div>

            <div class="flex space-x-4 mt-4">
                <button class="px-4 py-2 bg-[#3D5C64] text-[#DAE2DF] rounded-md hover:bg-[#0A171A]">Clear</button>
                <button class="px-4 py-2 bg-[#0A171A] text-white rounded-md hover:bg-[#3D5C64]">Filter</button>
            </div>

        </div>
    );
}

export default PaintingFilter;