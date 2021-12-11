import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { GoogleMap, useLoadScript, Marker, infowindow} from "@react-google-maps/api";
// import usePlacesAutocomplete, {getGeocode, getLatLng, } from "use-places-autocomplete";

const libraries = ["places"];
const mapContainerStyle = {
    width: "400px",
    height: "400px",
};
const center = {
    lat: 40.7128, 
    lng: -74.0060
}

export default function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading apps";
    if (!isLoaded) return "loading maps";

    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={11} 
                center={center}
            ></GoogleMap>
        </div>
    );
}

// function GMap(){
//     return (
//         <GoogleMap 
//             defaultZoom={11} 
//             defaultCenter={{lat: 40.7128, lng: -74.0060}}
//         /> 
//     );
// }

// function Search(){
//     const {} = usePlacesAutocomplete({
//         requestOptions: {
//             location: {lat: () => }
//         }
//     })
//   }

// const WrappedMap = withScriptjs(withGoogleMap(GMap));
 
// export default function Map() {
//     return(
//         <div style={{ width: "600px", height: "400px" }}>
//             <WrappedMap
//                 googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8elomWP1QiWtBxQnatkC986I3ec2dl30&callback=initMap&libraries=&v=weekly"}
//                 loadingElement = {<div style={{ height: "100%" }} />}
//                 containerElement = {<div style={{ height: "100%" }} />}     
//                 mapElement = {<div style={{ height: "100%" }} />}                 
                
//             />
//         </div>
//     );
// }