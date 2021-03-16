import React, { Component } from 'react'
import "./style.css"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Typography } from '@material-ui/core';

export class MapContainer extends Component {
    state = {
        center: { lat: 55.73, lng: 49.2 },
        zoom: 15
    }
    render() {
        const containerStyle = {
            height: "100vh",
        }
        return (
            <div style={{position: 'relative'}}>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: "black",
                        width: "100%",
                        height: "100vh",
                        opacity: 0.75
                    }}
                />
                <Typography
                    style={{
                        position: "absolute",
                        zIndex: 11,
                        top: "185px",
                        left: "120px",
                        width: "600px",
                        height: "120px",
                        color: "white",
                        fontWeight: "700"
                    }}
                    variant="h2"
                >
                    {`Сообщайте\nо проблемах`}
                </Typography>
                <div className="map_circle_wrapper">
                    <div className="map_circle map_circle_1">
                        <div className="map_circle map_circle_2">
                            <div className="map_circle map_circle_3">
                                <div className="map_circle map_circle_4"/>
                            </div>
                        </div>
                    </div>
                </div>
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
                />
            </div>
        );
    }
}

// const APIKEY = ""
export default GoogleApiWrapper({
    apiKey: "AIzaSyDWEKKmejfg92St2a1RJoo4gQeBseUjD3Q",
    language: "ru"
})(MapContainer)
