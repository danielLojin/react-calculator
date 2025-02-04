function CalculatorBlock({
  button,
  onClick,
}: {
  button: string;
  onClick: (button: string) => void;
}) {
  return (
    <button
      className={`bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 h-18 w-18 rounded-full cursor-pointer flex items-center justify-center text-3xl ${
        isNaN(Number(button)) ? "!bg-orange-400" : ""
      }`}
      onClick={() => onClick(button)}
    >
      {button}
    </button>
  );
}

export default CalculatorBlock;
