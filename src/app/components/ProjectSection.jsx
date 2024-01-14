'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "NextJS Protfolio Website",
        description: `The current website your on! It's my very first personal project with many more to come.`,
        image: "images/projects/1.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/ngyongkang/nextjs-portfolio",
        previewUrl: "/"
    },
    // {
    //     id: 2,
    //     title: "React Protfolio Website",
    //     description: `Project 2 description`,
    //     image: "images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 3,
    //     title: "React Protfolio Website",
    //     description: `Project 3 description`,
    //     image: "images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 4,
    //     title: "React Protfolio Website",
    //     description: `Project 4 description`,
    //     image: "images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 5,
    //     title: "React Protfolio Website",
    //     description: `Project 5 description`,
    //     image: "images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
    // {
    //     id: 6,
    //     title: "React Protfolio Website",
    //     description: `Project 6 description`,
    //     image: "images/projects/1.png",
    //     tag: ["All", "Mobile"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
];

const tags = ["All","Web","Mobile"];

function ProjectSection() {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    function selectButton(newTag) {
        setTag(newTag);
    }

    const filterProjects = projects.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    }

    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='flex flex-row justify-center items-center gap-2 py-6'>
                {
                    tags.map(function(tagName, index){
                        return (
                            <ProjectTag 
                            key={index} 
                            name={tagName} 
                            onClick={() => selectButton(tagName)} 
                            isSelected={tagName === tag}/>
                        )
                    })
                }
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {
                    filterProjects.map(function(project, index){
                        return (
                            <motion.li 
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate":"initial"}
                            transition={{duration: 0.3, delay: index * 0.4}}
                            >
                                <ProjectCard 
                                key={project.id}
                                title={project.title} 
                                description={project.description}
                                imgUrl={project.image} 
                                previewUrl={project.previewUrl}
                                gitUrl={project.gitUrl}
                                />
                            </motion.li>
                        )
                    })
                }
            </ul>
        </section>
        
    )
}

export default ProjectSection