
import { statsContext } from '@/app/skill-test/page';
import { LineChart } from '@mui/x-charts/LineChart';
import { useContext } from 'react';
import Image from 'next/image';

import chart from "../../public/assets/chart.png"

const PercentileChart = () => {
    const {stats : {percentile}} = useContext(statsContext);

    const avgPercentile = 72;

    
    return (
        <div className="space-y-3 p-6 px-4 border-[2px] border-gray-500/20 rounded-lg">
            <h1 className='font-bold '>Comparison Graph</h1>

            <div className='flex gap-8 items-center'>
                <p>
                    <span className='font-bold'>You scored {percentile}% percentile </span>
                    which is {percentile > avgPercentile ? 'greater than ' : percentile === avgPercentile ? 'equal to ' : 'lower than '}
                    the average percentile {avgPercentile}% of all the engineers who took this assessment
                </p>

                <div className="bg-gray-100 rounded-full p-4 w-fit">
                    <Image src={chart} width={20} height={20} alt="chart" />
                </div>
            </div>

            <div className='w-full flex justify-between'>
                <LineChart
                    xAxis={[{ data: [1, 10, 20, 30, 40, 60, 70, 80, 90, 100],
                        tickLabelInterval: (value, index) => value%20 === 0
                    }]}
                    series={[
                        {
                            label: 'Number of Students',
                            data: [1, 2, 3, 2, 4, 6, 5, 4, 3, 2],
                        },
                    ]}
                
                    slotProps={{ legend: { hidden: true } }}
                    tooltip={{ trigger: 'axis' }} 
                    width={450}
                    height={350}
                    leftAxis={null}
                />
                
            </div>
        </div>
    )
}

export default PercentileChart;