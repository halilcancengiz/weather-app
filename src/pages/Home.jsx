import React, { useEffect, useState, memo } from 'react'
import Map from '../components/Map'
import SwitchButton from '../components/SwitchButton'
import Search from '../components/Search'

const Home = () => {
    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem("toggle") === false) || true)

    useEffect(() => {
        if (!localStorage.getItem("toggle")) {
            localStorage.setItem("toggle", false)
        } else {
            setToggle(JSON.parse(localStorage.getItem("toggle")))
        }
    }, [])


    return (
        <div style={{ background: `url(https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?cs=srgb&dl=pexels-mudassir-ali-2680270.jpg&fm=jpg)` }} className=' flex items-center justify-center h-screen'>
            <div className='flex flex-col justify-center w-full'>
                <SwitchButton toggle={toggle} setToggle={setToggle} />
                {
                    toggle ? <Map /> : <Search />
                }
            </div>
        </div>
    )
}

export default memo(Home)
