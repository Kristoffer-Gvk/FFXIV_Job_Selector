//import jobs from "./data/data";
import { magicNumber } from "./utility/utility";
import { jobs, tanks, healers, DPS, melee, ranged, magic } from "./data/data";
import { useState } from "react";
import AllRounderIco from "./FFXIVIconsJobIcons/All-Rounder_Icon_1.png";
import DPSIco from "./FFXIVIconsJobIcons/00_ROLE/DPSRole.png";
import MeleeIco from "./FFXIVIconsJobIcons/Melee_DPS_Icon_1.png";
import RangedIco from "./FFXIVIconsJobIcons/Physical_Ranged_DPS_Icon_1.png";
import MagicIco from "./FFXIVIconsJobIcons/Magic_Ranged_DPS_Icon_1.png";
import TankIco from "./FFXIVIconsJobIcons/00_ROLE/TankRole.png";
import HealerIco from "./FFXIVIconsJobIcons/00_ROLE/HealerRole.png";
import meteor from "./FFXIVMeteo.svg";
import rollIco from "./FFXIVIconsJobIcons/05_GATHERER/Fisher.png";

export default function RandomJob() {
  const [index, setIndex] = useState(0);
  const [vis, setVis] = useState(false);
  const [first, isFirst] = useState(true);
  const [jobType, setJobType] = useState("");
  const [jobArray, setJobArray] = useState(jobs);
  const [rolling, setRolling] = useState(false);
  const [rollPrep, setRollPrep] = useState(false);

  function handleRandomclick() {
    setVis(true);
    isFirst(false);
    setRolling(true);
    setRollPrep(false);

    setTimeout(() => {
      let randomNumber = 0;
      switch (jobType) {
        case "any":
          setRolling(false);
          randomNumber = magicNumber(18, 0);
          setIndex(randomNumber);
          break;
        case "DPS":
          setRolling(false);
          randomNumber = magicNumber(10, 0); /*18, 8*/
          setIndex(randomNumber);
          break;
        case "Melee":
          setRolling(false);
          randomNumber = magicNumber(4, 0); /*12, 8*/
          setIndex(randomNumber);
          break;
        case "Ranged":
          setRolling(false);
          randomNumber = magicNumber(2, 0); /*15, 13 */
          setIndex(randomNumber);
          break;
        case "Magic":
          setRolling(false);
          randomNumber = magicNumber(2, 0); /*18, 16 */
          setIndex(randomNumber);
          break;
        case "Tank":
          setRolling(false);
          randomNumber = magicNumber(3, 0); /* */
          setIndex(randomNumber);
          break;
        case "Healer":
          setRolling(false);
          randomNumber = magicNumber(3, 0); /* 7, 4*/
          setIndex(randomNumber);
          break;
        default:
          break;
      }
    }, 1000);

    /*if (jobType === "DPS") {
      setIndex(magicNumber(10, 0));
    } else if (jobType === "Melee") {
      setIndex(magicNumber(4, 0));
    } else if (jobType === "Ranged") {
      setIndex(magicNumber(2, 0));
    } else if (jobType === "Magic") {
      setIndex(magicNumber(2, 0));
    } else if (jobType === "Tank") {
      setIndex(magicNumber(3, 0));
    } else if (jobType === "Healer") {
      setIndex(Math.floor(Math.random() * 3) + 0);
    } else {
      setIndex(magicNumber(18, 0));
    }*/

    console.log("clicked roll", jobType, index, jobArray, jobArray[index].jobName);
  }

  return (
    <>
      <h1>{first ? "What are we going to play today?" : "Let's play"}</h1>
      <h2 style={{ visibility: vis ? "visible" : "hidden" }} id="subheader">
        {rolling ? "Rolling" : rollPrep ? "Please roll:" : jobArray[index].jobName}
      </h2>
      <img
        className={rolling ? "roll" : rollPrep ? "rollPrep" : "rolled"}
        src={first ? meteor : rolling ? rollIco : rollPrep ? rollIco : jobArray[index].jobIcon}
        alt=""
        id="emblem"
      />
      <button onClick={handleRandomclick}>
        {!jobType
          ? "Please pick a category first"
          : first
          ? `Roll for ${jobType} job`
          : `Try again for a different ${jobType} job`}
      </button>
      <div className="jobTypes">
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("any"),
              setJobArray(jobs),
              handleRandomclick;
          }}
        >
          <img src={AllRounderIco} title="Allrounder" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true), setIndex(0), setJobType("DPS"), setJobArray(DPS), handleRandomclick;
          }}
        >
          <img src={DPSIco} title="DPS" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("Melee"),
              setJobArray(melee),
              handleRandomclick;
          }}
        >
          <img src={MeleeIco} title="Melee" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("Ranged"),
              setJobArray(ranged),
              handleRandomclick;
          }}
        >
          <img src={RangedIco} title="Ranged" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("Magic"),
              setJobArray(magic),
              handleRandomclick;
          }}
        >
          <img src={MagicIco} title="Magic" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("Tank"),
              setJobArray(tanks),
              handleRandomclick;
          }}
        >
          <img src={TankIco} title="Tank" />
        </button>
        <button
          onClick={() => {
            setRollPrep(true),
              setIndex(0),
              setJobType("Healer"),
              setJobArray(healers),
              handleRandomclick;
          }}
        >
          <img src={HealerIco} title="Healer" />
        </button>
      </div>
    </>
  );
}
