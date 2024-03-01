"use client"
import  {useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About Us",
    "Course",
    "Register",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} style={{margin: "auto 0"}} >
      <NavbarContent className="hidden sm:flex gap-[20px] text-[#a4a4a4]" justify="start">
        <NavbarItem >
          <Link className="text-[#a4a4a4] hover:text-[#6d6d6d]"  href="#about-us">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#courses" className="text-[#a4a4a4] hover:text-[#6d6d6d] ">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#enroll" className="text-[#a4a4a4] hover:text-[#6d6d6d]">
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden" 
        />
        <NavbarBrand  >
          <Image src='/image/otta_logo.png' alt="logo" width={70} height={50} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-black text-white" href="#enroll" variant="solid" radius="none">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? ' foreground' : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full border-b-1 pb-4 border-[#a4a4a4] hover:bg-[#6d6d6d] hover:text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
