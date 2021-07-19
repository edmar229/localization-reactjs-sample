import { useState } from 'react';

import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuIten';
import { useTheme } from '../../hooks/useTheme';
import languageMetadata from "../../localization/translations.json";

import './style.scss';

export function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();

  const languages = Object.entries(languageMetadata);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return(
    <div className={`languageSelector ${theme}`}>
      <button
        className={`${theme}`}
        onClick={() => handleClick()}
      >
        Select your language
      </button>

      { showMenu ? (
        <div className={`dropdown-items ${theme}`}>
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