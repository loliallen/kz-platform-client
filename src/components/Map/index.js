import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import React, { Component } from 'react'
import UserPointSVG from './UserPoint.svg'
import PointIdleSVG from './PointIdle.svg'
import PointOnReviewSVG from './PointOnReview.svg'
import PointAnsweredSVG from './PointAnswered.svg'

const SelectSvg = (s) => {
    if (s > 0 && s < 5)
        return  PointOnReviewSVG;
    switch (s) {
        case 5:
            return PointAnsweredSVG;
        default:
            return PointIdleSVG;
    }
}

class MapContainer extends Component {
    state = {
        center: this.props.center || { lat: 55.73, lng: 49.2 },
        zoom: 14
    }
    componentDidMount() {
        console.log(this.props.center)
    }
    componentDidUpdate() {
        console.log("upd", this.props.center)
    }
    render() {
        const containerStyle = this.props.styles
        const points = this.props.points
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
                center={this.props.center}
                initialCenter={{ lat: 55.738367999999994, lng: 49.2077056 }}
            >
                {this.props.center && <Marker
                    position={this.props.center}
                    onDragend={(props, marker, e) => {
                        this.props.setLoc({
                            lat: marker.position.lat(),
                            lng: marker.position.lng()
                        })
                    }}
                    icon={{
                        url: UserPointSVG,
                        anchor: new window.google.maps.Point(30, 42),
                        scaledSize: new window.google.maps.Size(60, 65)
                    }}
                    draggable={true}
                />}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDWEKKmejfg92St2a1RJoo4gQeBseUjD3Q",
    language: "ru"
})(MapContainer)
