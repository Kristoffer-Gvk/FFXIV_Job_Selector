//import jobs from "./data/data";
import { magicNumber } from "./utility/utility";
import { jobs, tanks, healers, melee, ranged, magic } from "./data/data";
import { DPS } from "./data/DPS";
import { useState } from "react";
import AllRounderIco from "./FFXIVIconsJobIcons/All-Rounder_Icon_1.png";
import DPSIco from "./FFXIVIconsJobIcons/00_ROLE/DPSRole.png";
import MeleeIco from "./FFXIVIconsJobIcons/Melee_DPS_Icon_1.png";
import RangedIco from "./FFXIVIconsJobIcons/Physical_Ranged_DPS_Icon_1.png";
import MagicIco from "./FFXIVIconsJobIcons/Magic_Ranged_DPS_Icon_1.png";
import TankIco from "./FFXIVIconsJobIcons/00_ROLE/TankRole.png";
import HealerIco from "./FFXIVIconsJobIcons/00_ROLE/HealerRole.png";
import meteor from "./FFXIVMeteo.svg";

export default function RandomJob() {
  const [index, setIndex] = useState(magicNumber(18, 0));
  const [vis, setVis] = useState(false);
  const [first, isFirst] = useState(true);
  const [jobType, setJobType] = useState("");
  const [jobArray, setJobArray] = useState(DPS);

  function handleRandomclick() {
    setVis(true);
    isFirst(false);
    switch (jobType) {
      case "DPS":
        setIndex(magicNumber(10, 0)); /*18, 8*/
        break;
      case "melee":
        setIndex(magicNumber(4, 0)); /*12, 8*/
        break;
      case "ranged":
        setIndex(magicNumber(2, 0)); /*15, 13 */
        break;
      case "magic":
        setIndex(magicNumber(2, 0)); /*18, 16 */
        break;
      case "tank":
        setIndex(magicNumber(3, 0)); /* */
        break;
      case "healer":
        setIndex(magicNumber(3, 0)); /* 7, 4*/
        break;
      default:
        setIndex(magicNumber(18, 0));
        break;
    }
    /*if (jobType === "DPS") {
      setIndex(magicNumber(10, 0));
    } else if (jobType === "melee") {
      setIndex(magicNumber(4, 0));
    } else if (jobType === "ranged") {
      setIndex(magicNumber(2, 0));
    } else if (jobType === "magic") {
      setIndex(magicNumber(2, 0));
    } else if (jobType === "tank") {
      setIndex(magicNumber(3, 0));
    } else if (jobType === "healer") {
      setIndex(Math.floor(Math.random() * 3) + 0);
    } else {
      setIndex(magicNumber(18, 0));
    }*/
    console.log("clicked roll", jobType, index);
  }

  return (
    <>
      <h1>{first ? "What are we going to play today?" : "Let's play"}</h1>
      <h2 style={{ visibility: vis ? "visible" : "hidden" }} id="subheader">
        {jobArray[index].jobName}
      </h2>
      <img
        /*style={{visibility: vis ? "visible" : "hidden"}}*/ src={
          first ? meteor : jobArray[index].jobIcon
        }
        alt=""
        id="emblem"
      />
      <button onClick={handleRandomclick}>
        {!jobType
          ? "Please pick a category first"
          : first
          ? `Roll for ${jobType}`
          : "Try again for a different job"}
      </button>
      <div className="jobTypes">
        <button
          onClick={() => {
            setJobType("all"), setJobArray(jobs);
          }}
        >
          <img src={AllRounderIco} title="Allrounder" />
        </button>
        <button
          onClick={() => {
            setJobType("DPS");
            setJobArray(DPS);
          }}
        >
          <img src={DPSIco} title="DPS" />
        </button>
        <button
          onClick={() => {
            setJobType("melee"), setJobArray(melee);
          }}
        >
          <img src={MeleeIco} title="Melee" />
        </button>
        <button
          onClick={() => {
            setJobType("ranged"), setJobArray(ranged);
          }}
        >
          <img src={RangedIco} title="Ranged" />
        </button>
        <button
          onClick={() => {
            setJobType("magic"), setJobArray(magic);
          }}
        >
          <img src={MagicIco} title="Magic" />
        </button>
        <button
          onClick={() => {
            setJobType("tank"), setJobArray(tanks);
          }}
        >
          <img src={TankIco} title="Tank" />
        </button>
        <button
          onClick={() => {
            setJobType("healer");
            setJobArray(healers);
          }}
        >
          <img src={HealerIco} title="Healer" />
        </button>
      </div>
    </>
  );
}
