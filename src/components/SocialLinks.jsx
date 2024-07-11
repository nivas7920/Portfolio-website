import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/nivas7920",
            
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/nivas-bidave-30387623a/",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:nivasbidave2025@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
           
            style: "rounded-br-md",
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id}
                        className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" + style}>
                        <a href={href}
                           download={download}
                           className="flex justify-between items-center w-full text-white"
                           target="_blank"
                           rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks