import * as React from 'react'

// Import necessary components for React Google Maps
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker,
    GroundOverlay
} from 'react-google-maps' // Add "InfoWindow"
import UserPointSVG from './UserPoint.svg'
import PointIdleSVG from './PointIdle.svg'
import PointOnReviewSVG from './PointOnReview.svg'
import PointAnsweredSVG from './PointAnswered.svg'
import { Link } from 'react-router-dom'

const SelectSvg = (s) => {
    if (s > 0 && s < 5)
        return PointOnReviewSVG;
    switch (s) {
        case 5:
            return PointAnsweredSVG;
        default:
            return PointIdleSVG;
    }
}

// Import custom styles to customize the style of Google Map
const styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]

// Import custom icon for map marker
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap

            defaultZoom={13}
            defaultCenter={{
                lat: 55.73,
                lng: 49.2
            }}
            defaultOptions={{
                disableDefaultUI: true,
                draggable: true,
                keyboardShortcuts: false,
                scaleControl: false,
                scrollwheel: false,
                styles: styles
            }}
        >
            {props.points && props.points.map(p => {

                return <Marker
                    icon={{
                        url: SelectSvg(p.status)
                    }}
                    position={p.coords}
                    onClick={(message, lang, lat) =>
                        props.handleMarkerClick(
                            p.label,
                            p.coords.lat, p.coords.lng
                        )
                    } // Get the data that will be used for InfoWindow.
                />
            })}


            <div className="map_circle_wrapper">
                <div className="map_circle map_circle_1">
                    <div className="map_circle map_circle_2">
                        <div className="map_circle map_circle_3">
                            <div className="map_circle map_circle_4" />
                        </div>
                    </div>
                </div>
            </div>
            {props.isInfoboxVisible && (
                <InfoWindow

                    position={{
                        lat: props.infoboxPosY,
                        lng: props.infoboxPosX
                    }}
                    onCloseClick={() => props.handleInfoboxClick()}
                >
                    <div>
                        <h4>{props.infoboxMessage}</h4>
                        <a href="#">{"> Подробнее"}</a>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker
