import React from 'react'

export const ImagesBox = ({firstImage, secondImage}) => {
  return (
    <div className="w-1/2 flex">
        <div className="w-1/2 flex flex-col relative top-[25%]">
          <img className='max-w-[280px]' src={firstImage} alt="" />
          {/* <div className="max-w-[280px] w-full block max-h-[479px] h-full bg-gradient-to-t from-transparent to-white absolute top-[55%] rounded-[68px] example"></div> */}
          <img className='absolute top-[55%] left-[10%] z-10' src="https://res.cloudinary.com/datsipxkz/image/upload/v1680201362/monogram-exercise/hggkqrq4ht5peuzphrap.svg" alt="" />
        </div>
        
        <div className="w-1/2 flex flex-col relative">
          <img className='max-w-[278px]' src={secondImage} alt="" />
          <img className='absolute top-[45%] z-10 right-[7%]' src="https://res.cloudinary.com/datsipxkz/image/upload/v1680201362/monogram-exercise/rcvqt0ptfywnpxbo1xvk.svg" alt="" />
        </div>
    </div>
  )
}
