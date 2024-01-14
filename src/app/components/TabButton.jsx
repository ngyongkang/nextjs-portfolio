import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    default: { width: 0 },
    active: {width: "calc(100% - 0.75rem)"},
};

function TabButton({active, selectTab, children}) {

    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            {/* Changed border to motion border, 
            can't animate border however, 
            can animate a div with a height and color*/}
            <motion.div 
            animate={active ? "active": "default"}
            variants={variants}
            className='h-1 bg-primary-500 mt-2 mr-3'
            > 
            </motion.div>
        </button>
    )
}

export default TabButton