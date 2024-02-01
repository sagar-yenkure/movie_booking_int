import { createContext, useState } from "react";

export const show_context = createContext(null);

export const ShowProvider = (props) => {
  const [showsummery, setshowsummery] = useState({});
  const [modal, setmodal] = useState(false);

  return (
    <show_context.Provider
      value={{ showsummery, setshowsummery, modal, setmodal }}
    >
      {props.children}
    </show_context.Provider>
  );
};
