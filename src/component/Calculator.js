import React, { useState } from "react";
import "./Style.css";

const Calculator = () => {
  const [res, setRes] = useState("");

  const handleClick = (e) => {
    setRes(res.concat(e.target.name));
  };

  const clearData = () => {
    setRes("");
  };

  const backspaceSData = () => {
    setRes(res.slice(0, res.length - 1));
  };

  const calculate = () => {
    try {
      setRes(eval(res).toString());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Calculator Made using React JS</h1>
      <div className="container">
        <form>
          <input type="text" value={res} />
        </form>

        <div className="buttons">
          <button onClick={clearData} className="mainbutton" id="clear">
            clear
          </button>
          <button onClick={backspaceSData} id="back" className="mainbutton">
            c
          </button>
          <button onClick={handleClick} name="/" className="mainbutton">
            &divide;
          </button>
          <button onClick={handleClick} name="7">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button onClick={handleClick} name="*" className="mainbutton">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button onClick={handleClick} name="-" className="mainbutton">
            &ndash;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button onClick={handleClick} name="+" className="mainbutton">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button
            name="="
            id="result"
            className="mainbutton"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
