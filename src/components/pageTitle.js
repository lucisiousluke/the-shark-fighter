import React from 'react'

export const PageTitle = ({pageTitle, pageDescription}) => {
  return (
    <div className="my-20">
        <h2 className="text-4xl font-bold text-cyan-500 text-center">{pageDescription}</h2>
        <hr className="w-48 h-2 mx-auto my-5 bg-rose-400 border-0 md:my-5 dark:bg-gray-700"></hr>
        <h1 className="text-2xl text-center	siteTitle font-thin text-slate-500">{pageTitle}</h1>
    </div>
  )
}

export default PageTitle
