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
<Card className='w-64 card-background border-none flex flex-col items-center text-white rounded-3xl' >
  <CardHeader>
    <CardTitle>{title} Sensor</CardTitle>
  </CardHeader>
  <CardContent>
    <Icon fontSize={120} />
  </CardContent>
  <CardFooter>
    <p>{value}</p>
  </CardFooter>
</Card>

  )
}

export default SensorCard