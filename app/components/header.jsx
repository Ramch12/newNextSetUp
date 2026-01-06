"use client";

import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import ProfileModal from "@/app/components/ui/modal/profileModal";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux'


const Header = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const uiSelector = useSelector(state=> state.ui);
  console.log("uiSelector", uiSelector)
  const handleMenuOpen = () => {
    openModal(<ProfileModal closeModal={closeModal} />, {
      customContent: {
        top: "33px",
        right: "32px",
        left: "auto",
        bottom: "auto",
        width: "280px",
        height: "auto",
        padding: "0",
        border: "none",
        borderRadius: "0",
      },
      overlay: {
        backgroundColor: "transparent",
        backdropFilter: "none",
        zIndex: 1000,
      },
    });
  };

  return (
    <div className="w-full ">
      <div className="fixed top-10 right-10 cursor-pointer">
        <button onClick={handleMenuOpen} className="rounded cursor-pointer">
          <CgProfile size={30}/>
        </button>
      </div>
      <div>
        <p>Mode and layout are controlled by the redux element</p>
        <p>{uiSelector.theme}</p>
        <p>{uiSelector.layout}</p>
      </div>
    </div>
  );
};

export default Header;
