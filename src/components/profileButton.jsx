import avatar from "../../public/assets/avatar.png"
import logo from "../../public/assets/logo.png"

import Image from "next/image"

const ProfileButton = () => {
  return (
    <button className="flex items-center border-2 border-blue-200 p-[4px] rounded-lg">
        <div >
            <Image src={avatar} alt="person" width={30} height={30}  />
        </div>
        <p className="font-semibold ml-2">Aryan Pandey</p>
    </button>
  )
}

export default ProfileButton