import Image from "next/image"
import ProfileButton from "./profileButton"

import logo from "../../public/assets/logo.png"
import Link from "next/link"


const Navbar = () => {

  return (
    <div className="border-b-[2px] w-full border-gray-500/20 px-6 py-5 flex justify-between items-center">

        <Link
          href={"/"}
          className="flex items-center gap-2"
        >
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="font-bold text-3xl">WhatBytes</h1>
        </Link>

        <ProfileButton />
    </div>
  )
}

export default Navbar