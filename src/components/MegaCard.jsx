import React from 'react'

function MegaCard({img,heading,para,text}) {
  return (
    <div className='flex flex-col gap-y-3     p-4'>
        <div>
        <img src="" alt="" />
        <h2>{heading}</h2>
        </div>
        <div>
            <p>{para}</p>
            <p>{text}</p>
        </div>
        <div className='flex gap-x-4'>
            <button className='btn'>{"Buy"}</button>
            <button className='btn2'>{"Read more"}</button>
        </div>
    </div>
  )
}

export default MegaCard