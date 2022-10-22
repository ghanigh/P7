import React, { useState } from "react";

const Collapse = (props) => {
  // // Paramètre de Collaps non ouvert
  const [open, setOpen] = useState(false);

  // réglage de l'état opposé de l'effondrement (bascule)
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      {/* au clic, basculer l'effondrement */}
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {/* si le Collaps est ouvert, affichez-le */}
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          // Sinon, affichez ceci
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* si le Collaps est ouvert, affichez-le */}
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;
