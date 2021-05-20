import React, { Component } from 'react'
import "./style.css"
import Map from "./Map"
import { Typography } from '@material-ui/core';
import { StyledButton } from '../../containers/StyledButton';
import { MessageSendIcon } from '../../containers/Icons/MessageSend';
import { Link } from 'react-router-dom';
import { api_key } from "../../utils/mapConfig"

export class MapContainer extends Component {
    state = {
        center: { lat: 55.73, lng: 49.2 },
        zoom: 15,
        infoboxMessage: '',
        isInfoboxVisible: false,
        markerLang: 0,
        markerLat: 0,
        points: []
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition.bind(this));
        }
        function getPosition(pos) {
            this.setState({
                center: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                },
                points: [
                    {
                        coords: {
                            lat: pos.coords.latitude - 0.01,
                            lng: pos.coords.longitude - 0.1
                        },
                        label: "Mock infobox",
                        status: 0
                    },
                    {
                        coords: {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                        },
                        label: "Mock infobox",
                        status: 0
                    },
                    {
                        coords: {
                            lat: pos.coords.latitude + 0.001,
                            lng: pos.coords.longitude - 0.04
                        },
                        label: "Mock infobox",
                        status: 1
                    },
                    {
                        coords: {
                            lat: pos.coords.latitude - 0.2,
                            lng: pos.coords.longitude + 0.023
                        },
                        label: "Mock infobox",
                        status: 3
                    },
                    {
                        coords: {
                            lat: pos.coords.latitude + 0.01,
                            lng: pos.coords.longitude + 0.01
                        },
                        label: "Mock infobox",
                        status: 5
                    },
                ],
                infoboxMessage: "Mock infobox", // Message shown in info window
                isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
                markerLang: pos.coords.latitude + 0.01 + 0.006, // Y coordinate for positioning info window
                markerLat: pos.coords.longitude + 0.01 - 0.0004 // X coordinate for positioning info window
            })
        }
    }

    handleMarkerClick = (message, lang, lat) => {
        this.setState({
            infoboxMessage: message, // Message shown in info window
            isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
            markerLang: lang + 0.006, // Y coordinate for positioning info window
            markerLat: lat - 0.0004 // X coordinate for positioning info window
        })
    }

    handleInfoboxClick = () => {
        this.setState({
            isInfoboxVisible: false
        })
    }
    render() {
        const containerStyle = {
            height: "100vh",
        }
        const width = window.innerWidth
        const points = [
            { status: 0, coords: { lat: 55.73, lng: 49.2 }, info: "Some info" }
        ]
        return (
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    position: 'relative'
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "185px",
                        left: width < 800 ? "11%" : "11%",
                        right: "20px",
                        height: "120px",
                        color: "white",
                        zIndex: 10,
                        pointerEvents: "none"
                    }}
                >
                    <Typography
                        variant={width < 800 ? "h3" : "h1"}
                        style={{
                            fontWeight: width < 800 ? "700" : "900"
                        }}
                    >
                        Сообщайте
                        <br />
                        о проблемах
                    </Typography>
                    {width < 800 &&
                        <Link to="/home/appeal/create">
                            <StyledButton
                                style={{ marginTop: "30px" }}
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<MessageSendIcon style={{ width: "30px", height: "30px", stroke: "white", fill: "transparent" }} />}
                            >Подать обращение</StyledButton>
                        </Link>
                    }
                </div>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
                    infoboxMessage={this.state.infoboxMessage} // Message shown in info window
                    handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
                    handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
                    infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
                    infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
                    points={this.state.points}
                />
                {/* <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "black",
                    opacity: 0.7,
                    zIndex: 4,
                    pointerEvents: "none"
                }} /> */}
            </div>
        );
    }
}

// const APIKEY = ""
export default MapContainer

/*
 <div style={{ position: 'relative' }}>
                <div
                    style={{
                        position: "absolute",
                        top: "185px",
                        left: width < 800 ? "11%" : "11%",
                        right: "20px",
                        height: "120px",
                        color: "white",
                    }}
                >
                    <Typography
                        variant={width < 800 ? "h3" : "h1"}
                        style={{
                            fontWeight: width < 800 ? "700" : "900"
                        }}
                    >
                        Сообщайте
                        <br />
                        о проблемах
                    </Typography>
                    {width < 800 &&
                        <Link to="/home/appeal/create">
                            <StyledButton
                                style={{ marginTop: "30px" }}
                                color="primary"
                                variant="contained"
                                fullWidth
                                startIcon={<MessageSendIcon style={{ width: "30px", height: "30px", stroke: "white", fill: "transparent" }} />}
                            >Подать обращение</StyledButton>
                        </Link>
                    }
                </div>
                <div className="map_circle_wrapper">
                    <div className="map_circle map_circle_1">
                        <div className="map_circle map_circle_2">
                            <div className="map_circle map_circle_3">
                                <div className="map_circle map_circle_4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        inset: 0,
                        backgroundColor: "black",
                        width: "100%",
                        height: "100vh",
                        opacity: 0.7
                    }}
                />
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
                    {points && points.map((e, i) => {
                        return <Marker
                            key={i}
                            position={e.coords}
                            icon={{
                                url: SelectSvg(e.status),
                                anchor: new window.google.maps.Point(30, 42),
                                scaledSize: new window.google.maps.Size(60, 65)
                            }}
                        />
                    })}
                </Map>
            </div>
*/
