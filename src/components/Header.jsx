import UnitDropdownModal from "./UnitDropdownMenu"
import React from "react"

export default function Header() {

  const [unitModalOpen, setUnitModalOpen] = React.useState(false);

  function handleClick() {
    setUnitModalOpen(prevUnitModalOpen => !prevUnitModalOpen)
  }

  return (
    <header className="site-header">
      <div className="header-left">
        <img src="./src/assets/logo.svg" alt="Weather Now Logo" />
      </div>
      <div className="header-right">
        <button buttontype="button" className="units-dropdown-button preset-7" onClick={handleClick} aria-label={`Unit menu is currently ${unitModalOpen ? "open": "closed"}. Click this button to ${unitModalOpen ? "close" : "open"}.`}>
          <img src="./src/assets/icon-units.svg" alt="Units Icon" />
          Units
          <img src="./src/assets/icon-dropdown.svg" alt="dropdown icon" />
        </button>
        {unitModalOpen && <UnitDropdownModal />}
      </div>
    </header>
  )
}
