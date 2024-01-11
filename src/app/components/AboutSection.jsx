"use client";
import React, {useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

function AboutSection() {
    
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    function handleTabChange(id) {
        startTransition(function(){
            setTab(id);
        });
    };

    const tabs = [
        {
            id:"skills",
            text:"Skills",
            content: (
                <ul className='list-disc pl-2'>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Gitlab</li>
                </ul>
            )
        },
        {
            id:"education",
            text:"Education",
            content: (
                <ul className='list-disc pl-2'>
                    <li>Bachelor&apos;s degree in Computer Science & Cyber Forensics</li>
                </ul>
            )
        },
        {
            id:"certification",
            text:"Certifications",
            content: (
                <ul className='list-disc pl-2'>
                    <li>Bachelor&apos;s degree in Computer Science & Cyber Forensics</li>
                </ul>
            )
        },
    ]

    return (
        <section className='text-white'>
            <div className='md:grind md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16 '>
                <Image src="/images/about-image.png" width={500} height={500} alt='About me image'/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        {tabs.map(function(tabObj, index){
                            return (
                                <TabButton key={index}
                                selectTab={() => handleTabChange(tabObj.id)} 
                                active={tab === tabObj.id}>
                                    {tabObj.text}
                                </TabButton>
                            )
                        })}
                    </div>
                    <div className='mt-8'>{tabs.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection