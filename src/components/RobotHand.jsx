import React, { useState, useEffect } from 'react'
import { sphereLarge, sphereMedium, sphereSmall, cardTopBg, cardTopBlockBg, cardTopBlockBgEmpty } from '../assets'

import styles from '../styles'
import { robot, robotFull, logo } from '../assets'
import { MouseParallaxChild } from "react-parallax-mouse";



function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


function RobotHand() {
    const [robotHandSrc, setRobotHandSrc] = useState(window.innerWidth > 1700 || (window.innerWidth < 1060 && window.innerWidth > 718) ? robotFull : robot)
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setRobotHandSrc(window.innerWidth > 1700 || (window.innerWidth < 1060 && window.innerWidth > 718) ? robotFull : robot)
        }, 100)
        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    },[])

    return (
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mx-auto my-10 relative w-[700px] min-h-[700px] pointer-events-none`}>
            <MouseParallaxChild factorX={.4} factorY={.4} className='absolute top-[-100px] left-[30%]'>
                <div className='w-[178px] h-[284px] card-layer relative overflow-hidden'>
                    <img src={logo} alt="hoobank" className='absolute w-[80px] object-contain right-[10px] top-[20px]' />
                    <p className='text-white text-[12px] font-poppins rotate-90 absolute left-[-40px] top-[70px]'>1833 7163 3892 1028</p>

                    <div className='card-layer__top-block w-[178px] h-[103px] absolute bottom-0 flex flex-col items-start justify-end p-[10px]'>
                        <h4 className='text-white font-poppins text-[9px] text-shadow'>WAK SUNARI</h4>
                        <p className='text-dimWhite text-[7px] text-shadow'>06/2029</p>
                    </div>
                </div>
                <img src={cardTopBg} alt="card__background" className='absolute bottom-[95px] left-[68px]' />
                <img src={cardTopBlockBg} alt="card__background" className='absolute bottom-[44px] left-[-38px]' />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.3} factorY={.3} className='absolute top-[25px] left-[30%]'>
                <div className='w-[178px] h-[284px] card-layer relative overflow-hidden'>
                    <div className=' w-[178px] h-[103px] absolute bottom-0 flex flex-col items-start justify-end p-[10px]'>
                        <h4 className='text-white font-poppins text-[9px] text-shadow'>WAK SUNARI</h4>
                        <p className='text-dimWhite text-[7px] text-shadow'>06/2029</p>
                    </div>
                </div>
                <img src={cardTopBlockBgEmpty} alt="card__background" className='absolute bottom-[44px] left-[-38px]' />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.2} factorY={.2} className='absolute top-[150px] left-[30%]'>
                <div className='w-[178px] h-[284px] card-layer relative overflow-hidden'></div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.3} factorY={.3} className='absolute top-[-50px] left-[0%]'>
                <img src={sphereLarge} alt="sphere__large" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.2} factorY={.2} className='absolute top-[300px] left-[80%]'>
                <img src={sphereMedium} alt="sphere__medium" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.1} factorY={.1} className='absolute top-[400px] left-[15%]'>
                <img src={sphereSmall} alt="sphere__small" />
            </MouseParallaxChild>
            {/* <img src={window.innerWidth > 1700 || (window.innerWidth < 1060 && window.innerWidth > 718) ? robotFull : robot} alt="robot__hand" className='absolute top-[400px] left-[0%] z-[5]' /> */}
            <img src={robotHandSrc} alt="robot__hand" className='absolute top-[400px] left-[0%] z-[5]' />
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        </div>
    )
}

export default RobotHand