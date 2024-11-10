"use client"

import HtmlSkill from '@/components/skill-test/html';
import SkillForm from '@/components/skill-test/skillsForm';
import Statistics from '@/components/skill-test/stats';
import SkillWiseAnalysis from '@/components/skillWiseAnalysis';
import React, { createContext, useState } from 'react'
import PercentileChart from '@/components/lineChart';
import QuestionWiseAnalysis from '@/components/questionWiseAnalysis';


export const statsContext = createContext();

const SkillTest = () => {

    const defaultStats = {
        rank: '1',
        percentile: '30',
        correct: 10,
        total: 15
    }

    const [stats, setStats] = useState(defaultStats);
    const [open, setOpen] = useState(false);

  return (
    <statsContext.Provider value={{stats, setStats}}>
        <div className='relative p-2'>
          <p className='px-4 mt-2'>Skill Test</p>

          <div className='flex gap-8 p-4 justify-between max-[1100px]:flex-wrap'>

            <div className='max-[1100px]:w-full w-[65%] space-y-4'>
                <HtmlSkill setOpen={setOpen} />
                <Statistics />

                <PercentileChart />
              
            </div>

            <div className='max-[1100px]:w-full w-[35%] space-y-4'>
              <SkillWiseAnalysis />
              <QuestionWiseAnalysis />
            </div>

          </div>
          
          { open && <div className="overlay"></div>}
          { open && <SkillForm open={open} setOpen={setOpen} />}
        </div>
    </statsContext.Provider>
  )
}

export default SkillTest