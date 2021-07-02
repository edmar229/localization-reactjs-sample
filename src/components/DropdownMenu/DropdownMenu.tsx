import { useState } from 'react';

import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuIten';
import languageMetadata from "../../localization/translations.json";

import './style.scss';

export function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const languages = Object.entries(languageMetadata);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return(
    <div id="languageSelector">
      <button  
        onClick={() => handleClick()}
      >
        Select your language
      </button>

      { showMenu ? (
        <div className="dropdown-items">
          { languages.map((language, index) => {
            return <DropdownMenuItem code={language[0]} key={index}>
              {language[1].language}
            </DropdownMenuItem>
          }) }
        </div>
      ) : ( <></> ) }
    </div>
  )
}