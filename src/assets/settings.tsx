//imports
import { useState } from "react";
//image imports
import WARIco from "FFXIVIconsJobIcons/01_TANK/Job/Warrior.png";
import GNBIco from "FFXIVIconsJobIcons/01_TANK/Job/Gunbreaker.png";
import DRKIco from "FFXIVIconsJobIcons/01_TANK/Job/DarkKnight.png";
import PLDIco from "FFXIVIconsJobIcons/01_TANK/Job/Paladin.png";
import SGEIco from "FFXIVIconsJobIcons/02_HEALER/Job/Sage.png";
import WHMIco from "FFXIVIconsJobIcons/02_HEALER/Job/WhiteMage.png";
import ASTIco from "FFXIVIconsJobIcons/02_HEALER/Job/Astrologian.png";
import SCHIco from "FFXIVIconsJobIcons/02_HEALER/Job/Scholar.png";
import RPRIco from "FFXIVIconsJobIcons/03_DPS/Job/Reaper.png";
import SAMIco from "FFXIVIconsJobIcons/03_DPS/Job/Samurai.png";
import DRGIco from "FFXIVIconsJobIcons/03_DPS/Job/Dragoon.png";
import NINIco from "FFXIVIconsJobIcons/03_DPS/Job/Ninja.png";
import MNKIco from "FFXIVIconsJobIcons/03_DPS/Job/Monk.png";
import DNCIco from "FFXIVIconsJobIcons/03_DPS/Job/Dancer.png";
import MCHIco from "FFXIVIconsJobIcons/03_DPS/Job/Machinist.png";
import BRDIco from "FFXIVIconsJobIcons/03_DPS/Job/Bard.png";
import SMNIco from "FFXIVIconsJobIcons/03_DPS/Job/Summoner.png";
import RDMIco from "FFXIVIconsJobIcons/03_DPS/Job/RedMage.png";
import BLMIco from "FFXIVIconsJobIcons/03_DPS/Job/BlackMage.png";

export const customList = [];

export default function SettingsMenu() {
  const [isDisplayed, setDisplayed] = useState(false);

  return (
    <>
      <div>
        <ol id="settings-menu">
          <li>
            <button>
              <img src={WARIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={GNBIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={DRKIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={PLDIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={SGEIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={WHMIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={ASTIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={SCHIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={RPRIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={SAMIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={DRGIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={NINIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={MNKIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={DNCIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={MCHIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={BRDIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={SMNIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={RDMIco} />
            </button>
          </li>
          <li>
            <button>
              <img src={BLMIco} />
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
