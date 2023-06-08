import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { groupForecastDataByDate } from '../utils/groupForecastDataByDate';
import Card from './Card';
import { IoReturnDownBackOutline } from "../assets/icons";
import { Tooltip } from 'antd';


const CityResult = () => {
    const location = useLocation();
    const [result, setResult] = useState();
    const { data, error, loading } = useFetch(location.pathname.slice(1,));

    useEffect(() => {
        if (data) {
            setResult(groupForecastDataByDate(data));
        }
    }, [data]);

    return (
        <div  style={{ background: `url(https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?cs=srgb&dl=pexels-mudassir-ali-2680270.jpg&fm=jpg)`, backgroundSize: "cover" }} className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  max-w-[1300px] w-full mx-2">
                {result &&
                    result.map((w, index) => (
                        <Card key={index} result={w} />
                    ))}
            </div>
            <Tooltip title="Ana Sayfaya Dön">
                <NavLink className="fixed bottom-10 right-10" to="/"><IoReturnDownBackOutline className='border rounded-full bg-black-800 p-1' color='white' size={30} /></NavLink>
            </Tooltip>
        </div>
    );
};

export default CityResult;