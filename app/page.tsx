"use client"
import Header from "@/components/Header";
import SensorCard from "@/components/SensorCard";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between background">
      <Header />
      <section className="py-16 px-24 grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-8">
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
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      <SensorCard title="Flame" Icon={FaFireFlameCurved} value="Fire Detected" />
      </section>
     
    </main>
  );
}
