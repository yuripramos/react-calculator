import React from "react";
import { string } from "prop-types";

import { Result, Line } from "./styles";

function ResultComponent({ result }) {
  return (
    <Result>
      <Line>{result}</Line>
    </Result>
  );
}

export default ResultComponent;

ResultComponent.propTypes = {
  result: string
};
