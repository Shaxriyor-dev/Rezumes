import React from 'react'

function Footer() {
  return (
    <div className="w-full h-full p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <div className='text-center font-[Poppins]'>
           Copyright © {new Date().toDateString()} Shakhriyor by wpOceans. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
