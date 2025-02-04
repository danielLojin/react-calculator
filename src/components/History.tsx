import { X } from "lucide-react";
import HistoryBlock from "./HistoryBlock";

function History({
  previousCalculations,
  clearCalculations,
}: {
  previousCalculations: string[];
  clearCalculations: () => void;
}) {
  const orderedCalculations = [...previousCalculations].reverse();

  return (
    <div className="flex-1 w-[15rem] max-h-[427.9px] bg-gray-300 dark:bg-gray-900 rounded-xl p-4">
      <div className="flex justify-between">
        <h3 className="text-gray-800 dark:text-gray-100 text-3xl font-bold mb-2">
          History
        </h3>
        {previousCalculations.length > 0 && (
          <button className="cursor-pointer" onClick={clearCalculations}>
            <X className="text-gray-800 dark:text-gray-100" />
          </button>
        )}
      </div>

      <ul className="history-list scrollbar-hide h-9/10">
        {orderedCalculations.map((calculation, index) => (
          <HistoryBlock key={index} calculation={calculation} />
        ))}
      </ul>
    </div>
  );
}

export default History;
