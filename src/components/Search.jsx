import React, { useState } from 'react'
import { BiSearchAlt } from "../assets/icons"
import { NavLink, useNavigate } from 'react-router-dom'
import { convertTurkishToEnglish } from '../utils/convertTurkishToEnglish'


const Search = () => {
    const [city, setCity] = useState("")
    const navigate = useNavigate()
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            navigate(`/${convertTurkishToEnglish(city.toLowerCase())}`, { replace: true })
        }
    };
    return (
        <div className="bg-black my-5 w-96 mx-auto rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500"
            style={{
                boxShadow: "inset 0px 0px 20px rgba(0,0,0,.6)",
                backgroundColor: "rgba(0,0,0,.7)"
            }}>
            <input onKeyDown={handleKeyPress} onChange={(e) => setCity(e.target.value)} className='h-10 w-full px-5 bg-transparent outline-none text-white' type="text" placeholder='Şehir ara...' />
            <NavLink className="mr-5" to={`/${convertTurkishToEnglish(city.toLowerCase())}`}>
                <BiSearchAlt size={25} color='white' />
            </NavLink>
        </div>
    )
}

export default Search