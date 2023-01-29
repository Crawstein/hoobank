import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles} py-4 px-6 bg-blue-gradient`}>
      Get Started
    </button>
  )
}

export default Button