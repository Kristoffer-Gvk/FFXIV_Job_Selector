//imports
import { magicNumber } from "./utility/utility";
import { jobs, tanks, healers, DPS, melee, ranged, magic } from "./data/data";
import { useState } from "react";
//image imports
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
  const [start, isStart] = useState(true);
  const [jobType, setJobType] = useState("");
  const [jobArray, setJobArray] = useState(jobs);
  const [rolling, setRolling] = useState(false);
  const [rollPrep, setRollPrep] = useState(false);

  function prepRoll() {
    return setRollPrep(true), setIndex(0);
  }

  function handleRandomclick() {
    setVis(true);
    isStart(false);
    setRolling(true);
    setRollPrep(false);

    setTimeout(() => {
      let randomNumber = 0;
      switch (jobType) {
        case "any":
          setRolling(false);
          randomNumber = magicNumber(21, 0);
          setIndex(randomNumber);
          break;
        case "DPS":
          setRolling(false);
          randomNumber = magicNumber(13, 0); /*18, 8*/
          setIndex(randomNumber);
          break;
        case "Melee":
          setRolling(false);
          randomNumber = magicNumber(6, 0); /*12, 8*/
          setIndex(randomNumber);
          break;
        case "Ranged":
          setRolling(false);
          randomNumber = magicNumber(3, 0); /*15, 13 */
          setIndex(randomNumber);
          break;
        case "Magic":
          setRolling(false);
          randomNumber = magicNumber(4, 0); /*18, 16 */
          setIndex(randomNumber);
          break;
        case "Tank":
          setRolling(false);
          randomNumber = magicNumber(4, 0); /* */
          setIndex(randomNumber);
          break;
        case "Healer":
          setRolling(false);
          randomNumber = magicNumber(4, 0); /* 7, 4*/
          setIndex(randomNumber);
          break;
        default:
          break;
      }
    }, 1000);

    console.log("clicked roll", jobType, index, jobArray, jobArray[index].jobName);
  }

  return (
    <>
      <h1>
        {start
          ? "What are we going to play today?"
          : rolling
          ? "Rolling, Rolling,"
          : rollPrep
          ? "Lets Roll!"
          : "Let's play"}
      </h1>
      <h2 style={{ visibility: vis ? "visible" : "hidden" }} id="subheader">
        {/* Are we rolling? State it. Not the case? Are we preparing for a roll? Prompt user to roll. Not the case? Tell the user which job they got. */}
        {rolling ? "Rolling" : rollPrep ? "Please roll:" : jobArray[index].jobName}
      </h2>
      <img
        //Are we rolling? Set class to "roll" for rolling animation. Not the case? Turn the "roll" class off.
        className={rolling ? "roll" : ""}
        //Is this the first load of the page? We'll start out with the FFXIV emblem, the meteor. Not the case? Are we rolling or preparing for a roll? Set the emblem to the neutral emblem. Not the case? a job should have been selected, so display its icon.
        src={start ? meteor : rolling ? rollIco : rollPrep ? rollIco : jobArray[index].jobIcon}
        alt=""
        id="emblem"
      />
      <button className="randBtn" onClick={handleRandomclick}>
        {!jobType
          ? //has a jobtype been chosen? If not prompt the user to pick a category
            "Please pick a category from the icons below first"
          : //Is this the first roll? Tell the user they can now roll for a job in their chosen category, plain text in case they don't know what they have picked (this application is intended for players of FFXIV who know what these icons are)
          start
          ? `Roll for ${jobType} job`
          : //Otherwise tell the user they can roll again in the same category, or a different one if they've chosen a different category
            `Try again for a different ${jobType} job`}
      </button>
      <div
        className="jobTypes" /* buttons that reset some states and changes categories, which entails changing which array to use and the jobtype to the corresponding type */
      >
        <button
          onClick={() => {
            prepRoll(), setJobType("any"), setJobArray(jobs);
          }}
        >
          <img src={AllRounderIco} title="Allrounder" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("DPS"), setJobArray(DPS);
          }}
        >
          <img src={DPSIco} title="DPS" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("Melee"), setJobArray(melee);
          }}
        >
          <img src={MeleeIco} title="Melee" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("Ranged"), setJobArray(ranged);
          }}
        >
          <img src={RangedIco} title="Ranged" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("Magic"), setJobArray(magic);
          }}
        >
          <img src={MagicIco} title="Magic" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("Tank"), setJobArray(tanks);
          }}
        >
          <img src={TankIco} title="Tank" />
        </button>
        <button
          onClick={() => {
            prepRoll(), setJobType("Healer"), setJobArray(healers);
          }}
        >
          <img src={HealerIco} title="Healer" />
        </button>
      </div>
    </>
  );
}
