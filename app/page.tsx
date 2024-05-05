"use client";
import Header from "@/components/Header";
import SensorCard from "@/components/SensorCard";
import { get, ref, onValue } from "firebase/database";
import { database } from "./firebaseConfig";
import { FaFireFlameCurved, FaTemperatureFull, FaWater } from "react-icons/fa6";
import { MdOutlineTouchApp, MdCo2, MdAir } from "react-icons/md";
import { GiPathDistance, GiPoisonGas, GiSmokeBomb } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { IoRainySharp } from "react-icons/io5";
import { BsMoisture, BsSoundwave } from "react-icons/bs";
import { LuGaugeCircle } from "react-icons/lu";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  const [sensorsData, setSensorsData] = useState<any>({});

  useEffect(() => {
    const sensorsRef = ref(database, "/");
    onValue(sensorsRef, (snapshot) => {
      if (snapshot.exists()) {
        setSensorsData(snapshot.val());
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#00255B]">
      <Header />
      <section className="padding grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
        <SensorCard
          title="Flame Sensor"
          Icon={FaFireFlameCurved}
          value={sensorsData.fire}
        />
        <SensorCard
          title="Temperature Sensor"
          Icon={FaTemperatureFull}
          value={`${sensorsData?.temperature} \u00b0 Celsius`}
        />
        <SensorCard
          title="Rain Level Sensor"
          Icon={IoRainySharp}
          value={sensorsData?.rain}
        />
        <SensorCard
          title="Humidity Sensor"
          Icon={WiHumidity}
          value={`${sensorsData.humidity} %`}
        />
        <SensorCard
          title="Touch Sensor"
          Icon={MdOutlineTouchApp}
          value={sensorsData.touch}
        />
        <SensorCard
          title="Ultrasonic Sensor"
          Icon={GiPathDistance}
          value={`${sensorsData.distance} cm`}
        />
        <SensorCard
          title="Air Quality"
          Icon={MdAir}
          value={`${sensorsData.air_quality}`}
        />
        <SensorCard
          title="Carbon Dioxide"
          Icon={MdCo2}
          value={`${sensorsData.CO2} ppm`}
        />
        <SensorCard
          title="Carbon Monoxide"
          Icon={GiPoisonGas}
          value={`${sensorsData.CO} ppm`}
        />
        <SensorCard
          title="Gas Sensor"
          Icon={GiSmokeBomb}
          value={sensorsData.gas}
        />
        <SensorCard
          title="Sound Sensor"
          Icon={BsSoundwave}
          value={sensorsData.sound}
        />
        {/* <SensorCard
          title="Atmospheric Pressure"
          Icon={LuGaugeCircle}
          value={sensorsData.atm}
        /> */}
      </section>
      <Footer />
    </main>
  );
}
