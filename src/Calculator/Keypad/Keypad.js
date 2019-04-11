import React from "react";
import { func } from "prop-types";
import { KeypadWrapper, Button } from "./styles";

function KeyPadComponent({ onClick }) {
  return (
    <KeypadWrapper className="keypad">
      <Button name="(" id="(" onClick={e => onClick(e.target.name)}>
        (
      </Button>
      <Button name="CE" id="CE" onClick={e => onClick(e.target.name)}>
        CE
      </Button>
      <Button name=")" id=")" onClick={e => onClick(e.target.name)}>
        )
      </Button>
      <Button name="C" id="C" onClick={e => onClick(e.target.name)}>
        C
      </Button>
      <br />

      <Button name="1" id="1" onClick={e => onClick(e.target.name)}>
        1
      </Button>
      <Button name="2" id="2" onClick={e => onClick(e.target.name)}>
        2
      </Button>
      <Button name="3" id="3" onClick={e => onClick(e.target.name)}>
        3
      </Button>
      <Button name="+" id="+" onClick={e => onClick(e.target.name)}>
        +
      </Button>
      <br />

      <Button name="4" id="4" onClick={e => onClick(e.target.name)}>
        4
      </Button>
      <Button name="5" id="5" onClick={e => onClick(e.target.name)}>
        5
      </Button>
      <Button name="6" id="6" onClick={e => onClick(e.target.name)}>
        6
      </Button>
      <Button name="-" id="-" onClick={e => onClick(e.target.name)}>
        -
      </Button>
      <br />

      <Button name="7" id="7" onClick={e => onClick(e.target.name)}>
        7
      </Button>
      <Button name="8" id="8" onClick={e => onClick(e.target.name)}>
        8
      </Button>
      <Button name="9" id="9" onClick={e => onClick(e.target.name)}>
        9
      </Button>
      <Button name="*" onClick={e => onClick(e.target.name)}>
        x
      </Button>
      <br />

      <Button name="." onClick={e => onClick(e.target.name)}>
        .
      </Button>
      <Button name="0" id="0" onClick={e => onClick(e.target.name)}>
        0
      </Button>
      <Button name="=" onClick={e => onClick(e.target.name)}>
        =
      </Button>
      <Button name="/" onClick={e => onClick(e.target.name)}>
        ÷
      </Button>
      <br />
    </KeypadWrapper>
  );
}

export default KeyPadComponent;

KeyPadComponent.propTypes = {
  onClick: func
};
