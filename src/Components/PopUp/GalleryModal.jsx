// File Name: GalleryModal
// Purpose: Pop up for detailed gallery's information
// Detail: Pops up and display respective gallery's information.

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon (Leaflet bug in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const GalleryModal = (props) => {

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

   

    return(
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-60 overflow-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-6xl min-h-[550px] relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-center w-full">Gallery Details</h2>
                    <div className="absolute right-8 top-8 flex gap-2">
                        <button onClick={props.onClose} className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200">Close</button>
                    </div>
                </div>

                <div className="flex gap-6">
                
                    <div className="flex-shrink-0 w-[300px] h-[300px] overflow-hidden flex items-center justify-center">
                        <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[lat, lng]}>
                                <Popup>{galleryName}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className="flex flex-col justify-start text-[#0A171A] space-y-2 overflow-y-auto max-h-[90vh] pr-2">
                        <h3 className="text-3xl font-bold text-left">{galleryName}</h3>

                        <div className="text-left text-gray-700 space-y-1 mt-2">

                            <p><span className="font-semibold">Gallery Native Name:</span> {nativeName}</p>
                            <p><span className="font-semibold">Gallery City:</span> {city}</p>
                            <p><span className="font-semibold">Gallery Address:</span> {address}</p>
                            <p><span className="font-semibold">Gallery Country:</span> {country}</p>
                            <p><span className="font-semibold">Gallery Latitude:</span> {lat}</p>
                            <p><span className="font-semibold">Gallery Longitude:</span> {lng}</p>
                            <p><span className="font-semibold">Gallery Website:</span> <a href={url} className="hover:underline text-blue-600 hover:text-blue-800">{galleryHyperlink}</a></p>
                        </div>
                        <div className="mt-6">
                            <p className="text-xl text-left font-bold mb-2">External Links</p>
                            <div className="flex gap-4 items-center">
                                {/* Flickr */}
                                {gallery.flickrPlaceId && (
                                <a
                                    href={`https://www.flickr.com/places/info/${gallery.flickrPlaceId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-blue-600 transition"
                                >
                                    <img src="/Flickr.png" alt="Flickr" className="w-6 h-6" title="Flickr"/>
                                </a>
                                )}

                                {/* Yahoo WOEID */}
                                {gallery.yahooWoeId && (
                                <a
                                    href={`https://www.yahoo.com/news/weather/?woeid=${gallery.yahooWoeId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-blue-600 transition"
                                >
                                    <img src="/Yahoo.png" alt="Yahoo" className="w-6 h-6" title="Yahoo"/>
                                </a>
                                )}

                                {/* Google Place */}
                                {gallery.googlePlaceId && (
                                <a
                                    href={`https://www.google.com/maps/place/?q=place_id:${gallery.googlePlaceId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-blue-600 transition"
                                >
                                    <img src="/GoogleMap.png" alt="Google Maps" className="w-6 h-6" title="Google Map"/>
                                </a>
                                )}
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>

    );
}

export default GalleryModal;