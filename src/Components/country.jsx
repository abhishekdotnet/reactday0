import React from 'react'

export default function country(props) {
  return  (
   
   <div className='m-1 flex justify-around w-full h-full p-7 bg-green-100 text-sm rounded-lg shadow-md' >
       <div>
        <h1 className='text-[25px] font-bold text-gray-900'>{props.country.name.common}</h1>
        <p className='text-gray-700'>Capital: {props.country.capital[0]}</p>
        <p className='text-gray-700'>Population: {props.country.population.toLocaleString()}</p>
        <p className='text-gray-700'>Offical Name: {props.country.name.official}</p>
        <p className='text-gray-700'>region: {props.country.region}</p>
        <p className='text-gray-700'>Language: {props.country.languages[Object.keys(props.country.languages)[0]]}</p>
       </div>
<img src={props.country.flags.png} alt="flag" className='w-25 h-20 object-cover rounded-lg mt-4 p-0 self-end'></img>
       
       
   </div>
  )
}
