import { Delete, X } from "lucide-react";
import CalculatorBlock from "./CalculatorBlock";

const calculatorButton = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ",",
  "=",
  "+",
];

function CalculatorBody({
  calcState,
  handleClick,
  handleReset,
  handleDelete,
}: {
  calcState: string;
  handleClick: (button: string) => void;
  handleReset: () => void;
  handleDelete: () => void;
}) {
  return (
    <div className="h-fit w-fit bg-gray-300 dark:bg-gray-900 rounded-xl p-4 space-y-6 max-w-[350px]">
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl items-center justify-between h-18 p-2">
        <div className="flex items-center gap-1">
          <button
            className="text-gray-800 dark:text-gray-100 text-3xl cursor-pointer font-bold ml-2"
            onClick={handleReset}
          >
            <X />
          </button>
          <button
            className="text-gray-800 dark:text-gray-100 text-3xl cursor-pointer"
            onClick={handleDelete}
          >
            <Delete />
          </button>
        </div>

        <input
          type="text"
          className="text-gray-800 dark:text-gray-100 text-3xl text-right w-full"
          value={calcState.toString().replaceAll(".", ",")}
          disabled
        />
      </div>

      <div className="grid grid-cols-4 gap-1 place-items-center">
        {calculatorButton.map((button: string) => (
          <CalculatorBlock key={button} button={button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default CalculatorBody;
