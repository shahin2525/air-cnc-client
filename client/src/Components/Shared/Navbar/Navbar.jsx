import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropdown from "./menuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo></Logo>
            <Search></Search>
            <MenuDropdown></MenuDropdown>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
