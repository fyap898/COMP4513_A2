import {useState} from 'react';

const FavouriteManip = (props) => {

    const [showToast, setShowToast] = useState(false);
    const handleRemFav = () => {
        props.emptyFav();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };
    
    return(
        <>
            <div className="space-x-4 z-20">
                <button className="px-4 py-2 bg-gray-220 rounded-md cursor-pointer hover:bg-gray-300" onClick={() => handleRemFav()}>Empty All Favourites</button>
            </div>
            {showToast && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A0BBBF] text-black px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInOut">
                  Removed All Favourites
                </div>
            )}
        </>
    );
}

export default FavouriteManip;