"use client"
import { IconType } from 'react-icons';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ICard{
    title: string;
    Icon: IconType;
    value: string; 
}  
  

const SensorCard = ({title, Icon, value}:ICard) => {
  return (
<Card className='w-64 card-background border-none flex flex-col space-y-2 items-center text-white rounded-3xl' >
  <CardHeader>
    <CardTitle className='text-center'>{title} Sensor</CardTitle>
  </CardHeader>
  <CardContent className='flex-1'>
    <Icon fontSize={120} />
  </CardContent>
  <CardFooter>
    <p>{value}</p>
  </CardFooter>
</Card>

  )
}

export default SensorCard