"use client"

import SkillWiseAnalysis from "@/components/skillWiseAnalysis"
import { useEffect } from "react"

const Home = () => {

  useEffect(()=> {
    window.location.replace('/skill-test')
  }, [])

  return (
    <div className="h-[200vh]">
      <SkillWiseAnalysis />
    </div>
  )
}

export default Home