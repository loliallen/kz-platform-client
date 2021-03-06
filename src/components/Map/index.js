import { GoogleApiWrapper, Map } from "google-maps-react";
import React from "react"


export class MapContainer extends Component {
    state = {
        center: { lat: 55.73, lng: 49.2 },
        zoom: 15
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={this.state.zoom}
                containerStyle={containerStyle}
                mapTypeControl={false}
                fullscreenControl={false}
                zoomControl={false}
                panControl={false}
                streetViewControl={false}
                center={this.state.center}
                initialCenter={{ lat: 55.73, lng: 49.2 }}
            >
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDWEKKmejfg92St2a1RJoo4gQeBseUjD3Q",
    language: "ru"
})(MapContainer)