import React from 'react'

export const SplitScreen = ({leftContent, rightContent}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-20">
        <div className="w-full lg:w-1/2 p-5 text-center lg:text-left font-extralight leading-7 text-slate-500">
            {leftContent && <div className="mt-6">{leftContent}</div>}
        </div>
        <div className="w-full lg:w-1/2 p-5 flex rounded-xl bg-slate-50 font-extralight leading-7 text-slate-500">
          {rightContent && <div>{rightContent}</div>}
        </div>
    </div>
  )
}

export default SplitScreen
