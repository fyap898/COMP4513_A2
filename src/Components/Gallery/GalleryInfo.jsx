// File Name: GalleryInfo
// Purpose: Populates selected artist's information and for user to add to favourite
// Detail: This component takes in selected gallery object and favourite
//          gallery list, populates gallery info. Users are able to add
//          artist to favourite. While the system will check whether if the
//          artist exists in favourite lsit and allow user to add.

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useState, useEffect} from 'react';

// Fix default marker icon (Leaflet bug in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const GalleryInfo = (props) =>{

    const [showToast, setShowToast] = useState(false);

    //Populating gallery's info
    const {gallery} = props;
    const galleryName = gallery ? gallery.galleryName : "N/A";
    const nativeName = gallery ? gallery.galleryNativeName : "-";
    const city = gallery ? gallery.galleryCity : "-";
    const address = gallery ? gallery.galleryAddress : "-";
    const country = gallery ? gallery.galleryCountry : "-";
    const url = gallery ? gallery.galleryWebsite : "#";
    const galleryHyperlink = url === "#" ? "Gallery Link Not Available" : "Gallery Link";

    const lat = gallery?.latitude || 0;
    const lng = gallery?.longitude || 0;

    // Update map every time new gallery is clicked
    const MapUpdater = ({ lat, lng }) => {
        const map = useMap();
        
        useEffect(() => {
            map.setView([lat, lng], 13);
        }, [lat, lng, map]);
        
        return null;
    };

    const inFav = gallery && props.favGal
        ? props.favGal.some(g => g.galleryId === gallery.galleryId)
        : false;

    const getButtonStyle = (inFav) => {
        return inFav
        ? "mt-4 px-4 py-2 text-white rounded-md bg-gray-400 cursor-not-allowed"
        : "mt-4 px-4 py-2 text-white rounded-md bg-[#0A171A] cursor-pointer hover:bg-[#DAE2DF] hover:text-black";
    }

    const handleAddToFav = () => {
        props.onFav();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      };

    return(
        <>
            <div className="mt-2 space-y-2">
                <p><strong>Name:</strong> <span id="gallery-name" className="text-[#3D5C64]">{galleryName}</span></p>
                <p><strong>Native Name:</strong> <span id="gallery-native" className="text-[#3D5C64]">{nativeName}</span></p>
                <p><strong>City:</strong> <span id="gallery-city" className="text-[#3D5C64]">{city}</span></p>
                <p><strong>Address:</strong> <span id="gallery-address" className="text-[#3D5C64]">{address}</span></p>
                <p><strong>Country:</strong> <span id="gallery-country" className="text-[#3D5C64]">{country}</span></p>
                <p><strong>URL:</strong> <a href={url} id="gallery-url" className="text-blue-500 hover:underline">{galleryHyperlink}</a></p>
            </div>
            <button onClick={handleAddToFav} disabled={inFav} className={getButtonStyle(inFav)}>Add Favorites</button>

            {lat && lng ? (
                <div className="mt-4 w-full h-48 z-10 relative rounded-lg overflow-hidden">
                <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <MapUpdater lat={lat} lng={lng} />
                    <Marker position={[lat, lng]}>
                        <Popup>{galleryName}</Popup>
                    </Marker>
                </MapContainer>
                </div>
            ) : (
                <div className="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg text-[#6B8B93]">
                No location data available
                </div>
            )}
            {showToast && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A0BBBF] text-black px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInOut">
                  Added to Favourites!
                </div>
            )}
        </>
    );
}

export default GalleryInfo;