'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button, ButtonGroup } from '@nextui-org/button';
import hackerLogo from '/public/image/hacker.png';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="pt-4 bg-blue">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="text-white sm:hidden"
        />
        <NavbarBrand>
          <Image src={hackerLogo} height={60} width={60} />
          {/* <h3 className="text-white">Joshua Pautanes</h3> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-10 sm:flex" justify="center">
        <NavbarItem>
          <Link className="text-xl text-white" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl text-white" href="#about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl text-white" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl text-white" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl text-white" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link
            href="https://mega.nz/file/4OphRTqL#ctmj5gdwPRaXISIY812lEsXgNq76UIujH3wrx7P2jHk"
            target="_blank">
            <Button className="text-xl text-white rounded-sm bg-lightgreen" href="#">
              My Resume
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-blue">
        <NavbarMenuItem className="flex flex-col items-center gap-5">
          <Link className="text-2xl text-white " href="#home">
            Home
          </Link>
          <Link className="text-2xl text-white " href="#about">
            About
          </Link>
          <Link className="text-2xl text-white " href="#skills">
            Skills
          </Link>
          <Link className="text-2xl text-white " href="#projects">
            Projects
          </Link>
          <Link className="text-2xl text-white " href="#contact">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
