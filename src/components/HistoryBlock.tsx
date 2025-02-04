import { useState } from "react";

function HistoryBlock({ calculation }: { calculation: string }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [calc, result] = calculation.split("=");

  return (
    <li
      className={`history-list-item group ${
        isExpanded ? "history-list-item-active" : ""
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <p className={`${isExpanded ? "break-words" : "truncate"} `}>
        {calc.replace(".", ",")}
      </p>
      <p className={`${isExpanded ? "break-words" : "truncate"}`}>
        {`= ${result.replace(".", ",")}`}
      </p>
    </li>
  );
}

export default HistoryBlock;
