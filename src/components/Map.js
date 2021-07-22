import GoogleMapReact from "google-map-react"
console.log("test");
console.log(process.env.REACT_APP_WEATHER_API_KEY)
const Map = ({ center, zoom}) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:
          process.env.REACT_APP_WEATHER_API_KEY
        }}
        defaultCenter={ center }  
        defaultZoom={ zoom }
      >

      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map