import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as ScrollLink } from "react-scroll";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
const MenuDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          id="radix-:r5:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <img
            alt="menu"
            fetchPriority="high"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            src={Menu}
            style={{ color: "transparent" }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white font-everett ">
        <DropdownMenuItem className="text-base">
          <Link to="/">Bridge assets</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          <Link to="/transactions">Transactions</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          <a
            target="_blank"
            href="https://discord.com/channels/916379725201563759/1245105348646273134"
          >
            Support
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base">
          <ScrollLink
            className="cursor-pointer"
            to="faq"
            // smooth={true}
            duration={300}
          >
            FAQ
          </ScrollLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuDropdown;
