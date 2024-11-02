/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

const Pin = ({location}) => {
  return (
    <Marker position={[location.latitude, location.longitude]}>
    <Popup>
        <div className="popupContainer">
        <img src={location.img} alt={location.title} />
        <div className="textContainer">
            <Link to={`/${location.id}`}>{location.title}</Link>
            <span className='bed'>{location.bedroom} bedroom</span>
            <b>${location.price}</b>
        </div>
        </div>
     
    </Popup>
  </Marker>
  )
}

export default Pin