import React from 'react'
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import TurkeyMap from 'turkey-map-react';
import { convertTurkishToEnglish } from '../utils/convertTurkishToEnglish';
import SwitchButton from './SwitchButton';


const Map = () => {
    const navigate = useNavigate()
    const renderCity = (cityComponent, cityData) => (
        <Tooltip title={cityData.name} key={cityData.id} color='#00667B'>
            {cityComponent}
        </Tooltip>
    );


    const handleCity = (e) => {
        navigate(`/${convertTurkishToEnglish(e.name.toLowerCase())}`)
    }

    return (
        <div className='h-full'>
            < TurkeyMap customStyle={{ idleColor: "rgba(0, 0, 0,.8)", hoverColor: "#00667B" }} onClick={(e) => handleCity(e)} cityWrapper={renderCity} />
        </div>
    )
}

export default Map