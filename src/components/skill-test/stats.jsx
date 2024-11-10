import { statsContext } from "@/app/skill-test/page"
import { useContext } from "react"

import trophy from "../../../public/assets/trophy.png"
import notepad from "../../../public/assets/notepad.png"
import check from "../../../public/assets/check.png"
import Image from "next/image"

const Statistics = () => {
    const {stats} = useContext(statsContext);

    const {rank, percentile, correct, total} = stats;

  return (
    <div className="flex flex-col gap-1 p-4 px-5 border-[2px] border-gray-500/20 rounded-lg">
        <h1 className="font-bold">Quick Statistics</h1>

        <div className="flex justify-between max-[510px]:flex-wrap">
            <div className="flex items-center gap-4 px-4 py-2 max-[510px]:border-b-[2px] border-b-0 border-r-[2px] border-gray-500/20 w-full">
                <div className="bg-gray-100 rounded-full p-4 w-fit">
                    <Image src={trophy} width={20} height={20} alt="trophy" />
                </div>

                <div>
                    <h2 className="font-bold text-xl">{rank}</h2>
                    <p className="text-gray-600">YOUR RANK</p>
                </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 max-[510px]:border-b-[2px] border-b-0 border-r-[2px] border-gray-500/20 w-full">
                <div className="bg-gray-100 rounded-full p-4 w-fit">
                    <Image src={notepad} width={20} height={20} alt="trophy" />
                </div>

                <div>
                    <h2 className="font-bold text-xl">{percentile}%</h2>
                    <p className="text-gray-600">PERCENTILE</p>
                </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 w-full">
                <div className="bg-gray-100 rounded-full p-4 w-fit">
                    <Image src={check} width={20} height={20} alt="trophy" />
                </div>

                <div>
                    <h2 className="font-bold text-xl">{correct} / {total}</h2>
                    <p className="text-gray-600">CORRECT ANSWERS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics