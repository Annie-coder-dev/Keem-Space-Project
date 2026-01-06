import { IoMenu } from "react-icons/io5";
import { Logo } from "./Logo";
import "../CSS/Header.css";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { MenuOpen } from "./MenuOpen";
import Links from "./Links";

export function Header() {
  const [menu, setMenu] = useState(false);

  function handleToggle() {
    setMenu(!menu);
  }

  return (
    <header>
      <Logo />
      {/* For the desktop links */}
      <nav>
        <Links />
      </nav>

      <div className="menu" onClick={handleToggle}>
        {menu ? <RxCross2 /> : <IoMenu className="menu-icon" />}
      </div>
      {menu && <MenuOpen closeMenu={() => setMenu(false)} />}
    </header>
  );
}

{
  /* <IoMenu className="menu" />
.menu {
    display: none;
  }
  
  @media (max-width: 768px) {
    .menu {
      display: block;
    }
  }
   */
}
