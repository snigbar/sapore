import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Leaflet = () => {
  return (

    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto h-full'>
    

    <h1 className='text-3xl text-indigo-950 font-semibold uppercase text-center'>Get directions to our location</h1>
   
    <p className="text-center text-md font-normal my-5"> Istituto Professionale Via Sarandi sede associata, 20, Via della Cecchina,Roma Capitale, Italy</p>

    <hr className='border-t border-indigo-800 border-8 mx-auto'/>
 
    <MapContainer center={[41.902782, 12.496366]} zoom={13} scrollWheelZoom={false} style={{height:"100vh", width:"100%", scrollX:"none"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[41.902782, 12.496366]}>
  <Popup>
  Istituto Professionale Via Sarandi sede associata, 20, Via della Cecchina,Roma Capitale, Italy
      </Popup>
  </Marker>
</MapContainer>
</section>
  )
}

export default Leaflet