"use client"
import Header from "@/components/Header";
import SensorCard from "@/components/SensorCard";
import { FaFireFlameCurved, FaTemperatureFull, } from "react-icons/fa6";
import { IoRainySharp } from "react-icons/io5";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between background">
      <Header />
      <section className="padding grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-8">
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Temperature" Icon={FaTemperatureFull} value="27 &deg; Celsius" />
      <SensorCard title="Rain Level" Icon={IoRainySharp} value="Rain Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      </section>
     
    </main>
  );
}
