import React from 'react'
import { stepsBg, stepsAnalysis, stepsMethod, stepsScan } from '../assets'
import { MouseParallaxChild } from "react-parallax-mouse";

function StepsParallax() {
    return (
        <div className='relative pointer-events-none'>
            <img src={stepsBg} alt="" />
            <MouseParallaxChild factorX={.2} factorY={.2} className='absolute top-[10px] right-[-40px]'>
                <img src={stepsAnalysis} alt="steps_analysis" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.2} factorY={.2} className='absolute top-[80px] left-[-90px]'>
                <img src={stepsScan} alt="steps_scan" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={.1} factorY={.1} className='absolute bottom-[-70px] left-[40px]'>
                <img src={stepsMethod} alt="steps_method" />
            </MouseParallaxChild>
        </div>
    )
}

export default StepsParallax