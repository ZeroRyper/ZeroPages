import React from 'react'

function ButtonCategory({title,setCategoryIn}) {
  return (
    <li
    className="btn bg-[#12b4fff5] text-black w-32 text-center mx-2 py-1 xl:text-2xl sm:text-lg cursor-pointer font-protest"
    onClick={() => setCategoryIn(title)}
  >
    {title}
  </li>
  )
}

export default ButtonCategory