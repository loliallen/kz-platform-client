import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import React, { Component } from 'react'
import UserPointSVG from '../../svgs/contained/UserPoint.svg'
import PointIdleSVG from '../../svgs/contained/PointIdle.svg'
import PointOnReviewSVG from '../../svgs/contained/PointOnReview.svg'
import PointAnsweredSVG from '../../svgs/contained/PointAnswered.svg'
import {withRouter} from "react-router"


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

const MapContainer = withRouter(class MapContainer extends Component {
    state = {
        center: this.props.center || { lat: 55.73, lng: 49.2 },
        zoom: 14
    }
    render() {
        const containerStyle = this.props.styles
        const points = this.props.points || []

        let UserMarker = new window.google.maps.MarkerImage(
            "/UserPoint.svg",
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            new window.google.maps.Point(30, 42), /* anchor is bottom center of the scaled image */
            new window.google.maps.Size(60, 65)
        );
        return (
            <Map
                google={window.google}
                zoom={this.state.zoom}
                containerStyle={containerStyle}
                mapTypeControl={false}
                fullscreenControl={false}
                zoomControl={false}
                panControl={false}
                streetViewControl={false}
                style={this.props.style}
                center={this.props.center}
                initialCenter={this.state.center}
            >
                {this.props.center && <Marker
                    position={this.props.center}
                    onDragend={(props, marker, e) => {
                        this.props.setLoc && this.props.setLoc({
                            lat: marker.position.lat(),
                            lng: marker.position.lng()
                        })
                    }}
                    icon={UserMarker}
                    draggable={!!this.props.setLoc}
                />}
                {points.map((e, i) => {
                    return <Marker
                        key={i}
                        position={e.coords}
                        onClick={()=>{
                            if(this.props.clickable_points) {
                                this.props.history.push(`/appeals/${e.id}`)
                            }
                        }}
                        icon={{
                            url: SelectSvg(e.status),
                            anchor: new window.google.maps.Point(30, 42),
                            scaledSize: new window.google.maps.Size(60, 65)
                        }}
                    />
                })}
            </Map>
        )
    }
})

// export default GoogleApiWrapper({
//     language: "ru",

// })(MapContainer)

export default MapContainer
