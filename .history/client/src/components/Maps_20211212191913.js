import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import {PostFormPage, eventLocation } from "../pages/PostFormPage";


function GMap(){
    return (
        <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{lat: 40.7128, lng: -74.0060}}
        > 
        </GoogleMap>
    );
}


const WrappedMap = withScriptjs(withGoogleMap(GMap));
 
export default function Map() {
    return(
        <div style={{ width: "600px", height: "400px" }}>
            <WrappedMap
                googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8elomWP1QiWtBxQnatkC986I3ec2dl30&callback=initMap&libraries=&v=weekly"}
                loadingElement = {<div style={{ height: "100%" }} />}
                containerElement = {<div style={{ height: "100%" }} />}     
                mapElement = {<div style={{ height: "100%" }} />}                 
                
            />
        </div>
    );
}