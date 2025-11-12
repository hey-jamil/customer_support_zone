import React from 'react'

const Banner = ({inProgress, resolved}) => {
    return (
        <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto gap-5 mt-14'>
            <div className='md:w-[700px] md:h-[250px] h-[150px] w-11/12 mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center relative overflow-hidden rounded-2xl'>
            <div className='absolute h-full w-1/2 bg-[url("./assets/vector1.png")] bg-cover bg-center top-0 left-0'></div>
            <div className='absolute h-full w-1/2 bg-[url("./assets/vector1.png")] bg-cover bg-center top-0 right-0 scale-x-[-1]'></div>
                <p>In-Progress</p>
                <h2 className='text-4xl font-medium'>{inProgress}</h2>
            </div>
            <div  className='md:w-[700px] md:h-[250px] h-[150px] w-11/12 mx-auto bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center relative overflow-hidden rounded-2xl'>
                <div className='absolute h-full w-1/2 bg-[url("./assets/vector1.png")] bg-cover bg-center top-0 left-0'></div>
            <div className='absolute h-full w-1/2 bg-[url("./assets/vector1.png")] bg-cover bg-center top-0 right-0 scale-x-[-1]'></div>
                <p>Resolved</p>
                <h2 className='text-4xl font-medium'>{resolved.length}</h2>
            </div>
        </div>
    );
};

export default Banner;