import React, { useState } from "react";
import { Button, Container, Current, Prev, Screen } from "../styles/Main";

const Header = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [opertions, setOpertions] = useState("");

  const deleteController = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const appendController = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && value.includes(".")) return;
    setCurrent(current + value);
  };


  const allclearHandler = () => {
    setCurrent("");
    setOpertions("");
    setPrevious("");
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOpertions(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOpertions("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (opertions) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      {/* <h1>Calculator App</h1> */}
      <Container>
        <Screen>
          <Prev>
            {previous} {opertions}
          </Prev>
          <Current>{current} </Current>
        </Screen>
        <Button gridSpan={2} onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deleteController}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperationHandler}>
          ÷
        </Button>
        <Button onClick={appendController} data={"7"}>
          7
        </Button>
        <Button onClick={appendController} data={"8"}>
          8
        </Button>
        <Button onClick={appendController} data={"9"}>
          9
        </Button>
        <Button data={"x"} onClick={chooseOperationHandler}>
          x
        </Button>
        <Button onClick={appendController} data={"4"}>
          4
        </Button>
        <Button onClick={appendController} data={"5"}>
          5
        </Button>
        <Button onClick={appendController} data={"6"}>
          6
        </Button>
        <Button data={"+"} onClick={chooseOperationHandler}>
          +
        </Button>
        <Button onClick={appendController} data={"1"}>
          1
        </Button>
        <Button onClick={appendController} data={"2"}>
          2
        </Button>
        <Button onClick={appendController} data={"3"}>
          3
        </Button>
        <Button data={"-"} onClick={chooseOperationHandler}>
          -
        </Button>
        <Button data={"."} onClick={chooseOperationHandler}>
          .
        </Button>
        <Button data={"0"}>0</Button>
        <Button gridSpan={2} onClick={equalHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Header;
