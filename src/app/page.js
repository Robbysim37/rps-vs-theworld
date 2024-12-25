'use client'

import RPSButton from "@/components/RPSButton";
import Image from "next/image";
import { GiRock } from "react-icons/gi";
import { GiScissors } from "react-icons/gi";
import { GiPaper } from "react-icons/gi";
import { Newsreader } from "next/font/google";

const newsReader = Newsreader()

export default function Home() {
  return (
    <div className=" flex flex-col justify-between items-center w-[100vw] h-[100vh]">

      <h1 id="Title" className={`${newsReader.className} text-5xl mt-[10vh]`} >RPS VS THE WORLD</h1>

      <div id="RPS Buttons" className="flex w-3/4 justify-around">
        <RPSButton icon={GiRock}/>
        <RPSButton icon={GiPaper}/>
        <RPSButton icon={GiScissors}/>
      </div>

      <p className={`${newsReader.className} text-3xl mt-[10vh] mb-[10vh]`}>Computer Winrate: 00%</p>

    </div>
  );
}
