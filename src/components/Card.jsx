import React from 'react';
import { formatDay } from '../utils/formatDay';
import { formatMainDesc } from '../utils/formatMainDesc';
import { useWeatherIcon } from '../hooks/useWeatherIcon';
import { getBackgroundByMainDescription } from '../utils/getBackgroundByMainDescription';
import animatedWindIcon from "../assets/images/animatedIcons/wind.gif"
import { Tooltip } from 'antd';




const Card = ({ result }) => {
    const { icon } = useWeatherIcon(result.main);

    return (
        <div id='city-result-container' style={{ background: `linear-gradient(to right,rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${getBackgroundByMainDescription(result.main)})`, backgroundPosition: "bottom", backgroundSize: "cover" }} className='grid overflow-hidden relative grid-cols-1 min-w-[260px] shadow-lg font-noto text-white border-2 group border-[#169DB2] rounded-lg p-5' >

            <div className='w-full flex gap-2 '>
                <div className='flex gap-2 items-center bg-blue-600 rounded-full px-4 text-sm text-white '>
                    <span>{formatMainDesc(result.main)}</span>
                </div>
                <div className='flex gap-2 items-center justify-end w-full'>
                    <span className='border-b'>{result.city}</span>
                </div>
            </div>

            <div className='w-full flex gap-2 '>
                <div className='flex gap-2 items-center w-full h-16'>
                    <span className='my-auto lg:text-5xl md:text-4xl sm:text-3xl xs:text-5xl font-bold transition-all duration-500'>
                        {result.temp}°C
                    </span>
                    <div>{icon}</div>
                </div>
                <div className='flex justify-end items-start w-full'>
                    <span className='mt-2'>
                        {result.date.getDate()} {result.date.toLocaleString('default', { month: 'long' }).slice(0, 3)} {formatDay(result.day)}
                    </span>
                </div>
            </div>

            <div className='w-full flex gap-2'>
                <div className='flex gap-2 items-start w-full '>
                    <Tooltip title={`Minimum :${result.min === result.max ? result.min - 1 : result.min}°C / Maksimum :${result.min === result.max ? result.max + 1 : result.max}°C`}>
                        <span className='text-base font-bold'>
                            {`${result.min === result.max ? result.min - 1 : result.min}/${result.min === result.max ? result.max + 1 : result.max}`}
                        </span>
                    </Tooltip>

                </div>
                <div className='flex items-center justify-end gap-2 w-full '>
                    <img className='w-7' src={animatedWindIcon} alt="" />
                    <Tooltip title="Rüzgar(km/h)">
                        <span className='italic'>
                            {result.wind}km/h
                        </span>
                    </Tooltip>

                </div>
            </div>

        </div>
    );
};

export default Card;

