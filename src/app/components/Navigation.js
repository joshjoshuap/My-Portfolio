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

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Image src={hackerLogo} height={60} width={60} />
          {/* <h3 className="text-white">Joshua Pautanes</h3> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Button className="bg-lightgreen text-white rounded-sm" href="#">
            My Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-blue">
        <NavbarMenuItem className="flex flex-col items-center gap-5">
          <Link className="text-white text-2xl" href="#home">
            Home
          </Link>
          <Link className="text-white text-2xl" href="#about">
            About
          </Link>
          <Link className="text-white text-2xl" href="#skills">
            Skills
          </Link>
          <Link className="text-white text-2xl" href="#projects">
            Projects
          </Link>
          <Link className="text-white text-2xl" href="#contact">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
