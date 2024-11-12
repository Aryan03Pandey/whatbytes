"use client"

import Image from "next/image"

import html from "../../../public/assets/html.png"
import { useContext, useState, useRef, useEffect } from "react"
import { statsContext } from "@/app/skill-test/page"

const SkillForm = ({open, setOpen}) => {

    const {stats, setStats} = useContext(statsContext);
    const {rank, percentile, correct, total} = stats;

    const [currRank, setCurrRank] = useState(rank);
    const [currPercentile, setCurrPercentile] = useState(percentile);
    const [currScore, setCurrScore] = useState(correct);

    const [rankError, setRankError] = useState(false);
    const [percentileError, setPercentileError] = useState(false);
    const [scoreError, setScoreError] = useState(false);


    const updateRef = useRef();

    const handleRank = (e) => {
        if(e.target.value === ''){
            setRankError(true);
            return
        }
        
        if((/\D/.test(e.target.value))){
            setRankError(true);
            return
        }

        setRankError(false);
        setCurrRank(e.target.value);
    }

    const handlePercentile = (e) => {
        if(e.target.value === ''){
            setPercentileError(true);
            return
        }
        
        if((/\D/.test(e.target.value))){
            setPercentileError(true);
            return
        }


        if(e.target.value > 100 || e.target.value < 0){
            setPercentileError(true);
            return
        }

        setPercentileError(false);
        setCurrPercentile(e.target.value);
    }

    const handleScore = (e) => {
        if(e.target.value === ''){
            setScoreError(true);
            return
        }
        
        if((/\D/.test(e.target.value))){
            setScoreError(true);
            return
        }

        if(e.target.value > total){
            setScoreError(true);
            return
        }


        setScoreError(false);
        setCurrScore(e.target.value);
    }

    const handleCancel = () => {
        setOpen(false);
    }
    const handleSubmit = () => {
        const newStats = {
            rank: currRank,
            percentile: currPercentile,
            correct: currScore,
            total: total
        }
        setStats(newStats);
        setOpen(false);
    }
    
    const handleClickOutside = (event) => {
        if (updateRef.current && !updateRef.current.contains(event.target)) {
            setOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    

  return (
    <div ref={updateRef} className="popup-card bg-white rounded-lg border-[1px]  p-8 space-y-8">

        <div className="flex justify-between items-center">
            <h1 className="text-[24px] font-bold">Update Scores</h1>
            <Image src={html} width={40} height={40} alt="html" />
        </div>

        <div>

            <div className="flex justify-between gap-8">
                <div className="flex gap-3 items-center">
                    <div className="bg-blue-800 text-white font-semibold p-1 w-[25px] h-[25px] rounded-full flex justify-center items-center"><p>1</p></div>

                    <p>Update your <span className="font-bold">Rank</span></p>

                </div>

                <div>
                    <input 
                        className={`w-[250px] border-[2px]  p-3 rounded-lg focus:outline-none ${rankError ? "border-red-600" : "border-blue-200"}`}
                        type="string" 
                        defaultValue={currRank}  
                        onChange={(e) => handleRank(e)} 

                    />
                    <p className={`text-red-600 text-xs ${rankError ? "block" : "hidden"}`}>required | should be number</p>
                </div>

            </div>

        </div>

        <div>

            <div className="flex justify-between gap-8">
                <div className="flex gap-3 items-center">
                    <div className="bg-blue-800 text-white font-semibold p-1 w-[25px] h-[25px] rounded-full flex justify-center items-center"><p>2</p></div>

                    <p>Update your <span className="font-bold">Percentile</span></p>

                </div>

                <div>
                    <input 
                        className={`w-[250px] border-[2px]  p-3 rounded-lg focus:outline-none ${percentileError ? "border-red-600" : "border-blue-200"}`}
                        type="string" 
                        defaultValue={currPercentile}  
                        onChange={(e) => handlePercentile(e)} 

                    />
                    <p className={`text-red-600 text-xs ${percentileError ? "block" : "hidden"}`}>required | percentile 0-100</p>
                </div>

            </div>

        </div>

        <div>

            <div className="flex justify-between gap-8">
                <div className="flex gap-3 items-center">
                    <div className="bg-blue-800 text-white font-semibold p-1 w-[25px] h-[25px] rounded-full flex justify-center items-center"><p>3</p></div>

                    <p>Update your <span className="font-bold">Current Score {"("}out of {total}{")"}</span></p>

                </div>

                <div>
                    <input 
                        className={`w-[250px] border-[2px]  p-3 rounded-lg focus:outline-none ${scoreError ? "border-red-600" : "border-blue-200"}`}
                        type="string" 
                        defaultValue={currScore}  
                        onChange={(e) => handleScore(e)} 

                    />
                    <p className={`text-red-600 text-xs ${scoreError ? "block" : "hidden"}`}>required | not greater than {total}</p>
                </div>

            </div>

        </div>

        <div className="w-full flex justify-end gap-4">
            <button
                onClick={handleCancel} 
                className="px-4 py-2 border-[2px] font-semibold rounded-lg border-blue-900 text-blue-900 hover:text-blue-700"
            >
                Cancel
            </button>
            <button 
                onClick={handleSubmit}
                className="px-4 py-2 border-[2px] font-semibold rounded-lg bg-blue-900 hover:bg-blue-700 border-black text-white"
            >
                Submit &rarr;
            </button>
        </div>

    </div>
  )
}

export default SkillForm