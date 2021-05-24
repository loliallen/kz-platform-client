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
        zoom: 15,
        infoboxMessage: '',
        isInfoboxVisible: false,
        markerLang: 0,
        markerLat: 0,
        markerId: null,
        center: {},
        pos: null,
    }
    setCoords(pos, i){
        let dlat = 0;
        let dlng = 0;
        if (i % 4 === 0) {
            dlat = + 0.015
            dlng = + 0.012
        }
        if (i % 4 === 1) {
            dlat = + 0.01
            dlng = - 0.012
        }
        if (i % 4 === 2) {
            dlat = - 0.015
            dlng = + 0.012
        }
        if (i % 4 === 3) {
            dlat = - 0.015
            dlng = - 0.012
        }

        dlat = dlat * (1 + i * 0.03)
        dlng = dlng * ( 1 + i * 0.03)

        return {
            lat: pos.lat + dlat,
            lng: pos.lng + dlng
        }
    }
    setPosition(v){
        this.setState({
            pos: {
                lat: v.coords.latitude,
                lng: v.coords.longitude
            }
        })
    }
    getPosition() {
        this.setState({
            markerId: this.props.randomPoints[0]?.id,
            infoboxMessage: this.props.randomPoints[0]?.comment?.substr(0, 15) || "" + '...', // Message shown in info window
            isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
            markerLang: this.pos.lat + 0.004 + 0.015, // Y coordinate for positioning info window
            markerLat: this.pos.lng + 0.012 // X coordinate for positioning info window
        })
    }
    componentDidUpdate(){
        if (this.props.points?.length > 0)
            this.getPosition()
    }
    componentDidMount() {
        if (navigator.geolocation) {
            if (this.props.randomPoints)
                navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
    }

    handleMarkerClick = (message, lang, lat, id) => {
        this.setState({
            infoboxMessage: message, // Message shown in info window
            isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
            markerLang: lang + 0.004, // Y coordinate for positioning info window
            markerLat: lat, // X coordinate for positioning info window
            markerId: id
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
                <Map
                    // googleMapURL={``}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ position: "absolute", width: "100%", height: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
                    infoboxMessage={this.state.infoboxMessage} // Message shown in info window
                    handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
                    handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
                    infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
                    infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
                    markerId={this.state.markerId}
                    center={this.state.pos}
                    points={
                        this.state.pos && this.props.randomPoints.map((r, i) => {
                            const res = {
                                id: r.id,
                                status: r.status,
                                coords: this.setCoords(this.state.pos, i),
                                label: r.comment.substr(0, 15) + '...'
                            }
                            return res
                        })
                }
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
                        <Link className="link" to="/home/appeal/create">
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
