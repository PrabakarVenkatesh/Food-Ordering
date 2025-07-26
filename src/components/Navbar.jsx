import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlERRYmFAppRLJUU7Ki5EMSqOnDXCtW8FrgA&s"
          ></img>
          <a href="/Home">
            <IoHomeSharp />
            Home
          </a>
          <a href="/About">About</a>
          <a  href="/Contact">
            <IoIosContact />
            Contact
          </a>
             <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Navbar;