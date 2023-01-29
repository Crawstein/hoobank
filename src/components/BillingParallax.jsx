import React from 'react'
import { billingPaypal, billingTransaction, billingMessage } from '../assets'
import { MouseParallaxChild } from "react-parallax-mouse";

function BillingParallax() {
  return (
    <div className='relative h-[455px] w-[530px] pointer-events-none '>
      <MouseParallaxChild factorX={.3} factorY={.3} className='absolute top-[0px] right-[75px] z-[5] '>
        <img src={billingPaypal} alt="billing_paypal" />
      </MouseParallaxChild>
      <MouseParallaxChild factorX={.2} factorY={.2} className='absolute top-[160px] left-[0%]'>
        <img src={billingTransaction} alt="billing_transaction"/>
      </MouseParallaxChild>
      <MouseParallaxChild factorX={.1} factorY={.1} className='absolute bottom-[0px] right-[0%]'>
        <img src={billingMessage} alt="billing_message"/>
      </MouseParallaxChild>
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>
  )
}

export default BillingParallax