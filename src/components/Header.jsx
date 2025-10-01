import UnitDropdownModal from "./UnitDropdownModal"

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <img src="./src/assets/logo.svg" alt="Weather Now Logo" />
      </div>
      <div className="header-right">
        <button buttontype="button" className="units-dropdown-button preset-7">
          <img src="./src/assets/icon-units.svg" alt="Units Icon" />
          Units
          <img src="./src/assets/icon-dropdown.svg" alt="dropdown icon" />
        </button>
        <UnitDropdownModal />
      </div>
    </header>
  )
}
