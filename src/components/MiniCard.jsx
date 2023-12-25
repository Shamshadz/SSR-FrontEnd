import React from 'react'

function MiniCard({img,text}) {
  return (
    <div className='flex w-full gap-x-3  items-center p-4'>
        <img src={img} className="w-[50px]" alt="" />
        <div>
            <p>{text}</p>
            <p>{`$0`}</p>
        </div>
    </div>
  )
}

export default MiniCard