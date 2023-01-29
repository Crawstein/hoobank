import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

function Stats() {
  return (
    <section className={`flex items-center justify-center flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div className={`flex items-center justify-between`}>
          <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
            <h4 className='font-poppins font-semibold xd:text-[40px] text-[30px] xd:leading-[53px] leading-[43px] text-white'>
              {stat.value}
            </h4>
            <p className='font-poppins font-normal xd:text-[20px] text-[15px] xd:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
              {stat.title}
            </p>

          </div>
          {stat.id !== `stats-${stats.length}` ? (
            <div className='md:block hidden border-white/60 border-[1.7px] h-[13px] ml-[40px] mr-[40px]' />
          ) : null}
        </div>
      ))}
    </section>
  )
}

export default Stats