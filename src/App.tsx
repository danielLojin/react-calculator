import { useState } from "react";
import CalculatorBody from "./components/CalculatorBody";
import History from "./components/History";
import Layout from "./components/Layout";
import { useKey } from "./hooks/useKey";
import Headings from "./components/Headings";
import {
  containsDecimalOrOperationSign,
  containsZeroAndSign,
} from "./helper/helpers";

const KEYS = [
  "numpad0",
  "numpad1",
  "numpad2",
  "numpad3",
  "numpad4",
  "numpad5",
  "numpad6",
  "numpad7",
  "numpad8",
  "numpad9",
  "numpaddivide",
  "numpadmultiply",
  "numpadsubtract",
  "numpadadd",
  "numpaddecimal",
  "numpadenter",
];

function App() {
  const [previousCalculations, setPreviousCalculations] = useState<string[]>(
    []
  );
  const [calcState, setCalcState] = useState<string>("0");

  function addCalculation(calculation: string) {
    setPreviousCalculations((prev) => [...prev, calculation]);
  }

  function clearCalculations() {
    setPreviousCalculations([]);
  }

  function handleClick(button?: string) {
    setCalcState((prev) => {
      if (button === "=" || button === "Enter") {
        addCalculation(`${prev} = ${eval(prev.replaceAll(",", "."))}`);
        return eval(prev.replaceAll(",", ".")).toString();
      }

      // leave 0 in the string if the first button clicked is decimal or operation sign
      if (prev === "0" && containsDecimalOrOperationSign(button!, "isEqual"))
        return prev + button;
      // remove the 0 from the start if the first button clicked is not a decimal or 0
      else if (prev === "0") return button;
      // return the prev string if there is a 0 after operation sign (=> "+0") unless the clicked button is a decimal or operation sign
      else if (
        containsZeroAndSign(prev) &&
        containsDecimalOrOperationSign(button!, "isNotEqual")
      )
        return prev;
      // add the new clicked button to the rest of the string
      else return prev + button;
    });
  }

  function handleReset() {
    setCalcState("0");
  }

  function handleDelete() {
    setCalcState((prev) => {
      if (prev === "0") return "0";
      return prev.slice(0, -1);
    });
  }

  useKey(KEYS, handleClick);
  useKey("Delete", handleReset);
  useKey("Backspace", handleDelete);

  return (
    <Layout>
      <Headings />
      <div className="flex gap-4">
        <CalculatorBody
          calcState={calcState}
          handleClick={handleClick}
          handleReset={handleReset}
          handleDelete={handleDelete}
        />
        <History
          previousCalculations={previousCalculations}
          clearCalculations={clearCalculations}
        />
      </div>
    </Layout>
  );
}

export default App;
