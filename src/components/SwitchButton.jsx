import React, { useState } from 'react'

const SwitchButton = ({ toggle, setToggle }) => {
    
    return (
        <div
            onClick={() => setToggle(!toggle)}
            className="h-10 bg-black w-60 mx-auto rounded-full relative overflow-hidden transition-all duration-300"
            style={{
                boxShadow: "inset 0px 0px 20px rgba(0,0,0,.6)",
                backgroundColor: "rgba(0,0,0,.7)"
            }}
        >
            <div
                style={{ transition: "all .5s ease-in-out" }}
                className={`absolute w-1/2 bg-[#005B79] h-[80%] top-[50%] ${toggle ? "left-[2%]" : "left-[48%]"
                    } translate-y-[-50%] rounded-full transition-all duration-500 ease-in-out flex items-center justify-center text-white`}
            >
                {toggle ? "MAP" : "SEARCH"}
            </div>
        </div>
    )
}

export default SwitchButton