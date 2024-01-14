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
            id:"languages",
            text:"Languages",
            content: (
                <ul className='list-disc pl-2'>
                    <li>English</li>
                    <li>Chinese</li>
                </ul>
            )
        },
        // {
        //     id:"certification",
        //     text:"Certifications",
        //     content: (
        //         <ul className='list-disc pl-2'>
        //             <li>Bachelor&apos;s degree in Computer Science & Cyber Forensics</li>
        //         </ul>
        //     )
        // },
    ]

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 sm:py-16 '>
                <Image src="/images/about-image.png" width={500} height={500} alt='About me image'/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg'>
                    I am a full-stack developer, who worked in this industry for two years now. I strive 
                    to learn new tech stacks and expand my horizons. Even though I have not been on many
                    projects yet. I have learnt from my past experiences that teamwork is key and believe
                    in working together to achieve a better product. <br/><br/> I love coding languages that provide
                    Object Oriented Programming such as Java because I like piecing various objects together
                    like a puzzle.
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