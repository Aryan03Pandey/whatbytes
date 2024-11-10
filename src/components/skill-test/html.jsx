import Image from "next/image";

import html from "../../../public/assets/html.png"

const HtmlSkill = ({setOpen}) => {

    const questions = "08";
    const duration = "15 mins";
    const date = "5 June 2021" 

    return (
        <div className="flex justify-between max-[510px]:justify-center items-center p-6 px-4 border-[2px] border-gray-500/20 rounded-lg max-[510px]:flex-wrap">
            <Image src={html} width={70} height={70} alt="html logo" />

            <div className="flex flex-col gap-1 ">
                <h1 className="font-bold">Hyper Text Markup Language</h1>
                <p className="text-gray-600 ">Questions: {questions} | Duration: {duration} | Date: {date}</p>
            </div>

            <button
                onClick={() => setOpen(true)}
                className="bg-blue-900 border-1 border-black text-white font-semibold h-12 px-8 py-2 rounded-lg hover:bg-blue-700"
            >
                Update
            </button>
        </div>
    )
}

export default HtmlSkill;