import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const inputFields = [
    {
        type: "email", 
        id: "email", 
        description: "Your email", 
        placeholder: "jacob@google.com"
    },
    {
        type: "text", 
        id: "Subject", 
        description: "Subject", 
        placeholder: "Enter a subject"
    },
    {
        type: "textarea", 
        id: "message", 
        description: "Message", 
        placeholder: "Let's talk about..."
    },
];

function ContactSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I&apos;m currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I&apos;ll try my best
                to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/ngyongkang">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/ng-yong-kang-a60871193">
                    <Image src={LinkedinIcon} alt="Github Icon"/>
                </Link>
            </div>
        </div>
        <div className='z-10'>
            <form className='flex flex-col'>
                {
                    inputFields.map(function(inputObj, index) {
                        return (
                            <InputField 
                            key={index}
                            type={inputObj.type} 
                            id={inputObj.id} 
                            description={inputObj.description} 
                            placeholder={inputObj.placeholder}
                            />
                        )
                    })
                }
                <button 
                type="submit"
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                Send Message    
                </button>
            </form>
        </div>
    </section>
  )
}

function InputField({type, id, description, placeholder}) {
    return (
        <div className='mb-6'>
            <label
            htmlFor={id}
            className='text-white block text-sm font-medium mb-2'>
                {description}
            </label>
            {
                type !== "textarea" ? (
                    <input
                    type={type}
                    id={id}
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder={placeholder}
                    />
                ) : (
                    <textarea
                    name={id}
                    id={id}
                    required
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder={placeholder}
                    />
                )
            }
        </div>
    )
}

export default ContactSection