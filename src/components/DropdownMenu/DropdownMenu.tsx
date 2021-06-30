import { useState } from 'react';

import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenu';

import './style.scss';

export function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

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
          <DropdownMenuItem/>
          <DropdownMenuItem/>
          <DropdownMenuItem/>
        </div>
      ) : ( <></> ) }
    </div>
  )
}