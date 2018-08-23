import * as React from "react";

interface IProps {
  result: number;
}

const Result: React.SFC<IProps> = result => {
  return (
    <div>
      Result: <span>{result}</span>
    </div>
  );
};

export default Result;
