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
import { Button } from '@nextui-org/button';
import hackerLogo from '/public/image/hacker.png';
import Image from 'next/image';

let navigationList = [
  { link: '#home', title: 'Home' },
  { link: '#about', title: 'About' },
  { link: '#skills', title: 'Skills' },
  { link: '#projects', title: 'Projects' },
  { link: '#contact', title: 'Contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="pt-2 bg-black">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="text-white sm:hidden"
        />
        <NavbarBrand>
          <Image src={hackerLogo} height={60} width={60} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-10 sm:flex">
        {navigationList.map((item) => (
          <NavbarItem>
            <Link
              className="text-xl text-white duration-500 border-b-2 border-transparent hover:text-lightblue hover:border-lightblue"
              href={item.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link
            href="https://mega.nz/file/4OphRTqL#ctmj5gdwPRaXISIY812lEsXgNq76UIujH3wrx7P2jHk"
            target="_blank">
            <Button
              className="text-xl text-white border-2 border-transparent rounded-sm bg-lightblue hover:border-white"
              href="#">
              My Resume
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-10 bg-blue">
        <NavbarMenuItem className="flex flex-col items-center gap-5">
          {navigationList.map((item) => (
            <Link className="text-xl text-white" href={item.link}>
              {item.title}
            </Link>
          ))}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
