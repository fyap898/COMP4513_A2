const PaintingListItem = () => {
    return(
        <div class="flex items-center gap-4 pb-2 bg-[#DAE2DF] border-[#6B8B93]">
            <img src="https://via.placeholder.com/80" alt="Thumbnail" class="w-20 h-20 object-cover rounded-md"/>
            <div class="text-left">
                <p class="text-lg font-semibold text-[#0A171A]">Starry Night</p>
                <p class="text-sm text-[#3D5C64]">Artist: Vincent van Gogh</p>
                <p class="text-sm text-[#3D5C64]">Year: 1889</p>
                <p class="text-sm text-[#3D5C64]">Gallery: Museum of Modern Art</p>
                <p class="text-sm text-[#3D5C64]">Medium: Oil on Canvas</p>
                <p class="text-sm text-[#3D5C64]">Size: (WxH) 73.7 cm × 92.1 cm</p>
            </div>
        </div>
    );
}

export default PaintingListItem;