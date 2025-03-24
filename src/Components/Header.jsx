const Header = (props) => {
    return(
        <header class="flex justify-between items-center bg-[#6B8B93] w-full fixed top-0 left-0 h-25 z-50 px-8 shadow-md">
            <div class="text-lg text-[#DAE2DF] font-bold ml-8">Logo</div>
            <h2 class="text-2xl font-semibol text-[#DAE2DF]">Art Dashboard Project {props.title} View</h2>
            <nav class="space-x-4 mr-8">
                <button class="px-6 py-3 rounded-md bg-[#3D5C64] text-[#DAE2DF]">Artists</button>
                <button class="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">Paintings</button>
                <button class="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">Galleries</button>
                <button class="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">Genres</button>
                <button class="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">Favorites</button>
                <button class="px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white">About</button>
            </nav>
        </header>
    );
}

export default Header;

// "px-6 py-3 rounded-md bg-[#3D5C64] text-[#DAE2DF]" chosen
// "px-6 py-3 rounded-md bg-[#A0BBBF] text-black hover:bg-[#0A171A] hover:text-white" rest
