"use client";
import { useEffect, createContext, useState } from "react";
import Modal from "react-modal";

export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    Component: null,
    props: {},
    isOpen: false,
  });

  const modalStyles = {
    content: {
      maxWidth: "600px",
      margin: "auto",
      borderRadius: "10px",
      padding: "20px",
    },
  };

  const openModal = (Component, props = {}) => {
    setModalState({ isOpen: true, Component, props });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, Component: null, props: {} });
  };

  //   useEffect(() => {
  //     Modal.setAppElement("#__next");
  //   }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalState.isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={modalStyles}
        ariaHideApp={false}
      >
        {modalState.Component}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
