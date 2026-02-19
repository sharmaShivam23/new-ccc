import React from 'react'

const Spinner = () => {
  return (
    <div>
       <div className="flex  justify-center h-10 items-center relative bottom-4 z-50 mt-16">
      <div className="w-14 h-14 border-4   border-white border-b-transparent border-solid rounded-full animate-spin"></div>
    </div>
    </div>
  )
}

export default Spinner
