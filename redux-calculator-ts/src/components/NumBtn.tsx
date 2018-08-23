import * as React from "react";

interface IProps {
  n: number;
  onClick: (num: number) => void;
}

const NumBtn: React.SFC<IProps> = (n, onClick) => {
  return <button onClick={onClick}>{n}</button>;
};

export default NumBtn;
