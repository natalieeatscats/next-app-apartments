import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Paragraph;
