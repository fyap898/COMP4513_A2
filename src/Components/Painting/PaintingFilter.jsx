const PaintingFilter = () => {
    return(
        <div className="mt-4 space-y-4">
            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Title</span>
                <input type="text" className="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled/>
            </label>

            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Artist</span>
                <select className="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled>
                    <option>Select an Artist</option>
                    <option>idk</option>
                </select>
            </label>

            <label className="flex items-center space-x-2">
                <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]"/>
                <span className="text-[#0A171A]">Gallery</span>
                <select className="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-full" disabled>
                    <option>Select a Gallery</option>
                    <option>idk</option>
                </select>
            </label>

            <div className="flex flex-col">
                <label className="flex items-center space-x-2">
                    <input type="radio" name="filter" className="w-4 h-4 text-[#3D5C64]"/>
                    <span className="text-[#0A171A]">Year</span>
                </label>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[#0A171A]">Less</span>
                    <input type="text" className="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-16"/>
                    <span className="text-[#0A171A]">Greater</span>
                    <input type="text" className="border border-[#6B8B93] bg-[#DAE2DF] rounded-md px-2 py-1 w-16"/>
                </div>
            </div>

            <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 bg-[#3D5C64] text-[#DAE2DF] rounded-md hover:bg-[#0A171A]">Clear</button>
                <button className="px-4 py-2 bg-[#0A171A] text-white rounded-md hover:bg-[#3D5C64]">Filter</button>
            </div>

        </div>
    );
}

export default PaintingFilter;