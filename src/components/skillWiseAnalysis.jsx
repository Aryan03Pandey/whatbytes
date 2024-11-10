import Progress from "./progress";

const skills = [
    {
        text: "HTML Tools, Forms, History",
        percentageComplete: 80,
        color: "#3b7df5"
    },
    {
        text: "Tags and References in HTML",
        percentageComplete: 60,
        color: "#ff8536"
    },
    {
        text: "Tables and References in HTML",
        percentageComplete: 24,
        color: "#fa5353"
    },
    {
        text: "Tables and CSS Basics",
        percentageComplete: 96,
        color: "#29c165"
    },
]

const SkillWiseAnalysis = () => {

  return (
    <div className="w-full p-8 border-[2px] border-gray-500/20 rounded-lg ">
        <h1 className="font-bold mb-10">Syllabus Wise Analysis</h1>

        <div className="flex flex-col gap-4">
            {

            skills.map((skill, index) => {
                return(
                    <Progress 
                        key={index}
                        percentageCompleted={skill.percentageComplete}
                        color={skill.color}
                        text={skill.text}
                    />
                )
            })

            }
        </div>
    </div>
  )
}

export default SkillWiseAnalysis