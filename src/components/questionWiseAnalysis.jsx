import { statsContext } from "@/app/skill-test/page"
import { useContext } from "react"

import {
    GaugeContainer,
    Gauge,
    GaugeReferenceArc,
    GaugeValueArc,
  } from '@mui/x-charts/Gauge';
  

import target from "../../public/assets/target.png"
import Image from "next/image";

const QuestionWiseAnalysis = () => {

    const {stats: {correct, total}} = useContext(statsContext)

  return (
    <div className="w-full p-8 border-[2px] border-gray-500/20 rounded-lg ">
        <div className="flex justify-between mb-4 items-center">
          <h1 className="font-bold ">Question Analysis</h1>
          <p className="font-semibold text-blue-600">{correct}/{total}</p>
        </div>

        <p>
          <span className="font-bold">You scored {correct} queston correct out of {total}. </span>
          {total == correct ? "Well Done" : "However it still needs some improvement."}
        </p>

        <div className="relative w-full flex justify-center mt-4">
          <Gauge text={""} width={200} height={200} value={correct} valueMin={0} valueMax={total} />
          <Image 
            src={target} 
            width={40} 
            height={40} 
            alt="target" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 50, // Adjust size as needed
              height: 50,
            }}  
          />
        </div>
    </div>
  )
}

export default QuestionWiseAnalysis