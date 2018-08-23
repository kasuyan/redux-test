import * as React from "react";

interface IProps {
  onClick?: () => void;
}

const PlusBtn: React.SFC<IProps> = ({}, onClick) => {
  return <button onClick={onClick}>+</button>;
};

export default PlusBtn;
