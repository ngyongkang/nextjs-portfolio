import React from 'react'

function ProjectTag({name, onClick, isSelected}) {
  
  const buttonClasses = isSelected 
  ? 'text-white border-primary-500' 
  : 'text-[#ADB7BE] border-slate-600 hover:border-white'
    
  return (
    <button 
    className={`rounded-full border-2 ${buttonClasses} px-6 py-3 text-xl cursor-pointer`}
    onClick={onClick}
    >
        {name}
    </button>
  )
}

export default ProjectTag