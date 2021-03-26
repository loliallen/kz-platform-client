import React, { Component } from 'react'
import "./style.css"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Typography } from '@material-ui/core';
import { StyledButton } from '../../containers/StyledButton';
import { MessageSendIcon } from '../../containers/Icons/MessageSend';
import { Link } from 'react-router-dom';

export class MapContainer extends Component {
    state = {
        center: { lat: 55.73, lng: 49.2 },
        zoom: 15
    }
    render() {
        const containerStyle = {
            height: "100vh",
        }
        const width = window.innerWidth
        return (
            <div style={{ position: 'relative' }}>
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
                <div
                    style={{
                        position: "absolute",
                        zIndex: 11,
                        top: "185px",
                        left: width < 800 ? "20px" : "128px",
                        right: "20px",
                        height: "120px",
                        color: "white",
                        fontWeight: "700"
                    }}
                >
                    <Typography
                        variant={ width < 800 ? "h3" :"h2"}
                    >
                        {`Сообщайте\nо проблемах`}
                    </Typography>
                    {width < 800 &&
                        <Link to="/home/appeal/create">
                            <StyledButton
                            style={{marginTop: "30px"}}
                            color="primary"
                            variant="contained"
                            fullWidth
                            startIcon={<MessageSendIcon style={{width: "30px", height: "30px", stroke: "white", fill: "transparent" }} />}
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
