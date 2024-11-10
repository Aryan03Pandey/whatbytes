"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation';

const links = [
  {
    icon: "fi fi-br-stats",
    link: "dashboard",
    text: "Dashboard"
  },
  {
    icon: "fi fi-br-badge",
    link: "skill-test",
    text: "Skill Test"
  },
  {
    icon: "fi fi-br-file",
    link: "internship",
    text: "Internship"
  },
]


const Sidebar = () => {
  const [active, setActive] = useState('');
  const pathname = usePathname();


  useEffect(() => {
    const curr = pathname.split('/')[1];
    setActive(curr);
  }, [pathname])

  return (
    <div className="border-r-[2px] border-gray-500/20 pt-4 pr-4">
      <div className="w-[200px] flex flex-col gap-1 mt-[30px]">
        {
          links.map((link, index) => {
            return (
            <Link
              href={`/${link.link}`} 
              key={index} 
              className={"flex items-center gap-3 p-4 rounded-r-full  hover:scale-110 transition-all duration-300 " + ` ${link.link === active ? " bg-blue-200/30 text-blue-600 " : " hover:bg-gray-200/20"} ` }
            >
              <i className={`${link.icon} text-xl`}></i>
              <span className="ml-2 font-semibold ">{link.text}</span>
            </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar