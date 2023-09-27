import React, { useEffect } from "react";

import styles from "./modal.module.scss";

function Modal({ children, onClose, innerContainerStyle = {} }) {
  useEffect(() => {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";

    return () => {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    };
  }, []);
  return (
    <div className={styles.modal_container} onClick={onClose}>
      <div
        className={styles.modal_innercontainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={innerContainerStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
